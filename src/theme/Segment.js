import { useLocation } from '@docusaurus/router';

import '@site/static/analytics.js';
import { useEffect } from 'react';

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
