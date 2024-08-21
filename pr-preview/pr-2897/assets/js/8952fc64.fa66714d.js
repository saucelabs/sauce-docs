"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7892],{74802:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var a=t(74848),n=t(28453),i=t(11470),s=t(19365);t(86025);const c={id:"configuration",title:"Configuring Backtrace for iOS",sidebar_label:"Configuration",description:"Configure Backtrace for your iOS project."},l=void 0,o={id:"error-reporting/platform-integrations/ios/configuration",title:"Configuring Backtrace for iOS",description:"Configure Backtrace for your iOS project.",source:"@site/docs/error-reporting/platform-integrations/ios/configuration.md",sourceDirName:"error-reporting/platform-integrations/ios",slug:"/error-reporting/platform-integrations/ios/configuration",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/platform-integrations/ios/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/ios/configuration.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690298031e3,frontMatter:{id:"configuration",title:"Configuring Backtrace for iOS",sidebar_label:"Configuration",description:"Configure Backtrace for your iOS project."},sidebar:"backtrace",previous:{title:"Setup",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/platform-integrations/ios/setup"},next:{title:"PLCrashReporter",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/platform-integrations/plcrash-reporter"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"<code>BacktraceClientConfiguration</code>",id:"backtraceclientconfiguration",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Database Settings",id:"database-settings",level:2},{value:"<code>BacktraceDatabaseSettings</code>",id:"backtracedatabasesettings",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"PLCrashReporter",id:"plcrashreporter",level:2},{value:"Handling Events",id:"handling-events",level:2},{value:"Attributes",id:"attributes",level:2},{value:"File Attachments",id:"file-attachments",level:2},{value:"All Reports",id:"all-reports",level:3},{value:"Per Report",id:"per-report",level:3},{value:"Error-Free Metrics",id:"error-free-metrics",level:2},{value:"Enabling Error-Free Metrics",id:"enabling-error-free-metrics",level:3},{value:"Breadcrumbs",id:"breadcrumbs",level:2},{value:"Enabling Breadcrumbs",id:"enabling-breadcrumbs",level:3},{value:"Adding Manual Breadcrumbs",id:"adding-manual-breadcrumbs",level:3},{value:"Automatic Breadcrumbs",id:"automatic-breadcrumbs",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Configure Backtrace for your iOS project. This page defines the configuration settings, classes, and methods available with the Backtrace Cocoa SDK."}),"\n","\n",(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",metastring:'reference title="Usage Example"',children:"https://github.com/backtrace-labs/backtrace-cocoa/blob/master/Examples/Example-iOS/AppDelegate.swift#L19-L37\n"})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",metastring:'reference title="Usage Example"',children:"https://github.com/backtrace-labs/backtrace-cocoa/blob/master/Examples/Example-iOS-ObjC/AppDelegate.m#L13-L32\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,a.jsxs)(r.p,{children:["For more advanced usage of ",(0,a.jsx)(r.code,{children:"BacktraceClient"}),", you can supply ",(0,a.jsx)(r.code,{children:"BacktraceClientConfiguration"})," as a parameter. See the following example:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:'let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!, token: "token")\nlet configuration = BacktraceClientConfiguration(credentials: backtraceCredentials,\n                                                 dbSettings: BacktraceDatabaseSettings(),\n                                                 reportsPerMin: 10,\n                                                 allowsAttachingDebugger: false,\n                                                 detectOOM: true)\nBacktraceClient.shared = try? BacktraceClient(configuration: configuration)\n'})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:'BacktraceCredentials *credentials = [[BacktraceCredentials alloc]\n                                     initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]\n                                     token: @"token"];\n\nBacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]\n                                               initWithCredentials: credentials\n                                               dbSettings: [[BacktraceDatabaseSettings alloc] init]\n                                               reportsPerMin: 3\n                                               allowsAttachingDebugger: NO\n                                               detectOOM: TRUE];\n\nBacktraceClient.shared = [[BacktraceClient alloc] initWithConfiguration: configuration error: nil];\n'})})})]}),"\n",(0,a.jsx)(r.h3,{id:"backtraceclientconfiguration",children:(0,a.jsx)(r.code,{children:"BacktraceClientConfiguration"})}),"\n",(0,a.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Setting"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"credentials"})," (Swift) or ",(0,a.jsx)("br",{}),(0,a.jsx)(r.code,{children:"initWithCredentials"})," (Objective-C)"]}),(0,a.jsxs)(r.td,{children:["The ",(0,a.jsx)(r.a,{href:"/error-reporting/platform-integrations/ios/setup/#initialize-the-backtrace-client",children:(0,a.jsx)(r.code,{children:"BacktraceCredentials"})})," (endpoint URL and submission token) used to initialize the ",(0,a.jsx)(r.code,{children:"BacktraceClient"}),"."]}),(0,a.jsx)(r.td,{children:"Parameter"}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"dbSettings"})}),(0,a.jsxs)(r.td,{children:["The ",(0,a.jsx)(r.a,{href:"#database-settings",children:(0,a.jsx)(r.code,{children:"BacktraceDatabaseSettings"})})," used to initialize the ",(0,a.jsx)(r.code,{children:"BacktraceDatabase"}),"."]}),(0,a.jsx)(r.td,{children:"Parameter"}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"reportsPerMin"})}),(0,a.jsxs)(r.td,{children:["The maximum number of reports per minute that ",(0,a.jsx)(r.code,{children:"BacktraceClient"})," will send."]}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"30"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"allowsAttachingDebugger"})}),(0,a.jsxs)(r.td,{children:["Specifies whether to send reports when the debugger is connected. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," The options are: ",(0,a.jsx)("br",{}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(r.strong,{children:"false"})," (Swift) / ",(0,a.jsx)(r.strong,{children:"NO"})," (Objective-C): ",(0,a.jsx)(r.code,{children:"BacktraceClient"})," will send reports when the debugger is connected."]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(r.strong,{children:"true"})," (Swift) / ",(0,a.jsx)(r.strong,{children:"YES"})," (Objective-C): ",(0,a.jsx)(r.code,{children:"BacktraceClient"})," won't send reports when the debugger is connected."]})]})]}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:"false / NO"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"detectOOM"})}),(0,a.jsxs)(r.td,{children:["Specifies whether to detect and send reports for out of memory (OOM) crashes. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," The options are: ",(0,a.jsx)("br",{})," ",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(r.strong,{children:"false"})," (Swift) / ",(0,a.jsx)(r.strong,{children:"FALSE"})," (Objective-C): ",(0,a.jsx)(r.code,{children:"BacktraceClient"})," won't detect or send reports for out of memory (OOM) crashes."]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(r.strong,{children:"true"})," (Swift) / ",(0,a.jsx)(r.strong,{children:"TRUE"})," (Objective-C): ",(0,a.jsx)(r.code,{children:"BacktraceClient"})," will detect and send reports for out of memory (OOM) crashes."]})]})]}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:"false / FALSE"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"database-settings",children:"Database Settings"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"BacktraceClient"})," allows you to customize the initialization of ",(0,a.jsx)(r.code,{children:"BacktraceDatabase"})," for local storage of error reports by supplying a ",(0,a.jsx)(r.code,{children:"BacktraceDatabaseSettings"})," parameter, as follows:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:'let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!, token: "token")\nlet backtraceDatabaseSettings = BacktraceDatabaseSettings()\nbacktraceDatabaseSettings.maxRecordCount = 1000\nbacktraceDatabaseSettings.maxDatabaseSize = 10\nbacktraceDatabaseSettings.retryInterval = 5\nbacktraceDatabaseSettings.retryLimit = 3\nbacktraceDatabaseSettings.retryBehaviour = RetryBehaviour.interval\nbacktraceDatabaseSettings.retryOrder = RetryOder.queue\nlet backtraceConfiguration = BacktraceClientConfiguration(credentials: backtraceCredentials,\n                                                          dbSettings: backtraceDatabaseSettings,\n                                                          reportsPerMin: 10)\nBacktraceClient.shared = try? BacktraceClient(configuration: backtraceConfiguration)\n'})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:'BacktraceCredentials *credentials = [[BacktraceCredentials alloc]\n                                     initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]\n                                     token: @"token"];\n\nBacktraceDatabaseSettings *backtraceDatabaseSettings = [[BacktraceDatabaseSettings alloc] init];\nbacktraceDatabaseSettings.maxRecordCount = 1000;\nbacktraceDatabaseSettings.maxDatabaseSize = 10;\nbacktraceDatabaseSettings.retryInterval = 5;\nbacktraceDatabaseSettings.retryLimit = 3;\nbacktraceDatabaseSettings.retryBehaviour = RetryBehaviourInterval;\nbacktraceDatabaseSettings.retryOrder = RetryOderStack;\n\nBacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]\n                                               initWithCredentials: credentials\n                                               dbSettings: backtraceDatabaseSettings\n                                               reportsPerMin: 3\n                                               allowsAttachingDebugger: NO];\n\nBacktraceClient.shared = [[BacktraceClient alloc] initWithConfiguration: configuration error: nil];\n'})})})]}),"\n",(0,a.jsx)(r.h3,{id:"backtracedatabasesettings",children:(0,a.jsx)(r.code,{children:"BacktraceDatabaseSettings"})}),"\n",(0,a.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Setting"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"maxRecordCount"})}),(0,a.jsx)(r.td,{children:"The maximum number of records stored in the database. If set to '0', then there is no record limit."}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"0"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"maxDatabaseSize"})}),(0,a.jsx)(r.td,{children:"The maximum size of the database in MB. If set to '0', then there is no size limit."}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"0"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"retryInterval"})}),(0,a.jsx)(r.td,{children:"The amount of time (in seconds) to wait before the next retry if unable to send a report."}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"5"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"retryLimit"})}),(0,a.jsx)(r.td,{children:"The maximum number of retries to attempt if unable to send a report."}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"3"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"retryBehaviour"})}),(0,a.jsxs)(r.td,{children:["The retry behaviour if unable to send a report. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," The options are: ",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(r.strong,{children:"interval"}),": If unable to send a report, the database will retry based on the ",(0,a.jsx)(r.code,{children:"retryInterval"}),"."]})," ",(0,a.jsxs)("li",{children:[(0,a.jsx)(r.strong,{children:"none"}),": If unable to send a report, the database will not retry."]})]})]}),(0,a.jsx)(r.td,{children:"Enum"}),(0,a.jsx)(r.td,{children:"interval"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"retryOrder"})}),(0,a.jsxs)(r.td,{children:["The retry order if unable to send a report. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," The options are: ",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(r.strong,{children:"queue"}),": The oldest reports are sent first (FIFO)."]})," ",(0,a.jsxs)("li",{children:[(0,a.jsx)(r.strong,{children:"stack"}),": The newest reports are sent first (LIFO)."]})]})]}),(0,a.jsx)(r.td,{children:"Enum"}),(0,a.jsx)(r.td,{children:"queue"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"plcrashreporter",children:"PLCrashReporter"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"BacktraceClient"})," allows you to customize the configuration of the PLCrashReporter by injecting its instance as follows:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:'let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!, token: "token")\nlet backtraceConfiguration = BacktraceClientConfiguration(credentials: backtraceCredentials)\nBacktraceClient.shared = try? BacktraceClient(\n    configuration: backtraceConfiguration,\n    crashReporter: BacktraceCrashReporter(config: PLCrashReporterConfig.defaultConfiguration()))\n// or\nBacktraceClient.shared = try? BacktraceClient(\n    configuration: backtraceConfiguration,\n    crashReporter: BacktraceCrashReporter(reporter: PLCrashReporter.shared()))\n'})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:'BacktraceCredentials *credentials = [[BacktraceCredentials alloc]\n                                     initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]\n                                     token: @"token"];\n\nBacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]\n                                                initWithCredentials: credentials];\n\nBacktraceClient.shared = [[BacktraceClient alloc]\n                            initWithConfiguration: configuration\n                            crashReporter: [[BacktraceCrashReporter alloc] initWithConfig: PLCrashReporterConfig.defaultConfiguration]\n                            error: nil];\n\n// or\nBacktraceClient.shared = [[BacktraceClient alloc]\n                            initWithConfiguration: configuration\n                            crashReporter: [[BacktraceCrashReporter alloc] initWithReporter: PLCrashReporter.sharedReporter]\n                            error: nil];\n'})})})]}),"\n",(0,a.jsx)(r.h2,{id:"handling-events",children:"Handling Events"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"BacktraceClient"})," allows you to subscribe to events produced before and after sending each report by attaching an object that follows the ",(0,a.jsx)(r.code,{children:"BacktraceClientDelegate"})," protocol."]}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:"// assign `self` or any other object as a `BacktraceClientDelegate`\nBacktraceClient.shared?.delegate = self\n\n// handle events\nfunc willSend(_ report: BacktraceCrashReport) -> (BacktraceCrashReport)\nfunc willSendRequest(_ request: URLRequest) -> URLRequest\nfunc serverDidFail(_ error: Error)\nfunc serverDidRespond(_ result: BacktraceResult)\nfunc didReachLimit(_ result: BacktraceResult)\n"})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:"// assign `self` or any other object as a `BacktraceClientDelegate`\nBacktraceClient.shared.delegate = self;\n\n//handle events\n- (BacktraceReport *) willSend: (BacktraceReport *)report;\n- (void) serverDidFail: (NSError *)error;\n- (void) serverDidRespond: (BacktraceResult *)result;\n- (NSURLRequest *) willSendRequest: (NSURLRequest *)request;\n- (void) didReachLimit: (BacktraceResult *)result;\n"})})})]}),"\n",(0,a.jsxs)(r.p,{children:["For example, you can use ",(0,a.jsx)(r.code,{children:"BacktraceClientDelegate"})," to modify a report before send:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:'func willSend(_ report: BacktraceReport) -> (BacktraceReport) {\n    report.attributes["added"] = "just before send"\n    return report\n}\n'})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:'- (BacktraceReport *)willSend:(BacktraceReport *)report {\n    NSMutableDictionary *dict = [report.attributes mutableCopy];\n    [dict setObject: @"just before send" forKey: @"added"];\n    report.attributes = dict;\n    return report;\n}\n'})})})]}),"\n",(0,a.jsx)(r.h2,{id:"attributes",children:"Attributes"}),"\n",(0,a.jsx)(r.p,{children:"You can add custom attributes to send alongside every crash and error report:"}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:'BacktraceClient.shared?.attributes = ["foo": "bar", "testing": true]\n'})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:'BacktraceClient.shared.attributes = @{@"foo": @"bar", @"testing": @YES};\n'})})})]}),"\n",(0,a.jsxs)(r.p,{children:["You can also specify a unique set of attributes for a specific report with the ",(0,a.jsx)(r.code,{children:"willSend(_:)"})," method of ",(0,a.jsx)(r.a,{href:"#handling-events",children:(0,a.jsx)(r.code,{children:"BacktraceClientDelegate"})}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"file-attachments",children:"File Attachments"}),"\n",(0,a.jsx)(r.h3,{id:"all-reports",children:"All Reports"}),"\n",(0,a.jsxs)(r.p,{children:["You can specify file attachments to send with every crash and error report. File attachments are specified as an ",(0,a.jsx)(r.code,{children:"array"})," of ",(0,a.jsx)(r.code,{children:"URL"})," that contain the path to the file."]}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:'guard let libraryDirectoryUrl = try? FileManager.default.url(\n     for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true) else {\n     throw CustomError.runtimeError\n}\n\nlet fileUrl = libraryDirectoryUrl.appendingPathComponent("sample.txt")\n\nvar crashAttachments = Attachments()\ncrashAttachments.append(fileUrl)\n\nBacktraceClient.shared?.attachments = crashAttachments\n'})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:'NSString *fileName = @"myCustomFile.txt";\nNSURL *libraryUrl = [[[NSFileManager defaultManager] URLsForDirectory:NSLibraryDirectory\n         inDomains:NSUserDomainMask] lastObject];\nNSURL *fileUrl = [libraryUrl URLByAppendingPathComponent:fileName];\n\nBacktraceClient.shared.attachments = [NSArray arrayWithObjects:fileUrl, nil];\n'})})})]}),"\n",(0,a.jsx)(r.h3,{id:"per-report",children:"Per Report"}),"\n",(0,a.jsx)(r.p,{children:"You can specify file attachments to send for a specific report by supplying an array of file paths."}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:'let filePath = Bundle.main.path(forResource: "test", ofType: "txt")!\nBacktraceClient.shared?.send(attachmentPaths: [filePath]) { (result) in\n    print(result)\n}\n'})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:'NSArray *paths = @[[[NSBundle mainBundle] pathForResource: @"test" ofType: @"txt"]];\n[[BacktraceClient shared] sendWithAttachmentPaths:paths completion:^(BacktraceResult * _Nonnull result) {\n    NSLog(@"%@", result);\n}];\n'})})})]}),"\n",(0,a.jsxs)(r.p,{children:["You can also specify a unique set of files for specific reports with the ",(0,a.jsx)(r.code,{children:"willSend(_:)"})," method of ",(0,a.jsx)(r.a,{href:"#handling-events",children:(0,a.jsx)(r.code,{children:"BacktraceClientDelegate"})}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"error-free-metrics",children:"Error-Free Metrics"}),"\n",(0,a.jsx)(r.p,{children:"Error-free metrics allow you to determine:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"How many of your unique users (i.e., unique device IDs) using your app are experiencing errors/crashes."}),"\n",(0,a.jsx)(r.li,{children:"How many application sessions (i.e., individual application sessions from startup till shutdown/exit) of your app are experiencing errors/crashes."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["You can track those metrics at-a-glance, as well as in detail to find out what kinds of errors/crashes are most common. For more information, see ",(0,a.jsx)(r.a,{href:"/error-reporting/web-console/overview/#stability-metrics-widgets",children:"Stability Metrics Widgets"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"enabling-error-free-metrics",children:"Enabling Error-Free Metrics"}),"\n",(0,a.jsx)(r.p,{children:"You can enable error-free metrics as follows:"}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",metastring:'reference title="Code Sample"',children:"https://github.com/backtrace-labs/backtrace-cocoa/blob/dfe0d9046c6d5706137d9e861a03d54775277e90/Examples/Example-iOS/AppDelegate.swift#L47\n"})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",metastring:'reference title="Code Sample"',children:"https://github.com/backtrace-labs/backtrace-cocoa/blob/dfe0d9046c6d5706137d9e861a03d54775277e90/Examples/Example-iOS-ObjC/AppDelegate.m#L55\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"breadcrumbs",children:"Breadcrumbs"}),"\n",(0,a.jsx)("p",{children:(0,a.jsx)("span",{className:"sauceGreen",children:"iOS and macOS Only"})}),"\n",(0,a.jsx)(r.p,{children:"Breadcrumbs allow you track events leading up to your crash, error, or other submitted object. When breadcrumbs are enabled, any captured breadcrumbs will automatically be attached as a file to your crash, error, or other submitted object (including native crashes)."}),"\n",(0,a.jsx)(r.h3,{id:"enabling-breadcrumbs",children:"Enabling Breadcrumbs"}),"\n",(0,a.jsx)(r.p,{children:"You can enable breadcrumbs as follows:"}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",metastring:'reference title="Code Sample"',children:"https://github.com/backtrace-labs/backtrace-cocoa/blob/a817605c07eb83af412533ac8e185ebcbdf79562/Examples/Example-iOS/AppDelegate.swift#L47\n"})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",metastring:'title="Code Sample"',children:"[BacktraceClient.shared enableBreadCrumbs];\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"adding-manual-breadcrumbs",children:"Adding Manual Breadcrumbs"}),"\n",(0,a.jsx)(r.p,{children:"You can add breadcrumbs as follows:"}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",metastring:'reference title="Code Sample"',children:"https://github.com/backtrace-labs/backtrace-cocoa/blob/dfe0d9046c6d5706137d9e861a03d54775277e90/Examples/Example-iOS/AppDelegate.swift#L52-L57\n"})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",metastring:'reference title="Code Sample"',children:"https://github.com/backtrace-labs/backtrace-cocoa/blob/dfe0d9046c6d5706137d9e861a03d54775277e90/Examples/Example-iOS-ObjC/AppDelegate.m#L61-L65\n"})})})]}),"\n",(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsxs)(r.p,{children:["We recommend that you do ",(0,a.jsx)(r.strong,{children:"not"})," make calls to ",(0,a.jsx)(r.code,{children:"addBreadcrumb"})," from performance-critical code paths."]})}),"\n",(0,a.jsx)(r.h3,{id:"automatic-breadcrumbs",children:"Automatic Breadcrumbs"}),"\n",(0,a.jsx)(r.p,{children:"By default, if you enable breadcrumbs, Backtrace registers handlers to capture common iOS system events, such as low memory warnings, battery state, screen orientation changes, background/foreground/inactive changes, and more."}),"\n",(0,a.jsx)(r.p,{children:"You can limit the types of automatic events that are captured by specifying which automatic breadcrumb types you want to enable. For example:"}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(s.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-swift",children:"let settings = BacktraceBreadcrumbSettings()\nsettings.breadcrumbTypes = [BacktraceBreadcrumbType.system, BacktraceBreadcrumbType.configuration]\n"})})}),(0,a.jsx)(s.A,{value:"objc",label:"Objective-C",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-objc",children:'BacktraceBreadcrumbSettings *settings = [[BacktraceBreadcrumbSettings alloc]\n                                             init:4096\n                                             maxQueueFileSizeBytes: 64 * 1024\n                                             breadcrumbLogFileName:@"bt-breadcrumbs-0"\n                                             breadcrumbTypes:@[[NSNumber numberWithInt:BacktraceBreadcrumbTypeManual],\n                                                               [NSNumber numberWithInt:BacktraceBreadcrumbTypeLog]]\n                                             breadcrumbLevel:BacktraceBreadcrumbLevelInfo];\n'})})})]})]})}function b(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var a=t(18215);const n={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>C});var a=t(96540),n=t(18215),i=t(23104),s=t(56347),c=t(205),l=t(57485),o=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function b(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const n=(0,s.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,i=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:i}))),[o,u]=p({queryString:t,groupId:n}),[g,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,d.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),x=(()=>{const e=o??g;return b({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function m(e){let{className:r,block:t,selectedValue:a,selectValue:s,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),n=c[t].value;n!==a&&(o(r),s(n))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:c.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,n.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function k(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=g(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,f.jsx)(m,{...e,...r}),(0,f.jsx)(k,{...e,...r})]})}function C(e){const r=(0,j.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var a=t(96540);const n={},i=a.createContext(n);function s(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);