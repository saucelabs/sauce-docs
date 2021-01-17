import React, { Component } from 'react';

class HomeCallouts extends Component {
  render() {
    return (
      <div>
      <div className="callouts__container">
        <div className="callout">
          <h2>Setting Up Sauce Labs</h2>
          <p>Plan for the teams and systems that need to interact with your Sauce Labs tests and integrations.</p>
        </div>
        <div className="callout">
          <h2>Secure Connections</h2>
          <p>See how to open a secure "tunnel" so that you can test a website or app hosted on your local computer or behind a corporate ﬁrewall.</p>
        </div>
        <div className="callout">
          <h2>Quick Start with Your Tests</h2>
          <p>If you already have automated tests, you're only a few steps away from running them on the world's largest continuous testing cloud.</p>
        </div>
      </div>
      <div className="callouts__container">
        <div className="callout">
          <h2>Live Testing</h2>
          <p>See how your app or site performs on any supported browser, OS, or device, when you manually test it in our UI.</p>
        </div>
        <div className="callout">
          <h2>Mobile Testing</h2>
          <p>Learn how to run Appium, Espresso, and XCUITest automation on our real and virtual mobile devices.</p>
        </div>
        <div className="callout">
          <h2>Web Testing</h2>
          <p>Get a quick overview of what Selenium does, and the basic components of a Selenium test script.</p>
        </div>
      </div>
      </div>
    );
  }
}

export default HomeCallouts;
