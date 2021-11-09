(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{528:function(e,t,o){"use strict";o.r(t);var a=o(46),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h3",{attrs:{id:"hard-fork"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hard-fork"}},[e._v("#")]),e._v(" Hard fork")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/eip-607.html"}},[e._v("Spurious Dragon")])],1),e._v(" "),o("h3",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("FORK_BLKNUM")]),e._v(": 2,675,000")]),e._v(" "),o("li",[o("code",[e._v("CHAIN_ID")]),e._v(": 1 (main net)")])]),e._v(" "),o("h3",{attrs:{id:"specification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),o("p",[e._v("a. Account creation transactions and the "),o("code",[e._v("CREATE")]),e._v(" operation SHALL, prior to the execution of the initialisation code, "),o("strong",[e._v("increment")]),e._v(" the "),o("strong",[e._v("nonce")]),e._v(" over and above its normal starting value by "),o("strong",[e._v("one")]),e._v(" (for normal networks, this will be simply 1, however test-nets with non-zero default starting nonces will be different).")]),e._v(" "),o("p",[e._v("b. Whereas "),o("code",[e._v("CALL")]),e._v(" and "),o("code",[e._v("SUICIDE")]),e._v(" would charge 25,000 gas when the destination is non-existent, now the charge SHALL "),o("strong",[e._v("only")]),e._v(" be levied if the operation transfers "),o("strong",[e._v("more than zero value")]),e._v(" and the destination account is "),o("em",[e._v("dead")]),e._v(".")]),e._v(" "),o("p",[e._v("c. No account may "),o("em",[e._v("change state")]),e._v(" from non-existent to existent-but-"),o("em",[e._v("empty")]),e._v(". If an operation would do this, the account SHALL instead remain non-existent.")]),e._v(" "),o("p",[e._v("d. "),o("em",[e._v("At the end of the transaction")]),e._v(", any account "),o("em",[e._v("touched")]),e._v(" by the execution of that transaction which is now "),o("em",[e._v("empty")]),e._v(" SHALL instead become non-existent (i.e. "),o("strong",[e._v("deleted")]),e._v(").")]),e._v(" "),o("p",[e._v("Where:")]),e._v(" "),o("p",[e._v("An account is considered to be "),o("em",[e._v("touched")]),e._v(" when it is involved in any potentially "),o("em",[e._v("state-changing")]),e._v(" operation. This includes, but is not limited to, being the recipient of a "),o("strong",[e._v("transfer of zero value")]),e._v(".")]),e._v(" "),o("p",[e._v("An account is considered "),o("em",[e._v("empty")]),e._v(" when it has "),o("strong",[e._v("no code")]),e._v(" and "),o("strong",[e._v("zero nonce")]),e._v(" and "),o("strong",[e._v("zero balance")]),e._v(".")]),e._v(" "),o("p",[e._v("An account is considered "),o("em",[e._v("dead")]),e._v(" when either it is non-existent or it is "),o("em",[e._v("empty")]),e._v(".")]),e._v(" "),o("p",[o("em",[e._v("At the end of the transaction")]),e._v(" is immediately following the execution of the suicide list, prior to the determination of the state trie root for receipt population.")]),e._v(" "),o("p",[e._v("An account "),o("em",[e._v("changes state")]),e._v(" when:")]),e._v(" "),o("ul",[o("li",[e._v("it is the target or refund of a "),o("code",[e._v("SUICIDE")]),e._v(" operation for "),o("strong",[e._v("zero or more")]),e._v(" value;")]),e._v(" "),o("li",[e._v("it is the source or destination of a "),o("code",[e._v("CALL")]),e._v(" operation or message-call transaction transferring "),o("strong",[e._v("zero or more")]),e._v(" value;")]),e._v(" "),o("li",[e._v("it is the source or creation of a "),o("code",[e._v("CREATE")]),e._v(" operation or contract-creation transaction endowing "),o("strong",[e._v("zero or more")]),e._v(" value;")]),e._v(" "),o("li",[e._v('as the block author ("miner") it is the recipient of block-rewards or transaction-fees of '),o("strong",[e._v("zero or more")]),e._v(" value.")])]),e._v(" "),o("h4",{attrs:{id:"notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),o("p",[e._v("In the present Ethereum protocol, it should be noted that very few state changes can ultimately result in accounts that are empty following the execution of the transaction. In fact there are only four contexts that current implementations need track:")]),e._v(" "),o("ul",[o("li",[e._v("an empty account has zero value transferred to it through "),o("code",[e._v("CALL")]),e._v(";")]),e._v(" "),o("li",[e._v("an empty account has zero value transferred to it through "),o("code",[e._v("SUICIDE")]),e._v(";")]),e._v(" "),o("li",[e._v("an empty account has zero value transferred to it through a message-call transaction;")]),e._v(" "),o("li",[e._v("an empty account has zero value transferred to it through a zero-gas-price fees transfer.")])]),e._v(" "),o("h3",{attrs:{id:"rationale"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),o("p",[e._v("Same as #158 except that several edge cases are avoided since we do not break invariants:")]),e._v(" "),o("ul",[o("li",[o("s",[e._v("that an account can go from having code and storage to not having code or storage mid-way through the execution of a transaction;")]),e._v(" [corrected]")]),e._v(" "),o("li",[e._v("that a newly created account cannot be deleted prior to being deployed.")])]),e._v(" "),o("p",[o("code",[e._v("CREATE")]),e._v(" avoids zero in the nonce to avoid any suggestion of the oddity of "),o("code",[e._v("CREATE")]),e._v("d accounts being reaped half-way through their creation.")]),e._v(" "),o("h3",{attrs:{id:"addendum-2017-08-15"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#addendum-2017-08-15"}},[e._v("#")]),e._v(" Addendum (2017-08-15)")]),e._v(" "),o("p",[e._v("On 2016-11-24, a consensus bug occurred due to two implementations having different behavior in the case of state reverts.[3] The specification was amended to clarify that empty account deletions are reverted when the state is reverted.")]),e._v(" "),o("h3",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ol",[o("li",[e._v("EIP-158 issue and discussion: https://github.com/ethereum/EIPs/issues/158")]),e._v(" "),o("li",[e._v("EIP-161 issue and discussion: https://github.com/ethereum/EIPs/issues/161")]),e._v(" "),o("li",[e._v("https://blog.ethereum.org/2016/11/25/security-alert-11242016-consensus-bug-geth-v1-4-19-v1-5-2/")])]),e._v(" "),o("blockquote",[o("p",[e._v("Details: Geth was failing to revert empty account deletions when the transaction causing the deletions of empty accounts ended with an an out-of-gas exception. An additional issue was found in Parity, where the Parity client incorrectly failed to revert empty account deletions in a more limited set of contexts involving out-of-gas calls to precompiled contracts; the new Geth behavior matches Parity’s, and empty accounts will cease to be a source of concern in general in about one week once the state clearing process finishes.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);