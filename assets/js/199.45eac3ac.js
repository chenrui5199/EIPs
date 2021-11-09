(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{593:function(e,t,a){"use strict";a.r(t);var o=a(46),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("We propose to reduce the gas cost of Calldata ("),a("code",[e._v("GTXDATANONZERO")]),e._v(") from its current value of 68 gas per byte to 16 gas per byte, to be backed by mathematical modeling and empirical estimates. The mathematical model is the one used in the works of Sompolinsky and Zohar [1] and Pass, Seeman and Shelat [2], which relates network security to network delay. We shall (1) evaluate the theoretical impact of lower Calldata gas cost on network delay using this model, (2) validate the model empirically, and (3) base the proposed gas cost on our findings.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("There are a couple of main benefits to accepting this proposal and lowering gas cost of Calldata\nOn-Chain Scalability: Generally speaking, higher bandwidth of Calldata improves scalability, as more data can fit within a single block.")]),e._v(" "),a("ul",[a("li",[e._v("Layer two scalability: Layer two scaling solutions can improve scalability by moving storage and computation off-chain, but often introduce data transmission instead.\n"),a("ul",[a("li",[e._v("Proof systems such as STARKs and SNARKs use a single proof that attests to the computational integrity of a large computation, say, one that processes a large batch of transactions.")]),e._v(" "),a("li",[e._v("Some solutions use fraud proofs which requires a transmission of merkle proofs.")]),e._v(" "),a("li",[e._v("Moreover, one optional data availability solution to layer two is to place data on the main chain, via Calldata.")])])]),e._v(" "),a("li",[e._v("Stateless clients: The same model will be used to determine the price of the state access for the stateless client regime, which will be proposed in the State Rent (from version 4). There, it is expected that the gas cost of state accessing operation will increase roughly proportional to the extra bandwidth required to transmit the “block proofs” as well as extra processing required to verify those block proofs.")])]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("The gas per non-zero byte is reduced from 68 to 16. Gas cost of zero bytes is unchanged.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Roughly speaking, reducing the gas cost of Calldata leads to potentially larger blocks, which increases the network delay associated with data transmission over the network. This is only part of the full network delay, other factors are block processing time (and storage access, as part of it). Increasing network delay affects security by lowering the cost of attacking the network, because at any given point in time fewer nodes are updated on the latest state of the blockchain.")]),e._v(" "),a("p",[e._v("Yonatan Sompolinsky and Aviv Zohar suggested in [1] an elegant model to relate network delay to network security, and this model is also used in the work of Rafael Pass, Lior Seeman and Abhi Shelat [2]. We briefly explain this model below, because we shall study it theoretically and validate it by empirical measurements to reach the suggested lower gas cost for Calldata.")]),e._v(" "),a("p",[e._v("The model uses the following natural parameters:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("lambda")]),e._v("  denotes the block creation rate [1/s]: We treat the process of finding a PoW\nsolution as a poisson process with rate "),a("em",[e._v("lambda")]),e._v(".")]),e._v(" "),a("li",[a("em",[e._v("beta")]),e._v(" - chain growth rate [1/s]: the rate at which new blocks are added to\nthe heaviest chain.")]),e._v(" "),a("li",[a("em",[e._v("D")]),e._v(" - block delay [s]: The time that elapses between the mining of a new block and its acceptance by all the miners (all miners switched to mining on top of that block).")])]),e._v(" "),a("h3",{attrs:{id:"beta-lower-bound"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beta-lower-bound"}},[e._v("#")]),e._v(" "),a("em",[e._v("Beta")]),e._v(" Lower Bound")]),e._v(" "),a("p",[e._v("Notice that "),a("em",[e._v("lambda")]),e._v(" => "),a("em",[e._v("beta")]),e._v(", because not all blocks that are found will enter the main chain (as is the case with uncles). In [1] it was shown that for a blockchain using the longest chain rule, one may bound "),a("em",[e._v("beta")]),e._v(" from below by "),a("em",[e._v("lambda")]),e._v("/ (1+ D * "),a("em",[e._v("lambda")]),e._v("). This lower bound holds in the extremal case where the topology of the network is a clique in which the delay between each pair of nodes is D, the maximal possible delay. Recording both the lower and upper bounds on "),a("em",[e._v("beta")]),e._v(" we get")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("_lambda_ >= _beta_ >= _lambda_ / (1 + D * _lambda_)               (*)\n")])])]),a("p",[e._v("Notice, as a sanity check, that when there is no delay (D=0) then "),a("em",[e._v("beta")]),e._v(" equals "),a("em",[e._v("lambda")]),e._v(", as expected.")]),e._v(" "),a("h3",{attrs:{id:"security-of-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-of-the-network"}},[e._v("#")]),e._v(" Security of the network")]),e._v(" "),a("p",[e._v("An attacker attempting to reorganize the main chain needs to generate blocks at a rate that is greater than "),a("em",[e._v("beta")]),e._v(".\nFixing the difficulty level of the PoW puzzle, the total hash rate in the system is correlated to "),a("em",[e._v("lambda")]),e._v(". Thus, "),a("em",[e._v("beta")]),e._v(" / "),a("em",[e._v("lambda")]),e._v(" is defined as the "),a("em",[e._v("efficiency")]),e._v(" of the system, as it measures the fraction of total hash power that is used to generate the main chain of the network.")]),e._v(" "),a("p",[e._v("Rearranging (*) gives the following lower bound on efficiency in terms of delay:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("_beta_ / _lambda_ >= 1 / (1 + D * _lambda_)                 (**)\n")])])]),a("h3",{attrs:{id:"the-delay-parameter-d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-delay-parameter-d"}},[e._v("#")]),e._v(" The "),a("em",[e._v("delay")]),e._v(" parameter D")]),e._v(" "),a("p",[e._v("The network delay depends on the location of the mining node within the network and on the current network topology (which changes dynamically), and consequently is somewhat difficult to measure directly.\nPreviously, Christian Decker and Roger Wattenhofer [3] showed that propagation time scales with blocksize,  and Vitalik Buterin showed that uncle rate, which is tightly related to efficiency (**) measure, also scales with block size [4].")]),e._v(" "),a("p",[e._v("However, the delay function can be decomposed into two parts D = "),a("em",[e._v("D_t")]),e._v(" + "),a("em",[e._v("D_p")]),e._v(", where "),a("em",[e._v("D_t")]),e._v(" is the delay caused by the transmission of the block and "),a("em",[e._v("D_p")]),e._v(" is the delay caused by the processing of the block by the node. Our model and tests will examine the effect of Calldata on each of "),a("em",[e._v("D_t")]),e._v(" and "),a("em",[e._v("D_p")]),e._v(", postulating that their effect is different. This may be particularly relevant for Layer 2 Scalability and for Stateless Clients (Rationales 2, 3 above) because most of the Calldata associated with these goals are Merkle authentication paths that have a large "),a("em",[e._v("D_t")]),e._v(" component but relatively small "),a("em",[e._v("D_p")]),e._v(" values.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("To suggest the gas cost of calldata we shall conduct two types of tests:")]),e._v(" "),a("ol",[a("li",[e._v("Network tests, conducted on the Ethereum mainnet, used to estimate the effect on increasing block size on "),a("em",[e._v("D_p")]),e._v(" and "),a("em",[e._v("D_t")]),e._v(", on the overall network delay D and the efficiency ratio (**), as well as delays between different mining pools. Those tests will include regression tests on existing data, and stress tests to introduce extreme scenarios.")]),e._v(" "),a("li",[e._v("Local tests, conducted on a single node and measuring the processing time as a function of Calldata amount and general computation limits.")])]),e._v(" "),a("h2",{attrs:{id:"reference-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation"}},[e._v("#")]),e._v(" Reference Implementation")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/liorgold2/parity-ethereum/pull/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parity"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/liorgold2/go-ethereum/pull/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Geth"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("[1] Yonatan Sompolinsky, Aviv Zohar: "),a("a",{attrs:{href:"https://eprint.iacr.org/2013/881.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Secure High-Rate Transaction Processing in Bitcoin"),a("OutboundLink")],1),e._v(". Financial Cryptography 2015: 507-527")]),e._v(" "),a("p",[e._v("[2] Rafael Pass, Lior Seeman, Abhi Shelat: "),a("a",{attrs:{href:"https://eprint.iacr.org/2016/454.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Analysis of the Blockchain Protocol in Asynchronous Networks"),a("OutboundLink")],1),e._v(", ePrint report 2016/454")]),e._v(" "),a("p",[e._v("[3] Christian Decker, Roger Wattenhofer: "),a("a",{attrs:{href:"https://www.gsd.inesc-id.pt/~ler/docencia/rcs1314/papers/P2P2013_041.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Information propagation in the Bitcoin network"),a("OutboundLink")],1),e._v(". P2P 2013: 1-10")]),e._v(" "),a("p",[e._v("[4] Vitalik Buterin: "),a("a",{attrs:{href:"https://blog.ethereum.org/2016/10/31/uncle-rate-transaction-fee-analysis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Uncle Rate and Transaction Fee Analysis"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);