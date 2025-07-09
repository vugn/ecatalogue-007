import { useState, useEffect } from 'react';
import { CartItem, Order } from '../data/unifiedSchema';

// Local storage key
const CART_STORAGE_KEY = 'unit007_cart';

interface CartService {
    // Cart items
    items: CartItem[];

    // Cart operations
    addItem: (item: Omit<CartItem, 'id'>) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    removeItem: (productId: string) => void;
    clearCart: () => void;

    // Cart calculations
    getTotalItems: () => number;
    getTotalPrice: () => number;

    // Checkout
    createOrder: (orderInfo: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'isActive' | 'orderNumber' | 'items' | 'totalAmount'>) => Order;
}

const useCart = (): CartService => {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to parse cart from localStorage', error);
                localStorage.removeItem(CART_STORAGE_KEY);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    // Add an item to the cart
    const addItem = (item: Omit<CartItem, 'id'>) => {
        setItems(prev => {
            const existingItemIndex = prev.findIndex(i => i.productId === item.productId);

            if (existingItemIndex >= 0) {
                // Item exists, update quantity
                const newItems = [...prev];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + (item.quantity || 1)
                };
                return newItems;
            } else {
                // Add new item
                return [
                    ...prev,
                    {
                        ...item,
                        id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
                    }
                ];
            }
        });
    };

    // Update item quantity
    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(productId);
            return;
        }

        setItems(prev => {
            return prev.map(item =>
                item.productId === productId
                    ? { ...item, quantity }
                    : item
            );
        });
    };

    // Remove an item from the cart
    const removeItem = (productId: string) => {
        setItems(prev => prev.filter(item => item.productId !== productId));
    };

    // Clear the cart
    const clearCart = () => {
        setItems([]);
    };

    // Calculate total items
    const getTotalItems = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    // Calculate total price
    const getTotalPrice = () => {
        return items.reduce((total, item) => {
            // For corporate packages, price is already yearly, so don't multiply by duration
            if (item.category === 'corporate') {
                return total + (item.price * item.quantity);
            }
            // For other items, multiply by duration (monthly)
            return total + (item.price * item.quantity * (item.duration || 1));
        }, 0);
    };

    // Create an order from the cart
    const createOrder = (orderInfo: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'isActive' | 'orderNumber' | 'items' | 'totalAmount'>): Order => {
        const now = new Date();
        const orderItems = items.map(item => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            duration: item.duration || 1,
            total: item.price * item.quantity * (item.duration || 1)
        }));

        // Generate a unique order number
        const orderNumber = `ORD-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

        const order: Order = {
            id: `order-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
            orderNumber,
            createdAt: now.toISOString(),
            updatedAt: now.toISOString(),
            isActive: true,
            items: orderItems,
            totalAmount: getTotalPrice(),
            ...orderInfo,
        };

        // Clear the cart after creating an order
        clearCart();

        // In a real app, you would save the order to a database or API here
        return order;
    };

    return {
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        getTotalItems,
        getTotalPrice,
        createOrder
    };
};

export default useCart;
