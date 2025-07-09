import { LegalDocument } from '../data/unifiedSchema';
import useData from './useData';

// Hook for legal document operations
const useLegalDocuments = () => {
    const { legalDocuments, service, refreshData } = useData();

    return {
        legalDocuments,
        getLegalDocumentById: (id: string) => service.getLegalDocumentById(id),
        getLegalDocumentsByType: (type: string) => service.getLegalDocumentsByType(type),
        createLegalDocument: async (legalDocument: Omit<LegalDocument, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>) => {
            const result = service.createLegalDocument(legalDocument);
            await refreshData();
            return result;
        },
        updateLegalDocument: async (id: string, updates: Partial<Omit<LegalDocument, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>) => {
            const result = service.updateLegalDocument(id, updates);
            await refreshData();
            return result;
        },
        deleteLegalDocument: async (id: string) => {
            const result = service.deleteLegalDocument(id);
            await refreshData();
            return result;
        }
    };
};

export default useLegalDocuments;
