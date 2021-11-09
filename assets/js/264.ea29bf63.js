(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{662:function(e,t,a){"use strict";a.r(t);var i=a(46),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("Enforce a maximum size limit ("),a("code",[e._v("max_initcode_size")]),e._v(") of "),a("code",[e._v("49152")]),e._v(" ("),a("code",[e._v("0xc000")]),e._v(") for "),a("code",[e._v("initcode")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Enforce a maximum size limit ("),a("code",[e._v("max_initcode_size")]),e._v(") for "),a("code",[e._v("initcode")]),e._v(". If the size of "),a("code",[e._v("initcode")]),e._v(" exceeds "),a("code",[e._v("max_initcode_size")]),e._v(", then contract creation fails with an out of gas error.")]),e._v(" "),a("p",[e._v("Since "),a("RouterLink",{attrs:{to:"/eip-170.html"}},[e._v("EIP-170")]),e._v(" was implemented, there has been a size limit of "),a("code",[e._v("24576")]),e._v(" ("),a("code",[e._v("0x6000")]),e._v(") on contract code. We propose to also limit the size of executable code to "),a("code",[e._v("2x")]),e._v(" the above limit, i.e. "),a("code",[e._v("49152")]),e._v(" ("),a("code",[e._v("0xc000")]),e._v(").")],1),e._v(" "),a("p",[e._v("This also leads to two nice properties:")]),e._v(" "),a("ul",[a("li",[e._v("instruction offset in code fits 16-bit value,")]),e._v(" "),a("li",[e._v("code size fits 16-bit value.")])]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("When a client executes "),a("code",[e._v("initcode")]),e._v(", the client has to perform a jumpdest analysis. In some cases, the client also performs a "),a("code",[e._v("hash")]),e._v(" of the code:")]),e._v(" "),a("ul",[a("li",[e._v("To use as a key in a mapping containing result of a jumpdest analysis")]),e._v(" "),a("li",[e._v("To use for address calculation within "),a("code",[e._v("CREATE2")]),e._v(".")])]),e._v(" "),a("p",[e._v("The work performed during a jumpdest analysis scales linearly with the size of the code. Currently, a transaction can expand the memory once, and reuse the same memory segment (with minor modifications) to force the client to perform a lot of analysis/hashing, leading to slow block processing.")]),e._v(" "),a("p",[e._v("Historically, this was exploited in June 2017, precipitating the 1.6.5-patch release of "),a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/releases/tag/v1.6.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("geth"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The work performed during address calculation within "),a("code",[e._v("CREATE2")]),e._v(" is charged in proportion with size of the code.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("There are three situations where this is applicable:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("CREATE")]),e._v(",")]),e._v(" "),a("li",[a("code",[e._v("CREATE2")]),e._v(",")]),e._v(" "),a("li",[e._v("creation using a transaction with empty receiver.")])]),e._v(" "),a("p",[e._v("In all these (and future) cases, the EVM should fail with Out Of Gas error if the code has a length more than "),a("code",[e._v("max_initcode_size")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("TBA")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v('This EIP requires a "network upgrade", since it modifies consenus-rules.')]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("p",[e._v("For client implementations, this EIP makes attacks based on jumpdest-analysis or hashing of code less problematic, so should increase the robustness of clients.")]),e._v(" "),a("p",[e._v("For layer 2, this EIP introduces failure-modes where there previously were none. There "),a("em",[e._v("could")]),e._v(" exist factory-contracts which deploy multi-level contract hierarchies, such that the code for multiple contracts are included in the initcode of the first contract. The author(s) of this EIP are not aware of any such contracts.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("Test cases should include the following cases,")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("CREATE")]),e._v("/"),a("code",[e._v("CREATE2")]),e._v("/"),a("code",[e._v("tx create")]),e._v(" with "),a("code",[e._v("initcode_size")]),e._v(" at "),a("code",[e._v("max_initcode_size")])]),e._v(" "),a("li",[a("code",[e._v("CREATE")]),e._v("/"),a("code",[e._v("CREATE2")]),e._v("/"),a("code",[e._v("tx create")]),e._v(" with "),a("code",[e._v("initcode_size")]),e._v(" at "),a("code",[e._v("max_initcode_size+1")])])]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("TBA")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);