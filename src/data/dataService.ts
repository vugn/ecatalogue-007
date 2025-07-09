/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppData, BaseEntity, Product, CaseStudy, Certificate, LegalDocument, Contact, User } from './unifiedSchema';
import mockData from './mockData';

// Simple service for CRUD operations on the unified data structure
export class DataService {
    private data: AppData = { ...mockData };

    // Generic methods for CRUD operations
    private getAll<T extends BaseEntity>(collection: T[]): T[] {
        return [...collection].filter(item => item.isActive);
    }

    private getById<T extends BaseEntity>(collection: T[], id: string): T | undefined {
        return collection.find(item => item.id === id && item.isActive);
    }

    private create<T extends BaseEntity>(
        collection: T[],
        item: Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>
    ): T {
        const now = new Date().toISOString();
        const newItem = {
            ...item as any,
            id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
            createdAt: now,
            updatedAt: now,
            isActive: true
        } as T;

        collection.push(newItem);
        return newItem;
    }

    private update<T extends BaseEntity>(
        collection: T[],
        id: string,
        updates: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>
    ): T | undefined {
        const index = collection.findIndex(item => item.id === id && item.isActive);
        if (index === -1) return undefined;

        const updatedItem = {
            ...collection[index],
            ...updates as any,
            updatedAt: new Date().toISOString()
        };

        collection[index] = updatedItem;
        return updatedItem;
    }

    private delete<T extends BaseEntity>(collection: T[], id: string): boolean {
        const index = collection.findIndex(item => item.id === id && item.isActive);
        if (index === -1) return false;

        // Soft delete by setting isActive to false
        collection[index] = {
            ...collection[index],
            isActive: false,
            updatedAt: new Date().toISOString()
        };

        return true;
    }

    // Products
    getAllProducts(): Product[] {
        return this.getAll(this.data.products);
    }

    getProductById(id: string): Product | undefined {
        return this.getById(this.data.products, id);
    }

    getProductsByCategory(category: string): Product[] {
        return this.getAllProducts().filter(product => product.category === category);
    }

    createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): Product {
        return this.create(this.data.products, product);
    }

    updateProduct(id: string, updates: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>): Product | undefined {
        return this.update(this.data.products, id, updates);
    }

    deleteProduct(id: string): boolean {
        return this.delete(this.data.products, id);
    }

    // Case Studies
    getAllCaseStudies(): CaseStudy[] {
        return this.getAll(this.data.caseStudies);
    }

    getCaseStudyById(id: string): CaseStudy | undefined {
        return this.getById(this.data.caseStudies, id);
    }

    getCaseStudiesByProductId(productId: string): CaseStudy[] {
        return this.getAllCaseStudies().filter(caseStudy => caseStudy.productId === productId);
    }

    createCaseStudy(caseStudy: Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): CaseStudy {
        return this.create(this.data.caseStudies, caseStudy);
    }

    updateCaseStudy(id: string, updates: Partial<Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>): CaseStudy | undefined {
        return this.update(this.data.caseStudies, id, updates);
    }

    deleteCaseStudy(id: string): boolean {
        return this.delete(this.data.caseStudies, id);
    }

    // Certificates
    getAllCertificates(): Certificate[] {
        return this.getAll(this.data.certificates);
    }

    getCertificateById(id: string): Certificate | undefined {
        return this.getById(this.data.certificates, id);
    }

    getCertificatesByCategory(category: string): Certificate[] {
        return this.getAllCertificates().filter(certificate => certificate.category === category);
    }

    createCertificate(certificate: Omit<Certificate, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): Certificate {
        return this.create(this.data.certificates, certificate);
    }

    updateCertificate(id: string, updates: Partial<Omit<Certificate, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>): Certificate | undefined {
        return this.update(this.data.certificates, id, updates);
    }

    deleteCertificate(id: string): boolean {
        return this.delete(this.data.certificates, id);
    }

    // Legal Documents
    getAllLegalDocuments(): LegalDocument[] {
        return this.getAll(this.data.legalDocuments);
    }

    getLegalDocumentById(id: string): LegalDocument | undefined {
        return this.getById(this.data.legalDocuments, id);
    }

    getLegalDocumentsByType(type: string): LegalDocument[] {
        return this.getAllLegalDocuments().filter(doc => doc.type === type);
    }

    createLegalDocument(legalDocument: Omit<LegalDocument, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): LegalDocument {
        return this.create(this.data.legalDocuments, legalDocument);
    }

    updateLegalDocument(id: string, updates: Partial<Omit<LegalDocument, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>): LegalDocument | undefined {
        return this.update(this.data.legalDocuments, id, updates);
    }

    deleteLegalDocument(id: string): boolean {
        return this.delete(this.data.legalDocuments, id);
    }

    // Contacts
    getAllContacts(): Contact[] {
        return this.getAll(this.data.contacts);
    }

    getContactById(id: string): Contact | undefined {
        return this.getById(this.data.contacts, id);
    }

    createContact(contact: Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): Contact {
        return this.create(this.data.contacts, contact);
    }

    updateContact(id: string, updates: Partial<Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>): Contact | undefined {
        return this.update(this.data.contacts, id, updates);
    }

    deleteContact(id: string): boolean {
        return this.delete(this.data.contacts, id);
    }

    // Users
    getAllUsers(): User[] {
        return this.getAll(this.data.users);
    }

    getUserById(id: string): User | undefined {
        return this.getById(this.data.users, id);
    }

    createUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): User {
        return this.create(this.data.users, user);
    }

    updateUser(id: string, updates: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>): User | undefined {
        return this.update(this.data.users, id, updates);
    }

    deleteUser(id: string): boolean {
        return this.delete(this.data.users, id);
    }

    // Export data for backup/import
    exportData(): AppData {
        return { ...this.data };
    }

    // Import data
    importData(data: AppData): void {
        this.data = { ...data };
    }
}

// Export singleton instance
export const dataService = new DataService();

export default dataService;
