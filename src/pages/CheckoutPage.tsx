import React from 'react';
import { useNavigate } from 'react-router-dom';
import Checkout from '../components/Checkout';
import useCartContext from '../hooks/useCartContext';
import { CartItem } from '../data/unifiedSchema';

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();
    const { items: cartItems, removeItem: removeFromCart } = useCartContext();

    // Clear cart by removing all items
    const handleClearCart = () => {
        cartItems.forEach((item: CartItem) => removeFromCart(item.productId));
    };

    return (
        <main className="min-h-screen">
            <Checkout
                cartItems={cartItems}
                onBack={() => navigate('/keranjang')}
                onClearCart={handleClearCart}
            />
        </main>
    );
};

export default CheckoutPage;
