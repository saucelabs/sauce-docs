import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const ShowcaseItems = [
    {
        id: 1,
        name: 'Java Selenium',
        image: require('@site/static/img/hosted/selenium.png'),
        url: 'https://github.com/saucelabs-training/demo-java',
        description: (
            <Translate id='playground.codesandbox.description'>
                Java example project for both Selenium and Appium tests.
            </Translate>
        ),
    },
    {
        id: 2,
        name: 'WebdriverIO',
        image: require('@site/static/img/hosted/webdriverio.png'),
        url: 'https://github.com/saucelabs-training/demo-js',
        description: (
            <Translate id='showcase.webdriverio.description'>
                Javascript example using the famous WebdriverIO framework.
            </Translate>
        ),
    },
    {
        id: 3,
        name: 'Python',
        image: require('@site/static/img/hosted/python.png'),
        url: 'https://github.com/saucelabs-training/demo-python',
        description: (
            <Translate id='showcase.python.description'>
                Python example running on Sauce Orchestrate.
            </Translate>
        ),
    },
    {
        id: 4,
        name: 'Hoppscotch',
        image: require('@site/static/img/hosted/hoppscotch.png'),
        url: 'https://github.com/cb-sl/saucectl-hoppscotch-example-cb',
        description: (
            <Translate id='playground.hoppscotch.description'>
                Run API tests using Hoppscotch!
            </Translate>
        ),
    },
    {
        id: 5,
        name: 'Postman',
        image: require('@site/static/img/hosted/postman.png'),
        url: 'https://github.com/cb-sl/saucectl-newman-example-cb',
        description: (
            <Translate id='playground.newman.description'>
                Run API tests using Postman!
            </Translate>
        ),
    },
    {
        id: 6,
        name: 'Grafana k6',
        image: require('@site/static/img/hosted/grafana-k6.png'),
        url: 'https://github.com/cb-sl/saucectl-k6-example-cb',
        description: (
            <Translate id='playground.grafana-k6.description'>
                Run API tests using Grafana k6!
            </Translate>
        ),
    },
    {
        id: 7,
        name: 'Mock Backend',
        image: require('@site/static/img/hosted/swaglabs.png'),
        url: 'https://github.com/saucelabs/sample-app-web',
        description: (
            <Translate id='playground.node.description'>
                Run tests and deploy your backend application, useful for
                running a mock backend.
            </Translate>
        ),
    },
];

const OrchestrateShowcase = () => {
    return (
        <div className='row'>
            {ShowcaseItems.map((playground) => (
                <div
                    className='col col--6 margin-bottom--lg'
                    key={playground.id}
                >
                    <div className={clsx('card')}>
                        <div className={clsx('card__image')}>
                            <Link to={playground.url}>
                                <Image img={playground.image} />
                            </Link>
                        </div>
                        <div className='card__body'>
                            <Heading as='h3'>{playground.name}</Heading>
                            <p>{playground.description}</p>
                        </div>
                        <div className='card__footer'>
                            <div className='button-group button-group--block'>
                                <Link
                                    className='button button--secondary'
                                    to={playground.url}
                                >
                                    Check it Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default OrchestrateShowcase;
