---
id: certificate-based-mutual-ssl-tls-authentication
title: "Certificate-based (mutual) SSL/TLS Authentication"
sidebar_label: "Certificate-based (mutual) SSL/TLS Authentication"
keywords:
    - api
    - api-fortress
    - self-hosted
    - SSL/TLS
---

**Definition:** Mutual SSL authentication or certificate\-based mutual authentication, or client-side SSL authentication refers to two parties authenticating each other through verifying the provided digital certificate so that both parties are assured of the others' identity

In API Fortress, the component in charge of registering thecertificateis the downloader. If your deployment has mixed auth/unauth endpoints, we suggest you create a specific downloader for each one scenario.  

:::note
This feature is experimental and only available on a self-hosted instance.  
::: 

## Install the servers certificates on the downloader's trust store

This step may be not necessary based on the nature of the certificate and implementation. If the certificate is signed by an internal CA, this step is certainly mandatory.  
  

To trust the server certificate, you will need to create a derivative image of the downloader.

Dockerfile example:

```
FROM apifortress/remotedownloadagent:latest  
COPY ca.crt /ca.crt  
COPY cert.crt /cert.crt  
RUN /usr/java/latest/bin/keytool -import -trustcacerts -keystore /usr/java/latest/jre/lib/security/cacerts -storepass changeit -alias localca -import -file /ca.crt -noprompt  
RUN /usr/java/latest/bin/keytool -import -trustcacerts -keystore /usr/java/latest/jre/lib/security/cacerts -storepass changeit -alias localcrt -import -file /cert.crt -noprompt
```

Where `ca.crt` and `cert.crt` are the certification authority certificate and the server certificate itself.

If you're unsure of what a Dockerfile file is, please refer to the [Docker guide](https://docs.docker.com/engine/reference/builder/) or contact us.

To trigger the build of the image, simply issue:

```
sudo docker build -t ssldownloader
```

from the directory where the Dockerfile is "ssldownloader" is the name of the derivate image. You can name it whatever you want or match it to your own Docker registry.

## Create the client-side certificate

Assuming you have a client certificate file and a key file, you will need to create a Java Key Store file from them (JKS).

Steps:

a) Convert the certificate to PKCS#12 format using openssl, as in:

```
openssl pkcs12 -export -in client.crt -inkey client.key -out client.p12
```

b) Import the p12 to a JKS:

```
keytool -importkeystore -srckeystore client.p12 \
        -srcstoretype PKCS12 \
        -destkeystore client.jks \
        -deststoretype JKS
```

:::note
Keytool is a program that is part of the default Java distribution. You will need at least a JRE to use it.

Other tools, some of which visual, exist to perform this kind of operations, such as [Keystore Explorer](https://keystore-explorer.org/)
:::

## Update the configuration file

Position the client.jks file in the same directory as the docker-compose.yml file.

In the `docker-compose.yml` file:

If you had to go through step 1, you will need to:

- change the image name from apifortress/remotedownloadagent:latest to the name of the derivate image you created, as in:

  ```yaml
  image: ssldownloader`
  ```

### Mandatory steps

- add a volume to mount the client.jks file, as in:

    ```
    volumes:  
        - ./client.jks:/client.jks
    ```

- add an environment variable to configure the client certificate as in:

  ```
  client_cert_configuration: '{"keystorePath":"/client.jks","keystorePassword":"foobar"}'
  ```

- the `disable_ssl_validation` must be set to false. Certificate validation needs to be active.  
  
You can now restart the downloader.  
  
:::note
If you are using .pfx files you can follow this [digicert guide](https://www.digicert.com/kb/ssl-support/jks-import-export-java.htm) to convert them to .jks files.  
  
You can also bind multiple certificates to a single downloader, [click here to learn how](https://apifortress.com/doc/multiple-client-cert-downloader/).
:::