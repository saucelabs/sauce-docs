import React, { Component } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

class DeveloperResources extends Component {
  render() {
    return (
      <div className="main__container-bg --dev-resources">
        <div className="main__container-inner --no-flex">

          <div className="dev-resources__title">
            <h2>Developer Resources</h2>
          </div>

          <div className="dev-resources__content-container">

            <div className="dev-resources__image">
              <img src='img/dev-resources-hero.png' />
            </div>

            <div className="dev-resources__list">
              <ul>
                <li><a href="https://docs.saucelabs.com/testrunner-toolkit/saucectl">Testrunner Toolkit</a></li>
                <li><a href="https://saucelabs.com/platform/platform-configurator">Platform Conﬁgurator</a></li>
                <li><a href="https://github.com/saucelabs-training">Sample Scripts and Frameworks</a></li>
                <li><a href="https://docs.saucelabs.com/dev/api">API Reference Guide</a></li>
                <li><a href="https://docs.saucelabs.com/dev/cli">CLI Reference Guide</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default DeveloperResources;
