import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Community from './community';
import QuickStart from './quickstart';
import Resources from './resources';
import Button from '../components/button';

import styles from './styles.module.css';
import SearchBar from '../theme/SearchBar';

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title='Sauce Labs Documentation, Developer Community & Resources'
            description='Sauce Labs Documentation, Developer Community and Resources'
        >
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className='container-landpage'>
                    <div className='column-left'>
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
                                href='/dev/cli/saucectl/#installing-saucectl/'
                            >
                                &nbsp;saucectl |
                            </a>
                            <a
                                className='hero__popular-searches'
                                href='/dev/cli/sauce-connect-proxy/'
                            >
                                &nbsp;Sauce Connect |
                            </a>
                            <a
                                className='hero__popular-searches'
                                href='/api-testing/index.html'
                            >
                                &nbsp;API Testing |
                            </a>
                            <a
                                className='hero__popular-searches'
                                href='/web-apps/automated-testing/selenium/selenium4/'
                            >
                                &nbsp;Selenium 4 |
                            </a>
                            <a
                                className='hero__popular-searches'
                                href='/dev/api/'
                            >
                                &nbsp;REST API |
                            </a>
                            <a
                                className='hero__popular-searches'
                                href='/visual-testing/'
                            >
                                &nbsp;Sauce Visual
                            </a>
                        </span>
                        <span className='landpage-buttons-container'>
                            <a href='/sauce-basics/'>
                                <Button
                                    className='button-dark'
                                    name='Get Started'
                                />
                            </a>
                            <a href='/dev/api/'>
                                <Button
                                    className='button-light'
                                    name='Sauce REST API'
                                />
                            </a>
                            <a href='/dev/cli/'>
                                <Button
                                    className='button-light'
                                    name='Sauce CLI'
                                />
                            </a>
                            <a href='/visual-testing/'>
                                <Button
                                    className='button-light'
                                    name='Sauce Visual (New)'
                                />
                            </a>
                        </span>
                    </div>
                    <div className='column-right'>
                        <img
                            className='landpage-hero'
                            src='img/developer-tier-1.png'
                        />
                    </div>
                </div>
            </header>
            <main>
                <div className='main__container'>
                    <div className='main__container-quickstart'>
                        <QuickStart />
                    </div>
                    <div className='main__container-resources'>
                        <Resources />
                    </div>
                    <div className='main__container-community'>
                        <Community />
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Home;
