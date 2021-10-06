---
id: mocking
title: API Mocking with Piestry
sidebar_label: Mocking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

What is API mocking? A server that: Feeds solely on OpenAPI 3 specs
Provides dynamicity in the responses so that proper positive, negative and edge case testing can be performed. Effortless mocks. No extra work, just works.

Why use mocking? Allows you to create stubbed virtualized API is that you can use to in your testing flow… you can get rid of any dependencies from third-party APIs that may be expensive, but you don’t have control over it. Allows you to also get ahead of your testing when your API is still in development and not built out yet. You could re-create it in our mocking platform, write all of your tests against it, and then you can have this jumpstart on testing before your API is out of development. the mocking is pretty robust. When you create a mock, you create the endpoint and the response. Use the Expression field to add tags (eg “GET” and “payload ID=123” makes xyz response)

Why the name Piestry?
didn't want to drop the Sauce tradition of naming stuff after food, so Piestry is:
"A pastry that acts as if it was a pie, but is nothing more than a pastry"

Where can I run it?
* Locally
* In a CI/CD pipeline
* Docker container
  * Image: quay.io/saucelabs/piestry
  * Run it using the code snippet below:
  ```bash
  docker run -v "$(pwd)/specs:/specs" -p 5000:5000 quay.io/saucelabs/piestry -u /specs/myspec.yaml
  Where /specs/myspec.yaml is the URI to a YAML file, local or remote.
  ```
* the form of a utility

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* An OpenAPI spec file


## Mock Generation

If you provide a regular OpenAPI spec file, the system should bind a series of endpoints to simulate whatever is in the spec.

* When only a response schema is present: the system will generate random data for each field.
* When one response example is present: the system will present the example.
* When multiple response examples are present: the system will present the first example.
* When multiple content types are available: the system will pick the one closer to the "Accept" header, any JSON response if a match is not found.

1. Place your spec file (or set of files in a folder) in a location of your choice. For this example, we'll call it `myspec.yaml`.
2. Open your CLI terminal and navigate to right outside that folder, then run this command in your terminal:
  ```bash
  docker run -v "$(pwd)/myspec:/specs" -p 5000:5000 quay.io/saucelabs/piestry -u /specs/myspec.yaml
  ```
  `$(pwd)/myspec` means the `{current_directory}/myspec` that gets mounted to the container in the `/specs` folder. Therefore, the -u (relative to the container is) `/specs/myspec.yaml`.
3. If all goes well, you should see the listing of the available routes:
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
4. At this point, you can use any **HTTP client** to query one of these endpoints (i.e., `curl localhost:5000/api/v1/release-notes`). It should return a mock for release notes. On top of this, you can add the option to connect the logger, and there you go.


### Enhancing OpenAPI with x-sauce
You can enrich OpenAPI schemas using the x-sauce vendor extension. This extension will have no impact on the docs.

There currently are three types of `x-sauce-cond` operations: `exists`, `equals` and `matches`.

There also are four collections you can evaluate: `uriParams`, `queryParams`, `headers`, `body`.

On the status code:
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

This extension tells the mock to take the `200` as response only when an 'authorization' header is present and its value matches the Basic .* regex.

The priority field determines the order of evaluation of multiple objects at the same level. For example, if both `200` and `404` have an `x-sauce-cond` instruction, they will be evaluated by descending priority. Items with no `x-sauce-cond` will be picked up last and treated as fallback.

On the examples:
```yaml
 content:
            application/json:
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


### Enhancing Schemas with Faker
If you don't want to add examples because they're not useful to you, that's ok. But you can still force the system to generate data that makes specific sense to you, using the Faker extension, `x-sauce-faker`.

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

Learn more about the faker library [here](https://www.npmjs.com/package/faker).


## Mocking Mode

### Validate Examples
Sometimes examples can go out of sync because the schema gets updated, but the example does not.
Run Piestry with the `--validate-examples` to activate the validation of examples.

When on, whenever a request is performed, the response example (if available) is validated against the response schema (if available). If the example does not match the request, then an error is returned as in:

```json
{
    "errors": [
        {
            "argument": [
                "boolean"
            ],
            "instance": "false",
            "message": "is not of a type(s) boolean",
            "name": "type",
            "path": [
                "is_admin"
            ],
            "property": "instance.is_admin",
            "schema": {
                "type": "boolean"
            },
            "stack": "instance.is_admin is not of a type(s) boolean"
        }
    ],
    "message": "The example does not match the schema"
}
```

The response will also contain the x-sauce-error: true header, signifying that the response is not mocked, but it's an internal error.

### Validate Request
If you want to make sure your requests are compliant with the schema, Piestry can help you.
Run it with the `--validate-request` switch to activate the validation of inbound requests.

Whenever a request is performed, it will be validated against the schema, and if a mismatch is present, an error like the following will be returned:

```json
{
    "collection": "queryParams",
    "errors": [
        {
            "argument": [
                "integer"
            ],
            "instance": "aa",
            "message": "is not of a type(s) integer",
            "name": "type",
            "path": [],
            "property": "instance",
            "schema": {
                "type": "integer"
            },
            "stack": "instance is not of a type(s) integer"
        }
    ],
    "message": "Wrong field types"
}
```

The response will also contain the x-sauce-error: true header, signifying that the response is not mocked, but it's an internal error.

## E2E Mode
When Piestry is run with `--e2e`, it will turn into a reverse proxy gateway and forward the requests based to the origin, according to the OpenAPI specification. The requirement is the "server" definition of the OpenAPI spec should lead to an actual location.

In this mode, you can enable contract validators as well as capture mode.

### Contract Validators
There are two types of validations you can activate, focusing on different areas.

### Validate Response
The validate response is similar to the ["validate examples" (mocking mode)](/api-testing/mark3/mocking/#validate-examples); the difference is that will validate the actual responses in an end-to-end session. Use the switch `--validate-response` to enable it.

### Capture Mode
Capture mode is activated by passing the `--capture` parameter, followed by the path to a directory. As the requests go through, Piestry will capture the responses coming from the origin and save them to file.

When `--capture` is executed without `--e2e`, Pietry will try to map the saved files to the OpenAPI definition and serve them as examples.

## Dynamic examples
The system allows for examples containing dynamic data using the Handlebars markup. Remember that if you use dynamic examples in your OpenAPI specs, your spec will reduce its usability for documentation purposes as documentation renderers don't support it.

To have dynamic parameters, you simply place an expression between double curly brackets as in `{{requestUrl}}`.

The available objects in the scope are the same as the ones used by x-sauce-cond, so: `uriParams`, `queryParams`, `headers`, `body`.

As an example, the following template will echo the shape of the request back in the response:

```json
{
 "url":"{{requestUrl}}",
 "requestHeaders": {{json headers}},
 "requestBody": {{json body}},
 "ipAddress": "{{ipAddress}}"
}
```

The "json" keyword will convert a full data structure into its JSON equivalent.
