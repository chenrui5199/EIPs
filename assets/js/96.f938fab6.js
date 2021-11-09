(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{487:function(e,t,a){"use strict";a.r(t);var r=a(46),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("A standard to create WalletConnect URIs to initiate connections between applications and wallets.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This standard defines how the data to connect some application and a wallet can be encoded with a URI. This URI can then be shown either as a QR code or for mobile to mobile as a link.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[e._v("WalletConnect request URI with the following parameters:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('request       = "wc" ":" topic [ "@" version ][ "?" parameters ]\ntopic         = STRING\nversion       = 1*DIGIT\nparameters    = parameter *( "&" parameter )\nparameter     = key "=" value\nkey           = "bridge" / "key"\nvalue         = STRING\n')])])]),a("h3",{attrs:{id:"semantics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantics"}},[e._v("#")]),e._v(" Semantics")]),e._v(" "),a("p",[e._v("Required parameters are dependent on the Walletconnect protocol version which currently includes the "),a("code",[e._v("key")]),e._v(", hex string of symmetric key, and "),a("code",[e._v("bridge")]),e._v(", encoded url of the bridge used for establishing the connection.")]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wc:8a5e5bdc-a0e4-4702-ba63-8f1a5655744f@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The need for this ERC stems from the discussion to move away from JSON format used in the alpha version of the WalletConnect protocol which makes for very inneficient parsing of the intent of the QR code, making it easier to create better QR code parsers APIs for Wallets to implement. Also by using a URI instead of a JSON inside the QR-Code the Android Intent system can be leveraged.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ol",[a("li",[e._v("WalletConnect Technical Specification, https://docs.walletconnect.org/tech-spec")])]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);