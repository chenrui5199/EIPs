(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{658:function(e,t,a){"use strict";a.r(t);var i=a(46),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("Network security and overall ecosystem maturity warrants the continued incentivization of Proof of Work participation but may allow for a reduction in ancillary ETH issuance and the delay of the Difficulty Bomb. This EIP proposes a reduction of Uncle and removal of Nephew rewards while delaying the Difficulty Bomb with the Constantinople hard fork.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Starting with CNSTNTNPL_FORK_BLKNUM the client will calculate the difficulty based on a fake block number suggesting the client that the difficulty bomb is adjusting around 6 million blocks later than previously specified with the Homestead fork.")]),e._v(" "),a("p",[e._v("Furthermore, Uncle rewards will be adjusted and Nephew rewards will be removed to eliminate excess ancillary ETH issuance. The current ETH block reward of 3 ETH will remain constant.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v('Network scalability and security are at the forefront of risks to the Ethereum protocol. With great strides being made towards on and off chain scalability, the existence of an artificial throughput limiting device in the protocol is not warranted. Removing the risk of reducing throughput through the initialization of the Difficulty Bomb is "low-hanging-fruit" to ensure continued operation at a minimum of current throughput through the next major hard fork (scheduled for late 2019).')]),e._v(" "),a("p",[e._v("The security layer of the Ethereum network is and should remain robust. Incentives for continued operation of the security of the growing ecosystem are paramount.")]),e._v(" "),a("p",[e._v("At the same time, the ancillary issuance benefits of the Ethereum protocol can be adjusted to reduce the overall issuance profile. Aggressively adjusting Uncle and removing Nephew rewards will reduce the inflationary aspect of ETH issuance, while keeping the current block reward constant at 3 ETH will ensure top line incentives stay in place.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("h4",{attrs:{id:"relax-difficulty-with-fake-block-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relax-difficulty-with-fake-block-number"}},[e._v("#")]),e._v(" Relax Difficulty with Fake Block Number")]),e._v(" "),a("p",[e._v("For the purposes of "),a("code",[e._v("calc_difficulty")]),e._v(", simply replace the use of "),a("code",[e._v("block.number")]),e._v(", as used in the exponential ice age component, with the formula:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("fake_block_number = max(0, block.number - 6_000_000) if block.number >= CNSTNTNPL_FORK_BLKNUM else block.number\n")])])]),a("h4",{attrs:{id:"adjust-uncle-and-nephew-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjust-uncle-and-nephew-rewards"}},[e._v("#")]),e._v(" Adjust Uncle and Nephew rewards")]),e._v(" "),a("p",[e._v("If an uncle is included in a block for "),a("code",[e._v("block.number >= CNSTNTNPL_FORK_BLKNUM")]),e._v(" such that "),a("code",[e._v("block.number - uncle.number = k")]),e._v(", the uncle reward is")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("new_uncle_reward = (3 - k) * new_block_reward / 8\n")])])]),a("p",[e._v("This is the existing pre-Constantinople formula for uncle rewards, adjusted to reward 2 levels of Uncles at a reduced rate.")]),e._v(" "),a("p",[e._v("The nephew reward for "),a("code",[e._v("block.number >= CNSTNTNPL_FORK_BLKNUM")]),e._v(" is")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("new_nephew_reward = 0\n")])])]),a("p",[e._v("This is a removal of all rewards for Nephew blocks.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The security layer of the Ethereum network is and should remain robust. Incentives for continued operation of the growing ecosystem’s security are paramount.")]),e._v(" "),a("p",[e._v("At the same time, the ancillary issuance benefits of the Ethereum protocol can be adjusted to reduce the overall issuance profile. Aggressively adjusting Uncle and removing Nephew rewards will reduce the inflationary aspect of ETH issuance, while keeping the current block reward constant at 3 ETH will ensure top line incentives stay in place.")]),e._v(" "),a("p",[e._v("The Difficulty Bomb was instituted as a type of planned obsolescence to force the implementation of network upgrades with regular frequency. With the focus on scalability for the protocol, delaying a mechanism whereby the throughput of the network can be limited artificially, due to any circumstance, is a logical step to ensure continued minimum network operation at the current throughput level. We believe the existence of the Difficulty Bomb has allowed for the inclusion of protocol upgrades in forced hard-forks, and will continue to do so.")]),e._v(" "),a("p",[e._v("Through August 4th, the 2018 year to date reward issued to Uncle blocks totaled over 635,000 ETH. The average reward per Uncle totals 2.27 ETH. The year to date average Uncle rate is 22.49%. Using the year to date metrics, the ongoing average ETH paid as an Uncle reward per block is 0.51 ETH plus the Uncle inclusion reward of 0.021 ETH (0.09375 ETH * .2249), total Uncle related reward per block being over 0.53 ETH. With total year to date block rewards totaling approximately 3,730,000 ETH, the network has paid an additional 17pct in Uncle rewards. This is issuance that can be reduced while still maintaining the overall integrity and incentivization of network security.")]),e._v(" "),a("p",[e._v("Reducing the issuance of ETH in rewarding Uncle blocks (forked blocks caused by latency in propagation, a multi-faceted problem) should directly incentivize the investment in technologies and efficiencies to reduce block propagation latency which may lead to a reduction in Network wide Uncle rates, reducing ancillary issuance further.")]),e._v(" "),a("p",[e._v("Reducing the Uncle rewards from the current specification to the proposed will yield two levels of ancillary ETH issuance for Uncles:")]),e._v(" "),a("p",[e._v("Level 1 Uncle -> 0.75 ETH")]),e._v(" "),a("p",[e._v("Level 2 Uncle -> 0.375 ETH")]),e._v(" "),a("p",[e._v("These levels are sufficient to continue incentivizing decentralized participation, while also providing an immediate economic incentive for the upgrade of the Ethereum node network and its tangential infrastructure.")]),e._v(" "),a("p",[e._v("We believe that the ETH network has been subsidizing transaction inclusion through the robust Uncle Reward structure since inception. We also believe that a removal of the set subsidy will create a dynamic response mechanism whereby Miners and transaction senders will minimize total costs of transaction inclusion. This dynamic response structure may limit unnecessary layer 1 transaction throughput while providing incentives for layer 2 scaling solutions.")]),e._v(" "),a("p",[e._v("The Nephew reward structure should be entirely eliminated.")]),e._v(" "),a("p",[e._v("Due to current market conditions, and the likelihood of a further USD denominated price decline (50%), we believe that any top line reduction to security incentives will put the Ethereum network at undue risk. Unlike the time of the Byzantium hard fork, current USD denominated economics for securing the Ethereum network threaten the participation of the most decentralized Miner community (at home miners), which we believe make up the largest proportion of the overall network hashrate. We believe eliminating this portion of the community will increase centralization and the probability of an organized network attack.")]),e._v(" "),a("p",[e._v("For a technology so new and with so much potential, we find it extremely irresponsible to increase the likelihood of a network attack by reducing ETH Issuance past this proposal’s level.")]),e._v(" "),a("p",[e._v("With a reduction to the Uncle and removal of the Nephew reward, ancillary ETH issuance should drop (under normal market conditions, i.e. 22.49% uncle rate) by over 75pct and total ETH issuance from the successful sealing and mining of valid blocks should drop over 10pct.")]),e._v(" "),a("p",[e._v("Paired with the diffusal of the Difficulty Bomb, this proposal strikes a balance between ensuring status quo network throughput, reducing overall ETH issuance, and continuing top line incentives for investment in infrastructure and efficiencies to continue operating the Ethereum network’s security layer.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This EIP is not forward compatible and introduces backwards incompatibilities in the difficulty calculation, as well as the block, uncle and nephew reward structure. Therefore, it should be included in a scheduled hardfork at a certain block number. It's suggested to include this EIP in the second Metropolis hard-fork, Constantinople.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("Test cases shall be created once the specification is to be accepted by the developers or implemented by the clients.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("Forthcoming.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);