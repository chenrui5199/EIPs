(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{1223:function(t,a,s){"use strict";s.r(a);var e=s(46),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v('Implements a set of changes that serve the combined purpose of "abstracting out" signature verification and nonce checking, allowing users to create "account contracts" that perform any desired signature/nonce checks instead of using the mechanism that is currently hard-coded into transaction processing.')]),t._v(" "),s("h1",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[t._v("METROPOLIS_FORK_BLKNUM: TBD")]),t._v(" "),s("li",[t._v("CHAIN_ID: same as used for EIP 155 (ie. 1 for mainnet, 3 for testnet)")]),t._v(" "),s("li",[t._v("NULL_SENDER: 2**160 - 1")])]),t._v(" "),s("h1",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),s("p",[t._v("If "),s("code",[t._v("block.number >= METROPOLIS_FORK_BLKNUM")]),t._v(", then:")]),t._v(" "),s("ol",[s("li",[t._v("If the signature of a transaction is "),s("code",[t._v("(CHAIN_ID, 0, 0)")]),t._v(" (ie. "),s("code",[t._v("r = s = 0")]),t._v(", "),s("code",[t._v("v = CHAIN_ID")]),t._v("), then treat it as valid and set the sender address to "),s("code",[t._v("NULL_SENDER")])]),t._v(" "),s("li",[t._v("Transactions of this form MUST have gasprice = 0, nonce = 0, value = 0, and do NOT increment the nonce of account NULL_SENDER.")]),t._v(" "),s("li",[t._v("Create a new opcode at "),s("code",[t._v("0xfb")]),t._v(", "),s("code",[t._v("CREATE2")]),t._v(", with 4 stack arguments (value, salt, mem_start, mem_size) which sets the creation address to "),s("code",[t._v("sha3(sender + salt + sha3(init code)) % 2**160")]),t._v(", where "),s("code",[t._v("salt")]),t._v(" is always represented as a 32-byte value.")]),t._v(" "),s("li",[t._v("Add to "),s("em",[t._v("all")]),t._v(" contract creation operations, including transactions and opcodes, the rule that if a contract at that address already exists and has non-empty code OR non-empty nonce, the operation fails and returns 0 as if the init code had run out of gas. If an account has empty code and nonce but nonempty balance, the creation operation may still succeed.")])]),t._v(" "),s("h1",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),s("p",[t._v('The goal of these changes is to set the stage for abstraction of account security. Instead of having an in-protocol mechanism where ECDSA and the default nonce scheme are enshrined as the only "standard" way to secure an account, we take initial steps toward a model where in the long term all accounts are contracts, contracts can pay for gas, and users are free to define their own security model.')]),t._v(" "),s("p",[t._v("Under EIP 86, we can expect users to store their ether in contracts, whose code might look like the following (example in Serpent):")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get signature from tx data")]),t._v("\nsig_v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsig_r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsig_s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get tx arguments")]),t._v("\ntx_nonce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntx_to "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntx_value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntx_gasprice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntx_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldatasize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldatasize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get signing hash")]),t._v("\nsigning_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldatasize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("mstore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signing_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startgas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldataload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signing_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("calldatasize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsigning_hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sha3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signing_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Perform usual checks")]),t._v("\nprev_nonce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("sload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" tx_nonce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" prev_nonce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" tx_value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" tx_gasprice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startgas\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("ecrecover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signing_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sig_v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sig_r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sig_s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pubkey "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hash")]),t._v(" here"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update nonce")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("sstore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev_nonce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pay for gas")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("send"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MINER_CONTRACT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx_gasprice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startgas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Make the main call")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx_to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get remaining gas payments back")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MINER_CONTRACT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("p",[t._v('This can be thought of as a "forwarding contract". It accepts data from the "entry point" address 2**160 - 1 (an account that anyone can send transactions from), expecting that data to be in the format '),s("code",[t._v("[sig, nonce, to, value, gasprice, data]")]),t._v(". The forwarding contract verifies the signature, and if the signature is correct it sets up a payment to the miner and then sends a call to the desired address with the provided value and data.")]),t._v(" "),s("p",[t._v("The benefits that this provides lie in the most interesting cases:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Multisig wallets")]),t._v(": currently, sending from a multisig wallet requires each operation to be ratified by the participants, and each ratification is a transaction. This could be simplified by having one ratification transaction include signatures from the other participants, but even still it introduces complexity because the participants' accounts all need to be stocked up with ETH. With this EIP, it will be possible to just have the contract store the ETH, send a transaction containing all signatures to the contract directly, and the contract can pay the fees.")]),t._v(" "),s("li",[s("strong",[t._v("Ring signature mixers")]),t._v(": the way that ring signature mixers work is that N individuals send 1 coin into a contract, and then use a linkable ring signature to withdraw 1 coin later on. The linkable ring signature ensures that the withdrawal transaction cannot be linked to the deposit, but if someone attempts to withdraw twice then those two signatures can be linked and the second one prevented. However, currently there is a privacy risk: to withdraw, you need to have coins to pay for gas, and if these coins are not properly mixed then you risk compromising your privacy. With this EIP, you can pay for gas straight our of your withdrawn coins.")]),t._v(" "),s("li",[s("strong",[t._v("Custom cryptography")]),t._v(": users can upgrade to ed25519 signatures, Lamport hash ladder signatures or whatever other scheme they want on their own terms; they do not need to stick with ECDSA.")]),t._v(" "),s("li",[s("strong",[t._v("Non-cryptographic modifications")]),t._v(": users can require transactions to have expiry times (this being standard would allow old empty/dust accounts to be flushed from the state securely), use k-parallelizable nonces (a scheme that allows transactions to be confirmed slightly out-of-order, reducing inter-transaction dependence), or make other modifications.")])]),t._v(" "),s("p",[t._v("(2) and (3) introduce a feature similar to bitcoin's P2SH, allowing users to send funds to addresses that provably map to only one particular piece of code. Something like this is crucial in the long term because, in a world where all accounts are contracts, we need to preserve the ability to send to an account before that account exists on-chain, as that's a basic functionality that exists in all blockchain protocols today.")]),t._v(" "),s("h1",{attrs:{id:"miner-and-transaction-replaying-strategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#miner-and-transaction-replaying-strategy"}},[t._v("#")]),t._v(" Miner and transaction replaying strategy")]),t._v(" "),s("p",[t._v("Note that miners would need to have a strategy for accepting these transactions. This strategy would need to be very discriminating, because otherwise they run the risk of accepting transactions that do not pay them any fees, and possibly even transactions that have no effect (eg. because the transaction was already included and so the nonce is no longer current).")]),t._v(" "),s("p",[t._v('One simple strategy is to have a set of regexps that the to address of an account would be checked against, each regexp corresponding to a "standard account type" which is known to be "safe" (in the sense that if an account has that code, and a particular check involving the account balances, account storage and transaction data passes, then if the transaction is included in a block the miner will get paid), and mine and relay transactions that pass these checks.')]),t._v(" "),s("p",[t._v("One example would be to check as follows:")]),t._v(" "),s("ol",[s("li",[t._v("Check that the to address has code which is the compiled version of the Serpent code above, with "),s("code",[t._v("<pubkey hash here>")]),t._v(" replaced with any public key hash.")]),t._v(" "),s("li",[t._v("Check that the signature in the transaction data verifies with that key hash.")]),t._v(" "),s("li",[t._v("Check that the gasprice in the transaction data is sufficiently high")]),t._v(" "),s("li",[t._v("Check that the nonce in the state matches the nonce in the transaction data")]),t._v(" "),s("li",[t._v("Check that there is enough ether in the account to pay for the fee")])]),t._v(" "),s("p",[t._v("If all five checks pass, relay and/or mine the transaction.")]),t._v(" "),s("p",[t._v("A looser but still effective strategy would be to accept any code that fits the same general format as the above, consuming only a limited amount of gas to perform nonce and signature checks and having a guarantee that transaction fees will be paid to the miner. Another strategy is to, alongside other approaches, try to process any transaction that asks for less than 250,000 gas, and include it only if the miner's balance is appropriately higher after executing the transaction than before it.")]),t._v(" "),s("h1",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),s("p",[t._v("Copyright and related rights waived via CC0.")])])}),[],!1,null,null,null);a.default=n.exports}}]);