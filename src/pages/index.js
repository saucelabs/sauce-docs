import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Community from './community';
import QuickStart from './quickstart';
import Resources from './resources';

import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Sauce Labs Documentation, Developer Community & Resources`}
      description="Sauce Labs Documentation, Developer Community and Resources">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'hero__button',
                styles.getStarted,
              )}
              to={useBaseUrl('overview')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="main__container">
          <div className="main__container-inner">
            <QuickStart />
          </div>
          <div className="main__container-inner">
            <Community />
          </div>
          <div className="main__container-inner">
            <Resources />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
