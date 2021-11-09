(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{1197:function(e,t,a){"use strict";a.r(t);var o=a(46),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This EIP describes the format of Whisper messages within the ÐΞVp2p Wire Protocol. This EIP should substitute the "),a("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/Whisper-Wire-Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("existing specification"),a("OutboundLink")],1),e._v(". More detailed documentation on Whisper could be found "),a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/wiki/Whisper",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("It is necessary to specify the standard for Whisper messages in order to ensure forward compatibility of different Whisper clients.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("All Whisper messages sent as ÐΞVp2p Wire Protocol packets should be RLP-encoded arrays of data containing two objects: integer packet code followed by another object (whose type depends on the packet code).")]),e._v(" "),a("p",[e._v("If Whisper node does not support a particular packet code, it should just ignore the packet without generating any error.")]),e._v(" "),a("h3",{attrs:{id:"packet-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packet-codes"}},[e._v("#")]),e._v(" Packet Codes")]),e._v(" "),a("p",[e._v("The message codes reserved for Whisper protocol: 0 - 127. Messages with unknown codes must be ignored, for forward compatibility of future versions.")]),e._v(" "),a("p",[e._v("The Whisper sub-protocol should support the following packet codes:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("EIP")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Int Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td"),e._v(" "),a("td",[e._v("Status")]),e._v(" "),a("td",[e._v("0")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[e._v("Messages")]),e._v(" "),a("td",[e._v("1")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[e._v("PoW Requirement")]),e._v(" "),a("td",[e._v("2")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[e._v("Bloom Filter")]),e._v(" "),a("td",[e._v("3")])]),e._v(" "),a("tr",[a("td",[e._v("-------")]),e._v(" "),a("td",[e._v("----------------------------")]),e._v(" "),a("td",[e._v("-----------")])])])]),e._v(" "),a("p",[e._v("The following message codes are optional, but they are reserved for specific purpose.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("EIP")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Int Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td"),e._v(" "),a("td",[e._v("P2P Request")]),e._v(" "),a("td",[e._v("126")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[e._v("P2P Message")]),e._v(" "),a("td",[e._v("127")])]),e._v(" "),a("tr",[a("td",[e._v("-------")]),e._v(" "),a("td",[e._v("----------------------------")]),e._v(" "),a("td",[e._v("-----------")])])])]),e._v(" "),a("h3",{attrs:{id:"packet-format-and-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packet-format-and-usage"}},[e._v("#")]),e._v(" Packet Format and Usage")]),e._v(" "),a("p",[a("strong",[e._v("Status")]),e._v(" ["),a("code",[e._v("0")]),e._v("]")]),e._v(" "),a("p",[e._v("This packet contains two objects: integer message code (0x00) followed by a list of values: integer version, float PoW requirement, and bloom filter, in this order. The bloom filter parameter is optional; if it is missing or nil, the node is considered to be full node (i.e. accepts all messages). The format of PoW and bloom filter please see below (message codes 2 and 3).")]),e._v(" "),a("p",[e._v("Status message should be sent after the initial handshake and prior to any other messages.")]),e._v(" "),a("p",[a("strong",[e._v("Messages")]),e._v(" ["),a("code",[e._v("1")]),e._v(", "),a("code",[e._v("whisper_envelopes")]),e._v("]")]),e._v(" "),a("p",[e._v("This packet contains two objects: integer message code (0x01) followed by a list (possibly empty) of Whisper Envelopes.")]),e._v(" "),a("p",[e._v("This packet is used for sending the standard Whisper envelopes.")]),e._v(" "),a("p",[a("strong",[e._v("PoW Requirement")]),e._v(" ["),a("code",[e._v("2")]),e._v(", "),a("code",[e._v("PoW")]),e._v("]")]),e._v(" "),a("p",[e._v("This packet contains two objects: integer message code (0x02) followed by a single floating point value of PoW. This value is the IEEE 754 binary representation of 64-bit floating point number. Values of qNAN, sNAN, INF and -INF are not allowed. Negative values are also not allowed.")]),e._v(" "),a("p",[e._v("This packet is used by Whisper nodes for dynamic adjustment of their individual PoW requirements. Recipient of this message should no longer deliver the sender messages with PoW lower than specified in this message.")]),e._v(" "),a("p",[e._v("PoW is defined as average number of iterations, required to find the current BestBit (the number of leading zero bits in the hash), divided by message size and TTL:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("PoW = (2**BestBit) / (size * TTL)\n")])])]),a("p",[e._v("PoW calculation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("fn short_rlp(envelope) = rlp of envelope, excluding env_nonce field.\nfn pow_hash(envelope, env_nonce) = sha3(short_rlp(envelope) ++ env_nonce)\nfn pow(pow_hash, size, ttl) = 2**leading_zeros(pow_hash) / (size * ttl)\n")])])]),a("p",[e._v("where size is the size of the full RLP-encoded envelope.")]),e._v(" "),a("p",[a("strong",[e._v("Bloom Filter")]),e._v(" ["),a("code",[e._v("3")]),e._v(", "),a("code",[e._v("bytes")]),e._v("]")]),e._v(" "),a("p",[e._v("This packet contains two objects: integer message code (0x03) followed by a byte array of arbitrary size.")]),e._v(" "),a("p",[e._v("This packet is used by Whisper nodes for sharing their interest in messages with specific topics.")]),e._v(" "),a("p",[e._v("The Bloom filter is used to identify a number of topics to a peer without compromising (too much) privacy over precisely what topics are of interest. Precise control over the information content (and thus efficiency of the filter) may be maintained through the addition of bits.")]),e._v(" "),a("p",[e._v("Blooms are formed by the bitwise OR operation on a number of bloomed topics. The bloom function takes the topic and projects them onto a 512-bit slice. At most, three bits are marked for each bloomed topic.")]),e._v(" "),a("p",[e._v("The projection function is defined as a mapping from a 4-byte slice S to a 512-bit slice D; for ease of explanation, S will dereference to bytes, whereas D will dereference to bits.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("LET D[*] = 0\nFOREACH i IN { 0, 1, 2 } DO\nLET n = S[i]\nIF S[3] & (2 ** i) THEN n += 256\nD[n] = 1\nEND FOR\n")])])]),a("p",[e._v("OPTIONAL")]),e._v(" "),a("p",[a("strong",[e._v("P2P Request")]),e._v(" ["),a("code",[e._v("126")]),e._v(", "),a("code",[e._v("whisper_envelope")]),e._v("]")]),e._v(" "),a("p",[e._v("This packet contains two objects: integer message code (0x7E) followed by a single Whisper Envelope.")]),e._v(" "),a("p",[e._v("This packet is used for sending Dapp-level peer-to-peer requests, e.g. Whisper Mail Client requesting old messages from the Whisper Mail Server.")]),e._v(" "),a("p",[a("strong",[e._v("P2P Message")]),e._v(" ["),a("code",[e._v("127")]),e._v(", "),a("code",[e._v("whisper_envelope")]),e._v("]")]),e._v(" "),a("p",[e._v("This packet contains two objects: integer message code (0x7F) followed by a single Whisper Envelope.")]),e._v(" "),a("p",[e._v("This packet is used for sending the peer-to-peer messages, which are not supposed to be forwarded any further. E.g. it might be used by the Whisper Mail Server for delivery of old (expired) messages, which is otherwise not allowed.")]),e._v(" "),a("h3",{attrs:{id:"whisper-envelope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whisper-envelope"}},[e._v("#")]),e._v(" Whisper Envelope")]),e._v(" "),a("p",[e._v("Envelopes are RLP-encoded structures of the following format:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[ Expiry, TTL, Topic, Data, Nonce ]\n")])])]),a("p",[a("code",[e._v("Expiry")]),e._v(": 4 bytes (UNIX time in seconds).")]),e._v(" "),a("p",[a("code",[e._v("TTL")]),e._v(": 4 bytes (time-to-live in seconds).")]),e._v(" "),a("p",[a("code",[e._v("Topic")]),e._v(": 4 bytes of arbitrary data.")]),e._v(" "),a("p",[a("code",[e._v("Data")]),e._v(": byte array of arbitrary size (contains encrypted message).")]),e._v(" "),a("p",[a("code",[e._v("Nonce")]),e._v(": 8 bytes of arbitrary data (used for PoW calculation).")]),e._v(" "),a("h3",{attrs:{id:"contents-of-data-field-of-the-message-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents-of-data-field-of-the-message-optional"}},[e._v("#")]),e._v(" Contents of Data Field of the Message (Optional)")]),e._v(" "),a("p",[e._v("This section outlines the optional description of Data Field to set up an example. Later it may be moved to a separate EIP.")]),e._v(" "),a("p",[e._v("It is only relevant if you want to decrypt the incoming message, but if you only want to send a message, any other format would be perfectly valid and must be forwarded to the peers.")]),e._v(" "),a("p",[e._v("Data field contains encrypted message of the Envelope. In case of symmetric encryption, it also contains appended Salt (a.k.a. AES Nonce, 12 bytes). Plaintext (unencrypted) payload consists of the following concatenated fields: flags, auxiliary field, payload, padding and signature (in this sequence).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("flags: 1 byte; first two bits contain the size of auxiliary field, third bit indicates whether the signature is present.\n\nauxiliary field: up to 4 bytes; contains the size of payload.\n\npayload: byte array of arbitrary size (may be zero).\n\npadding: byte array of arbitrary size (may be zero).\n\nsignature: 65 bytes, if present.\n\nsalt: 12 bytes, if present (in case of symmetric encryption).\n")])])]),a("p",[e._v("Those unable to decrypt the message data are also unable to access the signature. The signature, if provided, is the ECDSA signature of the Keccak-256 hash of the unencrypted data using the secret key of the originator identity. The signature is serialised as the concatenation of the "),a("code",[e._v("R")]),e._v(", "),a("code",[e._v("S")]),e._v(" and "),a("code",[e._v("V")]),e._v(" parameters of the SECP-256k1 ECDSA signature, in that order. "),a("code",[e._v("R")]),e._v(" and "),a("code",[e._v("S")]),e._v(" are both big-endian encoded, fixed-width 256-bit unsigned. "),a("code",[e._v("V")]),e._v(" is an 8-bit big-endian encoded, non-normalised and should be either 27 or 28.")]),e._v(" "),a("p",[e._v("The padding field was introduced in order to align the message size, since message size alone might reveal important metainformation. Padding can be arbitrary size. However, it is recommended that the size of Data Field (excuding the Salt) before encryption (i.e. plain text) should be factor of 256 bytes.")]),e._v(" "),a("h3",{attrs:{id:"payload-encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-encryption"}},[e._v("#")]),e._v(" Payload Encryption")]),e._v(" "),a("p",[e._v("Asymmetric encryption uses the standard Elliptic Curve Integrated Encryption Scheme with SECP-256k1 public key.")]),e._v(" "),a("p",[e._v("Symmetric encryption uses AES GCM algorithm with random 96-bit nonce.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Packet codes 0x00 and 0x01 are already used in all Whisper versions.")]),e._v(" "),a("p",[e._v("Packet code 0x02 will be necessary for the future development of Whisper. It will provide possiblitity to adjust the PoW requirement in real time. It is better to allow the network to govern itself, rather than hardcode any specific value for minimal PoW requirement.")]),e._v(" "),a("p",[e._v("Packet code 0x03 will be necessary for scalability of the network. In case of too much traffic, the nodes will be able to request and receive only the messages they are interested in.")]),e._v(" "),a("p",[e._v("Packet codes 0x7E and 0x7F may be used to implement Whisper Mail Server and Client. Without P2P messages it would be impossible to deliver the old messages, since they will be recognized as expired, and the peer will be disconnected for violating the Whisper protocol. They might be useful for other purposes when it is not possible to spend time on PoW, e.g. if a stock exchange will want to provide live feed about the latest trades.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This EIP is compatible with Whisper version 6. Any client which does not implement certain packet codes should gracefully ignore the packets with those codes. This will ensure the forward compatibility.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("The golang implementation of Whisper (v.6) already uses packet codes 0x00 - 0x03. Parity's implementation of v.6 will also use codes 0x00 - 0x03. Codes 0x7E and 0x7F are reserved, but still unused and left for custom implementation of Whisper Mail Server.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);