(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{645:function(e,t,a){"use strict";a.r(t);var o=a(46),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1-abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-abstract"}},[e._v("#")]),e._v(" 1. Abstract")]),e._v(" "),a("p",[e._v("This presents a method to improve a universal method of login to the ethereum blockchain, leveraging the metadata storage provided by the ENS. We consider a user to be logged in when we have an "),a("RouterLink",{attrs:{to:"/eip-1193.html"}},[e._v("EIP-1193")]),e._v(" provider that can sign transaction and messages on his behalf. This method is inspired by "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=1LVwWknE-NQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alex Van de Sande's work"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://web3connect.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web3Connect"),a("OutboundLink")],1),e._v(". In the future, the approach described here-after should be extended to work with any blockchain.")],1),e._v(" "),a("h2",{attrs:{id:"_2-motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),a("p",[e._v("Multiple wallet solutions can be used to interact with the Ethereum blockchain. Some (metamask, gnosis, ...) are compatible as they inject a standardized wallet object in the browser without requiring any effort from the Dapp developers, but they require an effort on the user side (user has to install the plugin). Other solutions (Portis, Authereum, Torus, Universal Login, ...) propose a more seamless flow to non-crypto-aware users but require an integration effort from the Dapp developers. Hardware wallet (ledger, trezor, keepkey, ...) also require integration effort from the Dapp developers.")]),e._v(" "),a("p",[e._v("When Dapps integrate login with multiple solutions, they rely on the user choosing the correct wallet-provider. This could prove increasingly difficult as the number of wallet-provider increases, particularly for novice users. Additionally, if decentralized applications pick and choose only a handful of wallets to support, the current incumbent wallets will have a distinct advantage and new wallets will struggle to find adoption. This will create a less competitive environment and stifle innovation. Rather than relying on the user choosing which wallet-provider to connect with (as does Web3Connect), ENSLogin proposes to use user-owned ENS domain as entry points. Metadata attached to these ENS domains is used to detect which wallet-provider if used by the corresponding account.")]),e._v(" "),a("p",[e._v("That way, ENSLogin would allow any user to connect to any Dapp with any wallet, using a simple domain as a login.")]),e._v(" "),a("h2",{attrs:{id:"_3-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-description"}},[e._v("#")]),e._v(" 3. Description")]),e._v(" "),a("h3",{attrs:{id:"_3-1-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-overview"}},[e._v("#")]),e._v(" 3.1. Overview")]),e._v(" "),a("p",[e._v("The ENSLogin works as follow:")]),e._v(" "),a("ul",[a("li",[e._v("Request an ENS domain from the user")]),e._v(" "),a("li",[e._v("Resolve the ENS domain to retrieve (see "),a("RouterLink",{attrs:{to:"/eip-137.html"}},[e._v("EIP-137")]),e._v(")\n"),a("ul",[a("li",[e._v("An address (see "),a("RouterLink",{attrs:{to:"/eip-137.html"}},[e._v("EIP-137")]),e._v(")")],1),e._v(" "),a("li",[e._v("A text entry (see "),a("RouterLink",{attrs:{to:"/eip-634.html"}},[e._v("EIP-634")]),e._v(")")],1)])],1),e._v(" "),a("li",[e._v("Interpret the text entry and download the file it points to")]),e._v(" "),a("li",[e._v("Evaluate the content of the downloaded file")]),e._v(" "),a("li",[e._v("Return the corresponding object to the Dapp")])]),e._v(" "),a("p",[e._v("At this point, the app should process like with any web3 provider. Calling the "),a("code",[e._v("enable()")]),e._v(" functions should ask the users for wallet specific credentials is needed.")]),e._v(" "),a("p",[e._v("This workflow is to be implemented by an SDK that Dapp could easily import. The SDK would contain the resolution mechanism and support for both centralized and decentralized storage solution. Wallet-provider specific code should NOT be part of SDK. Wallet-provider specific code should only be present in the external file used to generate the web3 provider.")]),e._v(" "),a("h3",{attrs:{id:"_3-2-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-details"}},[e._v("#")]),e._v(" 3.2. Details")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Text entry resolution:")]),e._v(" A pointer to the code needed to instantiate the wallet-provider is recorded using the ENS support for text entries (see "),a("RouterLink",{attrs:{to:"/eip-634.html"}},[e._v("EIP-634")]),e._v("). The corresponding key is "),a("code",[e._v("enslogin")]),e._v(" ("),a("strong",[e._v("subject to change")]),e._v("). If no value is associated with the key "),a("code",[e._v("enslogin")]),e._v(" at the targeted domain, we fallback to metadata store on the parent's node with the key "),a("code",[e._v("enslogin-default")]),e._v(" ("),a("strong",[e._v("subject to change")]),e._v(").\n"),a("strong",[e._v("Example:")]),e._v(" for the ens domain "),a("code",[e._v("username.domain.eth")]),e._v(", the resolution would look for (in order):")],1),e._v(" "),a("ul",[a("li",[a("code",[e._v('resolver.at(ens.owner(nodehash("username.domain.eth"))).text(nodehash("username.domain.eth"), \'enslogin\')')])]),e._v(" "),a("li",[a("code",[e._v('resolver.at(ens.owner(nodehash("domain.eth"))).text(nodehash("domain.eth"), \'enslogin-default\')')])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Provider link:")]),e._v(" Code for instantiating the wallet-provider must be pointed to in a standardized manner. "),a("strong",[e._v("This is yet not specified.")]),e._v(" The current approach uses a human-readable format "),a("code",[e._v("scheme://path")]),e._v(" such as:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ipfs://Qm12345678901234567890123456789012345678901234")])]),e._v(" "),a("li",[a("code",[e._v("https://server.com/enslogin-module-someprovider")])])]),e._v(" "),a("p",[e._v("And adds a suffix depending on the targeted blockchain type (see "),a("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SLIP 44"),a("OutboundLink")],1),e._v(") and language. Canonical case is a webapp using ethereum so the target would be:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ipfs://Qm12345678901234567890123456789012345678901234/60/js")])]),e._v(" "),a("li",[a("code",[e._v("https://server.com/enslogin-module-someprovider/60/js")])])]),e._v(" "),a("p",[e._v("Note that this suffix mechanism is compatible with http/https as well as IPFS. It is a constraint on the storage layer as some may not be able to do this kind of resolution.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Provider instantiation:")])]),e._v(" "),a("ul",[a("li",[e._v("[JAVASCRIPT/ETHEREUM] The file containing the wallet-provider's code should inject a function "),a("code",[e._v("global.provider: (config) => Promise<web3provider>")]),e._v(" that returns a promise to a standardized provider object. For EVM blockchains, the object should follow "),a("RouterLink",{attrs:{to:"/eip-1193.html"}},[e._v("EIP-1193")]),e._v(".")],1),e._v(" "),a("li",[e._v("Other blockchain types/langages should be detailed in the future.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Configuration object:")]),e._v(" In addition to the username (ENS domain), the Dapp should have the ability to pass a configuration object that could be used by the wallet-provider instantiating function. This configuration should include:")]),e._v(" "),a("ul",[a("li",[e._v("A body (common to all provider) that specify details about the targeted chain (network name / node, address of the ens entrypoint ...). If any of these are missing, a fallback can be used (mainnet as a default network, bootstrapping an in-browser IPFS node, ...).")]),e._v(" "),a("li",[e._v("Wallet provider-specific fields ("),a("strong",[e._v("optional")]),e._v(", starting with one underscore "),a("code",[e._v("_")]),e._v(") can be added to pass additional, wallet-provider specific, parameters / debugging flags.")]),e._v(" "),a("li",[e._v("SDK specific fields ("),a("strong",[e._v("optional")]),e._v(", starting with two underscores "),a("code",[e._v("__")]),e._v(") can be used to pass additional arguments.")])]),e._v(" "),a("p",[e._v("Minimal configuration:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n\tprovider: {\n\t\tnetwork: 'goerli'\n\t}\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Example of advanced configuration object:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n\tprovider: {\n\t\tnetwork: 'goerli',\n\t\tens:     '0x112234455c3a32fd11230c42e7bccd4a84e02010'\n\t},\n\tipfs: {\n\t\thost: 'ipfs.infura.io',\n\t\tport: 5001,\n\t\tprotocol: 'https'\n\t},\n\t_authereum: {...},\n\t_portis: {...},\n\t_unilogin: {...},\n\t_torus: {...},\n\t__callbacks: {\n\t\tresolved: (username, addr, descr) => {\n\t\t\tconsole.log(`[CALLBACKS] resolved: ${username} ${addr} ${descr}`);\n\t\t},\n\t\tloading: (protocol, path) => {\n\t\t\tconsole.log(`[CALLBACKS] loading: ${protocol} ${path}`);\n\t\t},\n\t\tloaded: (protocol, path) => {\n\t\t\tconsole.log(`[CALLBACKS] loaded: ${protocol} ${path}`);\n\t\t}\n\t}\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])])])]),e._v(" "),a("p",[a("strong",[e._v("TODO")]),e._v(" "),a("em",[e._v("(maybe move that part to section 6.1)")]),e._v(":\nAdd "),a("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SLIP 44"),a("OutboundLink")],1),e._v(" compliant blockchain description to the config for better multichain support. This will require a additional field "),a("code",[e._v("ENS network")]),e._v(" to know which ethereum network to use for resolution when the targeted blockchain/network is not ethereum (could also be used for cross chain resolution on ethereum, for example xDAI login with metadata stored on mainnet)")]),e._v(" "),a("h3",{attrs:{id:"_3-3-decentralization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-decentralization"}},[e._v("#")]),e._v(" 3.3. Decentralization")]),e._v(" "),a("p",[e._v("Unlike solution like Web3Connect, ENSLogin proposes a modular approach that is decentralized by nature.\nThe code needed for a Dapp to use ENSLogin (hereafter referred to as the SDK) only contains lookup mechanism for the ethereum blockchain and the data storages solutions. The solution is limited by the protocols (https / ipfs / ...) that the SDK can interact with. Beyond that, any wallet-provider that follows the expected structure and that is available through one of the supported protocol is automatically compatible with all the Dapps proposing ENSLogin support. There is no need to go through a centralized approval process. Furthermore, deployed SDK do not need to be upgraded to benefit from the latest wallet updates. The only permissioned part of the protocol is in the ENS control of the users over the metadata that describes their wallet-provider implementation. Users could also rely on the fallback mechanism to have the wallet-provider update it for them.")]),e._v(" "),a("h3",{attrs:{id:"_3-4-incentives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-incentives"}},[e._v("#")]),e._v(" 3.4. Incentives")]),e._v(" "),a("p",[e._v("We believe ENSLogin's biggest strength is the fact that it aligns the incentives of Dapp developers and wallet-providers to follow this standard.")]),e._v(" "),a("ul",[a("li",[e._v("A wallet-provider that implements the required file and make them available will ensure the compatibility of its wallet with all Dapps using ENSLogin. This will remove the burden of asking all Dapps to integrate their solutions, which Dapps are unlikely to do until the wallet as strong userbase. Consequently, ENSLogin will improve the competition between wallet-providers and encourage innovation in that space")]),e._v(" "),a("li",[e._v("A Dapp that uses ENSLogin protocol, either by including the ENSLogin's SDK or by implementing compatible behaviour, will make itself available to all the users of all the compatible wallet. At some point, being compatible with ENSLogin will be the easiest to reach a large user-base.")]),e._v(" "),a("li",[e._v("ENSLogin should be mostly transparent for the users. Most wallet provider will set up the necessary entries without requiring any effort from the user. Advanced users can take control over the wallet resolution process, which will be simple once the right tooling is available.")])]),e._v(" "),a("h3",{attrs:{id:"_3-5-drawbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-drawbacks"}},[e._v("#")]),e._v(" 3.5. Drawbacks")]),e._v(" "),a("p",[e._v("While ENSLogin allows dapps to support any wallet for logging in, dapps still must choose which wallets they suggest to users for registration. This can be done through a component like Web3Connect or BlockNative's")]),e._v(" "),a("h2",{attrs:{id:"_4-prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-prototype"}},[e._v("#")]),e._v(" 4. Prototype")]),e._v(" "),a("p",[a("strong",[e._v("TODO")])]),e._v(" "),a("h2",{attrs:{id:"_5-support-by-the-community"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-support-by-the-community"}},[e._v("#")]),e._v(" 5. Support by the community")]),e._v(" "),a("h3",{attrs:{id:"_5-1-adoption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-adoption"}},[e._v("#")]),e._v(" 5.1. Adoption")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Live")]),e._v(" "),a("th",[e._v("Module")]),e._v(" "),a("th",[e._v("Assigns ENS names")]),e._v(" "),a("th",[e._v("support by default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Argent")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Authereum")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Fortmatic")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Gnosis Safe")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("yes*")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Ledger")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("beta")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("KeepKey")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Metamask")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Opera")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("yes*")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Portis")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("SquareLink")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Shipl")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Torus")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("Trezor")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("no")])]),e._v(" "),a("tr",[a("td",[e._v("UniLogin")]),e._v(" "),a("td",[e._v("beta")]),e._v(" "),a("td",[e._v("beta")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("no")])])])]),e._v(" "),a("p",[e._v("*use the metamask module")]),e._v(" "),a("h2",{attrs:{id:"_6-possible-evolutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-possible-evolutions"}},[e._v("#")]),e._v(" 6. Possible evolutions")]),e._v(" "),a("h3",{attrs:{id:"_6-1-multichain-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-multichain-support"}},[e._v("#")]),e._v(" 6.1. Multichain support")]),e._v(" "),a("p",[a("strong",[e._v("TODO")])]),e._v(" "),a("h2",{attrs:{id:"_7-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-faq"}},[e._v("#")]),e._v(" 7. FAQ")]),e._v(" "),a("h3",{attrs:{id:"_7-1-can-anyone-connect-with-my-login-where-are-my-private-keys-stored"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-can-anyone-connect-with-my-login-where-are-my-private-keys-stored"}},[e._v("#")]),e._v(" 7.1. Can anyone connect with my login? Where are my private keys stored?")]),e._v(" "),a("p",[e._v("ENSLogin only has access to what is recorded on the ENS, namely your address and the provider you use. Private key management is a is handled by the provider and is outside ENSLogin's scope. Some might store the key on disk. Other might rely on custodial keys stored on a remote (hopefully secure) server. Others might use a dedicated hardware component to handle signature and never directly have access to the private key.")]),e._v(" "),a("h3",{attrs:{id:"_7-2-how-do-i-get-an-ens-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-how-do-i-get-an-ens-login"}},[e._v("#")]),e._v(" 7.2. How do I get an ENS Login?")]),e._v(" "),a("p",[a("strong",[e._v("TODO")]),e._v(" (this might need a separate ERC)")])])}),[],!1,null,null,null);t.default=s.exports}}]);