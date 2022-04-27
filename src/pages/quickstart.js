import React, { Component } from 'react';
import Carousel from '../components/carousel';

class QuickStart extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="title-quickstart">Quickstart with Sauce Labs</h2>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default QuickStart;
