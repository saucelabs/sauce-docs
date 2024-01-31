---
id: source-map
title: Setting up Source Maps for Backtrace
sidebar_label: Source Maps
description: Configure your JS application to automatically upload sourcemap files.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The Backtrace debugger can highlight specific lines in your source code associated with frames in the callstack. This powerful capability can be enabled by uploading source and source maps. The following steps guide you through configuring your JavaScript application to automatically upload sourcemap files during the project build.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- A symbol submission URL with a `symbol:post` token for the `sourcemap` endpoint. [&ltdetailed instructions>](/error-reporting/project-setup/submission-url)

## Creating and Uploading Source Maps

Follow these steps to create and upload source maps with every build of your application:
1. [Enable source maps](#step-1-enable-source-maps-for-your-application)
1. [Install the `backtrace-js` command line tool](#step-2-install-backtrace-js)
1. [Create a configuration file for `backtrace-js`](#step-3-create-a-backtracejsrc-configuration-file)


### Step 1: Enable Source Maps for Your Application

Source maps are automatically generated with most JavaScript frameworks. Please follow these instructions if you are using a framework that does not automatically generate source maps.

<Tabs
groupId="applications"
defaultValue="typescript"
values={[
{label: 'Typescript (tsc)', value: 'typescript'},
{label: 'UglifyJS', value: 'uglify'},
]}>

<TabItem value="typescript">

Set `sourceMap` in `compilerOptions` in your `tsconfig.json` to `true`. For example:

```jsonc
{
    "compilerOptions": {
        // other options
        "sourceMap": true
    },
    "include": ["./src"]
}
```

</TabItem>

<TabItem value="uglify">

Pass `--source-map` as parameter to `uglifyjs`:

```bash
uglifyjs main.js -c -m --source-map -o main.min.js
```

</TabItem>
</Tabs>

---
### Step 2: Install `backtrace-js`

Install the `backtrace-js` command line tool and update your build scripts to run it. `backtrace-js` can be run from the command line, but it is most efficient to use a configuration file which  we will create in the next step.

1. Install `@backtrace/javascript-cli` as a dev dependency:

   ```bash
   npm install --save-dev @backtrace/javascript-cli
   ```

2. Add the following script to `package.json` to process and upload source maps:

   ```json
   "scripts": {
     // highlight-next-line
     "backtrace:sourcemap": "backtrace-js run",
   }
   ```

3. Update the build step in `package.json` to process and upload source maps with every build:

   ```json
   "scripts": {
      // highlight-next-line
     "build": "<current build commands> && npm run backtrace:sourcemap"
   }
   ```

---
### Step 3: Create a `.backtracejsrc` configuration file

Create a `.backtracejsrc` configuration file in the root of your project with these settings to process source maps, add source and upload to Backtrace.

```json
{
    // highlight-next-line
    "path": "<build output>",
    "run": {
        "process": true,
        "add-sources": true,
        "upload": true
    },
    "upload": {
        // highlight-next-line
        "url": "<symbol submission url>",
        "include-sources": true
    }
}
```

- Replace `<build output>` with the path to the directory where your transpiled scripts are stored.
- Follow [&ltthese instructions>](/error-reporting/project-setup/submission-url) to create the `<symbol submission URL>` with a `symbol:post` token for the `sourcemap` endpoint.

:::info Source Code Upload
  Source files can be embedded in source maps and included in the upload to Backtrace. The configuration above is constructed to do this.

  Alternatively, if you do not wish to upload source files directly to Backtrace, you can integrate your source repository. To do so, omit `add-sources` and `include-sources` and follow the steps in the [Source Code](../../project-setup/source-code/) document.
:::

:::info Processing node_modules
  node_modules are not processed by default. You may include specific modules by including a reference to each in `.backtracejsrc` `path`.
  ```json
{
    // highlight-next-line
    "path": [
      "<build output>",
      "./node_modules/bser",
      "./node_modules/chalk"
      ],
      ...
}
```
:::

See `backtrace-js --help` or go to [`@backtrace/javascript-cli`](https://github.com/backtrace-labs/backtrace-javascript/blob/dev/tools/cli) for additional command line and configuration options.

:::note Troubleshooting
  Source map processing will halt on error with a description. Use a --verbose command line switch to output extended information for troubleshooting.
  
  __File processing errors__

  File processing may halt on a specific file for valid reasons. For instance, a source map may not produced for a script file. Processing for such a file can be skipped with an exclude object in `.backtracejsrc`

  ```json
  {
    "path": "<build output>",
    // highlight-start
    "exclude": [
      // highlight-next-line
      "./app1/build/static/js/file.chunk.js"
    ]
    // highlight-end
    "run": {
    ...
  }
```

  Alternatively, all processing errors can be treated as warnings or other errors levels.
  ```json
  {
    "path": "<build output>",
    // highlight-start
    "asset-error-behavior": "warn",
    // highlight-end
    "run": {
    ...
  }
  ```

:::

## Project Bundlers

<Tabs
groupId="project-bundler"
defaultValue="webpack"
values={[
{label: 'Webpack', value: 'webpack'},
{label: 'Rollup', value: 'rollup'},
{label: 'Vite', value: 'vite'},
]}>

<TabItem value="webpack">

If you're using Webpack as your project bundler, you can use `@backtrace/webpack-plugin` to automate working with sourcemaps.

**Step 1: Enable Source Maps for Your Application**

Set `devtool` to `source-map` in your `webpack.config.js`:

```js
module.exports = {
  devtool: 'source-map',
  // other configuration
}
```

If you're using code transpiler plugins (such as Typescript), be sure to enable source maps there as well.

**Step 2: Set up `@backtrace/webpack-plugin`**

1. Install `@backtrace/webpack-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace/webpack-plugin
   ```

2. Add it to your `plugins` array in `webpack.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace/webpack-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace/webpack-plugin');

   module.exports = {
     // other configuration
     plugins: [new BacktracePlugin({
       // enable upload only on production builds
       uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
     })]
   }
   ```

</TabItem>

<TabItem value="rollup">

If you're using Rollup as your project bundler, you can use `@backtrace/rollup-plugin` to automate working with sourcemaps.

**Step 1: Enable Source Maps for Your Application**

Set `sourcemap` in `output` to `true` in your `rollup.config.js`:

```js
module.exports = {
  output: {
    sourcemap: true
  }
}
```

If you're using code transpiler plugins (such as Typescript), be sure to enable source maps there as well.

**Step 2: Set up `@backtrace/rollup-plugin`**

1. Install `@backtrace/rollup-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace/rollup-plugin
   ```

2. Add it to your `plugins` array in `rollup.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace/rollup-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace/rollup-plugin');

   module.exports = {
     // other configuration
     plugins: [BacktracePlugin({
       // enable upload only on production builds
       uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
     })]
   }
   ```

</TabItem>

<TabItem value="vite">

If you're using Vite as your project bundler, you can use `@backtrace/vite-plugin` to automate working with sourcemaps.

**Step 1: Enable Source Maps for Your Application**

Set `sourcemap` in `output` to `true` in your `vite.config.js`:

```js
module.exports = {
  build: {
    sourcemap: true
  }
}
```

If you're using code transpiler plugins (such as Typescript), be sure to enable source maps there as well.

**Step 2: Set up `@backtrace/vite-plugin`**

1. Install `@backtrace/vite-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace/vite-plugin
   ```

2. Add it to your `plugins` array in `vite.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace/vite-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace/vite-plugin');

   module.exports = {
     // other configuration
     plugins: [BacktracePlugin({
       // enable upload only on production builds
       uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
     })]
   }
   ```

</TabItem>
</Tabs>

:::note Don't See Your Tool Described Here?

We are adding support for the most popular tools regularly. You can always use `@backtrace/javascript-cli`; it works with any output JS files.

:::
