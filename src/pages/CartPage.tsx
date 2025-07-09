import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import useCartContext from '../hooks/useCartContext';
import { CartItem } from '../data/unifiedSchema';

const CartPage: React.FC = () => {
    const navigate = useNavigate();
    const { items: cartItems, updateQuantity: updateCartQuantity, removeItem: removeFromCart, getTotalPrice } = useCartContext();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    };

    const getContractType = (itemId: string) => {
        if (itemId === 'security-corporate' || itemId === 'cleaning-corporate' || itemId === 'sales-corporate') {
            return 'Kontrak Tahunan';
        }
        return 'Kontrak Bulanan';
    };

    const getItemTotal = (item: CartItem) => {
        // For corporate packages, price is already yearly
        if (item.id === 'security-corporate' || item.id === 'cleaning-corporate' || item.id === 'sales-corporate') {
            return item.price * item.quantity;
        }
        // For other items, multiply by duration
        return item.price * item.quantity * item.duration;
    };

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50 pt-8 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <button
                            onClick={() => navigate('/katalog')}
                            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors mb-4"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span>Kembali ke Katalog</span>
                        </button>
                        <h1 className="text-3xl font-bold text-slate-800">Keranjang Belanja</h1>
                    </div>

                    {/* Empty State */}
                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                        <ShoppingCart className="h-24 w-24 text-slate-300 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Keranjang Kosong</h2>
                        <p className="text-slate-600 mb-8 max-w-md mx-auto">
                            Belum ada produk di keranjang Anda. Mulai berbelanja dan tambahkan layanan yang Anda butuhkan.
                        </p>
                        <button
                            onClick={() => navigate('/katalog')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span>Mulai Berbelanja</span>
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 pt-8 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/katalog')}
                        className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors mb-4"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span>Kembali ke Katalog</span>
                    </button>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Keranjang Belanja ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-lg"
                                    />

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.name}</h3>
                                                <div className="space-y-1 text-sm text-slate-600">
                                                    <div>Kategori: <span className="capitalize">{item.category}</span></div>
                                                    <div>Tipe: <span className="font-medium">{getContractType(item.productId)}</span></div>
                                                    {item.duration > 1 && (
                                                        <div>Durasi: <span className="font-medium">{item.duration} bulan</span></div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <div className="text-xl font-bold text-blue-600 mb-2">
                                                    {formatPrice(getItemTotal(item))}
                                                </div>
                                                <div className="text-sm text-slate-500">
                                                    {formatPrice(item.price)} × {item.quantity}
                                                    {item.duration > 1 && ` × ${item.duration} bulan`}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-sm font-medium text-slate-700">Jumlah:</span>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}
                                                        className="p-1 rounded-md hover:bg-slate-100 transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="h-4 w-4 text-slate-600" />
                                                    </button>
                                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}
                                                        className="p-1 rounded-md hover:bg-slate-100 transition-colors"
                                                    >
                                                        <Plus className="h-4 w-4 text-slate-600" />
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.productId)}
                                                className="text-red-600 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-md"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-800 mb-6">Ringkasan Pesanan</h3>

                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between text-sm">
                                        <span className="text-slate-600 truncate mr-2">
                                            {item.name} ({item.quantity}x)
                                        </span>
                                        <span className="font-medium text-slate-800">
                                            {formatPrice(getItemTotal(item))}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-slate-200 pt-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-slate-800">Total</span>
                                    <span className="text-xl font-bold text-blue-600">
                                        {formatPrice(getTotalPrice())}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors"
                                >
                                    Lanjut ke Checkout
                                </button>
                                <button
                                    onClick={() => navigate('/katalog')}
                                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-lg font-medium transition-colors"
                                >
                                    Lanjut Belanja
                                </button>
                            </div>

                            <div className="mt-6 text-xs text-slate-500 text-center">
                                <p>💡 Semua harga sudah termasuk pajak</p>
                                <p>🔒 Transaksi aman dan terpercaya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;
