---
id: video-recording
title: Video Recording
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs captures a recording of the device screen during your tests. For most test frameworks, this video becomes available upon test completion or as a live stream while the test is in progress.

<p><small><span className="sauceGreen">Real Devices Documentation</span></small></p>

For testing on real devices, we employ two video recording methods. The primary method involves on-device recording. As a more reliable fallback, we also utilize a low-frame-rate stream of device screenshots, leveraging the built-in screenshot functionality of all devices. While the screenshot-based video offers lower resolution and frame rates compared to on-device recordings, it ensures video availability in a wider range of scenarios.

Once your test job concludes, the recorded video (either from the device or generated from screenshots) is encoded, either directly on the device or within our infrastructure. Subsequently, the encoded video is downloaded from the device and uploaded to our long-term storage. Please be aware that videos are automatically deleted after 60 days, or upon explicit deletion of the associated job.

It's important to note that a test job will not be marked as finished until the video has been successfully uploaded to long-term storage. Consequently, very long-running test sessions will experience a more extended post-processing phase, thus increasing the overall duration of the job.

## Live Stream

<p><small><span className="sauceGreen">Real Devices Documentation</span></small></p>

While your test job is active, you can access a live video stream of the device if you have the job's device_session_id. This live stream is accessible via WebSocket at the following URL:

`wss://api.<sauce_region>.saucelabs.com/v1/rdc/socket/alternativeIo/<device_session_id>`

Access to this stream requires Basic Auth.

Please be aware that this is a raw data stream and requires parsing to be viewable. The video stream adheres to the open stf standard.


## Known Issues

### Missing or Corrupted Videos

Occasionally, a job might lack a video in the video_url property, or the provided video file might be corrupted and unplayable.

Our goal is to provide a video for 99% of all real device test jobs, and we have internal Service Level Objectives (SLOs) in place to monitor our progress toward this target.

However, we cannot guarantee video availability in every single instance. Unexpected errors can occur during video encoding, or our long-term storage (S3) might experience temporary unavailability.

In the event of such errors, we refrain from retrying these operations. This is to avoid further delaying the completion time of your job and because we prioritize delivering partial test results over no test results at all.