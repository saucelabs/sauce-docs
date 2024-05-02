---
id: overview
title: Documentation
sidebar_label: Welcome
description: Landing Page for Sauce Labs Documentation
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
    <img src={useBaseUrl('img/overview/live-testing.svg')} alt="live testing icon" width="20px"/>
    <h2>Live Testing</h2>
    <p>Browse through the Live Testing documentation to manually test your app on Sauce Labs Cloud.</p>
    <ul>
        <li><a href="/web-apps/live-testing/live-cross-browser-testing">Web Apps</a></li>
        <li><a href="/mobile-apps/live-testing/live-mobile-app-testing/">Mobile Apps</a></li>
    </ul>
    </div>
  </div>
  <div className="box box2 card">
    <div className="container">
    <img src={useBaseUrl('img/overview/automated.svg')} alt="automated testing icon" height="20px"/>
    <h2>Automated Testing</h2>
    <p>Browse through the Automated Testing documentation to see examples of how to run tests in your preferred automation framework.</p>
    <ul>
        <li><a href="/web-apps/automated-testing/selenium">Selenium</a> and <a href="/mobile-apps/automated-testing/appium">Appium</a></li>
        <li><a href="/mobile-apps/automated-testing/espresso-xcuitest">Espresso and XCUITest</a></li>
        <li><a href="/web-apps/automated-testing/cypress">Cypress</a>, <a href="/web-apps/automated-testing/testcafe">TestCafe</a>, or <a href="/web-apps/automated-testing/playwright">Playwright</a></li>
    </ul>
    </div>
  </div>
  <div className="box box3 card">
    <div className="container">
    <img src={useBaseUrl('img/overview/tunnel.svg')} alt="sauce trust connection icon" width="20px"/>
    <h2>Sauce Trusted Connection</h2>
    <p>Browse the security documentation to learn how to communicate with Sauce Labs Cloud from your private network.</p>
    <ul>
        <li><a href="/secure-connections/sauce-connect-5">Sauce Connect Proxy</a></li>
        <li><a href="/secure-connections/ipsec-vpn">IPSec VPN</a></li>
    </ul>
    </div>
  </div>
  <div className="box box4 card">
    <div className="container">
    <img src={useBaseUrl('img/overview/cicd.svg')} alt="ci cd icon" width="20px"/>
    <h2>CI / CD</h2>
    <p>Browse the continuous integration and continuous delivery documentation to explore how to integrate Sauce Labs into your DevOps pipeline.</p>
    <ul>
        <li><a href="/basics/integrations/jenkins">Jenkins</a></li>
        <li>and <a href="/basics/integrations-overview/">More</a></li>
    </ul>
    </div>
  </div>
</div>
