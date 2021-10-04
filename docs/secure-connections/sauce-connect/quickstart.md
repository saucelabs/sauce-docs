---
id: quickstart
title: Sauce Connect Proxy Quickstart
sidebar_label: Quickstart
hide_table_of_contents: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Get up and running in a few minutes by following the quickstart instructions below.

1. Download the latest version of the Sauce Connect Proxy client [here](/secure-connections/sauce-connect/installation).
2. For Windows and Mac, extract the .zip contents to your local machine > open your local terminal > navigate to the folder where you downloaded Sauce Connect.

  ```bash
  johnsmith@SL-1764 ~ % cd sc-4.7.1-osx
  ```

  For Linux, copy, paste, and run [this snippet](/secure-connections/sauce-connect/installation/#linux) in your local terminal.
3. Log in to Sauce Labs.
4. Go to the **TUNNELS** page.
5. Scroll to the bottom of the page until you see **STEP 3: Configure & Authenticate**.
6. Copy the code snippet listed there, paste it into your local terminal, and run it.
7. Your tunnel should now be up and running. To verify, there are two places you can check:
   * via [**TUNNELS**](https://app.saucelabs.com/tunnels) page

     <img src={useBaseUrl('img/sauce-connect/sauceconnect-tunnelsuccess-UI.png')} alt="Sauce Connect Tunnel Success" width="650"/>

   * via CLI

     <img src={useBaseUrl('img/sauce-connect/sauceconnect-tunnelsuccess-CLI.png')} alt="Sauce Connect Tunnel Success CLI" width="650"/>



## More Information

* [Sauce School: interactive Sauce Connect course](https://training.saucelabs.com/sauceconnect/)
