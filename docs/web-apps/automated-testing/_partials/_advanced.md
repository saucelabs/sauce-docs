#### Attaching Test Assets

Any test assets created by your tests at runtime (such as logs, screenshots or reports) you wish to retain along with your test results must be placed in the `__assets__` directory of your project root folder. On Sauce Labs VMs, this path is relative to the current working directory.

:::note Screenshots not Viewable in UI
Test Screenshots uploaded to Sauce Labs are currently not viewable in Test Results screen of the Sauce Labs UI, but can be retrieved using the [Get Job Asset File](/dev/api/jobs/#get-a-job-asset-file) API. Alternatively, you can use the [artifacts.download](#download) configuration parameter to download test assets to a local file upon completion of your test.
:::

:::note Nested Paths
Nested assets are stored **flat** in Sauce Labs. A test asset like `__assets__/mylogs/log.txt` would therefore be stored and available for download as `log.txt`.
Please keep that in mind when creating custom assets, as examples like `__assets__/mylogs/log.txt` and `__assets__/myotherlogs/log.txt` would eventually collide when persisted.
:::
