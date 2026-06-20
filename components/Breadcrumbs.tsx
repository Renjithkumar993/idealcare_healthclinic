import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import { Home, ChevronRight } from 'lucide-react';

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
    <div className="d-flex align-items-center mb-4">
      <Link to="/" className="text-decoration-none text-secondary d-flex align-items-center me-2">
        <Home className="me-1" size={16} /> Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = routeNameMap[name] || name;

        return isLast ? (
          <div key={name} className="d-flex align-items-center">
            <ChevronRight className="mx-2 text-black-50" size={16} />
            <span className="text-brand-600 fw-bold bg-brand-50 px-3 py-1 rounded-pill">
              {displayName}
            </span>
          </div>
        ) : (
          <div key={name} className="d-flex align-items-center">
             <ChevronRight className="mx-2 text-black-50" size={16} />
             <Link to={routeTo} className="text-decoration-none text-secondary">
               {displayName}
             </Link>
          </div>
        );
      })}
    </div>
  );
};
