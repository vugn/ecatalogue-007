
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {
    AppData, Product, CaseStudy, Certificate, LegalDocument, Contact, User
} from '../data/unifiedSchema';
import dataService, { DataService } from '../data/dataService';

// Define the context type
interface DataContextType {
    // Service
    service: DataService;

    // Data slices for easy access
    products: Product[];
    caseStudies: CaseStudy[];
    certificates: Certificate[];
    legalDocuments: LegalDocument[];
    contacts: Contact[];
    users: User[];

    // Loading and error states
    loading: boolean;
    error: Error | null;

    // Refetch data
    refreshData: () => Promise<void>;
}

// Create the context with a default undefined value
const DataContext = createContext<DataContextType | undefined>(undefined);

// Provider props
interface DataProviderProps {
    children: ReactNode;
}

// Provider component
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<AppData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    // Initialize data
    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch all data
    const fetchData = async () => {
        setLoading(true);
        try {
            // In a real application, this would make API calls
            // For now, we're just using our mock data
            const appData = dataService.exportData();
            setData(appData);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        } finally {
            setLoading(false);
        }
    };

    // Value provided by the context
    const value = {
        service: dataService,
        products: data?.products.filter(p => p.isActive) || [],
        caseStudies: data?.caseStudies.filter(cs => cs.isActive) || [],
        certificates: data?.certificates.filter(c => c.isActive) || [],
        legalDocuments: data?.legalDocuments.filter(ld => ld.isActive) || [],
        contacts: data?.contacts.filter(c => c.isActive) || [],
        users: data?.users.filter(u => u.isActive) || [],
        loading,
        error,
        refreshData: fetchData
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

// Export the context for use in hook files
export { DataContext };


