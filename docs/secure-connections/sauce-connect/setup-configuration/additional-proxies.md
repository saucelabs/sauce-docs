---
id: additional-proxies
title: Sauce Connect Proxy Setup with Additional Proxies
sidebar_label: Set Up with Additional Proxies
---

This is a guide for users who have an existing internal network proxy through which outbound communication is routed from their network to the public internet. If this sounds like your setup, additional proxy configuration of the Sauce Connect tunnel is required:

* Between the Internet and the machine hosting Sauce Connect
* Between the machine hosting Sauce Connect and the machine hosting the website or mobile app you want to test

To configure Sauce Connect to use your proxy or proxies, you will need to include one or more [Sauce Connect command-line options](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide) in your test script.

## Warning About Man-in-the-Middle Proxies
If you use a Man-in-the-Middle proxy to monitor network traffic, it must be configured to allow the TLS connection and proprietary protocol used by Sauce Connect to communicate with the Sauce Labs virtual machines that are running your tests. If it will allow only HTTP or HTTPS sessions, it will drop the inbound Sauce Connect connection.

See the [Sauce Connect Proxy Tunnel Startup Process](/secure-connections/sauce-connect/setup-configuration/setup-configuration) diagram for more information about how Sauce Connect Proxy initiates and maintains the connection with the Sauce Labs browser cloud.  

## What You'll Need
Review the [Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup) to confirm that your system and network architecture are compatible with Sauce Connect Proxy.

## Setting Up Sauce Connect Proxy With Your Proxy
There are several different ways to set up Sauce Connect to use a proxy server that is on your network, depending on the desired behavior. There are three types of network traffic that are relevant to using proxy servers with Sauce Connect:

* **REST API Traffic:** The Sauce Connect client running on your network maintains a lightweight connection to our REST API that simply tells our servers basic information about the status of Sauce Connect's status (e.g., starting up, ready, stopping)
* **SUT Traffic:** The Sauce Connect client communicates with the Site Under Test (SUT) running in your network
* **Tunnel Traffic:** The Sauce Connect client makes a connection to the actual tunnel virtual machine (VM) in the Sauce Labs cloud, created for your Sauce Connect instance
The configuration options described below will cause the REST API and SUT traffic to be routed through your proxy. While it is technically possible to route the tunnel traffic through your proxy, it is **not** recommended because this traffic is already TLS-secured. Also, routing tunnel traffic through your proxy will significantly degrade test performance. This option should only be used if your network does not allow outbound communication over 'port 443'.

### Proxied Site Under Test (SUT)
In this configuration, the Site Under Test (SUT) is behind a proxy in order to allow even more control over traffic before it reaches the SUT. This setup is used to control access to the SUT by IP whitelisting or by restricting proxy access to users with valid username/password credentials.

### Proxy Auto-Configuration (Automatic)
Proxies and proxy auto-configuration (PAC) settings are auto-configured, based on the operating system settings on the machine where it is installed.

* On Windows, Sauce Connect will use the proxy settings for Internet Explorer, as well as the system-wide proxy settings that are set in the Control Panel
* On Mac OS X, Sauce Connect will use the proxy settings in Preferences/Network. Both proxy and PAC settings are supported
* On Linux, Sauce Connect looks for these variables, in this order:
- 'http_proxy'
- 'HTTP_PROXY'
- 'all_proxy'
- 'ALL_PROXY' (they can be in the form 'http://host.name:port' or 'host.name:port')
When a proxy is auto-detected, Sauce Connect will route all network traffic between the Sauce Connect client running on your network and the Sauce Labs REST API through the detected proxy. The traffic between the Sauce Connect client and the SUT will also be routed through the proxy. You can disable automatic proxy detection with the command-line option ./sc --no-autodetect.

To set up and run Sauce Connect for this situation, see [Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup).

### Command-Line Configuration (Manual)
If automatic proxy configuration fails, you will need to override the settings or enable proxies when starting Sauce Connect Proxy. There are several [command-line arguments](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide) that you can use to configure proxies manually.


-p (--proxy <host:port>)
Proxy host and port that Sauce Connect should use to connect to the Sauce Labs REST API and SUT traffic.

Can be used on its own or combined with -w -pac.

-p (--proxy <host:port>) -w (--proxy-userpwd <user:pwd>)
Requires username and password sent via basic authentication to access the proxy specified with -p.

Can be combined with -pac.

NOTE: Do not use this -p -w combination with more than one proxy. Multiple proxies requiring auth are not supported.

-p (-–proxy <host:port>) -T (--proxy-tunnel)
Reroutes all tunnel traffic through the proxy specified with -p. This should only be used as a last resort if the machine running Sauce Connect Proxy cannot send outgoing connections from port 443.

Cannot be combined with --pac.

