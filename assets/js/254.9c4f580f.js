(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{650:function(e,t,s){"use strict";s.r(t);var r=s(46),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"simple-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),s("p",[e._v('EIP-2544 extends ENS client behavior to support "wildcard" resolution of subdomains. This is accomplished by using a parent domain\'s resolver if none is set on a given subdomain.')]),e._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v('The Ethereum Name Service Specification (EIP-137) establishes a two-step name resolution process. First, an ENS client takes a provided name, performs the namehash algorithm to determine the associated "node", and supplies that node to the ENS Registry contract to determine the resolver. Then, if a resolver has been set on the Registry, the client supplies that same node to the resolver contract, which will return the associated address or other record.')]),e._v(" "),s("p",[e._v("As currently specified, this process terminates if a resolver is not set on the ENS Registry for a given node. This EIP extends the existing name resolution process by adding an additional step if a resolver is not set for subdomain. This step strips out the leftmost label from the name, derives the node of the new fragment, and supplies that node to the ENS Registry. If a resolver is located for that node, the client supplies the original, complete node to that resolver contract to derive the relevant records.")]),e._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),s("p",[e._v("Many applications such as wallet providers, exchanges, and dapps have expressed a desire to issue ENS names for their users via custom subdomains on a shared parent domain. However, the cost of doing so is currently prohibitive for large user bases, as a distinct record must be set on the ENS Registry for each subdomain.")]),e._v(" "),s("p",[e._v("Furthermore, users cannot immediately utilize these subdomains upon account creation, as the transaction to assign a resolver for the node of the subdomain must first be submitted and mined on-chain. This adds unnecessary friction when onboarding new users, who coincidentally would often benefit greatly from the usability improvements afforded by an ENS name.")]),e._v(" "),s("p",[e._v("Enabling wildcard support allows for the design of more advanced resolvers that deterministically generate addresses and other records for unassigned subdomains. The generated addresses could map to counterfactual contract deployment addresses (i.e. "),s("code",[e._v("CREATE2")]),e._v(' addresses), to designated "fallback" addresses, or other schemes. Additionally, individual resolvers would still be assignable to any given subdomain, which would supersede the wildcard resolution using the parent resolver.')]),e._v(" "),s("p",[e._v("Another critical motivation with EIP-2544 is to enable wildcard resolution in a backwards-compatible fashion. It does not require modifying the current ENS Registry contract or any assigned resolvers, and continues to support existing ENS records — legacy ENS clients would simply fail to resolve wildcard records.")]),e._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),s("p",[e._v("The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.")]),e._v(" "),s("p",[e._v("EIP-2544-compliant ENS clients MUST perform the following sequence when determining the resolver for a given name:")]),e._v(" "),s("ol",[s("li",[e._v("Apply the namehash algorithm to the supplied name as specified in EIP-137 to derive the "),s("code",[e._v("node")]),e._v(".")]),e._v(" "),s("li",[e._v("Call the ENS Registry contract, supplying the node as the argument to "),s("code",[e._v("function resolver(bytes32 node) constant returns (address)")]),e._v(".")]),e._v(" "),s("li",[e._v("If an address other than the null address is returned, the client MUST use the returned address as the resolver.")]),e._v(" "),s("li",[e._v("If the null address is returned, the client MUST strip the leftmost label from the name to derive a new name.")]),e._v(" "),s("li",[e._v("If the only remaining label is a top-level domain, or if no labels remain, the client MUST refuse to interact with the resolver.")]),e._v(" "),s("li",[e._v("Apply the namehash algorithm to the new name as specified in EIP-137 to derive the "),s("code",[e._v("parentNode")]),e._v(".")]),e._v(" "),s("li",[e._v("Call the ENS Registry contract, supplying the parent node as the argument to "),s("code",[e._v("function resolver(bytes32 node) constant returns (address)")]),e._v(" to determine the resolver.")]),e._v(" "),s("li",[e._v("If the null address is returned from this second request, the client MUST refuse to interact with the resolver.")])]),e._v(" "),s("p",[e._v("In the event that a non-null resolver is located via this process, the client MUST supply the full, original "),s("code",[e._v("node")]),e._v(" to the resolver to derive the address or other records. As with EIP-137, clients attempting to resolve an address via "),s("code",[e._v("function addr(bytes32 node) constant returns (address)")]),e._v(" MUST refuse to interact with the returned address when the null address is returned.")]),e._v(" "),s("h3",{attrs:{id:"pseudocode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pseudocode"}},[e._v("#")]),e._v(" Pseudocode")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('function getNodeAndResolver(name) {\n    // 1. Apply the namehash algorithm to supplied name to determine the node.\n    const node = namehash(name);\n    \n    // 2. Attempt to retrieve a resolver from the ENS Registry using the node.\n    let resolver = ENS_REGISTRY.methods.resolver(node).call();\n    \n    // 3. Use the resolver if a non-null result is returned from the registry.\n    if (resolver != "0x0000000000000000000000000000000000000000") {\n        return (node, resolver);\n    }\n    \n    // 4. Remove the leftmost label from the name.\n    const labelsWithoutLeftmost = name.split(".").slice(1);\n    \n    // 5. Do not continue if only the top-level domain (or no domain) remains.\n    if (labelsWithoutLeftmost.length < 2) {\n        throw new Error("ENS resolver not found.");\n    }\n    \n    // 6. Apply the namehash algorithm to new name to determine the parent node.\n    const parentNode = namehash(labelsWithoutLeftmost.join("."));\n    \n    // 7. Attempt to retrieve a resolver from registry using the parent node.\n    resolver = ENS_REGISTRY.methods.resolver(parentNode).call();\n    \n    // 8. Do not continue if a null result is returned from the registry.\n    if (resolver == "0x0000000000000000000000000000000000000000") {\n        throw new Error("ENS resolver not found.");\n    }\n\n    // Return the located resolver along with the original node.\n    return (node, resolver);\n};\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br")])]),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),s("p",[e._v("The proposed implementation supports wildcard resolution in a manner that minimizes the impact to existing systems. It also reuses existing algorithms and procedures to the greatest possible extent, thereby easing the burden placed on authors and maintainers of various ENS clients.")]),e._v(" "),s("p",[e._v("It also recognizes an existing consensus concerning the desirability of wildcard resolution for ENS, enabling more widespread adoption of the original specification by solving for a key scalability obstacle.")]),e._v(" "),s("p",[e._v("By not recursively applying the namehash operation after removing successive leftmost subdomains, round-trip requests are reduced and edge cases around overriding ownership of nested subdomains are adequately handled. ENS clients may optimize further for reduced latency by utilizing a helper contract that performs the logic necessary to support wildcard resolution.")]),e._v(" "),s("h2",{attrs:{id:"backwards-compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),s("p",[e._v("There are no backwards compatibility concerns — existing ENS clients that are compliant with EIP-137 will fail to resolve wildcard records and refuse to interact with them, while those compliant with EIP-2544 will continue to correctly resolve, or reject, existing ENS records.")]),e._v(" "),s("h2",{attrs:{id:"security-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),s("p",[e._v("While compliant ENS clients will continue to refuse to resolve records without a resolver, there is still the risk that an improperly-configured client will refer to an incorrect resolver, or will not reject interactions with the null address when a resolver cannot be located.")]),e._v(" "),s("p",[e._v("Additionally, resolvers supporting completely arbitrary wildcard subdomain resolution will increase the likelihood of funds being sent to unintended recipients as a result of typos. Applications that implement such resolvers should consider making additional name validation available to clients depending on the context, or implementing features that support recoverability of funds.")]),e._v(" "),s("p",[e._v("There is also the possibility that some applications might require that no resolver be set for certain subdomains. For this to be problematic, the parent domain would need to successfully resolve the given subdomain node — to the knowledge of the authors, no application currently supports this feature or expects that subdomains should not resolve to a record.")]),e._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),s("p",[e._v("Copyright and related rights waived via "),s("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);