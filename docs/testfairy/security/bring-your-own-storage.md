---
id: bring-your-own-storage
title: Bring Your Own Storage
sidebar_label: Bring Your Own Storage
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Mobile Sauce Mobile App Distribution on a Private Cloud instance, allows you to *Bring Your Own Storage* and store the app artifacts on your own bucket.

This document explains how to create a new bucket that can be then used by Sauce Mobile Sauce Mobile App Distribution.

### Creating a bucket



- `AWS region` is your own choice. Best would be in the same region as the compute instances.


- `Bucket Name` should fit your own naming convention.


- Here is what needs to be configured:

  - `Bucket type`: General Purpose

  - `Object ownership`: ACLs Disabled (all objects in this bucket are owned by this account)

  - `Block Public Access settings for this bucket`: On

  - `Default encryption`: SSE-S3 (for custom KMS, see next section)

  - `Bucket Policy`:
  ```json
  {
    "Version": "2012-10-17",
    "Id": "mobile_app_distribution_policy",
    "Statement": [
      {
        "Sid": "mobile_app_distribution_statement",
        "Effect": "Allow",
        "Principal": {
          "AWS": "<will be provided to you>"
        },
        "Action": [
          "s3:GetObject",
          "s3:PutObject"
        ],
        "Resource": "arn:aws:s3:::<bucket name>/*"
      }
    ]
  }
  ```

### Using SSE-KMS on Bucket

In order to have objects in S3 encrypted with SSE-KMS, a Key Policy is required.

Here is what's required:

- Key is **required** to be created in the same region as the S3 bucket

- Create with key type `Symmetric`, and key usage `Encrypt and Decrypt`

- Paste this **Key Policy**:
  ```json
  {
    "Version": "2012-10-17",
    "Id": "mobile_app_distribution_key_policy",
    "Statement": [
      {
        "Sid": "Allow Sauce Mobile Sauce Mobile App Distribution",
        "Effect": "Allow",
        "Principal": {
          "AWS": "<will be provided to you>"
        },
        "Action": [
          "kms:Encrypt",
          "kms:Decrypt",
          "kms:GenerateDataKey"
        ],
        "Resource": "*"
      },
      {
        "Sid": "Enable IAM User Permissions",
        "Effect": "Allow",
        "Principal": {
          "AWS": "arn:aws:iam::<your account id>:root"
        },
        "Action": "kms:*",
        "Resource": "*"
      }
    ]
  }
  ```




