import React, { Component } from 'react';

import Button from '../components/button';

class Community extends Component {
  render() {
    return (
      <div className='container-landpage'>
        <div className='column-left'>
          <img className='landpage-community' src='img/important-links-hero.png' />
        </div>
        <div className='column-right'>
          <h2>Get supported by our community</h2>
          <p>Can't find what you need? Make use of our community spread around the world. We are here to help you.</p>
          <span className='landpage-buttons-container'>
            <a href='https://stackoverflow.com/tags/saucelabs' target='_blank' rel='noopener noreferrer'>
              <Button className='button-light' name='Stack Overflow' />
            </a>
            <a href='https://support.saucelabs.com/hc/en-us' target='_blank' rel='noopener noreferrer'>
              <Button className='button-light' name='Customer Support' />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Community;
