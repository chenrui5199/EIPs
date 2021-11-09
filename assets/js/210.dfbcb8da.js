(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{604:function(e,t,a){"use strict";a.r(t);var r=a(46),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("A mechanism to allow returning arbitrary-length data inside the EVM has been requested for quite a while now. Existing proposals always had very intricate problems associated with charging gas. This proposal solves the same problem while at the same time, it has a very simple gas charging mechanism and requires minimal changes to the call opcodes. Its workings are very similar to the way calldata is handled already; after a call, return data is kept inside a virtual buffer from which the caller can copy it (or parts thereof) into memory. At the next call, the buffer is overwritten. This mechanism is 100% backwards compatible.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Please see summary.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("In some situations, it is vital for a function to be able to return data whose length cannot be anticipated before the call. In principle, this can be solved without alterations to the EVM, for example by splitting the call into two calls where the first is used to compute only the size. All of these mechanisms, though, are very expensive in at least some situations. A very useful example of such a worst-case situation is a generic forwarding contract; a contract that takes call data, potentially makes some checks and then forwards it as is to another contract. The return data should of course be transferred in a similar way to the original caller. Since the contract is generic and does not know about the contract it calls, there is no way to determine the size of the output without adapting the called contract accordingly or trying a logarithmic number of calls.")]),e._v(" "),a("p",[e._v("Compiler implementors are advised to reserve a zero-length area for return data if the size of the return data is unknown before the call and then use "),a("code",[e._v("RETURNDATACOPY")]),e._v(" in conjunction with "),a("code",[e._v("RETURNDATASIZE")]),e._v(" to actually retrieve the data.")]),e._v(" "),a("p",[e._v("Note that this proposal also makes the EIP that proposes to allow to return data in case of an intentional state reversion ("),a("RouterLink",{attrs:{to:"/eip-140.html"}},[e._v("EIP-140")]),e._v(") much more useful. Since the size of the failure data might be larger than the regular return data (or even unknown), it is possible to retrieve the failure data after the CALL opcode has signalled a failure, even if the regular output area is not large enough to hold the data.")],1),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("block.number >= BYZANTIUM_FORK_BLKNUM")]),e._v(", add two new opcodes and amend the semantics of any opcode that creates a new call frame (like "),a("code",[e._v("CALL")]),e._v(", "),a("code",[e._v("CREATE")]),e._v(", "),a("code",[e._v("DELEGATECALL")]),e._v(", ...) called call-like opcodes in the following. It is assumed that the EVM (to be more specific: an EVM call frame) has a new internal buffer of variable size, called the return data buffer. This buffer is created empty for each new call frame. Upon executing any call-like opcode, the buffer is cleared (its size is set to zero). After executing a call-like opcode, the complete return data (or failure data, see "),a("RouterLink",{attrs:{to:"/eip-140.html"}},[e._v("EIP-140")]),e._v(") of the call is stored in the return data buffer (of the caller), and its size changed accordingly. As an exception, "),a("code",[e._v("CREATE")]),e._v(" and "),a("code",[e._v("CREATE2")]),e._v(" are considered to return the empty buffer in the success case and the failure data in the failure case. If the call-like opcode is executed but does not really instantiate a call frame (for example due to insufficient funds for a value transfer or if the called contract does not exist), the return data buffer is empty.")],1),e._v(" "),a("p",[e._v("As an optimization, it is possible to share the return data buffer across call frames because at most one will be non-empty at any time.")]),e._v(" "),a("p",[a("code",[e._v("RETURNDATASIZE")]),e._v(": "),a("code",[e._v("0x3d")])]),e._v(" "),a("p",[e._v("Pushes the size of the return data buffer onto the stack.\nGas costs: 2 (same as "),a("code",[e._v("CALLDATASIZE")]),e._v(")")]),e._v(" "),a("p",[a("code",[e._v("RETURNDATACOPY")]),e._v(": "),a("code",[e._v("0x3e")])]),e._v(" "),a("p",[e._v("This opcode has similar semantics to "),a("code",[e._v("CALLDATACOPY")]),e._v(", but instead of copying data from the call data, it copies data from the return data buffer. Furthermore, accessing the return data buffer beyond its size results in a failure; i.e. if "),a("code",[e._v("start + length")]),e._v(" overflows or results in a value larger than "),a("code",[e._v("RETURNDATASIZE")]),e._v(", the current call stops in an out-of-gas condition. In particular, reading 0 bytes from the end of the buffer will read 0 bytes; reading 0 bytes from one-byte out of the buffer causes an exception.")]),e._v(" "),a("p",[e._v("Gas costs: "),a("code",[e._v("3 + 3 * ceil(amount / 32)")]),e._v(" (same as "),a("code",[e._v("CALLDATACOPY")]),e._v(")")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Other solutions that would allow returning dynamic data were considered, but they all had to deduct the gas from the call opcode and thus were both complicated to implement and specify ("),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/issues/8",target:"_blank",rel:"noopener noreferrer"}},[e._v("5/8"),a("OutboundLink")],1),e._v("). Since this proposal is very similar to the way calldata is handled, it fits nicely into the concept. Furthermore, the eWASM architecture already handles return data in exactly the same way.")]),e._v(" "),a("p",[e._v("Note that the EVM implementation needs to keep the return data until the next call or the return from the current call. Since this resource was already paid for as part of the memory of the callee, it should not be a problem. Implementations may either choose to keep the full memory of the callee alive until the next call or copy only the return data to a special memory area.")]),e._v(" "),a("p",[e._v("Keeping the memory of the callee until the next call-like opcode does not increase the peak memory usage in the following sense; any memory allocation in the caller's frame that happens after the return from the call can be moved before the call without a change in gas costs, but will add this allocation to the peak allocation.")]),e._v(" "),a("p",[e._v("The number values of the opcodes were allocated in the same nibble block that also contains "),a("code",[e._v("CALLDATASIZE")]),e._v(" and "),a("code",[e._v("CALLDATACOPY")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This proposal introduces two new opcodes and stays fully backwards compatible apart from that.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);