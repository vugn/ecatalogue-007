import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, ShoppingCart, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { CartContext } from '../App';

const Header: React.FC = () => {
  // Get cart items count from the Cart Context
  const cart = useContext(CartContext);
  const cartItemsCount = cart ? cart.getTotalItems() : 0;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Beranda' },
    { path: '/katalog', label: 'Katalog Produk' },
    { path: '/kontak', label: 'Kontak' },
    { path: '/sertifikat', label: 'Legalitas' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate('/keranjang');
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+62 511 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="break-all">koperasi@kodim007bjm.mil.id</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Kodim 007 Banjarmasin, Kalimantan Selatan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-3 text-left"
          >
            <div className="bg-green-600 p-2 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Koperasi Kodim 007</h1>
              <p className="text-xs sm:text-sm text-slate-600 hidden sm:block">E-Catalog Resmi Banjarmasin</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors ${isActivePath(item.path)
                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                    : 'text-slate-700 hover:text-green-600'
                  }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={handleCartClick}
              className="relative bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={handleCartClick}
              className="relative bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${isActivePath(item.path)
                      ? 'bg-green-600 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;