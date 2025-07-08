import React from 'react';
import { useNavigate } from 'react-router-dom';
import Checkout from '../components/Checkout';
import { useCart } from '../App';

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useCart();

    // Clear cart by removing all items
    const handleClearCart = () => {
        cartItems.forEach(item => removeFromCart(item.id));
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
