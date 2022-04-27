import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Community from './community';
import QuickStart from './quickstart';
import Resources from './resources';

import styles from './styles.module.css';
import SearchBar from "../theme/SearchBar";

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Sauce Labs Documentation, Developer Community & Resources`}
      description='Sauce Labs Documentation, Developer Community and Resources'
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <div>
            <h1 className='hero__title'>{siteConfig.title}</h1>
            <p className='hero__subtitle'>{siteConfig.tagline}</p>
            <div className='new-search'>
              <SearchBar />
            </div>
            {/* style needs to contain hero to override as hero has priority */}
            <span className='hero__popular-searches'>
              Popular Searches:&nbsp;
              <a
                className='hero__popular-searches'
                href='https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl/'
              >
                &nbsp;saucectl |
              </a>
              <a className='hero__popular-searches' href='https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/'>
                &nbsp;Sauce Connect |
              </a>
              <a className='hero__popular-searches' href='https://docs.saucelabs.com/api-testing/index.html'>
                &nbsp;API Testing |
              </a>
              <a
                className='hero__popular-searches'
                href='https://docs.saucelabs.com/web-apps/automated-testing/selenium/selenium4/'
              >
                &nbsp;Selenium 4 |
              </a>
              <a className='hero__popular-searches' href='https://docs.saucelabs.com/dev/api/'>
                &nbsp;REST API
              </a>
            </span>
          </div>
          <div>
            <img className='landpage'  src='img/dev-resources-hero.png' />
          </div>
        </div>
      </header>
      <main>
        <div className='main__container'>
          <div className='main__container-quickstart'>
            <QuickStart />
          </div>
          <div className='main__container-inner'>
            <Community />
          </div>
          <div className='main__container-inner'>
            <Resources />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
