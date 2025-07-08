import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
    items: Array<{
        label: string;
        href?: string;
        onClick?: () => void;
    }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-6">
            <button
                className="flex items-center space-x-1 hover:text-slate-800 transition-colors"
                onClick={() => items[0]?.onClick?.()}
            >
                <Home className="h-4 w-4" />
                <span>Beranda</span>
            </button>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                    {item.onClick ? (
                        <button
                            onClick={item.onClick}
                            className={`hover:text-slate-800 transition-colors ${index === items.length - 1 ? 'text-slate-800 font-medium' : ''
                                }`}
                        >
                            {item.label}
                        </button>
                    ) : (
                        <span className={index === items.length - 1 ? 'text-slate-800 font-medium' : ''}>
                            {item.label}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
