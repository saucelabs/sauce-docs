---
id: localhost-proxying
title: Proxying Localhost with Sauce Connect 5
sidebar_label: Proxying Localhost
---

Sauce Connect 5 enables your local applications and services to be securely accessed from the Sauce Labs cloud. However, special care is required when working with `localhost` addresses, particularly when testing from mobile devices or when using real devices in Sauce Labs.

## Enabling Localhost Proxying

To route localhost traffic through Sauce Connect, you must enable the [`--proxy-localhost`](/dev/cli/sauce-connect-5/run#proxy-localhost) option when starting the tunnel.

This option controls how Sauce Connect handles requests to localhost (or 127.0.0.1):

- `--proxy-localhost allow`: Proxies all localhost requests through Sauce Connect to your local machine. Use this mode when you want devices in Sauce Labs to access services running on your machine (for example, http://localhost:3000).
- `--proxy-localhost direct`: Allows localhost requests but skips proxying them through any configured upstream proxy. Use this when your upstream proxy localhost should not be exposed.
- `--proxy-localhost deny`: Blocks all localhost requests to prevent unintended exposure. It is the safest option when localhost access is not needed.

By default Sauce Connect 5 uses deny mode.

## Special Cases

In some environments - particularly when testing on real mobile devices - localhost requires special handling.
That is because devices and browsers treat localhost or 127.0.0.1 as referring to themselves, not to the machine running Sauce Connect.

### Configuring Mobile Devices For Testing `localhost`

Testing with the address `localhost` (or the IP address `127.0.0.1`) is not supported with iOS or Android real devices in Sauce Connect.

To work around this, you'll need to edit your `hosts` file on the machine on which you are running Sauce Connect. Add an entry for a placeholder hostname (such as `localtestsite`) and the IP address `127.0.0.1`. Requests for `localtestsite` in your tests will then be sent through your Sauce Connect tunnel to `localhost`, which is the machine on which you are running Sauce Connect.

For example, adding `127.0.0.1   localtestsite` to your `/etc/hosts` file, then starting a server on `localhost:3333` will route `localtestsite:3333` HTTP calls to your local server. Mobile tests using Sauce Connect will then be able to find your local server regardless of the nature of your test.

For tips on how to edit your `hosts` file, see [How to Edit Hosts File in Linux, Windows, or Mac](https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux).


### Use Proxy-Compatible Ports for Virtual Devices

For virtual device tests, Sauce Connect supports proxying localhost traffic on a predefined set of ports.
You can run your service on one of these supported ports to make it accessible through the tunnel without additional configuration.

Commonly supported ports include:

```
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
```


**Known Limitations**: Not all test environments (especially older browser versions or custom enterprise configurations) support proxy-compatible ports. If your service isn't reachable even when using a listed port, consider falling back to previous solution with a custom hostname in the hosts file.

**Android Limitations:** On Android devices, ports 5555 and 8080 are not available for localhost proxying via Sauce Connect.

**Using .local Domains**: Hostnames ending in `.local` (for example, mymachine.local) that rely on Bonjour / ZeroConf do not work on Safari 15+.