(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{673:function(e,a,t){"use strict";t.r(a);var s=t(46),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"simple-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),t("p",[e._v("Standardized contract interface for extensible meta-transaction forwarding.")]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("This proposal defines an external API of an extensible Forwarder whose responsibility is to validate transaction\nsignatures on-chain and expose the signer to the destination contract, that is expected to accommodate all use-cases.\nThe ERC-712 structure of the forwarding request can be extended allowing wallets to display readable data even\nfor types not known during the Forwarder contract deployment.")]),e._v(" "),t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),t("p",[e._v("There is a growing interest in making it possible for Ethereum contracts to\naccept calls from externally owned accounts that do not have ETH to pay for\ngas.")]),e._v(" "),t("p",[e._v("This can be accomplished with meta-transactions, which are transactions that have been signed as plain data by one\nexternally owned account first and then wrapped into an Ethereum transaction by a different account.")]),e._v(" "),t("p",[t("code",[e._v("msg.sender")]),e._v(" is a transaction parameter that can be inspected by a contract to\ndetermine who signed the transaction. The integrity of this parameter is\nguaranteed by the Ethereum EVM, but for a meta-transaction verifying\n"),t("code",[e._v("msg.sender")]),e._v(" is insufficient, and signer address must be recovered as well.")]),e._v(" "),t("p",[e._v("The Forwarder contract described here allows multiple Gas Relays and Relay Recipient contracts to rely\non a single instance of the signature verifying code, improving reliability and security\nof any participating meta-transaction framework, as well as avoiding on-chain code duplication.")]),e._v(" "),t("h2",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),t("p",[e._v("The Forwarder contract operates by accepting a signed typed data together with it's ERC-712 signature,\nperforming signature verification of incoming data, appending the signer address to the data field and\nperforming a call to the target.")]),e._v(" "),t("h3",{attrs:{id:"forwarder-data-type-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forwarder-data-type-registration"}},[e._v("#")]),e._v(" Forwarder data type registration")]),e._v(" "),t("p",[e._v("Request struct MUST contain the following fields in this exact order:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("struct ForwardRequest {\n   address from;\n   address to;\n   uint256 value;\n   uint256 gas;\n   uint256 nonce;\n   bytes data;\n   uint256 validUntil;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[t("code",[e._v("from")]),e._v(" - an externally-owned account making the request "),t("br"),e._v(" "),t("code",[e._v("to")]),e._v(" - a destination address, normally a smart-contract"),t("br"),e._v(" "),t("code",[e._v("value")]),e._v(" - an amount of Ether to transfer to the destination"),t("br"),e._v(" "),t("code",[e._v("gas")]),e._v(" - an amount of gas limit to set for the execution"),t("br"),e._v(" "),t("code",[e._v("nonce")]),e._v(" - an on-chain tracked nonce of a transaction"),t("br"),e._v(" "),t("code",[e._v("data")]),e._v(" - the data to be sent to the destination"),t("br"),e._v(" "),t("code",[e._v("validUntil")]),e._v(" - the highest block number the request can be forwarded in, or 0 if request validity is not time-limited")]),e._v(" "),t("p",[e._v("The request struct MAY include any other fields, including nested structs, if necessary.\nIn order for the Forwarder to be able to enforce the names of the fields of this struct, only registered types are allowed.")]),e._v(" "),t("p",[e._v("Registration MUST be performed in advance by a call to the following method:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function registerRequestType(string typeName, string typeSuffix)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("code",[e._v("typeName")]),e._v(" - a name of a type being registered"),t("br"),e._v(" "),t("code",[e._v("typeSuffix")]),e._v(" - an ERC-712 compatible description of a type")]),e._v(" "),t("p",[e._v("For example, after calling")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('registerRequestType("ExtendedRequest", "uint256 x,bytes z,ExtraData extraData)ExtraData(uint256 a,uint256 b,uint256 c)")\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("the following ERC-712 type will be registered with forwarder:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* primary type */\nstruct ExtendedRequest {\n   address from;\n   address to;\n   uint256 value;\n   uint256 gas;\n   uint256 nonce;\n   bytes data;\n   uint256 validUntil;\n   uint256 x;\n   bytes z;\n   ExtraData extraData;\n}\n\n/* subtype */\nstruct ExtraData {\n   uint256 a;\n   uint256 b;\n   uint256 c;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br")])]),t("h3",{attrs:{id:"signature-verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signature-verification"}},[e._v("#")]),e._v(" Signature verification")]),e._v(" "),t("p",[e._v("The following method performs an ERC-712 signature check on a request:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function verify(\n   ForwardRequest forwardRequest,\n   bytes32 domainSeparator,\n   bytes32 requestTypeHash,\n   bytes suffixData,\n   bytes signature\n) view;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[t("code",[e._v("forwardRequest")]),e._v(" - an instance of the "),t("code",[e._v("ForwardRequest")]),e._v(" struct"),t("br"),e._v(" "),t("code",[e._v("domainSeparator")]),e._v(" - caller-provided domain separator to prevent signature reuse across dapps (refer to ERC-712)\n"),t("code",[e._v("requestTypeHash")]),e._v(" - hash of the registered relay request type\n"),t("code",[e._v("suffixData")]),e._v(" - RLP-encoding of the remainder of the request struct\n"),t("code",[e._v("signature")]),e._v(" - an ERC-712 signature on the concatenation of "),t("code",[e._v("forwardRequest")]),e._v(" and "),t("code",[e._v("suffixData")])]),e._v(" "),t("h3",{attrs:{id:"command-execution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-execution"}},[e._v("#")]),e._v(" Command execution")]),e._v(" "),t("p",[e._v("In order for the Forwarder to perform an operation, the following method is to be called:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function execute(\n   ForwardRequest forwardRequest,\n   bytes32 domainSeparator,\n   bytes32 requestTypeHash,\n   bytes suffixData,\n   bytes signature\n)\npublic\npayable\nreturns (\n   bool success,\n   bytes memory ret\n)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("p",[e._v("Performs the ‘verify’ internally and if it succeeds performs the following call:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("bytes memory data = abi.encodePacked(forwardRequest.data, forwardRequest.from);\n...\n(success, ret) = forwardRequest.to.call{gas: forwardRequest.gas, value: forwardRequest.value}(data);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Regardless of whether the inner call succeeds or reverts, the nonce is incremented, invalidating the signature and preventing a replay of the request.")]),e._v(" "),t("p",[e._v("Note that "),t("code",[e._v("gas")]),e._v(" parameter behaves according to EVM rules, specifically EIP-150. The forwarder validates internally that\nthere is enough gas for the inner call. In case the "),t("code",[e._v("forwardRequest")]),e._v(" specifies non-zero value, extra "),t("code",[e._v("40000 gas")]),e._v(" is\nreserved in case inner call reverts or there is a remaining Ether so there is a need to transfer value from the "),t("code",[e._v("Forwarder")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-solidity line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-solidity"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint")]),e._v(" gasForTransfer "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   gasForTransfer "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("40000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// buffer in case we need to move Ether after the transaction.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("gasleft")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("63")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),e._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("gas "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" gasForTransfer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"FWD: insufficient gas"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("In case there is not enough "),t("code",[e._v("value")]),e._v(" in the Forwarder the execution of the inner call fails."),t("br"),e._v("\nBe aware that if the inner call ends up transferring Ether to the "),t("code",[e._v("Forwarder")]),e._v(" in a call that did not originally have "),t("code",[e._v("value")]),e._v(", this\nEther will remain inside "),t("code",[e._v("Forwarder")]),e._v(" after the transaction is complete.")]),e._v(" "),t("h3",{attrs:{id:"erc-712-and-suffixdata-parameter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc-712-and-suffixdata-parameter"}},[e._v("#")]),e._v(" ERC-712 and 'suffixData' parameter")]),e._v(" "),t("p",[t("code",[e._v("suffixData")]),e._v(" field must provide a valid 'tail' of an ERC-712 typed data.\nFor instance, in order to sign on the "),t("code",[e._v("ExtendedRequest")]),e._v(" struct, the data will be a concatenation of the following chunks:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("forwardRequest")]),e._v(" fields will be RLP-encoded as-is, and variable-length "),t("code",[e._v("data")]),e._v(" field will be hashed")]),e._v(" "),t("li",[t("code",[e._v("uint256 x")]),e._v(" will be appended entirely as-is")]),e._v(" "),t("li",[t("code",[e._v("bytes z")]),e._v(" will be hashed first")]),e._v(" "),t("li",[t("code",[e._v("ExtraData extraData")]),e._v(" will be hashed as a typed data")])]),e._v(" "),t("p",[e._v("So a valid "),t("code",[e._v("suffixData")]),e._v(" is calculated as following:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('function calculateSuffixData(ExtendedRequest request) internal pure returns (bytes) {\n    return abi.encode(request.x, keccak256(request.z), hashExtraData(request.extraData));\n}\n\nfunction hashExtraData(ExtraData extraData) internal pure returns (bytes32) {\n    return keccak256(abi.encode(\n            keccak256("ExtraData(uint256 a,uint256 b,uint256 c)"),\n            extraData.a,\n            extraData.b,\n            extraData.c\n        ));\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("h3",{attrs:{id:"accepting-forwarded-calls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accepting-forwarded-calls"}},[e._v("#")]),e._v(" Accepting Forwarded calls")]),e._v(" "),t("p",[e._v("In order to support calls performed via the Forwarder, the Recipient contract must read the signer address from the\nlast 20 bytes of "),t("code",[e._v("msg.data")]),e._v(", as described in ERC-2771.")]),e._v(" "),t("h2",{attrs:{id:"rationale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),t("p",[e._v("Further relying on "),t("code",[e._v("msg.sender")]),e._v(" to authenticate end users by their externally-owned accounts is taking the Ethereum dapp ecosystem to a dead end.")]),e._v(" "),t("p",[e._v("A need for users to own Ether before they can interact with any contract has made a huge portion of use-cases for smart contracts non-viable,\nwhich in turn limits the mass adoption and enforces this vicious cycle.")]),e._v(" "),t("p",[t("code",[e._v("validUntil")]),e._v(" field uses a block number instead of timestamp in order to allow for better precision and integration\nwith other common block-based timers.")]),e._v(" "),t("h2",{attrs:{id:"security-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),t("p",[e._v("All contracts introducing support for the Forwarded requests thereby authorize this contract to perform any operation under any account.\nIt is critical that this contract has no vulnerabilities or centralization issues.")]),e._v(" "),t("h2",{attrs:{id:"copyright"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),t("p",[e._v("Copyright and related rights waived via "),t("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);