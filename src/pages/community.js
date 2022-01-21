import React, { Component } from 'react';

class Community extends Component {
  render() {
    return (
      <div>
        <h2 className="title">Community</h2>
        <div className="box-wrapper community" markdow= "1">
          <div className="box box1 card">
            <div className="container">
              <h3>Selenium</h3>
              <p>Learn how to use Selenium like a pro.</p>
              <ul>
                <li><h4><a href="https://training.saucelabs.com/" target="_blank" rel="noopener noreferrer">Take a course</a></h4></li>
                <li><h4><a href="https://github.com/saucelabs-training" target="_blank" rel="noopener noreferrer">Go to sample code</a></h4></li>
              </ul>
            </div>
          </div>
          <div className="box box2 card">
            <div className="container">
              <h3>Stack Overflow</h3>
              <p>Tag your posts with <code>saucelabs</code> to get your questions answered by our experts</p>
              <ul>
                <li><h4><a href="https://stackoverflow.com/search?tab=newest&q=Sauce%20Labs" target="_blank" rel="noopener noreferrer">Join the conversation</a></h4></li>
              </ul>
            </div>
          </div>
          <div className="box box3 card">
            <div className="container">
              <h3>Sauce Labs Blog</h3>
              <p>Hear from testing experts about best practices, how-tos, and industry trends.</p>
              <ul>
                <li><h4><a href="http://saucelabs.com/blog" target="_blank" rel="noopener noreferrer">Read the blog</a></h4></li>
              </ul>
            </div>
          </div>
          <div className="box box4 card">
            <div className="container">
              <h3>Sample Scripts</h3>
              <p>Get up and running quickly using Sauce Labs training code samples.</p>
              <ul>
                <li><h4><a href="https://github.com/saucelabs-training" target="_blank" rel="noopener noreferrer">Go to GitHub</a></h4></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
