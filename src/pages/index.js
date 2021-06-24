import React from 'react';
import ReactDOM from 'react-dom'
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomeCallouts from './home-callouts';
import DeveloperResources from './developer-resources';
import ImportantLinks from './important-links';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Sauce Labs Documentation`}
      description="Sauce Labs Documentation">
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
            <HomeCallouts></HomeCallouts>
          </div>
          <DeveloperResources></DeveloperResources>
          <ImportantLinks></ImportantLinks>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
