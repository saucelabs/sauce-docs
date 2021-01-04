---
id: running-speedy-tests
title: Running Speedy Tests
sidebar_label: Running Speedy Tests
---
It's a reality that tests run on Sauce Labs will always have some latency, compared to running locally, due to there being an Internet in the middle between your tests and our browsers. So, rather than running in the same machine, each Selenium request is sent through the wire to our VMs and receives a response back through the same channels. These are some other common factors that contribute to test duration, and a few tips for using your minutes efficiently. 

## Identify Time Sinks
- If you're testing against a local application server, you will see some additional latency due to the distance from our browsers to your server.

  The same applies if you're using Sauce Connect to test against a firewalled server. When you're running Sauce Connect, it sends all requests from Sauce's browsers back through the machine running Sauce Connect, such that they appear to originate from that machine. This means that all data sent between the Sauce cloud and the site you're testing must travel first to your local machine, then back out to the application under test or to the Sauce cloud. 

  While Sauce Connect also includes features that help to reclaim this time, such as caching static site resources in our cloud, this added security comes with some extra running time.

- If you're using Capybara, be aware that this integration testing tool is especially chatty when formulating tests (and the same may go for other wrappers that run on top of the Selenium library). For example, entering a value in an input field can spawn five Selenium commands: verifying that the element is displayed, getting its name, determining its type, clearing it, and then entering the text. While these steps help make tests robust and informative, if you're writing scripts by hand, they are usually not necessary.

- Mobile browsers (iOS and Android) require a little extra time to fire up, as they first launch the device emulator, then a browser within it. Also, if you use the fullReset desired capability, the test boot times will increase significantly. We recommend using this capability sparingly.

## Sauce Connect
If you are using Sauce Connect, reduce the unnecessary traffic that goes through the Sauce Connect tunnel; this will help the test run faster. Here are some suggested methods:

1. In your test, determine the URLs that are publicly available over the internet and list their domains with the **-D, --direct-domains** flag when you start the Sauce Connect tunnel. The  **-D, --direct-domains** flag takes a comma-separated list of domains which will be relayed directly through the internet, instead of through the tunnel.


2. Determine those resources in your application that are not necessary for your test verifications (for example, images or advertisements). List the domains for these resources using the **-F, --fast-fail-regexps** flag when you start the Sauce Connect tunnel. The **-F, --fast-fail-regexps** flag takes a comma-separated list of domains and any requests matching one of these will be dropped instantly, not going through the tunnel. This will allow your application to load faster.

For more information about all the flags you can use with Sauce Connect, see [Sauce Connect Proxy Command-Line Quick Reference Guide](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide).

## Optimize Your Test Scripts
The main thing you can do to decrease latency is to break your test down into small, atomic, autonomous tests (see [Running Small, Atomic, Autonomous Tests](https://wiki.saucelabs.com/display/DOCS/Best+Practices%3A+Use+Small%2C+Atomic%2C+Autonomous+Tests) for more information).

 We recommend breaking the test down into smaller chunks, because: 

1. You will be able to run independent tests in parallel, decreasing your build time.
 2. It will make your tests more robust, since independent sections are tested without a pre-existing application state from earlier actions. 
3. If you're using Sauce Connect, you have use of a proxy that intelligently caches static
resources, so that later tests don't have to re-load those from scratch. 

### Additional Tips

- CSS locators are generally faster than XPATH locators, especially if you're running tests in Internet Explorer (locating by an element's unique ID is usually the most stable method).
- Cut down on unneeded chatter. If your test contains an abundance of GET requests (get text, get displayed, etc.), this will contribute disproportionately to the test duration. Each command takes time to transmit to our cloud and pass back a result; since these steps execute so quickly, the time required to send the command through the Internet is proportionally larger, causing the test duration to inflate more than usual.
- Reduce repetition: Check your test logs for duplicated requests and determine whether this is necessary.

## Integrate Intelligently
Besides these script-dependent factors, there are a few additional Sauce processes that happen on a per-job basis, aside from the test, that add some extra time. These include:

- Automatic screenshots and video recording. We capture an automatic screenshot after each page-changing command, and record video of each test by default. These are post-processed and uploaded after the test is over. The time this takes is added to the test, as it means we have to keep that machine fully dedicated until this is finished. These options are turned on by default, and can be disabled in your script as described in [Test Configuration Options](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options).

- Browser start time. The time it takes browsers to start varies with browsers and versions. This is inherent to the complexity of browser testing and how Selenium handles each browser boot, so this can't be eliminated. This happens before the test starts and is added to the test time as well under the same principles.

Additional factors that may affect your test run time include:

- When using Connect, some additional length is expected (due to the time required to relay each request and response between our browsers and your machine running the .jar)
- If your tests are very short, the processing on each end also contributes time in a greater proportion relative to the test - since these times will not reduce below a few seconds.
