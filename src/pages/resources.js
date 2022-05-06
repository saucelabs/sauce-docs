import React, { Component } from 'react';

class Resources extends Component {
  render() {
    return (
      <div className='container-landpage'>
        <div className='column-left'>
          <h2>Learn the basics</h2>
          <p>
            Need help? We have prepared a
            <a href='https://training.saucelabs.com/' target='_blank' rel='noreferrer'>
             training series
            </a>
            to help you along your learning curve. Check out our tutorials and videos.
          </p>
        </div>
        <div className='column-right'>
          <img className='landpage-resources' src='img/dev-persona.png' />
        </div>
      </div>
    );
  }
}

export default Resources;
