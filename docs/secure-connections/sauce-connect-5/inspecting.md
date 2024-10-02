---
id: inspecting
title: Traffic Inspection
---

This document describes how to inspect Sauce Connect 5 tunnel traffic using Wireshark or other network analysis tools.
This technique allows you to decrypt SSL/TLS traffic by using TLS keys logged by the Sauce Connect.
It does not require use of third-party proxies to reencrypt the traffic.

:::note
Inspecting tunnel traffic is available in **Sauce Connect Proxy 5.2** and later.
:::

## Prerequisites

- [Wireshark](https://www.wireshark.org) must be installed on your machine.
  Make sure you have the Wireshark command line tool `tshark` available.
- [Sauce Connect Proxy 5](/secure-connections/sauce-connect-5/installation) must be installed and configured.

## TLS Key Logging

There is more than one way to enable TLS key logging in Sauce Connect Proxy 5:

* Using the `SSLKEYLOGFILE=<path>` environment variable -
  enables logging of all TLS keys to the specified file,
  this includes both tunnel connections and connections to upstream servers.
* Using the `--tunnel-tls-keylog-file=<path>` flag - 
  enables logging of TLS keys for tunnel connections to Sauce Labs servers only.
* Using the `--http-tls-keylog-file=<path>` flag -
  enables logging of TLS keys for both tunnel connections and connections to upstream servers.

The following example demonstrates how to enable TLS key logging for tunnel connection only:

Command line:

```bash
sc run ... --tunnel-tls-keylog-file=/path/to/sslkeylog.log
```

Configuration file:

```yaml
tunnel-tls-keylog-file: /path/to/sslkeylog.log
```

## TLS Resigning

Setting `SSLKEYLOGFILE` will allow you to inspect HTTP requests made by the tunnel client.
If you want to inspect HTTPS requests, you need to run Sauce Connect Proxy with TLS resigning enabled. 
This is because Sauce Connect Proxy does not have access to the client's private keys, which are required to decrypt HTTPS traffic.

See [--tls-resign-domains](/dev/cli/sauce-connect-5/run/#tls-resign-domains) flag for more information on how to enable TLS resigning.

## Traffic Capture

Follow these steps to inspect tunnel traffic using Wireshark:

1. Start capturing traffic using `tshark` before starting the Sauce Connect Proxy:

   ```bash
   tshark -f "tcp port 443" -o "tls.keylog_file:/path/to/sslkeylog.log" -Y http2 -O http2 
   ```
   Replace `/path/to/sslkeylog.log` with the path to the file where the TLS keys are logged.
   Note that if tshark is started after the Sauce Connect Proxy, it will not be able to decrypt the traffic.

   The `tshark` command would try to guess the interface to capture traffic from.
   You can list available interfaces using `tshark -D`,
   and specify the interface using the `-i` flag ex. `tshark -i eth0 ...`.

1. Start the Sauce Connect Proxy with TLS key logging and TLS resigning enabled:

   ```bash
   sc run ... --tunnel-tls-keylog-file: /path/to/sslkeylog.log --tls-resign-domains all
   ```
1. You should see decrypted HTTP/2 frames in the output of `tshark` similar to the following:

   ```
   Frame 49414: 105 bytes on wire (840 bits), 105 bytes captured (840 bits) on interface en4, id 0
   Ethernet II, Src: CompalBroadb_e8:b4:78 (ac:22:05:e8:b4:78), Dst: BelkinIntern_cd:b6:0b (e8:9f:80:cd:b6:0b)
   Internet Protocol Version 4, Src: 185.94.26.247, Dst: 192.168.0.206
   Transmission Control Protocol, Src Port: 443, Dst Port: 53736, Seq: 12230, Ack: 20202, Len: 39
   Transport Layer Security
   HyperText Transfer Protocol 2
       Stream: PING, Stream ID: 0, Length 8
           Length: 8
           Type: PING (6)
           Flags: 0x00
               0000 000. = Unused: 0x00
               .... ...0 = ACK: False
           0... .... .... .... .... .... .... .... = Reserved: 0x0
           .000 0000 0000 0000 0000 0000 0000 0000 = Stream Identifier: 0
           Ping: 9db0139a0702fc8b
   
   Frame 49731: 155 bytes on wire (1240 bits), 155 bytes captured (1240 bits) on interface en4, id 0
   Ethernet II, Src: CompalBroadb_e8:b4:78 (ac:22:05:e8:b4:78), Dst: BelkinIntern_cd:b6:0b (e8:9f:80:cd:b6:0b)
   Internet Protocol Version 4, Src: 185.94.26.247, Dst: 192.168.0.206
   Transmission Control Protocol, Src Port: 443, Dst Port: 53735, Seq: 19179, Ack: 534008, Len: 89
   Transport Layer Security
   HyperText Transfer Protocol 2
       Stream: HEADERS, Stream ID: 29, Length 58
           Length: 58
           Type: HEADERS (1)
           Flags: 0x04, End Headers
               00.0 ..0. = Unused: 0x00
               ..0. .... = Priority: False
               .... 0... = Padded: False
               .... .1.. = End Headers: True
               .... ...0 = End Stream: False
           0... .... .... .... .... .... .... .... = Reserved: 0x0
           .000 0000 0000 0000 0000 0000 0001 1101 = Stream Identifier: 29
           [Pad Length: 0]
           Header Block Fragment: 4199415293553216f06a9790691af498961d07952b90f4dc69a67fdae4d97f0299415293553216f06a9790691af498961d07952b90f4dc69a67f
           [Header Length: 206]
           [Header Count: 5]
           Header: :authority: settings-win.data.microsoft.com:443
               Name Length: 10
               Name: :authority
               Value Length: 35
               Value: settings-win.data.microsoft.com:443
               :authority: settings-win.data.microsoft.com:443
               [Unescaped: settings-win.data.microsoft.com:443]
               Representation: Literal Header Field with Incremental Indexing - Indexed Name
               Index: 1
   ...
   ```
   
### Customizing Display Filters

WireShark provides a powerful display filter language that allows you to filter the traffic you want to inspect.
For example, to capture only [HTTP/2 HEADERS frames](https://httpwg.org/specs/rfc7540.html#HEADERS) in a format that is easier to further process, you can use the following command:

```bash
tshark -f "tcp port 443" -o "tls.keylog_file:/path/to/sslkeylog.log" \
-Y "http2.type == 1" -T fields -e frame.number -e http2.header.name -e http2.header.value
```

Output:

```
2889	:authority,:method,:path,:scheme,user-agent,accept,priority,x-forwarded-for,sl-forwarded-proto,x-forwarded-proto,sl-forwarded-host,x-forwarded-host,via,x-forwarded-url,accept-language,accept-encoding,content-type,pragma,cache-control,content-length	r11.o.lencr.org,POST,/,http,Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0,*/*,u=2,10.113.32.170,http,http,r11.o.lencr.org,r11.o.lencr.org,1.1 sc_server-dfcd2679b772ba704ff6,http://r11.o.lencr.org/,en-US,en;q=0.5,gzip, deflate,application/ocsp-request,no-cache,no-cache,85
2918	:authority,:method,:path,:scheme,x-forwarded-for,cache-control,x-forwarded-url,via,sl-forwarded-proto,x-forwarded-host,accept,accept-encoding,content-type,priority,sl-forwarded-host,user-agent,accept-language,x-forwarded-proto,pragma,content-length	r10.o.lencr.org,POST,/,http,10.113.32.170,no-cache,http://r10.o.lencr.org/,1.1 sc_server-dfcd2679b772ba704ff6,http,r10.o.lencr.org,*/*,gzip, deflate,application/ocsp-request,u=2,r10.o.lencr.org,Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0,en-US,en;q=0.5,http,no-cache,85
2924	:authority,:method,:path,:scheme,pragma,via,x-forwarded-host,accept,x-forwarded-url,priority,x-forwarded-for,sl-forwarded-proto,sl-forwarded-host,user-agent,accept-language,accept-encoding,content-type,cache-control,x-forwarded-proto,content-length	r10.o.lencr.org,POST,/,http,no-cache,1.1 sc_server-dfcd2679b772ba704ff6,r10.o.lencr.org,*/*,http://r10.o.lencr.org/,u=2,10.113.32.170,http,r10.o.lencr.org,Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0,en-US,en;q=0.5,gzip, deflate,application/ocsp-request,no-cache,http,85
2962	:authority,:method,sl-forwarded-proto,sl-forwarded-host,user-agent,via	saucedemo.com:443,GET,,saucedemo.com:443,Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0,1.1 sc_server-dfcd2679b772ba704ff6
...
```

Check [Wireshark display filter reference](https://www.wireshark.org/docs/dfref/h/http2.html) for more information on available filters for HTTP/2. 

### Using Tcpdump

You can also use `tcpdump` to capture traffic and save it to a file for later analysis.
Make sure to start `tcpdump` before starting the Sauce Connect Proxy.
The captured pcap file can be opened in `tshark` for inspection using the following command:

```bash
tshark -r /path/to/capture.pcap -o "tls.keylog_file:/path/to/sslkeylog.log" -Y http2 ...
```

This is particularly useful to experiment with different display filters and inspect the traffic in more detail.

## Additional Resources

* [Display Filter Reference: HyperText Transfer Protocol 2](https://www.wireshark.org/docs/dfref/h/http2.html)
* [Wireshark TLS](https://wiki.wireshark.org/TLS)
* [Wireshark tcpdump](https://www.wireshark.org/docs/wsug_html_chunked/AppToolstcpdump.html)
* [HTTP/2 spec](https://httpwg.org/specs/rfc7540.html)
