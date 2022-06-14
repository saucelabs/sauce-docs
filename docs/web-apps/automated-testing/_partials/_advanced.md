#### Attaching Test Assets

Any test assets created by your tests at runtime (such as logs, screenshots or reports) you wish to retain along with your test results must be placed in the `__assets__` directory of your project root folder. On Sauce Labs VMs, this path is relative to the current working directory.

:::note Screenshots not Viewable in UI
Test Screenshots uploaded to Sauce Labs are currently not viewable in Test Results screen of the Sauce Labs UI, but can be retrieved using the [Get Job Asset File](/dev/api/jobs/#get-a-job-asset-file) API. Alternatively, you can use the [artifacts.download](#download) configuration parameter to download test assets to a local file upon completion of your test.
:::
