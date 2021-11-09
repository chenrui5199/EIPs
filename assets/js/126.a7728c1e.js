(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{517:function(t,e,a){"use strict";a.r(e);var s=a(46),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("A standard interface for insurance policies, based on ERC 721.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("The following standard allows for the implementation of a standard API for insurance policies within smart contracts.\nInsurance policies are financial assets which are unique in some aspects, as they are connected to a customer, a specific risk, or have other unique properties like premium, period, carrier, underwriter etc.\nNevertheless, there are many potential applications where insurance policies can be traded, transferred or otherwise treated as an asset.\nThe ERC 721 standard already provides the standard and technical means to handle policies as a specific class of non fungible tokens.\ninsurance In this proposal, we define a minimum metadata structure with properties which are common to the greatest possible class of policies.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("For a decentralized insurance protocol, a standard for insurance policies is crucial for interoperability of the involved services and application.\nIt allows policies to be bundled, securitized, traded in a uniform and flexible way by many independent actors like syndicates, brokers, and insurance companies.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.")]),t._v(" "),a("p",[t._v("An ERC-1523 compliant insurance policy is a non-fungible token which "),a("strong",[t._v("MUST adhere to the ERC-721 token standard")]),t._v(" and "),a("strong",[t._v("MUST implement theERC721Metadata and the ERC721Enumerable interface")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @title ERC-1523 Insurance Policy Standard")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///  Note: the ERC-165 identifier for this interface is 0x5a04be32")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ERC1523")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* is ERC721, ERC721Metadata, ERC721Enumerable */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("The implementor MAY choose values for the "),a("code",[t._v("name")]),t._v(" and "),a("code",[t._v("symbol")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("policy metadata extension")]),t._v(" is "),a("strong",[t._v("RECOMMENDED")]),t._v(" for ERC-1523 smart contracts.\nThis allows your smart contract to be interrogated for policy metadata.")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @title ERC-1523 Insurance Policy Standard, optional policy metadata extension")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @dev See ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///  Note: the ERC-165 identifier for this interface is 0x5a04be32")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ERC1523PolicyMetadata")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* is ERC1523 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @notice Metadata string for a given property.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Properties are identified via hash of their property path.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// e.g. the property "name" in the ERC721 Metadata JSON Schema has the path /properties/name')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// and the property path hash is the keccak256() of this property path. ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// this allows for efficient addressing of arbitrary properties, as the set of properties is potentially unlimited.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @dev Throws if `_propertyPathHash` is not a valid property path hash. ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("policyMetadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" _propertyPathHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" _property"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("In analogy to the “ERC721 Metadata JSON Schema”, the tokenURI "),a("strong",[t._v("MUST")]),t._v(" point to a JSON file with the following properties:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asset Metadata"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Identifies the asset to which this NFT represents"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Describes the asset to which this NFT represents"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("additional parameters according to the following table\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h3",{attrs:{id:"additional-parameters-for-the-metadata-json-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-parameters-for-the-metadata-json-schema"}},[t._v("#")]),t._v(" Additional parameters for the metadata JSON Schema")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Mandatory")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("carrier")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("Describes the carrier which takes the primary risk")])]),t._v(" "),a("tr",[a("td",[t._v("risk")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("Describes the risk")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("Describes the status of the policy, e.g. applied for, underwritten, expired")])]),t._v(" "),a("tr",[a("td",[t._v("parameters")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("no")]),t._v(" "),a("td",[t._v("Describes further parameters characterizing the risk")])]),t._v(" "),a("tr",[a("td",[t._v("terms")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("no")]),t._v(" "),a("td",[t._v("Describes legal terms & conditions which apply for this policy")])]),t._v(" "),a("tr",[a("td",[t._v("premium")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("no")]),t._v(" "),a("td",[t._v("A string representation of the premium, "),a("strong",[t._v("MAY")]),t._v(" contain currency denominator")])]),t._v(" "),a("tr",[a("td",[t._v("sum_insured")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("no")]),t._v(" "),a("td",[t._v("A string representation of the sum insured, "),a("strong",[t._v("MAY")]),t._v(" contain currency denominator")])])])]),t._v(" "),a("p",[t._v("Parameters which are mandatory "),a("strong",[t._v("MUST")]),t._v(" be included in the metadata JSON. Other parameters "),a("strong",[t._v("MAY")]),t._v(" be included. However, the proposed optional parameters "),a("strong",[t._v("SHOULD")]),t._v(" be used for the intended purpose, so e.g. if the premium amount would be included in the metadata, the parameter name "),a("strong",[t._v("SHOULD")]),t._v(' be "premium".\nAll parameters '),a("strong",[t._v("MAY")]),t._v(" be plain text or "),a("strong",[t._v("MAY")]),t._v(" also be URIs pointing to resources which contain the respective information, and which "),a("strong",[t._v("MAY")]),t._v(" be protected by an authentication mechanism.")]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("Insurance policies form an important class of financial assets, and it is natural to express those assets as a class of non-fungible tokens which adhere to the established ERC-721 standard.\nWe propose a standard for the accompanying metadata structures which are needed to uniquely define an insurance policy. Standardization is key because we expect decentralized insurance to receive widespread adoption and it is crucial to establish a unified standard to enable composability and the creation of universal toolsets.\nWe therefore propose a standardized naming scheme for the different parameters describing an insurance policy. We propose three mandatory parameters which need to be included in every NFT and further parameters which "),a("strong",[t._v("MAY")]),t._v(" be used, and for which we only standardize the naming conventions.")]),t._v(" "),a("h3",{attrs:{id:"mandatory-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mandatory-parameters"}},[t._v("#")]),t._v(" Mandatory parameters")]),t._v(" "),a("p",[t._v("While policies can have a multitude of possible properties, it is common that policies are issued by some entity, which is basically the entity responsible for paying out claims.\nSecond, an insurance policy is typically related to a specific risk. Some risks are unique, but there are cases where many policies share the same risk\n(e.g. all flight delay policies for the same flight).\nIn general, the relation of policies to risks is a many-to-one relation with the special case of a one-to-one relation.\nThird, a policy has a lifecycle of different statuses. Therefore the NFT\nWe believe that those four properties are necessary to describe a policy. For many applications, those properties may be even sufficient.")]),t._v(" "),a("h3",{attrs:{id:"optional-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-parameters"}},[t._v("#")]),t._v(" Optional parameters")]),t._v(" "),a("p",[t._v("Most policies need more parameters to characterize the risk and other features, like premium, period etc. The naming conventions are listed in the above table.\nHowever, any implementation "),a("strong",[t._v("MAY")]),t._v(" chose to implement more properties.")]),t._v(" "),a("h3",{attrs:{id:"on-chain-vs-off-chain-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-vs-off-chain-metadata"}},[t._v("#")]),t._v(" On-chain vs. off-chain metadata")]),t._v(" "),a("p",[t._v("For some applications it will be sufficient to store the metadata in an off-chain repository or database which can be addressed by the tokenURI resource locator.\nFor more advanced applications, it can be desirable to have metadata available on-chain.\nTherefore, we require that the "),a("code",[t._v("tokenURI")]),t._v(" "),a("strong",[t._v("MUST")]),t._v(" point to a JSON with the above structure, while the implementation of the "),a("code",[t._v("policyMetadata")]),t._v(" function is "),a("strong",[t._v("OPTIONAL")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);