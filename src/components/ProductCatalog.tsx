import React, { useState } from 'react';
import { Shield, Package, ShoppingCart, Star, Search, Grid, List, CheckCircle, FileText, MessageCircle } from 'lucide-react';
import { CartItem } from '../data/unifiedSchema';

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
      id: 'atk-001',
      name: 'Paket ATK Lengkap Kantor',
      category: 'ATK',
      price: 150000,
      originalPrice: 180000,
      rating: 4.8,
      reviews: 45,
      image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Paket lengkap alat tulis kantor berkualitas untuk kebutuhan administrasi sehari-hari.',
      features: ['Pulpen gel 12 pcs', 'Pensil 2B 6 pcs', 'Kertas HVS A4 1 rim', 'Stapler + isi'],
      badge: 'Terlaris',
      inStock: true,
      showPrice: true
    },
    {
      id: 'atk-002',
      name: 'Kertas HVS A4 80gsm',
      category: 'ATK',
      price: 45000,
      originalPrice: 55000,
      rating: 4.9,
      reviews: 78,
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kertas HVS A4 berkualitas tinggi 80gsm, putih bersih, cocok untuk print dokumen.',
      features: ['Ukuran A4 standar', 'Gramatur 80gsm', '500 lembar per rim', 'Tidak mudah macet'],
      badge: 'Hemat',
      inStock: true,
      showPrice: true
    },
    {
      id: 'sembako-001',
      name: 'Beras Premium 5kg',
      category: 'Sembako',
      price: 65000,
      originalPrice: 75000,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/33239/wheat-field-wheat-yellow-grain.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beras premium kualitas terbaik, pulen, wangi, dan bergizi tinggi dari petani lokal.',
      features: ['Beras premium grade A', 'Pulen dan wangi alami', 'Bebas kutu dan kotoran', 'Kemasan higienis 5kg'],
      badge: 'Populer',
      inStock: true,
      showPrice: true
    },
    {
      id: 'sembako-002',
      name: 'Minyak Goreng 2L',
      category: 'Sembako',
      price: 28000,
      originalPrice: 32000,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Minyak goreng berkualitas tinggi, jernih, tidak berbau tengik.',
      features: ['Minyak goreng premium 2L', 'Jernih dan tidak berbau', 'Tahan panas tinggi', 'Sertifikat BPOM'],
      badge: 'Hemat',
      inStock: true,
      showPrice: true
    },
    {
      id: 'jasa-keamanan',
      name: 'Jasa Pengamanan & Keamanan Profesional',
      category: 'Jasa Khusus',
      price: 0,
      originalPrice: 0,
      rating: 5.0,
      reviews: 12,
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Layanan pengamanan profesional dengan personel berpengalaman militer.',
      features: ['Personel ex-TNI/Polri', 'Pengamanan acara VIP', 'Keamanan fasilitas 24/7', 'Konsultasi keamanan'],
      badge: 'Premium',
      inStock: true,
      showPrice: false
    },
    {
      id: 'jasa-pelatihan',
      name: 'Pelatihan Bela Diri & Disiplin Militer',
      category: 'Jasa Khusus',
      price: 0,
      originalPrice: 0,
      rating: 4.9,
      reviews: 8,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Program pelatihan bela diri dan pembentukan karakter dengan metode militer.',
      features: ['Pelatihan bela diri praktis', 'Pembentukan mental & disiplin', 'Instruktur ex-TNI', 'Sertifikat pelatihan'],
      badge: 'Eksklusif',
      inStock: true,
      showPrice: false
    },
    {
      id: 'lainnya-001',
      name: 'Seragam & Atribut Militer',
      category: 'Lainnya',
      price: 350000,
      originalPrice: 400000,
      rating: 4.8,
      reviews: 23,
      image: 'https://images.pexels.com/photos/8611192/pexels-photo-8611192.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Seragam dan atribut militer berkualitas tinggi dengan berbagai ukuran.',
      features: ['Bahan berkualitas tinggi', 'Jahitan rapi dan kuat', 'Berbagai ukuran', 'Atribut lengkap'],
      badge: 'Kualitas Terjamin',
      inStock: true,
      showPrice: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Produk', icon: Grid },
    { id: 'ATK', name: 'ATK', icon: FileText },
    { id: 'Sembako', name: 'Sembako', icon: Package },
    { id: 'Jasa Khusus', name: 'Jasa Khusus', icon: Shield },
    { id: 'Lainnya', name: 'Lainnya', icon: CheckCircle }
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
      case 'Hemat': return 'bg-blue-500';
      case 'Eksklusif': return 'bg-indigo-600';
      case 'Kualitas Terjamin': return 'bg-slate-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className={`${isHomePage ? 'py-20' : 'py-8'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isHomePage && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Katalog Produk</h1>
            <p className="text-lg text-slate-600">Temukan berbagai produk ATK, sembako, dan jasa khusus dengan harga terjangkau</p>
          </div>
        )}

        {isHomePage && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Katalog Produk Unggulan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pilih dari berbagai produk ATK, sembako berkualitas, dan jasa khusus profesional
              dengan harga terjangkau dari PRIMER KOPERASI KARTIKA BANJARMASIN.
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

                {/* Price Section */}
                <div className="mb-4">
                  {product.showPrice ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-slate-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-2">
                      <span className="text-lg font-bold text-slate-600 bg-slate-100 px-4 py-2 rounded-lg">
                        Harga Sesuai Permintaan
                      </span>
                    </div>
                  )}
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

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => onProductSelect(product.id)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Lihat Detail
                  </button>

                  {product.showPrice ? (
                    <button
                      onClick={() => onAddToCart({
                        id: `cart-${Date.now()}`,
                        productId: product.id,
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
                  ) : (
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                      title="Hubungi Admin"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </button>
                  )}
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
            <div className="mt-16 bg-gradient-to-br from-slate-50 to-green-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-600 p-4 rounded-full">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                  Koperasi Resmi & Terpercaya
                </h3>

                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Didukung oleh PRIMER KOPERASI KARTIKA BANJARMASIN dengan legalitas lengkap dan pelayanan terbaik
                  untuk masyarakat umum dan anggota TNI.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <Shield className="h-6 w-6 text-blue-600 mx-auto" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">Badan Hukum</div>
                    <div className="text-xs text-slate-500">Koperasi Resmi</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mx-auto" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">SIUP</div>
                    <div className="text-xs text-slate-500">Izin Usaha</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <FileText className="h-6 w-6 text-blue-600 mx-auto" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">Kemitraan</div>
                    <div className="text-xs text-slate-500">PRIMER KOPERASI KARTIKA</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <Package className="h-6 w-6 text-blue-600 mx-auto" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">Kualitas</div>
                    <div className="text-xs text-slate-500">Terjamin</div>
                  </div>
                </div>

                {onCertificatesClick && (
                  <button
                    onClick={onCertificatesClick}
                    className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 shadow-lg"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Lihat Legalitas Lengkap</span>
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