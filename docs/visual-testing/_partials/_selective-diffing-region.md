Sauce Visual allows selective diffing (_more information [here](./selective-diffing)_).

Binding provides two helper functions that allow you to evaluate only a subset of change types or, alternatively, exclude certain kinds of changes.

- Enabling only `content` means that only changes induced by content changes will be considered as a change. Any other kind of change will be ignored.
- Disabling only `content` means that only changes induced by content changes will **NOT** bet considered as a change.

:::warning
Selective diffing is possible with `Balanced` diffing method **AND** with DOM capture enabled.
:::