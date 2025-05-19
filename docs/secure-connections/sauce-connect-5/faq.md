---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This list of frequently asked questions covers key information about using Sauce Connect 5 and resolving common issues. You can also refer to the [Troubleshooting guide](/secure-connections/sauce-connect-5/troubleshooting/) for more detailed help.

## What outbound ports do I need open for Sauce Connect 5?

Sauce Connect Proxy 5 can only communicate with Sauce Labs via `port 443`. This is not configurable.

For more information, see [Data Center Endpoints](/basics/data-center-endpoints).

## Can Sauce Connect be managed by a service account?

No, [service accounts](/basics/acct-team-mgmt/managing-service-accounts) cannot start or manage Sauce Connect instances. Only user accounts have the permissions required to create and manage tunnels.

## Can I access apps on localhost?

Please refer to our [localhost proxying guide](/secure-connections/sauce-connect-5/guides/localhost-proxying).

## How can I improve tunnel performance?

To improve Sauce Connect 5 tunnel performance, start by ensuring that the instance running Sauce Connect has sufficient system resources. You can find recommended CPU and memory requirements in [System Requirements](/secure-connections/sauce-connect-5/system-requirements/#cpu-and-memory-resources).

Another effective way to optimize performance is to reduce unnecessary traffic passing through the tunnel. You can use the [-F, --deny-domains](/dev/cli/sauce-connect-5/run/#deny-domains) flag to block domains that do not need to be accessed during testing. This helps limit bandwidth usage and reduces load on the tunnel.

Additionally, you can configure [-D, --direct-domains](/dev/cli/sauce-connect-5/run/#direct-domains) to route specific traffic over the public internet instead of through the tunnel. This can significantly improve speed for non-sensitive endpoints or public resources and reduce tunnel pressure.

## How many tests can I run in each Sauce Connect instance?

The number of tests isn't the limiting factor — what matters is the amount of traffic those tests generate. Sauce Connect 5 performance depends on system resources and the number of concurrent HTTP requests.

As noted in the [system requirements](/secure-connections/sauce-connect-5/system-requirements), a single instance with 4 CPU cores can typically handle up to 4096 concurrent HTTP requests. To determine how many tests your instance can support, estimate the expected number of concurrent requests during peak test execution and scale accordingly.

## How many Sauce Connect instances can I keep open simultaneously?

The number of concurrent Sauce Connect instances you can run depends on your Sauce Labs contract. Typically, this limit ranges from 5 to 30 concurrent tunnels, but it can be customized based on your organization's specific needs. If you're unsure about your current limit or need to increase it, please contact your Sauce Labs representative.

## If we have five users, should we use five instances of Sauce Connect or set up one shared instance?

It depends on your team’s requirements. You can either run a separate Sauce Connect instance for each user or set up a [shared instance](/secure-connections/sauce-connect-5/guides/sharing-tunnel) — or even a shared [tunnel pool](/secure-connections/sauce-connect-5/guides/tunnel-pool/) — to match your capacity and traffic needs.

A shared setup can simplify management and reduce resource usage, while individual instances offer isolation and flexibility. Choose the approach that best fits your workflow and performance expectations.

## Can I run tests on Virtual Devices and Real Devices using the same Sauce Connect instance?

Yes, you can use the same Sauce Connect instance to test with the Virtual Device Cloud (VDC) and Real Device Cloud (RDC).

## How can I use Sauce Connect to test domain unavailability?

You can use the [`-F / --deny-domains`](/dev/cli/sauce-connect-5/run/#deny-domains) command-line option or `SAUCE_DENY_DOMAINS` environment variable to drop requests for domains matching the regexp. It can be used to simulate non-loading of scripts, styles, or other resources.

This flag can contain a list of regex that will match the domain that wants to be blocked. Example:

Entering this code -- `(www.)?google-analytics.com,(www.)?googletagmanager.com,([a-z0 9]+[.])*google.com,([a-z0-9]+[.])+facebook.com` -- will block the following domains:

- `www.google-analytics.com`
- `google-analytics.com`
- `google.com` and any subdomain of `google.com`
- Any subdomain of `facebook.com`, but not `facebook.com`
