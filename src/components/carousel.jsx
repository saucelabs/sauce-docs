/* eslint-disable react/jsx-key */
import React from 'react';
/* package: https://www.npmjs.com/package/react-alice-carousel */
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    // eslint-disable-next-line react/jsx-key
    <div className='quickstart' onDragStart={handleDragStart}>
        <a
            href='/mobile-apps/automated-testing/appium/quickstart/'
            target='_self'
        >
            <img src='img/quickstart/appium.svg' alt='Appium Logo' />
            <h3>Appium</h3>
        </a>
    </div>,
    <div className='quickstart' onDragStart={handleDragStart}>
        <a
            href='/web-apps/automated-testing/selenium/quickstart/'
            target='_self'
        >
            <img src='img/quickstart/selenium.svg' alt='Selenium Logo' />
            <h3>Selenium</h3>
        </a>
    </div>,
    <div className='quickstart' onDragStart={handleDragStart}>
        <a
            href='/mobile-apps/automated-testing/espresso-xcuitest/'
            target='_self'
        >
            <img src='img/quickstart/espresso.png' alt='Espresso Logo' />
            <h3>Espresso</h3>
        </a>
    </div>,
    <div className='quickstart' onDragStart={handleDragStart}>
        <a
            href='/mobile-apps/automated-testing/espresso-xcuitest/'
            target='_self'
        >
            <img src='img/quickstart/xcuitest.png' alt='XCUITest Logo' />
            <h3>XCUITest</h3>
        </a>
    </div>,
    <div className='quickstart' onDragStart={handleDragStart}>
        <a
            href='/web-apps/automated-testing/cypress/quickstart/'
            target='_self'
        >
            <img src='img/quickstart/cypress.svg' alt='Cypress Logo' />
            <h3>Cypress</h3>
        </a>
    </div>,
    <div className='quickstart' onDragStart={handleDragStart}>
        <a
            href='/web-apps/automated-testing/testcafe/quickstart/'
            target='_self'
        >
            <img src='img/quickstart/testcafe.svg' alt='TestCafe Logo' />
            <h3>TestCafe</h3>
        </a>
    </div>,
    <div className='quickstart' onDragStart={handleDragStart}>
        <a
            href='/web-apps/automated-testing/playwright/quickstart/'
            target='_self'
        >
            <img src='img/quickstart/playwright.png' alt='Playwright Logo' />
            <h3>Playwright</h3>
        </a>
    </div>,
];

const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
};

function Carousel() {
    return (
        <AliceCarousel
            className='alice-carousel__prev-btn'
            mouseTracking
            items={items}
            responsive={responsive}
        />
    );
}

export default Carousel;
