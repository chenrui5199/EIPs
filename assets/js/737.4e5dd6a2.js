(window.webpackJsonp=window.webpackJsonp||[]).push([[737],{1163:function(e,t,a){"use strict";a.r(t);var n=a(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("The Sealed NFT Metadata Extension provides a mechanism to immortalize NFT metadata in a cost-effective manner.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This standard accomplishes three things; it provides a way for potential collectors to verify that the NFT metadata will not change, allows creators to immortalize metadata for multiple tokens at one time, and allows metadata for many NFTs to be read and cached from one file. A creator can call the "),a("code",[e._v("seal")]),e._v(" function for a range of one or many sequential NFTs. Included as an argument is a URI which points to a decentralized storage service like IPFS and will be stored in the smart contract. The URI will return a JSON object in which the keys are token IDs and the values are either a string which is a URI pointing to a metadata file stored on a decentralized file system, or raw metadata JSON for each token ID. The token ID(s) will then be marked as sealed in the smart contract and cannot be sealed again. The "),a("code",[e._v("seal")]),e._v(" function can be called after NFT creation, or during the NFT creation process.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("In the original ERC-721 standard, the metadata extension specifies a "),a("code",[e._v("tokenURI")]),e._v(' function which returns a URI for a single token ID. This may be hosted on IPFS or might be hosted on a centralized server. There\'s no guarantee that the NFT metadata will not change. This is the same for the ERC-1155 metadata extension. In addition to that - if you want to update the metadata for many NFTs you would need to do so in O(n) time, which as we know is not financially feasible at scale. By allowing for a decentralized URI to point to a JSON object of many NFT IDs we can solve this issue by providing metadata for many tokens at one time rather than one at a time. We can also provide methods which give transparency into whether the NFT has be explicitly "sealed" and that the metadata is hosted on a decentralized storage space.')]),e._v(" "),a("p",[e._v('There is not a way for the smart contract layer to communicate with a storage layer and as such we need a solution which provides a way for potential NFT collectors on Ethereum to verify that their NFT will not be "rug pulled". This standard provides a solution for that. By allowing creators to seal their NFTs during or after creation, they are provided with full flexibility when it comes to creating their NFTs. Decentralized storage means permanence - in the fast-moving world of digital marketing campaigns, or art projects mistakes can happen. As such, it is important for creators to have flexibility when creating their projects. Therefore, this standard allows creators to opt in at a time of their choosing. Mistakes do happen and metadata should be flexible enough so that creators can fix mistakes or create dynamic NFTs (see Beeple\'s CROSSROAD NFT). If there comes a time when the NFT metadata should be immortalized, then the creator can call the '),a("code",[e._v("seal")]),e._v(" method. Owners, potential owners, or platforms can verify that the NFT was sealed and can check the returned URI. If the "),a("code",[e._v("sealedURI")]),e._v(" return value is not hosted on a decentralized storage platform, or the "),a("code",[e._v("isSealed")]),e._v(" method does not return "),a("code",[e._v("true")]),e._v(" for the given NFT ID then it can be said that one cannot trust that these NFTs will not change at a future date and can then decide if they want to proceed with collecting the given NFT.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("interface SealedMetadata {\n  /**\n    @notice This function is used to set a sealed URI for the given range of tokens.\n    @dev\n      - If the sealed URI is being set for one token then the fromTokenId and toTokenId\n      values MUST be the same.\n\n      - If any token within the range of tokens specified has already\n      been sealed then this function MUST throw.\n\n      - This function MAY be called at the time of NFT creation, or after the NFTs have been created.\n\n      - It is RECOMMENDED that this function only be executable by either the creator of the smart contract,\n        or the creator of the NFTs, but this is OPTIONAL and should be implemented based on use case.\n\n      - This function MUST emit the Sealed event\n\n      - The URI argument SHOULD point to a JSON file hosted within a decentralized file system like IPFS\n\n    @param fromTokenId The first token in a consecutive range of tokens\n    @param toTokenId The ending token in a consecutive range of tokens\n    @param uri A URI which points to a JSON file hosted on a decentralized file system.\n  */\n  function seal(uint256 fromTokenId, uint256 toTokenId, string memory uri) external;\n\n  /**\n    @notice This function returns the URI which the sealed metadata can be found for the given token ID\n    @dev\n      - This function MUST throw if the token ID does not exist, or is not sealed\n\n    @param tokenId Token ID to retrieve the sealed URI for\n\n    @return The sealed URI in which the metadata for the given token ID can be found\n  */\n  function sealedURI(uint256 tokenId) external view returns (string);\n\n  /**\n    @notice This function returns a boolean stating if the token ID is sealed or not\n    @dev This function should throw if the token ID does not exist\n\n    @param tokenId The token ID that will be checked if sealed or not\n\n    @return Boolean stating if token ID is sealed\n  */\n  function isSealed(uint256 tokenId) external view returns (bool)\n\n  /// @dev This emits when a range of tokens is sealed\n  event Sealed(uint256 indexed fromTokenId, uint256 indexed toTokenId, string memory uri);\n\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br")])]),a("h3",{attrs:{id:"sealed-metadata-json-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sealed-metadata-json-format"}},[e._v("#")]),e._v(" Sealed Metadata JSON Format")]),e._v(" "),a("p",[e._v("The sealed metadata JSON file MAY contain metadata for many different tokens. The top level keys of the JSON object MUST be token IDs.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\ntype ERC721Metadata = {\n  name?: string;\n  image?: string;\n  description?: string;\n}\n\ntype SealedMetaDataJson = {\n  [tokenId: string]: string | ERC721Metadata;\n}\n\nconst sealedMetadata: SealedMetaDataJson = {\n    '1': {\n        name: 'Metadata for token with ID 1'\n    },\n    '2': {\n        name: 'Metadata for token with ID 2'\n    },\n    // Example pointing to another file\n    '3': 'ipfs://SOME_HASH_ON_IPFS'\n};\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br")])]),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[a("strong",[e._v("Rationale for rule not explicitly requiring that sealed URI be hosted on decentralized filestorage")])]),e._v(" "),a("p",[e._v("In order for this standard to remain future proof there is no validation within the smart contract that would verify the sealed URI is hosted on IPFS or another decentralized file storage system. The standard allows potential collectors and platforms to validate the URI on the client.")]),e._v(" "),a("p",[a("strong",[e._v("Rationale to include many NFT metadata objects, or URIs in one JSON file")])]),e._v(" "),a("p",[e._v("By including metadata for many NFTs in one JSON file we can eliminate the need for many transactions to set the metadata for multiple NFTs. Given that this file should not change NFT platforms, or explorers can cache the metadata within the file.")]),e._v(" "),a("p",[a("strong",[e._v("Rationale for emitting "),a("code",[e._v("Sealed")]),e._v(" event")])]),e._v(" "),a("p",[e._v("Platforms and explorers can use the "),a("code",[e._v("Sealed")]),e._v(" event to automatically cache metadata, or update information regarding specified NFTs.")]),e._v(" "),a("p",[a("strong",[e._v("Rationale for allowing URIs as values in the JSON file")])]),e._v(" "),a("p",[e._v("If a token's metadata is very large, or there are many tokens you can save file space by referencing another URI rather than storing the metadata JSON within the top level metadata file.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("There is no backwards compatibility with existing standards. This is an extension which could be added to existing NFT standards.")]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("p",[e._v("There are no security considerations related directly to the implementation of this standard.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);