import React, { Component } from 'react';

import Button from '../components/button';

class Resources extends Component {
    render() {
        return (
            <div className='container-reverse'>
                <div className='column-left'>
                    <h2>Learn the basics</h2>
                    <p>
                        Need help? Check out our sample scripts and the Sauce
                        Labs Blog.
                    </p>
                    <span className='landpage-buttons-container'>
                        <a href='/basics/quickstarts/'>
                            <Button
                                className='button-light'
                                name='Sample Scripts'
                            />
                        </a>
                        <a
                            href='https://saucelabs.com/blog'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Button
                                className='button-light'
                                name='Sauce Labs Blog'
                            />
                        </a>
                    </span>
                </div>
                <div className='column-right'>
                    <img
                        className='landpage-resources'
                        src='img/low-code-tier-1.png'
                    />
                </div>
            </div>
        );
    }
}

export default Resources;
