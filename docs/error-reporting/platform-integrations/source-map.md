---
id: source-map
title: Setting up Source Maps for Backtrace
sidebar_label: Source Maps
description: Configure your JS application to automatically upload sourcemap files.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The following steps guide you through configuring your JavaScript application to automatically upload sourcemap files during the project build.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- A symbol submission URL with a `symbol:post` token for the `sourcemap` endpoint. [&ltdetailed instructions>](/error-reporting/project-setup/submission-url)

## Creating and Uploading Source Maps

Follow these steps to create and upload source maps with every build of your application:
1. [Enable source maps](#step-1-enable-source-maps-for-your-application)
1. [Install the `backtrace-js` command line tool](#step-2-install-backtrace-js)
1. [Create a configuration file for `backtrace-js`](#step-3-create-a-backtracejsrc-configuration-file)


### Step 1: Enable Source Maps for Your Application
:::warning
- Under what conditions are source maps not already enabled?
- Are normal customers completely familiar with source maps, and know whether or not they are produced?
- This is all to ask: Can a user skip this step? Which users can?
:::

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

1. Install `@backtrace-labs/javascript-cli` as a dev dependency:

   ```bash
   npm install -g --save-dev @backtrace-labs/javascript-cli
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

Create a `.backtracejs` file in the root of your project.

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

See `backtrace-js --help` or go to [`@backtrace-labs/javascript-cli`](https://github.com/backtrace-labs/backtrace-javascript/blob/dev/tools/cli) for additional command line and configuration options.

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
:::warning
Can we provide text that says this is only necessary if you use a project bundler?
:::

<Tabs
groupId="project-bundler"
defaultValue="webpack"
values={[
{label: 'Webpack', value: 'webpack'},
{label: 'Rollup', value: 'rollup'},
{label: 'Vite', value: 'vite'},
]}>

<TabItem value="webpack">

If you're using Webpack as your project bundler, you can use `@backtrace-labs/webpack-plugin` to automate working with sourcemaps.

**Step 1: Enable Source Maps for Your Application**

Set `devtool` to `source-map` in your `webpack.config.js`:

```js
module.exports = {
  devtool: 'source-map',
  // other configuration
}
```

If you're using code transpiler plugins (such as Typescript), be sure to enable source maps there as well.

**Step 2: Set up `@backtrace-labs/webpack-plugin`**

1. Install `@backtrace-labs/webpack-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace-labs/webpack-plugin
   ```

2. Add it to your `plugins` array in `webpack.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace-labs/webpack-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace-labs/webpack-plugin');

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

If you're using Rollup as your project bundler, you can use `@backtrace-labs/rollup-plugin` to automate working with sourcemaps.

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

**Step 2: Set up `@backtrace-labs/rollup-plugin`**

1. Install `@backtrace-labs/rollup-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace-labs/rollup-plugin
   ```

2. Add it to your `plugins` array in `rollup.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace-labs/rollup-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace-labs/rollup-plugin');

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

If you're using Vite as your project bundler, you can use `@backtrace-labs/vite-plugin` to automate working with sourcemaps.

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

**Step 2: Set up `@backtrace-labs/vite-plugin`**

1. Install `@backtrace-labs/vite-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace-labs/vite-plugin
   ```

2. Add it to your `plugins` array in `vite.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace-labs/vite-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace-labs/vite-plugin');

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

We are adding support for the most popular tools regularly. You can always use `@backtrace-labs/javascript-cli`; it works with any output JS files.

:::
