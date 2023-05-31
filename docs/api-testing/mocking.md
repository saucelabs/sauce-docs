---
id: mocking
title: API Mocking with Piestry
sidebar_label: API Mocking Server
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs [_Piestry_](/dev/glossary/#piestry) is our API mocking server tool that mimics a real API server's calls and responses, based on the OpenAPI spec file data you provide. Get a jumpstart on testing and debugging your APIs while they're still in development by re-creating them in our mocking platform and writing tests against them.

**Benefits**

- Get dynamic responses that you can use to perform proper positive testing, negative testing, and edge case testing.
- Eliminates the need to add third-party API dependencies, which can be expensive and restrictive.
- Eliminates the need to depend on potentially unreliable staging environments.
- Allows you to create stubbed APIs to use to in your testing flow.

**Common Use Cases**

- Simulating a payment transaction in a banking mobile app.
- Isolating a microservice from the rest of the API actions so that everything else is stable and you can drill down to find the error.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An OpenAPI spec file.

## Usage

Piestry must be started from a Docker container in your CI/CD pipeline using the following code snippet:

```bash
docker run --pull always -v "$(pwd)/specs:/specs" -p 5000:5000 quay.io/saucelabs/piestry -u /specs/myspec.yaml
```

`quay.io/saucelabs/piestry` is our Docker image and `/specs/myspec.yaml` needs to be the URI to your YAML spec file (can be local or remote).

:::note
In the above command, `-p 5000:5000` is used to map the port on your machine and the port for Piestry. If you are using macOS Monterey, the command will not work because port 5000 is already used by the Airplay Receiver service by default. In this case, you have to remap the port for your local machine. To do so, enter a different port in the left part of the command. For example: `-p 8000:5000`, where port 8000 can be replaced with any other port. This scenario is valid every time your port is already used by any other service.
:::

:::tip
Some container runtimes will maintain port bindings even when containers exit, making it impossible for a new instance of the same container to run again on the same port unless the dead container is removed. To avoid this issue you can use the flag `--rm` like in this example: `docker run -v "$(pwd)/specs:/specs" -p 5000:5000 --rm quay.io/saucelabs/piestry -u /specs/myspec.yaml`.
:::

### OpenAPI Spec Files

If you provide a standard OpenAPI spec file, our system should bind a series of endpoints to simulate what's in the spec:

- When only a response schema is present, the system will generate random data for each field.
- When one response example is present, the system will present the example.
- When multiple response examples are present, the system will present the first example.
- When multiple content types are available, the system will pick the one closer to the "Accept" header, any JSON response if a match is not found.

## Generating a Mock

1. On your local machine, place your spec file (or set of files in a folder) in a location of your choice. For this example, we'll call it `myspec.yaml`.
2. Open your CLI terminal and navigate to right outside that folder, then run this command:

```bash
docker run --pull always -v "$(pwd)/myspec:/specs" -p 5000:5000 quay.io/saucelabs/piestry -u /specs/myspec.yaml
```

`$(pwd)/myspec` means the `{current_directory}/myspec` that gets mounted to the container in the `/specs` folder. Therefore, the -u (relative to the container is) `/specs/myspec.yaml`. 3. If successful, you should see the listing of the available routes:

```json
2021-10-05T07:32:35.157Z info: Piestry booting on port: 5000
2021-10-05T07:32:35.189Z info: Registering GET /api/v1/release-notes
2021-10-05T07:32:35.191Z info: Registering GET /api/v1/user
2021-10-05T07:32:35.191Z info: Registering GET /api/v1/user/:id
2021-10-05T07:32:35.192Z info: Registering GET /api/v1/echo
2021-10-05T07:32:35.192Z info: Registering POST /api/v1/echo
2021-10-05T07:32:35.192Z info: Registering POST /api/v1/post-check
2021-10-05T07:32:35.193Z info: Registering POST /api/v1/check-in
```

4. At this point, you can use any HTTP client to query one of these endpoints. For example, `curl localhost:5000/api/v1/release-notes` would should return a mock for release notes. Additionally, you can add the option to connect our [Logger](/api-testing/logger/).

### Enhancing OpenAPI with x-sauce-cond

You can enrich OpenAPI schemas using the `x-sauce` vendor extension. This extension will have no impact on the docs.

There currently are five types of `x-sauce-cond` operations: three evaluators (`exists`, `equals`, and `matches`) and two logical operators (`or` and `and`).

There also are four collections you can evaluate: `uriParams`, `queryParams`, `headers`, and `body`.

In the below example, the `x-sauce-cond` extension tells the mock to take the `200` status code as response only when an `authorization` header is present and its value matches the `Basic .*` regex. The `priority` field determines the order of evaluation of multiple objects at the same level. For example, if both `200` and `404` have an `x-sauce-cond` instruction, they will be evaluated by descending priority.

```yaml
responses:
  '200':
    x-sauce-cond:
      op: matches
      collection: headers
      key: authorization
      value: Basic .*
      priority: 10
```

Items with no `x-sauce-cond` will be picked up last and treated as fallback.

On the examples:

```yaml
content:
  'application/json':
    schema:
      $ref: '#/components/schemas/user'
    examples:
      sample_user_1:
        x-sauce-cond:
          op: equals
          collection: uriParams
          key: id
          value: abc
          priority: 10
        externalValue: myspec_examples/sample_user_1.json
      sample_user_2:
        x-sauce-cond:
          op: equals
          collection: uriParams
          key: id
          value: def
          priority: 20
        externalValue: myspec_examples/sample_user_2.json
      sample_user_3:
        x-sauce-cond:
          op: equals
          collection: uriParams
          key: id
          value: ghi
          priority: 30
        externalValue: myspec_examples/sample_user_3.json
```

Pick one specific example based on the value of a URI param.

If you have to add multiple conditions you can use `and` and `or` conditions. You can have the depth and nesting you want.

```yaml
x-sauce-cond:
  op: and
  priority: 10
  conditions:
  - op: matches
    collection: headers
    key: authorization
    value: Basic .*
  - op: equals
    collection: headers
    key: key
    value: ABC123
```

Mind that `priority` should be at the top level instruction.

### Enhancing Schemas with x-sauce-faker

If you don't want to add examples because they're not useful to you, that's ok. You can still force the system to generate data that makes specific sense to you, using the Faker extension, `x-sauce-faker`.

```yaml
releaseNotes:
  type: object
  required:
   - text
   - contact
  properties:
   text:
    type: string
   contact:
    type: string
    x-sauce-faker: internet.email
```

Learn more about the [Faker library](https://fakerjs.dev/guide/).

## Mocking Mode

### Contract Validators

There are two types of validations, focusing on different areas, that you can activate.

### Validate Examples

Examples may go out of sync when the schema gets updated, but the example does not.

Run Piestry with `--validate-examples` to activate the validation of examples. Once activated, whenever a request is performed, the response example (if available) is validated against the response schema (if available). If the example does not match the request, then an error is returned - for example:

```json
{
   "errors":[
      {
         "argument":[
            "boolean"
         ],
         "instance":"false",
         "message":"is not of a type(s) boolean",
         "name":"type",
         "path":[
            "is_admin"
         ],
         "property":"instance.is_admin",
         "schema":{
            "type":"boolean"
         },
         "stack":"instance.is_admin is not of a type(s) boolean"
      }
   ],
   "message":"The example does not match the schema"
}
```

The response will also contain the `x-sauce-error: true` header, signifying that the response is not mocked, but it's an internal error.

### Validate Request

If you want to ensure your requests are compliant with the schema, Piestry can help you.

Run it with the `--validate-request` switch to activate the validation of inbound requests. Whenever a request is performed, it will be validated against the schema, and if a mismatch is present, an error like the following will be returned:

```json
{
   "collection":"queryParams",
   "errors":[
      {
         "argument":[
            "integer"
         ],
         "instance":"aa",
         "message":"is not of a type(s) integer",
         "name":"type",
         "path":[

         ],
         "property":"instance",
         "schema":{
            "type":"integer"
         },
         "stack":"instance is not of a type(s) integer"
      }
   ],
   "message":"Wrong field types"
}
```

The response will also contain the `x-sauce-error: true` header, signifying that the response is not mocked, but it's an internal error.

### Dynamic Examples

The system allows for examples containing dynamic data using the Handlebars markup. Remember that if you use dynamic examples in your OpenAPI specs, your spec will reduce its usability for documentation purposes as documentation renderers don't support it.

To have dynamic parameters, place an expression between double curly brackets, i.e., `{{requestUrl}}`.

The available objects in the scope are the same as the ones used by `x-sauce-cond`, so: `uriParams`, `queryParams`, `headers`, `body`. As an example, the following template will echo the shape of the request back in the response:

```json
{
 "url":"{{requestUrl}}",
 "requestHeaders": {{json headers}},
 "requestBody": {{json body}},
 "ipAddress": "{{ipAddress}}"
}
```

Using the `json` keyword will convert a full data structure into its JSON equivalent.

## E2E Mode

When Piestry is run with `--e2e`, it will turn into a reverse proxy gateway and forward the requests based to the origin, according to the OpenAPI specification. The requirement is the "server" definition of the OpenAPI spec should lead to an actual location.

In E2E mode, you can enable contract validators as well as capture mode.

### Contract Validators

There are two types of validations you can activate, focusing on different areas.

### Validate Request

If you want to make sure your requests are compliant with the origin, run it with the `--validate-request` switch to activate the validation of inbound requests.

### Validate Response

This is similar to [**Validate Examples** (mocking mode)](#validate-examples); the difference is that it will validate the actual responses in an end-to-end session. Use the switch `--validate-response` to enable it.

### Capture Mode

Capture mode is activated by passing the `--capture` parameter, followed by the path to a directory. As the requests go through, Piestry will capture the responses coming from the origin and save them to file.

When `--capture` is executed without `--e2e`, Piestry will try to map the saved files to the OpenAPI definition and serve them as examples.

## More Information

- [API Testing Logger](/api-testing/logger)
