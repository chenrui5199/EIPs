(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{445:function(e,a,t){"use strict";t.r(a);var o=t(46),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),t("p",[e._v("Adds a new opcode ("),t("code",[e._v("CREATE2")]),e._v(") at "),t("code",[e._v("0xf5")]),e._v(", which takes 4 stack arguments: endowment, memory_start, memory_length, salt. Behaves identically to "),t("code",[e._v("CREATE")]),e._v(" ("),t("code",[e._v("0xf0")]),e._v("), except using "),t("code",[e._v("keccak256( 0xff ++ address ++ salt ++ keccak256(init_code))[12:]")]),e._v(" instead of the usual sender-and-nonce-hash as the address where the contract is initialized at.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("CREATE2")]),e._v(" has the same "),t("code",[e._v("gas")]),e._v(" schema as "),t("code",[e._v("CREATE")]),e._v(", but also an extra "),t("code",[e._v("hashcost")]),e._v(" of "),t("code",[e._v("GSHA3WORD * ceil(len(init_code) / 32)")]),e._v(", to account for the hashing that must be performed. The "),t("code",[e._v("hashcost")]),e._v(" is deducted at the same time as memory-expansion gas and "),t("code",[e._v("CreateGas")]),e._v(" is deducted: "),t("em",[e._v("before")]),e._v(" evaluation of the resulting address and the execution of "),t("code",[e._v("init_code")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("0xff")]),e._v(" is a single byte,")]),e._v(" "),t("li",[t("code",[e._v("address")]),e._v(" is always "),t("code",[e._v("20")]),e._v(" bytes,")]),e._v(" "),t("li",[t("code",[e._v("salt")]),e._v(" is always "),t("code",[e._v("32")]),e._v(" bytes (a stack item).")])]),e._v(" "),t("p",[e._v("The preimage for the final hashing round is thus always exactly "),t("code",[e._v("85")]),e._v(" bytes long.")]),e._v(" "),t("p",[e._v("The coredev-call at 2018-08-10 decided to use the formula above.")]),e._v(" "),t("h3",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),t("p",[e._v("Allows interactions to (actually or counterfactually in channels) be made with addresses that do not exist yet on-chain but can be relied on to only possibly eventually contain code that has been created by a particular piece of init code. Important for state-channel use cases that involve counterfactual interactions with contracts.")]),e._v(" "),t("h3",{attrs:{id:"rationale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),t("h4",{attrs:{id:"address-formula"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#address-formula"}},[e._v("#")]),e._v(" Address formula")]),e._v(" "),t("ul",[t("li",[e._v("Ensures that addresses created with this scheme cannot collide with addresses created using the traditional "),t("code",[e._v("keccak256(rlp([sender, nonce]))")]),e._v(" formula, as "),t("code",[e._v("0xff")]),e._v(" can only be a starting byte for RLP for data many petabytes long.")]),e._v(" "),t("li",[e._v("Ensures that the hash preimage has a fixed size,")])]),e._v(" "),t("h4",{attrs:{id:"gas-cost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gas-cost"}},[e._v("#")]),e._v(" Gas cost")]),e._v(" "),t("p",[e._v("Since address calculation depends on hashing the "),t("code",[e._v("init_code")]),e._v(", it would leave clients open to DoS attacks if executions could repeatedly cause hashing of large pieces of "),t("code",[e._v("init_code")]),e._v(", since expansion of memory is paid for only once. This EIP uses the same cost-per-word as the "),t("code",[e._v("SHA3")]),e._v(" opcode.")]),e._v(" "),t("h3",{attrs:{id:"clarifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clarifications"}},[e._v("#")]),e._v(" Clarifications")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("init_code")]),e._v(" is the code that, when executed, produces the runtime bytecode that will be placed into the state, and which typically is used by high level languages to implement a 'constructor'.")]),e._v(" "),t("p",[e._v("This EIP makes collisions possible. The behaviour at collisions is specified by "),t("a",{attrs:{href:"https://github.com/ethereum/EIPs/issues/684",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-684"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("blockquote",[t("p",[e._v("If a contract creation is attempted, due to either a creation transaction or the "),t("code",[e._v("CREATE")]),e._v(" (or future "),t("code",[e._v("CREATE2")]),e._v(") opcode, and the destination address already has either nonzero nonce, or nonempty code, then the creation throws immediately, with exactly the same behavior as would arise if the first byte in the init code were an invalid opcode. This applies retroactively starting from genesis.")])]),e._v(" "),t("p",[e._v("Specifically, if "),t("code",[e._v("nonce")]),e._v(" or "),t("code",[e._v("code")]),e._v(" is nonzero, then the create-operation fails.")]),e._v(" "),t("p",[e._v("With "),t("RouterLink",{attrs:{to:"/eip-161.html"}},[e._v("EIP-161")])],1),e._v(" "),t("blockquote",[t("p",[e._v("Account creation transactions and the "),t("code",[e._v("CREATE")]),e._v(" operation SHALL, prior to the execution of the initialisation code, increment the nonce over and above its normal starting value by one")])]),e._v(" "),t("p",[e._v("This means that if a contract is created in a transaction, the "),t("code",[e._v("nonce")]),e._v(" is immediately non-zero, with the side-effect that a collision within the same transaction will always fail -- even if it's carried out from the "),t("code",[e._v("init_code")]),e._v(" itself.")]),e._v(" "),t("p",[e._v("It should also be noted that "),t("code",[e._v("SELFDESTRUCT")]),e._v(" ("),t("code",[e._v("0xff")]),e._v(") has no immediate effect on "),t("code",[e._v("nonce")]),e._v(" or "),t("code",[e._v("code")]),e._v(", thus a contract cannot be destroyed and recreated within one transaction.")]),e._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Example 0")]),e._v(" "),t("ul",[t("li",[e._v("address "),t("code",[e._v("0x0000000000000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("salt "),t("code",[e._v("0x0000000000000000000000000000000000000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("init_code "),t("code",[e._v("0x00")])]),e._v(" "),t("li",[e._v("gas (assuming no mem expansion): "),t("code",[e._v("32006")])]),e._v(" "),t("li",[e._v("result: "),t("code",[e._v("0x4D1A2e2bB4F88F0250f26Ffff098B0b30B26BF38")])])]),e._v(" "),t("p",[e._v("Example 1")]),e._v(" "),t("ul",[t("li",[e._v("address "),t("code",[e._v("0xdeadbeef00000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("salt "),t("code",[e._v("0x0000000000000000000000000000000000000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("init_code "),t("code",[e._v("0x00")])]),e._v(" "),t("li",[e._v("gas (assuming no mem expansion): "),t("code",[e._v("32006")])]),e._v(" "),t("li",[e._v("result: "),t("code",[e._v("0xB928f69Bb1D91Cd65274e3c79d8986362984fDA3")])])]),e._v(" "),t("p",[e._v("Example 2")]),e._v(" "),t("ul",[t("li",[e._v("address "),t("code",[e._v("0xdeadbeef00000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("salt "),t("code",[e._v("0x000000000000000000000000feed000000000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("init_code "),t("code",[e._v("0x00")])]),e._v(" "),t("li",[e._v("gas (assuming no mem expansion): "),t("code",[e._v("32006")])]),e._v(" "),t("li",[e._v("result: "),t("code",[e._v("0xD04116cDd17beBE565EB2422F2497E06cC1C9833")])])]),e._v(" "),t("p",[e._v("Example 3")]),e._v(" "),t("ul",[t("li",[e._v("address "),t("code",[e._v("0x0000000000000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("salt "),t("code",[e._v("0x0000000000000000000000000000000000000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("init_code "),t("code",[e._v("0xdeadbeef")])]),e._v(" "),t("li",[e._v("gas (assuming no mem expansion): "),t("code",[e._v("32006")])]),e._v(" "),t("li",[e._v("result: "),t("code",[e._v("0x70f2b2914A2a4b783FaEFb75f459A580616Fcb5e")])])]),e._v(" "),t("p",[e._v("Example 4")]),e._v(" "),t("ul",[t("li",[e._v("address "),t("code",[e._v("0x00000000000000000000000000000000deadbeef")])]),e._v(" "),t("li",[e._v("salt "),t("code",[e._v("0x00000000000000000000000000000000000000000000000000000000cafebabe")])]),e._v(" "),t("li",[e._v("init_code "),t("code",[e._v("0xdeadbeef")])]),e._v(" "),t("li",[e._v("gas (assuming no mem expansion): "),t("code",[e._v("32006")])]),e._v(" "),t("li",[e._v("result: "),t("code",[e._v("0x60f3f640a8508fC6a86d45DF051962668E1e8AC7")])])]),e._v(" "),t("p",[e._v("Example 5")]),e._v(" "),t("ul",[t("li",[e._v("address "),t("code",[e._v("0x00000000000000000000000000000000deadbeef")])]),e._v(" "),t("li",[e._v("salt "),t("code",[e._v("0x00000000000000000000000000000000000000000000000000000000cafebabe")])]),e._v(" "),t("li",[e._v("init_code "),t("code",[e._v("0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")])]),e._v(" "),t("li",[e._v("gas (assuming no mem expansion): "),t("code",[e._v("32012")])]),e._v(" "),t("li",[e._v("result: "),t("code",[e._v("0x1d8bfDC5D46DC4f61D6b6115972536eBE6A8854C")])])]),e._v(" "),t("p",[e._v("Example 6")]),e._v(" "),t("ul",[t("li",[e._v("address "),t("code",[e._v("0x0000000000000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("salt "),t("code",[e._v("0x0000000000000000000000000000000000000000000000000000000000000000")])]),e._v(" "),t("li",[e._v("init_code "),t("code",[e._v("0x")])]),e._v(" "),t("li",[e._v("gas (assuming no mem expansion): "),t("code",[e._v("32000")])]),e._v(" "),t("li",[e._v("result: "),t("code",[e._v("0xE33C0C7F7df4809055C3ebA6c09CFe4BaF1BD9e0")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);