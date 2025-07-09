import React, { useState } from 'react';
import {
    useProducts,
    useCaseStudies,
    useCertificates,
    useLegalDocuments,
    useCartContext
} from '../../hooks';

import { Product } from '../../data/unifiedSchema';

const DashboardExample: React.FC = () => {
    // Get data from our hooks
    const { products } = useProducts();
    const { caseStudies } = useCaseStudies();
    const { certificates } = useCertificates();
    const { legalDocuments } = useLegalDocuments();
    const { items: cartItems, getTotalItems, getTotalPrice, addItem } = useCartContext();

    // State for active tab
    const [activeTab, setActiveTab] = useState<'products' | 'caseStudies' | 'certificates' | 'legal' | 'cart'>('products');

    // Format price
    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    };

    // Add product to cart
    const handleAddToCart = (product: Product) => {
        addItem({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            duration: 1,
            image: product.images[0] || '',
            category: product.category
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-7xl mx-auto my-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Unified Data Dashboard</h2>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-800">Products</h3>
                    <p className="text-3xl font-bold text-blue-600">{products.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-800">Case Studies</h3>
                    <p className="text-3xl font-bold text-green-600">{caseStudies.length}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-semibold text-purple-800">Certificates</h3>
                    <p className="text-3xl font-bold text-purple-600">{certificates.length}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h3 className="text-lg font-semibold text-amber-800">Legal Docs</h3>
                    <p className="text-3xl font-bold text-amber-600">{legalDocuments.length}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="text-lg font-semibold text-red-800">Cart</h3>
                    <p className="text-3xl font-bold text-red-600">{getTotalItems()}</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-200 mb-6">
                <nav className="flex overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`py-3 px-6 border-b-2 ${activeTab === 'products'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-slate-600 hover:text-blue-600'
                            } font-medium`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab('caseStudies')}
                        className={`py-3 px-6 border-b-2 ${activeTab === 'caseStudies'
                                ? 'border-green-600 text-green-600'
                                : 'border-transparent text-slate-600 hover:text-green-600'
                            } font-medium`}
                    >
                        Case Studies
                    </button>
                    <button
                        onClick={() => setActiveTab('certificates')}
                        className={`py-3 px-6 border-b-2 ${activeTab === 'certificates'
                                ? 'border-purple-600 text-purple-600'
                                : 'border-transparent text-slate-600 hover:text-purple-600'
                            } font-medium`}
                    >
                        Certificates
                    </button>
                    <button
                        onClick={() => setActiveTab('legal')}
                        className={`py-3 px-6 border-b-2 ${activeTab === 'legal'
                                ? 'border-amber-600 text-amber-600'
                                : 'border-transparent text-slate-600 hover:text-amber-600'
                            } font-medium`}
                    >
                        Legal Documents
                    </button>
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`py-3 px-6 border-b-2 ${activeTab === 'cart'
                                ? 'border-red-600 text-red-600'
                                : 'border-transparent text-slate-600 hover:text-red-600'
                            } font-medium`}
                    >
                        Cart ({getTotalItems()})
                    </button>
                </nav>
            </div>

            {/* Content for each tab */}
            <div className="mt-4">
                {/* Products Tab */}
                {activeTab === 'products' && (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-slate-800">Products ({products.length})</h3>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                Add New Product
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.slice(0, 6).map((product) => (
                                <div key={product.id} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                                    {product.images && product.images[0] && (
                                        <div className="h-40 overflow-hidden">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-4">
                                        <div className="flex justify-between mb-2">
                                            <h4 className="text-lg font-semibold text-slate-800">{product.name}</h4>
                                            <span className="text-blue-600 font-bold">{formatPrice(product.price)}</span>
                                        </div>
                                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">{product.shortDescription || product.description.substring(0, 100)}</p>
                                        <div className="flex justify-between items-center">
                                            <span className={`px-2 py-1 rounded-full text-xs ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {products.length > 6 && (
                            <div className="text-center mt-6">
                                <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded hover:bg-slate-200">
                                    View More Products
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Case Studies Tab */}
                {activeTab === 'caseStudies' && (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-slate-800">Case Studies ({caseStudies.length})</h3>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                Add New Case Study
                            </button>
                        </div>

                        <div className="space-y-4">
                            {caseStudies.slice(0, 3).map((caseStudy) => (
                                <div key={caseStudy.id} className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                                    <div className="flex justify-between mb-2">
                                        <h4 className="text-lg font-semibold text-slate-800">{caseStudy.title}</h4>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                                            {caseStudy.clientIndustry}
                                        </span>
                                    </div>

                                    <p className="text-slate-600 mb-4">{caseStudy.summary}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                        <div className="bg-slate-50 p-3 rounded">
                                            <h5 className="font-semibold text-slate-800 mb-1">Challenges</h5>
                                            <ul className="text-sm text-slate-600 space-y-1">
                                                {caseStudy.challenges.slice(0, 2).map((challenge, idx) => (
                                                    <li key={idx}>• {challenge}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-slate-50 p-3 rounded">
                                            <h5 className="font-semibold text-slate-800 mb-1">Solutions</h5>
                                            <ul className="text-sm text-slate-600 space-y-1">
                                                {caseStudy.solutions.slice(0, 2).map((solution, idx) => (
                                                    <li key={idx}>• {solution}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-slate-50 p-3 rounded">
                                            <h5 className="font-semibold text-slate-800 mb-1">Results</h5>
                                            <ul className="text-sm text-slate-600 space-y-1">
                                                {caseStudy.results.slice(0, 2).map((result, idx) => (
                                                    <li key={idx}>• {result}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-slate-600 text-sm">
                                                Client Type: <span className="font-medium">{caseStudy.clientType}</span>
                                            </span>
                                        </div>
                                        <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {caseStudies.length > 3 && (
                            <div className="text-center mt-6">
                                <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded hover:bg-slate-200">
                                    View More Case Studies
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Certificates Tab */}
                {activeTab === 'certificates' && (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-slate-800">Certificates ({certificates.length})</h3>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                                Add New Certificate
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certificates.map((certificate) => (
                                <div key={certificate.id} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                                    <div className="h-48 overflow-hidden bg-slate-100">
                                        {certificate.image ? (
                                            <img
                                                src={certificate.image}
                                                alt={certificate.title}
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full bg-purple-50">
                                                <span className="text-purple-400">No Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between mb-2">
                                            <h4 className="text-lg font-semibold text-slate-800">{certificate.title}</h4>
                                            <span className={`px-2 py-1 rounded-full text-xs ${certificate.status === 'active'
                                                    ? 'bg-green-100 text-green-800'
                                                    : certificate.status === 'expired'
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {certificate.status.charAt(0).toUpperCase() + certificate.status.slice(1)}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 text-sm mb-2">Issued by: {certificate.issuer}</p>
                                        <p className="text-slate-600 text-xs mb-4">
                                            Valid: {new Date(certificate.issueDate).toLocaleDateString()} -
                                            {certificate.expiryDate ? new Date(certificate.expiryDate).toLocaleDateString() : 'Permanent'}
                                        </p>
                                        <button className="w-full bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 text-sm">
                                            View Certificate
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Legal Documents Tab */}
                {activeTab === 'legal' && (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-slate-800">Legal Documents ({legalDocuments.length})</h3>
                            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700">
                                Add New Document
                            </button>
                        </div>

                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Document
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Issue Date
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                    {legalDocuments.map((doc) => (
                                        <tr key={doc.id}>
                                            <td className="py-4 pl-4 pr-3 text-sm">
                                                <div className="font-medium text-slate-800">{doc.title}</div>
                                                <div className="text-slate-500">{doc.documentNumber}</div>
                                            </td>
                                            <td className="px-3 py-4 text-sm text-slate-600">
                                                {doc.type}
                                            </td>
                                            <td className="px-3 py-4 text-sm text-slate-600">
                                                {new Date(doc.issueDate).toLocaleDateString()}
                                            </td>
                                            <td className="px-3 py-4 text-sm">
                                                <span className={`px-2 py-1 rounded-full text-xs ${doc.status === 'active'
                                                        ? 'bg-green-100 text-green-800'
                                                        : doc.status === 'expired'
                                                            ? 'bg-red-100 text-red-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-3 py-4 text-sm">
                                                <button className="text-blue-600 hover:text-blue-900">View</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Cart Tab */}
                {activeTab === 'cart' && (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-slate-800">Shopping Cart</h3>
                            <div className="text-lg font-bold text-slate-800">
                                Total: {formatPrice(getTotalPrice())}
                            </div>
                        </div>

                        {cartItems.length === 0 ? (
                            <div className="bg-slate-50 p-8 text-center rounded-lg">
                                <p className="text-slate-500 mb-4">Your cart is empty</p>
                                <button
                                    onClick={() => setActiveTab('products')}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Browse Products
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className="space-y-4 mb-6">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex">
                                            {item.image && (
                                                <div className="w-24 h-24 mr-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <div className="flex justify-between mb-2">
                                                    <h4 className="text-lg font-semibold text-slate-800">{item.name}</h4>
                                                    <span className="font-bold text-blue-600">{formatPrice(item.price)}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <span className="text-slate-600 mr-2">Qty: {item.quantity}</span>
                                                        <span className="text-slate-600">Duration: {item.duration} months</span>
                                                    </div>
                                                    <span className="font-bold text-blue-600">
                                                        Subtotal: {formatPrice(item.price * item.quantity * item.duration)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between">
                                    <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded hover:bg-slate-200">
                                        Clear Cart
                                    </button>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardExample;
