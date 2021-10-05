---
id: quickstart
title: Sauce Connect Proxy Quickstart Guide
sidebar_label: Quickstart
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Get up and running with a Sauce Connect Proxy tunnel in just a few minutes by following the instructions below.

## Starting a Tunnel

1. Download the Sauce Connect Proxy client [here](/secure-connections/sauce-connect/installation).
2. For Windows and Mac, extract the .zip download contents to your local machine, open your local terminal, and navigate to the folder where you downloaded Sauce Connect (i.e., `cd sc-4.7.1-osx` or `cd sc-4.7.1-win32`). For Linux, copy [this snippet](/secure-connections/sauce-connect/installation/#linux), then paste and run it in your local terminal.
3. Log in to Sauce Labs.
4. Go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page, scroll to **STEP 3: Configure & Authenticate**, and copy the code snippet listed there.
5. Paste the snippet into your local terminal and then run it. This authenticates you, connects you to a Sauce Labs Data Center, assigns an ID for your tunnel, and starts your tunnel.

That's it! Now that your tunnel is up, try running a test.


## Verifying a Tunnel

To verify that your tunnel is up and running, there are two places you can check:

#### Tunnel Page
<img src={useBaseUrl('img/sauce-connect/sauceconnect-tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="800"/>

#### CLI/Terminal
<img src={useBaseUrl('img/sauce-connect/sauceconnect-tunnelsuccess-cli.png')} alt="Sauce Connect Tunnel Success CLI" width="700"/>


## Stopping a Tunnel

To stop a tunnel, go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page and click the **Stop** icon next to your tunnel.

<img src={useBaseUrl('img/sauce-connect/sauceconnect-tunnelstop-ui.png')} alt="Sauce Connect Tunnel Success CLI" width="800"/>


## More Information

* [Sauce School: Sauce Connect Proxy course](https://training.saucelabs.com/sauceconnect/) - an interactive course with video walkthroughs and practice activities.
