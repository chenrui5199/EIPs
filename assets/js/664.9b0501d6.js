(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{1085:function(t,e,a){"use strict";a.r(e);var n=a(46),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("When an Ethereum Provider becomes connected or disconnected, it will emit a "),a("code",[t._v("connect")]),t._v("/"),a("code",[t._v("disconnect")]),t._v(" event.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v('The Provider is said to be “connected” when it can service RPC requests to at least one chain. The Provider is said to be “disconnected” when it cannot service RPC requests to any chain at all. When the Provider switches from a "connected" state to a "disconnected" state, it will emit a '),a("code",[t._v("connect")]),t._v(' event. When the Provider switches from a "disconnected" state to a "connected" state, it will emit a '),a("code",[t._v("disconnect")]),t._v(" event.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("When an application is hooked up to an Ethereum provider, there is value in having the application be alerted of connect/disconnect events that may occur so the application can appropriately inform the user of the situation. It is left up to the application to decide whether to listen in on these events, and how to handle them.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("h3",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),a("h4",{attrs:{id:"connected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connected"}},[t._v("#")]),t._v(" Connected")]),t._v(" "),a("p",[t._v("The Provider is considered "),a("code",[t._v("connected")]),t._v(" when it is able to service RPC requests to at least one chain.")]),t._v(" "),a("h4",{attrs:{id:"disconnected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disconnected"}},[t._v("#")]),t._v(" Disconnected")]),t._v(" "),a("p",[t._v("The Provider is considered "),a("code",[t._v("disconnected")]),t._v(" when it is unable to service RPC requests to any chain.")]),t._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("h4",{attrs:{id:"connect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[t._v("#")]),t._v(" "),a("code",[t._v("connect")])]),t._v(" "),a("p",[t._v("The Provider "),a("strong",[t._v("MUST")]),t._v(" emit a "),a("code",[t._v("connect")]),t._v(" event to all attached "),a("RouterLink",{attrs:{to:"/zh/eip-2700.html"}},[t._v("EIP-2700")]),t._v(" listeners if it transitions from a "),a("code",[t._v("disconnected")]),t._v(" state to a "),a("code",[t._v("connected")]),t._v(" state. All attached listeners "),a("strong",[t._v("MUST")]),t._v(" be called with the parameter "),a("code",[t._v("{ chainId }")]),t._v(". "),a("code",[t._v("chainId")]),t._v(" "),a("strong",[t._v("MUST")]),t._v(" specify the integer ID of the connected chain encoded as a hexadecimal string. If the Provider supports the "),a("code",[t._v("eth_chainId")]),t._v(" JSON-RPC method or a derivation of it, then the "),a("code",[t._v("chainId")]),t._v(" "),a("strong",[t._v("MUST")]),t._v(" match the return value of "),a("code",[t._v("eth_chainId")]),t._v(". The Provider "),a("strong",[t._v("MAY")]),t._v(" call the attached listeners in any order.")],1),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("This EIP is mostly a retrospective EIP meaning it codifies an already existing specification so there isn’t a lot of room for improving things such as by having a connect/disconnect event per chain.")]),t._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),a("p",[t._v("The relationship between Ethereum Provider and client is a trusted one, where it is assumed that the user implicitly trusts the Ethereum Provider which is how it managed to get injected into the client, or the client expressly pulled in a connection to it.")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"appendix-i-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-i-examples"}},[t._v("#")]),t._v(" Appendix I: Examples")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// connect")]),t._v("\nprovider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" chainId "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Provider connected to: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("chainId"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);