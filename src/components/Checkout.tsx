import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Building, User, Calendar, CheckCircle } from 'lucide-react';
import { CartItem } from '../data/unifiedSchema';

interface CheckoutProps {
  cartItems: CartItem[];
  onBack: () => void;
  onClearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, onBack, onClearCart }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Info
    companyName: '',
    companyAddress: '',
    companyPhone: '',
    companyEmail: '',

    // Contact Person
    contactName: '',
    contactPosition: '',
    contactPhone: '',
    contactEmail: '',

    // Service Details
    startDate: '',
    notes: '',

    // Payment
    paymentMethod: 'transfer',
    agreementSigned: false
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // For corporate packages, price is already yearly, so don't multiply by duration
      if (item.productId === 'security-corporate' || item.productId === 'cleaning-corporate' || item.productId === 'sales-corporate') {
        return total + (item.price * item.quantity);
      }
      // For other items, multiply by duration (monthly)
      return total + (item.price * item.quantity * item.duration);
    }, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process order
      alert('Pesanan berhasil dikirim! Tim kami akan menghubungi Anda dalam 24 jam.');
      onClearCart();
      onBack();
    }
  };

  const steps = [
    { number: 1, title: 'Informasi Perusahaan', icon: Building },
    { number: 2, title: 'Kontak Person', icon: User },
    { number: 3, title: 'Detail Layanan', icon: Calendar },
    { number: 4, title: 'Pembayaran', icon: CreditCard }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Ringkasan Pesanan</h3>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 pb-4 border-b border-slate-200 last:border-b-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-slate-800 text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-600">{item.category}</p>
                      <p className="text-xs text-slate-600">
                        {(item.productId === 'security-corporate' || item.productId === 'cleaning-corporate' || item.productId === 'sales-corporate')
                          ? `${item.quantity}x × Kontrak Tahunan`
                          : `${item.quantity}x × ${item.duration} bulan`}
                      </p>
                      <p className="font-semibold text-blue-600 text-sm">
                        {(item.productId === 'security-corporate' || item.productId === 'cleaning-corporate' || item.productId === 'sales-corporate')
                          ? formatPrice(item.price * item.quantity)
                          : formatPrice(item.price * item.quantity * item.duration)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Subtotal:</span>
                  <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">PPN (11%):</span>
                  <span className="font-semibold">{formatPrice(getTotalPrice() * 0.11)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t border-slate-200 pt-2">
                  <span>Total:</span>
                  <span className="text-blue-600">{formatPrice(getTotalPrice() * 1.11)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Progress Steps */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Checkout Pesanan</h2>
                <div className="flex items-center space-x-4">
                  {steps.map((step) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={step.number} className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step.number ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
                          }`}>
                          {currentStep > step.number ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <IconComponent className="h-4 w-4" />
                          )}
                        </div>
                        <span className={`text-sm ${currentStep >= step.number ? 'text-white' : 'text-blue-200'}`}>
                          {step.title}
                        </span>
                        {step.number < steps.length && (
                          <div className="w-8 h-0.5 bg-blue-400"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {/* Step 1: Company Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Informasi Perusahaan</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nama Perusahaan *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="PT. Nama Perusahaan"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Perusahaan *
                        </label>
                        <input
                          type="email"
                          name="companyEmail"
                          required
                          value={formData.companyEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="info@perusahaan.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Alamat Perusahaan *
                      </label>
                      <textarea
                        name="companyAddress"
                        required
                        rows={3}
                        value={formData.companyAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Alamat lengkap perusahaan"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telepon Perusahaan *
                      </label>
                      <input
                        type="tel"
                        name="companyPhone"
                        required
                        value={formData.companyPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+62 21 1234 5678"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Person */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Kontak Person</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Nama kontak person"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Jabatan *
                        </label>
                        <input
                          type="text"
                          name="contactPosition"
                          required
                          value={formData.contactPosition}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Jabatan di perusahaan"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Kontak *
                        </label>
                        <input
                          type="email"
                          name="contactEmail"
                          required
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="email@kontak.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Telepon Kontak *
                        </label>
                        <input
                          type="tel"
                          name="contactPhone"
                          required
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+62 812 3456 7890"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Service Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Detail Layanan</h3>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Tanggal Mulai Layanan *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        required
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Catatan Khusus
                      </label>
                      <textarea
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Permintaan khusus atau catatan tambahan..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Payment */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Pembayaran & Kontrak</h3>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-4">
                        Metode Pembayaran
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="transfer"
                            checked={formData.paymentMethod === 'transfer'}
                            onChange={handleInputChange}
                            className="text-blue-600"
                          />
                          <div>
                            <div className="font-medium">Transfer Bank</div>
                            <div className="text-sm text-slate-600">Pembayaran melalui transfer bank</div>
                          </div>
                        </label>

                        <label className="flex items-center space-x-3 p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="invoice"
                            checked={formData.paymentMethod === 'invoice'}
                            onChange={handleInputChange}
                            className="text-blue-600"
                          />
                          <div>
                            <div className="font-medium">Invoice</div>
                            <div className="text-sm text-slate-600">Pembayaran dengan invoice (NET 30)</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-800 mb-3">Proses Selanjutnya:</h4>
                      <ul className="space-y-2 text-sm text-blue-700">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>Tim kami akan menghubungi Anda dalam 24 jam</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>Negosiasi dan finalisasi kontrak</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>Tanda tangan digital kontrak</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>Implementasi layanan sesuai jadwal</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreementSigned"
                        checked={formData.agreementSigned}
                        onChange={handleInputChange}
                        className="mt-1 text-blue-600"
                        required
                      />
                      <label className="text-sm text-slate-700">
                        Saya menyetujui <a href="#" className="text-blue-600 hover:underline">syarat dan ketentuan</a> serta
                        <a href="#" className="text-blue-600 hover:underline ml-1">kebijakan privasi</a> yang berlaku.
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-6 rounded-lg font-semibold transition-colors"
                    >
                      Sebelumnya
                    </button>
                  )}

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors ml-auto"
                  >
                    {currentStep === 4 ? 'Kirim Pesanan' : 'Selanjutnya'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;