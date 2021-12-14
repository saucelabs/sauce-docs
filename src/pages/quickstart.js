import React, { Component } from 'react';

class QuickStart extends Component {
  render() {
    return (
      <div>
        <h1 className="title-quickstart">Quickstart with Sauce Labs</h1>
        <div className="quickstart__container">
          <div className="quickstart">
            <img src='img/quickstart/appium.svg'  alt="Appium Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/mobile-apps/automated-testing/appium/quickstart/"
                target="_self">
                Appium
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/cypress.svg'  alt="Cypress Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/web-apps/automated-testing/cypress/quickstart/"
                target="_self">
                Cypress
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/espresso.png'  alt="Espresso Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/"
                target="_self">
                Espresso
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/playwright.png'  alt="Playwright Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/"
                target="_self">
                Playwright
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/selenium.svg'  alt="Selenium Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/web-apps/automated-testing/selenium/"
                target="_self">
                Selenium
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/xcuitest.png' alt="XCUITest Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/"
                target="_self">
                XCUITest
            </a>
          </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickStart;
