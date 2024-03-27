---
id: kubernetes
title: Sauce Connect Proxy in Kubernetes
sidebar_label: Kubernetes
---

[Kubernetes](https://kubernetes.io/), an industry-standard environment for management of containerized applications, may be used for the automation of much of the operational effort required to run Sauce Connect Proxy.
This article provides documentation for running Sauce Connect Proxy in [Kubernetes](https://kubernetes.io/).

## Helm Chart

If you need a Sauce Connect Proxy to stay up indefinitely, we recommend using a [Helm chart](https://helm.sh/docs/topics/charts/) to manage your Sauce Connect Proxy instance or pool.
The Sauce Connect 5 Helm chart is available at the [Sauce Labs Helm Charts Registry](https://opensource.saucelabs.com/helm-charts/SAUCE-CONNECT.html).
The chart may be used as is, or adapted to your needs.

### Usage

To use the chart, you must have a Kubernetes cluster running and [Helm](https://helm.sh/) installed.

#### Define a required values file

Example `values.yaml`:

```yaml
config:
  # You can use and sc run command option here. Check the CLI reference for more information.
  region: us-west
  username: johndoe
  access-key: "xxx-xxx-xxx"
  tunnel-name: "my-k8s-tunnel"

# To run a tunnel pool, set the `tunnelPoolSize` value to the desired number of tunnels in the pool.
#tunnelPoolSize: 2

# Adjust the time for jobs using the Sauce Connect Proxy to finish when the pod is terminated.
# By default, the terminationGracePeriodSeconds is set to 600 seconds.
#terminationGracePeriodSeconds: 600
```

For more information about the `config` values, see the [sc run command reference](/secure-connections/sauce-connect-5/cli/run).

#### Install the Helm chart

```bash
helm repo add saucelabs https://opensource.saucelabs.com/helm-charts
helm install sauce-connect  saucelabs/sauce-connect --values /path/to/values.yaml --set config.tunnel-name=your-pool-name --set tunnelPoolSize=2
```

### Application logs

Use the following commands in order to get the application logs:

```bash
kubectl logs -l "app.kubernetes.io/name=sauce-connect" --tail -1 -f
```

The output should look like this:

```
2023/10/04 17:19:53 [tunnel] [INFO] established connection to Sauce Connect server active=1/2
2023/10/04 17:19:54 [tunnel] [INFO] established connection to Sauce Connect server active=2/2
2023/10/04 17:19:54 [control] [INFO] Sauce Connect is up, you may start your tests
```
