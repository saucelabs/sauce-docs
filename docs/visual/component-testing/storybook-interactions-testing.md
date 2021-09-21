---
id: storybook-interactions-testing
title: Testing Component Interactions with Storybook
sidebar_label: Storybook Interactions Testing
---

Screener provides Interaction Testing that can be added directly to your Storybook stories. This can be used for clicking buttons, filling out forms, and getting your components into the proper visual state to test. This also helps keep your stories and interaction test code in the same place.

Example use cases:

* Testing stateful components.
* Testing functional flows.
* Integration testing multiple layers of your application.


## Integrating Steps into Stories

To test interactions, Screener provides a class called `Steps` that you can add to your existing Storybook stories. Each step is an instruction to interact with the component.

### For React
To add steps to a React story, wrap your component within the `<Screener/>` component, and pass it as a `'steps'` prop. The steps can then be generated using our fluent API below.

Example using React Storybook:
```java
import Screener, {Steps} from 'screener-storybook/src/screener';

storiesOf('MyComponent', module)
  .add('default', () => (
    <Screener steps={new Steps()
      .click('.selector')
      .snapshot('name')
      .end()
    }>
      <MyComponent />
    </Screener>
  ));
```

:::note
The `<Screener/>` component must be the top-most component returned within a story. If you use `addDecorator` in your stories, ensure the last decorator contains the Screener component and steps.
:::


### For Vue
To add steps to a Vue story, add a `'steps'` prop to the story object being returned. The steps can then be generated using our fluent API below.

Example using Vue Storybook:

```java
import Steps from 'screener-runner/src/steps';

storiesOf('MyComponent', module)
  .add('default', () => ({
    render: h => h(MyComponent),
    steps: new Steps()
      .click('.selector')
      .snapshot('name')
      .end()
  }));
```

### For Angular

To add steps to a Angular story, add a `'steps'` prop to the story object being returned. The steps can then be generated using our fluent API below.

Example using Angular Storybook:

```java
import * as Steps from 'screener-runner/src/steps';

storiesOf('MyComponent', module)
  .add('default', () => ({
    component: MyComponent,
    props: {},
    steps: new Steps()
      .click('.selector')
      .snapshot('name')
      .end()
  }));
```

## Steps API

The following step methods are available. Step methods with selectors have built-in waits to simplify test flow creation.


<table>
<tr>
 <td><strong>Step Method</strong>
 </td>
 <td><strong>Description</strong>
 </td>
</tr>
<tr>
 <td><code>snapshot(name)</code>
 </td>
 <td>this will capture a Screener snapshot.
 </td>
</tr>
  <tr>
   <td><code>click(selector)</code>
   </td>
   <td>this will click on the first element matching the provided css selector.
   </td>
  </tr>
  <tr>
   <td><code>snapshot(name)</code>
   </td>
   <td>this will capture a Screener snapshot.
   </td>
  </tr>
  <tr>
   <td><code>hover(selector)</code>
   </td>
   <td>this will move the mouse over the first element matching the provided css selector.
   </td>
  </tr>
  <tr>
   <td><code>mouseDown(selector)</code>
   </td>
   <td>this will press and hold the mouse button over the first element matching the provided css selector.
   </td>
  </tr>
  <tr>
   <td><code>mouseUp(selector)</code>
   </td>
   <td>this will release the mouse button. The "selector" parameter is optional.
   </td>
  </tr>
  <tr>
   <td><code>focus(selector)</code>
   </td>
   <td>this will set cursor focus on the first element matching the provided css selector.
   </td>
  </tr>
  <tr>
   <td><code>setValue(selector, value)</code>
   </td>
   <td>this will set the value of the input field matching the provided css selector.
   </td>
  </tr>
  <tr>
   <td><code>clearValue(selector)</code>
   </td>
   <td>this will clear the value of the input field matching the provided css selector.
   </td>
  </tr>
  <tr>
   <td><code>keys(selector, keys)</code>
   </td>
   <td>this will send the provided keys to the first element matching the provided css selector.
   </td>
  </tr>
  <tr>
   <td><code>executeScript(code)</code>
   </td>
   <td>this executes custom JS code against the client browser the test is running in. <strong>NOTE:</strong> The "code" parameter is a string.
   </td>
  </tr>
  <tr>
   <td><code>ignore(selector)</code>
   </td>
   <td>this ignores all elements matching the provided css selector(s).
   </td>
  </tr>
  <tr>
   <td><code>clearIgnores()</code>
   </td>
   <td>this resets all ignores added using the ignore(selector) step.
   </td>
  </tr>
  <tr>
   <td><code>wait(ms)</code>
   </td>
   <td>this will pause execution for the specified number of ms.
   </td>
  </tr>
  <tr>
   <td><code>wait(selector)</code>
   </td>
   <td>this will wait until the element matching the provided css selector is present.
   </td>
  </tr>
  <tr>
   <td><code>waitForNotFound(selector)</code>
   </td>
   <td>this will wait until the element matching the provided css selector is Not present.
   </td>
  </tr>
  <tr>
   <td><code>cssAnimations(isEnabled)</code>
   </td>
   <td>this will override the global cssAnimations option for the current UI state. Set to <code>true</code> to enable CSS Animations; set to <code>false</code> to disable.
   </td>
  </tr>
  <tr>
   <td><code>rtl()</code>
   </td>
   <td>this will set the current UI state to right-to-left direction.
   </td>
  </tr>
  <tr>
   <td><code>ltr()</code>
   </td>
   <td>this will set the current UI state to left-to-right direction.
   </td>
  </tr>
  <tr>
   <td><code>url(url)</code>
   </td>
   <td>this will load a new url.
   </td>
  </tr>
  <tr>
   <td><code>end()</code>
   </td>
   <td>this will return the steps to be run.
   </td>
  </tr>
</table>


:::note
When adding `Steps` using the fluent API, you must end the method chain with `end()`.
:::
