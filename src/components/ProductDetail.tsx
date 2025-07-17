import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Star, Check, Shield, Award, Clock, MessageCircle, Phone } from 'lucide-react';
import { CartItem } from '../data/unifiedSchema';

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack, onAddToCart }) => {
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');

  const productData = {
    'atk-001': {
      name: 'Paket ATK Lengkap Kantor',
      category: 'ATK',
      price: 150000,
      originalPrice: 180000,
      rating: 4.8,
      reviews: 45,
      images: [
        'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Paket lengkap alat tulis kantor berkualitas untuk kebutuhan administrasi sehari-hari. Cocok untuk kantor, sekolah, dan keperluan pribadi dengan harga yang sangat terjangkau.',
      features: [
        'Pulpen gel 12 pcs (biru, hitam, merah)',
        'Pensil 2B 6 pcs berkualitas tinggi',
        'Penghapus putih 4 pcs',
        'Penggaris 30cm 2 pcs',
        'Spidol permanent 6 pcs',
        'Kertas HVS A4 1 rim (500 lembar)',
        'Map plastik 10 pcs',
        'Stapler + isi staples',
        'Paper clip 1 box',
        'Correction pen 2 pcs'
      ],
      specifications: {
        'Isi Paket': '10 jenis ATK lengkap',
        'Kualitas': 'Grade A, tahan lama',
        'Kemasan': 'Box eksklusif Koperasi Kodim 007',
        'Garansi': '30 hari tukar barang rusak',
        'Pengiriman': 'Gratis ongkir area Banjarmasin'
      },
      testimonials: [
        {
          name: 'Ibu Sari - Guru SD',
          rating: 5,
          comment: 'ATK lengkap dan berkualitas, harga sangat terjangkau. Anak-anak suka dengan kualitas pulpennya.'
        },
        {
          name: 'Pak Budi - Staff Kantor',
          rating: 5,
          comment: 'Paket ATK yang sangat lengkap, cocok untuk kebutuhan kantor sehari-hari. Harga murah meriah!'
        }
      ],
      inStock: true,
      badge: 'Terlaris',
      showPrice: true
    },
    'jasa-keamanan': {
      name: 'Jasa Pengamanan & Keamanan Profesional',
      category: 'Jasa Khusus',
      price: 0,
      originalPrice: 0,
      rating: 5.0,
      reviews: 12,
      images: [
        'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Layanan pengamanan profesional dengan personel berpengalaman militer. Meliputi pengamanan acara, pengawalan, dan keamanan fasilitas dengan standar tinggi sesuai kebutuhan klien.',
      features: [
        'Personel berpengalaman militer (ex-TNI/Polri)',
        'Pengamanan acara VIP dan korporat',
        'Pengawalan personal dan korporat',
        'Keamanan fasilitas 24/7',
        'Pelatihan keamanan khusus',
        'Konsultasi keamanan gratis',
        'Sistem komunikasi terintegrasi',
        'Respons cepat situasi darurat'
      ],
      specifications: {
        'Personel': 'Ex-TNI/Polri berpengalaman',
        'Sertifikasi': 'Gada Pratama & Madya',
        'Peralatan': 'Standar militer',
        'Cakupan': 'Lokal & regional',
        'Konsultasi': 'Gratis survey lokasi',
        'Harga': 'Sesuai permintaan dan kebutuhan'
      },
      testimonials: [
        {
          name: 'PT. Banjarmasin Sejahtera',
          rating: 5,
          comment: 'Layanan keamanan sangat profesional. Tim berpengalaman dan dapat diandalkan untuk menjaga keamanan perusahaan.'
        }
      ],
      inStock: true,
      badge: 'Premium',
      showPrice: false
    },
    'sembako-001': {
      name: 'Beras Premium 5kg',
      category: 'Sembako',
      price: 65000,
      originalPrice: 75000,
      rating: 4.7,
      reviews: 156,
      images: [
        'https://images.pexels.com/photos/33239/wheat-field-wheat-yellow-grain.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Beras premium kualitas terbaik, pulen, wangi, dan bergizi tinggi. Langsung dari petani lokal Kalimantan Selatan dengan proses sortir yang ketat.',
      features: [
        'Beras premium grade A',
        'Pulen dan wangi alami',
        'Bebas kutu dan kotoran',
        'Kemasan higienis 5kg',
        'Langsung dari petani lokal Kalsel',
        'Sudah disortir berkualitas'
      ],
      specifications: {
        'Berat': '5 kg',
        'Jenis': 'Beras putih premium',
        'Asal': 'Petani lokal Kalsel',
        'Kemasan': 'Karung plastik food grade',
        'Expired': '6 bulan dari tanggal produksi'
      },
      testimonials: [
        {
          name: 'Ibu Ratna - Ibu Rumah Tangga',
          rating: 5,
          comment: 'Beras pulen dan enak, keluarga suka. Harga lebih murah dari supermarket tapi kualitas sama bagusnya.'
        }
      ],
      inStock: true,
      badge: 'Populer',
      showPrice: true
    }
  };

  const currentProduct = productData[productId as keyof typeof productData];

  if (!currentProduct) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800">Produk tidak ditemukan</h1>
            <button onClick={onBack} className="mt-4 text-blue-600 hover:text-blue-700">
              Kembali ke katalog
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const calculateTotal = () => {
    return currentProduct.price * selectedDuration;
  };

  const calculateSavings = () => {
    return (currentProduct.originalPrice - currentProduct.price) * selectedDuration;
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Kembali ke Katalog</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src={currentProduct.images[0]}
                alt={currentProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {currentProduct.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-white shadow-md">
                  <img
                    src={image}
                    alt={`${currentProduct.name} ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {currentProduct.category}
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentProduct.badge}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">{currentProduct.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(currentProduct.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-slate-300'
                        }`}
                    />
                  ))}
                </div>
                <span className="text-slate-600">
                  {currentProduct.rating} ({currentProduct.reviews} ulasan)
                </span>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              {currentProduct.showPrice ? (
                <>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      {formatPrice(currentProduct.price)}
                    </span>
                    {currentProduct.originalPrice > currentProduct.price && (
                      <span className="text-xl text-slate-400 line-through">
                        {formatPrice(currentProduct.originalPrice)}
                      </span>
                    )}
                  </div>

                  {calculateSavings() > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <span className="text-blue-800 font-medium">
                        Hemat {formatPrice(calculateSavings())}!
                      </span>
                    </div>
                  )}

                  {/* Duration Selector for non-service products */}
                  {currentProduct.category !== 'Jasa Khusus' && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-slate-700 mb-3">
                        Jumlah:
                      </label>
                      <div className="grid grid-cols-4 gap-3">
                        {[1, 2, 3, 5].map((duration) => (
                          <button
                            key={duration}
                            onClick={() => setSelectedDuration(duration)}
                            className={`p-3 rounded-lg border-2 transition-colors ${selectedDuration === duration
                              ? 'border-blue-600 bg-blue-50 text-blue-800'
                              : 'border-slate-200 hover:border-slate-300'
                              }`}
                          >
                            <div className="font-semibold">{duration}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Total Calculation */}
                  <div className="border-t border-slate-200 pt-4 mb-6">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-blue-600">{formatPrice(calculateTotal())}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => onAddToCart({
                        id: `cart-${Date.now()}`,
                        productId: productId,
                        name: currentProduct.name,
                        price: currentProduct.price,
                        duration: selectedDuration,
                        image: currentProduct.images[0],
                        category: currentProduct.category
                      })}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Tambah ke Keranjang</span>
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>Chat Admin</span>
                      </button>
                      <button className="bg-slate-600 hover:bg-slate-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Telepon</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center py-6">
                    <div className="text-2xl font-bold text-slate-600 mb-4">
                      Harga Sesuai Permintaan
                    </div>
                    <p className="text-slate-600 mb-6">
                      Layanan premium dengan harga yang disesuaikan dengan kebutuhan spesifik Anda.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                      <MessageCircle className="h-5 w-5" />
                      <span>Hubungi Admin untuk Konsultasi</span>
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Telepon</span>
                      </button>
                      <button className="bg-slate-600 hover:bg-slate-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-slate-800">Terpercaya</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-slate-800">Berkualitas</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-sm font-medium text-slate-800">Pelayanan Cepat</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-slate-200">
            <div className="flex space-x-8 px-8 overflow-x-auto">
              {['overview', 'specifications', 'testimonials'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors capitalize whitespace-nowrap ${activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                    }`}
                >
                  {tab === 'overview' ? 'Fitur Lengkap' :
                    tab === 'specifications' ? 'Spesifikasi' : 'Testimoni'}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Fitur Lengkap</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Spesifikasi</h3>
                <div className="space-y-4">
                  {Object.entries(currentProduct.specifications).map(([key, value], index) => (
                    <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="md:w-1/3 mb-2 md:mb-0">
                          <span className="font-semibold text-slate-800">{key}</span>
                        </div>
                        <div className="md:w-2/3">
                          <span className="text-slate-700">{value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Testimoni Pelanggan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentProduct.testimonials.map((testimonial, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;