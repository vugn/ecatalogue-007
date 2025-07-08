import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Unit 007</h3>
                <p className="text-slate-400 text-sm">Professional Services</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Penyedia layanan profesional terpercaya untuk kebutuhan keamanan,
              kebersihan, dan tenaga penjualan di Banjarmasin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Jasa Keamanan</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cleaning Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Outsourcing Sales</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Konsultasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Perusahaan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Sertifikasi & Legalitas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <p className="text-slate-400">
                  Jl. A. Yani Km 5.5 No. 123<br />
                  Banjarmasin, Kalsel 70249
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-slate-400">+62 511 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-slate-400">info@unit007bjm.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Unit 007 Banjarmasin. Semua hak dilindungi undang-undang.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;