import React from 'react';
/* package: https://www.npmjs.com/package/react-alice-carousel */
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className='quickstart' onDragStart={handleDragStart} >
    <img src='img/quickstart/appium.svg' alt='Appium Logo' />
    <h3>
      <a href='https://docs.saucelabs.com/mobile-apps/automated-testing/appium/quickstart/' target='_self'>
        Appium
      </a>
    </h3>
  </div>,
  <div className='quickstart' onDragStart={handleDragStart}>
    <img src='img/quickstart/cypress.svg' alt='Cypress Logo' />
    <h3>
      <a href='https://docs.saucelabs.com/web-apps/automated-testing/cypress/quickstart/' target='_self'>
        Cypress
      </a>
    </h3>
  </div>,
  <div className='quickstart' onDragStart={handleDragStart}>
    <img src='img/quickstart/espresso.png' alt='Espresso Logo' />
    <h3>
      <a href='https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/' target='_self'>
        Espresso
      </a>
    </h3>
  </div>,
  <div className='quickstart' onDragStart={handleDragStart}>
    <img src='img/quickstart/playwright.png' alt='Playwright Logo' />
    <h3>
      <a href='https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/' target='_self'>
        Playwright
      </a>
    </h3>
  </div>,
  <div className='quickstart' onDragStart={handleDragStart}>
    <img src='img/quickstart/selenium.svg' alt='Selenium Logo' />
    <h3>
      <a href='https://docs.saucelabs.com/web-apps/automated-testing/selenium/' target='_self'>
        Selenium
      </a>
    </h3>
  </div>,
  <div className='quickstart' onDragStart={handleDragStart}>
    <img src='img/quickstart/xcuitest.png' alt='XCUITest Logo' />
    <h3>
      <a href='https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/' target='_self'>
        XCUITest
      </a>
    </h3>
  </div>
];

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 5 },
};

const Caroulsel = () => {
  return (
    <AliceCarousel
      className="alice-carousel__prev-btn"
      mouseTracking
      items={items}
      responsive={responsive}
    />
  );
};

export default Caroulsel;
