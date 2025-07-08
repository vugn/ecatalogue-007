import React from 'react';
import { useNavigate } from 'react-router-dom';
import Certificates from '../components/Certificates';

const CertificatesPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen">
            <Certificates onBack={() => navigate('/')} />
        </main>
    );
};

export default CertificatesPage;
