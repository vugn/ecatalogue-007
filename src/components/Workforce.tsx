import React from 'react';
import { Users, GraduationCap, Shield, TrendingUp } from 'lucide-react';

interface WorkforceProps {
  onDetailClick: () => void;
}

const Workforce: React.FC<WorkforceProps> = ({ onDetailClick }) => {
  const stats = [
    {
      title: 'Total Karyawan',
      value: '150+',
      description: 'Tenaga kerja profesional',
      icon: Users,
      color: 'bg-blue-600'
    },
    {
      title: 'Sertifikat',
      value: '95%',
      description: 'Karyawan bersertifikat',
      icon: GraduationCap,
      color: 'bg-green-600'
    },
    {
      title: 'Pengalaman',
      value: '5+ Tahun',
      description: 'Rata-rata pengalaman',
      icon: Shield,
      color: 'bg-purple-600'
    },
    {
      title: 'Pertumbuhan',
      value: '25%',
      description: 'Peningkatan tahun ini',
      icon: TrendingUp,
      color: 'bg-orange-600'
    }
  ];

  const departments = [
    {
      name: 'Keamanan',
      count: 60,
      percentage: 40,
      qualifications: ['Sertifikat Security', 'Pelatihan K3', 'SIM A/B']
    },
    {
      name: 'Cleaning Service',
      count: 45,
      percentage: 30,
      qualifications: ['Sertifikat Cleaning', 'Pelatihan Sanitasi', 'K3 Umum']
    },
    {
      name: 'Sales & Marketing',
      count: 30,
      percentage: 20,
      qualifications: ['Sertifikat Sales', 'Digital Marketing', 'Communication Skills']
    },
    {
      name: 'Administrasi',
      count: 15,
      percentage: 10,
      qualifications: ['Diploma/S1', 'Komputer', 'Bahasa Inggris']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Data Tenaga Kerja
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tim profesional kami terdiri dari tenaga kerja berpengalaman, terlatih, 
            dan bersertifikat untuk memberikan layanan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
              >
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</h3>
                <p className="text-slate-600 font-medium">{stat.title}</p>
                <p className="text-sm text-slate-500">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Distribusi Tenaga Kerja per Departemen
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-slate-800">{dept.name}</h4>
                  <span className="text-2xl font-bold text-blue-600">{dept.count}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Persentase</span>
                    <span className="text-sm font-medium text-slate-800">{dept.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${dept.percentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-slate-600 mb-2">Kualifikasi:</p>
                  <div className="flex flex-wrap gap-2">
                    {dept.qualifications.map((qual, qualIndex) => (
                      <span
                        key={qualIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button
              onClick={onDetailClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Lihat Detail Karyawan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workforce;