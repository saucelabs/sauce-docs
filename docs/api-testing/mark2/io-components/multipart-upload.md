---
id: multipart-upload
title: "POST: Multipart Upload"
sidebar_label: "POST: Multipart Upload"
keywords:
    - api-testing
    - io-components
    - multipart-upload
    - upload
    - post
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The following instructions are to show how to make a `POST` call with an entire file included in the data.

:::warning On-Premises Only!
* This feature is **only available on-premises** as of API Fortress version 20.2.0. 
* This feature also requires that you update the `remotedownloadagent` to the latest version as well.
:::

## Mounting a Volume

For multipart, API Fortress will look for files in the `/data` directory, so you'll have to mount a volume to the `/data` directory. For example, if you're using `docker-compose`, it's done like this:

- Navigate to the `/core/` directory.
- Stop `apifortress` by issuing the following command:  
  
  ```bash
  sudo docker-compose stop apifortress
  ```
  
- Open the `docker-compose.yml` file. 
- There is a section labeled “#APIFORTRESS DASHBOARD”, at the bottom of this section there will be a `volumes` section. 
- Here you will see `# - ./data:/data` you can uncomment this line by getting rid of the `#`
- This will create a folder called `data` in the `/core/` directory.

 ```yaml
volumes:
  - ./tomcat_conf/conf:/usr/local/tomcat/conf
  # - ./bin:/usr/local/tomcat/bin
  - ./data:/data
 ```

- Now start the `apifortress` service again by issuing the following command:  
  
  ```bash
  sudo docker-compose up -d apifortress
  ```

## Make a Multipart POST Call

Now that we have a directory mounted we can make the `POST` call using a file from the `/data/` folder. 

- You can add a “post parameter” to your `POST` call to load the file into.
- Give the post parameter a name and craft the value using the following notation: `@file:filename.extension`.
- If the name matches a file in the `/data/` directory, then the whole form becomes a `form-data` type, and the file will be uploaded as a multipart.
  
<img src={useBaseUrl('img/api-fortress/2020/09/Screen-Shot-2020-09-11-at-10.51.47-AM.png')} alt="screenshot.jpg"/>
