import React from 'react';
import { Shield, ShoppingBag, Award, Phone, CheckCircle, Package } from 'lucide-react';

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
              E-Catalog Resmi PRIMER KOPERASI KARTIKA BANJARMASIN
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              PRIMER KOPERASI KARTIKA
              <span className="block text-blue-300">BANJARMASIN</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Melayani kebutuhan ATK, sembako, dan jasa khusus dengan harga terjangkau.
              Terpercaya untuk masyarakat umum dan anggota PRIMER KOPERASI KARTIKA BANJARMASIN.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onCatalogClick}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Belanja Sekarang
              </button>

              <button
                onClick={onCertificatesClick}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Award className="mr-2 h-5 w-5" />
                Lihat Legalitas
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-300">500+</div>
                <div className="text-sm text-blue-200">Produk Tersedia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">24/7</div>
                <div className="text-sm text-blue-200">Layanan Online</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">100%</div>
                <div className="text-sm text-blue-200">Terpercaya</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">ATK & Sembako</h3>
                  <p className="text-blue-200">Harga terjangkau, kualitas terjamin</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100 text-sm">Alat tulis kantor lengkap</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100 text-sm">Sembako berkualitas</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Jasa Khusus Premium</h3>
                  <p className="text-blue-200">Layanan profesional ex-TNI</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100 text-sm">Jasa pengamanan profesional</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100 text-sm">Pelatihan bela diri & disiplin</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Pembayaran Mudah</h3>
                  <p className="text-blue-200">Multiple payment gateway</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100 text-sm">Transfer bank, e-wallet, QRIS</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100 text-sm">Pembayaran tunai tersedia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Koperasi Resmi & Terpercaya
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Didukung oleh PRIMER KOPERASI KARTIKA BANJARMASIN dengan legalitas lengkap dan pelayanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                <Shield className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-sm text-blue-200">Badan Hukum</div>
              <div className="text-xs text-blue-300">Koperasi Resmi</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                <CheckCircle className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-sm text-blue-200">SIUP</div>
              <div className="text-xs text-blue-300">Izin Usaha</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                <Award className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-sm text-blue-200">Kemitraan</div>
              <div className="text-xs text-blue-300">PRIMER KOPERASI KARTIKA</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                <Package className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-sm text-blue-200">Kualitas</div>
              <div className="text-xs text-blue-300">Terjamin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;