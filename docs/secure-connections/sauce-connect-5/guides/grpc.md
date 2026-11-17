---
id: grpc
title: Testing gRPC Services with Sauce Connect 5
sidebar_label: gRPC
---

This guide explains how to set up Sauce Connect so that apps running on Sauce Labs virtual and real devices can reach gRPC services.

## Setting Up Sauce Connect for gRPC

By default, Sauce Connect resigns all TLS traffic with a Sauce Labs certificate. For more information, see [TLS Resigning](/secure-connections/sauce-connect-5/guides/tls-resigning). gRPC connections don't work when they're resigned, so you must turn off resigning for your gRPC hosts.

To do this, add your gRPC hosts to the `--tls-passthrough-domains` option when you start Sauce Connect. For details on the option and its value format, see [`--tls-passthrough-domains`](/dev/cli/sauce-connect-5/run/#tls-passthrough-domains).

This way gRPC is supported with both Sauce Labs real and virtual devices.

```bash
sc run \
  --username $SAUCE_USERNAME \
  --access-key $SAUCE_ACCESS_KEY \
  --region us-west \
  --tunnel-name my-grpc-tunnel \
  --tls-passthrough-domains 'grpc\.example\.com'
```

### gRPC Services on the Internet

If your gRPC server isn't in your private network, you can add its host to the [`--direct-domains`](/dev/cli/sauce-connect-5/run/#direct-domains) option. Requests to direct domains go over the internet instead of through the tunnel. Direct domains aren't TLS resigned, so gRPC calls to them work.

### Trusting Your Server Certificate

With TLS passthrough, your app connects to your gRPC server's own certificate, not a Sauce Labs certificate. Your app must trust that certificate:

- If your server uses a certificate from a public certificate authority, no extra setup is needed.
- If your server uses a self-signed or private CA certificate, bundle the certificate (or your CA) in your app and configure your gRPC client to trust it.

## Limitations

### Basic Authentication With `--auth`

When you use the [`--auth`](/dev/cli/sauce-connect-5/run/#auth) option, Sauce Connect turns on TLS resigning for the hosts it applies to, even if they're in `--tls-passthrough-domains`. Because gRPC doesn't work with TLS resigning, gRPC calls to those hosts fail.

### Network Capture on Real Devices

gRPC calls fail on real devices when [Network Capture](/mobile-apps/features/network-capture) is turned on in App Management, even if your gRPC hosts are in `--tls-passthrough-domains`. Turn off Network Capture for tests that make gRPC calls.

### Your gRPC Client Must Use the Device Proxy

On Sauce Labs real and virtual devices, traffic reaches Sauce Connect through a proxy that Sauce Labs sets on the device. Your gRPC client must use the device's system proxy setting, or its calls won't go through the tunnel.

## Troubleshooting

To check whether your app's gRPC calls reach Sauce Connect, start Sauce Connect with [`--log-http proxy:url`](/dev/cli/sauce-connect-5/run/#log-http). Because TLS resigning is turned off for your gRPC hosts, Sauce Connect can't see individual gRPC calls. Instead, look for a `CONNECT` request to your gRPC host and port, for example:

```
level=INFO msg="HTTP dump" module=proxy request="CONNECT //grpc.example.com:443" response=200
```

Only requests that go through Sauce Connect on your machine are logged. Hosts in [`--direct-domains`](/dev/cli/sauce-connect-5/run/#direct-domains) don't appear in the log as they don't go through Sauce Connect.

For more help, see the [Sauce Connect 5 Troubleshooting Guide](/secure-connections/sauce-connect-5/troubleshooting).