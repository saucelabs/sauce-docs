import React, { Component } from 'react';

class Community extends Component {
  render() {
    return (
      <div>
        <h2 className="title">Community</h2>
        <div className="callouts__container">
          <div className="callout">
            <h2>Selenium</h2>
            <p>Learn how to use Selenium like a pro.</p>
            <h4><a href="">&gt;&gt;Take a course</a></h4>
            <h4><a href="">&gt;&gt;Go to sample code</a></h4>
          </div>
          <div className="callout">
            <h2>Stack Overflow</h2>
            <p>Tag saucelabs to get your questions answered by our experts.</p>
            <h4><a href="">&gt;&gt;Join the conversation</a></h4>
          </div>
          <div className="callout">
            <h2>Engineering Blog</h2>
            <p>Get expert advice from our engineering and open source teams.</p>
            <h4><a href="">&gt;&gt;Read the tips</a></h4>
          </div>
          <div className="callout">
            <h2>Sample Scripts</h2>
            <p>Get up and running quickly using Sauce Labs training code samples.</p>
            <h4><a href="">&gt;&gt;Go to GitHub</a></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
