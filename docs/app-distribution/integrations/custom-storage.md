---
id: custom-storage
title: Custom Storage (Bring Your Own Bucket)
sidebar_label: Custom Storage
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Store your organization's build files and app icons in your own cloud storage bucket instead of the platform default. This gives you full control over where your data lives — for compliance, data sovereignty, or integration with your existing infrastructure.

:::info
Only Account Owners and Org Admins can configure storage settings. Find them under **Settings → Integrations → Storage** in the top bar.
:::

## How It Works

When your organization configures a custom storage bucket:

1. **New uploads** (builds and icons) are stored in your bucket instead of the platform default.
2. **Downloads** generate time-limited presigned URLs pointing to your bucket.
3. **Existing files** uploaded before the configuration remain on the platform default storage.
4. Each build tracks which bucket it was uploaded to, so downloads always resolve to the correct location.

## Supported Providers

| Provider | Driver | Notes |
| --- | --- | --- |
| **Amazon S3** | `s3` | Native support. Set region and leave endpoint blank. |
| **S3-Compatible** (MinIO, Wasabi, DigitalOcean Spaces) | `s3` | Set the custom endpoint URL. Uses the S3 API protocol. |
| **Google Cloud Storage** | `gcs` | Uses the S3-compatible XML API. Set endpoint to `https://storage.googleapis.com` and use HMAC credentials. |

## Prerequisites

- A cloud storage bucket (e.g., an S3 bucket in your AWS account)
- An IAM user or service account with access to the bucket
- Access key and secret key for that user

## Required IAM Permissions

The IAM user needs the following permissions on your bucket. Note that **both the bucket ARN and the objects ARN** must be included:

```json
{
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name"
        }
    ]
}
```

:::caution Common mistake
Only including `arn:aws:s3:::bucket-name/*` (objects) without `arn:aws:s3:::bucket-name` (bucket). The connection test requires `s3:ListBucket` on the bucket itself (without `/*`), while uploads/downloads require permissions on the objects (with `/*`).
:::

## Setting Up

1. Go to **Settings → Integrations → Storage** in the top bar.
2. Fill in the connection details:

   | Field | Description | Example |
   | --- | --- | --- |
   | **Provider** | Cloud storage provider | `Amazon S3` |
   | **Bucket Name** | Your storage bucket name | `my-company-builds` |
   | **Region** | Bucket region | `us-east-1`, `eu-central-1` |
   | **Custom Endpoint** | Only for S3-compatible services. Leave blank for AWS S3. | `https://s3.wasabisys.com` |
   | **Access Key** | IAM access key ID | `AKIAIOSFODNN7EXAMPLE` |
   | **Secret Key** | IAM secret access key — encrypted at rest, never displayed after saving | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |

3. Click **Save Configuration**.
4. Click **Test Connection** to verify Mobile App Distribution can access your bucket.

## Connection Status

| Status | Meaning |
| --- | --- |
| **Not Configured** | No custom storage — using platform default |
| **Untested** | Configuration saved but not yet verified |
| **Connected** | Connection verified — bucket is accessible |
| **Failed** | Connection test failed — check credentials and bucket permissions |
| **Disabled** | Custom storage is paused — new uploads go to platform default, existing files on your bucket remain accessible |

## Storage Resolution

The platform determines where to store and retrieve files using the following logic:

**For uploads (new builds)**

1. If the organization has an **enabled** custom storage config → upload to the org's bucket
2. Otherwise → upload to the platform default bucket

**For downloads (existing builds)**

1. If the build has a linked storage config (even if disabled) → use that config's credentials to generate the download URL
2. Otherwise → use the platform default bucket

This means **disabling your custom storage does not break existing downloads**. Each build remembers which bucket it was uploaded to, and the system uses the saved credentials to serve the file — even after the config is disabled.

## Disabling vs. Removing

| Action | Effect on New Uploads | Effect on Existing Files |
| --- | --- | --- |
| **Disable** | Go to platform default | Still accessible from your bucket (credentials preserved) |
| **Re-enable** | Resume uploading to your bucket | No change |
| **Remove** | Go to platform default | Files on your bucket may become inaccessible (credentials deleted) |

:::caution
**Before removing a storage configuration**, ensure all files have been migrated to the platform default or that you no longer need access to the builds stored in that bucket. Removing the configuration deletes the stored credentials permanently.
:::

## File Path Structure

Files are stored using the same relative path structure in both platform default and custom buckets:

```text
releases/{orgId}/{projectId}/{filename}-{uniqueId}.{ext}
icons/{orgId}/{projectId}/{randomHex}.png
```

Only relative paths are stored in the database — never full URLs. This means you can switch buckets or providers without modifying any existing data.

## Security

- Secret keys are **encrypted at rest** using libsodium (XSalsa20-Poly1305).
- Credentials are never stored in plain text, never logged, and never displayed in the UI after saving.
- Download URLs are **time-limited presigned URLs** (default: 60 minutes) — they expire and cannot be shared permanently.
- All storage operations are **audited** — configuration changes appear in the organization audit log.

## Troubleshooting

| Error | Cause | Fix |
| --- | --- | --- |
| `403 Forbidden` | IAM user lacks permissions or bucket ARN is missing from policy | Add both `arn:aws:s3:::bucket` and `arn:aws:s3:::bucket/*` to the IAM policy |
| `NoSuchBucket` | Bucket name is incorrect or bucket doesn't exist | Verify the bucket name and region |
| `InvalidAccessKeyId` | Access key doesn't exist or was deactivated | Check the access key in the IAM console |
| `SignatureDoesNotMatch` | Secret key is incorrect | Re-enter the correct secret key and save |
| `Connection timed out` | Wrong region, wrong endpoint, or network restriction | Verify the region matches the bucket's actual region. Check VPC/firewall rules. |
