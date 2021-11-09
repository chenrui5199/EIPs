(window.webpackJsonp=window.webpackJsonp||[]).push([[751],{1177:function(e,t,a){"use strict";a.r(t);var s=a(46),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This EIP specifies validation rules for some important safety properties, including")]),e._v(" "),a("ul",[a("li",[e._v("valid instructions,")]),e._v(" "),a("li",[e._v("valid jump destinations,")]),e._v(" "),a("li",[e._v("no stack underflows, and")]),e._v(" "),a("li",[e._v("no stack overflows without recursion.")])]),e._v(" "),a("p",[e._v("Valid contracts will not halt with an exception unless they either run out of gas or overflow stack during a recursive subroutine call.")]),e._v(" "),a("p",[e._v("Code must be validated at contract creation time – not runtime – by the provided algorithm or its equivalent.  Therefore, tables of valid dynamic jumps are specified in an EOF container "),a("em",[e._v("section")]),e._v(".  This allows for a one-pass algorithm that is (and must be) linear in the size of the "),a("em",[e._v("code")]),e._v(" plus the "),a("em",[e._v("section")]),e._v(", so as not to be a DoS vulnerability.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Validating safe control flow at creation time has a few important advantages.")]),e._v(" "),a("ul",[a("li",[e._v("Jump destination analysis does not need to be performed at runtime, thus improving performance and preventing denial of service attacks.")]),e._v(" "),a("li",[e._v("Jump destination validity does not always need to be checked for at runtime, improving performance.")]),e._v(" "),a("li",[e._v("Stack underflow does not ever need to be checked for at runtime, improving performance.")])]),e._v(" "),a("p",[e._v("Dynamic jumps, where the destination of a JUMP or JUMPI is not known until runtime, can be an obstacle to statically proving this sort of safety in linear time, but have also been seen as necessary to implement the return jump from a subroutine. But consider this example of calling a minimal subroutine")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ADD:\n    RTN_ADD \n    0x02\n    0x03\n    ADDITION\n    jump\nRTN_ADD:\n    jumpdest\n    swap1\n    jump\n\nADDITION:\n    jumpdest\n    add\n    swap1\n    jump \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("p",[e._v("Note that the return address and the destination address are pushed on the stack as constants -- the "),a("code",[e._v("JUMP")]),e._v(" instructions are in fact static, not dynamic, in the sense that they jump to the same "),a("code",[e._v("PC")]),e._v(" on every run.  So we do not need (nor typically use) dynamic jumps to implement subroutines.")]),e._v(" "),a("p",[e._v("Since many of the jumps we need in practice are static we can validate their safety with a static analysis of the "),a("em",[e._v("code")]),e._v(".  And since can, we should.")]),e._v(" "),a("p",[e._v("Even where jumps are dynamic it is possible to tabulate valid destinations in advance, and the Ethereum Object Format gives us a place to store such tables.  Providing for the safe use of dynamic jumps makes for concise and efficient implementations of language constructs like switches and virtual functions.")]),e._v(" "),a("p",[e._v("So again, since we can validate the safety of tabulated dynamic jumps with a static analysis of the code, we should.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("h3",{attrs:{id:"eof-container-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eof-container-changes"}},[e._v("#")]),e._v(" EOF container changes")]),e._v(" "),a("ol",[a("li",[e._v("A new EOF section called "),a("code",[e._v("vjumptable")]),e._v(" ("),a("code",[e._v("section_kind = 4")]),e._v(") is introduced. It contains a sequence of "),a("em",[e._v("n")]),e._v(" tuples _(jumpsrc, jumpdest"),a("sub",[e._v("i")]),e._v("__, sorted in ascending lexicographic order.  Each tuple represents a valid jump from one location in the "),a("em",[e._v("code")]),e._v(" to another.")]),e._v(" "),a("li",[e._v("A new EOF section called "),a("code",[e._v("vtraptable")]),e._v(" ("),a("code",[e._v("section_kind = 5")]),e._v(") is introduced. It contains a sequence of "),a("em",[e._v("n")]),e._v(" tuples "),a("em",[e._v("(jumpsrc, jumpdst"),a("sub",[e._v("i")])]),e._v(", sorted in ascending lexicographic order.  Each tuple represents a valid jump from one location in the "),a("em",[e._v("code")]),e._v(" to another.  There is one and only one trap table entry for each "),a("em",[e._v("jumpsrc")]),e._v(".")])]),e._v(" "),a("p",[e._v("At runtime, a dynamic jump cause a search for a matching "),a("em",[e._v("jumpsrc")]),e._v(" and "),a("em",[e._v("jumpdst")]),e._v(" in the "),a("code",[e._v("vjumptable.")]),e._v("  if found, the jump proceeds to the "),a("em",[e._v("jumpdest")]),e._v(".  If not, the jump proceeds to the "),a("em",[e._v("jumpdest")]),e._v(" for the matching "),a("em",[e._v("jumpsrc")]),e._v(" in the "),a("em",[e._v("vtraptable")]),e._v(".  In this way dynamic jumps always succeed, but it is left to the programmer to implement a default case for the trap table.")]),e._v(" "),a("h3",{attrs:{id:"validity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validity"}},[e._v("#")]),e._v(" Validity")]),e._v(" "),a("p",[e._v("We define safety here as avoiding exceptional halting states:")]),e._v(" "),a("ul",[a("li",[e._v("Valid contracts will not halt with an exception unless they\n"),a("ul",[a("li",[e._v("run out of gas, or")]),e._v(" "),a("li",[e._v("overflow stack while making a recursive subroutine call.")])])])]),e._v(" "),a("p",[e._v("Attempts to create contracts that cannot be proven to be valid will fail.")]),e._v(" "),a("h4",{attrs:{id:"exceptional-halting-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exceptional-halting-states"}},[e._v("#")]),e._v(" Exceptional Halting States")]),e._v(" "),a("p",[a("em",[e._v("Execution")]),e._v(" is as defined in the "),a("a",{attrs:{href:"https://ethereum.github.io/yellowpaper/paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yellow Paper"),a("OutboundLink")],1),e._v("  a sequence of changes to the EVM state.  The conditions on valid "),a("em",[e._v("code")]),e._v(" are preserved by state changes.  At runtime, if execution of an instruction would violate a condition the execution is in an exceptional halting state.  The Yellow Paper defines five such states.")]),e._v(" "),a("ol",[a("li",[e._v("Insufficient gas")]),e._v(" "),a("li",[e._v("More than 1024 stack items")]),e._v(" "),a("li",[e._v("Insufficient stack items")]),e._v(" "),a("li",[e._v("Invalid jump destination")]),e._v(" "),a("li",[e._v("Invalid instruction")])]),e._v(" "),a("p",[e._v("We would like to consider EVM "),a("em",[e._v("code")]),e._v(" valid iff no execution of the program can lead to an exceptional halting state, but we must be able to validate "),a("em",[e._v("code")]),e._v(" in linear time to avoid denial of service attacks.  So in practice, we can only partially meet these requirements.  Our validation rules do not consider the "),a("em",[e._v("code's")]),e._v(" data and computations, only its control flow and stack use.  This means we will reject programs with any invalid "),a("em",[e._v("code")]),e._v(" paths, even if those paths are not reachable at runtime.")]),e._v(" "),a("h3",{attrs:{id:"validation-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-rules"}},[e._v("#")]),e._v(" Validation Rules")]),e._v(" "),a("blockquote",[a("p",[e._v("This section extends the contact creation validation rules (as defined in EIP-3540.)")])]),e._v(" "),a("ol",[a("li",[e._v("Every "),a("code",[e._v("JUMP")]),e._v(" and "),a("code",[e._v("JUMPI")]),e._v(" either\n"),a("ul",[a("li",[e._v("matches at least one tuple in the "),a("code",[e._v("vjumptable")]),e._v(" or the "),a("code",[e._v("vtraptable")]),e._v(", or")]),e._v(" "),a("li",[e._v("is "),a("em",[e._v("static")])])])]),e._v(" "),a("li",[e._v("The stack depth is\n"),a("ul",[a("li",[e._v("always positive and")]),e._v(" "),a("li",[e._v("the same on every path through an opcode.")])])]),e._v(" "),a("li",[e._v("The number of items on the "),a("code",[e._v("data stack")]),e._v(" and on the "),a("code",[e._v("return stack")]),e._v(" is at most 1024.")])]),e._v(" "),a("p",[e._v("A  "),a("em",[e._v("JUMP")]),e._v(" or "),a("em",[e._v("JUMPI")]),e._v(" instruction matches a tuple in a table if the first, "),a("code",[e._v("jumpsrc")]),e._v(" element equals that instruction's offset in the "),a("em",[e._v("code")]),e._v(".")]),e._v(" "),a("p",[e._v("We consider a  "),a("em",[e._v("JUMP")]),e._v(" or "),a("em",[e._v("JUMPI")]),e._v(" instruction to be "),a("em",[e._v("static")]),e._v(" if its "),a("code",[e._v("jumpsrc")]),e._v(" argument was first placed on the stack as a valid "),a("code",[e._v("JUMPDEST")]),e._v(" (e.g. via  a "),a("code",[e._v("PUSH…")]),e._v("), and its value has not changed since, other than by a "),a("code",[e._v("DUP…")]),e._v(" or "),a("code",[e._v("SWAP…")]),e._v(".")]),e._v(" "),a("p",[e._v("The Yellow Paper has the "),a("code",[e._v("stack pointer")]),e._v(" ("),a("code",[e._v("SP")]),e._v(") pointing just past the top item on the "),a("code",[e._v("data stack")]),e._v(".   We define the "),a("code",[e._v("stack base")]),e._v(" ("),a("code",[e._v("BP")]),e._v(") as the element that the "),a("code",[e._v("SP")]),e._v(" addressed at the entry to the current "),a("em",[e._v("basic block")]),e._v(", or "),a("code",[e._v("0")]),e._v(" on program entry, and the "),a("code",[e._v("stack depth")]),e._v(" as the number of stack elements between the current "),a("code",[e._v("SP")]),e._v(" and the current "),a("code",[e._v("BP")]),e._v(".")]),e._v(" "),a("p",[e._v("Taken together, these rules allow for code to be validated by traversing the control-flow graph, following each edge only once.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The alternative to checking validity at creation time is checking it at runtime.  This hurts performance and is a denial of service vulnerability.  Thus the above rules and accompanying one-pass validation algorithm.")]),e._v(" "),a("p",[a("em",[e._v("Rule 1")]),e._v(" – requiring static or previously tabulated destinations for "),a("code",[e._v("JUMP")]),e._v(" and "),a("code",[e._v("JUMPI")]),e._v(" – simplifies static jumps and constrains dynamic jumps.")]),e._v(" "),a("ul",[a("li",[e._v("Jump destinations are currently checked at runtime, but static jumps can be validated at creation time.")]),e._v(" "),a("li",[e._v("Requiring the possible destinations of dynamic jumps to be tabulated in advance allows for tractable bytecode traversal for creation-time validation: a  jump table takes up space proportional to the number of jump destinations, so attempting to attack the validation algorithm with large numbers of jump destinations will also reduce the available space for "),a("em",[e._v("code")]),e._v(" to be validated.")])]),e._v(" "),a("p",[a("em",[e._v("Rule 2")]),e._v(" – requiring positive, consistent stack depth  – ensures sufficient stack.  Exceptions can be caused by some irreducible paths like jumping into loops and subroutines, and by calling subroutines with insufficient numbers of arguments.")]),e._v(" "),a("p",[a("em",[e._v("Rule 3")]),e._v(" – bounding the "),a("code",[e._v("stack pointer")]),e._v(" – catches all stack overflows that occur without recursion.")]),e._v(" "),a("h2",{attrs:{id:"validation-algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-algorithm"}},[e._v("#")]),e._v(" Validation Algorithm")]),e._v(" "),a("blockquote",[a("p",[e._v("This section specifies an algorithm for checking the above the rules.  Equivalent code must be run at creation time.  We assume that the validation defined in EIP-3540 and EIP-3670 has already run to check "),a("em",[e._v("Rule 0")]),e._v(", although in practice the algorithms can be merged.")])]),e._v(" "),a("p",[e._v("The following is a pseudo-Go implementation of an algorithm for enforcing program validity.  This algorithm is a symbolic execution of the program that recursively traverses the bytecode, following its control flow and stack use and checking for violations of the rules above.  It uses a stack to track the slots that hold "),a("code",[e._v("PUSHed")]),e._v(" constants, from which it pops the destinations to validate during the analysis.")]),e._v(" "),a("p",[e._v("This algorithm runs in time equal to "),a("code",[e._v("O(vertices + edges)")]),e._v(" in the program's control-flow graph, where edges represent control flow and the vertices represent "),a("em",[e._v("basic blocks")]),e._v(" – thus the algorithm takes time proportional to the size of the bytecode.")]),e._v(" "),a("p",[e._v("For simplicity's sake we assume a few helper functions.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("advance_pc()")]),e._v(" advances the "),a("code",[e._v("PC")]),e._v(",  skipping any immediate data.")]),e._v(" "),a("li",[a("code",[e._v("imm_data()")]),e._v(" returns immediate data for an instruction.")]),e._v(" "),a("li",[a("code",[e._v("valid_jumpdest()")]),e._v(" tests whether\n"),a("ul",[a("li",[e._v("dynamic jumps match a valid ("),a("em",[e._v("jumpsrc")]),e._v(", "),a("em",[e._v("jumpdest")]),e._v(") in the "),a("code",[e._v("vjumptable")]),e._v(" or "),a("code",[e._v("vtraptable")])]),e._v(" "),a("li",[e._v("all jump destinations are "),a("code",[e._v("JUMPDEST")]),e._v(" bytes and not in immediate data.")])])]),e._v(" "),a("li",[a("code",[e._v("remove_items()")]),e._v(" returns the number of items removed from the "),a("code",[e._v("stack")]),e._v(" by an instruction")]),e._v(" "),a("li",[a("code",[e._v("add_items() returns the number of items added to the")]),e._v("stack"),a("code",[e._v(". Items are added as 0xFFFFFFFF. The")]),e._v("PC"),a("code",[e._v(",")]),e._v("PUSH…"),a("code",[e._v(",")]),e._v("SWAP…"),a("code",[e._v(",")]),e._v("DUP…"),a("code",[e._v(",")]),e._v("JUMP"),a("code",[e._v(", and")]),e._v("JUMPI` instructions are handled separately.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var code  [code_len]byte\nvar depth [code_len]unsigned\nvar stack [1024]int = { -1 }  // -1 marks non-constant \nvar sp := 1023                // stack grows down\nvar bp := 1023\n\nfunc validate(pc := 0, depth := 0) boolean {\n\n   for ; pc < code_len; pc = advance_pc(pc) {\n\n      // successful termination\n      switch instruction {\n      case STOP    return true\n      case RETURN  return true\n      case SUICIDE return true\n      }\n\n      // check for stack underflow and overflow\n      depth := bp - sp\n      if depth < 0 || sp < 0 || 1024 < sp {\n         return false\n      }\n\n      // if stack depth for `pc` is non-zero we have been here before \n      // so return to break cycle in control flow graph\n      if depth[pc] != 0 {\n          if depth[pc] != depth {\n             return false\n          }\n          return true\n      }\n      depth[pc] = depth\n\n      // track constants on the stack\n      if (instruction == PC) {\n         stack[sp++] == pc\n         continue\n      }\n      if (PUSH1 <= instruction && instruction <= PUSH16) {\n         stack[sp++] = imm_data(pc)\n         continue\n      }\n      if (DUP1 <= instruction && instruction <= DUP16) {\n         n := instruction - DUP1 + 1\n         stack[sp + 1] = stack[n + 1]\n         continue\n      }\n      if (SWAP1 <= instruction && instruction <= SWAP16) {\n         n := instruction - SWAP1 + 1\n         swap := stack[n]\n         stack[n] = stack[sp + 1]\n         stack[sp + 1] = swap\n         continue\n      }\n\n      if (instruction == JUMP) {\n\n         // check for valid destination\n         jumpdest = const_stack[sp++]\n         if !valid_jumpdest(jumpdest) {\n            return false\n         }\n\n         // will enter basic block at destination\n         bp = sp\n\n         // reset pc to destination of jump \n         pc = jumpdest\n         continue\n      }\n      if (instruction == JUMPI {\n\n         // check for valid destination\n         jumpdest = stack[sp++]\n         if !valid_jumpdest(dest) {\n            return false\n         }\n\n         // recurse to jump to code to validate\n         if !validate(jumpdest) {\n            return false\n         }\n         // false side of conditional\n\n         // enter basic block \n         bp = sp\n         continue\n      }\n      if (instruction == JUMPDEST) {\n\n         // enter basic block \n         bp = sp\n         continue\n      }\n\n      // apply other instructions to stack\n      sp += remove_items(pc)\n      sp -= add_items(pc)\n   }\n\n   // successful termination\n   return true\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br"),a("span",{staticClass:"line-number"},[e._v("58")]),a("br"),a("span",{staticClass:"line-number"},[e._v("59")]),a("br"),a("span",{staticClass:"line-number"},[e._v("60")]),a("br"),a("span",{staticClass:"line-number"},[e._v("61")]),a("br"),a("span",{staticClass:"line-number"},[e._v("62")]),a("br"),a("span",{staticClass:"line-number"},[e._v("63")]),a("br"),a("span",{staticClass:"line-number"},[e._v("64")]),a("br"),a("span",{staticClass:"line-number"},[e._v("65")]),a("br"),a("span",{staticClass:"line-number"},[e._v("66")]),a("br"),a("span",{staticClass:"line-number"},[e._v("67")]),a("br"),a("span",{staticClass:"line-number"},[e._v("68")]),a("br"),a("span",{staticClass:"line-number"},[e._v("69")]),a("br"),a("span",{staticClass:"line-number"},[e._v("70")]),a("br"),a("span",{staticClass:"line-number"},[e._v("71")]),a("br"),a("span",{staticClass:"line-number"},[e._v("72")]),a("br"),a("span",{staticClass:"line-number"},[e._v("73")]),a("br"),a("span",{staticClass:"line-number"},[e._v("74")]),a("br"),a("span",{staticClass:"line-number"},[e._v("75")]),a("br"),a("span",{staticClass:"line-number"},[e._v("76")]),a("br"),a("span",{staticClass:"line-number"},[e._v("77")]),a("br"),a("span",{staticClass:"line-number"},[e._v("78")]),a("br"),a("span",{staticClass:"line-number"},[e._v("79")]),a("br"),a("span",{staticClass:"line-number"},[e._v("80")]),a("br"),a("span",{staticClass:"line-number"},[e._v("81")]),a("br"),a("span",{staticClass:"line-number"},[e._v("82")]),a("br"),a("span",{staticClass:"line-number"},[e._v("83")]),a("br"),a("span",{staticClass:"line-number"},[e._v("84")]),a("br"),a("span",{staticClass:"line-number"},[e._v("85")]),a("br"),a("span",{staticClass:"line-number"},[e._v("86")]),a("br"),a("span",{staticClass:"line-number"},[e._v("87")]),a("br"),a("span",{staticClass:"line-number"},[e._v("88")]),a("br"),a("span",{staticClass:"line-number"},[e._v("89")]),a("br"),a("span",{staticClass:"line-number"},[e._v("90")]),a("br"),a("span",{staticClass:"line-number"},[e._v("91")]),a("br"),a("span",{staticClass:"line-number"},[e._v("92")]),a("br"),a("span",{staticClass:"line-number"},[e._v("93")]),a("br"),a("span",{staticClass:"line-number"},[e._v("94")]),a("br"),a("span",{staticClass:"line-number"},[e._v("95")]),a("br"),a("span",{staticClass:"line-number"},[e._v("96")]),a("br"),a("span",{staticClass:"line-number"},[e._v("97")]),a("br"),a("span",{staticClass:"line-number"},[e._v("98")]),a("br"),a("span",{staticClass:"line-number"},[e._v("99")]),a("br"),a("span",{staticClass:"line-number"},[e._v("100")]),a("br"),a("span",{staticClass:"line-number"},[e._v("101")]),a("br"),a("span",{staticClass:"line-number"},[e._v("102")]),a("br"),a("span",{staticClass:"line-number"},[e._v("103")]),a("br")])]),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("These changes affect the semantics of EVM code – the use of "),a("code",[e._v("JUMP")]),e._v(", "),a("code",[e._v("JUMPI")]),e._v(", and the stack are restricted, such that some "),a("em",[e._v("code")]),e._v(" that would otherwise run correctly will nonetheless be invalid EVM "),a("em",[e._v("code")]),e._v(".")]),e._v(" "),a("p",[e._v("These changes and associated security guarantees are compatible with the valid use of the control-flow operations introduced by "),a("RouterLink",{attrs:{to:"/zh/eip-2315.html"}},[e._v("EIP-2315: Simple Subroutines for the EVM")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("p",[e._v("This EIP is intended to ensure a minimal level of safety for EVM code deployed on the blockchain.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);