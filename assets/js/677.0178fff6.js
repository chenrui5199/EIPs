(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{1099:function(e,t,a){"use strict";a.r(t);var r=a(46),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("A custom URI scheme to identify an EthPM registry, package, release, or specific contract asset within a release.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("When interacting with the EthPM ecosystem, users and tooling can benefit from a URI scheme to identify EthPM assets. Being able to specify a package, registry, or release with a single string makes simplifies the steps required to install, publish, or distribute EthPM packages.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[a("code",[e._v("scheme://registry_address[:chain_id][/package_name[@package_version[/json_pointer]]]")])]),e._v(" "),a("h4",{attrs:{id:"scheme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheme"}},[e._v("#")]),e._v(" "),a("code",[e._v("scheme")])]),e._v(" "),a("ul",[a("li",[e._v("Required")]),e._v(" "),a("li",[e._v("Must be one of "),a("code",[e._v("ethpm")]),e._v(" or "),a("code",[e._v("erc1319")]),e._v(". If future versions of the EthPM registry standard are designed and published via the ERC process, those ERCs will also be valid schemes.")])]),e._v(" "),a("h4",{attrs:{id:"registry-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registry-address"}},[e._v("#")]),e._v(" "),a("code",[e._v("registry_address")])]),e._v(" "),a("ul",[a("li",[e._v("Required")]),e._v(" "),a("li",[e._v("This "),a("strong",[e._v("SHOULD")]),e._v(" be either an ENS name or a 0x-prefixed, checksummed address. ENS names are more suitable for cases where mutability of the underlying asset is acceptable and there is implicit trust in the owner of the name. 0x prefixed addresses are more preferable in higher security cases to avoid needing to trust the controller of the name.")])]),e._v(" "),a("h4",{attrs:{id:"chain-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-id"}},[e._v("#")]),e._v(" "),a("code",[e._v("chain_id")])]),e._v(" "),a("ul",[a("li",[e._v("Optional")]),e._v(" "),a("li",[e._v("Integer representing the chain id on which the registry is located")]),e._v(" "),a("li",[e._v("If omitted, defaults to "),a("code",[e._v("1")]),e._v(" (mainnet).")])]),e._v(" "),a("h4",{attrs:{id:"package-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-name"}},[e._v("#")]),e._v(" "),a("code",[e._v("package_name")])]),e._v(" "),a("ul",[a("li",[e._v("Optional")]),e._v(" "),a("li",[e._v("String of the target package name")])]),e._v(" "),a("h4",{attrs:{id:"package-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-version"}},[e._v("#")]),e._v(" "),a("code",[e._v("package_version")])]),e._v(" "),a("ul",[a("li",[e._v("Optional")]),e._v(" "),a("li",[e._v("String of the target package version")]),e._v(" "),a("li",[e._v("If the package version contains any "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Percent-encoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("url unsafe characters"),a("OutboundLink")],1),e._v(", they "),a("strong",[e._v("MUST")]),e._v(" be safely escaped")]),e._v(" "),a("li",[e._v("Since semver is not strictly enforced by the ethpm spec, if the "),a("code",[e._v("package_version")]),e._v(" is omitted from a uri, tooling "),a("strong",[e._v("SHOULD")]),e._v(" avoid guessing in the face of any ambiguity and present the user with a choice from the available versions.")])]),e._v(" "),a("h4",{attrs:{id:"json-pointer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-pointer"}},[e._v("#")]),e._v(" "),a("code",[e._v("json_pointer")])]),e._v(" "),a("ul",[a("li",[e._v("Optional")]),e._v(" "),a("li",[e._v("A path that identifies a specific asset within a versioned package release.")]),e._v(" "),a("li",[e._v("This path "),a("strong",[e._v("MUST")]),e._v(" conform to the "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc6901",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON pointer"),a("OutboundLink")],1),e._v(" spec and resolve to an available asset within the package.")])]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Most interactions within the EthPM ecosystem benefit from a single-string representation of EthPM assets; from installing a package, to identifying a registry, to distributing a package. A single string that can faithfully represent any kind of EthPM asset, across the mainnet or testnets, reduces the mental overload for new users, minimizes configuration requirements for frameworks, and simplifies distribution of packages for package authors.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("A JSON file for testing various URIs can be found in the "),a("a",{attrs:{href:"https://github.com/ethpm/ethpm-spec/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ethpm-spec")]),a("OutboundLink")],1),e._v(" repository fixtures.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("The EthPM URI scheme has been implemented in the following libraries:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://eth-brownie.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brownie"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.trufflesuite.com/docs/truffle/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Truffle"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://ethpm-cli.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EthPM CLI"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("p",[e._v("In most cases, an EthPM URI points to an immutable asset, giving full security that the target asset has not been modified. However, in the case where an EthPM URI uses an ENS name as its registry address, it is possible that the ENS name has been redirected to a new registry, in which case the guarantee of immutability no longer exists.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);