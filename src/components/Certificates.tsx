import React, { useState } from 'react';
import {
    Shield,
    Award,
    FileText,
    CheckCircle,
    Download,
    Eye,
    Calendar,
    Building,
    ArrowLeft,
    Search,
    Phone
} from 'lucide-react';

interface CertificatesProps {
    onBack: () => void;
}

const Certificates: React.FC<CertificatesProps> = ({ onBack }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const certificates = [
        {
            id: 'iso-9001',
            title: 'ISO 9001:2015 Quality Management System',
            category: 'quality',
            issuer: 'International Organization for Standardization',
            issueDate: '2024-01-15',
            expiryDate: '2027-01-15',
            description: 'Sertifikat sistem manajemen mutu yang memastikan konsistensi layanan berkualitas tinggi.',
            image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800',
            status: 'active',
            documentUrl: '#'
        },
        {
            id: 'iso-14001',
            title: 'ISO 14001:2015 Environmental Management',
            category: 'environment',
            issuer: 'International Organization for Standardization',
            issueDate: '2024-02-20',
            expiryDate: '2027-02-20',
            description: 'Sertifikat manajemen lingkungan untuk praktik bisnis yang ramah lingkungan.',
            image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800',
            status: 'active',
            documentUrl: '#'
        },
        {
            id: 'ohsas-18001',
            title: 'OHSAS 18001 Occupational Health & Safety',
            category: 'safety',
            issuer: 'British Standards Institution',
            issueDate: '2024-03-10',
            expiryDate: '2027-03-10',
            description: 'Sertifikat sistem manajemen keselamatan dan kesehatan kerja.',
            image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
            status: 'active',
            documentUrl: '#'
        },
        {
            id: 'sbu-security',
            title: 'Sertifikat Badan Usaha (SBU) Jasa Keamanan',
            category: 'business',
            issuer: 'Lembaga Pengembangan Jasa Konstruksi',
            issueDate: '2024-01-05',
            expiryDate: '2027-01-05',
            description: 'Sertifikat badan usaha untuk layanan jasa keamanan profesional.',
            image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
            status: 'active',
            documentUrl: '#'
        },
        {
            id: 'cleaning-license',
            title: 'Lisensi Jasa Cleaning Service Profesional',
            category: 'business',
            issuer: 'Dinas Perindustrian dan Perdagangan',
            issueDate: '2024-02-15',
            expiryDate: '2027-02-15',
            description: 'Lisensi resmi untuk operasional layanan cleaning service.',
            image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=800',
            status: 'active',
            documentUrl: '#'
        },
        {
            id: 'sales-certification',
            title: 'Sertifikasi Tim Sales & Marketing',
            category: 'professional',
            issuer: 'Indonesia Sales & Marketing Association',
            issueDate: '2024-03-01',
            expiryDate: '2026-03-01',
            description: 'Sertifikasi profesional untuk tim sales dan marketing.',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
            status: 'active',
            documentUrl: '#'
        }
    ];

    const legalDocuments = [
        {
            id: 'siup',
            title: 'Surat Izin Usaha Perdagangan (SIUP)',
            category: 'business-permit',
            issuer: 'Dinas Perindustrian dan Perdagangan Kota Banjarmasin',
            issueDate: '2023-01-10',
            expiryDate: '2028-01-10',
            description: 'Izin usaha perdagangan yang sah untuk menjalankan kegiatan bisnis.',
            status: 'active'
        },
        {
            id: 'tdp',
            title: 'Tanda Daftar Perusahaan (TDP)',
            category: 'business-permit',
            issuer: 'Dinas Perindustrian dan Perdagangan Kota Banjarmasin',
            issueDate: '2023-01-15',
            expiryDate: '2028-01-15',
            description: 'Tanda daftar perusahaan yang tercatat secara resmi.',
            status: 'active'
        },
        {
            id: 'npwp',
            title: 'Nomor Pokok Wajib Pajak (NPWP)',
            category: 'tax',
            issuer: 'Direktorat Jenderal Pajak',
            issueDate: '2023-01-05',
            expiryDate: 'Permanent',
            description: 'Nomor identifikasi pajak untuk kewajiban perpajakan perusahaan.',
            status: 'active'
        },
        {
            id: 'akta-pendirian',
            title: 'Akta Pendirian Perusahaan',
            category: 'legal',
            issuer: 'Notaris Hukum Banjarmasin',
            issueDate: '2022-12-15',
            expiryDate: 'Permanent',
            description: 'Akta pendirian perusahaan yang disahkan oleh notaris.',
            status: 'active'
        }
    ];

    const categories = [
        { id: 'all', name: 'Semua', icon: FileText },
        { id: 'quality', name: 'Mutu', icon: Award },
        { id: 'environment', name: 'Lingkungan', icon: Shield },
        { id: 'safety', name: 'K3', icon: Shield },
        { id: 'business', name: 'Bisnis', icon: Building },
        { id: 'professional', name: 'Profesional', icon: Award }
    ];

    const filteredCertificates = certificates.filter(cert => {
        const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
        const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatDate = (dateString: string) => {
        if (dateString === 'Permanent') return 'Permanen';
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'expired': return 'bg-red-100 text-red-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'active': return 'Aktif';
            case 'expired': return 'Kedaluwarsa';
            case 'pending': return 'Menunggu';
            default: return 'Tidak diketahui';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={onBack}
                                className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
                            >
                                <ArrowLeft className="h-5 w-5" />
                                <span>Kembali</span>
                            </button>
                            <div className="h-6 w-px bg-slate-300"></div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-800">Sertifikat & Legalitas</h1>
                                <p className="text-slate-600">Dokumen resmi dan sertifikasi Unit 007</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filters */}
                <div className="mb-8 space-y-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Cari sertifikat atau dokumen..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                                        }`}
                                >
                                    <IconComponent className="h-4 w-4" />
                                    <span>{category.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Certificates Grid */}
                <div className="mb-12">
                    <div className="flex items-center space-x-3 mb-6">
                        <Award className="h-6 w-6 text-blue-600" />
                        <h2 className="text-xl font-bold text-slate-800">Sertifikat Profesional</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCertificates.map((cert) => (
                            <div key={cert.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
                                <div className="relative">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(cert.status)}`}>
                                            {getStatusText(cert.status)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
                                        {cert.title}
                                    </h3>

                                    <p className="text-slate-600 mb-4 text-sm line-clamp-2">
                                        {cert.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center space-x-2 text-sm">
                                            <Building className="h-4 w-4 text-slate-400" />
                                            <span className="text-slate-600">{cert.issuer}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <Calendar className="h-4 w-4 text-slate-400" />
                                            <span className="text-slate-600">
                                                {formatDate(cert.issueDate)} - {formatDate(cert.expiryDate)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
                                            <Eye className="h-4 w-4" />
                                            <span>Lihat</span>
                                        </button>
                                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-lg transition-colors">
                                            <Download className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legal Documents */}
                <div>
                    <div className="flex items-center space-x-3 mb-6">
                        <FileText className="h-6 w-6 text-green-600" />
                        <h2 className="text-xl font-bold text-slate-800">Dokumen Legalitas</h2>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Dokumen
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Penerbit
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Tanggal Terbit
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Berlaku Hingga
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                    {legalDocuments.map((doc) => (
                                        <tr key={doc.id} className="hover:bg-slate-50">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="text-sm font-medium text-slate-900">{doc.title}</div>
                                                    <div className="text-sm text-slate-500 line-clamp-1">{doc.description}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-900">
                                                {doc.issuer}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-900">
                                                {formatDate(doc.issueDate)}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-900">
                                                {formatDate(doc.expiryDate)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                                                    {getStatusText(doc.status)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                                                        <Eye className="h-4 w-4" />
                                                    </button>
                                                    <button className="text-slate-600 hover:text-slate-800 transition-colors">
                                                        <Download className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
                    <div className="max-w-2xl mx-auto">
                        <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                            Dokumen Terpercaya & Terkini
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Semua sertifikat dan dokumen legalitas kami selalu diperbaharui dan sesuai dengan standar industri terbaru.
                            Untuk verifikasi atau informasi lebih lanjut, silakan hubungi tim kami.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2">
                            <Phone className="h-5 w-5" />
                            <span>Hubungi Tim Verifikasi</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
