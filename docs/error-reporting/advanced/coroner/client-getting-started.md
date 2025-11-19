---
id: client-getting-started
title: Coroner Client - Getting Started
sidebar_label: Client Getting Started
description: Submit snapshot files (.btt files) to the object store (coronerd).
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The `coroner` client tool enables you to submit snapshot files (.btt files) to the object store (coronerd). To perform command-line querying of the Backtrace object store, use the [morgue tool](/error-reporting/advanced/morgue/) instead.

## Configuration

By default, the coroner client uses `~/.coroner.cf` as its configuration file. You can specify alternate configurations by passing the `-c` flag to `coroner`.

The `coroner` configuration file has two key sections: `universe` and `token`.

In `universe`, you specify information about the name and URL of your `coronerd` universe.
In `token`, you associate a friendly token name with the value of a token you create with the object store web UI. This way, you can use the shorter friendly name in `coroner` commands.

The `universe` section contains the following settings:

- `name`: The name of the top-level universe you selected when installing coronerd (typically your organization name).
- `write`: The full URL to the coronerd submission endpoint (typically https://your.server.com:6098).
- `read`: The address and port of the coronerd read endpoint (typically your.server.com:4097 - leave off the protocol).
- `read.ssl.enabled`: Set this to `true` to enable secure communications over the read endpoint (`false` if omitted).
- `read.ssl.method`: The encryption method for secure communications (typically TLSv12).
- `curl.ssl_verifyhost`: Set this to `false` to skip certificate verification for secure communications. Use with self-signed certificates.
- `curl.ssl_verifypeer`: Set this to `false` to skip certificate verification for secure communications. Use with self-signed certificates.

Below are some example configurations for coroner for common scenarios:

### Configuration Using CA-Trusted Certificates

For server-side configuration with CA-trusted certificates, refer to: [Database Install with CA-Trusted Certificates](/error-reporting/advanced/coroner/server-installation/#ca-trusted-certificates).

```bash
[universe]
name = myuniversename
write = https://:6098
read = :4097
read.ssl.enabled = true
read.ssl.method = TLSv12

# Below, you will associate the tokens you created in the coroner console (token_id)
# with a concise name (token_name). You will use these token names when submitting
# snapshots to coroner later on.
[token]
=
```

### Configuration Using Self-Signed Certificates

For server-side configuration with self-signed certificates, refer to: [Database Install with Self-Signed Certificates](/error-reporting/advanced/coroner/server-installation/#self-signed-certificates).

```bash
[universe]
name = myuniversename
write = https://:6098
read = :4097
read.ssl.enabled = true
read.ssl.method = TLSv12
curl.ssl_verifyhost = false
curl.ssl_verifypeer = false

# Below, you will associate the tokens you created in the coroner console (token_id)
# with a concise name (token_name). You will use these token names when submitting
# snapshots to coroner later on.
[token]
=
```

### Configuration for Unsecured Communications

For server-side configuration with no SSL/TLS, refer to: [Database Install with No SSL/TLS](/error-reporting/advanced/coroner/server-advanced/#disable-ssl).

```bash
[universe]
name = myuniversename
write = http://:6097
read = :4097

# Below, you will associate the tokens you created in the coroner console (token_id)
# with a concise name (token_name). You will use these token names when submitting
# snapshots to coroner later on.
[token]
=
```

### Uploading Individual Snapshots with `coroner put`

The most common use for `coroner` is to submit individual snapshots to the object store. This is how the `coresnap` utility uploads the snapshots it creates.

To upload a snapshot, use the following command:

```bash
$ coroner put projectname tokenname /path/to/snapshot.btt
```

You can optionally include the `-c` flag to specify a coroner configuration file, and the `-u` flag to unlink the snapshot file when the upload is complete.

### Uploading Snapshots Automatically with `coroner daemon`

The `coroner daemon` mode allows coroner to monitor a list of folders for snapshot files continuously. Whenever a snapshot is saved to one of these folders, `coroner` will automatically upload it to the object store using a specified token and then remove it. It helps if you have a process that saves snapshots to a central location and you want to upload them automatically.

To configure `daemon` mode, add a section to your `coroner.cf` file called `[daemon]`:

```bash
[daemon]
proj1.root=/home/jdoe/workspace/proj1
proj1.token=proj1
proj2.root=/home/jdoe/workspace/proj2
proj2.token=proj2
```

Each `root` setting specifies the path to a folder for `coroner` to watch, and the corresponding `token` specifies the friendly token name to use for the upload.

In the example above, when a snapshot file is saved to `/home/jdoe/workspace/proj1`, `coroner daemon` will automatically run the equivalent of `coroner put proj1 proj1 /home/jdoe/workspace/proj1/file.btt`.

Once configured, run `coroner daemon` and leave it running.