--pac <url>
Proxy auto-configuration (can be a http(s) or local file: //URL). Absolute paths are required when specifying a local PAC file (e.g., file:///Users/Andrew/Desktop/MyPac.pac).

Can be used on its own or combined with -p -w.


#### Command-Line Configuration Using -p (-–proxy <host:port>) and -w (--proxy-userpwd <user:pwd>)
Using the '-p' and '-w' commands together when starting a Sauce Connect Proxy tunnel will route traffic between the Sauce Connect Proxy client on your network and the Sauce REST API through the proxy server specified by the '<host:port>'' argument.

Here are some examples for starting a tunnel using '-p' and '-w':

When running in Mac or Linux:
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD

When running in Windows:
> sc_download\bin\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% -p %PROXY_HOST%:%PROXY_PORT%  -w %PROXY_USERNAME%:%PROXY_PASSWORD%

When using RDC or the EU Data Center:
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD -x https://eu-central-1.saucelabs.com/rest/v1

#### Command-Line Configuration Using '-p (-–proxy <host:port>)' and '-T (--proxy-tunnel)'
The '-p' and '-T' combination is generally not recommended and should only be used as a last resort if the machine running Sauce Connect Proxy cannot send outgoing connections from 'port 443'. Using this configuration will slow down your tests because all tunnel traffic will be re-routed through the proxy specified with '-p'. Your tunnel traffic is already encrypted.

Here are some examples for starting a Sauce Connect tunnel using '-p' and '-T':

When running in Mac or Linux:
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD -T
When running in Windows:
> sc_download\bin\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% -p %PROXY_HOST:PROXY_PORT%  -w %PROXY_USERNAME%:%PROXY_PASSWORD% -T

When using RDC or the EU Data Center:
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD -T -x https://eu-central-1.saucelabs.com/rest/v1

#### Command-Line Configuration Using PAC Files ('–pac <url>')
Your IT organization may have a PAC file that is used to specify how your own internal proxy servers should be configured.

To have Sauce Connect Proxy with your PAC file, use the '--pac <url>' command-line option when starting Sauce Connect. The url argument can be an http(s) or local file: //URL. Absolute paths are required when specifying a local PAC file (e.g., file:///Users/Andrew/Desktop/MyPac.pac).

If your PAC file contains multiple proxies, in addition to '-pac', you'll need to specify the '-p' option to designate which proxy will receive the username and password.

**NOTE:** Sauce Connect Proxy versions older than 4.6.1 do not support the  '-p (--proxy)'  and '-T (--proxy-tunnel)' options combined with --pac. See to [Downloading Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Downloading+Sauce+Connect+Proxy) to download the latest version.

Here are some examples for starting a Sauce Connect tunnel using '--pac <url>':

When running in Mac or Linux:
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --pac <PAC_FILE_URL>

When running in Windows:
> sc_download\bin\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% --pac <PAC_FILE_URL>

When using RDC or the EU Data Center:
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --pac <PAC_FILE_URL> -x https://eu-central-1.saucelabs.com/rest/v1

If you are starting a tunnel for Real Device tests, see [Sauce Connect Proxy Setup for Real Device Cloud](/secure-connections/setup-configuration/specialized-environments).

### Network Traffic Flow Diagrams
The following diagrams illustrate different Sauce Connect Proxy network flow configurations.

**Diagram: Site Under Test (SUT) Behind a Proxy**

sc-diagram-07.png

Diagram Legend
SC Host (Sauce Connect Host)	Machine in your network on which the Sauce Connect application is running.
Site Under Test ("SUT")	The site that you're testing.
Sauce SC Host (Tunnel VM)
Virtual machine that hosts Sauce Connect on the Sauce Labs side.

**Diagram: Network Traffic Flow With Sauce Connect Tunnel Established using '-p'**

sc-diagram-05.png

**STEP 1a:** Sauce Connect Client sends new tunnel request to Proxy.

**STEP 1b:** Proxy forwards request to REST API.

**STEP 2:** REST API initiates a request to the system to create a new Tunnel VM.

**STEP 3a:** REST API returns DNS name of Tunnel VM via your Proxy.

**STEP 3b:** Your Proxy forwards DNS name to Sauce Connect Client.

**STEP 4:** Sauce Connect Client makes a connection request to Tunnel VM using DNS name.

At this point, the tunnel is established between the Sauce Connect Client and the Tunnel VM.

**Diagram: Network Traffic Flow When a Test is Run Through a Sauce Connect Tunnel that was Started Using '-p'**

sc-diagram-03.png

**STEP 1:**  Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (for example, GET www.saucedemo.com).

**STEP 2:** Test VM or Device sends this request to Tunnel VM in order to access Site Under Test (SUT).

**STEP 3:** Tunnel VM forwards this request to Sauce Connect client via the secure tunnel.

**STEP 4:** Sauce Connect Client forwards the request to SUT via your Proxy.

**STEP 5:** Site Under Test returns response to Sauce Connect Client via your Proxy.

**STEP 6:** Sauce Connect client sends response to Tunnel VM via secure tunnel.

**STEP 7:** Tunnel VM sends response to Test VM.

**STEP 8:** Test VM sends results back to Selenium/Appium Test cloud.

Throughout the lifetime of a tunnel, Sauce Connect Client sends status information to Sauce Labs REST API via your Proxy.

**Diagram: Network Traffic Flow when a Sauce Connect Tunnel is Established Using '-T'**

sc-diagram-06.png

**STEP 1a/1b:** Sauce Connect Client sends new tunnel request to REST API via your Proxy.

**STEP 2:** REST API initiates a request to the system to create a new Tunnel VM.

**STEP 3a/3b:** REST API sends DNS name of Tunnel VM to Sauce Connect Client via your Proxy.

**STEP 4a/4b:** Sauce Connect Client sends connect request to Tunnel VM via your Proxy.

At this point, the tunnel is established between the Sauce Connect Client and the Tunnel VM, but all traffic will go through your Proxy.

**Diagram: Network Traffic Flow When a Test is Run Through a Sauce Connect Tunnel that was Started Using '-T'**

sc-diagram-04.png

**STEP 1:** Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (for example, GET www.saucedemo.com).

**STEP 2:** Test VM or Device sends this request to Tunnel VM in order to access Site Under Test (SUT).

**STEP 3a/3b:** Tunnel VM forwards this request to Sauce Connect client through tunnel via your Proxy.

**STEP 4:** Sauce Connect Client forwards the request to SUT via your Proxy.

**STEP 5:** Site Under Test returns response to Sauce Connect Client via your Proxy.

**STEP 6a/6b:** Sauce Connect client sends response to Tunnel VM through tunnel via your Proxy.

**STEP 7:** Tunnel VM sends response to Test VM.

**STEP 8:** Test VM sends results back to Selenium/Appium Test cloud.

**NOTE:** Throughout the lifetime of a tunnel, Sauce Connect Client sends status information to Sauce Labs REST API via your Proxy.

### Setting Up Sauce Connect Proxy with Third Party Proxies

**Charles Proxy Configuration**
The Charles Proxy is useful for monitoring traffic passing between your Sauce VM or RDC device and your site under test. To begin, you'll need to create a PAC file that matches the REST and tunnel VM hostnames, then use the Charles Proxy for everything else.

1. [Download and install Charles Proxy](https://www.charlesproxy.com/).
2. Open **Charles Proxy**.
3. To enable your machine to trust SSL/TLS certificates, in Charles Proxy, click **Help**, and then click **SSL Proxying** > **Install Charles Root Certificate**.

charles-ssl-cert-nav.png

4. Create a pac.js file for Sauce Connect Proxy:

function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.miso.saucelabs.com") ||
        shExpMatch(host, "*.api.testobject.com") ||
        shExpMatch(host, "*.saucelabs.com") ||
        shExpMatch(host, "saucelabs.com")) {
        // KGP and REST connections. Another proxy can also be specified.
        return "DIRECT";
    }

    // Test HTTP traffic, route it through the Charles proxy.
    return "PROXY localhost:8890";
}

