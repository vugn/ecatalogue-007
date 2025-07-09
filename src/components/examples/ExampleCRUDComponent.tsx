import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import useCaseStudies from '../../hooks/useCaseStudies';
import { Product, ProductType } from '../../data/unifiedSchema';

// Example component showing how to use the unified data structure
const ExampleCRUDComponent: React.FC = () => {
    const {
        products,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct
    } = useProducts();

    const {
        getCaseStudiesByProductId
    } = useCaseStudies();

    // State for forms
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

    // Handler for product creation
    const handleCreateProduct = async () => {
        // Example of creating a new product with minimal required fields
        // In a real app, you would use a form to collect all required data
        try {
            const newProduct: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'isActive'> = {
                name: productName,
                category: 'security',
                slug: productName.toLowerCase().replace(/\s+/g, '-'),
                type: ProductType.INDIVIDUAL,
                price: productPrice,
                originalPrice: productPrice,
                discountPercentage: 0,
                rating: 0,
                reviews: 0,
                images: [],
                description: '',
                shortDescription: '',
                features: [],
                specifications: {},
                testimonials: [],
                faqs: [],
                relatedProducts: [],
                badge: null,
                inStock: true,
                isPublished: false,
                caseStudies: [],
                metadata: {
                    seoTitle: productName,
                    seoDescription: '',
                    seoKeywords: []
                }
            };

            const result = await createProduct(newProduct);
            console.log('Product created:', result);
            setProductName('');
            setProductPrice(0);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    // Handler for product update
    const handleUpdateProduct = async () => {
        if (!selectedProductId) return;

        try {
            // Example of updating specific fields
            const updates = {
                price: productPrice,
                name: productName
            };

            const result = await updateProduct(selectedProductId, updates);
            console.log('Product updated:', result);
            setSelectedProductId(null);
            setProductName('');
            setProductPrice(0);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Handler for product deletion
    const handleDeleteProduct = async (id: string) => {
        try {
            const result = await deleteProduct(id);
            console.log('Product deleted:', result);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Handler for selecting a product to edit
    const handleSelectProduct = (id: string) => {
        const product = getProductById(id);
        if (product) {
            setSelectedProductId(id);
            setProductName(product.name);
            setProductPrice(product.price);
        }
    };

    // Render component
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto my-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Product Management Example</h2>

            {/* Product Creation/Update Form */}
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {selectedProductId ? 'Update Product' : 'Create New Product'}
                </h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Product Name</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Price</label>
                        <input
                            type="number"
                            value={productPrice}
                            onChange={(e) => setProductPrice(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md"
                        />
                    </div>
                    <div className="flex justify-between">
                        {selectedProductId ? (
                            <>
                                <button
                                    onClick={handleUpdateProduct}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Update Product
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedProductId(null);
                                        setProductName('');
                                        setProductPrice(0);
                                    }}
                                    className="px-4 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleCreateProduct}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                            >
                                Create Product
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Product List */}
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Product List</h3>
                <div className="space-y-4">
                    {products.length === 0 ? (
                        <p className="text-slate-500">No products available</p>
                    ) : (
                        products.map(product => (
                            <div key={product.id} className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-slate-800">{product.name}</h4>
                                    <p className="text-slate-600">Rp {product.price.toLocaleString()}</p>
                                </div>
                                <div className="space-x-2">
                                    <button
                                        onClick={() => handleSelectProduct(product.id)}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Case Studies Section */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Case Studies by Product</h3>

                <div className="space-y-4">
                    {products.map(product => {
                        const productCaseStudies = getCaseStudiesByProductId(product.id);

                        return (
                            <div key={product.id} className="border border-slate-200 rounded-lg p-4">
                                <h4 className="font-semibold text-slate-800 mb-2">{product.name}</h4>

                                {productCaseStudies.length > 0 ? (
                                    <div className="pl-4 border-l-2 border-blue-400">
                                        {productCaseStudies.map(caseStudy => (
                                            <div key={caseStudy.id} className="mb-3">
                                                <p className="font-medium text-slate-700">{caseStudy.title}</p>
                                                <p className="text-sm text-slate-500">{caseStudy.summary}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-slate-500 text-sm">No case studies available for this product</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExampleCRUDComponent;
