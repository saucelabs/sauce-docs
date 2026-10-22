---
id: grpc
title: Testing gRPC Services with Sauce Connect 5
sidebar_label: gRPC
---

This guide explains how to set up Sauce Connect so that apps running on Sauce Labs virtual and real devices can reach gRPC services in your private network.

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

To see whether gRPC requests reach Sauce Connect, start it with `--log-level debug` and check the logs for requests to your gRPC host. For more help, see the [Sauce Connect 5 Troubleshooting Guide](/secure-connections/sauce-connect-5/troubleshooting).