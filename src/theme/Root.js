import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function Root({ children }) {
    return (
        <>
            <BrowserOnly>
                {() => {
                    const Segment = require('./Segment').Segment;
                    return <Segment />;
                }}
            </BrowserOnly>
            <BrowserOnly>
                {() => {
                    const SurveyPopup = require('./SurveyPopup').SurveyPopup;
                    return <SurveyPopup />;
                }}
            </BrowserOnly>
            {children}
        </>
    );
}

export default Root;
