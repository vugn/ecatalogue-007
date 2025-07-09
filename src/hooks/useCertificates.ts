import { Certificate } from '../data/unifiedSchema';
import useData from './useData';

// Hook for certificate operations
const useCertificates = () => {
    const { certificates, service, refreshData } = useData();

    return {
        certificates,
        getCertificateById: (id: string) => service.getCertificateById(id),
        getCertificatesByCategory: (category: string) => service.getCertificatesByCategory(category),
        createCertificate: async (certificate: Omit<Certificate, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>) => {
            const result = service.createCertificate(certificate);
            await refreshData();
            return result;
        },
        updateCertificate: async (id: string, updates: Partial<Omit<Certificate, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>) => {
            const result = service.updateCertificate(id, updates);
            await refreshData();
            return result;
        },
        deleteCertificate: async (id: string) => {
            const result = service.deleteCertificate(id);
            await refreshData();
            return result;
        }
    };
};

export default useCertificates;
