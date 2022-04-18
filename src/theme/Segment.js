import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

import '@site/static/analytics.js'

const Segment = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window?.analytics?.track('Docs Page Viewed', {
      page: window.location.pathname,
      domain: window.location.origin,
      subject_name: window.location.pathname,
      product_area: 'Docs',
      product_sub_area: 'Sauce Docs',
    });
  }, [pathname]);

  return null;
};

export { Segment };
