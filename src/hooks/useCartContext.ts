import { useContext } from 'react';
import { CartContext, CartContextType } from '../App';

// Hook for cart operations
const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }

    return context;
};

export default useCartContext;
