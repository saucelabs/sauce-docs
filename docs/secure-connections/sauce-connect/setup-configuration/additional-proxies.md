---
id: additional-proxies
title: Set Up with Additional Proxies
sidebar_label: Set Up with Additional Proxies
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is a guide for users who have an existing internal network proxy through which outbound communication is routed from their network to the public internet. If this sounds like your setup, additional proxy configuration of the Sauce Connect Proxy tunnel is required:

* Between the internet and the machine hosting Sauce Connect Proxy
* Between the machine hosting Sauce Connect and the machine hosting the website or mobile app you want to test

To configure Sauce Connect Proxy to use your proxy or proxies, you will need to include one or more Sauce Connect command-line options (see the [Sauce Connect Proxy Command-Line Quick Reference Guide](/dev/cli/sauce-connect-proxy)) in your test script.

## Warning About Man-in-the-Middle Proxies
If you use a Man-in-the-Middle proxy to monitor network traffic, it must be configured to allow the TLS connection and proprietary protocol used by Sauce Connect Proxy to communicate with the Sauce Labs virtual machines that are running your tests. If it will allow only HTTP or HTTPS sessions, it will drop the inbound Sauce Connect Proxy connection.

See the [Sauce Connect Proxy Tunnel Startup Diagram](/secure-connections/sauce-connect/setup-configuration/basic-setup) for more information about how Sauce Connect Proxy initiates and maintains the connection with the Sauce Labs browser cloud.  

## What You'll Need
Review the [Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup) to confirm that your system and network architecture are compatible with Sauce Connect Proxy.

## Setting Up Sauce Connect Proxy With Your Proxy
There are several different ways to set up Sauce Connect Proxy to use a proxy server that is on your network, depending on the desired behavior. There are three types of network traffic that are relevant to using proxy servers with Sauce Connect Proxy:

* **REST API Traffic:** The Sauce Connect client running on your network maintains a lightweight connection to our REST API that simply tells our servers basic information about the status of Sauce Connect's status (e.g., starting up, ready, stopping)
* **SUT Traffic:** The Sauce Connect client communicates with the Site Under Test (SUT) running in your network
* **Tunnel Traffic:** The Sauce Connect client makes a connection to the actual tunnel virtual machine (VM) in the Sauce Labs cloud, created for your Sauce Connect instance
The configuration options described below will cause the REST API and SUT traffic to be routed through your proxy. While it is technically possible to route the tunnel traffic through your proxy, it is **not** recommended because this traffic is already TLS-secured. Also, routing tunnel traffic through your proxy will significantly degrade test performance. This option should only be used if your network does not allow outbound communication over `port 443`.

### Proxied Site Under Test (SUT)
In this configuration, the Site Under Test (SUT) is behind a proxy in order to allow even more control over traffic before it reaches the SUT. This setup is used to control access to the SUT by IP allowlisting or by restricting proxy access to users with valid username/password credentials.

