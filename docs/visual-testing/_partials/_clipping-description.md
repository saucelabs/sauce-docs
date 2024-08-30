You can clip to a specific element on the page by using the `clipElement` option when calling Sauce visual.

Notes:

- Clipping is done by taking a screenshot of the page then clipping it to the location of the requested element.
- We will attempt to scroll the element into view before taking the snapshot.
- We can only take a screenshot of what is visible in the current viewport, however, this can be combined with full page option to enable clipping large vertical elements.
