(window.webpackJsonp=window.webpackJsonp||[]).push([[778],{1205:function(t,e,a){"use strict";a.r(e);var r=a(46),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("Include "),a("code",[t._v("eth_chainId")]),t._v(" method in "),a("code",[t._v("eth_")]),t._v("-namespaced JSON-RPC methods.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("eth_chainId")]),t._v(" method should return a single STRING result for an integer value in hexadecimal format, describing the currently configured "),a("code",[t._v("CHAIN_ID")]),t._v(" value used for signing replay-protected transactions, introduced by "),a("RouterLink",{attrs:{to:"/zh/eip-155.html"}},[t._v("EIP-155")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("Currently although we can use "),a("code",[t._v("net_version")]),t._v(" RPC call to get the current network ID, there's no RPC for querying the chain ID. This makes it impossible to determine the current actual blockchain using the RPC.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("h3",{attrs:{id:"eth-chainid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-chainid"}},[t._v("#")]),t._v(" "),a("code",[t._v("eth_chainId")])]),t._v(" "),a("p",[t._v("Returns the currently configured chain ID, a value used in replay-protected transaction signing as introduced by "),a("RouterLink",{attrs:{to:"/zh/eip-155.html"}},[t._v("EIP-155")]),t._v(".")],1),t._v(" "),a("p",[t._v("The chain ID returned should always correspond to the information in the current known head block. This ensures that caller of this RPC method can always use the retrieved information to sign transactions built on top of the head.")]),t._v(" "),a("p",[t._v("If the current known head block does not specify a chain ID, the client should treat any calls to "),a("code",[t._v("eth_chainId")]),t._v(" as though the method were not supported, and return a suitable error.")]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("None.")]),t._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("QUANTITY")]),t._v(" - integer of the current chain ID.")]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":83}\'')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Result")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("83")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x3d"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 61")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("An ETH/ETC client can accidentally connect to an ETC/ETH RPC endpoint without knowing it unless it tries to sign a transaction or it fetch a transaction that is known to have signed with a chain ID. This has since caused trouble for application developers, such as MetaMask, to add multi-chain support.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("Not relevant.")]),t._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),a("p",[t._v("Consumers should prefer "),a("code",[t._v("eth_chainId")]),t._v(" over "),a("code",[t._v("net_version")]),t._v(", so that they can reliably identify chain they are communicating with.")]),t._v(" "),a("p",[t._v("Implementers should take care to implement "),a("code",[t._v("eth_chainId")]),t._v(" correctly and promote its use, since the chain ID is critical in replay attack prevention as described in "),a("RouterLink",{attrs:{to:"/zh/eip-155.html"}},[t._v("EIP-155")]),t._v(", and consumers will rely on it to identify the chain they are communicating with.")],1),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/paritytech/parity/pull/6329",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parity PR"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/pull/17617",target:"_blank",rel:"noopener noreferrer"}},[t._v("Geth PR"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ethereumproject/go-ethereum/pull/336",target:"_blank",rel:"noopener noreferrer"}},[t._v("Geth Classic PR"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("p",[t._v("Return value "),a("code",[t._v("QUANTITY")]),t._v(" adheres to standard JSON RPC hex value encoding, as documented in the "),a("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/JSON-RPC#hex-value-encoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ethereum Wiki"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);