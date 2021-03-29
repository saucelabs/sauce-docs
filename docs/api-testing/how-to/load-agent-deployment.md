---
id: load-agent-deployment
title: Load Agent Deployment
sidebar_label: Load Agent Deployment
keywords:
    - api-testing
    - how-to
    - load-agent
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A Load Agent is a server instance that provides the simulated users in a load test. Load Testing cannot function without at least one Load Agent.

The provided files (contained in core-server.tgz) are all that you need in order to deploy a Load Agent. This tutorial will explain what changed need to be made to the files within in order to properly deploy the Load Agent.

Before starting the process, there is a step that needs to be taken for clients who received their API Fortress containers before the introduction of Load Testing.

## Step 0 - Activate the Node Container

:::note
This step is not for all users
:::

Open the `docker-compose.yml` in the main API Fortress directory. It can be located at `/core/bin/docker-compose.yml`

1. Paste the following code snippet in after the #RABBITMQ section and before the #APIFORTRESS DASHBOARD section:

   ```yaml
   #NODE
   apifortress-node:
     image: theirish81/uitools
     hostname: node.apifortress
     networks:
       - apifortress
     domainname: node.apifortress
     labels:
       io.rancher.container.pull_image: always

   ```
2. In the _links_ section of the #APIFORTRESS DASHBOARD configuration, add the following line:
   
   ```yaml
   - apifortress-node:node.apifortress
   ```
   
3. Save and close the `docker-compose.yml`.
4. Open the `start_all.sh` file in a code editor. It is also located in `/core/bin`.
5. Copy and paste the following and overwrite the entire contents of the file:

   ```bash
   #!/bin/bash
   sudo docker-compose up -d apifortress-postgres
   sleep 5s
   sudo docker-compose up -d apifortress-mongo
   sleep 5s
   sudo docker-compose up -d apifortress-rabbit
   sudo docker-compose up -d apifortress-node
   sleep 30s
   sudo docker-compose up -d apifortress
   sleep 1m
   sudo docker-compose up -d apifortress-mailer
   sudo docker-compose up -d apifortress-scheduler
   sudo docker-compose up -d apifortress-connector
   ```

6. Your API Fortress instance can now utilize the API Fortress Node Container which powers Load Testing.

## Step 1 - Unzip the provided file (`core-server.tgz`)

First, unzip the provided file.

<img src={useBaseUrl('img/api-fortress/2018/06/Screen-Shot-2018-06-05-at-11.44.28-AM.png')} alt="screenshot" />

## Step 2 - Define the maximum users per Load Agent

Users per agent are the maximum number of virtual users that each Load Agent can provide.

:::caution IMPORTANT!
Large numbers of simulated users will require large amounts of hardware resources. Contact your DevOps team to develop a strategy for resource allocation.
:::

1. Locate and open the file named `application.conf`. It is located in `core-server/etc`.
2. Line 14 of this file (`fixed-pool-size`) should have it's value adjusted to match the desired number of maximum users per agent.
3. Line 48 of this file (`nr-of-instances`) should have it's value adjusted to match the desired number of maximum users per agent. These two values should match.

## Step 3 - Configure `config.yaml`

1. Locate and open `config.yaml`. It is located at `core-server/etc`.
2. First, we have to configure the `baseURL`
    - `baseURL` is located on line 3.
    - If the Load Agent and the API Fortress Dashboard are located on the same server, then you can replace the baseURL with the internal address and port of the Dashboard on the server.
    - If the Load Agent and the API Fortress Dashboard are located on different servers, you can replace the baseURL with the actual URL of the Dashboard. That is to say, the URL you would use to access it via web browser.
3. Next, we need to provide the API Key and Secret.
    - Open the main API Fortress dashboard and click the gear icon in the upper right corner to access the settings menu
    - Click the "_API Keys_" option in the left sidebar.
    - Click "_+API Key"_ 

<img src={useBaseUrl('img/api-fortress/2018/06/CreateAPIKey-1024x640.gif')} alt="CreateAPI.gif" />

(Click image for GIF of procedure)

4. Copy the _API Key_ to line 5 of `config.yml`.
5. Copy the _Secret_ to line 6 of `config.yml`.

## Step 4 - Adding the Engine

The next step is to add the new Engine to API Fortress itself.
1. Log into API Fortress as an administrator.
2. Click the user icon in the upper right corner, and then click _"Admin Panel"_
3. Click _"Engines"_ on the left side of the screen.
4. Click "_+Engine"_
5. Enter the name and location of the Engine.
6. The CRN value defaults to a random string. You _must_ change it to something human-readable. This is the internal name of the engine.
7. After modifying the CRN, copy the value to line 11 of `config.yml`
8. Copy the secret to line 12 of `config.yml`
9. Select the Owning Company of the Engine. An Engine must be owned by a single company. The default value (Public Engine) should _not_ be chosen.
10. Select _"Yes"_ for "_Dedicated to Load Testing_"
11. Click the green check to save the Engine settings.

<img src={useBaseUrl('img/api-fortress/2018/06/ezgif.com-gif-maker-1-1024x640.gif')} alt="ezgif.com.gif" />

(Click image for GIF of procedure)

## Step 5 - Deploy the Load Agent

At the desired server location, use the `docker-compose up -d` command to deploy the Load Agent container. After the operation is complete, the Load Agent will be visible to your API Fortress Load Tests.

<img src={useBaseUrl('img/api-fortress/2018/06/Screen-Shot-2018-06-05-at-11.44.28-AM.png')} alt="screenshot" />
