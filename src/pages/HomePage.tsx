import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import { useCart } from '../App';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    return (
        <main>
            <Hero
                onCatalogClick={() => navigate('/katalog')}
                onCertificatesClick={() => navigate('/sertifikat')}
            />
            <ProductCatalog
                onProductSelect={(productId) => navigate(`/produk/${productId}`)}
                onAddToCart={addToCart}
                isHomePage={true}
                onCertificatesClick={() => navigate('/sertifikat')}
            />
        </main>
    );
};

export default HomePage;
