import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { useContext } from 'react';
import { CartContext } from '../App';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const cart = useContext(CartContext);

    if (!cart) {
        throw new Error('CartContext must be used within a CartProvider');
    }

    if (!id) {
        navigate('/katalog');
        return null;
    }

    return (
        <main className="min-h-screen">
            <ProductDetail
                productId={id}
                onBack={() => navigate('/katalog')}
                onAddToCart={product => cart.addItem({ ...product, quantity: 1 })}
            />
        </main>
    );
};

export default ProductDetailPage;
