(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{1020:function(e,t,v){"use strict";v.r(t);var a=v(46),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"simple-summary"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),v("p",[e._v("This is an EIP that implements net gas metering. It's a combined version of "),v("RouterLink",{attrs:{to:"/zh/eip-1283.html"}},[e._v("EIP-1283")]),e._v(" and "),v("RouterLink",{attrs:{to:"/zh/eip-1706.html"}},[e._v("EIP-1706")]),e._v(", with a structured definition so as to make it interoperable with other gas changes such as "),v("RouterLink",{attrs:{to:"/zh/eip-1884.html"}},[e._v("EIP-1884")]),e._v(".")],1),e._v(" "),v("h2",{attrs:{id:"abstract"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),v("p",[e._v("This EIP provides a structured definition of net gas metering changes for "),v("code",[e._v("SSTORE")]),e._v(" opcode, enabling new usages for contract storage, and reducing excessive gas costs where it doesn’t match how most implementation works.")]),e._v(" "),v("p",[e._v("This is a combination of "),v("RouterLink",{attrs:{to:"/zh/eip-1283.html"}},[e._v("EIP-1283")]),e._v(" and "),v("RouterLink",{attrs:{to:"/zh/eip-1706.html"}},[e._v("EIP-1706")]),e._v(".")],1),e._v(" "),v("h2",{attrs:{id:"motivation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),v("p",[e._v("This EIP proposes a way for gas metering on "),v("code",[e._v("SSTORE")]),e._v(", using information that is more universally available to most implementations, and require as little change in implementation structures as possible.")]),e._v(" "),v("ul",[v("li",[e._v("Storage slot’s original value.")]),e._v(" "),v("li",[e._v("Storage slot’s current value.")]),e._v(" "),v("li",[e._v("Refund counter.")])]),e._v(" "),v("p",[e._v("Usages that benefits from this EIP’s gas reduction scheme includes:")]),e._v(" "),v("ul",[v("li",[e._v("Subsequent storage write operations within the same call frame. This includes reentry locks, same-contract multi-send, etc.")]),e._v(" "),v("li",[e._v("Exchange storage information between sub call frame and parent call frame, where this information does not need to be persistent outside of a transaction. This includes sub-frame error codes and message passing, etc.")])]),e._v(" "),v("p",[e._v('The original definition of EIP-1283 created a danger of a new kind of reentrancy attacks on existing contracts as Solidity by default grants a "stipend" of 2300 gas to simple transfer calls. This danger is easily mitigated if '),v("code",[e._v("SSTORE")]),e._v(" is not allowed in low gasleft state, without breaking the backward compatibility and the original intention of EIP-1283.")]),e._v(" "),v("p",[e._v("This EIP also replaces the original EIP-1283 value definitions of gas by parameters, so that it's more structured, and easier to define changes in the future.")]),e._v(" "),v("h2",{attrs:{id:"specification"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),v("p",[e._v("Define variables "),v("code",[e._v("SLOAD_GAS")]),e._v(", "),v("code",[e._v("SSTORE_SET_GAS")]),e._v(", "),v("code",[e._v("SSTORE_RESET_GAS")]),e._v(" and "),v("code",[e._v("SSTORE_CLEARS_SCHEDULE")]),e._v(". The old and new values for those variables are:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("SLOAD_GAS")]),e._v(": changed from "),v("code",[e._v("200")]),e._v(" to "),v("code",[e._v("800")]),e._v(".")]),e._v(" "),v("li",[v("code",[e._v("SSTORE_SET_GAS")]),e._v(": "),v("code",[e._v("20000")]),e._v(", not changed.")]),e._v(" "),v("li",[v("code",[e._v("SSTORE_RESET_GAS")]),e._v(": "),v("code",[e._v("5000")]),e._v(", not changed.")]),e._v(" "),v("li",[v("code",[e._v("SSTORE_CLEARS_SCHEDULE")]),e._v(": "),v("code",[e._v("15000")]),e._v(", not changed.")])]),e._v(" "),v("p",[e._v("Change the definition of EIP-1283 using those variables. The new specification, combining EIP-1283 and EIP-1706, will look like below. The terms "),v("em",[e._v("original value")]),e._v(", "),v("em",[e._v("current value")]),e._v(" and "),v("em",[e._v("new value")]),e._v(" are defined in EIP-1283.")]),e._v(" "),v("p",[e._v("Replace "),v("code",[e._v("SSTORE")]),e._v(" opcode gas cost calculation (including refunds) with the following logic:")]),e._v(" "),v("ul",[v("li",[e._v("If "),v("em",[e._v("gasleft")]),e._v(" is less than or equal to gas stipend, fail the current call frame with 'out of gas' exception.")]),e._v(" "),v("li",[e._v("If "),v("em",[e._v("current value")]),e._v(" equals "),v("em",[e._v("new value")]),e._v(" (this is a no-op), "),v("code",[e._v("SLOAD_GAS")]),e._v(" is deducted.")]),e._v(" "),v("li",[e._v("If "),v("em",[e._v("current value")]),e._v(" does not equal "),v("em",[e._v("new value")]),e._v(" "),v("ul",[v("li",[e._v("If "),v("em",[e._v("original value")]),e._v(" equals "),v("em",[e._v("current value")]),e._v(" (this storage slot has not been changed by the current execution context)\n"),v("ul",[v("li",[e._v("If "),v("em",[e._v("original value")]),e._v(" is 0, "),v("code",[e._v("SSTORE_SET_GAS")]),e._v(" is deducted.")]),e._v(" "),v("li",[e._v("Otherwise, "),v("code",[e._v("SSTORE_RESET_GAS")]),e._v(" gas is deducted. If "),v("em",[e._v("new value")]),e._v(" is 0, add "),v("code",[e._v("SSTORE_CLEARS_SCHEDULE")]),e._v(" gas to refund counter.")])])]),e._v(" "),v("li",[e._v("If "),v("em",[e._v("original value")]),e._v(" does not equal "),v("em",[e._v("current value")]),e._v(" (this storage slot is dirty), "),v("code",[e._v("SLOAD_GAS")]),e._v(" gas is deducted. Apply both of the following clauses.\n"),v("ul",[v("li",[e._v("If "),v("em",[e._v("original value")]),e._v(" is not 0\n"),v("ul",[v("li",[e._v("If "),v("em",[e._v("current value")]),e._v(" is 0 (also means that "),v("em",[e._v("new value")]),e._v(" is not 0), remove "),v("code",[e._v("SSTORE_CLEARS_SCHEDULE")]),e._v(" gas from refund counter.")]),e._v(" "),v("li",[e._v("If "),v("em",[e._v("new value")]),e._v(" is 0 (also means that "),v("em",[e._v("current value")]),e._v(" is not 0), add "),v("code",[e._v("SSTORE_CLEARS_SCHEDULE")]),e._v(" gas to refund counter.")])])]),e._v(" "),v("li",[e._v("If "),v("em",[e._v("original value")]),e._v(" equals "),v("em",[e._v("new value")]),e._v(" (this storage slot is reset)\n"),v("ul",[v("li",[e._v("If "),v("em",[e._v("original value")]),e._v(" is 0, add "),v("code",[e._v("SSTORE_SET_GAS - SLOAD_GAS")]),e._v(" to refund counter.")]),e._v(" "),v("li",[e._v("Otherwise, add "),v("code",[e._v("SSTORE_RESET_GAS - SLOAD_GAS")]),e._v(" gas to refund counter.")])])])])])])])]),e._v(" "),v("p",[e._v("An implementation should also note that with the above definition, if the implementation uses call-frame refund counter, the counter can go negative. If the implementation uses transaction-wise refund counter, the counter always stays positive.")]),e._v(" "),v("h2",{attrs:{id:"rationale"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),v("p",[e._v("This EIP mostly achieves what a transient storage tries to do ("),v("RouterLink",{attrs:{to:"/zh/eip-1087.html"}},[e._v("EIP-1087")]),e._v(" and "),v("RouterLink",{attrs:{to:"/zh/eip-1153.html"}},[e._v("EIP-1153")]),e._v('), but without the complexity of introducing the concept of "dirty maps", or an extra storage struct.')],1),e._v(" "),v("ul",[v("li",[e._v("We don't suffer from the optimization limitation of EIP-1087. EIP-1087 requires keeping a dirty map for storage changes, and implicitly makes the assumption that a transaction's storage changes are committed to the storage trie at the end of a transaction. This works well for some implementations, but not for others. After "),v("RouterLink",{attrs:{to:"/zh/eip-658.html"}},[e._v("EIP-658")]),e._v(", an efficient storage cache implementation would probably use an in-memory trie (without RLP encoding/decoding) or other immutable data structures to keep track of storage changes, and only commit changes at the end of a block. For them, it is possible to know a storage's original value and current value, but it is not possible to iterate over all storage changes without incurring additional memory or processing costs.")],1),e._v(" "),v("li",[e._v("It never costs more gas compared with the current scheme.")]),e._v(" "),v("li",[e._v("It covers all usages for a transient storage. Clients that are easy to implement EIP-1087 will also be easy to implement this specification. Some other clients might require a little bit extra refactoring on this. Nonetheless, no extra memory or processing cost is needed on runtime.")])]),e._v(" "),v("p",[e._v("Regarding "),v("code",[e._v("SSTORE")]),e._v(" gas cost and refunds, see Appendix for proofs of properties that this EIP satisfies.")]),e._v(" "),v("ul",[v("li",[e._v("For "),v("em",[e._v("absolute gas used")]),e._v(" (that is, actual "),v("em",[e._v("gas used")]),e._v(" minus "),v("em",[e._v("refund")]),e._v("), this EIP is equivalent to EIP-1087 for all cases.")]),e._v(" "),v("li",[e._v("For one particular case, where a storage slot is changed, reset to its original value, and then changed again, EIP-1283 would move more gases to refund counter compared with EIP-1087.")])]),e._v(" "),v("p",[e._v("Examine examples provided in EIP-1087's Motivation (with "),v("code",[e._v("SLOAD_GAS")]),e._v(" being "),v("code",[e._v("200")]),e._v("):")]),e._v(" "),v("ul",[v("li",[e._v("If a contract with empty storage sets slot 0 to 1, then back to 0, it will be charged "),v("code",[e._v("20000 + 200 - 19800 = 400")]),e._v(" gas.")]),e._v(" "),v("li",[e._v("A contract with empty storage that increments slot 0 5 times will be charged "),v("code",[e._v("20000 + 5 * 200 = 21000")]),e._v(" gas.")]),e._v(" "),v("li",[e._v("A balance transfer from account A to account B followed by a transfer from B to C, with all accounts having nonzero starting and ending balances, it will cost "),v("code",[e._v("5000 * 3 + 200 - 4800 = 10400")]),e._v(" gas.")])]),e._v(" "),v("p",[e._v('In order to keep in place the implicit reentrancy protection of existing contracts, transactions should not be allowed to modify state if the remaining gas is lower then the gas stipend given to "transfer"/"send" in Solidity. These are other proposed remediations and objections to implementing them:')]),e._v(" "),v("ul",[v("li",[e._v("Drop EIP-1283 and abstain from modifying "),v("code",[e._v("SSTORE")]),e._v(" cost\n"),v("ul",[v("li",[e._v("EIP-1283 is an important update")]),e._v(" "),v("li",[e._v("It was accepted and implemented on test networks and in clients.")])])]),e._v(" "),v("li",[e._v("Add a new call context that permits LOG opcodes but not changes to state.\n"),v("ul",[v("li",[e._v("Adds another call type beyond existing regular/staticcall")])])]),e._v(" "),v("li",[e._v("Raise the cost of "),v("code",[e._v("SSTORE")]),e._v(" to dirty slots to >=2300 gas\n"),v("ul",[v("li",[e._v("Makes net gas metering much less useful.")])])]),e._v(" "),v("li",[e._v("Reduce the gas stipend\n"),v("ul",[v("li",[e._v("Makes the stipend almost useless.")])])]),e._v(" "),v("li",[e._v("Increase the cost of writes to dirty slots back to 5000 gas, but add 4800 gas to the refund counter\n"),v("ul",[v("li",[e._v("Still doesn’t make the invariant explicit.")]),e._v(" "),v("li",[e._v("Requires callers to supply more gas, just to have it refunded")])])]),e._v(" "),v("li",[e._v("Add contract metadata specifying per-contract EVM version, and only apply "),v("code",[e._v("SSTORE")]),e._v(" changes to contracts deployed with the new version.")])]),e._v(" "),v("h2",{attrs:{id:"backwards-compatibility"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),v("p",[e._v("This EIP requires a hard fork to implement. No gas cost increase is anticipated, and many contracts will see gas reduction.")]),e._v(" "),v("p",[e._v("Performing "),v("code",[e._v("SSTORE")]),e._v(" has never been possible with less than 5000 gas, so it does not introduce incompatibility to the Ethereum mainnet. Gas estimation should account for this requirement.")]),e._v(" "),v("h2",{attrs:{id:"test-cases"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("Code")]),e._v(" "),v("th",[e._v("Used Gas")]),e._v(" "),v("th",[e._v("Refund")]),e._v(" "),v("th",[e._v("Original")]),e._v(" "),v("th",[e._v("1st")]),e._v(" "),v("th",[e._v("2nd")]),e._v(" "),v("th",[e._v("3rd")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v("0x60006000556000600055")])]),e._v(" "),v("td",[e._v("1612")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60006000556001600055")])]),e._v(" "),v("td",[e._v("20812")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60016000556000600055")])]),e._v(" "),v("td",[e._v("20812")]),e._v(" "),v("td",[e._v("19200")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60016000556002600055")])]),e._v(" "),v("td",[e._v("20812")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60016000556001600055")])]),e._v(" "),v("td",[e._v("20812")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60006000556000600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("15000")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60006000556001600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("4200")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60006000556002600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60026000556000600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("15000")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60026000556003600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td",[e._v("3")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60026000556001600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("4200")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60026000556002600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60016000556000600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("15000")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60016000556002600055")])]),e._v(" "),v("td",[e._v("5812")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x60016000556001600055")])]),e._v(" "),v("td",[e._v("1612")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x600160005560006000556001600055")])]),e._v(" "),v("td",[e._v("40818")]),e._v(" "),v("td",[e._v("19200")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("0x600060005560016000556000600055")])]),e._v(" "),v("td",[e._v("10818")]),e._v(" "),v("td",[e._v("19200")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("0")]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("0")])])])]),e._v(" "),v("h2",{attrs:{id:"implementation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),v("p",[e._v("To be added.")]),e._v(" "),v("h2",{attrs:{id:"appendix-proof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#appendix-proof"}},[e._v("#")]),e._v(" Appendix: Proof")]),e._v(" "),v("p",[e._v("Because the "),v("em",[e._v("storage slot's original value")]),e._v(" is defined as the value when a reversion happens on the "),v("em",[e._v("current transaction")]),e._v(", it's easy to see that call frames won't interfere "),v("code",[e._v("SSTORE")]),e._v(" gas calculation. So although the below proof is discussed without call frames, it applies to all situations with call frames. We will discuss the case separately for "),v("em",[e._v("original value")]),e._v(" being zero and not zero, and use "),v("em",[e._v("induction")]),e._v(" to prove some properties of "),v("code",[e._v("SSTORE")]),e._v(" gas cost.")]),e._v(" "),v("p",[v("em",[e._v("Final value")]),e._v(" is the value of a particular storage slot at the end of a transaction. "),v("em",[e._v("Absolute gas used")]),e._v(" is the absolute value of "),v("em",[e._v("gas used")]),e._v(" minus "),v("em",[e._v("refund")]),e._v(". We use "),v("code",[e._v("N")]),e._v(" to represent the total number of "),v("code",[e._v("SSTORE")]),e._v(" operations on a storage slot. For states discussed below, refer to "),v("em",[e._v("State Transition")]),e._v(" in "),v("em",[e._v("Explanation")]),e._v(" section.")]),e._v(" "),v("p",[e._v("Below we do the proof under the assumption that all parameters are unchanged, meaning "),v("code",[e._v("SLOAD_GAS")]),e._v(" is "),v("code",[e._v("200")]),e._v(". However, note that the proof still applies no matter how "),v("code",[e._v("SLOAD_GAS")]),e._v(" is changed.")]),e._v(" "),v("h3",{attrs:{id:"original-value-being-zero"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#original-value-being-zero"}},[e._v("#")]),e._v(" Original Value Being Zero")]),e._v(" "),v("p",[e._v("When "),v("em",[e._v("original value")]),e._v(" is 0, we want to prove that:")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Case I")]),e._v(": If the "),v("em",[e._v("final value")]),e._v(" ends up still being 0, we want to charge "),v("code",[e._v("200 * N")]),e._v(" gases, because no disk write is needed.")]),e._v(" "),v("li",[v("strong",[e._v("Case II")]),e._v(": If the "),v("em",[e._v("final value")]),e._v(" ends up being a non-zero value, we want to charge "),v("code",[e._v("20000 + 200 * (N-1)")]),e._v(" gas, because it requires writing this slot to disk.")])]),e._v(" "),v("h4",{attrs:{id:"base-case"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#base-case"}},[e._v("#")]),e._v(" Base Case")]),e._v(" "),v("p",[e._v("We always start at state A. The first "),v("code",[e._v("SSTORE")]),e._v(" can:")]),e._v(" "),v("ul",[v("li",[e._v("Go to state A: 200 gas is deducted. We satisfy "),v("em",[e._v("Case I")]),e._v(" because "),v("code",[e._v("200 * N == 200 * 1")]),e._v(".")]),e._v(" "),v("li",[e._v("Go to state B: 20000 gas is deducted. We satisfy "),v("em",[e._v("Case II")]),e._v(" because "),v("code",[e._v("20000 + 200 * (N-1) == 20000 + 200 * 0")]),e._v(".")])]),e._v(" "),v("h4",{attrs:{id:"inductive-step"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#inductive-step"}},[e._v("#")]),e._v(" Inductive Step")]),e._v(" "),v("ul",[v("li",[e._v("From A to A. The previous gas cost is "),v("code",[e._v("200 * (N-1)")]),e._v(". The current gas cost is "),v("code",[e._v("200 + 200 * (N-1)")]),e._v(". It satisfy "),v("em",[e._v("Case I")]),e._v(".")]),e._v(" "),v("li",[e._v("From A to B. The previous gas cost is "),v("code",[e._v("200 * (N-1)")]),e._v(". The current gas cost is "),v("code",[e._v("20000 + 200 * (N-1)")]),e._v(". It satisfy "),v("em",[e._v("Case II")]),e._v(".")]),e._v(" "),v("li",[e._v("From B to B. The previous gas cost is "),v("code",[e._v("20000 + 200 * (N-2)")]),e._v(". The current gas cost is "),v("code",[e._v("200 + 20000 + 200 * (N-2)")]),e._v(". It satisfy "),v("em",[e._v("Case II")]),e._v(".")]),e._v(" "),v("li",[e._v("From B to A. The previous gas cost is "),v("code",[e._v("20000 + 200 * (N-2)")]),e._v(". The current gas cost is "),v("code",[e._v("200 - 19800 + 20000 + 200 * (N-2)")]),e._v(". It satisfy "),v("em",[e._v("Case I")]),e._v(".")])]),e._v(" "),v("h3",{attrs:{id:"original-value-not-being-zero"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#original-value-not-being-zero"}},[e._v("#")]),e._v(" Original Value Not Being Zero")]),e._v(" "),v("p",[e._v("When "),v("em",[e._v("original value")]),e._v(" is not 0, we want to prove that:")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Case I")]),e._v(": If the "),v("em",[e._v("final value")]),e._v(" ends up unchanged, we want to charge "),v("code",[e._v("200 * N")]),e._v(" gases, because no disk write is needed.")]),e._v(" "),v("li",[v("strong",[e._v("Case II")]),e._v(": If the "),v("em",[e._v("final value")]),e._v(" ends up being zero, we want to charge "),v("code",[e._v("5000 - 15000 + 200 * (N-1)")]),e._v(" gas. Note that "),v("code",[e._v("15000")]),e._v(" is the refund in actual definition.")]),e._v(" "),v("li",[v("strong",[e._v("Case III")]),e._v(": If the "),v("em",[e._v("final value")]),e._v(" ends up being a changed non-zero value, we want to charge "),v("code",[e._v("5000 + 200 * (N-1)")]),e._v(" gas.")])]),e._v(" "),v("h4",{attrs:{id:"base-case-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#base-case-2"}},[e._v("#")]),e._v(" Base Case")]),e._v(" "),v("p",[e._v("We always start at state X. The first "),v("code",[e._v("SSTORE")]),e._v(" can:")]),e._v(" "),v("ul",[v("li",[e._v("Go to state X: 200 gas is deducted. We satisfy "),v("em",[e._v("Case I")]),e._v(" because "),v("code",[e._v("200 * N == 200 * 1")]),e._v(".")]),e._v(" "),v("li",[e._v("Go to state Y: 5000 gas is deducted. We satisfy "),v("em",[e._v("Case III")]),e._v(" because "),v("code",[e._v("5000 + 200 * (N-1) == 5000 + 200 * 0")]),e._v(".")]),e._v(" "),v("li",[e._v("Go to state Z: The absolute gas used is "),v("code",[e._v("5000 - 15000")]),e._v(" where 15000 is the refund. We satisfy "),v("em",[e._v("Case II")]),e._v(" because "),v("code",[e._v("5000 - 15000 + 200 * (N-1) == 5000 - 15000 + 200 * 0")]),e._v(".")])]),e._v(" "),v("h4",{attrs:{id:"inductive-step-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#inductive-step-2"}},[e._v("#")]),e._v(" Inductive Step")]),e._v(" "),v("ul",[v("li",[e._v("From X to X. The previous gas cost is "),v("code",[e._v("200 * (N-1)")]),e._v(". The current gas cost is "),v("code",[e._v("200 + 200 * (N-1)")]),e._v(". It satisfy "),v("em",[e._v("Case I")]),e._v(".")]),e._v(" "),v("li",[e._v("From X to Y. The previous gas cost is "),v("code",[e._v("200 * (N-1)")]),e._v(". The current gas cost is "),v("code",[e._v("5000 + 200 * (N-1)")]),e._v(". It satisfy "),v("em",[e._v("Case III")]),e._v(".")]),e._v(" "),v("li",[e._v("From X to Z. The previous gas cost is "),v("code",[e._v("200 * (N-1)")]),e._v(". The current absolute gas cost is "),v("code",[e._v("5000 - 15000 + 200 * (N-1)")]),e._v(". It satisfy "),v("em",[e._v("Case II")]),e._v(".")]),e._v(" "),v("li",[e._v("From Y to X. The previous gas cost is "),v("code",[e._v("5000 + 200 * (N-2)")]),e._v(". The absolute current gas cost is "),v("code",[e._v("200 - 4800 + 5000 + 200 * (N-2)")]),e._v(". It satisfy "),v("em",[e._v("Case I")]),e._v(".")]),e._v(" "),v("li",[e._v("From Y to Y. The previous gas cost is "),v("code",[e._v("5000 + 200 * (N-2)")]),e._v(". The current gas cost is "),v("code",[e._v("200 + 5000 + 200 * (N-2)")]),e._v(". It satisfy "),v("em",[e._v("Case III")]),e._v(".")]),e._v(" "),v("li",[e._v("From Y to Z. The previous gas cost is "),v("code",[e._v("5000 + 200 * (N-2)")]),e._v(". The current absolute gas cost is "),v("code",[e._v("200 - 15000 + 5000 + 200 * (N-2)")]),e._v(". It satisfy "),v("em",[e._v("Case II")]),e._v(".")]),e._v(" "),v("li",[e._v("From Z to X. The previous gas cost is "),v("code",[e._v("5000 - 15000 + 200 * (N-2)")]),e._v(". The current absolute gas cost is "),v("code",[e._v("200 + 10200 + 5000 - 15000 + 200 * (N-2)")]),e._v(". It satisfy "),v("em",[e._v("Case I")]),e._v(".")]),e._v(" "),v("li",[e._v("From Z to Y. The previous gas cost is "),v("code",[e._v("5000 - 15000 + 200 * (N-2)")]),e._v(". The current absolute gas cost is "),v("code",[e._v("200 + 15000 + 5000 - 15000 + 200 * (N-2)")]),e._v(". It satisfy "),v("em",[e._v("Case III")]),e._v(".")]),e._v(" "),v("li",[e._v("From Z to Z. The previous gas cost is "),v("code",[e._v("5000 - 15000 + 200 * (N-2)")]),e._v(". The current absolute gas cost is "),v("code",[e._v("200 + 5000 - 15000 + 200 * (N-2)")]),e._v(". It satisfy "),v("em",[e._v("Case II")]),e._v(".")])]),e._v(" "),v("h2",{attrs:{id:"copyright"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),v("p",[e._v("Copyright and related rights waived via "),v("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),v("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);