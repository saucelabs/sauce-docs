/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';

function FooterLogo({sources, alt, width, height}) {
  return (
    <ThemedImage
      className="footer__logo"
      alt={alt}
      sources={sources}
      width={width}
      height={height}
    />
  );
}

function Footer() {
  const {footer} = useThemeConfig();
  const {copyright, links = [], logo = {}} = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}
    >
      <div className='container container-fluid'>
        <div className='footer-items'>
          <h5>
            <a href='https://saucelabs.com/'>Sauce Labs</a>
          </h5>
          <h5>
            <a href='https://stackoverflow.com/tags/saucelabs'>Community</a>
          </h5>
          <h5>
            <a href='https://opensource.saucelabs.com/'>Open Source</a>
          </h5>
          <h5>
            <a href='https://support.saucelabs.com/hc/en-us'>Customer Support</a>
          </h5>
        </div>
        {(logo || copyright) && (
          <div className='footer__bottom text--center'>
            {logo && (logo.src || logo.srcDark) && (
              <div className='margin-bottom--sm'>
                {logo.href ? (
                  <Link href={logo.href} className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} sources={sources} width={logo.width} height={logo.height} />
                  </Link>
                ) : (
                  <FooterLogo alt={logo.alt} sources={sources} width={logo.width} height={logo.height} />
                )}
              </div>
            )}
            {copyright ? (
              <div
                className='footer__copyright' // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
        )}
      </div>
    </footer>
  );
}

export default React.memo(Footer);
