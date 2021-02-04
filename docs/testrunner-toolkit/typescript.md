---
id: typescript
title: Using TypeScript Tests
sidebar_label: Using TypeScript
---

If you wrote your automated tests using TypeScript in either Playwright, Puppeteer, or Cypress, you need to transpile your Typescript files to Javascript before running them with Testrunner Toolkit.

## What You'll Need

Refer to the requirements listed on the [Installation](/testrunner-toolkit/installation) page.

## The Problem

Consider the `tests` directory structure below:

```bash
.
└── tests/
    ├── test.one.spec.ts
    ├── test.two.spec.ts
    ├── test.three.spec.ts
    └── tsconfig.json
```

Except for the TestCafe image, these `.ts` files cannot run directly on any Testrunner Toolkit images. Therefore in order to make theses test run correctly you must transpile them JavaScript.

## The Solution

1. Ensure you already have `typescript` installed:
    
   ```bash
   npm install -g typescript
   ```

2. Review your `tsconfig.json` to ensure you've set the `compilerOptions` appropriately.
 
3. Run the TypeScript compiler like so:
   
   ```bash
   tsc --project ./tests/tsconfig.json
   ```
   
   Below is a default output example:
   
   ```bash
   └── tests/
       ├── test.one.spec.ts
       ├── test.one.spec.js
       ├── test.two.spec.ts
       ├── test.two.spec.js
       ├── test.three.spec.ts
       ├── test.three.spec.js
       └── tsconfig.json
   ```
   
   > WARNING: the TypeScript compiler will behave in a non-deterministic manner if the `tsconfig.json` is poorly configured. 
   >
   > For more information on how to properly configure `tsconfig.json` please visit the [documentation](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#writing-a-configuration-file).

4. Next, edit the `files` and `suites` fields in `.sauce/config.yml` in order to ignore the `.ts` files and instead place the `.js` files inside the Testrunner Toolkit container:
    
   ```yaml
   files:
     - tests/
   suites:
     - name: "basic test"
       match: ".*.(spec|test).js"
   ```
   
   By default `saucectl` will pickup any `.js` files located in the designated directory, however with the `suites` field you can set more granular control with regular expressions.

5. Finally, run `saucectl` to execute your TypeScript tests:
   
   ```bash
   saucectl run -c .sauce/config.yml
   ```
   
    For further information, please refer to the working example of this TypeScript demonstration in the [Sauce Labs Puppeteer Runner](https://github.com/saucelabs/sauce-puppeteer-runner/tree/master/tests/fixtures/typescript) repository.