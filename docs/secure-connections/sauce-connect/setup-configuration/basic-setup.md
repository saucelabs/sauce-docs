---
id: basic-setup
title: Basic Sauce Connect Proxy Setup
sidebar_label: Basic Setup
---

The Basic Sauce Connect Proxy setup is ideal for non-enterprise users with network configurations that require a proxy to open up communication between Sauce Labs and their web or mobile app.

It is also a key step for any Sauce Connect deployment as a way to verify if you need help from network administrators to complete the configuration. For details, see [Validating Your Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/system-requirements).

For information about user configuration settings, see [Organization Settings](/basics/acct-team-mgmt/org-settings).

## What You'll Need
* Review [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements) to confirm that your system and network architecture will be compatible with Sauce Connect Proxy.
* Download the appropriate version of Sauce Connect Proxy for your operating system, if you haven't yet. For more information, see [Downloading Sauce Connect Proxy](/secure-connections/sauce-connect/installation).
* Understand what kinds of tests you're running:
** If you're using virtual machines or devices, see the instructions below.
** If you're testing real devices, see [Sauce Connect Proxy Setup for Real Device Cloud](/secure-connections/sauce-connect/setup-configuration/specialized-environments).
* Know your account details including:
** The url of the datacenter you need to use. For more information, see [Data Center Endpoints](https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints).
** Your Sauce Labs username and access key, which you can find in Sauce Labs under **Account > User settings**.
**NOTE:** Sauce Labs recommends setting all of the values above as environment variables to protect your username and api key from exposure, and also for future convenience.

## Validating Your Basic Sauce Connect Proxy Setup
Once you've downloaded Sauce Connect Proxy, you can validate that it works on your network by completing the following steps:
1. Launch a tunnel with the following flags, per the [Sauce Connect Proxy Command Line Reference](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide):

<code>$ bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -x $SAUCE_DC -i TUNNEL_ID'</code>

where:

