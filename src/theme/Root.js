import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function Root({ children }) {
    return (
        <>
            <BrowserOnly>
                {() => {
                    const { Segment } = require('./Segment');
                    return <Segment />;
                }}
            </BrowserOnly>
            {children}
        </>
    );
}

export default Root;
