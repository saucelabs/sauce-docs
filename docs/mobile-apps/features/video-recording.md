---
id: video-recording
title: Video Recording
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs captures a recording of the device screen during your tests. For most test frameworks, this video becomes available upon test completion or as a live stream while the test is in progress.

<p><small><span className="sauceGreen">Real Devices Documentation</span></small></p>

For testing on real devices, video recording is done in one of two ways:
- On-device recording
  - Provides higher video quality and framerate, but requires an agent app running on the device
- External screenshot-based recording
  - Lower quality and framerate, but requires less set-up on the device
The method of recording is decided automatically at the start of each test, based on device support (with a preference towards on-device recording).

Once your test job concludes, the recorded video (either from the device or generated from screenshots) is encoded, either directly on the device or in our infrastructure. Subsequently, the encoded video is downloaded from the device and uploaded to our long-term storage. Be aware that videos are automatically deleted after 30 days, or upon explicit deletion of the associated job.

A test job will not be marked as finished until the video has been successfully uploaded to long-term storage. Consequently, very long-running test sessions will experience a more extended post-processing phase, thus increasing the overall duration of the job. A long session also makes it more likely that there will be encoding issues. We therefore recommend to limit the session duration, if the video is important to you.

## Live Stream

<p><small><span className="sauceGreen">Real Devices Documentation</span></small></p>

While your test job is active, you can access a live video stream of the device if you have the job's device_session_id. This live stream is accessible via WebSocket at the following URL:

`wss://api.<sauce_region>.saucelabs.com/v1/rdc/socket/alternativeIo/<device_session_id>`

Access to this stream requires Basic Auth.

Be aware that this is a raw data stream and requires parsing to be viewable. The video stream adheres to the [OpenSTF](https://github.com/openstf/stf) standard.


## Known Issues

### Missing or Corrupted Videos

We maintain approximately 99% reliability for video recordings across our real device test jobs. We have internal Service Level Objectives (SLOs) in place to monitor this metric and continuously make incremental improvements to our video recording infrastructure.

Achieving this level of reliability is particularly challenging given our extensive device fleet, which encompasses a wide range of device models and operating system versions, each with its own unique characteristics and recording capabilities.

Our teams actively monitor video availability and work to optimize the recording processes while balancing reliability with performance considerations.

In rare cases (usually 1% of all test runs), a job might lack a video in the video_url property, or the provided video file might be corrupted. These situations typically occur due to unexpected errors during video encoding or temporary unavailability in our long-term storage systems. Should you experience reproducible issues with missing videos or notice a pattern of video failures, please contact our support team so we can investigate potential systemic issues.

When such instances do occur, we prioritize delivering your test results quickly rather than delaying job completion with multiple retry attempts. This approach ensures you receive timely test data and can maintain your development velocity, even in the unlikely event of a missing video recording.