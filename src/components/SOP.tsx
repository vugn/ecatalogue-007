import React from 'react';
import { FileText, CheckCircle, Clock, Users, Shield } from 'lucide-react';

const SOP: React.FC = () => {
  const procedures = [
    {
      title: 'Standard Operasional Keamanan',
      icon: Shield,
      color: 'bg-blue-600',
      steps: [
        'Briefing shift dan serah terima pos',
        'Pemeriksaan kelengkapan peralatan',
        'Patroli rutin setiap 2 jam',
        'Pencatatan aktivitas di buku log',
        'Laporan insiden (jika ada)',
        'Serah terima ke shift berikutnya'
      ]
    },
    {
      title: 'Standard Operasional Cleaning',
      icon: Users,
      color: 'bg-blue-600',
      steps: [
        'Persiapan peralatan dan bahan',
        'Pemeriksaan area kerja',
        'Pelaksanaan cleaning sesuai jadwal',
        'Sanitasi dan disinfeksi',
        'Quality check hasil kerja',
        'Laporan penyelesaian tugas'
      ]
    },
    {
      title: 'Standard Operasional Sales',
      icon: FileText,
      color: 'bg-purple-600',
      steps: [
        'Morning briefing tim sales',
        'Persiapan materi presentasi',
        'Kunjungan prospek sesuai jadwal',
        'Follow up client existing',
        'Update CRM dan database',
        'Laporan hasil harian'
      ]
    }
  ];

  const qualityStandards = [
    {
      title: 'ISO 9001:2015',
      description: 'Sistem manajemen mutu internasional',
      icon: CheckCircle
    },
    {
      title: 'K3 (Keselamatan Kerja)',
      description: 'Prosedur keselamatan dan kesehatan kerja',
      icon: Shield
    },
    {
      title: 'Service Level Agreement',
      description: 'Standar layanan yang terukur',
      icon: Clock
    },
    {
      title: 'Continuous Improvement',
      description: 'Peningkatan berkelanjutan',
      icon: FileText
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Standard Operating Procedures
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Prosedur operasional standar yang ketat untuk memastikan konsistensi
            dan kualitas layanan yang optimal di setiap penugasan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {procedures.map((procedure, index) => {
            const IconComponent = procedure.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`${procedure.color} p-6`}>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-8 w-8 text-white" />
                    <h3 className="text-xl font-bold text-white">{procedure.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {procedure.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-slate-600">{stepIndex + 1}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Standar Kualitas & Sertifikasi
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{standard.title}</h4>
                  <p className="text-sm text-slate-600">{standard.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-blue-800 text-center">
              <strong>Komitmen Kami:</strong> Setiap prosedur dijalankan dengan konsisten dan
              dievaluasi secara berkala untuk memastikan standar kualitas tertinggi dalam setiap layanan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SOP;