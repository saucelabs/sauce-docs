import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../pages/styles.module.css';
function NotFound() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`404 Error: ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>

            </header>
            <main>
                <div className="container">
                    <h2>404 Error: Content Does Not Exist!</h2>
                    <p>Oops, it looks like the page you're looking for either no longer exists or has been moved.</p>
                    <p>Please navigate back to the <a href="/">Home Page</a>, or use the search bar to try and find what you're looking for.</p>
                </div>
            </main>
        </Layout>
    );
}
export default NotFound;