import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen">
            <ContactForm onBack={() => navigate('/')} />
        </main>
    );
};

export default ContactPage;
