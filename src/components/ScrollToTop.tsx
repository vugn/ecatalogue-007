import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component to automatically scroll to top when navigating between pages
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
