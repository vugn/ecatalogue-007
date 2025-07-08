import React, { useState } from 'react';
import { Shield, Users, Briefcase, ShoppingCart, Star, Search, Grid, List, CheckCircle, FileText } from 'lucide-react';
import { CartItem } from '../App';

interface ProductCatalogProps {
  onProductSelect: (productId: string) => void;
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
  isHomePage?: boolean;
  onCertificatesClick?: () => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ onProductSelect, onAddToCart, isHomePage = false, onCertificatesClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: 'security-corporate',
      name: 'Jasa Keamanan Korporat BUMN',
      category: 'security',
      price: 3000000000,
      originalPrice: 3000000000,
      rating: 5.0,
      reviews: 23,
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Solusi keamanan komprehensif dengan kontrak tahunan tetap untuk BUMN dan korporat besar.',
      features: ['Kontrak Tahunan Tetap', 'Tim Keamanan Profesional', 'Struktur Tim Berlapis', 'Cakupan 24/7', 'Sistem Monitoring Terintegrasi'],
      badge: 'BUMN',
      inStock: true
    },
    {
      id: 'cleaning-corporate',
      name: 'Jasa Cleaning Service Korporat',
      category: 'cleaning',
      price: 1500000000,
      originalPrice: 1500000000,
      rating: 4.9,
      reviews: 34,
      image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Solusi cleaning service komprehensif dengan kontrak tahunan tetap untuk fasilitas besar dan kompleks.',
      features: ['Kontrak Tahunan Tetap', 'Tim Cleaning Profesional', 'Peralatan Modern', 'Sanitasi Berkala', 'Manajemen Waste'],
      badge: 'Korporat',
      inStock: true
    },
    {
      id: 'sales-corporate',
      name: 'Jasa Outsourcing Sales Korporat',
      category: 'sales',
      price: 2000000000,
      originalPrice: 2000000000,
      rating: 4.8,
      reviews: 29,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Solusi outsourcing sales komprehensif dengan kontrak tahunan tetap untuk ekspansi bisnis korporat.',
      features: ['Kontrak Tahunan Tetap', 'Tim Sales Profesional', 'Strategi Terukur', 'Digital Marketing', 'Target Revenue'],
      badge: 'Korporat',
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Produk', icon: Grid },
    { id: 'security', name: 'Jasa Keamanan', icon: Shield },
    { id: 'cleaning', name: 'Cleaning Service', icon: Users },
    { id: 'sales', name: 'Outsourcing Sales', icon: Briefcase }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const displayProducts = isHomePage ? sortedProducts.slice(0, 6) : sortedProducts;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Terlaris': return 'bg-red-500';
      case 'Populer': return 'bg-blue-500';
      case 'Premium': return 'bg-purple-500';
      case 'Hemat': return 'bg-green-500';
      case 'BUMN': return 'bg-indigo-600';
      case 'Korporat': return 'bg-slate-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className={`${isHomePage ? 'py-20' : 'py-8'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isHomePage && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Katalog Produk</h1>
            <p className="text-lg text-slate-600">Temukan layanan profesional terbaik untuk kebutuhan bisnis Anda</p>
          </div>
        )}

        {isHomePage && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Katalog Produk Unggulan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pilih dari berbagai paket layanan profesional yang telah disesuaikan
              dengan kebutuhan bisnis modern.
            </p>
          </div>
        )}

        {!isHomePage && (
          <div className="mb-8 space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari produk atau layanan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Urutkan: Nama</option>
                  <option value="price-low">Harga: Rendah ke Tinggi</option>
                  <option value="price-high">Harga: Tinggi ke Rendah</option>
                  <option value="rating">Rating Tertinggi</option>
                </select>

                <div className="flex border border-slate-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600'}`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600'}`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className={`grid gap-8 ${viewMode === 'grid'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
          }`}>
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group ${viewMode === 'list' ? 'flex' : ''
                }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${viewMode === 'list' ? 'h-full' : 'h-64'
                    }`}
                />
                <div className="absolute top-4 left-4">
                  <span className={`${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <p className="text-slate-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="space-y-2 mb-4">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-slate-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-sm text-slate-600">/Tahun</span>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-slate-300'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">({product.reviews} ulasan)</span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => onProductSelect(product.id)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Lihat Detail
                  </button>
                  <button
                    onClick={() => onAddToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      duration: 1,
                      image: product.image,
                      category: product.category
                    })}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isHomePage && (
          <>
            <div className="text-center mt-12">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <span>Lihat Semua Produk</span>
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>

            {/* Credibility CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-600 p-4 rounded-full">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                  Terpercaya & Bersertifikat Internasional
                </h3>

                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Dengan sertifikasi ISO, OHSAS, dan berbagai lisensi resmi, kami menjamin kualitas
                  layanan terbaik untuk kebutuhan korporat Anda.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <Shield className="h-6 w-6 text-blue-600 mx-auto" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">ISO 9001:2015</div>
                    <div className="text-xs text-slate-500">Quality Management</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">OHSAS 18001</div>
                    <div className="text-xs text-slate-500">Health & Safety</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <Star className="h-6 w-6 text-yellow-500 mx-auto" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">SBU Grade 7</div>
                    <div className="text-xs text-slate-500">Business Entity</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <FileText className="h-6 w-6 text-purple-600 mx-auto" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">Lisensi Resmi</div>
                    <div className="text-xs text-slate-500">Government Licensed</div>
                  </div>
                </div>

                {onCertificatesClick && (
                  <button
                    onClick={onCertificatesClick}
                    className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 shadow-lg"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Lihat Semua Sertifikat & Legalitas</span>
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {!isHomePage && displayProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-slate-600 mb-2">Produk tidak ditemukan</h3>
            <p className="text-slate-500">Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;