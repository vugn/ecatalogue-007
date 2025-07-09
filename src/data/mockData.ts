import {
    AppData,
    Product,
    CaseStudy,
    Certificate,
    LegalDocument,
    ProductType,
    RABConfig
} from './unifiedSchema';

// RAB Configuration for corporate services
const rabConfigs: Record<string, RABConfig> = {
    'security-corporate': {
        currency: 'Rp',
        title: 'Keamanan',
        color: 'blue',
        components: [
            { name: 'Gaji & Tunjangan Tim', percentage: 60, description: 'Anggota Satpam, Komandan Regu, Koordinator Lapangan' },
            { name: 'Seragam & Perlengkapan Standar', percentage: 10, description: 'Seragam, HT, alat patroli, dan perlengkapan operasional' },
            { name: 'Asuransi & BPJS Ketenagakerjaan', percentage: 15, description: 'Kepatuhan hukum dan kesejahteraan tim' },
            { name: 'Pelatihan & Peningkatan Kualifikasi', percentage: 5, description: 'Pelatihan penyegaran, sertifikasi berkala' },
            { name: 'Biaya Operasional & Manajemen Proyek', percentage: 10, description: 'Dukungan kantor, manajemen, dan keuntungan perusahaan' }
        ]
    },
    'cleaning-corporate': {
        currency: 'Rp',
        title: 'Cleaning Service',
        color: 'green',
        components: [
            { name: 'Gaji & Tunjangan Tim', percentage: 60, description: 'Cleaning Staff, Supervisor, Koordinator Area' },
            { name: 'Peralatan & Perlengkapan', percentage: 15, description: 'Mesin cleaning, vacuum, peralatan modern' },
            { name: 'Bahan Kimia & Consumables', percentage: 10, description: 'Eco-friendly products, sanitizer, tissue' },
            { name: 'Asuransi & BPJS Ketenagakerjaan', percentage: 10, description: 'Kepatuhan hukum dan kesejahteraan tim' },
            { name: 'Biaya Operasional & Manajemen', percentage: 5, description: 'Dukungan kantor, manajemen, keuntungan' }
        ]
    },
    'sales-corporate': {
        currency: 'Rp',
        title: 'Sales',
        color: 'purple',
        components: [
            { name: 'Gaji & Tunjangan Tim Sales', percentage: 60, description: 'Sales Executive, Sales Manager, Regional Director' },
            { name: 'Digital Marketing & Advertising', percentage: 15, description: 'Online campaign, content creation, media buy' },
            { name: 'Technology & CRM Platform', percentage: 10, description: 'CRM system, automation tools, analytics' },
            { name: 'Training & Development', percentage: 5, description: 'Sales training, product knowledge, skill development' },
            { name: 'Biaya Operasional & Manajemen', percentage: 10, description: 'Dukungan kantor, manajemen, keuntungan' }
        ]
    }
};

