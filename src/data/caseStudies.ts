export interface AllocationItem {
    location: string;
    headcount: number;
    description?: string;
}

export interface ShiftAllocation {
    shiftName: string;
    shiftTime: string;
    totalHeadcount: number;
    leadershipStructure: string[];
    allocations: AllocationItem[];
}

export interface SpecialTeam {
    teamName: string;
    totalHeadcount: number;
    roles: Array<{
        title: string;
        headcount: number;
    }>;
    responsibilities: string[];
}

export interface CaseStudy {
    id: string;
    productId: string;
    title: string;
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
    equipment?: Array<{
        category: string;
        items: Array<{
            name: string;
            quantity: number;
            description?: string;
        }>;
    }>;
    serviceScope?: string[];
    testimonial?: {
        quote: string;
        author: string;
        position: string;
        company: string;
    };
    images?: string[];
}

const caseStudies: CaseStudy[] = [
    {
        id: "hospital-security-case",
        productId: "security-corporate",
        title: "Implementasi Keamanan 24/7 di Rumah Sakit Skala Besar",
        clientType: "Rumah Sakit",
        clientIndustry: "Kesehatan",
        totalHeadcount: 55,
        summary: "Pengelolaan sistem keamanan 24/7 untuk rumah sakit berskala besar dengan 5 lantai, meliputi area IGD, poliklinik, dan unit-unit khusus",
        description: "Sebagai gambaran konkret dari kapabilitas layanan keamanan yang ditawarkan, berikut adalah contoh rencana penempatan personel untuk klien berskala besar seperti Rumah Sakit dengan total 55 personel. Rencana ini menunjukkan alokasi sumber daya yang terstruktur untuk memastikan keamanan menyeluruh selama 24 jam.",
        challenges: [
            "Keamanan area sensitif seperti ruang bayi dan ruang bersalin",
            "Akses 24 jam di IGD yang memerlukan kontrol ketat namun tetap responsif",
            "Pengelolaan arus pengunjung di area poliklinik pada jam sibuk",
            "Kebutuhan pengamanan khusus untuk obat-obatan dan peralatan medis mahal"
        ],
        solutions: [
            "Sistem penempatan personel terstruktur dengan 3 shift untuk cakupan 24 jam",
            "Tim khusus non-shift untuk pengawasan dan respons cepat",
            "Penempatan tenaga khusus di area sensitif seperti NICU dan VK",
            "Sistem patroli berkala terintegrasi di seluruh area rumah sakit"
        ],
        results: [
            "Penurunan 85% kasus kehilangan barang di area tunggu",
            "Respons waktu kejadian darurat kurang dari 2 menit",
            "Peningkatan rasa aman bagi staf medis, pasien, dan pengunjung",
            "Sistem pengamanan terukur yang memenuhi standar akreditasi rumah sakit"
        ],
        shifts: [
            {
                shiftName: "Pagi",
                shiftTime: "08.00 - 16.00 WITA",
                totalHeadcount: 26,
                leadershipStructure: ["1 Korlap", "1 Danru"],
                allocations: [
                    { location: "Area Poliklinik (Lantai 1-5)", headcount: 8 },
                    { location: "Area Gedung Utama (Lantai 1-5)", headcount: 8 },
                    { location: "IGD", headcount: 2 },
                    { location: "Pos Jaga IGD (Lantai 1, 3, 4)", headcount: 2 },
                    { location: "Ruang Penunjang (Lab & Nicu Lt. 1-2)", headcount: 2 },
                    { location: "VK (Ruang Bersalin)", headcount: 1 },
                    { location: "NICU", headcount: 1 }
                ]
            },
            {
                shiftName: "Siang",
                shiftTime: "16.00 - 00.00 WITA",
                totalHeadcount: 10,
                leadershipStructure: ["1 Danru"],
                allocations: [
                    { location: "Gedung Poli (Lantai 1, 2, 4)", headcount: 3 },
                    { location: "IGD (Lantai 1-4)", headcount: 2 },
                    { location: "Gedung Utama (Lantai 4)", headcount: 1 },
                    { location: "Gedung Utama (Lantai 5)", headcount: 1 },
                    { location: "VK (Ruang Bersalin)", headcount: 1 },
                    { location: "Ruang Bayi", headcount: 1 }
                ]
            },
            {
                shiftName: "Malam",
                shiftTime: "00.00 - 08.00 WITA",
                totalHeadcount: 9,
                leadershipStructure: ["1 Danru"],
                allocations: [
                    { location: "IGD & Gedung Lt. 1-4", headcount: 5, description: "2 di pos IGD, 3 patroli" },
                    { location: "VK (Ruang Bersalin)", headcount: 1 },
                    { location: "Poli", headcount: 1 },
                    { location: "Ruang Bayi", headcount: 1 }
                ]
            }
        ],
        specialTeams: [
            {
                teamName: "Tim Non-Shift",
                totalHeadcount: 10,
                roles: [
                    { title: "Pengawas", headcount: 2 },
                    { title: "Pamtup (Pengamanan Tertutup)", headcount: 4, },
                    { title: "Danpok (Komandan Kelompok Khusus)", headcount: 1 },
                    { title: "Anggota Khusus", headcount: 3 }
                ],
                responsibilities: [
                    "Pengawasan keseluruhan area rumah sakit",
                    "Patroli bergerak pada titik-titik strategis",
                    "Tim reaksi cepat untuk penanganan situasi darurat",
                    "Pengamanan tertutup untuk investigasi dan pencegahan"
                ]
            }
        ],
        equipment: [
            {
                category: "Peralatan Komunikasi",
                items: [
                    { name: "HT (Handy Talky)", quantity: 55, description: "1 unit untuk setiap personel" },
                    { name: "Radio Base", quantity: 2, description: "Untuk pusat komando" },
                    { name: "Earpiece", quantity: 10, description: "Untuk tim khusus dan pimpinan" }
                ]
            },
            {
                category: "Peralatan Keamanan",
                items: [
                    { name: "Metal Detector Genggam", quantity: 5 },
                    { name: "Tongkat Keamanan", quantity: 20 },
                    { name: "Senter", quantity: 25 },
                    { name: "Rompi Keamanan", quantity: 55 }
                ]
            }
        ],
        testimonial: {
            quote: "Tim keamanan Unit 007 telah memberikan rasa aman yang sangat dibutuhkan bagi tenaga medis dan pasien kami. Sistem penempatan personel mereka sangat terstruktur dan responsif terhadap kebutuhan rumah sakit.",
            author: "dr. Surya Pratama",
            position: "Direktur Umum",
            company: "RS Medika Sejahtera"
        },
        images: [
            "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },
    {
        id: "mall-cleaning-case",
        productId: "cleaning-corporate",
        title: "Pengelolaan Kebersihan Pusat Perbelanjaan Premium",
        clientType: "Shopping Mall",
        clientIndustry: "Retail",
        totalHeadcount: 45,
        summary: "Manajemen kebersihan komprehensif untuk pusat perbelanjaan premium 5 lantai dengan area food court dan bioskop",
        description: "Studi kasus ini menggambarkan implementasi layanan cleaning service untuk pusat perbelanjaan premium dengan luas 50.000 m² yang mencakup ratusan tenant, food court besar, dan bioskop. Tim kami mengelola kebersihan 24/7 dengan standar kualitas tertinggi.",
        challenges: [
            "Area food court dengan traffic tinggi memerlukan pembersihan intensif",
            "Lantai marmer premium membutuhkan perawatan khusus",
            "Area toilet umum membutuhkan pemeliharaan berkelanjutan sepanjang hari",
            "Standar kebersihan yang harus selalu tinggi untuk menjaga image premium mall"
        ],
        solutions: [
            "Sistem 3 shift dengan penekanan pada periode peak hours",
            "Penggunaan peralatan cleaning modern untuk efisiensi dan hasil superior",
            "Tim khusus untuk area-area sensitif seperti food court dan toilet",
            "Penerapan jadwal maintenance rutin dan deep cleaning terjadwal"
        ],
        results: [
            "Skor kepuasan pengunjung terhadap kebersihan meningkat dari 7.5 menjadi 9.3",
            "Pengurangan komplain terkait kebersihan hingga 95%",
            "Efisiensi penggunaan chemical cleaning sebesar 30%",
            "Standar kebersihan yang konsisten bahkan pada peak hours"
        ],
        shifts: [
            {
                shiftName: "Pagi",
                shiftTime: "06.00 - 14.00 WITA",
                totalHeadcount: 20,
                leadershipStructure: ["1 Supervisor", "2 Team Leader"],
                allocations: [
                    { location: "Lantai Ground (Lobby, Koridor)", headcount: 4 },
                    { location: "Lantai 1 (Fashion Area)", headcount: 3 },
                    { location: "Lantai 2 (Fashion & Electronics)", headcount: 3 },
                    { location: "Lantai 3 (Food Court)", headcount: 5 },
                    { location: "Lantai 4 (Entertainment Area & Bioskop)", headcount: 3 },
                    { location: "Toilet (Semua Lantai)", headcount: 2 }
                ]
            },
            {
                shiftName: "Siang",
                shiftTime: "14.00 - 22.00 WITA",
                totalHeadcount: 18,
                leadershipStructure: ["1 Supervisor", "1 Team Leader"],
                allocations: [
                    { location: "Lantai Ground (Lobby, Koridor)", headcount: 3 },
                    { location: "Lantai 1 (Fashion Area)", headcount: 2 },
                    { location: "Lantai 2 (Fashion & Electronics)", headcount: 2 },
                    { location: "Lantai 3 (Food Court)", headcount: 6 },
                    { location: "Lantai 4 (Entertainment Area & Bioskop)", headcount: 3 },
                    { location: "Toilet (Semua Lantai)", headcount: 2 }
                ]
            },
            {
                shiftName: "Malam",
                shiftTime: "22.00 - 06.00 WITA",
                totalHeadcount: 7,
                leadershipStructure: ["1 Team Leader"],
                allocations: [
                    { location: "Deep Cleaning Lantai & Kaca", headcount: 4 },
                    { location: "Toilet General Cleaning", headcount: 2 },
                    { location: "Pengawas Malam", headcount: 1 }
                ]
            }
        ],
        specialTeams: [
            {
                teamName: "Tim Khusus",
                totalHeadcount: 5,
                roles: [
                    { title: "Spesialis Marmer & Granit", headcount: 2 },
                    { title: "Spesialis Kaca & Facade", headcount: 2 },
                    { title: "Teknisi Mesin Cleaning", headcount: 1 }
                ],
                responsibilities: [
                    "Perawatan dan polishing khusus lantai marmer",
                    "Pembersihan kaca eksterior dan facade bangunan",
                    "Pemeliharaan dan perbaikan mesin cleaning",
                    "Penanganan kebersihan untuk event-event khusus"
                ]
            }
        ],
        equipment: [
            {
                category: "Mesin Cleaning",
                items: [
                    { name: "Auto Scrubber", quantity: 4 },
                    { name: "Polishing Machine", quantity: 2 },
                    { name: "Vacuum Cleaner Industrial", quantity: 8 },
                    { name: "High Pressure Washer", quantity: 2 }
                ]
            },
            {
                category: "Chemical & Supplies",
                items: [
                    { name: "Floor Cleaner Eco-Friendly", quantity: 50, description: "Liter/bulan" },
                    { name: "Glass Cleaner", quantity: 30, description: "Liter/bulan" },
                    { name: "Disinfectant", quantity: 45, description: "Liter/bulan" },
                    { name: "Hand Soap", quantity: 60, description: "Liter/bulan" }
                ]
            }
        ],
        testimonial: {
            quote: "Layanan cleaning dari Unit 007 membantu kami mempertahankan image premium mall kami. Mereka sangat responsif dan memahami kebutuhan spesifik area retail dengan traffic tinggi.",
            author: "Hendrik Wijaya",
            position: "Mall Director",
            company: "Grand Metropolitan Mall"
        },
        images: [
            "https://images.pexels.com/photos/5682847/pexels-photo-5682847.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },
    {
        id: "corporate-sales-case",
        productId: "sales-corporate",
        title: "Transformasi Tim Sales Perusahaan Fintech",
        clientType: "Perusahaan Fintech",
        clientIndustry: "Teknologi Finansial",
        totalHeadcount: 35,
        summary: "Pengelolaan dan pelatihan tim sales B2B untuk perusahaan fintech dengan target pasar korporasi dan UKM",
        description: "Studi kasus ini menunjukkan bagaimana Unit 007 membantu mentransformasi tim sales perusahaan fintech untuk mencapai target akuisisi klien korporat dan meningkatkan revenue hingga 225% dalam waktu 12 bulan.",
        challenges: [
            "Tim sales existing fokus pada B2C, perlu transisi ke B2B",
            "Siklus penjualan yang panjang untuk klien korporat",
            "Kurangnya pengetahuan produk teknis di tim sales",
            "Tingkat persaingan yang tinggi di pasar fintech B2B"
        ],
        solutions: [
            "Restrukturisasi tim sales menjadi divisi berdasarkan industri target",
            "Implementasi CRM dan pipeline management tools terintegrasi",
            "Program pelatihan intensif produk fintech dan strategi negosiasi B2B",
            "Sistem insentif berbasis performa dengan milestone pencapaian"
        ],
        results: [
            "Peningkatan revenue 225% dalam 12 bulan",
            "Akuisisi 47 klien korporat baru (target awal: 30)",
            "Pengurangan siklus penjualan dari rata-rata 6 bulan menjadi 3.5 bulan",
            "Peningkatan nilai kontrak rata-rata sebesar 175%"
        ],
        shifts: [
            {
                shiftName: "Tim Akuisisi",
                shiftTime: "Full-time",
                totalHeadcount: 15,
                leadershipStructure: ["1 Head of Acquisition", "3 Team Leaders"],
                allocations: [
                    { location: "Sektor Perbankan & Finansial", headcount: 4 },
                    { location: "Sektor Retail & FMCG", headcount: 4 },
                    { location: "Sektor Teknologi & Startup", headcount: 3 },
                    { location: "Sektor Manufaktur & Industri", headcount: 4 }
                ]
            },
            {
                shiftName: "Tim Account Management",
                shiftTime: "Full-time",
                totalHeadcount: 10,
                leadershipStructure: ["1 Head of Account Management", "2 Senior Account Managers"],
                allocations: [
                    { location: "Key Account (Kontrak >1M)", headcount: 3 },
                    { location: "Mid-tier Account (Kontrak 500K-1M)", headcount: 3 },
                    { location: "Growth Account (Kontrak <500K)", headcount: 4 }
                ]
            },
            {
                shiftName: "Tim Sales Support",
                shiftTime: "Full-time",
                totalHeadcount: 10,
                leadershipStructure: ["1 Head of Sales Support"],
                allocations: [
                    { location: "Product Specialist", headcount: 3 },
                    { location: "Proposal & Documentation", headcount: 3 },
                    { location: "Sales Analytics", headcount: 2 },
                    { location: "CRM Administrator", headcount: 2 }
                ]
            }
        ],
        specialTeams: [
            {
                teamName: "Digital Sales Team",
                totalHeadcount: 5,
                roles: [
                    { title: "Digital Marketing Specialist", headcount: 2 },
                    { title: "Content Creator", headcount: 1 },
                    { title: "Lead Generation Specialist", headcount: 1 },
                    { title: "SEO & SEM Specialist", headcount: 1 }
                ],
                responsibilities: [
                    "Pengembangan strategi digital untuk lead generation",
                    "Pengelolaan kampanye marketing automation",
                    "Pengoptimalan konversi website dan landing page",
                    "Analisis data dan optimasi kampanye digital"
                ]
            }
        ],
        equipment: [
            {
                category: "Digital Tools",
                items: [
                    { name: "CRM Enterprise", quantity: 1, description: "Salesforce Enterprise Edition" },
                    { name: "Sales Automation Tool", quantity: 1, description: "HubSpot Sales Hub" },
                    { name: "Analytics Platform", quantity: 1, description: "Tableau Enterprise" },
                    { name: "Meeting & Demo Software", quantity: 35, description: "Zoom Business" }
                ]
            },
            {
                category: "Hardware",
                items: [
                    { name: "Laptop", quantity: 35 },
                    { name: "Smartphone", quantity: 35 },
                    { name: "Presentation Kit", quantity: 10 },
                    { name: "Mobile Wifi Device", quantity: 15 }
                ]
            }
        ],
        testimonial: {
            quote: "Tim Unit 007 berhasil mentransformasi pendekatan sales kami dari B2C ke B2B dengan sangat efektif. Metodologi mereka sangat data-driven dan hasil yang dicapai jauh melampaui ekspektasi kami.",
            author: "Rina Kartika",
            position: "CEO",
            company: "PayFast Indonesia"
        },
        images: [
            "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    }
];

export default caseStudies;
