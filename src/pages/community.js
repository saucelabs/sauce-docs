import React, { Component } from 'react';

import Button from '../components/button';

class Community extends Component {
    render() {
        return (
            <div className='container-landpage'>
                <div className='column-left'>
                    <img
                        className='landpage-community'
                        src='img/customer-experience-tier-1.png'
                    />
                </div>
                <div className='column-right'>
                    <h2>Get community support</h2>
                    <p>Can&apos;t find what you need? We are here to help.</p>
                    <span className='landpage-buttons-container'>
                        <a
                            href='https://saucelabs.com/resources/community/slack#mktoForm_3389'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Button
                                className='button-light'
                                name='Community Forum'
                            />
                        </a>
                        <a
                            href='https://support.saucelabs.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Button
                                className='button-light'
                                name='Customer Support'
                            />
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Community;
