(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1063:function(e,t,a){"use strict";a.r(t);var s=a(46),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("This EIP introduces a gas penalty for opcodes which access the account for trie non-existent accounts.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This EIP adds a gas penalty for accesses to the account trie, where the address being looked up does not exist. Non-existing accounts can be used in DoS attacks, since they bypass cache mechanisms, thus creating a large discrepancy between 'normal' mode of execution and 'worst-case' execution of an opcode.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("As the ethereum trie becomes more and more saturated, the number of disk lookups that a node is required to do in order to access a piece of state increases too. This means that checking e.g. "),a("code",[e._v("EXTCODEHASH")]),e._v(" of an account at block "),a("code",[e._v("5")]),e._v(" was "),a("em",[e._v("inherently")]),e._v(" a cheaper operation that it is at, say "),a("code",[e._v("8.5M")]),e._v(".")]),e._v(" "),a("p",[e._v("From an implementation perspective, a node can (and does) use various caching mechanisms to cope with the problem, but there's an inherent problem with caches: when they yield a 'hit', they're great, but when they 'miss', they're useless.")]),e._v(" "),a("p",[e._v("This is attackable. By forcing a node to lookup non-existent keys, an attacker can maximize the number of disk lookups. Sidenote: even if the 'non-existence' is cached, it's trivial to use a new non-existent key the next time, and never hit the same non-existent key again. Thus, caching 'non-existence' might be dangerous, since it will evict 'good' entries.")]),e._v(" "),a("p",[e._v("So far, the attempts to handle this problem has been in raising the gas cost, e.g. "),a("RouterLink",{attrs:{to:"/zh/eip-150.html"}},[e._v("EIP-150")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/eip-1884.html"}},[e._v("EIP-1884")]),e._v(".")],1),e._v(" "),a("p",[e._v("However, when determining gas-costs, a secondary problem that arises due to the large discrepancy between 'happy-path' and 'notorious path' -- how do we determine the pricing?")]),e._v(" "),a("ul",[a("li",[e._v("The 'happy-path', assuming all items are cached?\n"),a("ul",[a("li",[e._v("Doing so would that would underprice all trie-accesses, and could be DoS-attacked.")])])]),e._v(" "),a("li",[e._v("The 'normal' usage, based on benchmarks of actual usage?\n"),a("ul",[a("li",[e._v("This is basically what we do now, but that means that intentionally notorious executions are underpriced -- which constitutes a DoS vulnerability.")])])]),e._v(" "),a("li",[e._v("The 'paranoid' case: price everything as if caching did not exist?\n"),a("ul",[a("li",[e._v("This would severely harm basically every contract due to the gas-cost increase. Also, if the gas limits were raised in order to allow the same amount of computation as before, the notorious case could again be used for DoS attacks.")])])])]),e._v(" "),a("p",[e._v("From an engineering point of view, a node implementor is left with few options:")]),e._v(" "),a("ul",[a("li",[e._v("Implement bloom filters for existence. This is difficult, not least because of the problems of reorgs, and the fact that it's difficult to undo bloom filter modifications.")]),e._v(" "),a("li",[e._v("Implement flattened account databases. This is also difficult, both because of reorgs and also because it needs to be an "),a("em",[e._v("additional")]),e._v(" data structure aside from the "),a("code",[e._v("trie")]),e._v(" -- we need the "),a("code",[e._v("trie")]),e._v(" for consensus. So it's an extra data structure of around "),a("code",[e._v("15G")]),e._v(" that needs to be kept in check. This is currently being pursued by the Geth-team.")])]),e._v(" "),a("p",[e._v("This EIP proposes a mechanism to alleviate the situation.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("We define the constant "),a("code",[e._v("penalty")]),e._v(" as "),a("code",[e._v("TBD")]),e._v(" (suggested "),a("code",[e._v("2000")]),e._v(" gas).")]),e._v(" "),a("p",[e._v("For opcodes which access the account trie, whenever the operation is invoked targeting an "),a("code",[e._v("address")]),e._v(" which does not exist in the trie, then "),a("code",[e._v("penalty")]),e._v(" gas is deducted from the available "),a("code",[e._v("gas")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"detailed-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-specification"}},[e._v("#")]),e._v(" Detailed specification")]),e._v(" "),a("p",[e._v("These are the opcodes which triggers lookup into the main account trie:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Opcode")]),e._v(" "),a("th",[e._v("Affected")]),e._v(" "),a("th",[e._v("Comment")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("BALANCE")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[a("code",[e._v("balance(nonexistent_addr)")]),e._v(" would incur "),a("code",[e._v("penalty")])])]),e._v(" "),a("tr",[a("td",[e._v("EXTCODEHASH")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[a("code",[e._v("extcodehash(nonexistent_addr)")]),e._v(" would incur "),a("code",[e._v("penalty")])])]),e._v(" "),a("tr",[a("td",[e._v("EXTCODECOPY")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[a("code",[e._v("extcodecopy(nonexistent_addr)")]),e._v(" would incur "),a("code",[e._v("penalty")])])]),e._v(" "),a("tr",[a("td",[e._v("EXTCODESIZE")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[a("code",[e._v("extcodesize(nonexistent_addr)")]),e._v(" would incur "),a("code",[e._v("penalty")])])]),e._v(" "),a("tr",[a("td",[e._v("CALL")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("See details below about call variants")])]),e._v(" "),a("tr",[a("td",[e._v("CALLCODE")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("See details below about call variants")])]),e._v(" "),a("tr",[a("td",[e._v("DELEGATECALL")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("See details below about call variants")])]),e._v(" "),a("tr",[a("td",[e._v("STATICCALL")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("See details below about call variants")])]),e._v(" "),a("tr",[a("td",[e._v("SELFDESTRUCT")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("See details below.")])]),e._v(" "),a("tr",[a("td",[e._v("CREATE")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Create destination not explicitly settable, and assumed to be nonexistent already.")])]),e._v(" "),a("tr",[a("td",[e._v("CREATE2")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Create destination not explicitly settable, and assumed to be nonexistent already.")])])])]),e._v(" "),a("h3",{attrs:{id:"notes-on-call-derivatives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-call-derivatives"}},[e._v("#")]),e._v(" Notes on Call-derivatives")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("CALL")]),e._v(" triggers a lookup of the "),a("code",[e._v("CALL")]),e._v(" destination address. The base cost for "),a("code",[e._v("CALL")]),e._v(" is at "),a("code",[e._v("700")]),e._v(" gas. A few other characteristics determine the actual gas cost of a call:")]),e._v(" "),a("ol",[a("li",[e._v("If the "),a("code",[e._v("CALL")]),e._v(" (or "),a("code",[e._v("CALLCODE")]),e._v(") transfers value, an additional "),a("code",[e._v("9K")]),e._v(" is added as cost. 1.1 If the "),a("code",[e._v("CALL")]),e._v(" destination did not previously exist, an additional "),a("code",[e._v("25K")]),e._v(" gas is added to the cost.")])]),e._v(" "),a("p",[e._v("This EIP adds a second rule in the following way:")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("If the call does "),a("em",[e._v("not")]),e._v(" transfer value and the callee does "),a("em",[e._v("not")]),e._v(" exist, then "),a("code",[e._v("penalty")]),e._v(" gas is added to the cost.")])]),e._v(" "),a("p",[e._v("In the table below,")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("value")]),e._v(" means non-zero value transfer,")]),e._v(" "),a("li",[a("code",[e._v("!value")]),e._v(" means zero value transfer,")]),e._v(" "),a("li",[a("code",[e._v("dest")]),e._v(" means destination already exists, or is a "),a("code",[e._v("precompile")])]),e._v(" "),a("li",[a("code",[e._v("!dest")]),e._v(" means destination does not exist and is not a "),a("code",[e._v("precompile")])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Op")]),e._v(" "),a("th",[e._v("value,dest")]),e._v(" "),a("th",[e._v("value, !dest")]),e._v(" "),a("th",[e._v("!value, dest")]),e._v(" "),a("th",[e._v("!value, !dest")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("CALL")]),e._v(" "),a("td",[e._v("no change")]),e._v(" "),a("td",[e._v("no change")]),e._v(" "),a("td",[e._v("no change")]),e._v(" "),a("td",[a("code",[e._v("penalty")])])]),e._v(" "),a("tr",[a("td",[e._v("CALLCODE")]),e._v(" "),a("td",[e._v("no change")]),e._v(" "),a("td",[e._v("no change")]),e._v(" "),a("td",[e._v("no change")]),e._v(" "),a("td",[a("code",[e._v("penalty")])])]),e._v(" "),a("tr",[a("td",[e._v("DELEGATECALL")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("no change")]),e._v(" "),a("td",[a("code",[e._v("penalty")])])]),e._v(" "),a("tr",[a("td",[e._v("STATICCALL")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("no change")]),e._v(" "),a("td",[a("code",[e._v("penalty")])])])])]),e._v(" "),a("p",[e._v("Whether the rules of this EIP is to be applied for regular ether-sends in "),a("code",[e._v("transactions")]),e._v(" is TBD. See the 'Backwards Compatibility'-section for some more discussion on that topic.")]),e._v(" "),a("h3",{attrs:{id:"note-on-selfdestruct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-on-selfdestruct"}},[e._v("#")]),e._v(" Note on "),a("code",[e._v("SELFDESTRUCT")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SELFDESTRUCT")]),e._v(" opcode also triggers an account trie lookup of the "),a("code",[e._v("beneficiary")]),e._v(". However, due to the following reasons, it has been omitted from having a "),a("code",[e._v("penalty")]),e._v(" since it already costs "),a("code",[e._v("5K")]),e._v(" gas.")]),e._v(" "),a("h3",{attrs:{id:"clarifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clarifications"}},[e._v("#")]),e._v(" Clarifications:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("base")]),e._v(" costs of any opcodes are not modified by the EIP.")]),e._v(" "),a("li",[e._v("The opcode "),a("code",[e._v("SELFBALANCE")]),e._v(" is not modified by this EIP, regardless of whether the "),a("code",[e._v("self")]),e._v(" address exists or not.")])]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("With this scheme, we could continue to price these operations based on the 'normal' usage, but gain protection from attacks that try to maximize disk lookups/cache misses. This EIP does not modify anything regarding storage trie accesses, which might be relevant for a future EIP. However, there are a few crucial differences.")]),e._v(" "),a("ol",[a("li",[e._v("Storage tries are typically small, and there's a high cost to populate a storage trie with sufficient density for it to be in the same league as the account trie.")]),e._v(" "),a("li",[e._v("If an attacker wants to use an existing large storage trie, e.g. some popular token, he would typically have to make a "),a("code",[e._v("CALL")]),e._v(" to cause a lookup in that token -- something like "),a("code",[e._v("token.balanceOf(<nonexistent-address>)")]),e._v(". That adds quite a lot of extra gas-impediments, as each "),a("code",[e._v("CALL")]),e._v(" is another "),a("code",[e._v("700")]),e._v(" gas, plus gas for arguments to the "),a("code",[e._v("CALL")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"determining-the-penalty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#determining-the-penalty"}},[e._v("#")]),e._v(" Determining the "),a("code",[e._v("penalty")])]),e._v(" "),a("p",[e._v("A transaction with "),a("code",[e._v("10M")]),e._v(" gas can today cause ~"),a("code",[e._v("14K")]),e._v(" trie lookups.")]),e._v(" "),a("ul",[a("li",[e._v("A "),a("code",[e._v("penalty")]),e._v(" of "),a("code",[e._v("1000")]),e._v("would lower the number to ~"),a("code",[e._v("5800")]),e._v(" lookups, "),a("code",[e._v("41%")]),e._v(" of the original.")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("penalty")]),e._v(" of "),a("code",[e._v("2000")]),e._v("would lower the number to ~"),a("code",[e._v("3700")]),e._v(" lookups, "),a("code",[e._v("26%")]),e._v(" of the original.")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("penalty")]),e._v(" of "),a("code",[e._v("3000")]),e._v("would lower the number to ~"),a("code",[e._v("2700")]),e._v(" lookups, "),a("code",[e._v("20%")]),e._v(" of the original.")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("penalty")]),e._v(" of "),a("code",[e._v("4000")]),e._v("would lower the number to ~"),a("code",[e._v("2100")]),e._v(" lookups, "),a("code",[e._v("15%")]),e._v(" of the original.")])]),e._v(" "),a("p",[e._v("There exists a roofing function for the "),a("code",[e._v("penalty")]),e._v(". Since the "),a("code",[e._v("penalty")]),e._v(" is deducted from "),a("code",[e._v("gas")]),e._v(", that means that a malicious contract can always invoke a malicious relay to perform the trie lookup. Let's refer to this as the 'shielded relay' attack.")]),e._v(" "),a("p",[e._v("In such a scenario, the "),a("code",[e._v("malicious")]),e._v(" would spend "),a("code",[e._v("~750")]),e._v(" gas each call to "),a("code",[e._v("relay")]),e._v(", and would need to provide the "),a("code",[e._v("relay")]),e._v(" with at least "),a("code",[e._v("700")]),e._v(" gas to do a trie access.")]),e._v(" "),a("p",[e._v("Thus, the effective "),a("code",[e._v("cost")]),e._v(" would be on the order of "),a("code",[e._v("1500")]),e._v(". It can thus be argued that "),a("code",[e._v("penalty")]),e._v(" above "),a("code",[e._v("~800")]),e._v(" would not achieve better protection against trie-miss attacks.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This EIP requires a hard-fork.")]),e._v(" "),a("h3",{attrs:{id:"ether-transfers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ether-transfers"}},[e._v("#")]),e._v(" Ether transfers")]),e._v(" "),a("p",[e._v("A regular "),a("code",[e._v("transaction")]),e._v(" from one EOA to another, with value, is not affected.")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("transaction")]),e._v(" with "),a("code",[e._v("0")]),e._v(" value, to a destination which does not exist, would be. This scenario is highly unlikely to matter, since such a "),a("code",[e._v("transaction")]),e._v(" is useless -- even during success, all it would accomplish would be to spend some "),a("code",[e._v("gas")]),e._v(". With this EIP, it would potentially spend some more gas.")]),e._v(" "),a("h3",{attrs:{id:"layer-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layer-2"}},[e._v("#")]),e._v(" Layer 2")]),e._v(" "),a("p",[e._v("Regarding layer-2 backward compatibility, this EIP is a lot less disruptive than EIPs which modify the "),a("code",[e._v("base")]),e._v(" cost of an opcode. For state accesses, there are seldom legitimate scenarios where")]),e._v(" "),a("ol",[a("li",[e._v("A contract checks "),a("code",[e._v("BALANCE")]),e._v("/"),a("code",[e._v("EXTCODEHASH")]),e._v("/"),a("code",[e._v("EXTCODECOPY")]),e._v("/"),a("code",[e._v("EXTCODESIZE")]),e._v(" of another contract "),a("code",[e._v("b")]),e._v(", "),a("em",[e._v("and")]),e._v(",")]),e._v(" "),a("li",[e._v("If such "),a("code",[e._v("b")]),e._v(" does not exist, continues the execution")])]),e._v(" "),a("h4",{attrs:{id:"solidity-remote-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solidity-remote-calls"}},[e._v("#")]),e._v(" Solidity remote calls")]),e._v(" "),a("p",[e._v("Example: When a remote call is made in Solidity:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    recipient.invokeMethod(1)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("Solidity does a pre-flight "),a("code",[e._v("EXTCODESIZE")]),e._v(" on "),a("code",[e._v("recipient")]),e._v(".")]),e._v(" "),a("li",[e._v("If the pre-flight check returns "),a("code",[e._v("0")]),e._v(", then "),a("code",[e._v("revert(0,0)")]),e._v(" is executed, to stop the execution.")]),e._v(" "),a("li",[e._v("If the pre-flight check returns non-zero, then the execution continues and the "),a("code",[e._v("CALL")]),e._v(" is made.")])]),e._v(" "),a("p",[e._v("With this EIP in place, the 'happy-path' would work as previously, and the 'notorious'-path where "),a("code",[e._v("recipient")]),e._v(" does not exist would cost an extra "),a("code",[e._v("penalty")]),e._v(" gas, but the actual execution-flow would be unchanged.")]),e._v(" "),a("h4",{attrs:{id:"erc223"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erc223"}},[e._v("#")]),e._v(" ERC223")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ethereum/EIPs/issues/223",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERC223 Token Standard"),a("OutboundLink")],1),e._v(" is, at the time of writing, marked as 'Draft', but is deployed and in use on mainnet today.")]),e._v(" "),a("p",[e._v("The ERC specifies that when a token "),a("code",[e._v("transfer(_to,...)")]),e._v(" method is invoked, then:")]),e._v(" "),a("blockquote",[a("p",[e._v("This function must transfer tokens and invoke the function "),a("code",[e._v("tokenFallback (address, uint256, bytes)")]),e._v(" in "),a("code",[e._v("_to")]),e._v(", if "),a("code",[e._v("_to")]),e._v(" is a contract. ... NOTE: The recommended way to check whether the "),a("code",[e._v("_to")]),e._v(" is a contract or an address is to assemble the code of "),a("code",[e._v("_to")]),e._v(". If there is no code in "),a("code",[e._v("_to")]),e._v(", then this is an externally owned address, otherwise it's a contract.")])]),e._v(" "),a("p",[e._v("The reference implementations from "),a("a",{attrs:{href:"https://github.com/Dexaran/ERC223-token-standard/tree/development/token/ERC223",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dexaran"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/1bc923b6a222e79a90f20305a459b0ee779eb918/contracts/token/ERC721/ERC721.sol#L499",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenZeppelin"),a("OutboundLink")],1),e._v(" both implement the "),a("code",[e._v("isContract")]),e._v(" check using an "),a("code",[e._v("EXTCODESIZE")]),e._v(" invocation.")]),e._v(" "),a("p",[e._v("This scenario "),a("em",[e._v("could")]),e._v(" be affected, but in practice should not be. Let's consider the possibilities:")]),e._v(" "),a("ol",[a("li",[e._v("The "),a("code",[e._v("_to")]),e._v(" is a contract: Then "),a("code",[e._v("ERC223")]),e._v(" specifies that the function "),a("code",[e._v("tokenFallback(...)")]),e._v(" is invoked.\n"),a("ul",[a("li",[e._v("The gas expenditure for that call is at least"),a("code",[e._v("700")]),e._v(" gas.")]),e._v(" "),a("li",[e._v("In order for the "),a("code",[e._v("callee")]),e._v(" to be able to perform any action, best practice it to ensure that it has at least "),a("code",[e._v("2300")]),e._v(" gas along with the call.")]),e._v(" "),a("li",[e._v("In summary: this path requires there to be least "),a("code",[e._v("3000")]),e._v(" extra gas available (which is not due to any "),a("code",[e._v("penalty")]),e._v(")")])])]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("_to")]),e._v(" exists, but is no contract. The flow exits here, and is not affected by this EIP")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("_to")]),e._v(" does not exist: A "),a("code",[e._v("penalty")]),e._v(" is deducted.")])]),e._v(" "),a("p",[e._v("In summary, it would seem that "),a("code",[e._v("ERC223")]),e._v(" should not be affected, as long as the "),a("code",[e._v("penalty")]),e._v(" does not go above around "),a("code",[e._v("3000")]),e._v(" gas.")]),e._v(" "),a("h3",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),a("p",[e._v("The contract "),a("a",{attrs:{href:"https://etherscan.io/address/0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6#code",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Dentacoin")]),a("OutboundLink")],1),e._v(" would be affected.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    function transfer(address _to, uint256 _value) returns (bool success) {\n    ... // omitted for brevity\n        if (balances[msg.sender] >= _value && balances[_to] + _value > balances[_to]) {               // Check if sender has enough and for overflows\n            balances[msg.sender] = safeSub(balances[msg.sender], _value);   // Subtract DCN from the sender\n\n            if (msg.sender.balance >= minBalanceForAccounts && _to.balance >= minBalanceForAccounts) {    // Check if sender can pay gas and if recipient could\n                balances[_to] = safeAdd(balances[_to], _value);             // Add the same amount of DCN to the recipient\n                Transfer(msg.sender, _to, _value);                          // Notify anyone listening that this transfer took place\n                return true;\n            } else {\n                balances[this] = safeAdd(balances[this], DCNForGas);        // Pay DCNForGas to the contract\n                balances[_to] = safeAdd(balances[_to], safeSub(_value, DCNForGas));  // Recipient balance -DCNForGas\n                Transfer(msg.sender, _to, safeSub(_value, DCNForGas));      // Notify anyone listening that this transfer took place\n\n                if(msg.sender.balance < minBalanceForAccounts) {\n                    if(!msg.sender.send(gasForDCN)) throw;                  // Send eth to sender\n                  }\n                if(_to.balance < minBalanceForAccounts) {\n                    if(!_to.send(gasForDCN)) throw;                         // Send eth to recipient\n                }\n            }\n        } else { throw; }\n    }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("p",[e._v("The contract checks "),a("code",[e._v("_to.balance >= minBalanceForAccounts")]),e._v(", and if the "),a("code",[e._v("balance")]),e._v(" is too low, some "),a("code",[e._v("DCN")]),e._v(" is converted to "),a("code",[e._v("ether")]),e._v(" and sent to the "),a("code",[e._v("_to")]),e._v(". This is a mechanism to ease on-boarding, whereby a new user who has received some "),a("code",[e._v("DCN")]),e._v(" can immediately create a transaction.")]),e._v(" "),a("p",[e._v("Before this EIP:")]),e._v(" "),a("ul",[a("li",[e._v("When sending "),a("code",[e._v("DCN")]),e._v(" to a non-existing address, the additional "),a("code",[e._v("gas")]),e._v(" expenditure would be:\n"),a("ul",[a("li",[a("code",[e._v("9000")]),e._v(" for an ether-transfer")]),e._v(" "),a("li",[a("code",[e._v("25000")]),e._v(" for a new account-creation")]),e._v(" "),a("li",[e._v("("),a("code",[e._v("2300")]),e._v(" would be refunded to the caller later)")]),e._v(" "),a("li",[e._v("A total runtime "),a("code",[e._v("gas")]),e._v("-cost of "),a("code",[e._v("34K")]),e._v(" gas would be required to handle this case.")])])])]),e._v(" "),a("p",[e._v("After this EIP:")]),e._v(" "),a("ul",[a("li",[e._v("In addition to the "),a("code",[e._v("34K")]),e._v(" an additional "),a("code",[e._v("penalty")]),e._v(" would be added.\n"),a("ul",[a("li",[e._v("Possibly two, since the reference implementation does the balance-check twice, but it's unclear whether the compiled code would indeed perform the check twice.")])])]),e._v(" "),a("li",[e._v("A total runtime "),a("code",[e._v("gas")]),e._v("-cost of "),a("code",[e._v("34K+penalty")]),e._v(" (or "),a("code",[e._v("34K + 2 * penalty")]),e._v(") would be required to handle this case.")])]),e._v(" "),a("p",[e._v("It can be argued that the extra penalty of "),a("code",[e._v("2-3K")]),e._v(" gas can be considered marginal in relation to the other "),a("code",[e._v("34K")]),e._v(" gas already required to handle this.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("The following cases need to be considered and tested:")]),e._v(" "),a("ul",[a("li",[e._v("That during creation of a brand new contract, within the constructor, the "),a("code",[e._v("penalty")]),e._v(" should not be applied for calls concerning the self-address.")]),e._v(" "),a("li",[e._v("TBD: How the "),a("code",[e._v("penalty")]),e._v(" is applied in the case of a contract which has performed a "),a("code",[e._v("selfdestruct")]),e._v(" "),a("ul",[a("li",[e._v("a) previously in the same call-context,")]),e._v(" "),a("li",[e._v("b) previously in the same transaction,")]),e._v(" "),a("li",[e._v("c) previously in the same block, For any variant of "),a("code",[e._v("EXTCODEHASH(destructed)")]),e._v(", "),a("code",[e._v("CALL(destructed)")]),e._v(", "),a("code",[e._v("CALLCODE(destructed)")]),e._v(" etc.")])])]),e._v(" "),a("li",[e._v("The effects on a "),a("code",[e._v("transaction")]),e._v(" with "),a("code",[e._v("0")]),e._v(" value going to a non-existent account.")])]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("p",[e._v("See 'Backwards Compatibility'")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("Not yet available.")]),e._v(" "),a("h2",{attrs:{id:"alternative-variants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-variants"}},[e._v("#")]),e._v(" Alternative variants")]),e._v(" "),a("h3",{attrs:{id:"alt-1-insta-refunds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alt-1-insta-refunds"}},[e._v("#")]),e._v(" Alt 1: Insta-refunds")]),e._v(" "),a("p",[e._v("Bump all trie accesses with "),a("code",[e._v("penalty")]),e._v(". "),a("code",[e._v("EXTCODEHASH")]),e._v(" becomes "),a("code",[e._v("2700")]),e._v(" instead of "),a("code",[e._v("700")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("If a trie access hit an existing item, immediately refund penalty ("),a("code",[e._v("2K")]),e._v(" )")])]),e._v(" "),a("p",[e._v("Upside:")]),e._v(" "),a("ul",[a("li",[e._v("This eliminates the 'shielded relay' attack")])]),e._v(" "),a("p",[e._v("Downside:")]),e._v(" "),a("ul",[a("li",[e._v("This increases the up-front cost of many ops (CALL/EXTCODEHASH/EXTCODESIZE/STATICCALL/EXTCODESIZE etc)\n"),a("ul",[a("li",[e._v("Which may break many contracts.")])])])]),e._v(" "),a("h3",{attrs:{id:"alt-2-parent-bail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alt-2-parent-bail"}},[e._v("#")]),e._v(" Alt 2: Parent bail")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("penalty")]),e._v(" as described, but if a child context goes OOG on the "),a("code",[e._v("penalty")]),e._v(", then the remainder is subtracted from the parent context (recursively).")]),e._v(" "),a("p",[e._v("Upside:")]),e._v(" "),a("ul",[a("li",[e._v("This eliminates the 'shielded relay' attack")])]),e._v(" "),a("p",[e._v("Downside:")]),e._v(" "),a("ul",[a("li",[e._v("This breaks the current invariant that a child context is limited by whatever "),a("code",[e._v("gas")]),e._v(" was allocated for it.\n"),a("ul",[a("li",[e._v("However, the invariant is not "),a("em",[e._v("totally")]),e._v(" thrown out, the new invariant becomes that it is limited to "),a("code",[e._v("gas + penalty")]),e._v(".")])])]),e._v(" "),a("li",[e._v("This can be seen as 'messy' -- since only "),a("em",[e._v("some")]),e._v(" types of OOG (penalties) becomes passed up the call chain, but not others, e.g. OOG due to trying to allocate too much memory. There is a distinction, however:\n"),a("ul",[a("li",[e._v("Gas-costs which arise due to not-yet-consumed resources do not get passed to parent. For example: a huge allocation is not actually performed if there is insufficient gas.")]),e._v(" "),a("li",[e._v("Whereas gas-costs which arise due to already-consumed resources "),a("em",[e._v("do")]),e._v(" get passed to parent; in this case the penalty is paid post-facto for a trie iteration.")])])])]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);