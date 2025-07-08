import React from 'react';
import { FileText, Award, Shield, CheckCircle } from 'lucide-react';

interface LegalityProps {
  onDetailClick: () => void;
}

const Legality: React.FC<LegalityProps> = ({ onDetailClick }) => {
  const documents = [
    {
      title: 'Akta Pendirian',
      number: 'No. 123/AHU/2020',
      date: '15 Januari 2020',
      status: 'Aktif',
      icon: FileText
    },
    {
      title: 'SIUP',
      number: 'No. 456/SIUP/2020',
      date: '20 Januari 2020',
      status: 'Aktif',
      icon: Award
    },
    {
      title: 'TDP',
      number: 'No. 789/TDP/2020',
      date: '25 Januari 2020',
      status: 'Aktif',
      icon: Shield
    },
    {
      title: 'NIB',
      number: 'No. 1234567890123',
      date: '30 Januari 2020',
      status: 'Aktif',
      icon: FileText
    }
  ];

  const licenses = [
    'Izin Usaha Jasa Keamanan',
    'Sertifikat ISO 9001:2015',
    'Izin Tenaga Kerja Asing',
    'Sertifikat K3 (Keselamatan dan Kesehatan Kerja)',
    'Izin Lingkungan',
    'Sertifikat Halal (untuk produk cleaning)'
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Legalitas Perusahaan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Unit 007 Banjarmasin beroperasi dengan legalitas lengkap dan memenuhi 
            semua persyaratan hukum yang berlaku di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              Dokumen Perusahaan
            </h3>
            
            <div className="space-y-6">
              {documents.map((doc, index) => {
                const IconComponent = doc.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800">{doc.title}</h4>
                        <p className="text-slate-600">{doc.number}</p>
                        <p className="text-sm text-slate-500">Tanggal: {doc.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-600">{doc.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <Award className="h-8 w-8 text-green-600 mr-3" />
              Izin Usaha & Sertifikat
            </h3>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
              <div className="space-y-4">
                {licenses.map((license, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{license}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Catatan:</strong> Semua dokumen dan izin usaha kami diperbaharui secara berkala 
                  sesuai dengan peraturan yang berlaku dan dapat diverifikasi melalui instansi terkait.
                </p>
                <button
                  onClick={onDetailClick}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Lihat Detail Lengkap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legality;