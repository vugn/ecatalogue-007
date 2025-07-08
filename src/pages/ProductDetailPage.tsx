import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { useCart } from '../App';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    if (!id) {
        navigate('/katalog');
        return null;
    }

    return (
        <main className="min-h-screen">
            <ProductDetail
                productId={id}
                onBack={() => navigate('/katalog')}
                onAddToCart={addToCart}
            />
        </main>
    );
};

export default ProductDetailPage;
