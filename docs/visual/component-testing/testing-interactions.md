---
id: testing-interactions
title: Testing Interactions in Storybook
sidebar_label: Testing Interactions
---

Screener provides Interaction Testing that can be added directly to your Storybook stories. This can be used for clicking buttons, filling out forms, and getting your components into the proper visual state to test. This also helps keep your stories and interaction test code in the same place.

This is useful for:

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

>**NOTE**: The `<Screener/>` component must be the top-most component returned within a story. If you use `addDecorator` in your stories, ensure the last decorator contains the Screener component and steps.


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

---
### `click(selector)`
__Description__: this will click on the first element matching the provided css selector.

---
### `snapshot(name)`
__Description__: this will capture a Screener snapshot.

---
### `hover(selector)`
__Description__: this will move the mouse over the first element matching the provided css selector.

---
### `mouseDown(selector)`
__Description__: this will press and hold the mouse button over the first element matching the provided css selector.

---
### `mouseUp(selector)`
__Description__: this will release the mouse button. The "selector" parameter is optional.

---
### `focus(selector)`
__Description__: this will set cursor focus on the first element matching the provided css selector.

---
### `setValue(selector, value)`
__Description__: this will set the value of the input field matching the provided css selector.

---
### `clearValue(selector)`
__Description__: this will clear the value of the input field matching the provided css selector.

---
### `keys(selector, keys)`
__Description__: this will send the provided keys to the first element matching the provided css selector.

---
### `executeScript(code)`
__Description__: his executes custom JS code against the client browser the test is running in.

>**NOTE**: The "code" parameter is a **string**.

---
### `ignore(selector)`
__Description__: this ignores all elements matching the provided css selector(s).

---
### `clearIgnores()`
__Description__: this resets all ignores added using the `ignore(selector)` step.

---
### `wait(ms)`
__Description__: this will pause execution for the specified number of ms.

---
### `wait(selector)`
__Description__: this will wait until the element matching the provided css selector is present.

---
### `waitForNotFound(selector)`
__Description__: this will wait until the element matching the provided css selector is Not present.

---
### `cssAnimations(isEnabled)`
__Description__: this will override the global `cssAnimations` option for the current UI state. Set to `true` to enable CSS Animations, and set to `false` to disable.

---
### `rtl()`
__Description__: this will set the current UI state to right-to-left direction.

---
### `ltr()`
__Description__: this will set the current UI state to left-to-right direction.

---
### `end()`
__Description__: this will return the steps to be run.

>**NOTE**: When adding `Steps` using the fluent API, you must end the method chain with `end()`.
