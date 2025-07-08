import React, { useState } from 'react';
import { ArrowLeft, FileText, Award, Shield, Download, Eye, Calendar, MapPin, User } from 'lucide-react';

interface LegalityDetailProps {
  onBack: () => void;
}

const LegalityDetail: React.FC<LegalityDetailProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('documents');

  const companyDocuments = [
    {
      title: 'Akta Pendirian Perusahaan',
      number: 'No. 123/AHU-0001234.AH.01.01/2020',
      date: '15 Januari 2020',
      issuer: 'Kementerian Hukum dan HAM RI',
      status: 'Aktif',
      description: 'Akta pendirian PT Unit 007 Banjarmasin yang disahkan oleh Menteri Hukum dan HAM',
      validUntil: '15 Januari 2030',
      type: 'Perseroan Terbatas (PT)'
    },
    {
      title: 'Surat Izin Usaha Perdagangan (SIUP)',
      number: 'No. 456/SIUP/DPMPTSP/2020',
      date: '20 Januari 2020',
      issuer: 'Dinas Penanaman Modal dan PTSP Kalsel',
      status: 'Aktif',
      description: 'Izin usaha untuk kegiatan perdagangan jasa keamanan dan cleaning service',
      validUntil: '20 Januari 2025',
      type: 'Izin Usaha'
    },
    {
      title: 'Tanda Daftar Perusahaan (TDP)',
      number: 'No. 789/TDP/DPMPTSP/2020',
      date: '25 Januari 2020',
      issuer: 'Dinas Penanaman Modal dan PTSP Kalsel',
      status: 'Aktif',
      description: 'Tanda daftar perusahaan untuk kegiatan jasa keamanan dan pembersihan',
      validUntil: '25 Januari 2025',
      type: 'Pendaftaran'
    },
    {
      title: 'Nomor Induk Berusaha (NIB)',
      number: 'No. 1234567890123456',
      date: '30 Januari 2020',
      issuer: 'OSS (Online Single Submission)',
      status: 'Aktif',
      description: 'Nomor identitas tunggal untuk kemudahan berusaha',
      validUntil: 'Seumur hidup',
      type: 'Identitas Usaha'
    }
  ];

  const businessLicenses = [
    {
      title: 'Izin Usaha Jasa Keamanan',
      number: 'No. 001/IUJK/POLDA-KALSEL/2020',
      issuer: 'Kepolisian Daerah Kalimantan Selatan',
      date: '10 Februari 2020',
      validUntil: '10 Februari 2025',
      scope: 'Jasa pengamanan fisik dan elektronik'
    },
    {
      title: 'Sertifikat ISO 9001:2015',
      number: 'No. ISO-9001-2020-001',
      issuer: 'Badan Sertifikasi Internasional',
      date: '15 Maret 2020',
      validUntil: '15 Maret 2023',
      scope: 'Sistem manajemen mutu layanan jasa'
    },
    {
      title: 'Izin Tenaga Kerja Asing',
      number: 'No. IMTA/001/2020',
      issuer: 'Kementerian Ketenagakerjaan RI',
      date: '20 April 2020',
      validUntil: '20 April 2025',
      scope: 'Konsultan manajemen dan pelatihan'
    },
    {
      title: 'Sertifikat K3 (Keselamatan dan Kesehatan Kerja)',
      number: 'No. K3/001/2020',
      issuer: 'Dinas Tenaga Kerja Kalsel',
      date: '25 Mei 2020',
      validUntil: '25 Mei 2025',
      scope: 'Implementasi sistem K3 di tempat kerja'
    }
  ];

  const companyProfile = {
    name: 'PT Unit 007 Banjarmasin',
    establishedDate: '15 Januari 2020',
    address: 'Jl. A. Yani Km 5.5 No. 123, Banjarmasin, Kalimantan Selatan 70249',
    phone: '+62 511 123 4567',
    email: 'info@unit007bjm.com',
    website: 'www.unit007bjm.com',
    npwp: '12.345.678.9-123.000',
    capital: 'Rp 2.500.000.000',
    director: 'Budi Santoso, S.E.',
    businessField: 'Jasa Keamanan, Cleaning Service, dan Outsourcing'
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Legalitas Perusahaan</h1>
            <p className="text-blue-100 text-lg">Dokumentasi lengkap legalitas PT Unit 007 Banjarmasin</p>
          </div>

          <div className="border-b border-slate-200">
            <div className="flex space-x-8 px-8">
              <button
                onClick={() => setActiveTab('documents')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === 'documents' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                }`}
              >
                Dokumen Perusahaan
              </button>
              <button
                onClick={() => setActiveTab('licenses')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === 'licenses' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                }`}
              >
                Izin Usaha
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === 'profile' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                }`}
              >
                Profil Perusahaan
              </button>
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'documents' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Dokumen Resmi Perusahaan</h2>
                {companyDocuments.map((doc, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800">{doc.title}</h3>
                          <p className="text-slate-600">{doc.number}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-4">{doc.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600">Tanggal: {doc.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600">Berlaku: {doc.validUntil}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600">Penerbit: {doc.issuer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'licenses' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Izin Usaha & Sertifikasi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {businessLicenses.map((license, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Award className="h-5 w-5 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">{license.title}</h3>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Nomor:</span> {license.number}</p>
                        <p><span className="font-medium">Penerbit:</span> {license.issuer}</p>
                        <p><span className="font-medium">Tanggal:</span> {license.date}</p>
                        <p><span className="font-medium">Berlaku hingga:</span> {license.validUntil}</p>
                        <p><span className="font-medium">Cakupan:</span> {license.scope}</p>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                          Lihat Dokumen
                        </button>
                        <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 p-2 rounded-lg transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Profil Perusahaan</h2>
                <div className="bg-slate-50 rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Informasi Dasar</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-slate-500" />
                            <div>
                              <p className="font-medium text-slate-800">{companyProfile.name}</p>
                              <p className="text-sm text-slate-600">Nama Perusahaan</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Calendar className="h-5 w-5 text-slate-500" />
                            <div>
                              <p className="font-medium text-slate-800">{companyProfile.establishedDate}</p>
                              <p className="text-sm text-slate-600">Tanggal Pendirian</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="h-5 w-5 text-slate-500" />
                            <div>
                              <p className="font-medium text-slate-800">{companyProfile.address}</p>
                              <p className="text-sm text-slate-600">Alamat</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Detail Bisnis</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-slate-800">{companyProfile.director}</p>
                            <p className="text-sm text-slate-600">Direktur Utama</p>
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{companyProfile.capital}</p>
                            <p className="text-sm text-slate-600">Modal Dasar</p>
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{companyProfile.npwp}</p>
                            <p className="text-sm text-slate-600">NPWP</p>
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{companyProfile.businessField}</p>
                            <p className="text-sm text-slate-600">Bidang Usaha</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalityDetail;