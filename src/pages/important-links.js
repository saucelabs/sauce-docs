import React, { Component } from 'react';
import linkHero from '../assets/important-links-hero.png';

class ImportantLinks extends Component {
  render() {
    return (
      <div className="main__container-bg --important-links">
        <div className="main__container-inner --no-flex">

          <div className="dev-resources__title">
            <h2>Important Links</h2>
          </div>

          <div class="dev-resources__content-container">

            <div className="dev-resources__list">
              <ul>
                <li><a href="#">Testing Insights</a></li>
                <li><a href="#">W3C Capabilities</a></li>
                <li><a href="#">Glossary</a></li>
                <li><a href="#">Product Announcements</a></li>
                <li><a href="#">Data Center Endpoints</a></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div>

            <div className="dev-resources__image">
              <img src={linkHero} />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default ImportantLinks;
