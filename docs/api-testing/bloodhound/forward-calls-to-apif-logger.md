---
id: forward-calls-to-apif-logger
title: "Bloodhound: Forward Calls to APIF Logger"
sidebar_label: Forward Calls to APIF Logger
---

import useBaseUrl from '@docusaurus/useBaseUrl';

One of the main reason for the existence of Bloodhound is providing a good way to forward API conversations to other agents. This example demonstrates how this happens using the FortressForwarder module that can be found on [GitHub](https://github.com/apifortress/bloodhound-modules/tree/master/fortress-forwarder).  
  
While you can find an example of how to forward the API conversations to requestbin [here](https://github.com/apifortress/Bloodhound-templates/tree/master/bloodhound_forward_api) and can certainly modify this to forward to many other locations including Elastic, Splunk, and many more. The example below will show you how to configure the side car to forward the calls to the API Fortress Logger.

## Configuration

Once you have downloaded the template on our [Github](https://github.com/apifortress/Bloodhound-templates/tree/master/bloodhound_forward_api), navigate to the "etc" directory and then to the "flows" directory. We will be modifying the "default.yml" file, there is a sidecar configured for requestbin you can replace that with the configuration below:

```yaml
sidecar/fortress\_forwarder:  
  config:  
    url: ""  
    headers:  
      x-api-key:   
      x-secret:   
    discard\_request\_headers:  
      - connection  
      - accept-encoding
```

Let's walk through what needs to go into the values:

- `url` - `"https://{yourAPIFortressDomian}.com/app/api/rest/v3/{CompanyID}/liveLogs/push/raw"`
    
- `x-api-key` and `x-secret` - can be generated in API Fortress in the "**Company Settings** -> **API KEYS**"
    
    <img src={useBaseUrl('img/api-fortress/2020/06/Screen-Shot-2020-06-10-at-1.01.31-PM.png')} alt="API Keys"/>


## Usage

The `docker-compose` comes with Bloodhound. In the default settings, Bloodhound will proxy a demo API.

1. Start the full package by issuing `docker-compose up -d`
2. Access your API Fortress Logger by going to "Tools -> Logger" and click "Update"
3. Execute the following request: `curl -H 'key:ABC123' 127.0.0.1:8080/demo/retail/product`
4. The output of the proxied API should appear on your screen
5. Click "Update" on your API Fortress Logger again and notice the forwarded API conversation  
      
    <img src={useBaseUrl('img/api-fortress/2020/06/Screen-Shot-2020-06-10-at-1.19.06-PM.png')} alt="Click Update"/>
