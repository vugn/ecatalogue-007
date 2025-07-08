import React, { useState } from 'react';
import { ArrowLeft, Shield, Users, Briefcase, Check, Star, Clock, Award, Phone, MessageCircle } from 'lucide-react';

interface ServiceDetailProps {
  selectedService: string;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ selectedService, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const serviceData = {
    security: {
      title: 'Jasa Keamanan Profesional',
      subtitle: 'Perlindungan Terpercaya 24/7',
      icon: Shield,
      color: 'bg-blue-600',
      description: 'Layanan keamanan komprehensif dengan personel berpengalaman, teknologi modern, dan standar operasional yang ketat untuk melindungi aset dan keamanan bisnis Anda.',
      features: [
        'Security Guard Bersertifikat',
        'Sistem CCTV Terintegrasi',
        'Patroli Keamanan Rutin',
        'Monitoring 24/7',
        'Emergency Response',
        'Laporan Keamanan Digital',
        'Konsultasi Keamanan',
        'Pelatihan Keamanan Karyawan'
      ],
      packages: [
        {
          name: 'Basic Security',
          price: 'Rp 2.500.000',
          period: '/bulan',
          features: [
            '1 Security Guard',
            '8 jam/hari (shift siang)',
            'Laporan harian',
            'Komunikasi radio',
            'Seragam dan peralatan'
          ],
          popular: false
        },
        {
          name: 'Premium Security',
          price: 'Rp 4.200.000',
          period: '/bulan',
          features: [
            '2 Security Guard',
            '24 jam/hari (3 shift)',
            'CCTV monitoring',
            'Patroli rutin setiap 2 jam',
            'Laporan digital real-time',
            'Emergency response kit'
          ],
          popular: true
        },
        {
          name: 'Corporate Security',
          price: 'Rp 8.500.000',
          period: '/bulan',
          features: [
            'Tim keamanan lengkap (4-6 orang)',
            '24/7 monitoring center',
            'Sistem terintegrasi',
            'Supervisor on-site',
            'Emergency response team',
            'Security audit bulanan'
          ],
          popular: false
        }
      ],
      specifications: {
        'Personel': 'Security guard bersertifikat dengan pengalaman minimal 3 tahun',
        'Pelatihan': 'Pelatihan rutin setiap 6 bulan, sertifikasi K3 dan first aid',
        'Peralatan': 'Radio komunikasi, senter LED, tongkat keamanan, emergency kit',
        'Teknologi': 'CCTV HD, sistem alarm, access control, monitoring software',
        'Laporan': 'Laporan harian, mingguan, dan bulanan dalam format digital',
        'Response Time': 'Emergency response dalam 5 menit, backup dalam 15 menit'
      },
      testimonials: [
        {
          name: 'PT Banjar Makmur',
          rating: 5,
          comment: 'Layanan keamanan yang sangat profesional. Tim security sangat responsif dan terpercaya.'
        },
        {
          name: 'Mall Duta Plaza',
          rating: 5,
          comment: 'Sudah 2 tahun menggunakan jasa Unit 007, tidak pernah ada masalah keamanan.'
        }
      ]
    },
    cleaning: {
      title: 'Cleaning Service Professional',
      subtitle: 'Kebersihan Standar Internasional',
      icon: Users,
      color: 'bg-green-600',
      description: 'Layanan kebersihan menyeluruh dengan standar internasional, menggunakan peralatan modern dan produk ramah lingkungan untuk menciptakan lingkungan kerja yang bersih dan sehat.',
      features: [
        'General Cleaning Harian',
        'Deep Cleaning Berkala',
        'Sanitasi & Disinfeksi',
        'Window Cleaning',
        'Carpet & Upholstery Cleaning',
        'Waste Management',
        'Eco-friendly Products',
        'Quality Assurance'
      ],
      packages: [
        {
          name: 'Basic Cleaning',
          price: 'Rp 1.800.000',
          period: '/bulan',
          features: [
            'General cleaning 3x/minggu',
            'Peralatan cleaning dasar',
            'Produk cleaning standar',
            'Laporan berkala',
            '1 cleaning staff'
          ],
          popular: false
        },
        {
          name: 'Premium Cleaning',
          price: 'Rp 3.500.000',
          period: '/bulan',
          features: [
            'Deep cleaning 5x/minggu',
            'Sanitasi rutin',
            'Peralatan modern',
            'Eco-friendly products',
            'Quality assurance',
            '2 cleaning staff'
          ],
          popular: true
        },
        {
          name: 'Corporate Cleaning',
          price: 'Rp 6.800.000',
          period: '/bulan',
          features: [
            'Full service harian',
            'Specialized cleaning',
            'Premium eco products',
            'Dedicated team (4-5 orang)',
            'Supervisor on-site',
            'Monthly deep cleaning'
          ],
          popular: false
        }
      ],
      specifications: {
        'Personel': 'Cleaning staff terlatih dengan sertifikasi sanitasi dan hygiene',
        'Peralatan': 'Vacuum cleaner industrial, floor polisher, pressure washer',
        'Produk': 'Eco-friendly cleaning products, disinfektan medis grade',
        'Metode': 'Sistem cleaning 5S, color coding, dan quality control',
        'Jadwal': 'Fleksibel sesuai kebutuhan, tersedia layanan emergency',
        'Standar': 'ISO 14001 environmental management, HACCP compliant'
      },
      testimonials: [
        {
          name: 'RS Ulin Banjarmasin',
          rating: 5,
          comment: 'Standar kebersihan rumah sakit terjaga dengan baik. Tim sangat profesional.'
        },
        {
          name: 'Hotel Mercure',
          rating: 5,
          comment: 'Kualitas cleaning service terbaik di Banjarmasin. Sangat merekomendasikan.'
        }
      ]
    },
    outsourcing: {
      title: 'Outsourcing Sales Professional',
      subtitle: 'Tim Penjualan Berpengalaman',
      icon: Briefcase,
      color: 'bg-purple-600',
      description: 'Solusi outsourcing sales dengan tim profesional berpengalaman untuk meningkatkan revenue dan ekspansi market bisnis Anda dengan strategi penjualan yang terbukti efektif.',
      features: [
        'Sales Representative Berpengalaman',
        'Sales Training Program',
        'CRM System Integration',
        'Lead Generation',
        'Market Research',
        'Performance Analytics',
        'Customer Relationship Management',
        'Sales Strategy Consultation'
      ],
      packages: [
        {
          name: 'Basic Sales',
          price: 'Rp 3.200.000',
          period: '/bulan',
          features: [
            '1 Sales representative',
            'Target oriented',
            'Basic training',
            'Monthly report',
            'Lead generation'
          ],
          popular: false
        },
        {
          name: 'Premium Sales',
          price: 'Rp 6.500.000',
          period: '/bulan',
          features: [
            '2 Sales representatives',
            'Advanced training',
            'CRM system',
            'Weekly reporting',
            'Performance analytics',
            'Market research'
          ],
          popular: true
        },
        {
          name: 'Corporate Sales',
          price: 'Rp 12.000.000',
          period: '/bulan',
          features: [
            'Full sales team (4-6 orang)',
            'Sales manager dedicated',
            'Custom strategy',
            'Daily reporting',
            'ROI optimization',
            'Training & development'
          ],
          popular: false
        }
      ],
      specifications: {
        'Personel': 'Sales professional dengan track record minimal 3 tahun',
        'Training': 'Product knowledge, sales technique, customer service',
        'Tools': 'CRM software, sales automation, lead tracking system',
        'Target': 'KPI terukur dengan bonus achievement',
        'Reporting': 'Dashboard real-time, weekly & monthly analytics',
        'Support': '24/7 sales support, backup team available'
      },
      testimonials: [
        {
          name: 'PT Borneo Sejahtera',
          rating: 5,
          comment: 'Tim sales Unit 007 berhasil meningkatkan penjualan kami 40% dalam 6 bulan.'
        },
        {
          name: 'CV Kalimantan Maju',
          rating: 5,
          comment: 'Profesional dan hasil oriented. Sangat membantu ekspansi bisnis kami.'
        }
      ]
    }
  };

