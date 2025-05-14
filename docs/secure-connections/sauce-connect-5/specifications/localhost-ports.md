---
id: localhost-ports
title: Sauce Connect 5 localhost ports
sidebar_label: Localhost ports
---

## Ports For Proxying Localhost Traffic

The following commonly used browsers and ports are subject to change as new versions are released.

Microsoft Edge, Chrome 71+, and the Safari browser on OS X 10.10+ and mobile iOS 8+ proxy these common ports:

    443, 888,
    2000, 2001, 2020, 2109, 2222, 2310,
    3000, 3001, 3010, 3030, 3210, 3333,
    4000, 4001, 4201, 4040, 4321, 4502, 4503, 4567,
    5000, 5001, 5002, 5050, 5555, 5432,
    6000, 6001, 6060, 6666, 6543,
    7000, 7070, 7774, 7777,
    8000, 8001, 8003, 8031, 8080, 8081, 8443, 8765, 8777, 8888,
    9000, 9001, 9031, 9080, 9081, 9090, 9191, 9876, 9877, 9999,
    49221, 53106, 55001

:::note
On Android devices, ports 5555 and 8080 cannot be used with Sauce Connect Proxy.
:::

:::note Using `.local` domains
Using [Bonjour / ZeroConf](https://developer.apple.com/bonjour) for hostnames on a local network does not work on Safari 15 and above.
:::

## Configuring Mobile Devices For Testing `localhost`

Testing with the address `localhost` (or the IP address `127.0.0.1`) is not supported with iOS or Android real devices in Sauce Connect.

To work around this, you'll need to edit your `hosts` file on the machine on which you are running Sauce Connect. Add an entry for a placeholder hostname (such as `localtestsite`) and the IP address `127.0.0.1`. Requests for `localtestsite` in your tests will then be sent through your Sauce Connect tunnel to `localhost`, which is the machine on which you are running Sauce Connect.

For example, adding `127.0.0.1   mockserver` to your `/etc/hosts` file, then starting a server on `localhost:3333` will route mockserver:3333 HTTP calls to your local server. Mobile tests using Sauce Connect will then be able to find your local server regardless of the nature of your test.

For tips on how to edit your `hosts` file, see [How to Edit Hosts File in Linux, Windows, or Mac](https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux).
