import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import CertificatesPage from './pages/CertificatesPage';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  duration: number; // in months
  image: string;
  category: string;
}

// Cart Context untuk shared state
import { createContext, useContext } from 'react';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Main App Component with Router
function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // For corporate packages, price is already yearly, so don't multiply by duration
      if (item.id === 'security-corporate' || item.id === 'cleaning-corporate' || item.id === 'sales-corporate') {
        return total + (item.price * item.quantity);
      }
      // For other items, multiply by duration (monthly)
      return total + (item.price * item.quantity * item.duration);
    }, 0);
  };

  const cartContextValue: CartContextType = {
    cartItems,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice
  };

  return (
    <Router>
      <CartContext.Provider value={cartContextValue}>
        <div className="min-h-screen bg-gray-50">
          <ScrollToTop />
          <ScrollToTopButton />
          <Header
            cartItemsCount={getTotalItems()}
          />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/katalog" element={<CatalogPage />} />
            <Route path="/produk/:id" element={<ProductDetailPage />} />
            <Route path="/keranjang" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/sertifikat" element={<CertificatesPage />} />
          </Routes>

          <Footer />
        </div>
      </CartContext.Provider>
    </Router>
  );
}

export default App;