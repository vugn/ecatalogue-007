import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCatalog from '../components/ProductCatalog';
import Breadcrumb from '../components/Breadcrumb';
import useCartContext from '../hooks/useCartContext';

const CatalogPage: React.FC = () => {
    const navigate = useNavigate();
    const { addItem: addToCart } = useCartContext();

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
                onAddToCart={(product) => addToCart({ ...product, quantity: 1 })}
                isHomePage={false}
            />
        </main>
    );
};

export default CatalogPage;
