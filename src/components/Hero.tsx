import React from 'react';
import { Shield, Users, Briefcase, ShoppingBag, CheckCircle } from 'lucide-react';

interface HeroProps {
  onCatalogClick: () => void;
  onCertificatesClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCatalogClick, onCertificatesClick }) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              E-Catalog Professional Services
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Layanan Korporat
              <span className="block text-blue-300">Profesional Terpercaya</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Solusi lengkap layanan keamanan, cleaning service, dan outsourcing sales
              dengan kontrak tahunan untuk BUMN dan perusahaan besar di Banjarmasin.
            </p>            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onCatalogClick}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Jelajahi Katalog
              </button>

              <button
                onClick={onCertificatesClick}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Shield className="mr-2 h-5 w-5" />
                Lihat Sertifikat
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-300">25+</div>
                <div className="text-sm text-blue-200">BUMN Klien</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">24/7</div>
                <div className="text-sm text-blue-200">Monitoring</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">5★</div>
                <div className="text-sm text-blue-200">Rating</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Jasa Keamanan Korporat</h3>
                  <p className="text-blue-200">Rp 3.000.000.000/tahun</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">Tim Berlapis & Struktur Profesional</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">Kontrak Tahunan Tetap</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cleaning Service Korporat</h3>
                  <p className="text-blue-200">Rp 1.500.000.000/tahun</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">Fasilitas Kompleks & Modern</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">Eco-friendly & Green Cleaning</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Outsourcing Sales Korporat</h3>
                  <p className="text-blue-200">Rp 2.000.000.000/tahun</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">Digital Marketing Terintegrasi</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">ROI Tracking & Analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Terpercaya & Bersertifikat
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Dipercaya oleh lebih dari 25 BUMN dan perusahaan besar dengan sertifikasi internasional
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                <Shield className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-sm text-blue-200">ISO 9001:2015</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                <CheckCircle className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-sm text-blue-200">OHSAS 18001</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                <Users className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-sm text-blue-200">SBU Terakreditasi</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                <Briefcase className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-sm text-blue-200">Lisensi Resmi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;