import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Community from './community';
import QuickStart from './quickstart';
import Resources from './resources';

import styles from './styles.module.css';
import HomeSearch from "./home-search";

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
          <HomeSearch />
          <span className="hero__popular">
            Popular Searches:
              <a href="https://docs.saucelabs.com/testrunner-toolkit/installation/"> saucectl | </a>
              <a href="https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/"> Sauce Connect | </a>
              <a href="https://docs.saucelabs.com/api-testing/metrics-logs/"> API Testing |</a>
              <a href="/docs/getting-started/tutorials/getting-started-with-sauce-connect"> Selenium 4 | </a>
              <a href="https://docs.saucelabs.com/dev/api/"> REST API</a>
          </span>
        </div>
      </header>
      <main>
        <div className="main__container">
          <div className="main__container-quickstart">
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
