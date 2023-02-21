import React, { Component } from 'react';
import Carousel from '../components/carousel';

class QuickStart extends Component {
    render() {
        return (
            <div className='container-landpage'>
                <div className='column-left'>
                    <Carousel />
                </div>
                <div className='column-right'>
                    <h2 className='title-quickstart'>
                        Quickstart with your favorite test suite
                    </h2>
                    <p>
                        We provide the tools you need to get started quickly
                        with Sauce Labs using your favorite framework.
                    </p>
                </div>
            </div>
        );
    }
}

export default QuickStart;
