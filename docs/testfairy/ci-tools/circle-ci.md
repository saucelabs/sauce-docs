---
id: circle-ci
title: Circle CI
sidebar_label: Circle CI
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[CircleCI](https://circleci.com) is a cloud-based CI/CD service that helps developers automate their development process with CI hosted in the cloud or on a private server.

App Distribution has a CircleCI "ORB", allowing you to upload builds to App Distribution smoothly.

To use the ORB, add the following line to the `orbs` section of your `.circleci/config.yml`:

```yml
orbs:
 testfairy: testfairy/uploader@2.0.1
```

Then, upload your .IPA or .APK, you'll have to call `testfairy/uploader`, providing the path to the file and your API key. As an example of creating, add the following command:

```yml
jobs:
  build:
    # ...
    steps:
      # ... steps to build IPA or APK
      - testfairy/uploader:
          api-key: TESTFAIRY_API_KEY
          file: app.apk
```

`TESTFAIRY_API_KEY` is the environment variable name containing your API key. Environment variables are the best practice, so you don't commit secret values into your code repository.

You can see the complete list of supported commands by visiting the [CircleCI App Distribution ORB Repository](https://circleci.com/orbs/registry/orb/testfairy/uploader).
