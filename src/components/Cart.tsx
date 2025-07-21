import React from 'react';
import { X, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';
import { CartItem } from '../data/unifiedSchema';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  totalPrice: number;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
  onCheckout
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6" />
              <span>Keranjang Belanja</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-600 mb-2">Keranjang Kosong</h3>
                <p className="text-slate-500">Tambahkan produk ke keranjang untuk melanjutkan</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 truncate">{item.name}</h4>
                        <p className="text-sm text-slate-600">{item.category}</p>
                        <p className="text-sm text-slate-600">
                          {(item.productId === 'security-corporate' || item.productId === 'cleaning-corporate' || item.productId === 'sales-corporate') ? 'Kontrak: 1 Tahun' : `Durasi: ${item.duration} bulan`}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-blue-600">
                            {(item.productId === 'security-corporate' || item.productId === 'cleaning-corporate' || item.productId === 'sales-corporate')
                              ? formatPrice(item.price)
                              : formatPrice(item.price * item.duration)}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.productId)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
                          className="p-1 hover:bg-slate-200 rounded transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-medium text-slate-800 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                          className="p-1 hover:bg-slate-200 rounded transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-sm text-slate-600">
                        Total: {(item.productId === 'security-corporate' || item.productId === 'cleaning-corporate' || item.productId === 'sales-corporate')
                          ? formatPrice(item.price * item.quantity)
                          : formatPrice(item.price * item.quantity * item.duration)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-slate-200 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-800">Total:</span>
                <span className="text-2xl font-bold text-blue-600">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors"
              >
                Lanjut ke Checkout
              </button>

              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Lanjut Belanja
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;