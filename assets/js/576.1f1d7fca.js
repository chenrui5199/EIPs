(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{992:function(s,a,t){"use strict";t.r(a);var e=t(46),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简要说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简要说明"}},[s._v("#")]),s._v(" 简要说明")]),s._v(" "),t("p",[s._v("一种代币的标准接口。")]),s._v(" "),t("h2",{attrs:{id:"摘要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[s._v("#")]),s._v(" 摘要")]),s._v(" "),t("p",[s._v("本标准说明了在智能合约中实现代币的标准 API。 该标准提供了代币的基本功能：如转移代币，授权代币给其他人（如链上第三方应用）使用。")]),s._v(" "),t("h2",{attrs:{id:"动机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[s._v("#")]),s._v(" 动机")]),s._v(" "),t("p",[s._v("标准接口允许以太坊上的任何代币被其他应用程序重用，如钱包、去中心化交易所等。")]),s._v(" "),t("h2",{attrs:{id:"规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[s._v("#")]),s._v(" 规范")]),s._v(" "),t("h2",{attrs:{id:"代币"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代币"}},[s._v("#")]),s._v(" 代币")]),s._v(" "),t("h3",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),t("p",[t("strong",[s._v("注意")]),s._v(":")]),s._v(" "),t("ul",[t("li",[s._v("API 规范使用 Solidity 0.4.17（或以上版本）的语法")]),s._v(" "),t("li",[s._v("调用者必须处理 "),t("code",[s._v("returns (bool success)")]),s._v(" 返回 "),t("code",[s._v("false")]),s._v("。  不能假定 "),t("code",[s._v("false")]),s._v("不会返回。")])]),s._v(" "),t("h4",{attrs:{id:"可选函数-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选函数-name"}},[s._v("#")]),s._v(" 可选函数：name")]),s._v(" "),t("p",[s._v("函数返回代币的名称 - 如 "),t("code",[s._v('"MyToken"')]),s._v("。")]),s._v(" "),t("p",[s._v("此函数是可选函数，但是这个函数可以提高代币可用性，不过调用者不能假定这个函数存在。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"可选函数-symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选函数-symbol"}},[s._v("#")]),s._v(" 可选函数：symbol")]),s._v(" "),t("p",[s._v('函数返回代币的代号（通常为字母缩写） 例如， "HIX"。')]),s._v(" "),t("p",[s._v("此函数是可选函数，但是这个函数可以提高代币可用性，不过调用者不能假定这个函数存在。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"可选函数-decimals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选函数-decimals"}},[s._v("#")]),s._v(" 可选函数：decimals")]),s._v(" "),t("p",[s._v("返回代币使用的小数位数 - 例如: "),t("code",[s._v("8")]),s._v(", 意味着要将代币金额除以 "),t("code",[s._v("100000000")]),s._v(" 来获取其用户表示形式。")]),s._v(" "),t("p",[s._v("此函数是可选函数，但是这个函数可以提高代币可用性，不过调用者不能假定这个函数存在。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("decimals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uint8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"函数-totalsupply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数-totalsupply"}},[s._v("#")]),s._v(" 函数：totalSupply")]),s._v(" "),t("p",[s._v("返回全部代币供应。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("totalSupply")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uint256"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"函数-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数-balanceof"}},[s._v("#")]),s._v(" 函数：balanceOf")]),s._v(" "),t("p",[s._v("返回另一个帐户的帐户余额与地址 "),t("code",[s._v("_owner")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("balanceOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address _owner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uint256 balance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"事件-transfer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件-transfer"}},[s._v("#")]),s._v(" 事件：Transfer")]),s._v(" "),t("p",[s._v("向"),t("code",[s._v("_to")]),s._v(" 地址转移 "),t("code",[s._v("_value")]),s._v(" 数量的代币，函数必须触发事件 "),t("code",[s._v("Transfer")]),s._v(" 。 如果调用方的帐户余额没有足够的令牌，则该函数需要抛出异常。")]),s._v(" "),t("p",[t("em",[s._v("注意")]),s._v(" 转移 0 个代币也是正常转移动作，同样需要触发 "),t("code",[s._v("Transfer")]),s._v(" 事件。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("transfer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address _to"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uint256 _value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool success"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"函数-transferfrom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数-transferfrom"}},[s._v("#")]),s._v(" 函数：transferFrom")]),s._v(" "),t("p",[s._v("向"),t("code",[s._v("_to")]),s._v(" 地址转移 "),t("code",[s._v("_value")]),s._v(" 数量的代币，函数必须触发事件 "),t("code",[s._v("Transfer")]),s._v(" 。")]),s._v(" "),t("p",[t("code",[s._v("transferFrom")]),s._v(" 用于提款，允许智能合约代表您转移代币。 例如，这可用于允许智能合约代表你转移代币和/ 或以其他代币收取费用。 SHOULD 功能"),t("code",[s._v("throw")]),s._v("，除非 "),t("code",[s._v("_from")]),s._v(" 帐户通过某些机制有意授权消息的发送者。")]),s._v(" "),t("p",[t("em",[s._v("注意")]),s._v(" 转移 0 个代币也是正常转移动作，同样需要触发 "),t("code",[s._v("Transfer")]),s._v(" 事件。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("transferFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address _from"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" address _to"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uint256 _value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool success"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"函数-approve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数-approve"}},[s._v("#")]),s._v(" 函数：approve")]),s._v(" "),t("p",[s._v("授权"),t("code",[s._v("_spender")]),s._v(" 可以从我们账户最多转移代币的数量 _value"),s._v("，可以多次转移，总量不超过 "),t("code",[s._v("_value")]),s._v(" 。 这个函数可以再次调用，以覆盖授权额度 "),t("code",[s._v("_value")]),s._v("。")]),s._v(" "),t("p",[s._v("为了阻止向量攻击("),t("a",{attrs:{href:"https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里有描述"),t("OutboundLink")],1),s._v("和"),t("a",{attrs:{href:"https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729",target:"_blank",rel:"noopener noreferrer"}},[s._v("讨论"),t("OutboundLink")],1),s._v(")，调用者可以在调整授权额度时，先设置为"),t("code",[s._v("0")]),s._v("，然后在设置为一个其他额度。 智能合约本身不应该强制执行它，以允许向后兼容之前部署的合同。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("approve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address _spender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uint256 _value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool success"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"函数-allowance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数-allowance"}},[s._v("#")]),s._v(" 函数：allowance")]),s._v(" "),t("p",[s._v("查询 "),t("code",[s._v("_owner")]),s._v(" 授权给 "),t("code",[s._v("_spender")]),s._v(" 的额度。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("allowance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address _owner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" address _spender")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uint256 remaining"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[s._v("#")]),s._v(" 事件")]),s._v(" "),t("h4",{attrs:{id:"事件-transfer-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件-transfer-2"}},[s._v("#")]),s._v(" 事件：Transfer")]),s._v(" "),t("p",[s._v("当有代币转移时（包括转移 0），必须触发 Transfer 事件。")]),s._v(" "),t("p",[s._v("如果是新产生代币，触发 Transfer 事件的"),t("code",[s._v("_from")]),s._v(" 应该设置为 "),t("code",[s._v("0x0")]),s._v(" 。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("event "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Transfer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address indexed _from"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" address indexed _to"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uint256 _value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"事件-approval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件-approval"}},[s._v("#")]),s._v(" 事件：Approval")]),s._v(" "),t("p",[t("code",[s._v("approve(address _spender, uint256 _value)")]),s._v("函数成功执行时，必须触发 Approval 事件。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("event "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Approval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address indexed _owner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" address indexed _spender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uint256 _value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),t("p",[s._v("在以太坊网络上已经有大量符合 ERC20 的代币。 各个团队有不同的实现， 有些注重安全性，有些关注使用更少的矿工费。")]),s._v(" "),t("h4",{attrs:{id:"实现示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现示例"}},[s._v("#")]),s._v(" 实现示例")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/OpenZeppelin/openzeppelin-solidity/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20/ERC20.sol",target:"_blank",rel:"noopener noreferrer"}},[s._v("OpenZepelin 实现"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ConsenSys/Tokens/blob/fdf687c69d998266a95f15216b1955a4965a0a6d/contracts/eip20/EIP20.sol",target:"_blank",rel:"noopener noreferrer"}},[s._v("ConsenSys 实现"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"讨论历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讨论历史"}},[s._v("#")]),s._v(" 讨论历史")]),s._v(" "),t("p",[s._v("相关讨论的历史链接：")]),s._v(" "),t("ul",[t("li",[s._v("Vitalik Buterin 的原始提案：https://github.com/ethereum/wiki/wiki/Standardized_Contract_APIs/499c882f3ec123537fc2fccd57eaa29e6032fe4a")]),s._v(" "),t("li",[s._v("Reddit 上的讨论： https://www.reddit.com/r/eferum/comments/3n8fkn/lets_talk_about_the_coin_standard/")]),s._v(" "),t("li",[s._v("最初的 Issue #20：https://github.com/eysum/EIPs/issues/20")])]),s._v(" "),t("h2",{attrs:{id:"版权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版权"}},[s._v("#")]),s._v(" 版权")]),s._v(" "),t("p",[s._v("Copyright and related rights waived via "),t("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CC0"),t("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);