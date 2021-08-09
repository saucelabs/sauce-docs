/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
      <Link
          className="footer__link-item"
          {...(href
              ? {
                target: '_blank',
                rel: 'noopener noreferrer',
                href: prependBaseUrlToHref ? normalizedHref : href,
              }
              : {
                to: toUrl,
              })}
          {...props}>
        {label}
      </Link>
  );
}

const FooterLogo = ({url, alt}) => (
    <img className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;
  const {copyright, links = [], logo = {}} = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <div>
      <footer>
          <div className="footer__image">
          <img src="/img/logo-saucelabs-inverted.png" />
        </div>
        <div className="footer__inner">

          <div className="footer-column">
          <p className="link-title">Solutions</p>

          <div className="link-list">
              <ul>
                  <li><a className="link" href="https://saucelabs.com/solutions/enterprise" target="" data-ta="click" data-tc="Text" data-tl="">Enterprise</a></li>
                  <li><a className="link" href="https://saucelabs.com/solutions/startup-medium-teams" target="" data-ta="click" data-tc="Text" data-tl="">Start-ups &amp; SMB Teams</a></li>
                  <li><a className="link" href="https://saucelabs.com/solutions/open-source" target="" data-ta="click" data-tc="Text" data-tl="">Open Source</a></li>
                  <li><a className="link" href="https://saucelabs.com/solutions/continuous-testing" target="" data-ta="click" data-tc="Text" data-tl="">Continuous Testing</a></li>
                  <li><a className="link" href="https://saucelabs.com/solutions/automated-testing" target="" data-ta="click" data-tc="Text" data-tl="">Automated Testing</a></li>
                  <li><a className="link" href="https://saucelabs.com/solutions/live-testing" target="" data-ta="click" data-tc="Text" data-tl="">Live Testing</a></li>
              </ul>
          </div>
          </div>

          <div className="footer-column">
            <p className="link-title">Platform</p>

            <div className="link-list">
                <ul>
                    <li><a className="link" href="https://saucelabs.com/platform" target="" data-ta="click" data-tc="Text" data-tl="">Overview</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/real-device-cloud" target="" data-ta="click" data-tc="Text" data-tl="">Real Device Cloud</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/mobile-emulators-and-simulators" target="" data-ta="click" data-tc="Text" data-tl="">Emulators &amp; Simulators</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/cross-browser-testing" target="" data-ta="click" data-tc="Text" data-tl="">Cross-browser Testing</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/sauce-headless" target="" data-ta="click" data-tc="Text" data-tl="">Sauce Headless</a></li>
                </ul>
            </div>
          </div>

          <div className="footer-column">

            <div className="link-title__space"></div>

            <div className="link-list">
                <ul>
                    <li><a className="link" href="https://saucelabs.com/platform/analytics-performance/sauce-performance" target="" data-ta="click" data-tc="Text" data-tl="">Sauce Performance</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/visual-testing" target="" data-ta="click" data-tc="Text" data-tl="">Visual Testing</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/integrations-plugins" target="" data-ta="click" data-tc="Text" data-tl="">Supported Integrations</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/supported-browsers-devices" target="" data-ta="click" data-tc="Text" data-tl="">Supported Browsers &amp; Devices</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/analytics-performance/advanced-debugging-tools" target="" data-ta="click" data-tc="Text" data-tl="">Debugging Tools</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/analytics-performance/test-analytics" target="" data-ta="click" data-tc="Text" data-tl="">Test Analytics</a></li>
                    <li><a className="link" href="https://saucelabs.com/platform/automation-tools" target="" data-ta="click" data-tc="Text" data-tl="">Automation Tools</a></li>
                    <li><a className="link" href="https://saucelabs.com/pricing" target="" data-ta="click" data-tc="Text" data-tl="">Pricing</a></li>
                </ul>
            </div>
          </div>


          <div className="footer-column">

          <p className="link-title">Resources</p>

          <div className="link-list">
              <ul>
                  <li><a className="link" href="https://saucelabs.com/community" target="" data-ta="click" data-tc="Text" data-tl="">Community</a></li>
                  <li><a className="link" href="https://saucelabs.com/blog" target="" data-ta="click" data-tc="Text" data-tl="">Sauce Labs Blog</a></li>
                  <li><a className="link" href="https://saucelabs.com/training-support" target="" data-ta="click" data-tc="Text" data-tl="">Training &amp; Support</a></li>
                  <li><a className="link" href="https://saucelabs.com/resources" target="" data-ta="click" data-tc="Text" data-tl="">Resource Center</a></li>
              </ul>
          </div>

          </div>

          <div className="footer-column">

          <p className="link-title">Company</p>

          <div className="link-list">
              <ul>
                  <li><a className="link" href="https://saucelabs.com/company/partners" target="" data-ta="click" data-tc="Text" data-tl="">Partners</a></li>
                  <li><a className="link" href="https://saucelabs.com/company" target="" data-ta="click" data-tc="Text" data-tl="">About Us</a></li>
                  <li><a className="link" href="https://saucelabs.com/company/careers" target="" data-ta="click" data-tc="Text" data-tl="">Careers</a></li>
                  <li><a className="link" href="https://saucelabs.com/news" target="" data-ta="click" data-tc="Text" data-tl="">News</a></li>
                  <li><a className="link" href="https://saucelabs.com/contact" target="" data-ta="click" data-tc="Text" data-tl="">Contact</a></li>
              </ul>
          </div>
          </div>

        </div>

      </footer>
      <div className="footerbar">
        <div className="footerbar__inner">
            <div className="sublink">
              <ul className="footer__sublinks">
                  <li><a href="https://saucelabs.com/privacy-policy">Privacy Policy</a></li>
                  <li><a href="https://saucelabs.com/terms-of-service">Terms of Service</a></li>
                  <li><a href="https://saucelabs.com/eea">EEA</a></li>
                  <li><a href="https://saucelabs.com/ccpa">CCPA</a></li>
              </ul>
            </div>
            <span className="footer__copyright">

              <a href="https://saucelabs.com/contact" target ="_blank">{(copyright) && (<div dangerouslySetInnerHTML={{  __html: copyright,}} />)} Sauce Labs Inc., all rights reserved. SAUCE and SAUCE LABS are registered trademarks owned by Sauce Labs Inc. in the United States, EU, and may be registered in other jurisdictions. Built with Google Code Labs</a>
            </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
