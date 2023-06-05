---
id: integrating-ios
title: Integrating iOS SDK
sidebar_label: Integrating iOS SDK
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="sdk">
  <TabItem value="swift" label="Swift Package Manager" default>
    <p><b>Note:</b> Requires Xcode 12+. Screenshots taken from Xcode 13.1</p>
      <p>
        <ul>
          <li>
            <p>
              <ol>
                <li>Select your project from the Xcode navigator to open your project's configuration</li>
                <li>Make sure your project is selected from Project and Target list.</li>
                <li>Click the "Package Dependencies" Toolbar item</li>
                <li>Click the '+' icon to add a package</li>
                <li>In the newly opened dialog search for the TestFairy package repository using the URL: <span style="font-weight: 1000;">https://github.com/testfairy/testfairy-ios-sdk-swift-package</span> in the top right search bar</li>
                <li>Click the "Add Pacakge" button</li>
                <li>After the package has been downloaded, in the newly opened dialog, make sure the TestFairy package is selcted in the "Package Product" column</li>
                <li>Make sure the right target is selected in the "Add to target" column</li>
                <li>Click the "Add Pacakge" button</li>
              </ol>
            </p> 
          </li>
        </ul>
      </p>
  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods">
    <p>Add the <em>TestFairy</em> pod to your Podfile by inserting the following line where applicable:</p>
      <pre>
				<code class=" hljs bash">pod <span class="hljs-string">'TestFairy'</span></code>
			</pre>
			<p>Run the <em>$ pod install</em> command to install the <em>TestFairy</em> dependency.</p>
  </TabItem>
  <TabItem value="carthage" label="Carthage">
    <p>Once you have Carthage installed, you can begin adding frameworks to your project. Note that Carthage only supports dynamic frameworks, which are only available on iOS 8 or later (or any version of OS X).
    </p>
    <ol>
      <li>Add <code>binary "https://app.testfairy.com/sdk/ios/carthage.json"</code> to your Cartfile.</li>
      <li>Run <code>carthage update</code>. </li>
      <li>On your application targets’ “General” settings tab, in the “Linked Frameworks and Libraries” section, drag and drop the TestFairy framework from the [Carthage/Build][] folder on disk.</li>
    </ol>
    <ol>
      <li>
        <p>On your application targets’ “Build Phases” settings tab, click the “+” icon and choose “New Run Script Phase”. Create a Run Script in which you specify your shell (ex: <code>bin/sh</code>), add the following contents to the script area below the shell:</p>
        <pre><code class="language-sh hljs perl">/usr/<span class="hljs-keyword">local</span>/bin/carthage copy-frameworks
				</code></pre>
        <p>and add the paths to the TestFairySDK frameworks under “Input Files”, e.g.:</p>
        <pre><code class=" hljs bash"><span class="hljs-variable">${SRCROOT}</span>/Carthage/Build/iOS/TestFairySDK.framework
				</code></pre>
      </li>
    </ol>
  </TabItem>
  <TabItem value="manual" label="Manual">
    <ol>
      <li>Download the framework from our <a href="https://app.testfairy.com/sdk/ios/" target="_blank">Download page</a>.</li>
      <li>
        <p>Unzip files and drag them into your project tree.</p>
        <p>Make sure <strong>Copy items if needed</strong> is checked when dragging files to your project.</p>
      </li>
      <li>
        <p>Add the following framework:
        </p>
        <p>
          <ul>
            <li>In Xcode, select the project file from the project navigator, on the left side of the project window.</li>
            <li>Show Projects and Target List.</li>
            <li>In the project settings editor, select the target to which you would like to add frameworks.</li>
            <li>Select the “Build Phases” tab, and click the small triangle next to “Link Binary With Libraries” to view all of the frameworks in your application.</li>
          </ul>
        </p>
          <ul>
            <li><code>SystemConfiguration.framework</code></li>
          </ul>
        </li>
      </ol>
  </TabItem>
</Tabs>

