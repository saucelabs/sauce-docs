import React, { Component } from 'react';

class Resources extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Resources</h1>
        <div className="box-wrapper community" markdow= "1">
          <div className="box box1 card">
            <div className="container">
              <h2>Documentation</h2>
              <p>Everything you need to know about testing with Sauce Labs.</p>
              <ul>
                <li><h4><a href="https://docs.saucelabs.com/overview/">Go to docs</a></h4></li>
              </ul>
            </div>
          </div>
          <div className="box box2 card">
            <div className="container">
              <h2>Sauce School</h2>
              <p>Tutorials and best practices for beginners and experienced testers.</p>
              <ul>
                <li><h4><a href="https://training.saucelabs.com/" target="_blank" rel="noopener noreferrer">Visit Sauce School</a></h4></li>
              </ul>
            </div>
          </div>
          <div className="box box3 card">
            <div className="container">
              <h2>Reference Docs</h2>
              <p>Use the Sauce platform to best suit your needs. </p>
              <ul>
                <li><h4><a href="https://docs.saucelabs.com/dev/api/">API reference</a></h4></li>
                <li><h4><a href="https://docs.saucelabs.com/dev/cli/">CLI reference</a></h4></li>
              </ul>
            </div>
          </div>
          <div className="box box4 card">
            <div className="container">
              <h2>Support</h2>
              <p>Get answers and report issues.</p>
              <ul>
                <li><h4><a href="https://support.saucelabs.com/" target="_blank" rel="noopener noreferrer">Visit support</a></h4></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
