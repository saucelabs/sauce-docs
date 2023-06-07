---
id: data-encryption
title: End to End Data Encryption
sidebar_label: Data Encryption
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

/Security/End_to_End_Data_Encryption.html

https://github.com/testfairy/docs/blob/master/docs/610_Security/200_End_to_End_Data_Encryption.md

TestFairy provides a mechanism to encrypt the logs and the screenshots that are recorded from the mobile device. This way, the data that is kept on the cloud is encrypted and nobody can read it other than the people in your team who have the private key.
In order to use this capability, you will need to create a public key and a private key. The public key will be used to initialize the TestFairy SDK in your app. The private key, which should not be shared with anybody, will be used by you, when you log in to your TestFairy dashboard.

This encryption is done with a randomly generated 256-bit AES key. This AES key is random and is only used in a single session recording. The AES key is then protected with an RSA key, where the public key is provided when constructing the SDK.

#### Generating public/private key pair

Generating a pair is done using openssl tool:

```
openssl genrsa -out testfairy-private-key.pem 2048
openssl rsa -in testfairy-private-key.pem -outform DER -pubout | base64 - > testfairy-public-key.txt
```

This will create two files called `testfairy-private-key.pem` and `testfairy-public-key.txt` containing your private and public keys.

The file `testfairy-private-key.pem` is sensitive and should not be shared with anyone that is not part of your team.

The content of `testfairy-public-key.txt` will be used to initialize the SDK. Please paste this value into the first parameter of `TestFairy.setPublicKey` method.

#### Using in Android

Enable end-to-end encryption for your Android apps by calling `setPublicKey` before calling the `begin` method.

```
TestFairy.setPublicKey("<PUBLIC KEY>");
TestFairy.begin("<APP TOKEN>");
```

#### Using in iOS

Enable end-to-end encryption for your iOS apps by calling `setPublicKey` before calling the `begin` method.

```
[TestFairy setPublicKey:@"<PUBLIC KEY>"];
[TestFairy begin:@"<APP TOKEN>"];
```

#### Viewing encrypted sessions

Since the data is encrypted using RSA, viewing a session requires the private key. Simply visiting a recorded session will prompt a dialog for entry of the RSA Private Key. Just paste the private key text and click "OK". Your private keys are never sent to the server and are only kept within the browser session.

**Important note:** it's crucial that you keep the private key safe. If lost, these sessions cannot be recovered and the recorded data will become useless.

<a name="technical-details"></a>

#### Technical details (How does it work?)

As a developer who wants to encrypt their sessions, you generate a private key and derive a public key from it.

You put your public key in your app, and this key is not a secret. This key can be only used to encrypt data, but not decrypt it back.

When a new session starts (calling TestFairy.begin after TestFairy.setPublicKey), the SDK generates a random AES key and encrypts it with the RSA public key you provided.

This means that every session has a different AES key (in CBC mode), and is not shared between sessions. The AES key is 128 bit, and the encrypted data may be decrypted if you have the key. The random key is encrypted by the public key by itself. This means that a 3rd party wants to view the session, they need to run 2^128 brute force combinations to find one session. AES is used to encrypt the data, as it is so much faster than RSA, and is not limited by length of cleartext value.

Notice that the data that is encrypted includes the logs and the screenshots. If encryption is enabled, certain features are automatically disabled, such as showing values entered in EditText fields, or the text of a button that was clicked.
