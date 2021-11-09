(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{1162:function(t,e,a){"use strict";a.r(e);var s=a(46),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("Additional storage slots for upgradeability proxy to decrease trust in interaction with upgradeable smart contracts.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("Removing trust from upgradeability proxy is required for anonymous developers. To achieve that, disallowing sudden, potentially malicious upgrades is required. This EIP introduces a time lock, a period of one month, before defined by proxy admin implementation becomes active implementation.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("It's usually not possible for anonymous developers who use upgradeability proxies to gain community trust.")]),t._v(" "),a("p",[t._v("Fairer, better future for humanity absolutely requires some developers to stay anonymous while still attract vital attention to solutions they propose and at the same time leverage the benefits of possible upgradeability. For example, a project like Collateralized Asset Protocol allows to trade stocks and securities on the blockchain in a purely decentralized way making the developers of such projects potentially risking their freedom. Aletheo was born to fight tyranny.")]),t._v(" "),a("p",[t._v("Extinction is more likely with closed internet borders. As long as internet has eyes everywhere, devastating conventional warfare is less likely to happen regardless of power vacuum or exponential increase in existential threats.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("The specification is an addition to the standard "),a("RouterLink",{attrs:{to:"/zh/eip-1967.html"}},[t._v("EIP-1967")]),t._v(" transparent proxy design. The specification focuses on the slots it adds. All admin interactions with trust minimized proxy must emit an event to make admin actions trackable, and all admin actions must be guarded with "),a("code",[t._v("onlyAdmin()")]),t._v(" modifier.")],1),t._v(" "),a("h3",{attrs:{id:"next-logic-contract-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-logic-contract-address"}},[t._v("#")]),t._v(" Next Logic Contract Address")]),t._v(" "),a("p",[t._v("Storage slot "),a("code",[t._v("0xe8c186b11a4be12af079b0a5c235146db6f3615b2a8b1b47f9bfe3a956337ef9")]),t._v(" (obtained as "),a("code",[t._v("bytes32(uint256(keccak256('eip3561.proxy.next_implementation')) - 1)")]),t._v("). Logic address must be first defined as next logic, before it can function as actual logic implementation stored in EIP-1967 "),a("code",[t._v("IMPLEMENTATION_SLOT")]),t._v(". Admin interactions with next logic contract address correspond with these methods and events:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sets next logic contract address and initializes it. Emits NextLogicDefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0x as calldata is an equivalent of proposeTo()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proposeToAndCall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" implementation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" onlyAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sets the address stored as next implementation as current IMPLEMENTATION_SLOT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// as soon UPGRADE_BLOCK_SLOT allows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" onlyAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cancelling is possible for as long as upgrade() for given next logic was not called")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// emits NextLogicCanceled")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelUpgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" onlyAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NextLogicDefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" nextLogic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" earliestArrivalBlock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// important to have")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NextLogicCanceled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" oldLogic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"upgrade-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-block"}},[t._v("#")]),t._v(" Upgrade Block")]),t._v(" "),a("p",[t._v("Storage slot "),a("code",[t._v("0xd366e20ef9f21888e3d225d6a18f0bceb0ce0008a1e881be9a0467a0293afc96")]),t._v(" (obtained as "),a("code",[t._v("bytes32(uint256(keccak256('eip3561.proxy.upgrade_block')) - 1)")]),t._v("). On/after this block next logic contract address can be set to EIP-1967 "),a("code",[t._v("IMPLEMENTATION_SLOT")]),t._v(" or, in other words, start to function as current logic. Updated automatically and is shown as "),a("code",[t._v("earliestArrivalBlock")]),t._v(" in the event "),a("code",[t._v("NextLogicDefined")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"propose-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propose-block"}},[t._v("#")]),t._v(" Propose Block")]),t._v(" "),a("p",[t._v("Storage slot "),a("code",[t._v("0x1e166c9744902ecbb9f589bbc9e7da5f078e553ad162c2ee62c71827916db75f")]),t._v(" (obtained as "),a("code",[t._v("bytes32(uint256(keccak256('eip3561.proxy.propose_block')) - 1)")]),t._v("). Defines after/on which block "),a("em",[t._v("proposing")]),t._v(" next logic is possible. Required for convenience, for example can be manually set to a year from given time, so that the users can have peace of mind during the year. Can be set to maximum number to completely seal the code, must not overflow. Admin interactions with this slot correspond with this method and event:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prolongLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" onlyAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpgradesRestrictedUntil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"deadline-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deadline-block"}},[t._v("#")]),t._v(" Deadline Block")]),t._v(" "),a("p",[t._v("Storage slot "),a("code",[t._v("0x560a0645803da084600e483b1076fd54059fdee9045033b88b51d342faf2b2af")]),t._v(" (obtained as "),a("code",[t._v("bytes32(uint256(keccak256('eip3561.proxy.deadline')) - 1)")]),t._v("). Defines after/on which block it becomes impossible to upgrade the contract, can be set in constructor if used or can be set many times as long as next value is lower than previous. Required in case of probability that the project development can be compromised, unlike "),a("code",[t._v("PROPOSE_BLOCK_SLOT")]),t._v(", deadline is less likely to require any urgent transaction like "),a("code",[t._v("PROPOSE_BLOCK_SLOT")]),t._v(". Admin interactions with this slot should correspond with this method and event:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDeadline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" onlyAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeadlineSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"trust-minimized-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trust-minimized-boolean"}},[t._v("#")]),t._v(" Trust_minimized Boolean")]),t._v(" "),a("p",[t._v("Storage slot "),a("code",[t._v("0x17dc395ab915c140774b2c05da17fd5b71a2d193e53bc9732d6b62d419a46635")]),t._v(" (obtained as "),a("code",[t._v("bytes32(uint256(keccak256('eip3561.proxy.trust_minimized')) - 1)")]),t._v("). False by default and can only ever be set true. While it is false, then the proxy operates exactly as standard EIP-1967 transparent proxy, which allows to correct potential mistakes of first deployment. After set to true, all above specification becomes active. Admin interactions with this slot should correspond with this method and event:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeTrust")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" onlyAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TrustRemoved")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v('An argument "just don\'t make such contracts upgadeable at all" fails when it comes to complex systems. It might be impossible to model complex systems right on first try.')]),t._v(" "),a("p",[t._v("A proxy is easily abusable by anonymous soulless scammers without a time delay before an actual upgrade(change of current implementation address) goes live. A time delay is probably unavoidable, even if it means that inexperienced developers might not have confidence using it. Albeit this is a downside of this EIP, it's a critically important option to have in smart contract development today.")]),t._v(" "),a("p",[t._v("Propose block adds to convenience if used, so should be kept. An ability to cancel next logic can also be important for the same reason. Deadline block, while can be omitted, can be critically important for some projects, it would be reasonable to rather keep it too. Unless developers always write correct automatic deployment scripts, trustless boolean is required from my own experience, because I once failed to execute 15 deployment steps correctly.")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("The following implementation is an example which lacks trustless boolean slot and uses "),a("code",[t._v("NEXT_LOGIC_BLOCK_SLOT")]),t._v(" instead of "),a("code",[t._v("UPGRADE_BLOCK_SLOT")]),t._v(" to get farther slot value: "),a("a",{attrs:{href:"https://github.com/SamPorter1984/Aletheo/blob/main/contracts/TrustMinimizedProxy.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aletheo repository"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);