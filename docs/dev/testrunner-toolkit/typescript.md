---
id: typescript
title: Using TypeScript Tests
sidebar_label: Using TypeScript
---

If you built your automated tests using TypeScript in either Playwright, Puppeteer, TestCafe, or Cypress, you need the following workaround in order to use Testrunner Toolkit.

__What You'll Need__

1. [A Sauce Labs Account](https://saucelabs.com/sign-up)
2. [TypeScript](https://www.typescriptlang.org/download)

## The Problem

Consider the `tests` directory setup below:

```bash
.
└── tests/
    ├── test.one.spec.ts
    ├── test.two.spec.ts
    ├── test.three.spec.ts
    └── tsconfig.json
```

Except for the [Sauce Labs TestCafe Runner](https://github.com/saucelabs/sauce-testcafe-runner) image, these `.ts` files cannot run directly on any Testrunner Toolkit images. Therefore, in order to make theses test run correctly you must [transpile](https://code.visualstudio.com/docs/typescript/typescript-compiling#_transpile-typescript-into-javascript) them into JavaScript.

## The Solution
    
1. Ensure you already have `typescript` installed:

   ```bash
   npm install -g typescript
   ```

2. Review your `tsconfig.json` to ensure you've set the `compilerOptions` appropriately.

3. Run the TypeScript compiler like so:

   ```bash
   npx tsc --project ./tests/tsconfig.json
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