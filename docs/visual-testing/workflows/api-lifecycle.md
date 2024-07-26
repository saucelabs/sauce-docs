---
id: api-lifecycle
title: API Lifecycle
sidebar_label: API Lifecycle
---

# API Lifecycle

This documentation provides a step-by-step guide on how to interact with Sauce Visual API. By following these steps, you'll be able to create builds, upload images, create snapshots, and finish builds. This guide is intended for users who wish to connect directly to the API or implement a binding on their own, including a link to our GraphQL API documentation for further reference.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Familiarity with GraphQL queries and mutations
- Tools like Postman or cURL for testing API calls

## Lifecycle Steps

### 1. Create a Build

To start, you need to create a build. This initializes the process and prepares the environment for subsequent steps.

**GraphQL Mutation:**

```graphql
mutation {
  createBuild(input: { name: "Your Build Name", branch: "Branch name", project: "Project name" }) {
    id
    name
    status
    url
  }
}
```

- `branch`: Branch name to associate the build with.
- `project`: Label/project to associate the build with.

**Expected Response:**

```json
{
  "data": {
    "createBuild": {
      "id": "build-id-here",
      "name": "Your Build Name",
      "status": "RUNNING",
      "url": "https://app.saucelabs.com/visual/builds/build-id-here"
    }
  }
}
```

- `status`: As a newly created build without any snapshots, this will be `RUNNING`.
- `url`: The URL that can be used any time to check the build on Sauce Labs.

### 2. Upload Image

Next, upload an image to the build. This is a two step process. 

First, obtain a signed URL for uploading your image by using the `createSnapshotUpload` mutation.

**GraphQL Mutation:**

```graphql
mutation {
  createSnapshotUpload(input: {buildId: "build-id-here"}) {
    id
    uploadUrl
    domUploadUrl
  }
}
```

- `buildId`: The ID of the build created in the previous step.

**Expected Response:**

```json
{
  "data": {
    "createSnapshotUpload": {
      "id": "upload-id-here",
      "uploadUrl": "image-upload-url-here",
      "domUploadUrl": "dom-upload-url-here"
    }
  }
}
```

- `id`: Upload ID to use in the subsequent steps.
- `uploadUrl`: The URL to upload the image in the next step.
- `domUploadUrl`: The URL to upload the DOM to (if desired and available). Explained in the optional step below.

Next, send a `PUT` request to `uploadUrl` with image file in the body of the request. Only **PNG** files are supported.

**cURL Request:**

```sh
curl --request PUT \
  --url 'upload-url-here' \
  --header 'Content-MD5: base64-encoded-md5-hash' \
  --header 'Content-Type: image/png' \
  --data '@my-screenshot.png'
```

- `Content-MD5` header: Base64 encoded MD5 hash of the file (`my-screenshot.png`).
- `Content-Type` header: Must be set to `image/png`. Not other extensions are supported.

Optional: Upload DOM

If desired (and available), DOM can be also uploaded to `domUploadUrl` obtained from `createSnapshotUpload` mutation.

**cURL Request:**

```sh
curl --request PUT \
  --url 'dom-upload-url-here' \
  --header 'Content-MD5: base64-encoded-md5-hash' \
  --header 'Content-Type: text/html' \
  --data '@my-dom.html'
```

- `Content-MD5` header: Base64 encoded MD5 hash of the file (`my-dom.html`).
- `Content-Type` header: Must be set to `text/html`. Not other extensions are supported.

### 3. Create Snapshot

After uploading your image, add your snapshot along with its metadata to your build.

**GraphQL Mutation:**

```graphql
mutation {
  createSnapshot(
    input: {
      buildUuid: "build-id-here", 
      uploadId: "upload-id-here", 
      name: "Your snapshot name", 
      operatingSystem: OS,
      operatingSystemVersion: "os-version",
      browser: BROWSER,
      browserVersion: "browser-version"
    }
  ) {
    id
    uploadId
  }
}
```
- `buildUuid`: Build ID that was used in previous steps.
- `uploadId`: Upload ID acquired with `createSnapshotUpload` in the previous step (`createSnapshotUpload` mutation response)
- `operatingSystem`: The operating system used to take the snapshot. Strongly advised to be filled in. Available options: `ANDROID`, `IOS`, `LINUX`, `MACOS`, `WINDOWS`.
- `operatingSystemVersion`: The operating system version. e.g. "14.5" for `MACOS` or "11" for `WINDOWS`.
- `browser`: The browser used to take the snapshot. Strongly advised to be filled in (if available). Available options: `CHROME`, `EDGE`, `FIREFOX`, `PLAYWRIGHT_WEBKIT`, `SAFARI`.
- `browserVersion`: The browser version. e.g. "120.0.6099.318", "128.0.2".

**Expected Response:**

```json
{
  "data": {
    "createSnapshot": {
      "id": "snapshot-id-here",
      "uploadId": "upload-id-here"
    }
  }
}
```

- `id`: The ID of the snapshot that has been created.

### 4. Finish Build

Finally, finish the build to mark it as complete. Keep in mind that this is a necessary step and the build cannot be reused after it's finished.

It's also worth noting that unfinished builds will be automatically closed and set to `ERRORED` state after a certain period of time (default: 3 hours).

**GraphQL Mutation:**

```graphql
mutation {
  finishBuild(input: {uuid: "build-id-here"}) {
    id
    status
    url
  }
}
```

**Expected Response:**

```json
{
  "data": {
    "finishBuild": {
      "id": "build-id-here",
      "status": "UNAPPROVED",
      "url": "https://app.saucelabs.com/visual/builds/build-id-here"
    }
  }
}
```

## Additional Information

For more detailed information about the available queries and mutations, refer to our [GraphQL API documentation](https://api.us-west-1.saucelabs.com/v1/visual/graphql).
