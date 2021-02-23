(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return r}));var l=n(3),c=n(8),o=(n(0),n(222)),d={id:"sauce-connect-proxy",title:"Sauce Connect Proxy CLI",sidebar_label:"Sauce Connect Proxy"},u={unversionedId:"dev/cli/sauce-connect-proxy",id:"dev/cli/sauce-connect-proxy",isDocsHomePage:!1,title:"Sauce Connect Proxy CLI",description:"Sauce Connect Proxy provides several command-line arguments. The table below outlines all of the current flags you can use to specify Sauce Connect Proxy parameters.",source:"@site/docs/dev/cli/sauce-connect-proxy.md",slug:"/dev/cli/sauce-connect-proxy",permalink:"/dev/cli/sauce-connect-proxy",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/dev/cli/sauce-connect-proxy.md",version:"current",lastUpdatedBy:"kimsaucelabs",lastUpdatedAt:1610701319,sidebar_label:"Sauce Connect Proxy",sidebar:"someSidebar",previous:{title:"Espresso and XCUITest CLI Reference",permalink:"/dev/cli/espresso-xcuitest"},next:{title:"Contributing",permalink:"/contributing"}},a=[{value:"List of Sauce Connect Proxy Command-Line Arguments",id:"list-of-sauce-connect-proxy-command-line-arguments",children:[]},{value:"Developer-Only Command-Line Arguments",id:"developer-only-command-line-arguments",children:[]},{value:"Formatting Domains in Your Commands",id:"formatting-domains-in-your-commands",children:[]}],i={toc:a};function r(e){var t=e.components,n=Object(c.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(l.default)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sauce Connect Proxy provides several command-line arguments. The table below outlines all of the current flags you can use to specify Sauce Connect Proxy parameters."),Object(o.mdx)("p",null,"Some command-line arguments can be passed through a config file or an environment variable. When the same argument is passed through multiple methods, the order of precedence is as follows: Command Line Argument > Environment Variable > Config File."),Object(o.mdx)("p",null,"To ensure compatibility with these variables, make sure that you're using the latest version of Sauce Connect Proxy (",Object(o.mdx)("a",Object(l.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863"}),"download here"),")."),Object(o.mdx)("h2",{id:"list-of-sauce-connect-proxy-command-line-arguments"},"List of Sauce Connect Proxy Command-Line Arguments"),Object(o.mdx)("table",null,Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("strong",null,"Flag (Short)")),Object(o.mdx)("td",null,Object(o.mdx)("strong",null,"Flag (Long)")),Object(o.mdx)("td",null,Object(o.mdx)("strong",null,"Description"))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-u"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--user [username]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Sauce Labs username."),Object(o.mdx)("p",null,"You can also use the environment variable ",Object(o.mdx)("code",null,"SAUCE_USERNAME")," on the command line. For more info, see ",Object(o.mdx)("a",{href:"/secure-connections/sauce-connect/environment-variables"},"Environment Variables Used by Sauce Connect Proxy")," and ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921"},"Best Practice: Use Environment Variables for Authentication Credentials"),"."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-k"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--api-key [api-key]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Sauce Labs API key."),Object(o.mdx)("p",null,"You can also use the environment variable ",Object(o.mdx)("code",null,"SAUCE_ACCESS_KEY")," on the command line. For more info, see ",Object(o.mdx)("a",{href:"/secure-connections/sauce-connect/environment-variables"},"Environment Variables Used by Sauce Connect Proxy")," and ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921"},"Best Practice: Use Environment Variables for Authentication Credentials"),"."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-c"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--config-file [path]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Included as part of the Sauce Connect Proxy download package (sc.exe), ",Object(o.mdx)("strong",null,"config.yaml")," is the example configuration file to be used with the ",Object(o.mdx)("code",null,"--config-file")," command-line option. This is the local path to a YAML file containing Sauce Connect Proxy configuration. Download and review our ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/download/attachments/63475846/config.yml?version=2&modificationDate=1541880007875&api=v2"},"sample YAML file")," for more information."),Object(o.mdx)("p",null," Here is the order of precedence when the same argument is provided through multiple methods, with methods to the left having higher precedence: Command Line Argument > Environment Variable > Config File."),Object(o.mdx)("p",null,"In production environments, we recommend using a configuration file rather than command-line arguments for the following reasons:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",null,"Ability to track configuration changes"),Object(o.mdx)("li",null,"Easier to manage tunnel-domains and direct-domains options, which can get very long"),Object(o.mdx)("li",null,"Secure Sauce Connect credentials with tighter access control over the config file")))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-B"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--no-ssl-bump-domains"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Comma-separated list of domains. Requests, including hosts that match one of these domains, will not be SSL re-encrypted. See ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414353"},"Sauce Connect Proxy and SSL Certificate Bumping")," for more information about scenarios in which you would want to use this command."),Object(o.mdx)("p",null,"For more info, see ",Object(o.mdx)("a",{href:"/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands"},"Formatting Domains guidelines"),"."),Object(o.mdx)("p",null,"HTTP Header Injection is disabled for all HTTPS domains passed to ",Object(o.mdx)("code",null,"--no-ssl-bump-domains")," argument."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-N"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--no-proxy-caching"))),Object(o.mdx)("td",null,"Disables caching in Sauce Connect Proxy. All requests will be sent through the tunnel.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-M"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--max-missed-acks"))),Object(o.mdx)("td",null,"Sets the maximum amount of keepalive ACKs that can be missed before the client will trigger a reconnect. The default is 30.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-D"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--direct-domains [...]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Comma-separated list of domains. Requests, including hosts that match one of these domains, will be relayed directly through the Internet instead of through the Sauce Connect tunnel."),Object(o.mdx)("p",null,"For more info, see ",Object(o.mdx)("a",{href:"/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands"},"Formatting Domains guidelines"),"."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-t"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--tunnel-domains [...]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Inverse of ",Object(o.mdx)("code",null,"--direct-domains"),". Overrides ",Object(o.mdx)("code",null,"--direct-domains"),". Only requests for domains in this list will be sent through the Sauce Connect Proxy tunnel. For more info, see ",Object(o.mdx)("a",{href:"/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands"},"Formatting Domains guidelines"),"."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-v"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--verbose"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Enables verbose debugging. Use ",Object(o.mdx)("code",null,"-v")," to output HTTP headers. You can also use the",Object(o.mdx)("code",null," -vv")," (very verbose) option to output HTTP headers and KGP logs, however, it's meant for troubleshooting only. It's not for long-term use, nor should it be used in production. Running Sauce Connect Proxy with the very verbose",Object(o.mdx)("code",null," -vv")," option is system-resource demanding and will adversely affect Sauce Connect Proxy performance."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-F"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--fast-fail-regexps [...]"))),Object(o.mdx)("td",null,"Comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365877"},"Sauce Connect Proxy FAQs")," > ",Object(o.mdx)("strong",null,"How Can I Use Sauce Connect Proxy to Test Graceful Degradation"),"? for an example of using this command to test for application or site degradation based on missing assets or resources.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-i"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--tunnel-identifier [id]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Assigns an ",Object(o.mdx)("code",null,"id")," to a Sauce Connect Proxy tunnel. Future jobs will use this tunnel only when explicitly specified by the ",Object(o.mdx)("code",null,"tunnelIdentifier")," Capability in a Selenium client. Note that ",Object(o.mdx)("code",null,"id")," must be ASCII."),Object(o.mdx)("p",null,"For more information on using ",Object(o.mdx)("code",null,"--tunnel-identifier")," to run multiple Sauce Connect tunnels simultaneously, see ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717567"},"High Availability Sauce Connect Proxy Setup"),". For more information about the syntax for setting ",Object(o.mdx)("code",null,"tunnelIdentifier")," as a capability, see ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492"},"Test Configuration Options"),"."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-l"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--logfile [file]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Capture the Sauce Connect Proxy logs in `file` If a path is not specified in `file`, the default location of the `file` is the same location where the Sauce Connect executable can be found on your machine."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-P"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--se-port [port]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Sets the port on which Sauce Connect's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect's tunnel. This feature is disabled unless specified."),Object(o.mdx)("p",null,Object(o.mdx)("strong",null,"NOTE"),": Effective with Sauce Connect Proxy version 4.6.0, this feature is no longer enabled by default."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-p"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--proxy [host:port]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Proxy host and port that Sauce Connect Proxy should use to connect to the Sauce Labs REST API and test traffic. For more information about the ",Object(o.mdx)("code",null,"-p")," option and configuring Sauce Connect with other proxies, see ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562"},"Sauce Connect Proxy Setup with Additional Proxies"),"."),Object(o.mdx)("p",null,"As an alternative, you can also use environment variables ",Object(o.mdx)("code",null,"HTTP_PROXY"),", ",Object(o.mdx)("code",null,"http_proxy"),", ",Object(o.mdx)("code",null,"all_proxy"),", or ",Object(o.mdx)("code",null,"ALL_PROXY")," on the command line. For more information, see ",Object(o.mdx)("a",{href:"/secure-connections/sauce-connect/environment-variables"},"Environment Variables Used by Sauce Connect Proxy"),"."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-w"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--proxy-userpwd [user:pwd]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Username and password sent via basic authentication required to access the proxy configured with ",Object(o.mdx)("code",null,"-p (--proxy)"),". For more information about the ",Object(o.mdx)("code",null,"-w")," option and configuring Sauce Connect with other proxies, see ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562"},"Sauce Connect Proxy Setup with Additional Proxies"),"."),Object(o.mdx)("p",null,Object(o.mdx)("strong",null,"NOTE"),": Sauce Connect Proxy versions older than 4.6.1 do ",Object(o.mdx)("em",null,"not")," support the ",Object(o.mdx)("code",null,"-p")," option combined with ",Object(o.mdx)("code",null,"--pac"),". Update to the latest version here: ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863"},"Downloading Sauce Connect Proxy"),"."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--pac [url]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Proxy auto-configuration (PAC). Can be a http(s) or local file://URL. For more information about the ",Object(o.mdx)("code",null,"-pac")," option and configuring Sauce Connect with other proxies, see ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562"},"Sauce Connect Proxy Setup with Additional Proxies"),"."),Object(o.mdx)("p",null,"Absolute paths are required when specifying a local PAC file (e.g., file:///Users/JohnSmith/Desktop/MyPac.pac)."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--pac-auth [username:password@host:port]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Supplies PAC authentication string in format ",Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"username:password@host:port")),". This option can be used multiple times for each authenticated host in the PAC file."),Object(o.mdx)("p",null,"Option is only compatible with Sauce Connect Proxy client version 4.6.3+."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-T"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--proxy-tunnel"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Uses the proxy configured with",Object(o.mdx)("code",null," -p")," for the tunnel connection. For more information about the ",Object(o.mdx)("code",null,"-T")," option and configuring Sauce Connect with other proxies, see ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562"},"Sauce Connect Proxy Setup with Additional Proxies"),"."),Object(o.mdx)("p",null,"You'll need to use this option if you use a PAC file that contains Sauce Labs DNS names."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-s"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--shared-tunnel"))),Object(o.mdx)("td",null,"Allows other users of the tunnel owner to use the tunnel. For more information, visit the ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414547"},"Sharing Sauce Connect Proxy Tunnels - Extended Team Management")," page.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-x"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--rest-url [arg]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"By default, Sauce Connect Proxy connects to the US Virtual Device and Desktop Cloud (US-West-1). Use this option if you need to connect to a different Sauce Labs cloud (e.g., EU Virtual Device and Desktop Cloud or US Real Device Cloud)."),Object(o.mdx)("p",null,"For a full list of Sauce Connect Proxy endpoints, see ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints"},"Data Center Endpoints"),"."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-f"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--readyfile"))),Object(o.mdx)("td",null,"File that will be touched to indicate when the tunnel is ready.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-a"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--auth [host:port:user:pwd]"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Performs basic authentication when a URL on ",Object(o.mdx)("code",null,"host:port")," asks for a username and password. This option can be used multiple times. For examples, see ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=65607085"},"Using --auth with Sauce Connect Proxy"),"."),Object(o.mdx)("p",null,"Sauce Connect's ",Object(o.mdx)("code",null,"--auth")," flag will only send the header Authorization with a type of 'Basic'.  If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response."),Object(o.mdx)("p",null,"HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect, which means performing basic authentication in this way is disabled for all HTTPS domains passed to ",Object(o.mdx)("code",null,"--no-ssl-bump-domains"),"argument."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-z"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--log-stats [seconds]"))),Object(o.mdx)("td",null,"Logs statistics about HTTP traffic every ",Object(o.mdx)("code",null,"seconds"),". Information includes bytes transmitted, requests made, and responses received.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--max-logsize [bytes]"))),Object(o.mdx)("td",null,"Rotates log file after reaching ",Object(o.mdx)("code",null,"bytes")," size. Disabled by default.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--doctor"))),Object(o.mdx)("td",null,"Performs checks to detect possible misconfiguration or problems. Check out ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=65605320"},"Sauce Connect Proxy Debugging and Diagnostics with --doctor flag")," for more information about the errors that ",Object(o.mdx)("code",null,"--doctor")," will detect and how to resolve them. Please note that when using the ",Object(o.mdx)("code",null,"--doctor")," flag, place it at the end of your command for best results.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--no-autodetect"))),Object(o.mdx)("td",null,"Disables the auto-detection of proxy settings.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--version"))),Object(o.mdx)("td",null,"Displays version information and exit.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-X"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--scproxy-port [port]"))),Object(o.mdx)("td",null,"Sets port to use for the built-in HTTP proxy.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--cainfo [cainfo file]"))),Object(o.mdx)("td",null,"CA certificate bundle to use for verifying REST connections.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--capath [capath dir]"))),Object(o.mdx)("td",null,"Directory of CA certs to use for verifying REST connections.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--tunnel-cert public"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Requires that the certificates on the Sauce Labs internal tunnel Virtual Machine be signed by a Certificate Authority instead of self-signed certificates. See ",Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Change+Logs"},"Sauce Connect Proxy Change Logs")," for details."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--tunnel-cainfo [cainfo file]"))),Object(o.mdx)("td",null,"CA certificate bundle to use for verifying tunnel connections.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--tunnel-capath [capath dir]"))),Object(o.mdx)("td",null,"Directory of CA certificates to use for verifying tunnel connections.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--scproxy-read-limit [bytes per second]"))),Object(o.mdx)("td",null,"Rates limit reads in scproxy to X bytes per second. This option can be used to adjust local network transfer rate in order not to overload the tunnel connection.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--scproxy-write-limit [bytes per second]"))),Object(o.mdx)("td",null,"Rates limit writes in scproxy to X bytes per second. This option can be used to adjust local network transfer rate in order not to overload the tunnel connection.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--dns [server[,server..]]"))),Object(o.mdx)("td",null,"Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon. Example: ",Object(o.mdx)("code",null,"--dns 8.8.8.8,8.8.4.4:53"),".")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--no-remove-colliding-tunnels"))),Object(o.mdx)("td",null,"By default, colliding tunnels will be removed when Sauce Connect is starting up. Use this option to prevent removal of identified tunnels with the same name or any other default tunnels. Jobs will be distributed across all tunnels, enabling load balancing and high availability.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-d"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--pidfile [file]"))),Object(o.mdx)("td",null,"Specifies the file in which to write the Sauce Connect Proxy process ID. This is useful for programmatically stopping Sauce Connect.",Object(o.mdx)("p",null,"Sauce Connect Proxy makes a best effort but cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--metrics-address=address"))),Object(o.mdx)("td",null,"Defines host:port for the internal web server used to expose client side metrics (default is ",Object(o.mdx)("code",null,"localhost:8888"),").")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-h"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--help"))),Object(o.mdx)("td",null,"Displays the help text.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--extra-info '[\"inject_job_id\":true]'"))),Object(o.mdx)("td",null,Object(o.mdx)("p",null,"Injects job id and tunnel id as HTTP request headers."),Object(o.mdx)("p",null,"HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy. Header Injection is disabled for all HTTPS domains passed to ",Object(o.mdx)("code",null,"--no-ssl-bump-domains")," argument."))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--ocsp log-only"))),Object(o.mdx)("td",null,"OCSP tunnel certificate validation command that logs errors only; it will not stop Sauce Connect from connecting to a tunnel.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--ocsp attempt"))),Object(o.mdx)("td",null,'Sets an OCSP tunnel certificate validation "soft-fail" policy that allows Sauce Connect to run unless OCSP server returns a \u201crevoked\u201d status (e.g., timeouts, unknown status). It will not stop Sauce Connect from connecting to a tunnel. Connection to OCSP server will be set to time out after 5 seconds.')),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--ocsp strict"))),Object(o.mdx)("td",null,'Sets an OCSP tunnel certificate validation "hard-fail" policy that blocks Sauce Connect from running unless the OCSP server returns a \u201cgood\u201d status (e.g., timeouts, revoked certificate, unknown status). It will stop Sauce Connect from connecting to a tunnel. Connection to OCSP server will be set to time out after 10 seconds.')),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--no-ocsp-verify"))),Object(o.mdx)("td",null,"OCSP tunnel certificate validation command that allows you to bypass OCSP checks."))),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"NOTE"),": OCSP supports the following Sauce Connect flags: ",Object(o.mdx)("inlineCode",{parentName:"p"},"--kgp-host"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"--kgp-port"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"--proxy"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"--pac"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"--no-autodetect"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"--proxy-tunnel"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"--tunnel-cainfo"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"--tunnel-capath"),". More information: ",Object(o.mdx)("a",Object(l.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365729"}),"Sauce Connect Proxy Certificate Handling"),"."),Object(o.mdx)("h2",{id:"developer-only-command-line-arguments"},"Developer-Only Command-Line Arguments"),Object(o.mdx)("p",null,"The following command-line arguments are only to be used when explicitly requested by our Support team."),Object(o.mdx)("table",null,Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("strong",null,"Flag (Short)")),Object(o.mdx)("td",null,Object(o.mdx)("strong",null,"Flag (Long)")),Object(o.mdx)("td",null,Object(o.mdx)("strong",null,"Description"))),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--no-cert-verify"))),Object(o.mdx)("td",null,"Disables certificate verification for tunnel/KGP connections.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--no-http-cert-verify"))),Object(o.mdx)("td",null,"Disables certificate verification for HTTP connections.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-r"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--reconnect [seconds]"))),Object(o.mdx)("td",null,"Maximum time in seconds to wait between tunnel reconnect attempts.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--vm-version"))),Object(o.mdx)("td",null,"Requests a specific tunnel VM version.")),Object(o.mdx)("tr",null,Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"-o"))),Object(o.mdx)("td",null,Object(o.mdx)("sub",null,Object(o.mdx)("code",null,"--output-config"))),Object(o.mdx)("td",null,"Writes all configuration options as JSON to ",Object(o.mdx)("code",null,"stdout"),". This flag is used by our Jenkins plugin and is not intended to be used by end users."))),Object(o.mdx)("h2",{id:"formatting-domains-in-your-commands"},"Formatting Domains in Your Commands"),Object(o.mdx)("p",null,"Here are some guidelines to follow when formatting domains within your commands:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Make sure your comma-separated list of domains doesn't include any spaces. For example, ",Object(o.mdx)("inlineCode",{parentName:"li"},"mydomain.com,saucelabs.com,mysite.com"),", instead of ",Object(o.mdx)("inlineCode",{parentName:"li"},"mydomain.com, saucelabs.com, mysite.com")),Object(o.mdx)("li",{parentName:"ul"},"Use only the domain name; no need to precede it with ",Object(o.mdx)("inlineCode",{parentName:"li"},"http:")," or ",Object(o.mdx)("inlineCode",{parentName:"li"},"https:")),Object(o.mdx)("li",{parentName:"ul"},'Prefix a domain name with "',Object(o.mdx)("inlineCode",{parentName:"li"},'*."')," or simply ",Object(o.mdx)("inlineCode",{parentName:"li"},'"."')," to match all its subdomains. For example, you could refer to both ",Object(o.mdx)("inlineCode",{parentName:"li"},"wiki.saucelabs.com")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"my.saucelabs.com"),' with "',Object(o.mdx)("inlineCode",{parentName:"li"},'*.saucelabs.com"')," or",Object(o.mdx)("inlineCode",{parentName:"li"},' ".saucelabs.com"'),". Enclose the argument in quotes to prevent shell expansion of asterisk."),Object(o.mdx)("li",{parentName:"ul"},"If you don't want any domains to be SSL re-encrypted, you can specify ",Object(o.mdx)("inlineCode",{parentName:"li"},"all")," with the argument (i.e., ",Object(o.mdx)("inlineCode",{parentName:"li"},"-B all")," or ",Object(o.mdx)("inlineCode",{parentName:"li"},"--no-ssl-bump-domains all"),")"),Object(o.mdx)("li",{parentName:"ul"},"WebSockets are not compatible with SSL bumping; you'll need to disable SSL Bumping for WebSocket domains")))}r.isMDXComponent=!0},222:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return r})),n.d(t,"MDXProvider",(function(){return b})),n.d(t,"mdx",(function(){return j})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return s}));var l=n(0),c=n.n(l);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,c=function(e,t){if(null==e)return{};var n,l,c={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var r=c.a.createContext({}),s=function(e){return function(t){var n=m(t.components);return c.a.createElement(e,d({},t,{components:n}))}},m=function(e){var t=c.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=m(e.components);return c.a.createElement(r.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),r=m(n),s=l,b=r["".concat(d,".").concat(s)]||r[s]||x[s]||o;return n?c.a.createElement(b,a(a({ref:t},u),{},{components:n})):c.a.createElement(b,a({ref:t},u))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,d=new Array(o);d[0]=O;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:l,d[1]=u;for(var i=2;i<o;i++)d[i]=n[i];return c.a.createElement.apply(null,d)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);