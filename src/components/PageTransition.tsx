import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPath(location.pathname);
        setIsTransitioning(false);
      }, 500);
    }
  }, [location.pathname, currentPath]);

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-transform duration-500 ${
        isTransitioning ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="loading-spinner" />
      </div>
    </div>
  );
};

export default PageTransition; 