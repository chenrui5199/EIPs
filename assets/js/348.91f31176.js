(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{753:function(e,t,a){"use strict";a.r(t);var o=a(46),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Disallow new code starting with the "),a("code",[e._v("0xEF")]),e._v(" byte to be deployed. Code already existing in the account trie starting with "),a("code",[e._v("0xEF")]),e._v(" byte is not affected semantically by this change.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Contracts conforming to the EVM Object Format (EOF) are going to be validated at deploy time. In order to guarantee that every EOF-formatted contract in the state is valid, we need to prevent already deployed (and not validated) contracts from being recognized as such format. This will be achieved by choosing a byte sequence for the "),a("em",[e._v("magic")]),e._v(" that doesn't exist in any of the already deployed contracts. To prevent the growth of the search space and to limit the analysis to the contracts existing before this fork, we disallow the starting byte of the format (the first byte of the magic).")]),e._v(" "),a("p",[e._v("Should the EVM Object Format proposal not be deployed in the future, the "),a("em",[e._v("magic")]),e._v(" can be used by other features depending on versioning. In the case versioning becomes obsolete, it is simple to roll this back by allowing contracts starting with the "),a("code",[e._v("0xEF")]),e._v(" byte to be deployed again.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("After "),a("code",[e._v("block.number == HF_BLOCK")]),e._v(" new contract creation (via create transaction, "),a("code",[e._v("CREATE")]),e._v(" or "),a("code",[e._v("CREATE2")]),e._v(" instructions) results in an exceptional abort if the "),a("em",[e._v("code")]),e._v("'s first byte is "),a("code",[e._v("0xEF")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("initcode")]),e._v(" is the code executed in the context of the "),a("em",[e._v("create")]),e._v(" transaction, "),a("code",[e._v("CREATE")]),e._v(", or "),a("code",[e._v("CREATE2")]),e._v(" instructions. The "),a("em",[e._v("initcode")]),e._v(" returns "),a("em",[e._v("code")]),e._v(" (via the "),a("code",[e._v("RETURN")]),e._v(' instruction), which is inserted into the account. See section 7 ("Contract Creation") in the Yellow Paper for more information.')]),e._v(" "),a("p",[e._v("The opcode "),a("code",[e._v("0xEF")]),e._v(" is currently an undefined instruction, therefore: "),a("em",[e._v("It pops no stack items and pushes no stack items, and it causes an exceptional abort when executed.")]),e._v(" This means "),a("em",[e._v("initcode")]),e._v(" or already deployed "),a("em",[e._v("code")]),e._v(" starting with this instruction will continue to abort execution.")]),e._v(" "),a("p",[e._v("The exceptional abort due to "),a("em",[e._v("code")]),e._v(" starting with "),a("code",[e._v("0xEF")]),e._v(" behaves exactly the same as any other exceptional abort that can occur during "),a("em",[e._v("initcode")]),e._v(" execution, i.e. in case of abort all gas provided to a "),a("code",[e._v("CREATE*")]),e._v(" or create transaction is consumed.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("0xEF")]),e._v(" byte was chosen because it resembles "),a("strong",[e._v("E")]),e._v("xecutable "),a("strong",[e._v("F")]),e._v("ormat.")]),e._v(" "),a("p",[e._v("Contracts using unassigned opcodes are generally understood to be at risk of changing semantics. Hence using the unassigned "),a("code",[e._v("0xEF")]),e._v(" should have lesser effects, than choosing an assigned opcode, such as "),a("code",[e._v("0xFD")]),e._v(" ("),a("code",[e._v("REVERT")]),e._v("), "),a("code",[e._v("0xFE")]),e._v(" ("),a("code",[e._v("INVALID)")]),e._v(", or "),a("code",[e._v("0xFF")]),e._v(" ("),a("code",[e._v("SELFDESTRUCT")]),e._v("). Arguably while such contracts may not be very useful, they are still using valid opcodes.")]),e._v(" "),a("p",[e._v("Analysis in May 2021, on "),a("code",[e._v("18084433")]),e._v(" contracts in state, showed that there are 0 existing contracts starting with the "),a("code",[e._v("0xEF")]),e._v(" byte, as opposed to 1, 4, and 12 starting with "),a("code",[e._v("0xFD")]),e._v(", "),a("code",[e._v("0xFE")]),e._v(", and "),a("code",[e._v("0xFF")]),e._v(", respectively.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("Each test case below may be executed in 3 different contexts:")]),e._v(" "),a("ul",[a("li",[e._v("create transaction (no account code)")]),e._v(" "),a("li",[a("code",[e._v("CREATE")]),e._v(", with account code: "),a("code",[e._v("0x6000356000523660006000f0151560165760006000fd5b")]),e._v(" (Yul code: "),a("code",[e._v("mstore(0, calldataload(0)) if iszero(create(0, 0, calldatasize())) { revert(0, 0) }")]),e._v("),")]),e._v(" "),a("li",[a("code",[e._v("CREATE2")]),e._v(", with account code: "),a("code",[e._v("0x60003560005260003660006000f5151560185760006000fd5b")]),e._v(" (Yul code: "),a("code",[e._v("mstore(0, calldataload(0)) if iszero(create2(0, 0, calldatasize(), 0)) { revert(0, 0) }")]),e._v(")")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Case")]),e._v(" "),a("th",[e._v("Calldata")]),e._v(" "),a("th",[e._v("Expected result")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("deploy one byte "),a("code",[e._v("ef")])]),e._v(" "),a("td",[a("code",[e._v("0x60ef60005360016000f3")])]),e._v(" "),a("td",[e._v("new contract not deployed, transaction fails")])]),e._v(" "),a("tr",[a("td",[e._v("deploy two bytes "),a("code",[e._v("ef00")])]),e._v(" "),a("td",[a("code",[e._v("0x60ef60005360026000f3")])]),e._v(" "),a("td",[e._v("new contract not deployed, transaction fails")])]),e._v(" "),a("tr",[a("td",[e._v("deploy three bytes "),a("code",[e._v("ef0000")])]),e._v(" "),a("td",[a("code",[e._v("0x60ef60005360036000f3")])]),e._v(" "),a("td",[e._v("new contract not deployed, transaction fails")])]),e._v(" "),a("tr",[a("td",[e._v("deploy 32 bytes "),a("code",[e._v("ef00...00")])]),e._v(" "),a("td",[a("code",[e._v("0x60ef60005360206000f3")])]),e._v(" "),a("td",[e._v("new contract not deployed, transaction fails")])]),e._v(" "),a("tr",[a("td",[e._v("deploy one byte "),a("code",[e._v("fe")])]),e._v(" "),a("td",[a("code",[e._v("0x60fe60005360016000f3")])]),e._v(" "),a("td",[e._v("new contract deployed, transaction succeeds")])])])]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This is a breaking change given new code starting with the "),a("code",[e._v("0xEF")]),e._v(" byte will not be deployable, and contract creation will result in a failure. However, given bytecode is executed starting at its first byte, code deployed with "),a("code",[e._v("0xEF")]),e._v(" as the first byte is not executable anyway.")]),e._v(" "),a("p",[e._v("While this means no currently executable contract is affected, it does rejects deployment of new data contracts starting with the "),a("code",[e._v("0xEF")]),e._v(" byte.")]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("p",[e._v("The authors are not aware of any security or DoS risks posed by this change.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);