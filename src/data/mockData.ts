import {
    AppData,
    Product,
    CaseStudy,
    Certificate,
    LegalDocument,
    ProductType
} from './unifiedSchema';

// Sample product data for PRIMER KOPERASI KARTIKA BANJARMASIN
const products: Product[] = [
    // ATK (Alat Tulis Kantor) Products
    {
        id: 'atk-001',
        createdAt: '2025-01-15T08:30:00Z',
        updatedAt: '2025-06-20T14:45:00Z',
        isActive: true,
        name: 'Paket ATK Lengkap Kantor',
        category: 'ATK',
        slug: 'paket-atk-lengkap-kantor',
        type: ProductType.INDIVIDUAL,
        price: 150000,
        originalPrice: 180000,
        discountPercentage: 16.67,
        rating: 4.8,
        reviews: 45,
        images: [
            'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Paket lengkap alat tulis kantor berkualitas untuk kebutuhan administrasi sehari-hari. Cocok untuk kantor, sekolah, dan keperluan pribadi.',
        shortDescription: 'Paket lengkap ATK berkualitas untuk kebutuhan kantor dan administrasi.',
        features: [
            'Pulpen gel 12 pcs (biru, hitam, merah)',
            'Pensil 2B 6 pcs',
            'Penghapus putih 4 pcs',
            'Penggaris 30cm 2 pcs',
            'Spidol permanent 6 pcs',
            'Kertas HVS A4 1 rim',
            'Map plastik 10 pcs',
            'Stapler + isi staples',
            'Paper clip 1 box',
            'Correction pen 2 pcs'
        ],
        specifications: {
            'Isi Paket': '10 jenis ATK lengkap',
            'Kualitas': 'Grade A, tahan lama',
            'Kemasan': 'Box eksklusif PRIMER KOPERASI KARTIKA BANJARMASIN',
            'Garansi': '30 hari tukar barang rusak',
            'Pengiriman': 'Gratis ongkir area Banjarmasin'
        },
        testimonials: [
            {
                id: 'atk-test-1',
                name: 'Ibu Sari - Guru SD',
                rating: 5,
                comment: 'ATK lengkap dan berkualitas, harga sangat terjangkau. Anak-anak suka dengan kualitas pulpennya.'
            },
            {
                id: 'atk-test-2',
                name: 'Pak Budi - Staff Kantor',
                rating: 5,
                comment: 'Paket ATK yang sangat lengkap, cocok untuk kebutuhan kantor sehari-hari. Harga murah meriah!'
            }
        ],
        faqs: [
            {
                question: 'Apakah bisa beli satuan?',
                answer: 'Ya, kami juga melayani pembelian satuan untuk setiap item ATK. Silakan hubungi admin untuk informasi harga satuan.'
            },
            {
                question: 'Bagaimana cara pembayaran?',
                answer: 'Pembayaran bisa melalui transfer bank, e-wallet (OVO, DANA, GoPay), atau QRIS. Pembayaran tunai juga tersedia untuk pengambilan langsung.'
            }
        ],
        relatedProducts: ['atk-002', 'atk-003'],
        badge: 'Terlaris',
        inStock: true,
        isPublished: true,
        caseStudies: [],
        metadata: {
            seoTitle: 'Paket ATK Lengkap Kantor | PRIMER KOPERASI KARTIKA BANJARMASIN',
            seoDescription: 'Paket ATK lengkap berkualitas dengan harga terjangkau dari PRIMER KOPERASI KARTIKA BANJARMASIN.',
            seoKeywords: ['ATK murah', 'alat tulis kantor', 'koperasi kodim', 'ATK lengkap']
        }
    },
    {
        id: 'atk-002',
        createdAt: '2025-01-16T09:15:00Z',
        updatedAt: '2025-06-18T11:30:00Z',
        isActive: true,
        name: 'Kertas HVS A4 80gsm',
        category: 'ATK',
        slug: 'kertas-hvs-a4-80gsm',
        type: ProductType.INDIVIDUAL,
        price: 45000,
        originalPrice: 55000,
        discountPercentage: 18.18,
        rating: 4.9,
        reviews: 78,
        images: [
            'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Kertas HVS A4 berkualitas tinggi 80gsm, putih bersih, cocok untuk print dokumen, fotokopi, dan keperluan kantor.',
        shortDescription: 'Kertas HVS A4 80gsm berkualitas tinggi untuk keperluan print dan fotokopi.',
        features: [
            'Ukuran A4 standar (21 x 29.7 cm)',
            'Gramatur 80gsm',
            'Warna putih bersih',
            'Tidak mudah macet di printer',
            'Hasil print tajam dan jelas',
            '500 lembar per rim'
        ],
        specifications: {
            'Ukuran': 'A4 (21 x 29.7 cm)',
            'Gramatur': '80gsm',
            'Isi': '500 lembar per rim',
            'Warna': 'Putih',
            'Kemasan': 'Plastik wrapping'
        },
        testimonials: [
            {
                id: 'hvs-test-1',
                name: 'Kantor Kelurahan Sungai Jingah',
                rating: 5,
                comment: 'Kertas berkualitas bagus, tidak mudah macet saat print. Harga lebih murah dari toko lain.'
            }
        ],
        faqs: [
            {
                question: 'Minimal order berapa rim?',
                answer: 'Minimal order 1 rim. Untuk pembelian 5 rim atau lebih, ada diskon tambahan 5%.'
            }
        ],
        relatedProducts: ['atk-001', 'atk-003'],
        badge: 'Hemat',
        inStock: true,
        isPublished: true,
        caseStudies: [],
        metadata: {
            seoTitle: 'Kertas HVS A4 80gsm Murah | PRIMER KOPERASI KARTIKA BANJARMASIN',
            seoDescription: 'Kertas HVS A4 80gsm berkualitas tinggi dengan harga terjangkau dari PRIMER KOPERASI KARTIKA BANJARMASIN.',
            seoKeywords: ['kertas HVS', 'kertas A4', 'kertas murah', 'koperasi kodim']
        }
    },

    // Sembako Products
    {
        id: 'sembako-001',
        createdAt: '2025-01-17T07:45:00Z',
        updatedAt: '2025-06-19T16:20:00Z',
        isActive: true,
        name: 'Beras Premium 5kg',
        category: 'Sembako',
        slug: 'beras-premium-5kg',
        type: ProductType.INDIVIDUAL,
        price: 65000,
        originalPrice: 75000,
        discountPercentage: 13.33,
        rating: 4.7,
        reviews: 156,
        images: [
            'https://images.pexels.com/photos/33239/wheat-field-wheat-yellow-grain.jpg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Beras premium kualitas terbaik, pulen, wangi, dan bergizi tinggi. Langsung dari petani lokal Kalimantan Selatan.',
        shortDescription: 'Beras premium kualitas terbaik, pulen dan wangi dari petani lokal.',
        features: [
            'Beras premium grade A',
            'Pulen dan wangi alami',
            'Bebas kutu dan kotoran',
            'Kemasan higienis 5kg',
            'Langsung dari petani lokal',
            'Sudah disortir berkualitas'
        ],
        specifications: {
            'Berat': '5 kg',
            'Jenis': 'Beras putih premium',
            'Asal': 'Petani lokal Kalsel',
            'Kemasan': 'Karung plastik food grade',
            'Expired': '6 bulan dari tanggal produksi'
        },
        testimonials: [
            {
                id: 'beras-test-1',
                name: 'Ibu Ratna - Ibu Rumah Tangga',
                rating: 5,
                comment: 'Beras pulen dan enak, keluarga suka. Harga lebih murah dari supermarket tapi kualitas sama bagusnya.'
            },
            {
                id: 'beras-test-2',
                name: 'Pak Hendra - Anggota Kodim',
                rating: 5,
                comment: 'Beras berkualitas dengan harga terjangkau. Pelayanan koperasi juga ramah dan cepat.'
            }
        ],
        faqs: [
            {
                question: 'Apakah beras sudah bersih?',
                answer: 'Ya, beras sudah melalui proses sortir dan pembersihan, bebas dari kutu dan kotoran.'
            },
            {
                question: 'Bisa pesan dalam jumlah besar?',
                answer: 'Bisa, untuk pembelian 10 karung atau lebih ada harga khusus. Silakan hubungi admin.'
            }
        ],
        relatedProducts: ['sembako-002', 'sembako-003'],
        badge: 'Populer',
        inStock: true,
        isPublished: true,
        caseStudies: [],
        metadata: {
            seoTitle: 'Beras Premium 5kg Murah | PRIMER KOPERASI KARTIKA BANJARMASIN',
            seoDescription: 'Beras premium kualitas terbaik dengan harga terjangkau dari PRIMER KOPERASI KARTIKA BANJARMASIN.',
            seoKeywords: ['beras murah', 'beras premium', 'sembako murah', 'koperasi kodim']
        }
    },
    {
        id: 'sembako-002',
        createdAt: '2025-01-18T08:20:00Z',
        updatedAt: '2025-06-17T14:15:00Z',
        isActive: true,
        name: 'Minyak Goreng 2L',
        category: 'Sembako',
        slug: 'minyak-goreng-2l',
        type: ProductType.INDIVIDUAL,
        price: 28000,
        originalPrice: 32000,
        discountPercentage: 12.5,
        rating: 4.6,
        reviews: 89,
        images: [
            'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Minyak goreng berkualitas tinggi, jernih, tidak berbau tengik. Cocok untuk menggoreng dan memasak sehari-hari.',
        shortDescription: 'Minyak goreng berkualitas tinggi, jernih dan tidak berbau tengik.',
        features: [
            'Minyak goreng premium 2 liter',
            'Jernih dan tidak berbau',
            'Tahan panas tinggi',
            'Kemasan botol plastik aman',
            'Sudah tersertifikasi BPOM',
            'Cocok untuk segala masakan'
        ],
        specifications: {
            'Volume': '2 liter',
            'Kemasan': 'Botol plastik food grade',
            'Sertifikasi': 'BPOM dan Halal MUI',
            'Expired': '18 bulan dari tanggal produksi'
        },
        testimonials: [
            {
                id: 'minyak-test-1',
                name: 'Ibu Dewi - Pedagang Gorengan',
                rating: 5,
                comment: 'Minyak bagus, tahan lama untuk menggoreng. Harga lebih murah dari distributor lain.'
            }
        ],
        faqs: [
            {
                question: 'Apakah minyak sudah halal?',
                answer: 'Ya, minyak goreng kami sudah bersertifikat halal MUI dan BPOM.'
            }
        ],
        relatedProducts: ['sembako-001', 'sembako-003'],
        badge: 'Hemat',
        inStock: true,
        isPublished: true,
        caseStudies: [],
        metadata: {
            seoTitle: 'Minyak Goreng 2L Murah | PRIMER KOPERASI KARTIKA BANJARMASIN',
            seoDescription: 'Minyak goreng berkualitas tinggi dengan harga terjangkau dari PRIMER KOPERASI KARTIKA BANJARMASIN.',
            seoKeywords: ['minyak goreng murah', 'minyak goreng 2L', 'sembako murah']
        }
    },

    // Jasa Khusus (Premium Services)
    {
        id: 'jasa-keamanan',
        createdAt: '2025-01-19T10:30:00Z',
        updatedAt: '2025-06-16T12:45:00Z',
        isActive: true,
        name: 'Jasa Pengamanan & Keamanan Profesional',
        category: 'Jasa Khusus',
        slug: 'jasa-pengamanan-keamanan-profesional',
        type: ProductType.CUSTOM,
        price: 0, // Harga tidak ditampilkan
        originalPrice: 0,
        discountPercentage: 0,
        rating: 5.0,
        reviews: 12,
        images: [
            'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Layanan pengamanan profesional dengan personel berpengalaman militer. Meliputi pengamanan acara, pengawalan, dan keamanan fasilitas dengan standar tinggi.',
        shortDescription: 'Layanan pengamanan profesional dengan personel berpengalaman militer.',
        features: [
            'Personel berpengalaman militer',
            'Pengamanan acara VIP',
            'Pengawalan personal/korporat',
            'Keamanan fasilitas 24/7',
            'Pelatihan keamanan khusus',
            'Konsultasi keamanan',
            'Sistem komunikasi terintegrasi',
            'Respons cepat situasi darurat'
        ],
        specifications: {
            'Personel': 'Ex-TNI/Polri berpengalaman',
            'Sertifikasi': 'Gada Pratama & Madya',
            'Peralatan': 'Standar militer',
            'Cakupan': 'Lokal & regional',
            'Konsultasi': 'Gratis survey lokasi'
        },
        testimonials: [
            {
                id: 'keamanan-test-1',
                name: 'PT. Banjarmasin Sejahtera',
                rating: 5,
                comment: 'Layanan keamanan sangat profesional. Tim berpengalaman dan dapat diandalkan untuk menjaga keamanan perusahaan.'
            }
        ],
        faqs: [
            {
                question: 'Bagaimana cara mengetahui harga layanan?',
                answer: 'Harga disesuaikan dengan kebutuhan spesifik. Silakan hubungi admin untuk konsultasi dan penawaran khusus.'
            },
            {
                question: 'Apakah tersedia untuk acara mendadak?',
                answer: 'Ya, kami memiliki tim standby untuk kebutuhan mendesak. Hubungi admin untuk ketersediaan.'
            }
        ],
        relatedProducts: ['jasa-pelatihan', 'jasa-pengawalan'],
        badge: 'Premium',
        inStock: true,
        isPublished: true,
        caseStudies: [],
        metadata: {
            seoTitle: 'Jasa Pengamanan Profesional | PRIMER KOPERASI KARTIKA BANJARMASIN',
            seoDescription: 'Layanan pengamanan profesional dengan personel ex-TNI berpengalaman dari PRIMER KOPERASI KARTIKA BANJARMASIN.',
            seoKeywords: ['jasa keamanan', 'pengamanan profesional', 'security ex-TNI', 'kartika banjarmasin']
        }
    },
    {
        id: 'jasa-pelatihan',
        createdAt: '2025-01-20T11:15:00Z',
        updatedAt: '2025-06-15T09:30:00Z',
        isActive: true,
        name: 'Pelatihan Bela Diri & Disiplin Militer',
        category: 'Jasa Khusus',
        slug: 'pelatihan-bela-diri-disiplin-militer',
        type: ProductType.CUSTOM,
        price: 0, // Harga tidak ditampilkan
        originalPrice: 0,
        discountPercentage: 0,
        rating: 4.9,
        reviews: 8,
        images: [
            'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/8611192/pexels-photo-8611192.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Program pelatihan bela diri dan pembentukan karakter dengan metode militer. Cocok untuk individu, kelompok, sekolah, dan perusahaan.',
        shortDescription: 'Program pelatihan bela diri dan pembentukan karakter dengan metode militer.',
        features: [
            'Pelatihan bela diri praktis',
            'Pembentukan mental & disiplin',
            'Metode pelatihan militer',
            'Instruktur ex-TNI berpengalaman',
            'Program custom sesuai kebutuhan',
            'Sertifikat pelatihan',
            'Pelatihan indoor/outdoor',
            'Follow-up program lanjutan'
        ],
        specifications: {
            'Instruktur': 'Ex-TNI bersertifikat',
            'Durasi': 'Fleksibel sesuai program',
            'Peserta': 'Individual/grup',
            'Lokasi': 'Di tempat atau fasilitas kami',
            'Sertifikat': 'Tersedia untuk peserta'
        },
        testimonials: [
            {
                id: 'pelatihan-test-1',
                name: 'SMA Negeri 5 Banjarmasin',
                rating: 5,
                comment: 'Pelatihan sangat bermanfaat untuk siswa. Metode militer membantu membentuk kedisiplinan dan kepercayaan diri.'
            }
        ],
        faqs: [
            {
                question: 'Berapa lama durasi pelatihan?',
                answer: 'Durasi disesuaikan dengan program yang dipilih, mulai dari 1 hari hingga beberapa minggu. Hubungi admin untuk detail program.'
            },
            {
                question: 'Apakah ada batasan usia peserta?',
                answer: 'Program dapat disesuaikan untuk berbagai usia, mulai dari remaja hingga dewasa. Konsultasikan kebutuhan dengan admin.'
            }
        ],
        relatedProducts: ['jasa-keamanan', 'jasa-pengawalan'],
        badge: 'Eksklusif',
        inStock: true,
        isPublished: true,
        caseStudies: [],
        metadata: {
            seoTitle: 'Pelatihan Bela Diri Militer | PRIMER KOPERASI KARTIKA BANJARMASIN',
            seoDescription: 'Program pelatihan bela diri dan disiplin militer dengan instruktur ex-TNI dari PRIMER KOPERASI KARTIKA BANJARMASIN.',
            seoKeywords: ['pelatihan bela diri', 'pelatihan militer', 'disiplin militer', 'kartika banjarmasin']
        }
    },

    // Lainnya Category
    {
        id: 'lainnya-001',
        createdAt: '2025-01-21T13:45:00Z',
        updatedAt: '2025-06-14T15:20:00Z',
        isActive: true,
        name: 'Seragam & Atribut Militer',
        category: 'Lainnya',
        slug: 'seragam-atribut-militer',
        type: ProductType.INDIVIDUAL,
        price: 350000,
        originalPrice: 400000,
        discountPercentage: 12.5,
        rating: 4.8,
        reviews: 23,
        images: [
            'https://images.pexels.com/photos/8611192/pexels-photo-8611192.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Seragam dan atribut militer berkualitas tinggi. Tersedia berbagai ukuran dan jenis seragam sesuai kebutuhan.',
        shortDescription: 'Seragam dan atribut militer berkualitas tinggi dengan berbagai ukuran.',
        features: [
            'Bahan berkualitas tinggi',
            'Jahitan rapi dan kuat',
            'Tersedia berbagai ukuran',
            'Atribut lengkap',
            'Sesuai standar militer',
            'Tahan lama dan nyaman'
        ],
        specifications: {
            'Bahan': 'Drill/Ripstop premium',
            'Ukuran': 'S, M, L, XL, XXL',
            'Warna': 'Sesuai standar TNI',
            'Kelengkapan': 'Seragam + atribut dasar'
        },
        testimonials: [
            {
                id: 'seragam-test-1',
                name: 'Serda Agus - Anggota Kodim',
                rating: 5,
                comment: 'Kualitas seragam bagus, bahan nyaman dan tahan lama. Harga lebih terjangkau dari toko lain.'
            }
        ],
        faqs: [
            {
                question: 'Apakah bisa custom ukuran?',
                answer: 'Ya, kami melayani custom ukuran dengan tambahan biaya. Silakan konsultasi dengan admin.'
            }
        ],
        relatedProducts: ['lainnya-002'],
        badge: 'Kualitas Terjamin',
        inStock: true,
        isPublished: true,
        caseStudies: [],
        metadata: {
            seoTitle: 'Seragam Atribut Militer | PRIMER KOPERASI KARTIKA BANJARMASIN',
            seoDescription: 'Seragam dan atribut militer berkualitas tinggi dari PRIMER KOPERASI KARTIKA BANJARMASIN.',
            seoKeywords: ['seragam militer', 'atribut TNI', 'seragam kodim', 'perlengkapan militer']
        }
    }
];

// Sample case studies (minimal for this context)
const caseStudies: CaseStudy[] = [];

// Sample certificates data
const certificates: Certificate[] = [
    {
        id: 'koperasi-license',
        createdAt: '2025-01-05T10:30:00Z',
        updatedAt: '2025-01-05T10:30:00Z',
        isActive: true,
        title: 'Badan Hukum Koperasi',
        category: 'legal',
        issuer: 'Kementerian Koperasi dan UKM RI',
        issueDate: '2020-03-15',
        expiryDate: '2030-03-15',
        description: 'Badan hukum koperasi yang sah berdasarkan undang-undang koperasi Indonesia.',
        image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'active',
        documentUrl: '#',
        isInternational: false
    },
    {
        id: 'kodim-partnership',
        createdAt: '2025-01-05T11:15:00Z',
        updatedAt: '2025-01-05T11:15:00Z',
        isActive: true,
        title: 'Surat Kemitraan PRIMER KOPERASI KARTIKA BANJARMASIN',
        category: 'partnership',
        issuer: 'Komando Distrik Militer 007 Banjarmasin',
        issueDate: '2020-04-01',
        expiryDate: '2025-04-01',
        description: 'Surat kemitraan resmi dengan PRIMER KOPERASI KARTIKA BANJARMASIN untuk operasional koperasi.',
        image: 'https://images.pexels.com/photos/8611192/pexels-photo-8611192.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'active',
        documentUrl: '#',
        isInternational: false
    }
];

// Sample legal documents data
const legalDocuments: LegalDocument[] = [
    {
        id: 'akta-koperasi',
        createdAt: '2025-01-02T09:00:00Z',
        updatedAt: '2025-01-02T09:00:00Z',
        isActive: true,
        title: 'Akta Pendirian Koperasi',
        type: 'establishment',
        issueDate: '2020-03-15',
        issuingAuthority: 'Kementerian Koperasi dan UKM RI',
        documentNumber: 'KEP-001/KODIM007/III/2020',
        description: 'Akta pendirian PRIMER KOPERASI KARTIKA BANJARMASIN yang disahkan oleh Kementerian Koperasi dan UKM.',
        documentUrl: '#',
        status: 'active'
    },
    {
        id: 'siup-koperasi',
        createdAt: '2025-01-02T09:30:00Z',
        updatedAt: '2025-01-02T09:30:00Z',
        isActive: true,
        title: 'Surat Izin Usaha Perdagangan Koperasi',
        type: 'business-license',
        issueDate: '2020-04-10',
        expiryDate: '2025-04-10',
        issuingAuthority: 'Dinas Koperasi dan UKM Kota Banjarmasin',
        documentNumber: 'SIUP-KOP/007/IV/2020',
        description: 'Izin usaha perdagangan untuk kegiatan koperasi sesuai dengan peraturan yang berlaku.',
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