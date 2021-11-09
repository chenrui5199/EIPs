(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{720:function(t,e,a){"use strict";a.r(e);var s=a(46),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("Adds an opcode that gives the EVM access to the block's base fee.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("Add a "),a("code",[t._v("BASEFEE (0x48)")]),t._v(" that returns the value of the base fee of the current block it is executing in.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("The intended use case would be for contracts to get the value of the base fee. This feature would enable or improve existing use cases, such as:")]),t._v(" "),a("ul",[a("li",[t._v('Contracts that need to set bounties for anyone to "poke" them with a transaction could set the bounty to be '),a("code",[t._v("BASEFEE + x")]),t._v(", or "),a("code",[t._v("BASEFEE * (1 + x)")]),t._v('. This makes the mechanism more reliable, because they will always pay "enough" regardless of market conditions.')]),t._v(" "),a("li",[t._v("Gas futures can be implemented based on it. This would be more precise than gastokens.")]),t._v(" "),a("li",[t._v("Improve the security for state channels, plasma, optirolls and other fraud proof driven solutions. Having the "),a("code",[t._v("BASEFEE")]),t._v(" as an input allows you to lengthen the challenge period automatically if you see that the "),a("code",[t._v("BASEFEE")]),t._v(" is high.")])]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("Add a "),a("code",[t._v("BASEFEE")]),t._v(" opcode at "),a("code",[t._v("(0x48)")]),t._v(", with gas cost "),a("code",[t._v("G_base")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Op")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Input")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Output")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Cost")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0x48")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])])])]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("h3",{attrs:{id:"gas-cost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-cost"}},[t._v("#")]),t._v(" Gas cost")]),t._v(" "),a("p",[t._v("The value of the base fee is needed to process transactions. That means it's value is already available before running the EVM code.\nThe opcode does not add extra complexity and additional read/write operations, hence the choice of "),a("code",[t._v("G_base")]),t._v(" gas cost.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("There are no known backward compatibility issues with this opcode.")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("h3",{attrs:{id:"nominal-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nominal-case"}},[t._v("#")]),t._v(" Nominal case")]),t._v(" "),a("p",[t._v("Assuming current block base fee is "),a("code",[t._v("7 wei")]),t._v(".\nThis should push the value "),a("code",[t._v("7")]),t._v(" (left padded byte32) to the stack.")]),t._v(" "),a("p",[t._v("Bytecode: "),a("code",[t._v("0x4800")]),t._v(" ("),a("code",[t._v("BASEFEE, STOP")]),t._v(")")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pc")]),t._v(" "),a("th",[t._v("Op")]),t._v(" "),a("th",[t._v("Cost")]),t._v(" "),a("th",[t._v("Stack")]),t._v(" "),a("th",[t._v("RStack")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("BASEFEE")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("[]")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("STOP")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("[7]")]),t._v(" "),a("td",[t._v("[]")])])])]),t._v(" "),a("p",[t._v("Output: 0x\nConsumed gas: "),a("code",[t._v("2")])]),t._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),a("p",[t._v("The value of the base fee is not sensitive and is publicly accessible in the block header. There are no known security implications with this opcode.")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);