// Sample product data
const products: Product[] = [
    {
        id: 'security-corporate',
        createdAt: '2025-01-15T08:30:00Z',
        updatedAt: '2025-06-20T14:45:00Z',
        isActive: true,
        name: 'Jasa Keamanan Korporat BUMN',
        category: 'Jasa Keamanan',
        slug: 'jasa-keamanan-korporat-bumn',
        type: ProductType.CORPORATE,
        price: 3000000000,
        originalPrice: 3000000000,
        discountPercentage: 0,
        rating: 5.0,
        reviews: 23,
        images: [
            'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/6287318/pexels-photo-6287318.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/6287283/pexels-photo-6287283.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Solusi keamanan komprehensif dengan kontrak tahunan tetap untuk BUMN dan korporat besar. Meliputi penyediaan tim keamanan profesional dengan struktur berlapis untuk menjaga keamanan fasilitas kompleks secara 24/7.',
        shortDescription: 'Solusi keamanan komprehensif dengan kontrak tahunan tetap untuk BUMN dan korporat besar.',
        features: [
            'Kontrak Tahunan Tetap (Fixed Yearly Contract)',
            'Tim Keamanan Berlapis: Anggota, Danru, Korlap',
            'Cakupan Layanan 24/7 dengan Shift Rotasi',
            'Patroli & Monitoring Regular',
            'Personel Terlatih & Tersertifikasi Gada Pratama/Madya',
            'Perlengkapan Lengkap & HT Radio Komunikasi',
            'Respons Cepat untuk Situasi Darurat',
            'Laporan Digital Real-time',
            'Asuransi dan BPJS Ketenagakerjaan Lengkap',
            'Quality Control dan Audit Security'
        ],
        specifications: {
            'Model Kontrak': 'Kontrak Tahunan Tetap (Fixed Yearly)',
            'Durasi Layanan': '24/7 dengan sistem shift',
            'Struktur Tim': 'Anggota Satpam, Danru, Korlap dengan Pengawas',
            'Sertifikasi': 'Gada Pratama, Gada Madya, Beladiri Dasar',
            'Perlengkapan': 'Seragam Standar, HT, Perlengkapan Patroli',
            'Laporan': 'Real-time digital dashboard dan laporan berkala',
            'Response Time': 'Insiden darurat dalam 3 menit',
            'Cakupan Area': 'Unlimited sesuai kontrak'
        },
        testimonials: [
            {
                id: 'sec-test-1',
                name: 'PT Pelabuhan Indonesia',
                rating: 5,
                comment: 'Layanan keamanan sangat profesional dan responsif. Keamanan fasilitas pelabuhan kami terjaga dengan baik 24/7.'
            },
            {
                id: 'sec-test-2',
                name: 'RSUD Ulin Banjarmasin',
                rating: 5,
                comment: 'Keamanan rumah sakit sangat terjaga. Personel selalu siap siaga dan sigap menangani insiden.'
            }
        ],
        faqs: [
            {
                question: 'Apakah personel keamanan sudah tersertifikasi?',
                answer: 'Ya, semua personel keamanan kami telah memiliki sertifikasi Gada Pratama, dan untuk posisi Danru memiliki sertifikasi Gada Madya sesuai standar Polri.'
            },
            {
                question: 'Bagaimana sistem shift yang diterapkan?',
                answer: 'Kami menerapkan sistem 3 shift (pagi, siang, malam) dengan durasi 8 jam per shift, dengan alokasi personel yang disesuaikan dengan kebutuhan keamanan pada masing-masing shift.'
            },
            {
                question: 'Apakah tersedia layanan respons cepat untuk situasi darurat?',
                answer: 'Ya, kami memiliki tim respons cepat yang tersedia 24/7 dengan waktu respons kurang dari 3 menit untuk situasi darurat.'
            }
        ],
        relatedProducts: ['cleaning-corporate', 'sales-corporate'],
        badge: 'BUMN',
        inStock: true,
        isPublished: true,
        caseStudies: ['hospital-security-case'],
        rabConfig: rabConfigs['security-corporate'],
        metadata: {
            seoTitle: 'Jasa Keamanan Korporat BUMN | Unit 007',
            seoDescription: 'Solusi keamanan komprehensif dengan kontrak tahunan tetap untuk BUMN dan korporat besar. Tim keamanan profesional 24/7.',
            seoKeywords: ['keamanan BUMN', 'security corporate', 'jasa keamanan profesional', 'keamanan 24/7']
        }
    },
    {
        id: 'cleaning-corporate',
        createdAt: '2025-01-20T10:15:00Z',
        updatedAt: '2025-06-18T16:30:00Z',
        isActive: true,
        name: 'Jasa Cleaning Service Korporat',
        category: 'Cleaning Service',
        slug: 'jasa-cleaning-service-korporat',
        type: ProductType.CORPORATE,
        price: 1500000000,
        originalPrice: 1500000000,
        discountPercentage: 0,
        rating: 4.9,
        reviews: 34,
        images: [
            'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Solusi cleaning service komprehensif dengan kontrak tahunan tetap untuk fasilitas besar dan kompleks. Meliputi penyediaan tim cleaning profesional dengan peralatan modern untuk menjaga standar kebersihan tinggi.',
        shortDescription: 'Solusi cleaning service komprehensif dengan kontrak tahunan tetap untuk fasilitas besar dan kompleks.',
        features: [
            'Kontrak Tahunan Tetap (Fixed Yearly Contract)',
            'Tim Cleaning Berlapis: Cleaning Staff, Supervisor, Koordinator Area',
            'Cakupan Layanan Lengkap: Daily cleaning, Deep cleaning, Sanitasi',
            'Fasilitas Kompleks: Perkantoran, Rumah Sakit, Mall, Pabrik',
            'Peralatan Modern dan Teknologi Terdepan',
            'Manajemen Waste dan Daur Ulang',
            'Quality Control dan Monitoring',
            'Laporan Digital Real-time',
            'Asuransi dan BPJS Ketenagakerjaan Lengkap',
            'Eco-friendly Products dan Green Cleaning'
        ],
        specifications: {
            'Model Kontrak': 'Kontrak Tahunan Tetap (Fixed Yearly)',
            'Durasi Layanan': 'Disesuaikan kebutuhan (Harian, Mingguan, Bulanan)',
            'Struktur Tim': 'Cleaning Staff, Supervisor Area, Koordinator Lapangan',
            'Sertifikasi': 'Cleaning Professional License, K3, Hygiene Standards',
            'Peralatan': 'Industrial Grade Equipment, Eco-friendly Products',
            'Laporan': 'Real-time digital dashboard dan laporan berkala',
            'Response Time': 'Emergency cleaning dalam 1 jam',
            'Cakupan Area': 'Unlimited sesuai kontrak'
        },
        testimonials: [
            {
                id: 'clean-test-1',
                name: 'RSUD Ulin Banjarmasin',
                rating: 5,
                comment: 'Standar kebersihan medis selalu terjaga. Tim sangat professional dan responsif terhadap kebutuhan khusus rumah sakit.'
            },
            {
                id: 'clean-test-2',
                name: 'Mall Duta Plaza Banjarmasin',
                rating: 5,
                comment: 'Kebersihan mall terjaga dengan baik setiap hari. Pengunjung merasa nyaman dengan lingkungan yang bersih.'
            }
        ],
        faqs: [
            {
                question: 'Apakah bahan kimia yang digunakan ramah lingkungan?',
                answer: 'Ya, kami menggunakan produk eco-friendly yang tersertifikasi dan aman untuk lingkungan namun tetap efektif untuk membersihkan.'
            },
            {
                question: 'Bagaimana penanganan untuk area-area dengan standar kebersihan khusus seperti rumah sakit?',
                answer: 'Kami memiliki SOP khusus untuk fasilitas medis dengan menggunakan disinfektan medis grade dan protokol kebersihan yang sesuai standar akreditasi rumah sakit.'
            },
            {
                question: 'Apakah tersedia layanan deep cleaning berkala?',
                answer: 'Ya, kami menyediakan jadwal deep cleaning berkala yang dapat disesuaikan dengan kebutuhan, biasanya dilakukan mingguan atau bulanan untuk area-area tertentu.'
            }
        ],
        relatedProducts: ['security-corporate', 'sales-corporate'],
        badge: 'Korporat',
        inStock: true,
        isPublished: true,
        caseStudies: ['mall-cleaning-case'],
        rabConfig: rabConfigs['cleaning-corporate'],
        metadata: {
            seoTitle: 'Jasa Cleaning Service Korporat | Unit 007',
            seoDescription: 'Solusi cleaning service komprehensif dengan kontrak tahunan tetap untuk fasilitas besar. Tim cleaning profesional dengan peralatan modern.',
            seoKeywords: ['cleaning service korporat', 'jasa kebersihan', 'cleaning service profesional', 'kebersihan gedung']
        }
    },
    {
        id: 'sales-corporate',
        createdAt: '2025-01-25T09:45:00Z',
        updatedAt: '2025-06-15T11:20:00Z',
        isActive: true,
        name: 'Jasa Outsourcing Sales Korporat',
        category: 'Outsourcing Sales',
        slug: 'jasa-outsourcing-sales-korporat',
        type: ProductType.CORPORATE,
        price: 2000000000,
        originalPrice: 2000000000,
        discountPercentage: 0,
        rating: 4.8,
        reviews: 29,
        images: [
            'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Solusi outsourcing sales komprehensif dengan kontrak tahunan tetap untuk ekspansi bisnis korporat. Meliputi penyediaan tim sales profesional dengan strategi terukur untuk mencapai target revenue yang optimal.',
        shortDescription: 'Solusi outsourcing sales komprehensif dengan kontrak tahunan tetap untuk ekspansi bisnis korporat.',
        features: [
            'Kontrak Tahunan Tetap (Fixed Yearly Contract)',
            'Tim Sales Berlapis: Sales Executive, Sales Manager, Regional Director',
            'Strategi Penjualan Terukur dan Target Revenue Jelas',
            'Digital Marketing dan Online Presence Management',
            'Lead Generation dan Customer Acquisition',
            'CRM Implementation dan Database Management',
            'Market Research dan Competitor Analysis',
            'Performance Analytics dan ROI Tracking',
            'Asuransi dan BPJS Ketenagakerjaan Lengkap',
            'Training dan Development Program Berkelanjutan'
        ],
        specifications: {
            'Model Kontrak': 'Kontrak Tahunan Tetap (Fixed Yearly)',
            'Target Revenue': 'Disesuaikan dengan target perusahaan',
            'Struktur Tim': 'Sales Executive, Sales Manager, Regional Director',
            'Sertifikasi': 'Professional Sales License, Digital Marketing Certified',
            'Tools & Platform': 'CRM System, Marketing Automation, Analytics Tools',
            'Laporan': 'Real-time sales dashboard dan laporan performa',
            'Response Time': 'Lead follow-up dalam 2 jam',
            'Market Coverage': 'Regional dan nasional sesuai kontrak'
        },
        testimonials: [
            {
                id: 'sales-test-1',
                name: 'PT Banjarmasin Port',
                rating: 5,
                comment: 'Tim sales sangat profesional dan berhasil meningkatkan revenue kami 150% dalam setahun. Strategi yang diterapkan sangat efektif.'
            },
            {
                id: 'sales-test-2',
                name: 'CV Borneo Logistics',
                rating: 5,
                comment: 'Ekspansi market berhasil dilakukan dengan baik. Tim sales membantu kami masuk ke segmen B2B yang sebelumnya sulit dijangkau.'
            }
        ],
        faqs: [
            {
                question: 'Bagaimana sistem penentuan target penjualan?',
                answer: 'Target penjualan ditentukan berdasarkan analisis pasar, historis penjualan, dan potensi pasar yang disepakati bersama dengan klien pada awal kontrak.'
            },
            {
                question: 'Apakah tim sales akan berfokus pada area geografis tertentu?',
                answer: 'Ya, kami dapat menyesuaikan fokus area geografis sesuai dengan target pasar yang ingin dijangkau oleh perusahaan Anda.'
            },
            {
                question: 'Bagaimana dengan pelatihan product knowledge untuk tim sales?',
                answer: 'Kami memiliki program pelatihan komprehensif untuk memastikan tim sales memahami produk/jasa klien secara mendalam sebelum terjun ke lapangan.'
            }
        ],
        relatedProducts: ['security-corporate', 'cleaning-corporate'],
        badge: 'Korporat',
        inStock: true,
        isPublished: true,
        caseStudies: ['corporate-sales-case'],
        rabConfig: rabConfigs['sales-corporate'],
        metadata: {
            seoTitle: 'Jasa Outsourcing Sales Korporat | Unit 007',
            seoDescription: 'Solusi outsourcing sales komprehensif untuk ekspansi bisnis korporat. Tim sales profesional dengan strategi terukur.',
            seoKeywords: ['outsourcing sales', 'jasa sales korporat', 'tim sales profesional', 'strategi penjualan']
        }
    }
];

// Sample case studies (imported from the existing case studies data)
import caseStudiesData from './caseStudies';
const caseStudies: CaseStudy[] = caseStudiesData.map(cs => ({
    ...cs,
    createdAt: '2025-01-10T08:00:00Z',
    updatedAt: '2025-06-20T14:45:00Z',
    isActive: true,
    slug: cs.id,
    isPublished: true,
    metadata: {
        seoTitle: cs.title + ' | Unit 007',
        seoDescription: cs.summary
    }
}));

// Sample certificates data
const certificates: Certificate[] = [
    {
        id: 'iso-9001',
        createdAt: '2025-01-05T10:30:00Z',
        updatedAt: '2025-01-05T10:30:00Z',
        isActive: true,
        title: 'ISO 9001:2015 Quality Management System',
        category: 'quality',
        issuer: 'International Organization for Standardization',
        issueDate: '2024-01-15',
        expiryDate: '2027-01-15',
        description: 'Sertifikat sistem manajemen mutu yang memastikan konsistensi layanan berkualitas tinggi.',
        image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'active',
        documentUrl: '#',
        isInternational: true
    },
    {
        id: 'iso-14001',
        createdAt: '2025-01-05T11:15:00Z',
        updatedAt: '2025-01-05T11:15:00Z',
        isActive: true,
        title: 'ISO 14001:2015 Environmental Management',
        category: 'environment',
        issuer: 'International Organization for Standardization',
        issueDate: '2024-02-20',
        expiryDate: '2027-02-20',
        description: 'Sertifikat manajemen lingkungan untuk praktik bisnis yang ramah lingkungan.',
        image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'active',
        documentUrl: '#',
        isInternational: true
    },
    {
        id: 'ohsas-18001',
        createdAt: '2025-01-05T12:00:00Z',
        updatedAt: '2025-01-05T12:00:00Z',
        isActive: true,
        title: 'OHSAS 18001 Occupational Health & Safety',
        category: 'safety',
        issuer: 'British Standards Institution',
        issueDate: '2024-03-10',
        expiryDate: '2027-03-10',
        description: 'Sertifikat sistem manajemen keselamatan dan kesehatan kerja.',
        image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'active',
        documentUrl: '#',
        isInternational: true
    }
];

// Sample legal documents data
const legalDocuments: LegalDocument[] = [
    {
        id: 'siup',
        createdAt: '2025-01-02T09:00:00Z',
        updatedAt: '2025-01-02T09:00:00Z',
        isActive: true,
        title: 'Surat Izin Usaha Perdagangan (SIUP)',
        type: 'business-license',
        issueDate: '2023-06-10',
        expiryDate: '2028-06-10',
        issuingAuthority: 'Dinas Perindustrian dan Perdagangan Kota Banjarmasin',
        documentNumber: 'SIUP-123/456/VII/2023',
        description: 'Izin usaha resmi yang diberikan kepada perusahaan untuk melakukan kegiatan perdagangan.',
        image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
        documentUrl: '#',
        status: 'active'
    },
    {
        id: 'tdp',
        createdAt: '2025-01-02T09:30:00Z',
        updatedAt: '2025-01-02T09:30:00Z',
        isActive: true,
        title: 'Tanda Daftar Perusahaan (TDP)',
        type: 'business-registration',
        issueDate: '2023-06-15',
        expiryDate: '2028-06-15',
        issuingAuthority: 'Dinas Perindustrian dan Perdagangan Kota Banjarmasin',
        documentNumber: 'TDP-789/101/VII/2023',
        description: 'Bukti bahwa perusahaan telah terdaftar resmi di pemerintahan.',
        documentUrl: '#',
        status: 'active'
    },
    {
        id: 'npwp',
        createdAt: '2025-01-02T10:00:00Z',
        updatedAt: '2025-01-02T10:00:00Z',
        isActive: true,
        title: 'Nomor Pokok Wajib Pajak (NPWP) Perusahaan',
        type: 'tax',
        issueDate: '2023-05-20',
        issuingAuthority: 'Direktorat Jenderal Pajak',
        documentNumber: '12.345.678.9-012.000',
        description: 'Nomor identitas wajib pajak sebagai sarana administrasi perpajakan.',
        documentUrl: '#',
        status: 'active'
    },
    {
        id: 'akta',
        createdAt: '2025-01-02T10:30:00Z',
        updatedAt: '2025-01-02T10:30:00Z',
        isActive: true,
        title: 'Akta Pendirian Perusahaan',
        type: 'establishment',
        issueDate: '2023-04-10',
        issuingAuthority: 'Notaris Publik Banjarmasin',
        documentNumber: '45/NOT/IV/2023',
        description: 'Dokumen resmi pendirian perusahaan yang disahkan oleh notaris.',
        documentUrl: '#',
        status: 'active'
    },
    {
        id: 'sbu-security',
        createdAt: '2025-01-02T11:00:00Z',
        updatedAt: '2025-01-02T11:00:00Z',
        isActive: true,
        title: 'Sertifikat Badan Usaha (SBU) Jasa Keamanan',
        type: 'business-certification',
        issueDate: '2024-01-05',
        expiryDate: '2027-01-05',
        issuingAuthority: 'Polri dan Asosiasi Badan Usaha Jasa Pengamanan Indonesia',
        documentNumber: 'SBU-SEC/123/I/2024',
        description: 'Sertifikat badan usaha untuk layanan jasa keamanan profesional.',
        image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
        documentUrl: '#',
        status: 'active'
    }
];

// Complete unified data object
const unifiedData: AppData = {
    products,
    caseStudies,
    certificates,
    legalDocuments,
    contacts: [], // Would be populated from contact form submissions
    users: [] // Would be populated with admin users
};

export default unifiedData;
