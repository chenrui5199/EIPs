(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{670:function(t,a,s){"use strict";s.r(a);var n=s(46),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"simple-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),s("p",[t._v("Creates a new transaction type which executes a package of one or more\ntransactions, while passing status information to subsequent transactions.")]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("Introduce a new transaction type which includes a list of transactions that\nmust be executed serially by clients. Execution information (e.g. success,\ngas_used, etc.) will be propagated forward to the next transaction.")]),t._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),s("p",[t._v('Onboarding new users to Ethereum has been notoriously difficult due to the need\nfor new users to acquire enough ether to pay for their transactions. This\nhurdle has seen a significant allocation of resources over the years to solve.\nToday, that solution is meta-transactions. This is, unfortunately, a brittle\nsolution that requires signatures to be recovered within a smart contract to\nauthenticate the message. This EIP aims to provide a flexible framework for\nrelayers to "sponsor" many transactions at once, trustlessly.')]),t._v(" "),s("p",[t._v("Meta-transactions often use relay contracts to maintain nonces and allow users\nto pay for gas using alternative assets. They have historically been designed\nto catch reversions in their inner transactions by only passing a portion of\nthe available gas to the subcall. This allows them to be certain the outer call\nwill have enough gas to complete any required account, like processing a gas\npayment. This type of subcall has been considered bad practice for a long time,\nbut in the case of where you don't trust the subcalls, it is the only available\nsolution.")]),t._v(" "),s("p",[t._v("Transaction packages are an alternative that allow multiple transactions to be\nbundled into one package and executed atomically, similarly to how relay\ncontracts operate. Transactions are able to pass their result to subsequent\ntransactions. This allows for conditional workflows based on the outcome of\nprevious transactions. Although this functionality is already possible as\ndescribed above, workflows using transaction packages are more robust, because\nthey are protected from future changes to the gas schedule.")]),t._v(" "),s("p",[t._v("An important byproduct of this EIP is that it also facilitates bundling\ntransactions for single users.")]),t._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),s("p",[t._v("Introduce a new "),s("RouterLink",{attrs:{to:"/eip-2718.html"}},[t._v("EIP-2718")]),t._v(" transaction type where "),s("code",[t._v("id = 2")]),t._v(".")],1),t._v(" "),s("h4",{attrs:{id:"structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("struct TransactionPackage {\n    chain_id: u256,\n    children: [ChildPackage],\n    nonce: u64,\n    gas_price: u256,\n    v: u256,\n    r: u256,\n    s: u256\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h5",{attrs:{id:"hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" Hash")]),t._v(" "),s("p",[s("code",[t._v("keccak256(rlp([2, chain_id, children, nonce, gas_price, v, r, s])")])]),t._v(" "),s("h5",{attrs:{id:"signature-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signature-hash"}},[t._v("#")]),t._v(" Signature Hash")]),t._v(" "),s("p",[s("code",[t._v("keccak256(rlp([2, chain_id, children, nonce, gas_price])")])]),t._v(" "),s("h5",{attrs:{id:"receipt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receipt"}},[t._v("#")]),t._v(" Receipt")]),t._v(" "),s("p",[t._v("Each "),s("code",[t._v("ChildTransaction")]),t._v(" transaction will generate a "),s("code",[t._v("ChildReceipt")]),t._v(" after execution. Each\nof these receipts will be aggregated into a "),s("code",[t._v("Receipt")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("type Receipt = [ChildReceipt]\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("struct ChildReceipt {\n    status: u256,\n    cumulative_gas_used: u256,\n    logs_bloom: [u8; 256],\n    logs: [u8]\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h4",{attrs:{id:"child-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#child-transaction"}},[t._v("#")]),t._v(" Child Transaction")]),t._v(" "),s("p",[t._v("Let "),s("code",[t._v("ChildPackage")]),t._v(" be interpreted as follows.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("struct ChildPackage {\n    type: u8,\n    nonce: u64,\n    transactions: [ChildTransaction],\n    max_gas_price: u256,\n    v: u256,\n    r: u256,\n    s: u256\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("struct ChildTransaction {\n    flags: u8,\n    to: Address,\n    value: u256,\n    data: [u8],\n    extra: [u8],\n    gas_limit: u256\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h5",{attrs:{id:"types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" Types")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("type")]),t._v(" field is used to denote whether the "),s("code",[t._v("Child")]),t._v(" signer wishes to\ndelegate the "),s("code",[t._v("max_gas_price")]),t._v(" and "),s("code",[t._v("gas_limit")]),t._v(" choice to the "),s("code",[t._v("TransactionPackage")]),t._v("\nsigner.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("type")]),t._v(" "),s("th",[t._v("signature hash")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("0x00")])]),t._v(" "),s("td",[s("code",[t._v("keccak256(rlp([0, nonce, transactions, max_gas_price])")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("0x01")])]),t._v(" "),s("td",[s("code",[t._v("keccak256(rlp([1, nonce, transactions_without_gas_limit])")])])])])]),t._v(" "),s("h3",{attrs:{id:"validity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validity"}},[t._v("#")]),t._v(" Validity")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("TransactionPackage")]),t._v(" can be deemed valid or invalid as follows.")]),t._v(" "),s("div",{staticClass:"language-rust line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("is_valid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionPackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chain_id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chain_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n        tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n        state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nonce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nonce\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cum_limit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token closure-params"}},[s("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas_limit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" cum_limit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas_price "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intrinsic_gas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" child "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nonce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nonce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n            child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n            child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max_gas_price "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas_price\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" tx "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas_limit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intrinsic_gas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br")])]),s("h3",{attrs:{id:"results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),s("p",[t._v("Subsequent "),s("code",[t._v("ChildTransaction")]),t._v("s will be able to receive the result of the\nprevious "),s("code",[t._v("ChildTransaction")]),t._v(" via "),s("code",[t._v("RETURNDATACOPY (0x3E)")]),t._v(" in first frame of\nexecution, before making any subcalls. Each element, except the last, will be\n"),s("code",[t._v("0")]),t._v("-padded left to 32 bytes.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("struct Result {\n    // Status of the previous transaction\n    success: bool,\n    \n    // Total gas used by the previous transaction\n    gas_used: u256,\n    \n    // Cumulative gas used by previous transactions\n    cum_gas_used: u256,\n    \n    // The size of the return value\n    return_size: u256,\n    \n    // The return value of the previous transaction\n    return_value: [u8]\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h3",{attrs:{id:"intrinsic-cost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intrinsic-cost"}},[t._v("#")]),t._v(" Intrinsic Cost")]),t._v(" "),s("p",[t._v("Let the intrinsic cost of the transaction package be defined as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("fn intrinsic_gas(tx: TransactionPackage) u256 {\n    let data_gas = tx.children.map(|c| c.txs.map(|t| data_cost(&c.data)).sum()).sum();\n    17000 + 8000 * tx.children.len() + data_gas\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"execution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution"}},[t._v("#")]),t._v(" Execution")]),t._v(" "),s("p",[t._v("Transaction packages should be executed as follows:")]),t._v(" "),s("ol",[s("li",[t._v("Deduct the cumulative cost from the outer signer's balance.")]),t._v(" "),s("li",[t._v("Load the first child package, and execute the first child transaction.")]),t._v(" "),s("li",[t._v("Record all state changes, logs, the receipt, and refund any unused gas.")]),t._v(" "),s("li",[t._v("If there are no more child transactions, goto "),s("code",[t._v("8")]),t._v(".")]),t._v(" "),s("li",[t._v("Compute "),s("code",[t._v("Result")]),t._v(" for the previously executed transaction.")]),t._v(" "),s("li",[t._v("Prepare "),s("code",[t._v("Result")]),t._v(" to be available via return opcodes in the next\ntransaction's first frame.")]),t._v(" "),s("li",[t._v("Execute the next transaction, then goto "),s("code",[t._v("3")]),t._v(".")]),t._v(" "),s("li",[t._v("Load the next child package, then goto "),s("code",[t._v("7")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),s("h3",{attrs:{id:"each-child-has-its-own-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#each-child-has-its-own-signature"}},[t._v("#")]),t._v(" Each "),s("code",[t._v("Child")]),t._v(" has its own signature")]),t._v(" "),s("p",[t._v("For simplicity, the author has chosen to require each child package to specify\nits own signature, even if the signer is the same as the package signer. This\nchoice is made to allow for maximum flexibility, with minimal client changes.\nThis transaction can still be used by a single user at the cost of only one\nadditional signature recovery.")]),t._v(" "),s("h3",{attrs:{id:"childpackage-specifies-max-gas-price-instead-of-gas-price"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childpackage-specifies-max-gas-price-instead-of-gas-price"}},[t._v("#")]),t._v(" "),s("code",[t._v("ChildPackage")]),t._v(" specifies "),s("code",[t._v("max_gas_price")]),t._v(" instead of "),s("code",[t._v("gas_price")])]),t._v(" "),s("p",[t._v("Allowing child packages to specify a range of acceptable gas prices is\nstrictly more versatile than a static price. It gives relayers more flexibility\nin terms of building transaction bundles, and it makes it possible for relayers\nto try and achieve the best price for the transaction sender. With a fixed\nprice, the relayer may require the user to sign multiple different\ntransactions, with varying prices. This can be avoided by specifying a max\nprice, and communicating out-of-band how the urgency of the transaction (e.g.\nthe relayer should package it with the max price immediately vs. slowly\nincreasing the gas price).\nA future transaction type can be specified with only a single\nsignature, if such an optimization is desired.")]),t._v(" "),s("h3",{attrs:{id:"childpackage-is-also-typed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childpackage-is-also-typed"}},[t._v("#")]),t._v(" "),s("code",[t._v("ChildPackage")]),t._v(" is also typed")]),t._v(" "),s("p",[t._v("The type element serves a modest role in the transaction type, denoting whether\nthe transaction signer wishes to delegate control of the gas price and gas\nlimit to the outer signer. This is a useful UX improvement when interacting\nwith a trusted relayer, as once the user decides to make a transaction the\nrelayer can ensure it is included on chain by choosing the best gas price and\nlimit.")]),t._v(" "),s("h3",{attrs:{id:"the-flags-and-extra-fields-aren-t-used"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-flags-and-extra-fields-aren-t-used"}},[t._v("#")]),t._v(" The "),s("code",[t._v("flags")]),t._v(" and "),s("code",[t._v("extra")]),t._v(" fields aren't used")]),t._v(" "),s("p",[t._v("These fields are included to better support future changes to the transaction\ntype. This would likely be used in conjunction with the "),s("code",[t._v("flags")]),t._v(" and "),s("code",[t._v("type")]),t._v("\nfields. A benefit of explicitly defining them is that specialized serialization\nof RLP can be avoided, simplifing clients and downstream infrastructure. The\nauthor believe the cost of 2 bytes per transaction is acceptable for smoother\nintegration of future features.")]),t._v(" "),s("h2",{attrs:{id:"backwards-compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),s("p",[t._v("Contracts which rely on "),s("code",[t._v("ORIGIN (0x32) == CALLER (0x33) && RETURNDATASIZE (0x3D) == 0x00")]),t._v(" will now always fail in transaction packages, unless they are\nthe first executed transaction. It’s unknown if any contracts conduct this\ncheck.")]),t._v(" "),s("h2",{attrs:{id:"test-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),s("p",[t._v("TBD")]),t._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),s("p",[t._v("TBD")]),t._v(" "),s("h2",{attrs:{id:"security-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),s("h3",{attrs:{id:"managing-packages-efficiently-in-the-mempool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#managing-packages-efficiently-in-the-mempool"}},[t._v("#")]),t._v(" Managing packages efficiently in the mempool")]),t._v(" "),s("p",[t._v("The introduction of a new transaction type brings along new concerns regarding\nthe mempool. Done naively, it could turn into a DDoS vector for clients. This\nEIP has been written to reduce as much validation complexity as possible.")]),t._v(" "),s("p",[t._v("An existing invariant in the mempool that is desirable for new transactions to\nmaintain, is that transactions can be validated in constant time. This is also\npossible for packaged transactions. There is an inherent 10Mb limit for RLPx\nframes, so that would be the upper bound on transactions that could be included\nin a package. On the other hand, clients can also just configure their own\nbound locally (e.g. packages must be less than 1Mb). Validity can then be\ndetermined by using the function above.")]),t._v(" "),s("p",[t._v('Once a package has been validated, it must continuously be monitored for nonce\ninvalidations within its package. One potential way to achieve this efficiently\nis to modify the mempool to operate on thin pointers to the underlying\ntransaction. This will allow packages to ingest as many "single" transactions,\nsimplifying the facilities for monitoring changes. These "parts" of the package\ncan maintain a pointer to a structure with pointers to all the parts of the\npackage. This way, as soon as one part becomes invalid, it can request the\nparent to invalidate all outstanding parts of the package.')]),t._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),s("p",[t._v("Copyright and related rights waived via "),s("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);