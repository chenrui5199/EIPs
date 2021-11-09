(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{967:function(e,t,r){"use strict";r.r(t);var i=r(46),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"simple-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),r("p",[e._v("The EVM currently supports elliptic curves operations for curve "),r("em",[e._v("alt-bn128")]),e._v(" thanks to precompiles "),r("code",[e._v("ecadd")]),e._v(" and "),r("code",[e._v("ecmul")]),e._v(" and "),r("code",[e._v("ecpairing")]),e._v(". The classes MNT4 and 6 contain cycles of curves. Those cycles enable doing operations on one curve inside a SNARK on the other curve (and reversely). This EIP suggests adding support for those curves.")]),e._v(" "),r("h2",{attrs:{id:"abstract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),r("p",[e._v("Adds supports for the following operations through precompiles:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("ecadd")]),e._v(" on MNT4")]),e._v(" "),r("li",[r("code",[e._v("ecmul")]),e._v(" on MNT4")]),e._v(" "),r("li",[r("code",[e._v("ecpairing")]),e._v(" on MNT4")])]),e._v(" "),r("h2",{attrs:{id:"motivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),r("p",[e._v("Elliptic curve is the basic block of recursive SNARKs (ie: verifying a SNARK inside a SNARK) and this addresses the issue of scalable zero-knowledge. More generally this addresses partly the scalability issue as SNARKs verification are constant time in the size of the circuit being verified.")]),e._v(" "),r("p",[e._v("More concretely, today if the EVM has to deal with 1000s of SNARK verification it would take around 1.5 billion gas and would be impractical for Ethereum. Recursive SNARKs for instance make it possible to aggregate multiple proofs into a single one that can be verified like any other SNARK. It results in a massive cost reduction for the verification.")]),e._v(" "),r("p",[e._v("However, this is impossible using "),r("em",[e._v("alt-bn128")]),e._v(" and in my knowledge, the only family of pairing-friendly curves known to produce cycles are MNT4 and MNT6. A complete characterization of the cycles existing between those two families is proposed in "),r("a",{attrs:{href:"https://arxiv.org/pdf/1803.02067.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("On cycles of pairing-friendly elliptic curves "),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"specification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),r("h3",{attrs:{id:"the-curve"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-curve"}},[e._v("#")]),e._v(" The curve")]),e._v(" "),r("p",[e._v("The proposed cycle has been introduced in "),r("a",{attrs:{href:"https://eprint.iacr.org/2014/595.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scalable Zero Knowledge via Cycles of Elliptic Curves"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"mnt4-definition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mnt4-definition"}},[e._v("#")]),e._v(" MNT4 definition")]),e._v(" "),r("p",[e._v("The groups "),r("code",[e._v("G_1")]),e._v(" and "),r("code",[e._v("G_2")]),e._v(" are cyclic groups of prime order :")]),e._v(" "),r("pre",[r("code",{},[e._v("q = 475922286169261325753349249653048451545124878552823515553267735739164647307408490559963137\n")])]),e._v(" "),r("p",[r("code",[e._v("G_1")]),e._v(" is defined over the field "),r("code",[e._v("F_p")]),e._v(" of prime order :")]),e._v(" "),r("pre",[r("code",{},[e._v("p = 475922286169261325753349249653048451545124879242694725395555128576210262817955800483758081\n")])]),e._v(" "),r("p",[e._v("with generator P:")]),e._v(" "),r("pre",[r("code",{},[e._v("P = (\n    60760244141852568949126569781626075788424196370144486719385562369396875346601926534016838,\n    363732850702582978263902770815145784459747722357071843971107674179038674942891694705904306\n)\n")])]),e._v(" "),r("p",[e._v("Both p and q can be written in 298 bits.")]),e._v(" "),r("p",[e._v("The group G_1 is defined on the curve defined by the equation "),r("code",[e._v("Y² = X³ + aX + b")]),e._v(" where:")]),e._v(" "),r("pre",[r("code",{},[e._v("    a = 2\n    b = 423894536526684178289416011533888240029318103673896002803341544124054745019340795360841685\n")])]),e._v(" "),r("p",[e._v("The twisted group G_2 is defined over the field "),r("code",[e._v("F_p^2 = F_p / <<To be completed>>")])]),e._v(" "),r("p",[e._v("The twisted group G_2 is defined on the curve defined by the equation "),r("code",[e._v("Y² = X² + aX + b")]),e._v(" where :")]),e._v(" "),r("pre",[r("code",{},[e._v("    a = 34 + i * 0\n    b = 0 + i * 67372828414711144619833451280373307321534573815811166723479321465776723059456513877937430\n")])]),e._v(" "),r("p",[e._v("G_2 generator is generated by :")]),e._v(" "),r("pre",[r("code",{},[e._v("    P2 = (\n        438374926219350099854919100077809681842783509163790991847867546339851681564223481322252708 +\n        i * 37620953615500480110935514360923278605464476459712393277679280819942849043649216370485641,\n        37437409008528968268352521034936931842973546441370663118543015118291998305624025037512482 +\n        i * 424621479598893882672393190337420680597584695892317197646113820787463109735345923009077489\n    )\n")])]),e._v(" "),r("h3",{attrs:{id:"the-operations-and-gas-cost"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-operations-and-gas-cost"}},[e._v("#")]),e._v(" The operations and gas cost")]),e._v(" "),r("p",[e._v("The following operations and their gas cost would be implemented")]),e._v(" "),r("pre",[r("code",{},[e._v("MNT_X_ADD = <<To be estimated>>\nMNT_X_MUL = <<To be estimated>>\nMNT_X_PAIRING = <<To be estimated>>\n")])]),e._v(" "),r("p",[e._v("Where "),r("code",[e._v("X")]),e._v(" is either 4.")]),e._v(" "),r("h3",{attrs:{id:"encoding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),r("p",[e._v("The curves points P(X, Y) over F_p are represented in their compressed form C(X, Y):")]),e._v(" "),r("pre",[r("code",{},[e._v("    C = X | s\n")])]),e._v(" "),r("p",[e._v("where "),r("code",[e._v("s")]),e._v(" represents "),r("code",[e._v("Y")]),e._v(" as follow:")]),e._v(" "),r("pre",[r("code",{},[e._v("    |  `s'`  | `Y`                      |\n    |--------|--------------------------|\n    | `0x00` | Point at infinity        |\n    | `0x02` | Solution with `y` even   |\n    | `0x03` | Solution with `y` odd    |\n")])]),e._v(" "),r("p",[e._v("Compression operation from affine coordinate is trivial:")]),e._v(" "),r("pre",[r("code",{},[e._v("    s = 0x02 | (s & 0x01)\n")])]),e._v(" "),r("p",[e._v("In the EVM the compressed form allows us to represents curve points with 2 uint256 instead of 3.")]),e._v(" "),r("h3",{attrs:{id:"edge-cases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#edge-cases"}},[e._v("#")]),e._v(" Edge cases")]),e._v(" "),r("ul",[r("li",[e._v("Several acceptable representations for the point at infinity")])]),e._v(" "),r("h2",{attrs:{id:"rationale"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),r("p",[e._v("The curve has 80 bits of security (whereas MNT6 has 120 bits) which might not be considered enough for critical security level, (for instance transferring several billions), but enough for others. If it turns out this is not enough security for adoption, there is another option : another cycle is being used by Coda but is defined over a 753 bits sized field which might also be prohibitively low (no reference to this curve from Coda's publications found).")]),e._v(" "),r("p",[e._v("Independently of the cycle chosen, the groups and field elements are represented with integers larger than 256 bits (even for the 80 bits of security), therefore it might be necessary to also add support for larger field size operations.")]),e._v(" "),r("p",[e._v("We currently don't know more efficient pairing-friendly cycles and don't know if there are. It might be possible to circumvent this problem though by relaxing the constraint that all the curves of the cycle must be pairing friendly). If we had a cycle with only one pairing friendly curve we would still be able to compose proofs by alternating between SNARKs and any other general purpose zero-knowledge cryptosystems.")]),e._v(" "),r("p",[e._v("Assuming we find a convenient cycle, we don't need to implement support for all the curves it contains, only one. The best choice would be the fastest one as the overall security of the recursive snark do not depends on which curve the verification is made.")]),e._v(" "),r("p",[e._v("Proper benchmarks will be done in order to make this choice and to price the operations in gas.")]),e._v(" "),r("h2",{attrs:{id:"test-cases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("Eli-Ben-Sasson, Alessandro Chiesa, Eran Tromer, Madars Virza, [BCTV14], April 28, 2015, Scalable Zero Knowledge via Cycles of Elliptic Curves : https://eprint.iacr.org/2014/595.pdf")])]),e._v(" "),r("li",[r("em",[e._v("Alessandro Chiesa, Lynn Chua, Matthew Weidner, [CCW18], November 5, 2018, On cycles of pairing-friendly elliptic curves : https://arxiv.org/pdf/1803.02067.pdf")])])]),e._v(" "),r("h2",{attrs:{id:"implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/AlexandreBelling/go-boojum",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-boojum"),r("OutboundLink")],1),e._v(" : A PoC demo of an application of recursive SNARKs")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/scipr-lab/libff",target:"_blank",rel:"noopener noreferrer"}},[e._v("libff"),r("OutboundLink")],1),e._v(" : a C++ library for finite fields and elliptic curves")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/CodaProtocol/coda",target:"_blank",rel:"noopener noreferrer"}},[e._v("coda"),r("OutboundLink")],1),e._v(" : a new cryptocurrency protocol with a lightweight, constant sized blockchain.")])]),e._v(" "),r("h2",{attrs:{id:"copyright"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),r("p",[e._v("Copyright and related rights waived via "),r("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);