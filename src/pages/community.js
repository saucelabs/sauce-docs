import React, { Component } from 'react';

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
        </div>
      </div>
    );
  }
}

export default Community;
