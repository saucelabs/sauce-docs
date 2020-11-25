import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Run Live Tests',
    imageUrl: 'img/SDET_Developer_Bot_EXPORT.png',
    buttonText: 'Run Now',
    slugName: 'web-apps/live-testing',

    description: (
      <>
          See how your app or site performs on any supported browser, OS, or device,
          when you manually test it in our UI.
      </>
    ),
  },
  {
    title: 'Integrate Your Test Suite',
    imageUrl: 'img/INFOSEC_Bot_EXPORT.png',
    buttonText: 'Integrate Now',
    slugName: 'web-apps/automated-testing/selenium',
    description: (
      <>
          If you already have automated tests,
          you're only a few steps away from running them on
          the world's largest continuous testing cloud.
      </>
    ),
  },
  {
    title: 'Learn Automation',
    imageUrl: 'img/QA_Bot_EXPORT.png',
    buttonText: 'Automate Now',
    slugName: 'web-apps/automated-testing',
    description: (
      <>
          To level-up your testing skills, browse our automation docs and transfrom
          into an test automation hero.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, slugName, buttonText}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
        <div className={styles.buttons}>
            <Link
                className={clsx(
                    'button button--outline button--secondary button--lg',
                    styles.pathButton,
                )}
                to={useBaseUrl(slugName)}>
                {buttonText}
            </Link>
        </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('overview')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
