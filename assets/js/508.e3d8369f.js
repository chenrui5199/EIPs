(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{921:function(a,s,t){"use strict";t.r(s);var e=t(46),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"simple-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[a._v("#")]),a._v(" Simple Summary")]),a._v(" "),t("p",[a._v("This EIP modifies ethash in order to break ASIC miners specialized for the current ethash mining algorithm.")]),a._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[a._v("#")]),a._v(" Abstract")]),a._v(" "),t("p",[a._v('This EIP pursue "obsolete current ASIC miners" by modifying PoW algorithm in a very low risk manner and update to latest hash algorithm from deprecated FNV Hash algorithms.')]),a._v(" "),t("p",[a._v("Following TEthashV1 algorithm suggests safe transition of PoW algorithms and secure the FNV Algorithm in MIX Parts.")]),a._v(" "),t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[a._v("#")]),a._v(" Motivation")]),a._v(" "),t("p",[a._v("Provide original Ethash proof of work verification with minimal set of changes by updating FNV0 algorithm")]),a._v(" "),t("h2",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[a._v("#")]),a._v(" Specification")]),a._v(" "),t("h4",{attrs:{id:"_1-reference-materials-on-ethash-fnv0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-reference-materials-on-ethash-fnv0"}},[a._v("#")]),a._v(" 1. Reference materials on ETHASH FNV0")]),a._v(" "),t("h4",{attrs:{id:"where-fnv-applied-on-ethash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-fnv-applied-on-ethash"}},[a._v("#")]),a._v(" Where FNV Applied on ETHASH")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("In "),t("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/Ethash",target:"_blank",rel:"noopener noreferrer"}},[a._v("ETHASH"),t("OutboundLink")],1),a._v(" , FNV Hash is used on")]),a._v(" "),t("ul",[t("li",[t("ol",[t("li",[a._v("On data aggregation function, MIX parts.")])])]),a._v(" "),t("li",[t("p",[a._v("Ethash Algorithm")])])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  Header + Nonce\n         |\n      Keccak \n         |\n    **[MIX 0]**  --\x3e **[DAG Page]**\n         |               |\n       Mixing         <--|\n        ...\n         |\n    **[Mix 63]**\n         |\n         |-----\x3e Mix64  [Process] ---\x3e Mix Digest [32B]\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("ul",[t("li",[a._v("FNV used in DAG Generation and Mixing for random access or DAG Page.")])])])]),a._v(" "),t("h4",{attrs:{id:"_2-current-applied-ethash-fnv-hash-implementation-is-deprecated-now"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-current-applied-ethash-fnv-hash-implementation-is-deprecated-now"}},[a._v("#")]),a._v(" 2. Current applied Ethash FNV hash implementation is deprecated now.")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function#FNV-0_hash_(deprecated)",target:"_blank",rel:"noopener noreferrer"}},[a._v("FNV-0_hash (deprecated)"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("It is a simple way of hashing algorithm")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" hash = 0\n for each byte_of_data to be hashed\n  hash = hash × FNV_prime\n  hash = hash XOR octet_of_data\n return hash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("When analysed FNV-0 , there's very weak "),t("a",{attrs:{href:"https://simple.wikipedia.org/wiki/Avalanche_effect",target:"_blank",rel:"noopener noreferrer"}},[a._v("avalanche effect"),t("OutboundLink")],1),a._v(", when hash input changes on 1~2bits. refer "),t("a",{attrs:{href:"https://github.com/tao-foundation/FNV-Analysis#how-to-test-and-analysis-reference-test-code",target:"_blank",rel:"noopener noreferrer"}},[a._v("FNV-Analysis reference section"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("We need to research and apply newer FNV hash or short message hash algorithm.")]),a._v(" "),t("h4",{attrs:{id:"_3-fnv1a-hash-algorithm-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-fnv1a-hash-algorithm-description"}},[a._v("#")]),a._v(" 3. FNV1A hash algorithm description")]),a._v(" "),t("p",[a._v("Previous proposed algorithm based on FNV1 "),t("RouterLink",{attrs:{to:"/zh/eip-1355.html"}},[a._v("EIP-1355")])],1),a._v(" "),t("p",[a._v('There\'s a implementation that looks like "Missing Offset Bias" at '),t("strong",[a._v("FNV1A")]),a._v(".")]),a._v(" "),t("p",[a._v("Quotation of "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function#FNV-1a_hash",target:"_blank",rel:"noopener noreferrer"}},[a._v("original algorithm FNV1A"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("use hash offset\nFNV-1a hash\nThe FNV-1a hash differs from the FNV-1 hash by only the order in which the multiply and XOR is performed:[8][10]\n\n   hash = FNV_offset_basis\n   for each byte_of_data to be hashed\n    hash = hash XOR byte_of_data\n    hash = hash × FNV_prime\n   return hash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("p",[a._v("FNV_offset_basis and computation order change of xor and multiplication Makes one more xor and multiply computation, but more secure hash effects than FNV0. and make dispersion boundary condition (0, even number, ..) by using of Prime Number.")]),a._v(" "),t("h4",{attrs:{id:"_4-real-implementation-for-fnv1a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-real-implementation-for-fnv1a"}},[a._v("#")]),a._v(" 4. Real Implementation for FNV1A")]),a._v(" "),t("p",[a._v("Consider real computation resources, in TEthashV1 uses hash byte_of_data to 4bytes aligned data.")]),a._v(" "),t("p",[a._v("In TETHashV1, Adapts fully follow the FNV1A implementation.")]),a._v(" "),t("ul",[t("li",[a._v("TETHASHV1 FNV1A implementation")])]),a._v(" "),t("p",[a._v("Following are reference implementation of FNV1A adapted in TETHashV1.")]),a._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Reference Pseudo c/cpp implementation")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[a._v("FNV_PRIME")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x01000193U")])])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[a._v("FNV_OFFSET_BASIS")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x811c9dc5U")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[a._v("fnv1a")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("FNV_OFFSET_BASIS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("FNV_PRIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" FNV_PRIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[a._v("fnv1a_reduce")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fnv1a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fnv1a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fnv1a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("Another Byte aligned implementation of FNV1A , call to FNV1c")]),a._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[a._v("FNV_PRIME")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x01000193U")])])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[a._v("FNV_OFFSET_BASIS")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x811c9dc5U")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[a._v("fnv1i")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("                                          ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                                "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("FNV_OFFSET_BASIS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x000000ff")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" FNV_PRIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                            "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x000000ff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" FNV_PRIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                            "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x000000ff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" FNV_PRIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                            "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x000000ff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" FNV_PRIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                            "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[a._v("fnv1c")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fnv1i")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" FNV_PRIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("h4",{attrs:{id:"_5-fnv-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-fnv-analysis"}},[a._v("#")]),a._v(" 5. "),t("a",{attrs:{href:"https://github.com/tao-foundation/FNV-Analysis",target:"_blank",rel:"noopener noreferrer"}},[a._v("FNV-Analysis"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("FNV Mix Algorithm Analysis for TEthashV1")]),a._v(" "),t("h4",{attrs:{id:"how-to-test-and-analysis-reference-test-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-test-and-analysis-reference-test-code"}},[a._v("#")]),a._v(" How to test and analysis reference test code.")]),a._v(" "),t("p",[a._v("You can compile it with simple in terminal. No additional library needs,")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("gcc -o fnvtest fnvcltest.c\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("And You can execute it")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fnvtest\n\nF(00,00)::VEC(0, 0, ffffffff, 0)::      FNV  :00000000, DF=00000000(00) DS(00000000), FNV1 :00000000, DF=00000000(00) DS(00000000), FNV1a:117697cd, DF=117697cd(17) DS(117697cd), FNV1c:1210d00f, DF=127f8dbf(20) DS(11a1725f),         F___RC=efe1b9c4, DF:efe1b9c4(19) , F1__RC=deb68dfe, DF:deb68dfe(22) , F1A_RC=99bad28b, DF:99bad28b(17) , F1C_RC=e29fa497, DF:e29fa497(18)\nF(00,01)::VEC(0, 1, ffffffff, 0)::      FNV  :00000001, DF=00000001(01) DS(00000001), FNV1 :01000193, DF=01000193(06) DS(01000193), FNV1a:1076963a, DF=010001f7(09) DS(01000193), FNV1c:1110ce7c, DF=03001e73(11) DS(01000193),         F___RC=fefffe6d, DF:111e47a9(14) , F1__RC=d9fd8597, DF:074b0869(12) , F1A_RC=72c287e0, DF:eb78556b(19) , F1C_RC=6b6991ef, DF:89f63578(17)\nF(00,02)::VEC(0, 2, ffffffff, 0)::      FNV  :00000002, DF=00000003(02) DS(00000001), FNV1 :02000326, DF=030002b5(08) DS(01000193), FNV1a:0f7694a7, DF=1f00029d(11) DS(01000193), FNV1c:1410d335, DF=05001d49(09) DS(030004b9),         F___RC=d8fd8404, DF:26027a69(13) , F1__RC=9b16d24c, DF:42eb57db(19) , F1A_RC=c17f0ecb, DF:b3bd892b(18) , F1C_RC=a5be8e78, DF:ced71f97(21)\nF(00,03)::VEC(0, 3, ffffffff, 0)::      FNV  :00000003, DF=00000001(01) DS(00000001), FNV1 :030004b9, DF=0100079f(10) DS(01000193), FNV1a:0e769314, DF=010007b3(09) DS(01000193), FNV1c:1310d1a2, DF=07000297(09) DS(01000193),         F___RC=b2fb099b, DF:6a068d9f(16) , F1__RC=5c301f01, DF:c726cd4d(17) , F1A_RC=94cf402e, DF:55b04ee5(16) , F1C_RC=aea1a025, DF:0b1f2e5d(17)\nF(00,04)::VEC(0, 4, ffffffff, 0)::      FNV  :00000004, DF=00000007(03) DS(00000001), FNV1 :0400064c, DF=070002f5(10) DS(01000193), FNV1a:0d769181, DF=03000295(07) DS(01000193), FNV1c:0e10c9c3, DF=1d001861(09) DS(050007df),         F___RC=8cf88f32, DF:3e0386a9(14) , F1__RC=1d496bb6, DF:417974b7(17) , F1A_RC=89401d59, DF:1d8f5d77(20) , F1C_RC=e4e96c7c, DF:4a48cc59(13)\nF(00,05)::VEC(0, 5, ffffffff, 0)::      FNV  :00000005, DF=00000001(01) DS(00000001), FNV1 :050007df, DF=01000193(06) DS(01000193), FNV1a:0c768fee, DF=01001e6f(11) DS(01000193), FNV1c:0d10c830, DF=030001f3(09) DS(01000193),         F___RC=66f614c9, DF:ea0e9bfb(20) , F1__RC=de62b86b, DF:c32bd3dd(19) , F1A_RC=346e222c, DF:bd2e3f75(21) , F1C_RC=502e5f82, DF:b4c733fe(20)\nF(00,06)::VEC(0, 6, ffffffff, 0)::      FNV  :00000006, DF=00000003(02) DS(00000001), FNV1 :06000972, DF=03000ead(10) DS(01000193), FNV1a:0b768e5b, DF=070001b5(09) DS(01000193), FNV1c:1010cce9, DF=1d0004d9(10) DS(030004b9),         F___RC=40f39a60, DF:26058ea9(13) , F1__RC=9f7c0520, DF:411ebd4b(16) , F1A_RC=b376a527, DF:8718870b(13) , F1C_RC=1241a9a4, DF:426ff626(17)\nF(00,07)::VEC(0, 7, ffffffff, 0)::      FNV  :00000007, DF=00000001(01) DS(00000001), FNV1 :07000b05, DF=01000277(08) DS(01000193), FNV1a:0a768cc8, DF=01000293(06) DS(01000193), FNV1c:0f10cb56, DF=1f0007bf(15) DS(01000193),         F___RC=1af11ff7, DF:5a028597(13) , F1__RC=609551d5, DF:ffe954f5(22) , F1A_RC=14293bea, DF:a75f9ecd(21) , F1C_RC=49d34bba, DF:5b92e21e(16)\nF(00,08)::VEC(0, 8, ffffffff, 0)::      FNV  :00000008, DF=0000000f(04) DS(00000001), FNV1 :08000c98, DF=0f00079d(12) DS(01000193), FNV1a:09768b35, DF=030007fd(12) DS(01000193), FNV1c:1a10dca7, DF=150017f1(12) DS(0b001151),         F___RC=f4eea58e, DF:ee1fba79(21) , F1__RC=21ae9e8a, DF:413bcf5f(19) , F1A_RC=eeebb7a5, DF:fac28c4f(17) , F1C_RC=7da04f47, DF:347304fd(16)\nF(00,09)::VEC(0, 9, ffffffff, 0)::      FNV  :00000009, DF=00000001(01) DS(00000001), FNV1 :09000e2b, DF=010002b3(07) DS(01000193), FNV1a:087689a2, DF=01000297(07) DS(01000193), FNV1c:1910db14, DF=030007b3(10) DS(01000193),         F___RC=ceec2b25, DF:3a028eab(14) , F1__RC=e2c7eb3f, DF:c36975b5(18) , F1A_RC=54e1aef8, DF:ba0a195d(15) , F1C_RC=d425e1af, DF:a985aee8(16)\nF(00,0a)::VEC(0, a, ffffffff, 0)::      FNV  :0000000a, DF=00000003(02) DS(00000001), FNV1 :0a000fbe, DF=03000195(07) DS(01000193), FNV1a:0776880f, DF=0f0001ad(10) DS(01000193), FNV1c:1c10dfcd, DF=050004d9(08) DS(030004b9),         F___RC=a8e9b0bc, DF:66059b99(15) , F1__RC=a3e137f4, DF:4126dccb(15) , F1A_RC=213fcd63, DF:75de639b(20) , F1C_RC=7e1d2751, DF:aa38c6fe(18)\nF(00,0b)::VEC(0, b, ffffffff, 0)::      FNV  :0000000b, DF=00000001(01) DS(00000001), FNV1 :0b001151, DF=01001eef(12) DS(01000193), FNV1a:0676867c, DF=01000e73(09) DS(01000193), FNV1c:1b10de3a, DF=070001f7(11) DS(01000193),         F___RC=82e73653, DF:2a0e86ef(16) , F1__RC=64fa84a9, DF:c71bb35d(19) , F1A_RC=5598ce46, DF:74a70325(14) , F1C_RC=6400c630, DF:1a1de161(14)\nF(00,0c)::VEC(0, c, ffffffff, 0)::      FNV  :0000000c, DF=00000007(03) DS(00000001), FNV1 :0c0012e4, DF=070003b5(10) DS(01000193), FNV1a:057684e9, DF=03000295(07) DS(01000193), FNV1c:1610d65b, DF=0d000861(07) DS(050007df),         F___RC=5ce4bbea, DF:de038db9(17) , F1__RC=2613d15e, DF:42e955f7(18) , F1A_RC=6a220ff1, DF:3fbac1b7(20) , F1C_RC=6e781da4, DF:0a78db94(15)\nF(00,0d)::VEC(0, d, ffffffff, 0)::      FNV  :0000000d, DF=00000001(01) DS(00000001), FNV1 :0d001477, DF=01000693(07) DS(01000193), FNV1a:04768356, DF=010007bf(11) DS(01000193), FNV1c:1510d4c8, DF=03000293(07) DS(01000193),         F___RC=36e24181, DF:6a06fa6b(17) , F1__RC=e72d1e13, DF:c13ecf4d(18) , F1A_RC=168d4944, DF:7caf46b5(19) , F1C_RC=65bbcfa1, DF:0bc3d205(13)\nF(00,0e)::VEC(0, e, ffffffff, 0)::      FNV  :0000000e, DF=00000003(02) DS(00000001), FNV1 :0e00160a, DF=0300027d(09) DS(01000193), FNV1a:037681c3, DF=07000295(08) DS(01000193), FNV1c:1810d981, DF=0d000d49(09) DS(030004b9),         F___RC=10dfc718, DF:263d8699(15) , F1__RC=a8466ac8, DF:4f6b74db(20) , F1A_RC=93e667bf, DF:856b2efb(19) , F1C_RC=76f80ee3, DF:1343c142(11)\nF(00,0f)::VEC(0, f, ffffffff, 0)::      FNV  :0000000f, DF=00000001(01) DS(00000001), FNV1 :0f00179d, DF=01000197(07) DS(01000193), FNV1a:02768030, DF=010001f3(08) DS(01000193), FNV1c:1710d7ee, DF=0f000e6f(13) DS(01000193),         F___RC=eadd4caf, DF:fa028bb7(17) , F1__RC=695fb77d, DF:c119ddb5(17) , F1A_RC=0f485682, DF:9cae313d(17) , F1C_RC=3667e8dc, DF:409fe63f(18)\nF(00,10)::VEC(0, 10, ffffffff, 0)::     FNV  :00000010, DF=0000001f(05) DS(00000001), FNV1 :10001930, DF=1f000ead(13) DS(01000193), FNV1a:01767e9d, DF=0300fead(14) DS(01000193), FNV1c:0210b6df, DF=15006131(09) DS(1500210f),         F___RC=c4dad246, DF:2e079ee9(17) , F1__RC=2a790432, DF:4326b34f(16) , F1A_RC=d10adebd, DF:de42883f(16) , F1C_RC=1ce48e12, DF:2a8366ce(15)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("p",[t("code",[a._v("F(00,01)")]),a._v(" : is input x,y")]),a._v(" "),t("p",[t("code",[a._v("VEC(0, 1, ffffffff, 0)")]),a._v("  : is "),t("code",[a._v("fnv_reduce")]),a._v(" input vector (a,b,c,d)")]),a._v(" "),t("p",[t("code",[a._v("FNV :00000001, DF=00000001(01) DS(00000001)")]),a._v(" :")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("FNV(00,01)")]),a._v(" result is 00000001 ,")]),a._v(" "),t("li",[t("code",[a._v("DF")]),a._v(" : is changed bitcounts, compared with previous outputs, in this case prev[00,00] current[00,01] input is 1bit changed, and output result 1bit changed.")]),a._v(" "),t("li",[t("code",[a._v("DS")]),a._v(" : is distances of previous result and current result , ABS(prev_fnvresult,current_fnvresult).")])]),a._v(" "),t("p",[a._v("** Basically, "),t("code",[a._v("DF")]),a._v(" is higher is best on hash algorithm.")]),a._v(" "),t("p",[t("code",[a._v("F___RC=fefffe6d, DF:111e47a9(14)")]),a._v(" : "),t("code",[a._v("fnv_reduce = fnv(fnv(fnv(a,b),c),d)")]),a._v(" result is fefffe6d , and Different Bits counts are "),t("code",[a._v("14")]),a._v(" bits.")]),a._v(" "),t("h2",{attrs:{id:"rationale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[a._v("#")]),a._v(" Rationale")]),a._v(" "),t("p",[a._v("In case of ethash algorithm, it can't prevent ASIC forever.")]),a._v(" "),t("p",[a._v("And, current ethash algorithm's FNV function is deprecated.")]),a._v(" "),t("p",[a._v("So, It needs to be upgraded and it will make current ethash based ASICs obsolete.")]),a._v(" "),t("p",[a._v("And current TETHASHV1 FNV1A implementation is based on most of ethash , which is verified for a long time.")]),a._v(" "),t("p",[a._v("Another propose of big differencing the Ethash algorithm need to crypto analysis for a long times and need to GPU code optimization times.")]),a._v(" "),t("p",[t("strong",[a._v("Verification and Optimization timeline Examples")])]),a._v(" "),t("p",[a._v("original ethminer (2015) -> claymore optimized miner (2016) [1year]")]),a._v(" "),t("p",[a._v("genoil ethminer (2015) -> ethereum-mining/ethminer (2017) [2year]")]),a._v(" "),t("h2",{attrs:{id:"test-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-results"}},[a._v("#")]),a._v(" Test Results::")]),a._v(" "),t("p",[a._v("Tethash miner has 2~3% of hashrate degrade on GPU, due to more core computation time.")]),a._v(" "),t("h2",{attrs:{id:"copyright"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[a._v("#")]),a._v(" Copyright")]),a._v(" "),t("p",[a._v("This work is licensed under a "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"),t("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);