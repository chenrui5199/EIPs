(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{809:function(e,t,a){"use strict";a.r(t);var n=a(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This EIP defines Ethereum Node Records, an open format for p2p connectivity information.")]),e._v(" "),a("h1",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Ethereum nodes discover each other through the node discovery protocol. The purpose of\nthat protocol is relaying node identity public keys (on the secp256k1 curve), their IP\naddress and two port numbers. No other information can be relayed.")]),e._v(" "),a("p",[e._v("This specification seeks to lift the restrictions of the discovery v4 protocol by defining\na flexible format, the "),a("em",[e._v("node record")]),e._v(", for connectivity-related information. Node records\ncan be relayed through a future version of the node discovery protocol. They can also be\nrelayed through arbitrary other mechanisms such as DNS, ENS, a devp2p subprotocol, etc.")]),e._v(" "),a("p",[e._v("Node records improve cryptographic agility and handling of protocol upgrades. A record can\ncontain information about arbitrary transport protocols and public key material associated\nwith them.")]),e._v(" "),a("p",[e._v("Another goal of the new format is to provide authoritative updates of connectivity\ninformation. If a node changes its endpoint and publishes a new record, other nodes should\nbe able to determine which record is newer.")]),e._v(" "),a("h1",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("The components of a node record are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("signature")]),e._v(": cryptographic signature of record contents")]),e._v(" "),a("li",[a("code",[e._v("seq")]),e._v(": The sequence number, a 64-bit unsigned integer. Nodes should increase the number\nwhenever the record changes and republish the record.")]),e._v(" "),a("li",[e._v("The remainder of the record consists of arbitrary key/value pairs")])]),e._v(" "),a("p",[e._v("A record's signature is made and validated according to an "),a("em",[e._v("identity scheme")]),e._v(". The identity\nscheme is also responsible for deriving a node's address in the DHT.")]),e._v(" "),a("p",[e._v("The key/value pairs must be sorted by key and must be unique, i.e. any key may be present\nonly once. The keys can technically be any byte sequence, but ASCII text is preferred. Key\nnames in the table below have pre-defined meaning.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Key")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("id")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v('name of identity scheme, e.g. "v4"')])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("secp256k1")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("compressed secp256k1 public key, 33 bytes")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("ip")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("IPv4 address, 4 bytes")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("tcp")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("TCP port, big endian integer")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("udp")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("UDP port, big endian integer")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("ip6")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("IPv6 address, 16 bytes")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("tcp6")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("IPv6-specific TCP port, big endian integer")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("udp6")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("IPv6-specific UDP port, big endian integer")])])])]),e._v(" "),a("p",[e._v("All keys except "),a("code",[e._v("id")]),e._v(" are optional, including IP addresses and ports. A record without\nendpoint information is still valid as long as its signature is valid. If no "),a("code",[e._v("tcp6")]),e._v(" /\n"),a("code",[e._v("udp6")]),e._v(" port is provided, the "),a("code",[e._v("tcp")]),e._v(" / "),a("code",[e._v("udp")]),e._v(" port applies to both IP addresses. Declaring\nthe same port number in both "),a("code",[e._v("tcp")]),e._v(", "),a("code",[e._v("tcp6")]),e._v(" or "),a("code",[e._v("udp")]),e._v(", "),a("code",[e._v("udp6")]),e._v(" should be avoided but doesn't\nrender the record invalid.")]),e._v(" "),a("h3",{attrs:{id:"rlp-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rlp-encoding"}},[e._v("#")]),e._v(" RLP Encoding")]),e._v(" "),a("p",[e._v("The canonical encoding of a node record is an RLP list of "),a("code",[e._v("[signature, seq, k, v, ...]")]),e._v(".\nThe maximum encoded size of a node record is 300 bytes. Implementations should reject\nrecords larger than this size.")]),e._v(" "),a("p",[e._v("Records are signed and encoded as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("content   = [seq, k, v, ...]\nsignature = sign(content)\nrecord    = [signature, seq, k, v, ...]\n")])])]),a("h3",{attrs:{id:"text-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-encoding"}},[e._v("#")]),e._v(" Text Encoding")]),e._v(" "),a("p",[e._v("The textual form of a node record is the base64 encoding of its RLP representation,\nprefixed by "),a("code",[e._v("enr:")]),e._v(". Implementations should use the "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc4648#section-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL-safe base64 alphabet"),a("OutboundLink")],1),e._v("\nand omit padding characters.")]),e._v(" "),a("h3",{attrs:{id:"v4-identity-scheme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v4-identity-scheme"}},[e._v("#")]),e._v(' "v4" Identity Scheme')]),e._v(" "),a("p",[e._v('This specification defines a single identity scheme to be used as the default until other\nschemes are defined by further EIPs. The "v4" scheme is backwards-compatible with the\ncryptosystem used by Node Discovery v4.')]),e._v(" "),a("ul",[a("li",[e._v("To sign record "),a("code",[e._v("content")]),e._v(" with this scheme, apply the keccak256 hash function (as used by\nthe EVM) to "),a("code",[e._v("content")]),e._v(", then create a signature of the hash. The resulting 64-byte\nsignature is encoded as the concatenation of the "),a("code",[e._v("r")]),e._v(" and "),a("code",[e._v("s")]),e._v(" signature values (the\nrecovery ID "),a("code",[e._v("v")]),e._v(" is omitted).")]),e._v(" "),a("li",[e._v('To verify a record, check that the signature was made by the public key in the\n"secp256k1" key/value pair of the record.')]),e._v(" "),a("li",[e._v("To derive a node address, take the keccak256 hash of the uncompressed public key.")])]),e._v(" "),a("h1",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The format is meant to suit future needs in two ways:")]),e._v(" "),a("ul",[a("li",[e._v("Adding new key/value pairs: This is always possible and doesn't require implementation\nconsensus. Existing clients will accept any key/value pairs regardless of whether they\ncan interpret their content.")]),e._v(" "),a("li",[e._v("Adding identity schemes: these need implementation consensus because the network won't\naccept the signature otherwise. To introduce a new identity scheme, propose an EIP and\nget it implemented. The scheme can be used as soon as most clients accept it.")])]),e._v(" "),a("p",[e._v('The size of a record is limited because records are relayed frequently and may be included\nin size-constrained protocols such as DNS. A record containing a IPv4 address, when signed\nusing the "v4" scheme occupies roughly 120 bytes, leaving plenty of room for additional\nmetadata.')]),e._v(" "),a("p",[e._v("You might wonder about the need for so many pre-defined keys related to IP addresses and\nports. This need arises because residential and mobile network setups often put IPv4\nbehind NAT while IPv6 traffic—if supported—is directly routed to the same host. Declaring\nboth address types ensures a node is reachable from IPv4-only locations and those\nsupporting both protocols.")]),e._v(" "),a("h1",{attrs:{id:"test-vectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-vectors"}},[e._v("#")]),e._v(" Test Vectors")]),e._v(" "),a("p",[e._v("This is an example record containing the IPv4 address "),a("code",[e._v("127.0.0.1")]),e._v(" and UDP port "),a("code",[e._v("30303")]),e._v(".\nThe node ID is "),a("code",[e._v("a448f24c6d18e575453db13171562b71999873db5b286df957af199ec94617f7")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("enr:-IS4QHCYrYZbAKWCBRlAy5zzaDZXJBGkcnh4MHcBFZntXNFrdvJjX04jRzjzCBOonrkTfj499SZuOh8R33Ls8RRcy5wBgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQPKY0yuDUmstAHYpMa2_oxVtw0RW_QAdpzBQA8yWM0xOIN1ZHCCdl8\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('The record is signed using the "v4" identity scheme using sequence number '),a("code",[e._v("1")]),e._v(" and this\nprivate key:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("b71c71a67e1177ad4e901695e1b4b9ee17ae16c6668d313eac2f96dbcda3f291\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The RLP structure of the record is:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[\n  7098ad865b00a582051940cb9cf36836572411a47278783077011599ed5cd16b76f2635f4e234738f30813a89eb9137e3e3df5266e3a1f11df72ecf1145ccb9c,\n  01,\n  "id",\n  "v4",\n  "ip",\n  7f000001,\n  "secp256k1",\n  03ca634cae0d49acb401d8a4c6b6fe8c55b70d115bf400769cc1400f3258cd3138,\n  "udp",\n  765f,\n]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h1",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);