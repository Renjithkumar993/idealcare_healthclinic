
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const routeNameMap: Record<string, string> = {
    'about': 'About Madhu',
    'treatments': 'Our Treatments',
    'online-clinic': 'Process & Clinic',
    'contact': 'Contact Us'
  };

  return (
    <nav className="flex items-center text-sm font-medium text-slate-500 mb-8 animate-fade-in-up">
      <Link to="/" className="hover:text-brand-600 transition-colors flex items-center">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = routeNameMap[name] || name;

        return (
          <span key={name} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
            {isLast ? (
              <span className="text-brand-600 font-bold bg-brand-50 px-3 py-1 rounded-full">
                {displayName}
              </span>
            ) : (
              <Link to={routeTo} className="hover:text-brand-600 transition-colors">
                {displayName}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};
