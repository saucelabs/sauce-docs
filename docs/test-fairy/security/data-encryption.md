---
id: data-encryption
title: End to End Data Encryption
sidebar_label: Data Encryption
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy provides a mechanism to encrypt the logs and screenshots recorded from the mobile device. This way, the data kept on the cloud is encrypted, and nobody can read it other than the people in your team who have the private key.
To use this capability, you will need to create a public key and a private key. The public key initializes the TestFairy SDK in your app. The private key, which should not be shared with anybody, will be used by you when you log in to your TestFairy dashboard.

This encryption is done with a randomly generated 256-bit AES key. This AES key is random and is only used in a single session recording. The AES key is then protected with an RSA key, where the public key is provided when constructing the SDK.

## Generating Public/Private Key Pair

Generating a pair is done using `openssl` tool:

```bash
openssl genrsa -out testfairy-private-key.pem 2048
openssl rsa -in testfairy-private-key.pem -outform DER -pubout | base64 - > testfairy-public-key.txt
```

It will create two files called `testfairy-private-key.pem` and `testfairy-public-key.txt` containing your private and public keys.

The file `testfairy-private-key.pem` is sensitive and should not be shared with anyone outside your team.

The content of `testfairy-public-key.txt` will be used to initialize the SDK. Paste this value into the first parameter of `TestFairy.setPublicKey` method.

## Using Android

Enable end-to-end encryption for your Android apps by calling `setPublicKey` before calling the `begin` method.

```java
TestFairy.setPublicKey("<PUBLIC KEY>");
TestFairy.begin("<APP TOKEN>");
```

## Using iOS

Enable end-to-end encryption for your iOS apps by calling `setPublicKey` before calling the `begin` method.

```js
[TestFairy setPublicKey:@"<PUBLIC KEY>"];
[TestFairy begin:@"<APP TOKEN>"];
```

## Viewing encrypted sessions

Since the data is encrypted using RSA, viewing a session requires the private key. Visiting a recorded session will prompt a dialog for entry of the RSA Private Key. Just paste the private key text and click "OK". Your private keys are never sent to the server and are only kept in the browser session.

:::caution

It's crucial that you keep the private key safe. If lost, these sessions cannot be recovered, and the recorded data will become useless.

:::

## Technical details (How does it work?)

As a developer who wants to encrypt their sessions, you generate a private key and derive a public key from it.

You put your public key in your app, which is not a secret. This key can only be used to encrypt data, not decrypt.

When a new session starts (calling TestFairy.begin after TestFairy.setPublicKey), the SDK generates a random AES key and encrypts it with the RSA public key you provided.

It means every session has a different AES key (in CBC mode) and is not shared between sessions. The AES key is 128-bit, and the encrypted data may be decrypted if you have the key. The random key is encrypted by the public key by itself. It means that if a 3rd party wants to view the session, they must run 2^128 brute force combinations to find one session. AES is used to encrypt the data, as it is much faster than RSA and is not limited by the length of the cleartext value.

The data that is encrypted includes the logs and the screenshots. If encryption is enabled, certain features are automatically disabled, such as showing values entered in EditText fields or the text of a button clicked.
