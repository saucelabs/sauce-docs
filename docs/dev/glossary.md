---
id: glossary
title: Glossary of Sauce Labs Terminology
sidebar_label: Glossary
description: A glossary of terminology used across Sauce Labs products.
---

**[A](/dev/glossary#a)&nbsp;&nbsp;&nbsp; [B](/dev/glossary#b)&nbsp;&nbsp;&nbsp; [C](/dev/glossary#c)&nbsp;&nbsp;&nbsp; [D](/dev/glossary#d)&nbsp;&nbsp;&nbsp; [E](/dev/glossary#e)&nbsp;&nbsp;&nbsp; [F](/dev/glossary#f)&nbsp;&nbsp;&nbsp; [H](/dev/glossary#h)&nbsp;&nbsp;&nbsp; [I](/dev/glossary#i)&nbsp;&nbsp;&nbsp; [L](/dev/glossary#l)&nbsp;&nbsp; [M](/dev/glossary#m)&nbsp;&nbsp;&nbsp; [N](/dev/glossary#n)&nbsp;&nbsp;&nbsp; [O](/dev/glossary#o)&nbsp;&nbsp;&nbsp; [P](/dev/glossary#p)&nbsp;&nbsp;&nbsp; [R](/dev/glossary#r)&nbsp;&nbsp;&nbsp; [S](/dev/glossary#s)&nbsp;&nbsp;&nbsp; [T](/dev/glossary#t)&nbsp;&nbsp;&nbsp; [U](/dev/glossary#u)&nbsp;&nbsp;&nbsp; [V](/dev/glossary#v)&nbsp;&nbsp;&nbsp; [W](/dev/glossary#w)**

---

## **A**

### Analytics

See: _[Insights](#insights)_.


### Appium

An open source mobile UI automation framework that uses the Selenium WebDriver protocol to control interaction with native apps, mobile web apps, and hybrid apps in your tests. Appium acts as a wrapper that translates Selenium WebDriver commands into iOS and Android commands. With Sauce Labs, you can use Appium to test mobile apps on emulators, simulators, and real devices.

See also: _[selenium](#selenium)_, _[webdriver](#webdriver)_.


### Application Under Test (AUT)

A web or mobile app in the test phase of the software development cycle.

See also: _[software development lifecycle](#software-development-lifecycle-sdlc)_.


### Automated Testing

A testing method where you use separate software to control the execution of tests on your own software and compare your actual test results to your expected results. You can use frameworks like Appium and Selenium to control the execution of automated tests on your web and mobile apps.


## **B**

### Build

1. A suite of individual Sauce Labs tests on various parts (e.g., page objects) of a website or app using any platform/browser combination, bundled together in the same session. A build is defined when you add the same build number to the code for tests in that suite. More information: [Best Practice: Use Build IDs, Tags, and Names to Identify Your Tests](https://docs.saucelabs.com/basics/test-config-annotation/test-annotation/index.html#use-build-ids-tags-and-names-to-identify-your-tests).

2. The process by which source code is compiled and converted into an executable or binary pre-release version of your software program. Builds are often comprised of multiple smaller builds.


## **C**

### Camera Image Injection

A Sauce Labs feature that enables you to mimic camera behavior when testing applications on the Real Device Cloud by letting you upload an image (in .jpeg .jpg, or .png format) from your computer or another location and presenting it to the application as if it was read by the device camera.

### Capabilities (Caps)

A section of code required in automated test scripts to specify test parameters (e.g., OS, browser, API, device) used to configure the environment for your Selenium, Appium, and Sauce Labs tests. More information: [Test Configuration Options](/dev/test-configuration-options).

See also: _[platform configurator](#platform-configurator)_.

### CI/CD Pipeline

An end-to-end software development process that supports continuous integration and continuous deployment throughout the software development lifecycle (building, testing, and deploying software).

See also: _[CI/CD platform](#cicd-platform), [software development lifecycle](#software-development-lifecycle-sdlc)_.


### CI/CD Platform

A pipeline-driven software platform that automates the CI/CD pipeline process at scale. You can configure your CI/CD platform to run tests on Sauce Labs using one of our platform-specific proprietary plug-ins. More information: [Using Sauce Labs with Continuous Integration Platforms](/ci).

See also: _[CI/CD pipeline](#cicd-pipeline), [continuous integration](#continuous-integration-ci), [continuous deployment](#continuous-deployment-cd)_.


### Colliding Tunnels

A Sauce Connect Proxy scenario where two or more tunnels are launched with the same tunnel name not in [High Availability Mode](/secure-connections/sauce-connect/setup-configuration/high-availability).
By default, duplicated (already running) tunnels are halted unless a Sauce Connect Proxy is started with the `--tunnel-pool` option.
More information: [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).

See also: _[sauce connect proxy](#sauce-connect-proxy), [tunnel identifier](#tunnel-identifier)_.


### Concurrency Limit

The maximum number of total Sauce Labs tests -- both automated and manual -- that you can run simultaneously across all user accounts within your organization. Concurrency limits vary according to pricing plan. Once you and/or your teammates have used all concurrency slots, additional tests will not launch until an existing test has finished. More information: [Understanding Concurrency Limits and Team Accounts](/basics/acct-team-mgmt/concurrency-limits).


### Continuous Deployment (CD)

A software development practice where code that has passed all required tests is immediately and automatically deployed into production.

See also: _[CI/CD pipeline](#cicd-pipeline)_.


### Continuous Integration (CI)

A software development practice where all code changes are regularly committed to a shared repository and re-tested to collect and act on feedback.

See also: _[CI/CD pipeline](#cicd-pipeline)_.


### Continuous Testing

The process of continuously executing automated tests throughout your software development lifecycle, allowing you to collect and act on feedback.

See also: _[CI/CD pipeline](#cicd-pipeline)_.


### Continuous Testing Benchmark

See: _[Sauce Labs Continuous Testing Benchmark](#sauce-continuous-testing-benchmark)_.


### Cross-Browser Compatibility

The consistency of your web or mobile app's user experience across multiple combinations of browsers, devices, and operating systems.


### Cross-Browser Testing

A method of testing where you can verify the consistency of your web or mobile app when accessed through multiple combinations of browsers, devices, and operating systems. By leveraging automated testing, you can test thousands of these combinations simultaneously in parallel. More information: [Sauce Labs Cross-Browser Testing for Web Apps](/web-apps).


## **D**

### Data Center (DC)

A network that houses the set of Sauce Labs services relevant to your license type and your company's needs (i.e., geographic location, real vs. virtual device, and optional other services). To run a Sauce Labs test, you must connect to one or more data centers by including the appropriate endpoint URL(s) in your test script. More information: [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints).


## **E**


### Emulator

A virtual machine used to mimic the software, operating system, and certain device features (e.g., camera, touch ID, GPS) of the Android mobile application that you're testing in Sauce Labs. Can be used to test multiple browser/device combinations and use cases.

See also: _[simulator](#simulator), [real device testing](#real-device-testing)_.


### Enterprise

1. The Sauce Labs subscription plan that offers the largest amount of testing bandwidth and premium benefits.

2. A Sauce Labs customer subscribed to our enterprise plan, which offers a dedicated account team and premium support. For more information, contact your Customer Success Manager. More information: [Sauce Labs Pricing](https://saucelabs.com/pricing).


## **F**

### Failure Analysis

A Sauce Labs Insights tool that analyzes failures that occur during test runs and reveals any common root causes so that you can debug as quickly as possible. More information: [Using Failure Analysis](/insights/failure-analysis).

See also: _[Insights](#insights)_.


### Failure Pattern

A Sauce Labs Failure Analysis metric that shows a specific, recurring error that's causing test and build failures. You can see the amount of tests impacted and the percentage of total failures attributed to each error.

See also: _[failure analysis](#failure-analysis)_.


### Framework

The UI automation library and test runner combination that you use for testing. You can tailor your framework to meet your situation and test goals.

See also:_ [UI automation library](#ui-automation-library), [test runner](#test-runner)._


### Free Trial

A period for prospective customers to explore the full functionality of the Sauce Labs platform for free. Includes automated cross-browser testing, live testing, and access to real devices for mobile testing. More information: [Sauce Labs Free Trial](https://saucelabs.com/sign-up).


### Front-End Performance Testing

A method of performance testing that enables you to check UI functionality like forms, graphs, and menus, as well as associated JavaScript. Sauce Labs offers a front-end performance testing tool called Sauce Performance, which you can integrate with your existing CI/CD workflows. Please note that Sauce Performance refers to front-end testing only (i.e., tools like Google Lighthouse, GTmetrix that measure how quickly the user can see and interact with your website); it doesn't have back-end load testing functionality (i.e., JMeter, Gatling). More information: [Getting Started with Sauce Front-End Performance](/performance), [Sauce Labs White Paper: Best Practices for Front-End Performance Testing](https://saucelabs.com/resources/white-papers/best-practices-for-front-end-performance-testing).

See also: _[performance testing](#performance-testing)_.


### Functional Testing

A method of testing that validates some functionality or feature of your application. The output of these tests should generally be a simple "pass" or "fail" – either your functionality worked as expected, or it didn't.

See also: _[non-functional testing](#non-functional-testing)_.


## **H**

### Headless Browser

A browser or browser simulation without a UI. It's considered by developers to be a lightweight and scalable option if you want to test and collect pass/fail data earlier in the development lifecycle. Available only for Chrome and Firefox.

See also: _[sauce headless testing](#sauce-headless-testing)_.


### Hybrid App

A mobile app written in platform-agnostic web technologies like HTML5, CSS, and JavaScript. Hybrid apps run inside a native container and leverage the device’s browser engine to render the HTML and process the JavaScript locally.


## **I**


### Image Injection

See: _[camera image injection](#camera-image-injection)_.


### Insights

A Sauce Labs analytics tool that tracks and reports how your tests are performing over time, allowing you to quickly identify and remediate risk, improve productivity, and create digital confidence in your entire organization. More information: [Insights](/insights).


### Invoice Customer

See: _[enterprise customer](#enterprise)_.


### IPSecVPN

A protocol used to establish a secure VPN connection between applications hosted on an internal server and the Sauce Labs virtual machines or real devices used for testing. More information: [IPSec VPN](/secure-connections/ipsec-vpn).


## **L**

### Live Testing (LT)

A type of software testing where you'd execute test cases manually, without using any automation tools. More information: [Live Cross Browser Testing](/web-apps/live-testing/live-cross-browser-testing).

See also: _[manual testing](#manual-testing)_.


### logfile

A file where various Sauce Labs processes record events that occur during testing. Access to different logfiles depends on the process that generated them.


## M

### Managed Customer

See: _[enterprise customer](#enterprise)_.


### Manual Testing

See:[live testing](#live-testing).


### Mobile App

See: _[native app](#native-app), [hybrid app](#hybrid-app)._


## **N**

### Native App

A mobile software app written in a programming language specific to the platform it is being developed for: either iOS or Android. More information: [Live Testing for Native Mobile Apps on Real Devices](/mobile-apps/live-testing/live-mobile-app-testing), [Mobile App Testing with Espresso and XCUITest](/mobile-apps/automated-testing/espresso-xcuitest).

See also: _[hybrid app](#hybrid-app)_.


### Non-Functional Testing

A type of software testing that validates behavioral, measurable aspects of the software (e.g., performance, compatibility, user experience). Functional testing determines if your software meets its business requirements, whereas non-functional testing determines _how_ it operates. When running non-functional tests on Sauce Labs, you can use custom extensions for WebDriver that will allow you test the performance of your website under specific network conditions and collect network and application-related metrics.

See also: _[functional testing](#functional-testing)_.


## **O**

### OnDemand Service

A prime facility and feature of cloud computing services that allows users to provision raw cloud resources at run time, when and where needed.


### Organization Admin

The Sauce Labs account admin role that can manage permissions levels for all users, oversee Sauce Labs test settings and activity for their organization, create Teams and Team Admins, designate other Organization Admins, and set concurrency allocations among different Teams. More information: [Account and Team Management](/basics/acct-team-mgmt-hub).

See also: _[team admin](#team-admin), [team management](#team-management)_.


## **P**

### Parallel Testing

1. The practice of running multiple tests simultaneously.

2. When signing up for a self-service license, this is equivalent to your account's concurrency settings. More information: [System and Network Requirements for Sauce Connect Proxy](/secure-connections/sauce-connect/system-requirements), [Using Frameworks to Run Tests in Parallel](https://docs.saucelabs.com/web-apps/automated-testing/selenium#using-frameworks-to-run-tests-in-parallel).

    See also: _[concurrency limit](#concurrency-limit)_.


### Parallelization

See: _[parallel testing](#parallel-testing)_.


### Performance Metrics

The data that developers and QA teams use to capture and address performance regressions early in the development cycle. More information: [Sauce Connect Proxy Performance Metrics](/secure-connections/sauce-connect/proxy-tunnels#performance-metrics).


### Performance Testing

A type of non-functional software testing that ensures your software responds as expected on the front end and meets your requirements under expected workload. Sauce Labs supports front-end performance testing; see front-end performance testing for more information.

See also: _[front-end performance testing](#front-end-performance-testing)_.


### pidfile

A text file generated by Sauce Connect Proxy that records your tunnel's process identification number (PID).
Unless otherwise specified, the file will be cleaned up on exit or overwritten at startup. If needed, you can terminate a tunnel any time by sending a kill signal to the PID recorded in pidfile.
More information: [How to Start and Stop Sauce Connect Tunnels (Startup and Teardown)](/secure-connections/sauce-connect/proxy-tunnels#starting-and-stopping-tunnels),
[Sauce Connect Proxy Command-Line Quick Reference Guide](/dev/cli/sauce-connect-proxy).


### Platform Configurator

A Sauce Labs tool where you can select your capabilities and generate code snippets to copy and paste into your automated testing scripts. More information: [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/).

See also: _[capabilities](#capabilities)_.


### Proxy Auto-Configuration File (PAC)

An optional file you can use in your Sauce Connect Proxy tests to define how web browsers and other user agents automatically choose the appropriate proxy server for fetching a given URL.
To use a PAC file, include the `--pac <url>` command-line in your code. More information: [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).


## **R**


### RDC on Sauce

The Sauce Labs effort to introduce real device testing (APIs, device endpoints, test data, and UI elements) to the Sauce Labs domain. This is one facet of the broader Unified Platform initiative.

See also: _[unified platform](#unified-platform)_.


### Real Device Cloud (RDC)

A Sauce Labs cloud service that provides an infrastructure to test your web, hybrid, and native mobile apps on real mobile devices on the secured public cloud or a private set of real mobile devices. You can run tests on thousands of browser, operating system, and device combinations, simultaneously. More information: [Appium Testing on Real Devices](/mobile-apps/automated-testing/appium/real-devices), [Live Mobile App Testing](/mobile-apps/live-testing/live-mobile-app-testing), [Live Cross Browser Testing](/web-apps/live-testing/live-cross-browser-testing), [Sauce Labs Pricing](https://saucelabs.com/pricing).

See also: _[rdc on sauce](#rdc-on-sauce)._


### Real Device Testing

An automated web or mobile app test performed on real, physical devices hosted on the Sauce Labs Real Device Cloud. Real device tests yield accurate results on user interactions and display how your app will appear in real life. More information: [Real Device Testing Admin Guide](/mobile-apps/supported-devices), [Sauce Connect Proxy Setup for Real Device Cloud](/secure-connections/sauce-connect/setup-configuration/specialized-environments#real-device-cloud-setup), [Sauce Labs website: Real Device Cloud](https://saucelabs.com/platform/real-device-cloud).

See also: _[real device cloud](#real-device-cloud)_.


### RemoteWebDriver

A remote instance of WebDriver that you must instantiate during a test to connect with the Selenium server via Sauce Labs. Afterwards, you can use the RemoteWebDriver to control the browser of your choice.

See also: _[webdriver](#webdriver), [webdriverIO](#webdriverio)_.


### Restricted Domain

A Sauce Labs feature that allows organization admins to block their internal users from accessing the public-facing Sauce Labs website to prevent anyone from enrolling in a Free Trial. Only accounts originating from the domain you designate will be allowed to access Sauce Labs. This feature is being deprecated as customers migrate to our latest Team Management features.


## **S**

### Sauce Connect Host

The machine in your network on which the Sauce Connect Proxy application is running, with a direct connection to the internet. More information: [Sauce Connect Proxy Setup and Configuration](/secure-connections/sauce-connect/setup-configuration).


### Sauce Connect Proxy

A built-in HTTP proxy server that opens a secure tunnel connection for testing between a Sauce Labs virtual machine or real device and a website or mobile app hosted on your local computer ("localhost") or behind a corporate firewall. Sauce Connect Proxy securely connects Sauce Labs and your application or website under test.


### Sauce Connect Proxy Setup, Additional Proxy

A Sauce Connect Proxy network configuration for users with an existing internal network proxy or proxies through which outbound communication is routed from their network to the public internet. More information: [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).


### Sauce Connect Proxy Setup, Basic

A Sauce Connect Proxy configuration for users with a network configuration requiring a proxy to open up communication between Sauce Labs and their web or mobile app in testing that is hosted on a local machine or behind a firewall. More information: [Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup).


### Sauce Connect Proxy Setup, High Availability (HA)

A Sauce Connect Proxy configuration that allows you to run a high number of tunnels individually or collectively as a tunnel pool.
From an end user or test runner perspective, a pool functions the same as a single Sauce Connect instance.
More information: [High Availability Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).

See also: _[tunnel pool](#tunnel-pool)_.


### Sauce Connect Proxy Startup

The process of configuring and launching a Sauce Connect Proxy tunnel to run your tests. More information: [How to Start and Stop Sauce Connect Tunnels (Startup and Teardown)](/secure-connections/sauce-connect/proxy-tunnels).


### Sauce Connect Proxy Teardown

The process of gracefully shutting down and decommissioning a Sauce Connect Proxy tunnel. More information: [How to Start and Stop Sauce Connect Tunnels (Startup and Teardown)](/secure-connections/sauce-connect/proxy-tunnels).


### saucectl

The Sauce Labs framework agnostic test orchestrator CLI (command line interface). [saucectl](/testrunner-toolkit).


### Sauce Headless Testing

An environment to execute tests against headless Chrome and Firefox on Linux containers, allowing developers to receive fast feedback on early pipeline component, sanity and pull request tests. Basic pass/fail data (screenshots, logs, and metadata) is provided to ensure that bugs are identified and fixed earlier in the development lifecycle. Considered a complementary solution to the Sauce Cross Browser Testing platform. More information: [Getting Started with Sauce Headless](/headless).


### Sauce Labs Access Key

A randomly generated string of alphanumeric characters assigned to your Sauce Labs account that you must include in your test scripts along with your Sauce Labs username to authenticate your request and allow access to the resources on your Sauce Labs account. Also known as Access Key in [Sauce Labs](https://app.saucelabs.com/user-settings) and `SAUCE_ACCESS_KEY` as an environment variable.


### Sauce Labs Continuous Testing Benchmark

A Sauce Labs white paper – compiled periodically – that leverages anonymized Insights metrics from millions of user tests performed on the Sauce Labs cloud platform and identifies best testing practices and areas of improvement (e.g., test quality, test run time). Organizations can use this data to measure how their collective continuous testing efforts stack up with those of their peers. To request a copy, reach out to your Customer Success Manager.


### Sauce Labs User Name

An ID name that you define when you create your Sauce Labs account. You must include this (along with your Sauce Labs Access Key) in your test scripts to authenticate your request and allow access to the resources on your Sauce Labs account. Also known as Username in [Sauce Labs](https://app.saucelabs.com/user-settings) and `SAUCE_USERNAME` as an environment variable.


### Selenium

A portable framework for testing web applications.


### Selenium Grid

A part of the Selenium suite that specializes in running multiple tests across different browsers, operating systems, and machines in parallel. Selenium Grid has two versions: Grid 1 (older) and Grid 2 (newer).


### Selenium IDE

An integrated development environment for Selenium scripts – implemented as an extension for Chrome and Firefox – that allows you to record, playback, and debug tests in the browser. More information: [Selenium Projects](https://www.selenium.dev/projects/).


### Selenium Relay

A listener for Selenium commands built into Sauce Connect Proxy that enables inbound and outbound test traffic to be sent through an encrypted tunnel. More information: [Using the Selenium Relay with Sauce Connect Proxy](/secure-connections/sauce-connect/proxy-tunnels), [Sauce Connect Proxy Command-Line Quick Reference Guide](/dev/cli/sauce-connect-proxy).


### Selenium Server

A server required to run older Selenium RC tests or WebDriver tests in remote machines through the Selenium Grid.

See also: _[webdriver](#webdriver)_.


### Self-Service

1. A Sauce Labs customer who has purchased an online subscription plan.

2. A plan offered by Sauce Labs whereby customers can purchase by credit card and manage their subscription online.

  More information: [Sauce Labs Pricing](https://saucelabs.com/pricing).

  See also: _[unmanaged customer](#unmanaged-customer)_.


### Simulator

A virtual machine environment used to mimic the overall behavior (i.e., software variables, configurations) of the iOS mobile app you're testing in Sauce Labs.

See also: _[emulator](#emulator), [real device testing](#real-device-test)_.


### Site Under Test (SUT)

A website in the test phase of the development cycle, following the planning, coding, and building phases. When testing in Sauce Connect Proxy, the Site Under Test will be on the same local network as the Sauce Connect Host machine.

See also: _[application under test](#application-under-test), [CI/CD pipeline](#cicd-pipeline)_.


### Software Development Lifecycle (SDLC)

An end-to-end process used to develop, plan, design, build, test, and deploy software to production.


### SSL Bumping

A feature of Sauce Connect Proxy that automatically re-signs self-signed and invalid SSL certificates, which are not trusted by stock browsers like those installed on the Sauce Labs infrastructure. With SSL Bumping, your tests will not be interrupted with security warnings that can't be dismissed by Selenium. More information: [Sauce Connect Proxy Security and Authentication](/secure-connections/sauce-connect/security-authentication).


### Stress Testing

A test method where you purposely put your system under extreme conditions – above and beyond your requirements – to identify the breaking point and determine if and when your system fails gracefully.


### systemd

A Linux service management tool that facilitates Sauce Connect Proxy tunnel monitoring, system startup and shutdown. More information: [Monitoring Sauce Connect Proxy with Service Management Tools](/secure-connections/sauce-connect/proxy-tunnels#service-management-tools).


## **T**

### Team Admin

A Sauce Labs user role with permission to add and manage Team Members as well as configure test settings (e.g., concurrency) for their own team.

See also: _[organization admin](#organization-admin), [team member](#team-member)_.


### Team Management

A Sauce Labs feature available to enterprise users that provides organizations with the ability to create a hierarchy of Organization Admins, Team Admins, and Team Members, and manage user access to the system and concurrency settings.

See also: _[organization admin](#organization-admin), [team admin](#team-admin), [team member](#team-member)_.


### Team Member

A Sauce Labs user with permission to edit their own user info, run tests, and view tests run by teammates. Depending on their Organization Admin's Team Job Sharing settings, they can also view jobs that were run by members of other teams.

See also: _[organization admin](#organization-admin), [team admin](#team-admin), [team management](#team-management)_.


### Test Runner

A library or tool for writing and/or executing code for automated tests; often part of a UI test framework.

See also: _[framework](#Framework), [UI automation library](#ui-automation-library)_.


### Testing Annotation

The practice of adding test information such as names, tags, pass/fail status to your completed Sauce Labs tests, making it more manageable to search and sort your previous work. You can add annotations using tools such as the Sauce Labs REST API, Selenium JavaScript Executor, or one of our test framework examples that add annotations automatically. More information: [Sauce Labs Sample Test Frameworks (GitHub)](https://github.com/saucelabs-training).


### Testing Minutes

The number of minutes allotted to a Sauce Labs account for its subscription.


### Transparent Proxy

A server that sits between your computer and the Internet and redirects your requests and responses without modifying them. If your organization has one, please refer to Sauce Connect Proxy Setup with Additional Proxies. More information: [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).


### Tunnel

A secure connection between your network and Sauce Labs through which you can run a test, test suite, or build. To establish a tunnel, you must download and configure Sauce Connect Proxy.

See also: _[sauce connect proxy](#sauce-connect-proxy)._


### Tunnel Identifier

The Sauce Connect Proxy test configuration option that allows you to assign a name of your tunnel(s), giving you more control and monitoring capability over the tunnel. If you launch a tunnel without identifying it, your test traffic will default to running through that unnamed tunnel. More information: [Using Sauce Connect Tunnel Identifiers](/secure-connections/sauce-connect/setup-configuration/basic-setup#using-tunnel-identifiers).

See also: _[colliding tunnels](#colliding-tunnels)_.


### Tunnel Pool

A set of tunnels that share the same tunnel identifier and function as a single tunnel in high availability mode.

See also: _[sauce connect proxy setup (high availability)](#sauce-connect-proxy-setup-high-availability-ha)_.


### Tunnel Virtual Machine (Tunnel VM)

The virtual machine that hosts Sauce Connect Proxy on the Sauce Labs side.


## **U**

### UI Automation Library

A library or tool used for writing, running and providing functionality for browser-based tests in a particular setting. Some examples are WebdriverIO (JavaScript), Cucumber (Ruby/JavaScript/C#/Java), XCUITest (iOS mobile only).

See also: _[framework](#framework)_.


### Unified Platform

The Sauce Labs initiative to deliver a fully integrated, unified test experience across all of our products and solutions, with one single login. We're combining virtual device and real device testing assets, functional and non-functional (visual) testing methodologies under the [Sauce Labs](https://accounts.saucelabs.com/) domain.

See also: _[RDC on Sauce](#rdc-on-sauce)_.


### Unmanaged Customer

See: _[self-service](#self-service)_.


### Upstart

See: _[systemd](#systemd)_.


## **V**


### Virtual Device Cloud (VDC)

A Sauce Labs cloud service that provides an infrastructure to virtually test your desktop websites and mobile device apps on thousands of browser, operating system, and device combinations. More information: [Sauce Labs Pricing](https://saucelabs.com/pricing).

See also:_ [real device cloud](#real-device-cloud)_.


### Virtual Cloud

See: _[virtual device cloud](#virtual-device-cloud)_.


### Virtual USB (vUSB)

A mobile app debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable. It integrates into your development environment as if the device is connected directly to your workstation, meaning that you can also debug using your choice of homegrown development and testing tools.


### Virtual Machine (VM)

A virtual software development environment that functions like an isolated, actual computer, with its own CPU, memory, network interface, and storage. A Sauce Labs virtual machine runs on a Sauce Labs server and appears on your host machine as a process in a window. You can run multiple virtual machines at the same time.


### Visual Testing, Component

A Sauce Labs visual testing method that enables you to test individual UI components in isolation. If you’re using a component library like Storybook, Vue, Angular or React, you can use your existing stories as visual test cases and run them against our automated visual testing service.


### Visual Testing, End-to-End (E2E)

A Sauce Labs automated visual testing method that integrates with your WebDriver tests and code, enabling you to combine functional and visual regression UI testing across different browsers and resolutions in the same run.


## **W**


### W3C WebDriver Protocol

A platform- and language-neutral wire protocol that enables out-of-process programs to remotely instruct the behavior of web browsers. With Sauce Labs and all major browser vendors now supporting the W3C standard, automated Selenium tests will run with more stability and consistency between different browsers and devices. More information: [W3C Capabilities Support](/dev/w3c-webdriver-capabilities).


### WebDriver

Selenium's built-in library/API that drives web browser interactions in your automated tests. Supports all major browsers and programming languages. More information: [Selenium Projects](https://www.selenium.dev/projects).

See also: _[appium](#appium), [UI automation library](#ui-automation-library), [webdriverIO](#webdriverIO)_.


### WebdriverIO

A custom UI test automation library, written in JavaScript on Node.js, that is used for Selenium's W3C WebDriver API. It is not directly affiliated with the Selenium project.

See also: _[UI automation library](#ui-automation-library), [webdriver](#webdriver)._