### Proxy Auto-Configuration (Automatic)
Proxies and proxy auto-configuration (PAC) (see [Proxy auto-config](https://en.wikipedia.org/wiki/Proxy_auto-config))settings are auto-configured, based on the operating system settings on the machine where it is installed.

* On Windows, Sauce Connect Proxy will use the proxy settings for Internet Explorer, as well as the system-wide proxy settings that are set in the Control Panel.
* On Mac OS X, Sauce Connect Proxy will use the proxy settings in Preferences/Network. Both proxy and PAC settings are supported.
* On Linux, Sauce Connect Proxy looks for these variables, in this order:
  * `http_proxy`
  * `HTTP_PROXY`
  * `all_proxy`
  * `ALL_PROXY` (they can be in the form `http://host.name:port` or `host.name:port`)

When a proxy is auto-detected, Sauce Connect Proxy will route all network traffic between the Sauce Connect Proxy client running on your network and the Sauce Labs REST API through the detected proxy. The traffic between the Sauce Connect Proxy client and the SUT will also be routed through the proxy. You can disable automatic proxy detection with the command-line option `./sc --no-autodetect`.

To set up and run Sauce Connect Proxy for this situation, see [Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup).

### Command Line Configuration (Manual)
If automatic proxy configuration fails, you will need to override the settings or enable proxies when starting Sauce Connect Proxy. There are several [command line arguments](/dev/cli/sauce-connect-proxy) that you can use to configure proxies manually.

| Flag | Description |
| :--- | :--- |
| `-p (--proxy <host:port>)` | Proxy host and port that Sauce Connect Proxy should use to connect to the Sauce Labs REST API and SUT traffic. Can be used on its own or combined with `-w -pac`.|
| `-p (--proxy <host:port>) -w (--proxy-userpwd <user:pwd>)` | Requires username and password sent via basic authentication to access the proxy specified with `-p`. Can be combined with `-pac`. :::note Do not use this `-p -w` combination with more than one proxy. Multiple proxies requiring auth are not supported.::: |
| `-p (-–proxy <host:port>) -T (--proxy-tunnel)` | Reroutes all tunnel traffic through the proxy specified with `-p`. This should only be used as a last resort if the machine running Sauce Connect Proxy cannot send outgoing connections from `port 443`. Cannot be combined with `--pac`. |
| `--pac url` | Proxy auto-configuration (can be a http(s) or local file: //URL). Absolute paths are required when specifying a local PAC file (e.g., `file:///Users/Andrew/Desktop/MyPac.pac`). Can be used on its own or combined with `-p -w`. |

#### Command Line Configuration Using `-p (-–proxy <host:port>)` and `-w (--proxy-userpwd <user:pwd>`)
Using the `-p` and `-w` commands together when starting a Sauce Connect Proxy tunnel will route traffic between the Sauce Connect Proxy client on your network and the Sauce REST API through the proxy server specified by the `<host:port>` argument.

Here are some examples for starting a tunnel using  `-p` and `-w`:

<Tabs
  defaultValue="maclinux"
  values={[
    {label: 'Mac or Linux', value: 'maclinux'},
    {label: 'Windows', value: 'windows'},
    {label: 'Using RDC or EU Data Center', value: 'rdceu'},
  ]}>

<TabItem value="maclinux">

```bash
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD
```

</TabItem>

<TabItem value="windows">

```bash
> sc_download\bin\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% -p %PROXY_HOST%:%PROXY_PORT%  -w %PROXY_USERNAME%:%PROXY_PASSWORD%
```

</TabItem>

<TabItem value="rdceu">

```bash
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD -x https://</span>eu-central-1.saucelabs.com/rest/v1
```

</TabItem>
</Tabs>

#### Command Line Configuration Using `-p (-–proxy <host:port>)` and `-T (--proxy-tunnel)`
The `-p` and `-T` combination is generally not recommended and should only be used as a last resort if the machine running Sauce Connect Proxy cannot send outgoing connections from `port 443`. Using this configuration will slow down your tests because all tunnel traffic will be re-routed through the proxy specified with `-p`. Your tunnel traffic is already encrypted.

Here are some examples for starting a Sauce Connect Proxy tunnel using `-p` and `-T`:

<Tabs
  defaultValue="maclinux"
  values={[
    {label: 'Mac or Linux', value: 'maclinux'},
    {label: 'Windows', value: 'windows'},
    {label: 'Using RDC or EU Data Center', value: 'rdceu'},
  ]}>

<TabItem value="maclinux">

```bash
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD -T
```

</TabItem>

<TabItem value="windows">

```bash
> sc_download\bin\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% -p %PROXY_HOST:PROXY_PORT%  -w %PROXY_USERNAME%:%PROXY_PASSWORD% -T
```

</TabItem>

<TabItem value="rdceu">

```bash
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD -T -x https://</span>eu-central-1.saucelabs.com/rest/v1
```

</TabItem>
</Tabs>

#### Command Line Configuration Using PAC Files (`–pac url`)
Your IT organization may have a PAC file that is used to specify how your own internal proxy servers should be configured.

To have Sauce Connect Proxy with your PAC file, use the `--pac url` command line option when starting Sauce Connect Proxy. The url argument can be an http(s) or local file: //URL. Absolute paths are required when specifying a local PAC file (e.g., `file:///Users/Andrew/Desktop/MyPac.pac`).

If your PAC file contains multiple proxies, in addition to `-pac`, you'll need to specify the `-p` option to designate which proxy will receive the username and password.

:::note
Sauce Connect Proxy versions older than 4.6.1 do not support the  `-p (--proxy)`  and `-T (--proxy-tunnel)` options combined with `--pac`. See [Downloading Sauce Connect Proxy](/secure-connections/sauce-connect/installation) to download the latest version.

:::

Here are some examples for starting a Sauce Connect Proxy tunnel using `--pac url`:

<Tabs
  defaultValue="maclinux"
  values={[
    {label: 'Mac or Linux', value: 'maclinux'},
    {label: 'Windows', value: 'windows'},
    {label: 'Using RDC or EU Data Center', value: 'rdceu'},
  ]}>

<TabItem value="maclinux">

```bash
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --pac PAC_FILE_URL
```

</TabItem>

<TabItem value="windows">

```bash
> sc_download\bin\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% --pac PAC_FILE_URL
```

</TabItem>

<TabItem value="rdceu">

```bash
$ sc_download/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --pac PAC_FILE_URL -x https://</span>eu-central-1.saucelabs.com/rest/v1
```

</TabItem>
</Tabs>

If you are starting a tunnel for Real Device tests, see [Real Device Cloud Setup](/secure-connections/sauce-connect/setup-configuration/specialized-environments#real-device-cloud-setup).

### Network Traffic Flow Diagrams
The following diagrams illustrate different Sauce Connect Proxy network flow configurations.

#### Site Under Test (SUT) Behind a Proxy

<img src={useBaseUrl('img/sauce-connect/scp-sut-proxy.png')} alt="Site Under Test (SUT) behind a proxy" width="400"/>

**Diagram Legend**

| Term | Definition |
| :--- | :--- |
| SC Host (Sauce Connect Host) | Machine in your network on which the Sauce Connect Proxy application is running. |
| SUT (Site Under Test) | The site that you're testing. |
| Sauce SC Host (Tunnel VM) | Virtual machine that hosts Sauce Connect Proxy on the Sauce Labs side. |

#### Network Traffic Flow With Tunnel Established using `-p`

<img src={useBaseUrl('img/sauce-connect/scp-traffic-flow-tunnel.png')} alt="Network traffic flow With tunnel established using '-p'" width="400"/>

1. Sauce Connect Proxy client sends new tunnel request to proxy.
2. Proxy forwards request to REST API.
3. REST API initiates a request to the system to create a new Tunnel VM.
4. REST API returns DNS name of Tunnel VM via your proxy.
5. Your proxy forwards DNS name to Sauce Connect Proxy client.
6. Sauce Connect Proxy client makes a connection request to Tunnel VM using DNS name.

At this point, the tunnel is established between the Sauce Connect Client and the Tunnel VM.

#### Network Traffic Flow When a Test is Run Through a Tunnel Started with `-p`

<img src={useBaseUrl('img/sauce-connect/scp-traffic-flow-through-tunnel.png')} alt="Network traffic flow through a tunnel started with '-p'" width="400"/>

1. Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (for example, 'GET www.saucedemo.com').
2. Test VM or Device sends this request to Tunnel VM in order to access Site Under Test (SUT).
3. Tunnel VM forwards this request to Sauce Connect Proxy client via the secure tunnel.
4. Sauce Connect Proxy client forwards the request to SUT via your proxy.
5. Site Under Test returns response to Sauce Connect Proxy client via your proxy.
6. Sauce Connect Proxy client sends response to Tunnel VM via secure tunnel.
7. Tunnel VM sends response to Test VM.
8. Test VM sends results back to Selenium/Appium Test cloud.

Throughout the lifetime of a tunnel, Sauce Connect Proxy client sends status information to Sauce Labs REST API via your proxy.

#### Network Traffic Flow when a Tunnel is Established Using `-T`

<img src={useBaseUrl('img/sauce-connect/scp-traffic-flow-t.png')} alt="Network traffic flow through a tunnel established using '-T'" width="400"/>

1. Sauce Connect Proxy client sends new tunnel request to REST API via your proxy.
2. REST API initiates a request to the system to create a new Tunnel VM.
3. REST API sends DNS name of Tunnel VM to Sauce Connect Proxy client via your proxy.
4. Sauce Connect Proxy client sends connect request to Tunnel VM via your proxy.

At this point, the tunnel is established between the Sauce Connect Proxy client and the Tunnel VM, but all traffic will go through your proxy.

#### Network Traffic Flow When a Test is Run Through a Tunnel Started Using `-T`

<img src={useBaseUrl('img/sauce-connect/scp-traffic-flow-through-t.png')} alt="Network traffic flow through a tunnel started using '-T'" width="400"/>

1. Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (for example, `GET www.saucedemo.com`).
2. Test VM or device sends this request to Tunnel VM in order to access Site Under Test (SUT).
3. Tunnel VM forwards this request to Sauce Connect Proxy client through tunnel via your proxy.
4. Sauce Connect Proxy client forwards the request to SUT via your proxy.
5. Site Under Test returns response to Sauce Connect Proxy client via your proxy.
6. Sauce Connect Proxy client sends response to Tunnel VM through tunnel via your proxy.
7. Tunnel VM sends response to Test VM.
8. Test VM sends results back to Selenium/Appium Test cloud.

:::note Throughout the lifetime of a tunnel, Sauce Connect Proxy client sends status information to Sauce Labs REST API via your proxy.
:::

### Setting Up with Third Party Proxies

#### Charles Proxy Configuration
The Charles Proxy is useful for monitoring traffic passing between your Sauce VM or RDC device and your site under test. To begin, you'll need to create a PAC file that matches the REST and tunnel VM hostnames, then use the Charles Proxy for everything else.

1. Download and install Charles Proxy (see the [Charles Web Debugging Proxy Application](https://www.charlesproxy.com/).
2. Open **Charles Proxy**.
3. To enable your machine to trust SSL/TLS certificates, in Charles Proxy, click **Help**, and then click **SSL Proxying** > **Install Charles Root Certificate**. For more information, see [SSL Certificates](https://www.charlesproxy.com/documentation/using-charles/ssl-certificates/).

<img src={useBaseUrl('img/sauce-connect/charles-ssl-cert-nav.png')} alt="Charles SSL certificates navigation" width="400"/>

4. Create a pac.js file for Sauce Connect Proxy:
  ```java
  function FindProxyForURL(url, host) {
      if (shExpMatch(host, "*.miso.saucelabs.com") ||
          shExpMatch(host, "*.saucelabs.com") ||
          shExpMatch(host, "saucelabs.com")) {
          // KGP and REST connections. Another proxy can also be specified.
          return "DIRECT";
      }

      // Test HTTP traffic, route it through the Charles proxy.
      return "PROXY localhost:8890";
  }
  ```

5. Start **Charles Proxy**.

6. To change to an open port, in Charles Proxy, click **Proxy** and then click **Proxy Settings**. Under **HHTP Proxy**, enter an open port (e.g., `port 8890`) and then click **OK**.

<img src={useBaseUrl('img/sauce-connect/charles-proxy-settings.png')} alt="Charles Proxy settings navigation" width="400"/>

7. Start your Sauce Connect Proxy tunnel:
  ```bash
  $ ./sc -v  --pac file:///</span>Users/johnsmith/workspace/scstuff/pac.js
  ```

8. Start your test using the proxy, then observe the traffic in Charles Proxy.

9. Copy the file to the same directory as Sauce Connect Proxy, and then start Sauce Connect Proxy.

#### WonderProxy
You can use WonderProxy for GeoIP website testing with Sauce Connect Proxy. For more information, see [Testing with Sauce Labs and WonderProxy](https://wonderproxy.com/docs/devs/guides/globalize-your-testing-with-sauce).

#### Using Multiple Proxies
If you have multiple proxies (two or more), you may need to edit the PAC file to reflect that. In a multi-proxy environment, you may have:

* A proxy specifically for the staging area or SUT
* A transparent proxy that connects you to the internet (see [Transparent proxy](https://en.wikipedia.org/wiki/Proxy_server#Transparent_proxy) for more information)

To confirm if you have additional proxies, you can use basic curl commands. If 'curl -v google.com' doesn't return anything, but `curl -v --proxy external.proxy.com:8080 google.com` does return something, you have at least one proxy required to access the public internet.

If `curl -v --proxy external.proxy.com private.mysite.com` does not get a response from your SUT, you may need to use a different proxy, such as `internal.proxy.com:8080`, access your SUT. In this case, you'd need your PAC file to reflect your network setup:

```java
// multiproxy proxy.pac
function FindProxyForURL(url, host) {
    // Sauce domain calls required to start a tunnel
    if (shExpMatch(host, "*.miso.saucelabs.com") ||
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
```