  const currentService = serviceData[selectedService as keyof typeof serviceData];
  const IconComponent = currentService.icon;

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
          <div className={`${currentService.color} text-white p-8`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{currentService.title}</h1>
                <p className="text-white/90 text-lg">{currentService.subtitle}</p>
              </div>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">{currentService.description}</p>
          </div>

          <div className="border-b border-slate-200">
            <div className="flex space-x-8 px-8">
              {['overview', 'packages', 'specifications', 'testimonials'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors capitalize ${
                    activeTab === tab 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {tab === 'overview' ? 'Ringkasan' : 
                   tab === 'packages' ? 'Paket Layanan' :
                   tab === 'specifications' ? 'Spesifikasi' : 'Testimoni'}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Fitur Layanan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Mengapa Memilih Layanan Kami?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">Bersertifikat</h4>
                      <p className="text-sm text-slate-600">Tim profesional dengan sertifikasi internasional</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="h-8 w-8 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">24/7 Support</h4>
                      <p className="text-sm text-slate-600">Dukungan penuh sepanjang waktu</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">Kualitas Terjamin</h4>
                      <p className="text-sm text-slate-600">Standar kualitas internasional</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'packages' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Paket Layanan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {currentService.packages.map((pkg, index) => (
                    <div key={index} className={`border rounded-xl p-6 relative ${
                      pkg.popular ? 'border-blue-500 shadow-lg' : 'border-slate-200'
                    }`}>
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Paling Populer
                          </span>
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                        <span className="text-slate-600">{pkg.period}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        pkg.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}>
                        Pilih Paket
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Spesifikasi Teknis</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="space-y-4">
                    {Object.entries(currentService.specifications).map(([key, value], index) => (
                      <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                        <div className="flex flex-col md:flex-row md:items-center">
                          <div className="md:w-1/4 mb-2 md:mb-0">
                            <span className="font-semibold text-slate-800">{key}</span>
                          </div>
                          <div className="md:w-3/4">
                            <span className="text-slate-700">{value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Testimoni Klien</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentService.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-700 mb-4 italic">"{testimonial.comment}"</p>
                      <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Tertarik dengan Layanan Ini?</h3>
                <p className="text-slate-600 mb-6">
                  Hubungi tim kami untuk konsultasi gratis dan penawaran terbaik sesuai kebutuhan Anda
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Hubungi Sekarang</span>
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;