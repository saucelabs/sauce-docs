---
id: local-downloader-setup
title: "Local Downloader Setup (Self-Hosted)"
sidebar_label: "Local Downloader Setup (Self-Hosted)"
keywords:
    - api
    - api-fortress
    - local
    - downloader
    - selfhosted
---

## What it Does

The API Fortress Remote Download Agent sits inside of your infrastructure to allow the platform to test systems that are not exposed externally.

It will listen to an HTTPS port for jobs requested by an API Fortress engine. The agent will perform an HTTP(S) request to an endpoint as described in the job, and once completed will serialize the data back to the engine, adding contextual information such as the metrics.

No data is retained in the agent memory after job completion. The agent will use the DNS settings provided by the machine it’s installed on. Click here to learn more about the [Downloaders](/api-testing/mark2/learn-more/downloader-101).

## General Requirements 

- **Software:** Java JRE 1.8 or greater
- **Network:** the agent should be reachable by the designated API Fortress engine(s)
- **Network:** the default inbound port is 8819

### Cloud Requirements

If the agent is meant to be contacted by the API Fortress cloud, the connection will happen from the following sources:

- **`dashboard-aws01-1.apifortress.com - 52.0.5.117`**
- **`dashboard-aws01-2.apifortress.com - 52.2.216.188`**

## Installation**

Unzip the provided package in a location of your choice.

The package should contain the following files:

- ****RemoteDownloadAgent-complete.jar** : the agent**
- **config.properties** : the configuration file
- **LICENSE.md** :  the license file
- ****VERSION.md** : the version file**
- **bin/start.sh** :  the start script for \*NIX systems
- **bin/shutdown.sh** : the stop script for \*NIX systems
- **bin/java\_opts.sh** : java related settings for \*NIX systems
- **bin/start.bat** : the start script for Windows
- **bin/java\_opts.bat** : java related settings for Windows

## Configuration

We will preconfigure the config.properties based on your needs.

Here the main items:

- **serviceName:** a human readable identifier of the downloader. 
- **apikey:** unique to every downloader. Used by the API Fortress engine to authenticate. 
- **secret:** used by the API Fortress engine to authenticate. 
- **use_http (true)**: enables the HTTP server. 
- **use_ssl (true):** enables the SSL encryption for the HTTP server.

### Running the Agent - NIX

* Run the `bin/start.sh` script to start the agent which will run in the background.
* Run the `bin/shutdown.sh` script to stop the service.

### Running the Agent - Windows

* Run the `bin/start.bat` script to start the agent which will run in foreground.

## Tuning

Even though the agent does not require relevant system resources, it is a good practice to allow the agent to use as much memory as available. By editing the java\_opts script (.bat or .sh, depending on the platform) you can tweak the heap memory settings.

:::note 
Remember that heap memory is not the only type of memory Java uses. Raising the heap to the system limits is not advised, and it will not work. If you are not familiar with these settings, the default will likely meet your requirements.
:::
