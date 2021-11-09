(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{972:function(t,a,e){"use strict";e.r(a);var s=e(46),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),e("p",[t._v("This ERC proposes a specification about how to handle signed data in Ethereum contracts.")]),t._v(" "),e("h1",{attrs:{id:"motivation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),e("p",[t._v("Several multisignature wallet implementations have been created which accepts "),e("code",[t._v("presigned")]),t._v(" transactions. A "),e("code",[t._v("presigned")]),t._v(" transaction is a chunk of binary "),e("code",[t._v("signed_data")]),t._v(", along with signature ("),e("code",[t._v("r")]),t._v(", "),e("code",[t._v("s")]),t._v(" and "),e("code",[t._v("v")]),t._v("). The interpretation of the "),e("code",[t._v("signed_data")]),t._v(" has not been specified, leading to several problems:")]),t._v(" "),e("ul",[e("li",[t._v("Standard Ethereum transactions can be submitted as "),e("code",[t._v("signed_data")]),t._v(". An Ethereum transaction can be unpacked, into the following components: "),e("code",[t._v("RLP<nonce, gasPrice, startGas, to, value, data>")]),t._v(" (hereby called "),e("code",[t._v("RLPdata")]),t._v("), "),e("code",[t._v("r")]),t._v(", "),e("code",[t._v("s")]),t._v(" and "),e("code",[t._v("v")]),t._v(". If there are no syntactical constraints on "),e("code",[t._v("signed_data")]),t._v(", this means that "),e("code",[t._v("RLPdata")]),t._v(" can be used as a syntactically valid "),e("code",[t._v("presigned")]),t._v(" transaction.")]),t._v(" "),e("li",[t._v("Multisignature wallets have also had the problem that a "),e("code",[t._v("presigned")]),t._v(" transaction has not been tied to a particular "),e("code",[t._v("validator")]),t._v(", i.e a specific wallet. Example:\n"),e("ol",[e("li",[t._v("Users "),e("code",[t._v("A")]),t._v(", "),e("code",[t._v("B")]),t._v(" and "),e("code",[t._v("C")]),t._v(" have the "),e("code",[t._v("2/3")]),t._v("-wallet "),e("code",[t._v("X")])]),t._v(" "),e("li",[t._v("Users "),e("code",[t._v("A")]),t._v(", "),e("code",[t._v("B")]),t._v(" and "),e("code",[t._v("D")]),t._v(" have the "),e("code",[t._v("2/3")]),t._v("-wallet "),e("code",[t._v("Y")])]),t._v(" "),e("li",[t._v("User "),e("code",[t._v("A")]),t._v(" and "),e("code",[t._v("B")]),t._v(" submites "),e("code",[t._v("presigned")]),t._v(" transaction to "),e("code",[t._v("X")]),t._v(".")]),t._v(" "),e("li",[t._v("Attacker can now reuse their presigned transactions to "),e("code",[t._v("X")]),t._v(", and submit to "),e("code",[t._v("Y")]),t._v(".")])])])]),t._v(" "),e("h2",{attrs:{id:"specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),e("p",[t._v("We propose the following format for "),e("code",[t._v("signed_data")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("0x19 <1 byte version> <version specific data> <data to sign>.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Version "),e("code",[t._v("0")]),t._v(" has "),e("code",[t._v("<20 byte address>")]),t._v(" for the version specific data, and the "),e("code",[t._v("address")]),t._v(" is the intended validator. In the case of a Multisig wallet, that is the wallet's own address  .")]),t._v(" "),e("p",[t._v("The initial "),e("code",[t._v("0x19")]),t._v(" byte is intended to ensure that the "),e("code",[t._v("signed_data")]),t._v(" is not valid "),e("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/RLP",target:"_blank",rel:"noopener noreferrer"}},[t._v("RLP"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("For a single byte whose value is in the [0x00, 0x7f] range, that byte is its own RLP encoding.")])]),t._v(" "),e("p",[t._v("That means that any "),e("code",[t._v("signed_data")]),t._v(" cannot be one RLP-structure, but a 1-byte "),e("code",[t._v("RLP")]),t._v(" payload followed by something else. Thus, any ERC-191 "),e("code",[t._v("signed_data")]),t._v(" can never be an Ethereum transaction.")]),t._v(" "),e("p",[t._v("Additionally, "),e("code",[t._v("0x19")]),t._v(" has been chosen because since ethereum/go-ethereum#2940 , the following is prepended before hashing in personal_sign:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"\\x19Ethereum Signed Message:\\n" + len(message).\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Using "),e("code",[t._v("0x19")]),t._v(" thus makes it possible to extend the scheme by defining a version "),e("code",[t._v("0x45")]),t._v(" ("),e("code",[t._v("E")]),t._v(") to handle these kinds of signatures.")]),t._v(" "),e("h3",{attrs:{id:"registry-of-version-bytes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registry-of-version-bytes"}},[t._v("#")]),t._v(" Registry of version bytes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Version byte")]),t._v(" "),e("th",[t._v("EIP")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("0x00")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/zh/eip-191.html"}},[t._v("191")])],1),t._v(" "),e("td",[t._v("Data with intended validator")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x01")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/zh/eip-712.html"}},[t._v("712")])],1),t._v(" "),e("td",[t._v("Structured data")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x45")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/zh/eip-191.html"}},[t._v("191")])],1),t._v(" "),e("td",[e("code",[t._v("personal_sign")]),t._v(" messages")])])])]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("The following snippet has been written in Solidity 0.5.0.")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("submitTransactionPreSigned")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" destination"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" nonce"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" transactionHash"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Arguments when calculating hash to validate")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1: byte(0x19) - the initial 0x19 byte")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2: byte(0) - the version byte")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3: this - the validator address")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4-7 : Application specific data")]),t._v("\n    transactionHash "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x19")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("destination"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nonce"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sender "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ecrecover")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transactionHash"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("h2",{attrs:{id:"copyright"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),e("p",[t._v("Copyright and related rights waived via "),e("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);