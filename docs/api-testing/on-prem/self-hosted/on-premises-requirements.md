---
id: on-premises-requirements
title: Self-Hosted System Requirements
sidebar_label: Self-Hosted System Requirements
keywords:
    - api
    - api-fortress
    - requirements
    - onpremises
    - selfhosted
---

The one server setup for API Fortress on-premise is a quick way to get things started in a protected environment. While not ideal for availability or performance, works exactly as expected and provides all the features of the cloud version.  
  

## Minimum Hardware Requirements  
* CPU: Intel based high frequency quad core processor  
* Memory: 16 GB RAM  
* HDD: 250 GB Memory: the memory impacts significantly on the speed of queries on big data sets. 32 GB is a recommended setup HDD: All API Fortress reports and metrics are stored. 10 million reports + 30 million metrics can require up to 250GB of disk space  
  

## Software Requirements 
* OS: a recent Linux distribution  
  
## Docker Deployment 
* Docker: 1.12  
> For the Docker deployment to succeed and to ease further updates, the server has to be able to communicate with https://hub.docker.com  
  

## Processes
* PostgreSQL: relational database for structured data  
* MongoDB: document database for reports and metrics  
* RabbitMQ: message queue  
* Tomcat: dashboard and engine application  
* AFScheduler: the API Fortress scheduler  
* AFMailer: the API Fortress mailer  
* AFConnector: dynamic data dispatcher for notifications  
* AFDownloadAgent: the downloader agent (actually performing HTTP calls)  
  
## Networking 
We assume this deployment will be able to access the services to be tested.  
  
## Further Connections
* HTTP(`80`) and/or HTTPS(`443`) inbound traffic enabled for every location that will need access to the dashboards. 
* Ports and services may vary based on system requirements.
