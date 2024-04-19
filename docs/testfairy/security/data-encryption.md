---
id: data-encryption
title: End to End Data Encryption
sidebar_label: Data Encryption
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

End-to-End Data Encryption in TestFairy ensures that the logs and screenshots recorded from a mobile device are securely encrypted before being stored on the cloud. This encryption guarantees that only authorized team members with the private key can access and view the recorded data. To use this capability, you will need to create a public key and a private key. The public key initializes the TestFairy SDK in your app and the private key, which should not be shared with anybody, will be used by you when you log in to your TestFairy dashboard.

The encryption process involves using a randomly generated 256-bit AES key (this AES key is only used in a single session recording), which is further protected with an RSA public key.

## Generating Public/Private Key Pair

To enable end-to-end data encryption, you need to generate a public/private key pair. The private key should be kept confidential and shared only with authorized team members. Follow the steps below to generate the key pair using the `openssl` tool:

```bash
openssl genrsa -out testfairy-private-key.pem 2048
openssl rsa -in testfairy-private-key.pem -outform DER -pubout | base64 - > testfairy-public-key.txt
```

It will create two files called `testfairy-private-key.pem` and `testfairy-public-key.txt` containing your private and public keys.

The file `testfairy-private-key.pem` is sensitive and should not be shared with anyone outside your team.

The content of `testfairy-public-key.txt` will be used to initialize the SDK. Paste this value into the first parameter of `TestFairy.setPublicKey` method.

## Android Integration

Enable end-to-end encryption for your Android apps by calling `setPublicKey` before calling the `begin` method:

```java
TestFairy.setPublicKey("<PUBLIC KEY>");
TestFairy.begin("<APP TOKEN>");
```

## iOS Integration

Enable end-to-end encryption for your iOS apps by calling `setPublicKey` before calling the `begin` method:

```js
[TestFairy setPublicKey:@"<PUBLIC KEY>"];
[TestFairy begin:@"<APP TOKEN>"];
```

## Viewing Encrypted Sessions

Since the data is encrypted using RSA, viewing a session requires the private key. Visiting a recorded session will prompt a dialog for entry of the RSA Private Key. Paste the private key text and click "OK". Your private key is never sent to the server and is only retained within the browser session.

:::caution
It's crucial that you keep the private key safe. If it is lost, encrypted sessions cannot be recovered, rendering the recorded data useless.
:::

## Technical Details (How Does It Work?)

The end-to-end encryption process operates as follows:

1. As a developer, you generate a private key and derive a public key from it.
2. The public key is integrated into your app, allowing it to encrypt data but not decrypt it.
3. When a new session starts (calling `TestFairy.begin` after `TestFairy.setPublicKey`), the SDK generates a random 128-bit AES key and encrypts it using the RSA public key you provided.
4. Each session has a unique AES key (in CBC mode) that is not shared between sessions, ensuring strong security.

:::note
The random key is encrypted by the public key by itself. It means that if a 3rd party wants to view the session, they must run 2^128 brute force combinations to find one session.
:::

5. AES encryption is employed for data encryption as it is faster than RSA and not limited by the length of the `cleartext` value.
6. The encrypted data includes logs and screenshots, and certain features, such as showing values entered in EditText fields or the text of a button clicked, are automatically disabled when encryption is enabled.
