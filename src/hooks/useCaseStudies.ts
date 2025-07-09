import { CaseStudy } from '../data/unifiedSchema';
import useData from './useData';

// Hook for case study operations
const useCaseStudies = () => {
    const { caseStudies, service, refreshData } = useData();

    return {
        caseStudies,
        getCaseStudyById: (id: string) => service.getCaseStudyById(id),
        getCaseStudiesByProductId: (productId: string) => service.getCaseStudiesByProductId(productId),
        createCaseStudy: async (caseStudy: Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>) => {
            const result = service.createCaseStudy(caseStudy);
            await refreshData();
            return result;
        },
        updateCaseStudy: async (id: string, updates: Partial<Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>) => {
            const result = service.updateCaseStudy(id, updates);
            await refreshData();
            return result;
        },
        deleteCaseStudy: async (id: string) => {
            const result = service.deleteCaseStudy(id);
            await refreshData();
            return result;
        }
    };
};

export default useCaseStudies;
