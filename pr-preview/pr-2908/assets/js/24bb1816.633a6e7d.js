"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[58639],{76491:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=a(74848),i=a(28453),r=(a(11470),a(19365),a(86025));const s={id:"usage",title:"Hydra Usage",sidebar_label:"Usage",description:"Hydra takes a snapshot generated by running Backtrace's ptrace tracer on an application and organizes the data in an easy to grok terminal interface."},o=void 0,l={id:"error-reporting/advanced/hydra/usage",title:"Hydra Usage",description:"Hydra takes a snapshot generated by running Backtrace's ptrace tracer on an application and organizes the data in an easy to grok terminal interface.",source:"@site/docs/error-reporting/advanced/hydra/usage.md",sourceDirName:"error-reporting/advanced/hydra",slug:"/error-reporting/advanced/hydra/usage",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/advanced/hydra/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/hydra/usage.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"usage",title:"Hydra Usage",sidebar_label:"Usage",description:"Hydra takes a snapshot generated by running Backtrace's ptrace tracer on an application and organizes the data in an easy to grok terminal interface."},sidebar:"backtrace",previous:{title:"Setup",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/advanced/hydra/setup"},next:{title:"Introduction",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/advanced/assistive-unix/introduction"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Running Hydra",id:"running-hydra",level:3},{value:"Understanding the Panes",id:"understanding-the-panes",level:3},{value:"Organizing Information with Rules",id:"organizing-information-with-rules",level:3},{value:"Navigating and Changing Context",id:"navigating-and-changing-context",level:3},{value:"Initial View and Fault Analysis",id:"initial-view-and-fault-analysis",level:3},{value:"Popular Features",id:"popular-features",level:2},{value:"Source Code Integration",id:"source-code-integration",level:3},{value:"Configuring Source Code Integration",id:"configuring-source-code-integration",level:4},{value:"Triggers",id:"triggers",level:3},{value:"Troubleshooting Triggers",id:"troubleshooting-triggers",level:4},{value:"Item Collapsing",id:"item-collapsing",level:3},{value:"Inlined Annotations",id:"inlined-annotations",level:3},{value:"Annotation Jumping",id:"annotation-jumping",level:3},{value:"Pane Maximization",id:"pane-maximization",level:3},{value:"Regular Expression Search",id:"regular-expression-search",level:3},{value:"Index Jumping",id:"index-jumping",level:3},{value:"Thread Grouping",id:"thread-grouping",level:3},{value:"Configuration",id:"configuration",level:3},{value:"A Deeper Dive",id:"a-deeper-dive",level:2},{value:"Navigation Hotkeys",id:"navigation-hotkeys",level:3},{value:"State Jumping/Linking",id:"state-jumpinglinking",level:3},{value:"Global Commands",id:"global-commands",level:3},{value:"Immediately Run Global Commands",id:"immediately-run-global-commands",level:4},{value:"Router Pane",id:"router-pane",level:2},{value:"System",id:"system",level:3},{value:"Context",id:"context",level:3},{value:"Process",id:"process",level:3},{value:"KVs",id:"kvs",level:3},{value:"Registers",id:"registers",level:3},{value:"<code>Pmap</code> Entries",id:"pmap-entries",level:3},{value:"Attached Files",id:"attached-files",level:3},{value:"Classifiers",id:"classifiers",level:3},{value:"Kernel Frames",id:"kernel-frames",level:3},{value:"Global/TLS Variables",id:"globaltls-variables",level:3},{value:"Source Code Integration",id:"source-code-integration-1",level:3},{value:"Annotations",id:"annotations",level:3},{value:"Column Specification",id:"column-specification",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Hydra is a tool that takes a snapshot generated by running our ptrace tracer on an application and organizes the data in an easy-to-understand terminal interface."}),"\n",(0,t.jsx)(n.p,{children:"Its main purpose is to help engineers focus on the most relevant information related to the root cause of a failure. The tool automatically selects the faulting frame, annotates suspect variables, and classifies the crash into a specific fault type (for example, null dereference, memory write). Hydra provides various commands and integrations to facilitate navigation through the application state, enabling faster access to more information and reducing tedious tasks."}),"\n",(0,t.jsx)(n.p,{children:"Let's dive deeper into how Hydra can help you eliminate the complex bugs that impact your production applications."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.h3,{id:"running-hydra",children:"Running Hydra"}),"\n",(0,t.jsx)(n.p,{children:"First things first: how do you run Hydra?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ hydra\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you have configured coroner, you can also use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ coroner view\n"})}),"\n",(0,t.jsx)(n.p,{children:"Running these commands instantly displays the exact root cause of the crash and, in some cases, even proposes a fix for you."}),"\n",(0,t.jsxs)(n.p,{children:["What you actually see is a colorful ncurses interface (unless you pass the ",(0,t.jsx)(n.code,{children:"-m"})," flag to hydra, in which case it is displayed in black and white). The interface reminds you of some of your favorite tools, such as htop and tig. So, how is this interface organized?"]}),"\n",(0,t.jsx)(n.h3,{id:"understanding-the-panes",children:"Understanding the Panes"}),"\n",(0,t.jsx)(n.p,{children:"The interface is divided into several panes, each representing a different aspect of the application's state."}),"\n",(0,t.jsx)(n.p,{children:"The panes, in order, are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Threads"}),"\n",(0,t.jsx)(n.li,{children:"Frames"}),"\n",(0,t.jsx)(n.li,{children:"Variables"}),"\n",(0,t.jsx)(n.li,{children:"Router"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We'll explain the Router pane in more detail later. For now, know that it contains various metadata about the application, including system information (memory/CPU usage), registers, kernel frames, and more. It also offers configurable integrations, such as source code management."}),"\n",(0,t.jsx)(n.p,{children:"Among the panes, the only one that remains constant is the Threads pane (well, almost constant because you can still change how threads are displayed). The Frames, Variables, and Router panes dynamically update based on the selected context. We refer to these panes as context-aware. Frames are populated based on the selected thread, Variables and Registers depend on the current frame, and more."}),"\n",(0,t.jsx)(n.h3,{id:"organizing-information-with-rules",children:"Organizing Information with Rules"}),"\n",(0,t.jsx)(n.p,{children:"There are rules between each pane to prevent the panes from blending together and creating confusion. These rules not only add visual separation but also provide valuable information."}),"\n",(0,t.jsx)(n.p,{children:"The rules, in order, are:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Title: Shows a list of navigation hotkeys and the Hydra version."}),"\n",(0,t.jsx)(n.li,{children:"Application name and time of the trace."}),"\n",(0,t.jsx)(n.li,{children:"Basename of the object file and instruction/stack pointers for the current frame."}),"\n",(0,t.jsx)(n.li,{children:"Process map entry for the current variable and assembly instruction for the current frame."}),"\n",(0,t.jsx)(n.li,{children:"Router pane title bar, including the tab list and the name of the current pane."}),"\n",(0,t.jsxs)(n.li,{children:["Context: Provides a brief indication/description of the current context. It often includes a position indicator on the right side, such as \"Variable 30 out of 340 million; go faster.\" On the left side, it might display the current thread's TID or the type of the current variable. The content of this pane changes when you run a command, which we'll cover later. A status message may be temporarily displayed here if your command fails. For example, if you run ",(0,t.jsx)(n.code,{children:"/samy_bank_password"}),", you'll see \"That's private!\""]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"navigating-and-changing-context",children:"Navigating and Changing Context"}),"\n",(0,t.jsx)(n.p,{children:"With so many contextual panes, how do you actually change the context? How do you switch focus from threads to frames or from frames to the router pane? Navigation in Hydra follows a vim-like approach (apologies to Emacs users; I have small hands and want to avoid repetitive strain injury)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Movement in a pane: Use the expected hjkl keys. Special keys like H (go to the top of the current view of a list) and L (same as H, but bottom) are also supported. Page Up and Page Down keys work as usual."}),"\n",(0,t.jsx)(n.li,{children:"Switching panes: Press the Tab key to switch focus to the next pane. If you reach the last pane, it wraps around to the first one. You can also use pre-set marks to switch directly to a specific pane. For example, press 1 for Threads, 2 for Frames, 3 for Variables, and 4 for Router."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"initial-view-and-fault-analysis",children:"Initial View and Fault Analysis"}),"\n",(0,t.jsx)(n.p,{children:"What does Hydra look like in action? Rather than explaining it in a thousand words, let's show you:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("/img/error-reporting/hydra/5e601cae9728d.png"),alt:"Hydra interface"}),"\n",(0,t.jsx)(n.p,{children:"In the initial view, your attention is immediately drawn to the faulting frame, with the signal information displayed directly beneath it. No more parsing a gdb stack trace to find the frame you need to investigate."}),"\n",(0,t.jsx)(n.p,{children:"Below that, you can see all the variables of the faulting frame (remember the mention of contexts earlier? Well, this shows the variable context for the faulted frame because it's selected). Notice the colorful text below each variable? Those are inlined annotations. We'll explain them later, but they indicate that our tracer automatically detected an issue with that variable. In this case, it appears that you dereferenced a NULL pointer."}),"\n",(0,t.jsx)(n.p,{children:"Wait a minute, you remember your application having five threads, but only three are shown. And what's that peculiar symbol next to one of the threads? Well, that, my friends, represents two features in one: thread grouping and item collapsing. We'll cover these features in more detail later, but to give you an idea, Hydra has determined that a group of three threads in your application are nearly identical. Therefore, you probably only need to focus on one of them (unless you specifically require information from the other threads). If necessary, you can expand the group and explore its contents."}),"\n",(0,t.jsx)(n.p,{children:"And what's in the bottom pane? Is that... your code? Yes, it is! Another great feature of Hydra is its source code integration. The default tab in the Router pane displays your code. We'll explain how to configure this feature later, but for now, know that it shows the line where the crash occurred (along with the entire file, not just the function call and line, as gdb typically shows). It even fetches the correct version of your code based on the tag/version associated with the crash."}),"\n",(0,t.jsx)(n.h2,{id:"popular-features",children:"Popular Features"}),"\n",(0,t.jsx)(n.p,{children:"We've covered the basics, but there's so much more you can do with Hydra. Let's explore some of the coolest features, because what's the point of a fancy ncurses UI without cool features?"}),"\n",(0,t.jsx)(n.h3,{id:"source-code-integration",children:"Source Code Integration"}),"\n",(0,t.jsx)(n.p,{children:"Let's take a deeper look into one of the first things you'll encounter (and definitely want to see) when analyzing a crash: source code."}),"\n",(0,t.jsx)(n.h4,{id:"configuring-source-code-integration",children:"Configuring Source Code Integration"}),"\n",(0,t.jsx)(n.p,{children:"You can configure Hydra to display relevant sections of the source code in the peripheral pane."}),"\n",(0,t.jsx)("img",{src:(0,r.A)("/img/error-reporting/hydra/5e601cafecafe.png"),alt:"Configuring source code integration"}),"\n",(0,t.jsxs)(n.p,{children:["To set up source code integration, edit your ",(0,t.jsx)(n.code,{children:"~/.hydra.cf"})," file and add a ",(0,t.jsx)(n.code,{children:"[scm]"})," section. Here's an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[scm]\ncrash_app.map=object\n\n:^libmtev[\\.-],/home/user/projects/libmtev\ncrash_app.map=object:^libck[\\.-],/home/user/projects/ck\ncrash_app.map=function:^ck_,/home/user/projects/ck\ncrash_app.map=function:^yajl_,/home/user/projects/yajl\ncrash_app.map=object:^libyajl[\\.-],/home/user/projects/yajl\ncrash_app.ignore=object:^lib\ncrash_app.map=/home/user/projects/crash_app\ncrash_app.trigger=/home/user/projects/crash_app,version,git -C %s checkout -q %0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".map"})," commands associate an object file or function name with a source code folder for the application. After the colon, you specify a regular expression to match the object or function name, followed by the corresponding source code path. The commands are processed from top to bottom, and the first match determines the path where Hydra searches for the source code."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:".map"})," command without a regular expression match acts as a wildcard, matching anything in the same directory."]}),"\n",(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.code,{children:".ignore="}),' followed by a regular expression, Hydra ignores matches for subsequent lines. In the example above, object files that start with "lib" and haven\'t matched any earlier ',(0,t.jsx)(n.code,{children:".map=object"})," lines are ignored, preventing Hydra from associating them with source code."]}),"\n",(0,t.jsx)(n.h3,{id:"triggers",children:"Triggers"}),"\n",(0,t.jsxs)(n.p,{children:["You can also trigger a command to run with ",(0,t.jsx)(n.code,{children:".trigger="}),". The most common use case is triggering a git checkout of the correct branch when using Hydra."]}),"\n",(0,t.jsxs)(n.p,{children:["To use a trigger, specify the source code path as the first parameter and the command to run as the last parameter. Between them, you can include key-value pairs that act as positional variables in the trigger command. In the example above, the ",(0,t.jsx)(n.code,{children:"version"})," key-value maps to the ",(0,t.jsx)(n.code,{children:"%0"})," parameter. Additional key-value pairs correspond to ",(0,t.jsx)(n.code,{children:"%1"}),", ",(0,t.jsx)(n.code,{children:"%2"}),", and so on. ",(0,t.jsx)(n.code,{children:"%s"})," refers to the project path."]}),"\n",(0,t.jsx)(n.h4,{id:"troubleshooting-triggers",children:"Troubleshooting Triggers"}),"\n",(0,t.jsx)(n.p,{children:"If a trigger you've set up doesn't seem to be firing, keep in mind the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A trigger fires only when code from the specified folder is accessed by Hydra, which occurs when a frame using that code is highlighted."}),"\n",(0,t.jsxs)(n.li,{children:["A trigger fires only if:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The path in the trigger line was previously matched by a ",(0,t.jsx)(n.code,{children:".map="})," line."]}),"\n",(0,t.jsxs)(n.li,{children:["At least one key-value attribute is specified in the ",(0,t.jsx)(n.code,{children:".trigger="})," line."]}),"\n",(0,t.jsxs)(n.li,{children:["The listed attributes are present in the snapshot (that is, ",(0,t.jsx)(n.code,{children:"ptrace"})," was called with the ",(0,t.jsx)(n.code,{children:"--kv="})," flag and included the specified attributes)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"item-collapsing",children:"Item Collapsing"}),"\n",(0,t.jsxs)(n.p,{children:["Context: Any pane displaying a list with a hierarchy indicated by ",(0,t.jsx)(n.code,{children:"+/-"})," symbols"]}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Collapse or expand an item: +/- symbols next to the item"}),"\n",(0,t.jsx)(n.li,{children:"Collapse or expand all items: Commands specific to each pane"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Any item with an indicated hierarchy (such as a +/- symbol) can be collapsed or expanded to hide or show its "children." In the Threads pane, children may refer to members of a specific thread group; in the Variables pane, members of a struct or array; in the Process pane, structured heap metadata (arenas, thread caches, etc.); and more.'}),"\n",(0,t.jsxs)(n.p,{children:["There is one exception to the default collapsing behavior: inlined variable annotations. See the ",(0,t.jsx)(n.a,{href:"#inlined-annotations",children:"Inlined Annotations"})," section for details."]}),"\n",(0,t.jsx)(n.h3,{id:"inlined-annotations",children:"Inlined Annotations"}),"\n",(0,t.jsx)(n.p,{children:"Any annotations on a variable are displayed directly below the variable. If a variable chain collapses, but one of the variables in the chain is annotated, the minimum number of variables necessary (including the annotated variable and its owners) is displayed along with the annotation itself."}),"\n",(0,t.jsx)(n.h3,{id:"annotation-jumping",children:"Annotation Jumping"}),"\n",(0,t.jsxs)(n.p,{children:["Variables across frames are annotatable, and in a single frame, there may be thousands of variables, making it challenging to see any annotations. Annotation jumping proves valuable in this case. Open the ",(0,t.jsx)(n.code,{children:"Warnings"})," tab in the bottom pane (press ",(0,t.jsx)(n.code,{children:"w"}),"), scroll through the list to find the annotation you're interested in, and press ",(0,t.jsx)(n.strong,{children:"Enter"}),". The thread, frame, and variable views update to the position of the annotation's owner."]}),"\n",(0,t.jsx)(n.h3,{id:"pane-maximization",children:"Pane Maximization"}),"\n",(0,t.jsx)(n.p,{children:"Context: Any pane"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Maximize or restore panes: ",(0,t.jsx)(n.code,{children:"M (Shift + m)"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All panes support maximization. When a pane is maximized, it has an associated context (for example, a maximized Thread pane has a Frame pane context). The maximized pane occupies most of the screen space, while the contextual panes occupy the rest. All other panes are hidden. To restore all panes and sizes, press ",(0,t.jsx)(n.code,{children:"M"})," again or use a macro movement hotkey to switch to one of the hidden panes (moving between shown panes does not restore the sizes)."]}),"\n",(0,t.jsx)(n.h3,{id:"regular-expression-search",children:"Regular Expression Search"}),"\n",(0,t.jsx)(n.p,{children:"Context: Any pane displaying a list"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Search: ",(0,t.jsx)(n.code,{children:"/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Go to the next search result: ",(0,t.jsx)(n.code,{children:"n"})]}),"\n",(0,t.jsxs)(n.li,{children:["Go to the previous search result: ",(0,t.jsx)(n.code,{children:"N"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All panes displaying a list support regular expression searches. Each column is searched independently. For example, in the Threads pane, the search applies to status, TID, basename, thread name, and top frame symbol."}),"\n",(0,t.jsx)(n.h3,{id:"index-jumping",children:"Index Jumping"}),"\n",(0,t.jsx)(n.p,{children:"Context: Any pane"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Jump to a specific index: ",(0,t.jsx)(n.code,{children:":"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All panes support index jumping. Except for the Source Code Management (SCM) pane, the indices are 0-based. The SCM pane uses a 1-based index (similar to a vim file). If an index is outside the valid range, it jumps to the first or last elements, respectively."}),"\n",(0,t.jsx)(n.h3,{id:"thread-grouping",children:"Thread Grouping"}),"\n",(0,t.jsx)(n.p,{children:"Context: Any pane for commands, Thread pane for display"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Group threads: ",(0,t.jsx)(n.code,{children:":group"})]}),"\n",(0,t.jsxs)(n.li,{children:["Supported group types: ",(0,t.jsx)(n.code,{children:"callstack"})]}),"\n",(0,t.jsxs)(n.li,{children:["Ungroup threads: ",(0,t.jsx)(n.code,{children:":ungroup"})]}),"\n",(0,t.jsxs)(n.li,{children:["Sort threads: ",(0,t.jsx)(n.code,{children:":sort [sort-type]"})]}),"\n",(0,t.jsxs)(n.li,{children:["Supported sort types: ",(0,t.jsx)(n.code,{children:"tid"})]}),"\n",(0,t.jsxs)(n.li,{children:["Reverse sorting order: ",(0,t.jsx)(n.code,{children:":rsort"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Threads are automatically grouped based on the selected group type and sorted according to the specified sort type."}),"\n",(0,t.jsx)(n.p,{children:"With callstack grouping, threads with identical callstacks are grouped together. Using the tid sort type orders threads based on their thread IDs. No other supported group and sort types are available."}),"\n",(0,t.jsxs)(n.p,{children:["By default, threads are grouped by ",(0,t.jsx)(n.code,{children:"callstack"})," and sorted by ",(0,t.jsx)(n.code,{children:"tid"}),". You can ungroup all threads using ",(0,t.jsx)(n.code,{children:":ungroup"})," and reverse the current sorting order in each group with ",(0,t.jsx)(n.code,{children:":rsort"})," (for example, reverse sorting threads by tid)."]}),"\n",(0,t.jsx)(n.p,{children:"Faulted threads are always grouped separately from non-faulted threads and appear first in the thread list (faulted threads are indicated with an 'F' next to them)."}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Hydra looks for a configuration file at ",(0,t.jsx)(n.code,{children:"~/.hydra.cf"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Here's a sample configuration for the crash application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[scm]\ncrash.map=/home/djoseph/projects/crash/src\ncrash.map=object:^libck[\\.-],/home/djoseph/projects/ck\ncrash.map=function:^ck_,/home/djoseph/projects/ck\ncrash.trigger=/home/djoseph/projects/crash,version,git -C %s checkout -q %0\n\neditor=vim +%l %s\n\n[general]\nalias_detection=true\ncollapse_threshold=3\n"})}),"\n",(0,t.jsx)(n.h2,{id:"a-deeper-dive",children:"A Deeper Dive"}),"\n",(0,t.jsx)(n.p,{children:"Remember all those explanations we postponed earlier? Well, if you're still looking for more clarity, here they are:"}),"\n",(0,t.jsx)(n.h3,{id:"navigation-hotkeys",children:"Navigation Hotkeys"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"j"}),": Move down one item"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"k"}),": Move up one item"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"h"}),": Scroll left (if there is text off the screen)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"l"}),": Scroll right (if there is text off the screen)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"H"}),": Move to the top of the current view (vim behavior)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"L"}),": Move to the bottom of the current view"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PgUp"}),": Move up one full page of items"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PgDn"}),": Move down one full page of items"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Home"}),": Move to the first item"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"End"}),": Move to the last item"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:":"})," Jump to the specified position"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tab"}),": Move to the next pane"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1-4"}),": Move to the pane associated with the number","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1"}),": Threads"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"2"}),": Frames"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"3"}),": Variables"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"4"}),": Router"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"state-jumpinglinking",children:"State Jumping/Linking"}),"\n",(0,t.jsx)(n.p,{children:"Context: Any non-router pane"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"u"}),": Show the position of the current selection in the current pane"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:":j"}),": Refocus to the provided position"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['Any state in the top three panes (Threads, Frames, and Variables) can be immediately refocused by "jumping" to its position, similar to annotation jumping. Press ',(0,t.jsx)(n.code,{children:"u"})," to show the position URL of the current selection and use the global ",(0,t.jsx)(n.code,{children:":j"})," command to refocus on that state."]}),"\n",(0,t.jsx)(n.h3,{id:"global-commands",children:"Global Commands"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":s"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":!"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":j"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":sort"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":rsort"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":group"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":ungroup"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:":q"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"immediately-run-global-commands",children:"Immediately Run Global Commands"}),"\n",(0,t.jsx)(n.p,{children:"Context: Hydra command-line parameter"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'-e "command"'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All global commands, except regular expression search, can be executed immediately upon starting Hydra. This is beneficial for sharing the state with other users. Provide them with a snapshot and a position URL (using the ",(0,t.jsx)(n.code,{children:"u"})," command) and have them open it using: ",(0,t.jsx)(n.code,{children:'hydra -e "j <position URL>"'}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"router-pane",children:"Router Pane"}),"\n",(0,t.jsx)(n.h3,{id:"system",children:"System"}),"\n",(0,t.jsx)(n.p,{children:"Displays general application and system statistics at the time of the crash. Some examples include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Number of threads"}),"\n",(0,t.jsx)(n.li,{children:"Process memory (RSS, RSS Peak)"}),"\n",(0,t.jsx)(n.li,{children:"System memory (Total, Free)"}),"\n",(0,t.jsx)(n.li,{children:"CPU usage (User, Kernel, I/O Wait)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"context",children:"Context"}),"\n",(0,t.jsx)(n.p,{children:"Shows any contextual data associated with a particular variable, such as heap allocation statistics."}),"\n",(0,t.jsx)(n.h3,{id:"process",children:"Process"}),"\n",(0,t.jsx)(n.p,{children:"Provides process-wide metadata associated with the application/crash. This contains all trace-wide annotations, such as heap metadata/statistics."}),"\n",(0,t.jsx)(n.h3,{id:"kvs",children:"KVs"}),"\n",(0,t.jsxs)(n.p,{children:["Displays all key-value attributes associated with the application/crash. Some attributes are automatically generated, while others can be specified by the user via ptrace (refer to the ptrace documentation for more details). Examples of KVs include ",(0,t.jsx)(n.code,{children:"hostname"}),", ",(0,t.jsx)(n.code,{children:"uname"}),", ",(0,t.jsx)(n.code,{children:"process age"}),", and ",(0,t.jsx)(n.code,{children:"process tag/version"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"registers",children:"Registers"}),"\n",(0,t.jsx)(n.p,{children:"Lists all registers for the currently selected frame."}),"\n",(0,t.jsxs)(n.h3,{id:"pmap-entries",children:[(0,t.jsx)(n.code,{children:"Pmap"})," Entries"]}),"\n",(0,t.jsxs)(n.p,{children:["Shows the process map entries for the application (for example, from ",(0,t.jsx)(n.code,{children:"/proc/[]/maps"})," on Linux). The selected entry changes based on the variable selection (it corresponds to the entry containing the variable)."]}),"\n",(0,t.jsx)(n.h3,{id:"attached-files",children:"Attached Files"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Save a file to disk"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:":s"}),": Save all attached files to a specified directory"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It lists all files attached to the snapshot using ",(0,t.jsx)(n.code,{children:"ptrace"})," (refer to the ",(0,t.jsx)(n.code,{children:"ptrace"})," documentation for instructions). The metadata and full path of each file are displayed."]}),"\n",(0,t.jsx)(n.h3,{id:"classifiers",children:"Classifiers"}),"\n",(0,t.jsxs)(n.p,{children:["Displays the classification(s) of the crash, generated by ",(0,t.jsx)(n.code,{children:"ptrace"}),". Examples of classifications include segmentation violation, null dereference, and memory write error."]}),"\n",(0,t.jsx)(n.h3,{id:"kernel-frames",children:"Kernel Frames"}),"\n",(0,t.jsx)(n.p,{children:"Shows the stack of the most recent kernel frames for the current thread. Keep in mind that these frames were not necessarily executed after the thread's last user-space frame."}),"\n",(0,t.jsx)(n.h3,{id:"globaltls-variables",children:"Global/TLS Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Displays the variables with global and thread-local storage that were requested at the time of the trace using ",(0,t.jsx)(n.code,{children:"ptrace"})," (refer to the ",(0,t.jsx)(n.code,{children:"ptrace"})," documentation for instructions). Variables are organized into a hierarchy of ",(0,t.jsx)(n.code,{children:"[Thread (for TLS variables)] - [Object] - [Compilation Unit (CU)]"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"source-code-integration-1",children:"Source Code Integration"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open a source file in the configured editor"}),"\n",(0,t.jsx)(n.li,{children:"Center view on the last-executed line of the frame"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Shows the source code for the presently selected frame. Index jumping is supported, but regular expression searches are not. The initial line selected is the last-executed line of the frame."}),"\n",(0,t.jsx)(n.h3,{id:"annotations",children:"Annotations"}),"\n",(0,t.jsx)(n.p,{children:"Commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Jump to the annotation owner (Hydra refocuses on the thread, frame, or variable owning the annotation; Backtrace annotations are not jumpable.)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Lists all annotations contained in the snapshot, excluding JSON-type annotations. You can jump to a selected annotation by pressing ",(0,t.jsx)(n.strong,{children:"Enter"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"JSON-type annotations are shown in either the Process or Context router tabs. Refer to those sections for more details."}),"\n",(0,t.jsx)(n.h3,{id:"column-specification",children:"Column Specification"}),"\n",(0,t.jsx)(n.p,{children:"The following is the column specification for each pane, from left to right (panes with a single column or containing key-value lists are omitted):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Threads"}),"\n",(0,t.jsx)(n.li,{children:"Thread state: F (faulted), s (sleeping), S (stopped), D (disk), T (traced), Z (zombie), X (dead), ? (unknown)"}),"\n",(0,t.jsx)(n.li,{children:"TID"}),"\n",(0,t.jsx)(n.li,{children:"Basename of the object file of the top frame"}),"\n",(0,t.jsx)(n.li,{children:"Thread name"}),"\n",(0,t.jsx)(n.li,{children:"Thread's PID (Only appears for kernel-space core files)"}),"\n",(0,t.jsx)(n.li,{children:"Symbol of the top frame"}),"\n",(0,t.jsx)(n.li,{children:"Frames"}),"\n",(0,t.jsx)(n.li,{children:"Frame number"}),"\n",(0,t.jsx)(n.li,{children:"Symbol (or address if symbol resolution fails)"}),"\n",(0,t.jsx)(n.li,{children:"Source code location (directory/source file/line)"}),"\n",(0,t.jsx)(n.li,{children:"Signal information is shown under the faulting frame but does not follow the frames pane's column specifications."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>s});a(96540);var t=a(18215);const i={tabItem:"tabItem_Ymn6"};var r=a(74848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(96540),i=a(18215),r=a(23104),s=a(56347),o=a(205),l=a(57485),c=a(31682),d=a(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:i}}=e;return{value:n,label:a,attributes:t,default:i}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:i}=e,r=u(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,h]=m({queryString:a,groupId:i}),[x,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(a);return[i,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),f=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function y(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),i=o[a].value;i!==t&&(c(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,i.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(y,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(b,{...e,children:h(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);