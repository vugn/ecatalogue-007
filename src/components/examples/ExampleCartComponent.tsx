/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import useCartContext from '../../hooks/useCartContext';
import useProducts from '../../hooks/useProducts';

const ExampleCartComponent: React.FC = () => {
    // Get cart context
    const {
        items,
        addItem,
        updateQuantity,
        removeItem,
        getTotalItems,
        getTotalPrice,
        clearCart
    } = useCartContext();

    // Get products
    const { products } = useProducts();

    // Helper function to format prices
    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    };

    // Handler for adding products to cart
    const handleAddToCart = (product: any) => {
        addItem({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            duration: 1, // Default duration in months
            image: product.images && product.images.length > 0 ? product.images[0] : '',
            category: product.category
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto my-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Shopping Cart Example</h2>

            {/* Products Section */}
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Available Products</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="bg-white border border-slate-200 rounded-lg p-4">
                            <h4 className="font-semibold text-slate-800">{product.name}</h4>
                            <p className="text-slate-600 mb-2">{formatPrice(product.price)}</p>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Section */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-slate-800">Your Cart ({getTotalItems()} items)</h3>
                    <p className="text-lg font-bold text-slate-800">Total: {formatPrice(getTotalPrice())}</p>
                </div>

                {items.length === 0 ? (
                    <div className="text-center py-8 bg-slate-50 rounded-lg">
                        <p className="text-slate-500">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {items.map((item) => (
                            <div key={item.id} className="bg-slate-50 rounded-lg p-4 flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    )}
                                    <div>
                                        <h4 className="font-semibold text-slate-800">{item.name}</h4>
                                        <p className="text-slate-600">{formatPrice(item.price)} x {item.quantity}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                        className="px-2 py-1 bg-slate-200 rounded"
                                    >
                                        -
                                    </button>
                                    <span className="w-6 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                        className="px-2 py-1 bg-slate-200 rounded"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeItem(item.productId)}
                                        className="ml-4 px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-between mt-6">
                            <button
                                onClick={clearCart}
                                className="px-4 py-2 bg-slate-200 text-slate-800 rounded hover:bg-slate-300"
                            >
                                Clear Cart
                            </button>
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExampleCartComponent;
