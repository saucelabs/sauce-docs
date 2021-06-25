import React, { Component } from 'react';

class HomeCallouts extends Component {
  render() {
    return (
      <div>
      <div className="callouts__container">
        <div className="callout">
          <h2><a href="https://docs.saucelabs.com/basics/acct-team-mgmt-hub">Setting Up Sauce Labs</a></h2>
          <p>Plan for the teams and systems that need to interact with your Sauce Labs tests and integrations.</p>
        </div>
        <div className="callout">
          <h2><a href="https://docs.saucelabs.com/secure-connections">Sauce Trusted Connection</a></h2>
          <p>See how to open a secure "tunnel" so that you can test a website or app hosted on your local computer or behind a corporate ﬁrewall.</p>
        </div>
        <div className="callout">
          <h2><a href="https://docs.saucelabs.com/api-testing">API Testing</a></h2>
          <p>Get up and running with continuous testing and monitoring that unifies testing across all your APIs.</p>
        </div>
      </div>
      <div className="callouts__container">
        <div className="callout">
          <h2><a href="https://docs.saucelabs.com/mobile-apps/live-testing/live-mobile-app-testing">Live Testing</a></h2>
          <p>See how your app or site performs on any supported browser, OS, or device, when you manually test it in our UI.</p>
        </div>
        <div className="callout">
          <h2><a href="https://docs.saucelabs.com/mobile-apps">Mobile Testing</a></h2>
          <p>Learn how to run Appium, Espresso, and XCUITest automation on our real and virtual mobile devices.</p>
        </div>
        <div className="callout">
          <h2><a href="https://docs.saucelabs.com/web-apps">Web Testing</a></h2>
          <p>Get a quick overview of what Selenium does, and the basic components of a Selenium test script.</p>
        </div>
      </div>
      </div>
    );
  }
}

export default HomeCallouts;
