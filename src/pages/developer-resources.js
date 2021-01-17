import React, { Component } from 'react';
import devHero from '../assets/dev-resources-hero.png';

class DeveloperResources extends Component {
  render() {
    return (
      <div className="main__container-bg --dev-resources">
        <div className="main__container-inner --no-flex">

          <div className="dev-resources__title">
            <h2>Developer Resources</h2>
          </div>

          <div class="dev-resources__content-container">

            <div className="dev-resources__image">
              <img src={devHero} />
            </div>

            <div className="dev-resources__list">
              <ul>
                <li><a href="#">Testrunner Toolkit</a></li>
                <li><a href="#">Sample Frameworks</a></li>
                <li><a href="#">Platform Conﬁgurator</a></li>
                <li><a href="#">Sample Scripts</a></li>
                <li><a href="#">API Reference Guide</a></li>
                <li><a href="#">CLI Reference Guide</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default DeveloperResources;
