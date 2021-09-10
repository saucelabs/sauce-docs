/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Footer() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const {themeConfig = {}} = siteConfig;
    const {footer} = themeConfig;

    if (!footer) {
        return null;
    }

    return (
        <div>
            <footer>
                <div className="footer-nav">
                    <div className="footer__inner">
                        <div className="footer-columns">
                            <div className="footer-column is-full">
                                <a className="nav-image-link" href="/" aria-label="Home"
                                >
                                    <div className="image">
                                        <picture
                                        >
                                            <source
                                                sizes="(max-width: 380px) 380px, (max-width: 460px) 460px"
                                                srcset="
                        /img/logo-saucelabs-inverted.png?fm=webp&amp;w=380 380w,
                        /img/logo-saucelabs-inverted.png?fm=webp&amp;w=460 460w
                        "
                                                type="image/webp" />
                                            <img
                                                sizes="(max-width: 380px) 380px, (max-width: 460px) 460px"
                                                src="/images/logo-saucelabs-inverted.png?w=460"
                                                srcset="
                        /img/logo-saucelabs-inverted.png?w=380 380w,
                        /img/logo-saucelabs-inverted.png?w=460 460w
                        "
                                                alt="Sauce Labs Logo"
                                                title="Sauce Labs Logo"
                                                height="64"
                                                width="460"
                                                loading="lazy"
                                            />
                                        </picture>
                                    </div
                                    >
                                </a>
                            </div>
                        </div>
                        <div className="footer-columns has-text-white is-multiline footer-wrapper">
                            <div className="footer-column is-one-fifth-tablet">
                                <p className="link-title">Solutions</p>
                                <div className="link-list">
                                    <ul>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/solutions/enterprise"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Enterprise</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/solutions/startup-medium-teams"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Start-ups &amp; SMB Teams</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/solutions/open-source"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Open Source</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/solutions/continuous-testing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Continuous Testing</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/solutions/automated-testing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Automated Testing</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/solutions/live-testing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Live Testing</span></a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column is-two-fifths-tablet is-half-mobile">
                                <p className="link-title">Platform</p>
                                <div className="link-list">
                                    <ul>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Overview</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/cross-browser-testing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Cross-browser Testing</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/mobile-testing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Mobile App Testing</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/low-code-testing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Low-Code Testing</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/error-reporting"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Error Reporting</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/api-testing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>API Testing</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/visual-testing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Visual Testing</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/analytics-performance/sauce-performance"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Sauce Performance</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/integrations-plugins"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Supported Integrations</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/supported-browsers-devices"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Browsers &amp; Devices</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/analytics-performance/advanced-debugging-tools"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Debugging Tools</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/analytics-performance/sauce-insights"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Sauce Insights</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/platform/automation-tools"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Automation Tools</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/pricing"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Pricing</span></a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column is-one-fifth-tablet is-half-mobile">
                                <p className="link-title">Resources</p>
                                <div className="link-list">
                                    <ul>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/community"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Community</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/blog"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Sauce Labs Blog</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/training-support"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Training &amp; Support</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/resources"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Resource Center</span></a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column is-one-fifth-tablet is-half-mobile">
                                <p className="link-title">Company</p>
                                <div className="link-list">
                                    <ul>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/company/partners"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Partners</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/company"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>About Us</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/company/careers"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Careers</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/leadership-team"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Our Team</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/security"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Security</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/news"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>News</span></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="link"
                                                href="https://saucelabs.com/contact"
                                                target="_self"
                                                rel=""
                                                data-ta="click"
                                                data-tc="Text"
                                                data-tl=""
                                            ><span>Contact</span></a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer has-text-white">
                <div className="footer__inner">
                    <div className="footer-columns">
                        <div className="footer-column social-container">
                            <p>Follow us</p>
                            <a
                                href="https://www.facebook.com/saucelabs"
                                target="_blank"
                                data-ta="click"
                                data-tc="Icon"
                                data-tl="facebook"
                            >
                                <i className="svg svg-facebook"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                                        ></path>
                                    </svg>
                                </i>
                            </a
                            >
                            <a
                                href="https://www.linkedin.com/company/891955"
                                target="_blank"
                                data-ta="click"
                                data-tc="Icon"
                                data-tl="linkedin"
                            >
                                <i className="svg svg-linkedin"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                        ></path>
                                    </svg>
                                </i>
                            </a
                            >
                            <a
                                href="https://twitter.com/saucelabs"
                                target="_blank"
                                data-ta="click"
                                data-tc="Icon"
                                data-tl="twitter"
                            >
                                <i className="svg svg-twitter"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"
                                        ></path>
                                    </svg>
                                </i
                                >
                            </a>
                        </div>
                        <div className="footer-column link-container">
                            <ul>
                                <li>
                                    <a
                                        className="link"
                                        href="https://saucelabs.com/privacy-policy"
                                        target=""
                                        data-ta="click"
                                        data-tc="Text"
                                        data-tl=""
                                    >Privacy Policy</a
                                    >
                                </li>
                                <li>
                                    <a
                                        className="link"
                                        href="https://saucelabs.com/terms-of-service"
                                        target=""
                                        data-ta="click"
                                        data-tc="Text"
                                        data-tl=""
                                    >Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link"
                                        href="https://saucelabs.com/privacy-policy#eea"
                                        target=""
                                        data-ta="click"
                                        data-tc="Text"
                                        data-tl=""
                                    >GDPR</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-columns">
                        <div className="footer-column">
                            <div className="copyright">
                                © 2021 Sauce Labs Inc., all rights reserved. SAUCE and SAUCE LABS are
                                registered trademarks owned by Sauce Labs Inc. in the United States,
                                EU, and may be registered in other jurisdictions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;