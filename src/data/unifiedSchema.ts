// Unified data schema for the entire application
// This can be used as a basis for CRUD operations

// Root data interface
export interface AppData {
    products: Product[];
    caseStudies: CaseStudy[];
    certificates: Certificate[];
    legalDocuments: LegalDocument[];
    contacts: Contact[];
    users: User[];
}

// Base entity interface with common fields for all data types
export interface BaseEntity {
    id: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}

// ------------------------
// Product-related interfaces
// ------------------------

export interface Product extends BaseEntity {
    name: string;
    category: string;
    slug: string;
    type: ProductType;
    price: number;
    originalPrice: number;
    discountPercentage: number;
    rating: number;
    reviews: number;
    images: string[];
    description: string;
    shortDescription: string;
    features: string[];
    specifications: Record<string, string>;
    testimonials: Testimonial[];
    faqs: FAQ[];
    relatedProducts: string[]; // IDs of related products
    badge: string | null;
    inStock: boolean;
    isPublished: boolean;
    caseStudies: string[]; // IDs of related case studies
    rabConfig?: RABConfig; // For corporate products only
    metadata: {
        seoTitle: string;
        seoDescription: string;
        seoKeywords: string[];
    };
}

export enum ProductType {
    INDIVIDUAL = 'individual',
    CORPORATE = 'corporate',
    CUSTOM = 'custom'
}

export interface Testimonial {
    id: string;
    name: string;
    position?: string;
    company?: string;
    avatar?: string;
    rating: number;
    comment: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

// RAB (Rencana Anggaran Biaya) configuration
export interface RABConfig {
    currency: string;
    title: string;
    color: 'blue' | 'green' | 'purple' | 'red';
    components: Array<{
        name: string;
        percentage: number;
        description: string;
    }>;
}

// ------------------------
// Case Study interfaces
// ------------------------

export interface CaseStudy extends BaseEntity {
    productId: string;
    title: string;
    slug: string;
    clientType: string;
    clientIndustry: string;
    totalHeadcount: number;
    summary: string;
    description: string;
    challenges: string[];
    solutions: string[];
    results: string[];
    shifts: ShiftAllocation[];
    specialTeams?: SpecialTeam[];
    equipment?: EquipmentCategory[];
    serviceScope?: string[];
    testimonial?: CaseTestimonial;
    images?: string[];
    isPublished: boolean;
    metadata: {
        seoTitle: string;
        seoDescription: string;
    };
}

export interface ShiftAllocation {
    shiftName: string;
    shiftTime: string;
    totalHeadcount: number;
    leadershipStructure: string[];
    allocations: AllocationItem[];
}

export interface AllocationItem {
    location: string;
    headcount: number;
    description?: string;
}

export interface SpecialTeam {
    teamName: string;
    totalHeadcount: number;
    roles: Array<{
        title: string;
        headcount: number;
        description?: string;
    }>;
    responsibilities: string[];
}

export interface EquipmentCategory {
    category: string;
    items: Array<{
        name: string;
        quantity: number;
        description?: string;
    }>;
}

export interface CaseTestimonial {
    quote: string;
    author: string;
    position: string;
    company: string;
}

// ------------------------
// Certificate interfaces
// ------------------------

export interface Certificate extends BaseEntity {
    title: string;
    category: string;
    issuer: string;
    issueDate: string;
    expiryDate: string;
    description: string;
    image: string;
    status: 'active' | 'expired' | 'pending';
    documentUrl: string;
    certificationNumber?: string;
    isInternational: boolean;
}

// ------------------------
// Legal Document interfaces
// ------------------------

export interface LegalDocument extends BaseEntity {
    title: string;
    type: string;
    issueDate: string;
    expiryDate?: string;
    issuingAuthority: string;
    documentNumber: string;
    description: string;
    image?: string;
    documentUrl: string;
    status: 'active' | 'expired' | 'pending';
}

// ------------------------
// Contact interfaces
// ------------------------

export interface Contact extends BaseEntity {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    status: 'new' | 'read' | 'responded' | 'closed';
    notes?: string;
    responseSent?: boolean;
    responseDate?: string;
}

// ------------------------
// User interfaces
// ------------------------

export interface User extends BaseEntity {
    username: string;
    email: string;
    role: 'admin' | 'editor' | 'viewer';
    firstName: string;
    lastName: string;
    lastLogin?: string;
    isAdmin: boolean;
}

// ------------------------
// Cart interfaces
// ------------------------

export interface CartItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    duration: number; // in months
    image: string;
    category: string;
}

// ------------------------
// Order interfaces
// ------------------------

export interface Order extends BaseEntity {
    orderNumber: string;
    customerId?: string;
    items: OrderItem[];
    companyInfo: {
        companyName: string;
        companyAddress: string;
        companyPhone: string;
        companyEmail: string;
    };
    contactPerson: {
        name: string;
        position: string;
        phone: string;
        email: string;
    };
    serviceDetails: {
        startDate: string;
        notes: string;
    };
    paymentDetails: {
        method: string;
        status: 'pending' | 'paid' | 'failed';
        transactionId?: string;
        paidDate?: string;
    };
    status: 'new' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
    totalAmount: number;
    notes?: string;
}

export interface OrderItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    duration: number;
    total: number;
}

// Example of the complete data structure with mock data
const mockUnifiedData: AppData = {
    products: [
        // Products would go here
    ],
    caseStudies: [
        // Case studies would go here
    ],
    certificates: [
        // Certificates would go here
    ],
    legalDocuments: [
        // Legal documents would go here
    ],
    contacts: [
        // Contact form submissions would go here
    ],
    users: [
        // Admin users would go here
    ]
};

export default mockUnifiedData;
