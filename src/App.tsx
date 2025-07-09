import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
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

// Import DataProvider and CartContext
import { DataProvider } from './context/DataContext';
import useCart from './hooks/useCart';
import { CartItem } from './data/unifiedSchema';

// Create a Cart Context for the application
export interface CartContextType {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'id'>) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

// Main App Component with Router
function App() {
  return (
    <Router>
      <DataProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <ScrollToTop />
            <ScrollToTopButton />
            <Header />

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
        </CartProvider>
      </DataProvider>
    </Router>
  );
}

export default App;