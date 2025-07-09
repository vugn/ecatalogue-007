import { Contact } from '../data/unifiedSchema';
import useData from './useData';

// Hook for contact operations
const useContacts = () => {
    const { contacts, service, refreshData } = useData();

    return {
        contacts,
        getContactById: (id: string) => service.getContactById(id),
        createContact: async (contact: Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>) => {
            const result = service.createContact(contact);
            await refreshData();
            return result;
        },
        updateContact: async (id: string, updates: Partial<Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>) => {
            const result = service.updateContact(id, updates);
            await refreshData();
            return result;
        },
        deleteContact: async (id: string) => {
            const result = service.deleteContact(id);
            await refreshData();
            return result;
        }
    };
};

export default useContacts;
