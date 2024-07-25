To help customers effectively integrate with our API, especially those not using the specific technologies we provide bindings for, we provide a comprehensive guide on the lifecycle of interacting with our system. Below is a basic documentation outline to guide users through the necessary steps.

# API Lifecycle Documentation

## Introduction

This documentation provides a step-by-step guide on how to interact with our API. By following these steps, you'll be able to create builds, upload images, create snapshots, and finish builds. This guide is intended for users who wish to connect directly to the API or implement a binding on their own, including a link to our GraphQL API documentation for further reference.

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
  createBuild(input: { name: "Your Build Name" }) {
    id
    name
    status
    url
  }
}
```

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

First, get a placeholder URL for image upload using `createSnapshotUpload`.

**GraphQL Mutation:**

```graphql
mutation {
  createSnapshotUpload(input: {buildId: "build-id-here"}) {
    id
    uploadUrl
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
      "uploadUrl": "upload-url-here"
    }
  }
}
```

- `id`: Upload ID to use in the subsequent steps.
- `uploadUrl`: The URL to use in the next step.

Next, send a `PUT` request to `uploadUrl` with image file in the body of the request. Only **PNG** files are supported.

**cURL Representation:**

```sh
curl --request PUT \
  --url 'upload-url-here' \
  --header 'Content-Type: image/png' \
  --data 'png-file-content'
```

### 3. Create Snapshot

After uploading an image, create a snapshot to capture the current state of the build.

**GraphQL Mutation:**

```graphql
mutation {
  createSnapshot(
    input: {buildUuid: "build-id-here", uploadId: "upload-id-here", name: "Your snapshot name"}
  ) {
    id
    uploadId
  }
}
```

- `uploadId`: Upload ID acquired with `createSnapshotUpload` in the previous step.
- `buildUuid`: Build ID that was used in previous steps.

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

Finally, finish the build process to mark it as complete.

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
