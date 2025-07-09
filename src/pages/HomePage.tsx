import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import useCartContext from '../hooks/useCartContext';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { addItem } = useCartContext();

    return (
        <main>
            <Hero
                onCatalogClick={() => navigate('/katalog')}
                onCertificatesClick={() => navigate('/sertifikat')}
            />
            <ProductCatalog
                onProductSelect={(productId) => navigate(`/produk/${productId}`)}
                onAddToCart={(product) => addItem({ ...product, quantity: 1 })}
                isHomePage={true}
                onCertificatesClick={() => navigate('/sertifikat')}
            />
        </main>
    );
};

export default HomePage;
