---
id: multiple-client-cert-downloader
title: Multiple Client-Cert Downloader
sidebar_label: Multiple Client-Cert Downloader
keywords:
    - api
    - api-fortress
    - certificates
    - certs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This mechanism will allow, in on-prem deployments only, to use multiple client-side certificates for authentication, instead of the current implementation that assigns one certificate to a downloader.

## The Image

The updates focus on the downloader and it's currently available in the image or above:

```bash
apifortress/remotedownloadagent:20.2.1
```

If you are using the "latest" tag and updated you are all set.  

## Components

The configuration of the downloader is made of two parts:

* **1. The client certificates**

  The downloader will need to mount a volume for the certificates (we suggest /certs) which will contain the client-side certificates.  

  For example:

  ```yaml
  - ./certs:/certs  
  ```

* **2. The trust store**

  In case the certificates are issued by a non-trusted CA, it'll be necessary to update the internal trust store of the image. This operation can be done in multiple ways, such as creating a derivative image of the downloader or mounting the file.
  We'll discuss the two options later.

### How to Build the Client-Side Certificates

The certificates need to be in the Java Key Store (JKS) format. Each client-side certificate (key and cert) need to be in a separate store.

If your certificates are not in this format already, you will be able to convert your .key .crt file by following these steps:

a) Convert the certificate to PKCS#12 format using openssl, as in:

   ```
    openssl pkcs12 -export -in client.crt -inkey client.key -out client.p12
   ```

b) Import the p12 to a JKS:

   ```
   keytool -importkeystore -srckeystore client.p12 \
        -srcstoretype PKCS12 \
        -destkeystore client.jks \
        -deststoretype JKS
   ```

Once you're done, you can copy the resulting artifact to the mounted volume.

Iterate the operation for each certificate you need to covert, changing the destination file every time, so that at the end of the process you'll have a separate JKS file for each certificate.

:::note
Both commands are **interactive** but can be made non-interactive with appropriate switches, for automation purposes.
:::

:::note
keytool is a program that is part of the default Java distribution. You will need at least a JRE to use it.
:::

:::note
other tools, some of which visual, exist to perform this kind of operations, such as [Keystore Explorer](https://keystore-explorer.org/)
:::

### Updating the Trust Store

As previously said, we can tackle this in two different ways.

One is creating a **derivate image** with a Dockerfile similar to this:

```
FROM apifortress/remotedownloadagent:20.2.1  
COPY ca.crt /ca.crt  
COPY cert.crt /cert.crt  
RUN /usr/java/latest/bin/keytool -import -trustcacerts -keystore /usr/java/latest/jre/lib/security/cacerts -storepass changeit -alias localca -import -file /ca.crt -noprompt  
RUN /usr/java/latest/bin/keytool -import -trustcacerts -keystore /usr/java/latest/jre/lib/security/cacerts -storepass changeit -alias localcrt -import -file /cert.crt -noprompt
```

If that's not practical for your automation and routines, you can:

Copy the file located in **`/usr/java/latest/jre/lib/security/cacerts` in the container**, add the new certificate using the **keytool** java command similar to what's shown in the Dockerfile.

Assuming the cacerts file and the ca.crt file are in the current directory, you can update it by using:

```bash
keytool -import -trustcacerts -keystore cacerts -storepass changeit -alias localca -import -file ca.crt -noprompt
```

You can eventually mount the file in the remotedownloadagent container, depending on your deployment method.

In docker-compose, you can add a volume like this:

```yaml
- ./cacerts:/usr/java/latest/jre/lib/security/cacerts
```

For Kubernetes, the most practical way since Kubernetes 1.10.0 is to create a config map from a binary file and then mount it accordingly.

## Technical Caveats

- Whenever the **trust store** is altered, the service needs to be restarted for the change to be effective.
- If a certificate is activated (see: Test writing) then the certificates involved need to be fully valid. It'll be, in other words, impossible to skip SSL validation
- The `disable_ssl_validation` must be set to false.
- This feature is currently unavailable in load testing (but will be implemented once we receive sufficient feedback on this implementation)  
      
### Test writing
    
The test writer is required to provide configuration (if necessary) on which certificate to use in each call. Here's an example:

```js 
<get url="[https://nginx.apifortress](https://nginx.apifortress/)" params="[:]" var="payload" mode="text">  
<config name="client_cert_configuration" value="{&quot;keystorePath&quot;:&quot;/certs/client.jks&quot;,&quot;keystorePassword&quot;:&quot;foobar&quot;}"/>  
</get>
```

The unescaped value is as follows:

```json    
{
  "keystorePath": "/certs/client.jks",
  "keystorePassword": "foobar"
}
```

Each call can be configured to use a different certificate, or no certificate at all.
    
The value can also be parametrized as a template using the `${...}` syntax  

<img src={useBaseUrl('img/api-fortress/2020/10/2020-10-15.png')} alt="2020-10-15.png"/>