* 'SAUCE_USERNAME' is the username assigned to your Sauce Labs account
* 'SAUCE_ACCESS_KEY' is the access key associated with that account
* 'SAUCE_DC' is the url of the datacenter you need to use. By default, the '-x' option is not required if you're using the default US West data center. If you're using the Read Device Cloud or the European Data Center, '-x SAUCE_DC' is required.
* 'TUNNEL_ID' is the identifier or name of the tunnel; for more information, see Using Tunnel Identifiers below.
2. Select an appropriate test script. Options might include:
* One of your existing tests, if available.
* An example from [Sauce Labs Demonstration Scripts](https://wiki.saucelabs.com/display/DOCS/Sauce+Labs+Demonstration+Scripts). Follow the instructions to configure the test before proceeding to step 3 below.
3. If you are using an tunnel identifier, add the following to the desired capabilities of  the test:

Java
Node.js
C#
Python
Ruby
caps.SetCapability("tunnelIdentifier", "TUNNEL_ID");
Where TUNNEL_ID is the identifier or name of the tunnel from step 1.

3. When you see 'connected', log in to Sauce Labs and, in the left navigation panel, click **TUNNELS**. Under **Active Tunnels**, you should see the tunnel you've just started.

4. Your next step depends on the outcome of the test:
* If the test isn't working, see **Test Not Working** below.
* If the test succeeds, there will be a Sauce Connect Proxy icon next to your test.

Screen Shot 2019-11-05 at 9.35.10 AM.png

### Test Not Working?
If you're unable to connect, check with your network administrator about examining firewall settings for roadblocks. For more information, see [Allow-listing for Restricted Networks](/secure-connections/sauce-connect/system-requirements).

Another possible issue is certificate  authentication. The server hosting Sauce Connect Proxy may need to connect to Online Certificate Status Protocol (OCSP). See [Sauce Connect Proxy Certificate Handling](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Certificate+Handling) for more information.

For troubleshooting specific errors or common issues, see [Sauce Connect Troubleshooting](/secure-connections/sauce-connect/troubleshooting) and [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq).

## Starting Tunnels as Needed
Once you've confirmed that your network is configured for Sauce Connect Proxy, you can start new tunnels as needed.

It is important to be aware of the various options you have for configuring tunnels:

* To use the Basic tunnel configuration, you can use the same steps described in VALIDATING to start all subsequent tunnels.
* To use a more advanced or complex configuration, you can use:
** [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies)
** [High Availability Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/high-availability)
** Other options described in Sauce Connect Proxy > Choosing the Right Direction for You or Your Team

As a best practice, Sauce Labs recommends creating a new tunnel for each test suite or build and tearing it down at the end of the test.

### Basic Network Configuration Diagram

Simple SC Setup Copy-2.png

Diagram Legend

SC Host (Sauce Connect Host)	The machine in your network on which the Sauce Connect Proxy application is running. In this setup, it has a direct connection to the internet.
SUT (Site Under Test)	The site that you're testing. It is on the same local network as the SC Host machine.
Tunnel VM (Tunnel Virtual Machine)
Virtual machine that hosts Sauce Connect on the Sauce Labs side.

**NOTE:** Sauce Connect must be on the same network as the website or mobile app under test, but it is not required to set it up on the same machine.

## Using Tunnel Identifiers
When launching a Sauce Connect tunnel for automated web and mobile app tests, you have two options:
* Launch a Sauce Connect tunnel as-is, without identifying it. That default, unnamed tunnel will automatically be used for all automated tests. This can be useful for small organizations with a limited number of tests.
* Assign a name known as a tunnel identifier. To accomplish this, you'll need to launch a tunnel with the '-i (--tunnel-identifier)' command to assign the tunnel identifier(s) when starting up Sauce Connect Proxy. Then, you'll need to use the ['tunnelIdentifier'](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-IdentifiedTunnels) option in the desired capabilities of your automated tests. This will trigger your tests to request a specific Sauce Connect tunnel to run your tests through that tunnel.

### Example: Automated Test with Sauce Connect Proxy Tunnel Identifiers
Below is an example of how to designate tunnels based on the 'tunnelIdentifier' option so that it works properly with an automated test.

Launch a new tunnel on the SC_HOST with the following flags, per the [Sauce Connect Proxy Command Line Reference](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide):

MacOS/Linux Example
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -x $SAUCE_DC -i sc-proxy-tunnel
Windows Example
> sc_download\bin\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% -x %SAUCE_DC% -i sc-proxy-tunnel

* Ensure that your network configuration allows for communication between the SC Host, the Tunnel VM, and the SUT (site under test). See the above basic network configuration diagram for further explanation.
* Select an example from [Sauce Labs Demonstration Scripts](https://wiki.saucelabs.com/display/DOCS/Sauce+Labs+Demonstration+Scripts) and follow the instructions to configure the test in your dev environment
* Navigate to the desired test script and add the following [Test Configuration Option](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options) in the ['sauce:options'](https://wiki.saucelabs.com/display/DOCS/W3C+Capabilities+Support#W3CCapabilitiesSupport-UpdatingWebDriverCapabilities) capability


Java
Node.js
C#
Python
Ruby
caps.SetCapability("tunnelIdentifier", "sc-proxy-tunnel");

## Sauce Connect Proxy Tunnel Startup Process
Every Sauce Connect tunnel spins up a fresh virtual machine (VM) that is used only for your tests; VMs are destroyed once the tunnel is closed. A recommended Sauce Connect best practice is to create a new tunnel for each test suite or build and tear it down at the end of your test.

DIAGRAM: Sauce Connect Proxy Tunnel Startup

sc-diagram-01.png

**STEP 1:** Sauce Connect Client calls REST API to start a tunnel.

**STEP 2:** REST API initiates a request to system to create a new Tunnel VM.

**STEP 3:** REST API tells the Sauce Connect Client DNS name of the Tunnel VM.

**STEP 4:** Sauce Connect Client makes connection request to Tunnel VM using its DNS name.

At this point, the tunnel is established between the Sauce Connect Client and the Tunnel VM.

## Sauce Connect Communication When Test is Running
DIAGRAM: Network Traffic Flow When a Test is Run Through a Sauce Connect Tunnel

sc-diagram-02.png

**STEP 1:** Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (for example, 'GET [www.saucedemo.com](http://www.saucedemo.com/)').

**STEP 2:** Test VM or Device sends this request to Tunnel VM in order to access SUT.

**STEP 3:** Tunnel VM forwards this request to Sauce Connect client via the secure tunnel.

**STEP 4:** Sauce Connect Client forwards the request to Site Under Test (SUT).

**STEP 5:** Site Under Test returns response to Sauce Connect Client.

**STEP 6:** Sauce Connect client sends response to Tunnel VM via secure tunnel.

**STEP 7:** Tunnel VM sends response to Test VM.

**STEP 8:** Test VM sends results back to Selenium/Appium Test cloud.

Throughout the lifetime of a tunnel, Sauce Connect Client sends status information to Sauce Labs REST API.
