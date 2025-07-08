import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCatalog from '../components/ProductCatalog';
import Breadcrumb from '../components/Breadcrumb';
import { useCart } from '../App';

const CatalogPage: React.FC = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    return (
        <main className="min-h-screen pt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumb
                    items={[
                        { label: 'Katalog Produk' }
                    ]}
                />
            </div>
            <ProductCatalog
                onProductSelect={(productId) => navigate(`/produk/${productId}`)}
                onAddToCart={addToCart}
                isHomePage={false}
            />
        </main>
    );
};

export default CatalogPage;
