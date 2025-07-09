import { Product } from '../data/unifiedSchema';
import useData from './useData';

// Hook for product-related operations
const useProducts = () => {
    const { products, service, refreshData } = useData();

    return {
        products,
        getProductById: (id: string) => service.getProductById(id),
        getProductsByCategory: (category: string) => service.getProductsByCategory(category),
        createProduct: async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>) => {
            const result = service.createProduct(product);
            await refreshData();
            return result;
        },
        updateProduct: async (id: string, updates: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>) => {
            const result = service.updateProduct(id, updates);
            await refreshData();
            return result;
        },
        deleteProduct: async (id: string) => {
            const result = service.deleteProduct(id);
            await refreshData();
            return result;
        }
    };
};

export default useProducts;
