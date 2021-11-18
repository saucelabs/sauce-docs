import React, { Component } from 'react';

class Resources extends Component {
  render() {
    return (
      <div>
        <h2 className="title">Resources</h2>
        <div className="callouts__container">
          <div className="callout">
            <h2>Documentation</h2>
            <p>Everything you need to know about testing with Sauce Labs.</p>
            <h4><a href="https://docs.saucelabs.com/overview/">&gt;&gt;Go to docs</a></h4>
          </div>
          <div className="callout">
            <h2>Sauce School</h2>
            <p>Tutorials and best practices for beginners and experienced testers.</p>
            <h4><a href="https://training.saucelabs.com/" target="_blank" rel="noopener noreferrer">&gt;&gt;Visit Sauce School</a></h4>
          </div>
          <div className="callout">
            <h2>Reference Docs</h2>
            <p>Use the Sauce platform to best suit your needs. </p>
            <h4><a href="https://docs.saucelabs.com/dev/api/">&gt;&gt;API reference</a></h4>
            <h4><a href="https://docs.saucelabs.com/dev/api/">&gt;&gt;CLI reference</a></h4>
          </div>
          <div className="callout">
            <h2>Support</h2>
            <p>Get answers to your  questions from our knowledge base.</p>
            <h4><a href="https://support.saucelabs.com/" target="_blank" rel="noopener noreferrer">&gt;&gt;Visit support</a></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
