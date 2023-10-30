---
id: kubernetes
title: Sauce Connect Proxy in Kubernetes
sidebar_label: Kubernetes
---

[Kubernetes](https://kubernetes.io/), an industry-standard environment for management of containerized applications, may be used for the automation of much of the operational effort required to run Sauce Connect Proxy.
This article provides documentation for running Sauce Connect Proxy in [Kubernetes](https://kubernetes.io/).

## Running Sauce Connect in Kubernetes

If you need a Sauce Connect Proxy to stay up indefinitely, we recommend using a [Helm chart](https://helm.sh/docs/topics/charts/) to manage your Sauce Connect Proxy instance or pool.

The Sauce Connect Helm chart is available at the [Sauce Labs Helm Charts Registry](https://opensource.saucelabs.com/helm-charts/). The chart may be used as is, or adapted to your needs.

### Using Sauce Connect Helm chart

- Define a values file containing your configuration, for example:

```yaml
sauceApiRegion: us-west
sauceUser: johndoe
sauceApiKey: "xxx-xxx-xxx"
tunnelName: "my-k8s-tunnel"
tunnelPool: true
tunnelPoolSize: 2
terminationGracePeriodSeconds: 600
```

- Run Helm install

```bash title="helm install"
helm repo add saucelabs https://opensource.saucelabs.com/helm-charts
helm install sauce-connect  saucelabs/sauce-connect --values /path/to/values.yaml
```

- Use the following commands in order to get the Sauce Connect Proxy application logs

```bash title="SC logs"
$ POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=sauce-connect,app.kubernetes.io/instance=sauce-connect" -o jsonpath="{.items[0].metadata.name}")
$ kubectl logs $POD_NAME -f
...
2023/10/04 17:19:53 [tunnel] [INFO] established connection to Sauce Connect server active=1/2
2023/10/04 17:19:54 [tunnel] [INFO] established connection to Sauce Connect server active=2/2
2023/10/04 17:19:54 [control] [INFO] Sauce Connect is up, you may start your tests
```

- Pod restart

The `terminationGracePeriodSeconds` is set to 600 seconds to allow sufficient time for jobs using the Sauce Connect Proxy to finish.

## Additional Resources

- [Kubernetes](https://kubernetes.io)
- [Helm charts](https://helm.sh/docs/topics/charts/)
- [Sauce Labs Helm registry](https://opensource.saucelabs.com/helm-charts/)
