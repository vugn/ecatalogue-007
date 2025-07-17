import React from 'react';
import { Shield, Users, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (service: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const services = [
    {
      id: 'security',
      title: 'Jasa Keamanan',
      description: 'Layanan keamanan profesional dengan personel berpengalaman dan peralatan modern',
      icon: Shield,
      color: 'bg-blue-600',
      features: [
        'Security Guard 24/7',
        'Sistem CCTV Terintegrasi',
        'Patroli Keamanan',
        'Konsultasi Keamanan'
      ],
      pricing: 'Mulai dari Rp 2.500.000/bulan'
    },
    {
      id: 'cleaning',
      title: 'Cleaning Service',
      description: 'Layanan kebersihan menyeluruh dengan standar internasional dan peralatan modern',
      icon: Users,
      color: 'bg-blue-600',
      features: [
        'General Cleaning',
        'Deep Cleaning',
        'Sanitasi & Disinfeksi',
        'Perawatan Khusus'
      ],
      pricing: 'Mulai dari Rp 1.800.000/bulan'
    },
    {
      id: 'outsourcing',
      title: 'Outsourcing Sales',
      description: 'Tim penjualan profesional untuk meningkatkan performa bisnis Anda',
      icon: Briefcase,
      color: 'bg-purple-600',
      features: [
        'Sales Representative',
        'Pelatihan Penjualan',
        'Manajemen Tim',
        'Analisis Performa'
      ],
      pricing: 'Mulai dari Rp 3.200.000/bulan'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Layanan Profesional Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Solusi terpadu untuk kebutuhan bisnis Anda dengan standar kualitas tinggi
            dan dukungan penuh dari tim profesional berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100 hover:border-blue-200"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`${service.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                      <p className="text-sm text-slate-600">{service.pricing}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onServiceSelect(service.id)}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:bg-blue-600 flex items-center justify-center space-x-2"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;