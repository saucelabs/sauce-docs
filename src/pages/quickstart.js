import React, { Component } from 'react';

class QuickStart extends Component {
  render() {
    return (
      <div>
        <h2 className="title">QuickStart</h2>
        <div className="quickstart__container">
          <div className="quickstart">
            <img src='img/quickstart/appium.svg'  alt="Appium Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/mobile-apps/automated-testing/appium/quickstart/"
                target="_blank" rel="noopener noreferrer">
                Appium
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/cypress.svg'  alt="Cypress Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/web-apps/automated-testing/cypress/quickstart/"
                target="_blank" rel="noopener noreferrer">
                Cypress
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/playwright.svg'  alt="PlayWright Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/"
                target="_blank" rel="noopener noreferrer">
                PlayWright
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/puppeteer.svg'  alt="Puppeteer Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/web-apps/automated-testing/puppeteer/quickstart/"
                target="_blank" rel="noopener noreferrer">
                Puppeteer
              </a>
            </h3>
          </div>
          <div className="quickstart">
            <img src='img/quickstart/testcafe.svg' alt="TestCafe Logo"/>
            <h3>
              <a href="https://docs.saucelabs.com/web-apps/automated-testing/testcafe/quickstart/"
                target="_blank" rel="noopener noreferrer">
                TestCafe
            </a>
          </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickStart;
