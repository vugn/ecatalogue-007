import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, FileText, Calendar, Check } from 'lucide-react';

interface ServiceCatalogProps {
  selectedService: string;
  onBack: () => void;
}

const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ selectedService, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dealStep, setDealStep] = useState(1);

  const serviceData = {
    security: {
      title: 'Jasa Keamanan Profesional',
      description: 'Layanan keamanan terpadu dengan standar internasional',
      packages: [
        {
          name: 'Basic Security',
          price: 'Rp 2.500.000/bulan',
          features: ['1 Security Guard', '8 jam/hari', 'Laporan harian', 'Komunikasi radio']
        },
        {
          name: 'Premium Security',
          price: 'Rp 4.200.000/bulan',
          features: ['2 Security Guard', '24 jam/hari', 'CCTV monitoring', 'Patroli rutin', 'Laporan digital']
        },
        {
          name: 'Corporate Security',
          price: 'Rp 8.500.000/bulan',
          features: ['Tim keamanan lengkap', '24/7 monitoring', 'Sistem terintegrasi', 'Supervisor on-site', 'Emergency response']
        }
      ]
    },
    cleaning: {
      title: 'Cleaning Service Professional',
      description: 'Layanan kebersihan menyeluruh dengan standar internasional',
      packages: [
        {
          name: 'Basic Cleaning',
          price: 'Rp 1.800.000/bulan',
          features: ['General cleaning', '3x/minggu', 'Peralatan dasar', 'Laporan berkala']
        },
        {
          name: 'Premium Cleaning',
          price: 'Rp 3.500.000/bulan',
          features: ['Deep cleaning', '5x/minggu', 'Sanitasi rutin', 'Peralatan modern', 'Quality assurance']
        },
        {
          name: 'Corporate Cleaning',
          price: 'Rp 6.800.000/bulan',
          features: ['Full service', 'Harian', 'Specialized cleaning', 'Eco-friendly products', 'Dedicated team']
        }
      ]
    },
    outsourcing: {
      title: 'Outsourcing Sales Professional',
      description: 'Tim penjualan profesional untuk meningkatkan revenue bisnis',
      packages: [
        {
          name: 'Basic Sales',
          price: 'Rp 3.200.000/bulan',
          features: ['1 Sales representative', 'Target oriented', 'Basic training', 'Monthly report']
        },
        {
          name: 'Premium Sales',
          price: 'Rp 6.500.000/bulan',
          features: ['2 Sales representatives', 'Advanced training', 'CRM system', 'Weekly reporting', 'Performance analytics']
        },
        {
          name: 'Corporate Sales',
          price: 'Rp 12.000.000/bulan',
          features: ['Full sales team', 'Sales manager', 'Custom strategy', 'Daily reporting', 'ROI optimization']
        }
      ]
    }
  };

  const currentService = serviceData[selectedService as keyof typeof serviceData];

  const dealSteps = [
    { step: 1, title: 'Konsultasi', description: 'Diskusi kebutuhan dan penawaran' },
    { step: 2, title: 'Negosiasi', description: 'Penyesuaian paket dan harga' },
    { step: 3, title: 'Kontrak', description: 'Tanda tangan digital kontrak' },
    { step: 4, title: 'Jadwal', description: 'Penjadwalan implementasi' }
  ];

  const handleDealProgress = () => {
    if (dealStep < 4) {
      setDealStep(dealStep + 1);
    }
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
            <h1 className="text-3xl font-bold mb-2">{currentService.title}</h1>
            <p className="text-blue-100 text-lg">{currentService.description}</p>
          </div>

          <div className="border-b border-slate-200">
            <div className="flex space-x-8 px-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${activeTab === 'overview'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                  }`}
              >
                Paket Layanan
              </button>
              <button
                onClick={() => setActiveTab('deal')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${activeTab === 'deal'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                  }`}
              >
                Proses Deal
              </button>
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentService.packages.map((pkg, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                    <div className="mb-6">
                        {selectedService === 'security' || selectedService === 'outsourcing' ? (
                          <div className="text-center py-2">
                            <span className="text-lg font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
                              Harga Sesuai Permintaan / Kontak Admin
                            </span>
                          </div>
                        ) : (
                          <div>
                            <p className="text-2xl font-bold text-blue-600">{pkg.price}</p>
                            <div className="mt-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
                              <p className="text-xs text-slate-600 mb-1 font-medium">Metode Pembayaran:</p>
                              <div className="flex flex-wrap gap-1">
                                <span className="bg-white text-xs px-1 py-0.5 rounded border border-slate-200">E-Wallet</span>
                                <span className="bg-white text-xs px-1 py-0.5 rounded border border-slate-200">Transfer</span>
                                <span className="bg-white text-xs px-1 py-0.5 rounded border border-slate-200">QRIS</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Check className="h-5 w-5 text-blue-600" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                        onClick={() => setActiveTab('deal')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                      >
                        {selectedService === 'security' || selectedService === 'outsourcing' ? 'Hubungi Admin' : 'Pilih Paket'}
                      </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'deal' && (
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Proses Deal & Negosiasi</h3>
                  <div className="flex items-center space-x-4 mb-8">
                    {dealSteps.map((step) => (
                      <div key={step.step} className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${dealStep >= step.step ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                          }`}>
                          {dealStep > step.step ? <Check className="h-5 w-5" /> : step.step}
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">{step.title}</p>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                        {step.step < 4 && <div className="w-8 h-0.5 bg-slate-200"></div>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <MessageCircle className="h-6 w-6 text-blue-600" />
                        <h4 className="font-semibold text-blue-800">Komunikasi dengan Admin</h4>
                      </div>
                      <p className="text-blue-700 mb-4">
                        Diskusikan kebutuhan spesifik dan dapatkan penawaran terbaik
                      </p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Hubungi Admin
                      </button>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <FileText className="h-6 w-6 text-blue-600" />
                        <h4 className="font-semibold text-blue-800">Tanda Tangan Digital</h4>
                      </div>
                      <p className="text-blue-700 mb-4">
                        Proses kontrak cepat dengan sistem tanda tangan digital
                      </p>
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        onClick={handleDealProgress}
                      >
                        Lanjutkan Proses
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <Calendar className="h-6 w-6 text-purple-600" />
                        <h4 className="font-semibold text-purple-800">Jadwalkan Pertemuan</h4>
                      </div>
                      <p className="text-purple-700 mb-4">
                        Atur jadwal meeting untuk finalisasi detail project
                      </p>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Buat Jadwal
                      </button>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="font-semibold text-slate-800 mb-4">Status Saat Ini</h4>
                      <div className="space-y-2">
                        {dealSteps.map((step) => (
                          <div key={step.step} className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${dealStep >= step.step ? 'bg-blue-600' : 'bg-slate-300'
                              }`}></div>
                            <span className={`text-sm ${dealStep >= step.step ? 'text-slate-800 font-medium' : 'text-slate-500'
                              }`}>
                              {step.title}
                            </span>
                          </div>
                        ))}
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

export default ServiceCatalog;