5. Start the Charles Proxy.

6. To change to an open port, in Charles Proxy, click **Proxy** and then click **Proxy Settings**. Under **HHTP Proxy**, enter an open port (e.g., port 8890) and then click **OK**.

charles-proxy-settings.png

7. Start your Sauce Connect Proxy tunnel:

$ ./sc -v  --pac file:///Users/johnsmith/workspace/scstuff/pac.js
Start your test using the proxy, then observe the traffic in Charles Proxy.


Copy the file to the same directory as Sauce Connect proxy, and then start Sauce Connect Proxy.

## WonderProxy
You can use WonderProxy for GeoIP website testing with Sauce Connect. For more information, see [Testing with Sauce Labs and WonderProxy](https://wonderproxy.com/docs/devs/guides/globalize-your-testing-with-sauce).

## Using Multiple Proxies
If you have multiple proxies (two or more), you may need to edit the PAC file to reflect that. In a multi-proxy environment, you may have:

* A proxy specifically for the staging area or SUT
* A transparent proxy that connects you to the internet (see [Transparent proxy](https://en.wikipedia.org/wiki/Proxy_server#Transparent_proxy) for more information)

To confirm if you have additional proxies, you can use basic curl commands. If 'curl -v google.com' doesn't return anything, but 'curl -v --proxy external.proxy.com:8080 google.com' does return something, you have at least one proxy required to access the public internet.

If 'curl -v --proxy external.proxy.com private.mysite.com' does not get a response from your SUT, you may need to use a different proxy, such as 'internal.proxy.com:8080', access your SUT. In this case, you'd need your PAC file to reflect your network setup:

// multiproxy proxy.pac
function FindProxyForURL(url, host) {
    // Sauce domain calls required to start a tunnel
    if (shExpMatch(host, "*.miso.saucelabs.com") ||
        shExpMatch(host, "*.api.testobject.com") ||
        shExpMatch(host, "*.saucelabs.com") ||
        shExpMatch(host, "saucelabs.com")) {
        // Send the required Sauce Traffic
        // to the External proxy
        return "PROXY external.proxy.com:8080";
    }

    // Test VM HTTP traffic gets routed to the
    // Internal proxy to reach the site Under Test
    return "PROXY internal.proxy.com:8080";
}
