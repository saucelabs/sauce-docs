import React from 'react';
import OriginalAnnouncementBar from '@theme-original/AnnouncementBar';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * App Distribution ships in two flavors: the current platform and the classic
 * (TestFairy-based) one. Each Getting Started page gets a bar pointing at the
 * other set of docs, so readers always know which one they landed on.
 * Every other page falls through to the site announcement bar.
 */
const VERSION_BARS = [
    {
        path: '/app-distribution/general/getting-started',
        label: "You're viewing the latest App Distribution documentation. If you're using the Classic App Distribution experience,",
        linkLabel: 'view the Classic documentation',
        linkTo: '/testfairy/',
    },
    {
        path: '/testfairy',
        label: "You're viewing the Classic documentation of App Distribution. If you're using the latest App Distribution experience,",
        linkLabel: 'view the latest documentation',
        linkTo: '/app-distribution/general/getting-started/',
    },
];

// Trailing slashes vary between the dev server and the built site.
function normalize(pathname) {
    return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

function VersionBar({ bar }) {
    return (
        <div className={styles.versionBar} role='navigation'>
            <span className={styles.versionBarLabel}>{bar.label}</span>
            <Link className={styles.versionBarLink} to={bar.linkTo}>
                {bar.linkLabel} →
            </Link>
        </div>
    );
}

export default function AnnouncementBarWrapper(props) {
    const { pathname } = useLocation();
    const { withBaseUrl } = useBaseUrlUtils();
    const current = normalize(pathname);
    const bar = VERSION_BARS.find(
        (it) => normalize(withBaseUrl(it.path)) === current
    );

    if (bar) {
        return <VersionBar bar={bar} />;
    }

    return <OriginalAnnouncementBar {...props} />;
}
