import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

import '@site/static/analytics.js';

function Root({ children }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    if (window.analytics) {
      window.analytics.track('Page Viewed', {
        page: window.location.pathname,
        domain: window.location.origin,
        subject_name: 'Sauce Docs',
        product_area: 'Docs',
        product_sub_area: 'Sauce Docs',
      });
    }
  }, [pathname]);

  return children;
};

export default Root;
