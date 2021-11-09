(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{1044:function(e,a,t){"use strict";t.r(a);var s=t(46),d=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"simple-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),t("p",[e._v("Adds EIP header options "),t("code",[e._v("updates")]),e._v(" and "),t("code",[e._v("updated-by")]),e._v(" to frontmatter of "),t("code",[e._v("active")]),e._v(" EIPs for use as needed.")]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("EIP headers "),t("code",[e._v("updates")]),e._v(" and "),t("code",[e._v("updated-by")]),e._v(" are used for updating "),t("code",[e._v("active")]),e._v(" EIPs. This is to make the improvement process of EIPs more modular, and have updates to existing "),t("code",[e._v("active")]),e._v(" EIPs receive similar exposures to EIPs which replace existing "),t("code",[e._v("final")]),e._v(" EIPs.")]),e._v(" "),t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),t("p",[e._v("Currently, EIP1 specifies EIP headers: "),t("code",[e._v("updated")]),e._v(", "),t("code",[e._v("replaces")]),e._v(", and "),t("code",[e._v("superseded-by")]),e._v(". Headers "),t("code",[e._v("replaces")]),e._v(" and "),t("code",[e._v("superseded-by")]),e._v(" indicates when an entire EIP is being replaced by another EIP, indicating when an EIP is now historical, and is updated by a new standard.")]),e._v(" "),t("p",[e._v("The header "),t("code",[e._v("updated")]),e._v(" indicates the date an EIP has received an update by EIP authors and editors, an example EIP being EIP1. "),t("code",[e._v("updated")]),e._v(" is reserved for EIPs in "),t("code",[e._v("draft")]),e._v(" or "),t("code",[e._v("active")]),e._v(" status.")]),e._v(" "),t("p",[e._v("In the case of "),t("code",[e._v("active")]),e._v(" status, an EIP may receive an update, but these updates don't operate as with EIPs in "),t("code",[e._v("final")]),e._v(" status, where a historical EIP is created, and the new EIP is referenced by the historical one. While these updates are not kept immutably, updates to active EIPs can be done modularly by creating a new EIP that goes through the standard discussion and auditing process EIPs undergo. The EIP headers "),t("code",[e._v("updates")]),e._v(" and "),t("code",[e._v("updated-by")]),e._v(" are to facilitate this modularity. Creating a new EIP also provides sufficient notification to affected stakeholders of an active EIP before that EIP is "),t("code",[e._v("updated")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),t("h3",{attrs:{id:"updated-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updated-by"}},[e._v("#")]),e._v(" "),t("code",[e._v("updated-by")])]),e._v(" "),t("p",[t("code",[e._v("updated-by")]),e._v(" is reserved for EIPs in "),t("code",[e._v("active")]),e._v(" status. For an EIP in status "),t("code",[e._v("active")]),e._v(", updates to that EIP, which update the header "),t("code",[e._v("updated")]),e._v(", should be started by opening a new EIP to start vetting for that update. When an "),t("code",[e._v("active")]),e._v(" EIP receives a new entry to header "),t("code",[e._v("updated")]),e._v(", an associated "),t("code",[e._v("updated-by")]),e._v(" EIP listing should be included, where that newly listed EIP has reached "),t("code",[e._v("final")]),e._v(" status.")]),e._v(" "),t("p",[t("code",[e._v("updates")]),e._v(" should be included as an EIP header, as all EIP headers, and include a reference to an EIP designation. When multiple EIP designations are referenced, each should be separated by a comma. Example:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("---\nupdated-by: 9999, 9998, 9997\n---\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h3",{attrs:{id:"updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[e._v("#")]),e._v(" "),t("code",[e._v("updates")])]),e._v(" "),t("p",[t("code",[e._v("updates")]),e._v(" is reserved for EIPs updating EIPs in "),t("code",[e._v("active")]),e._v(" status. An EIP listed as "),t("code",[e._v("updates")]),e._v(" is implied to also be "),t("code",[e._v("requires")]),e._v("; only "),t("code",[e._v("updates")]),e._v(" is needed for those EIP listings. Having an EIP listing "),t("code",[e._v("updates")]),e._v(" does not necessarily mean that referenced EIP must reference back with an "),t("code",[e._v("updated-by")]),e._v(" listing.")]),e._v(" "),t("p",[t("code",[e._v("updates")]),e._v(" should be included as an EIP header, as all EIP headers, and include a reference to an EIP designation. When multiple EIP designations are referenced, each should be separated by a comma. Example:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("---\nupdates: 1\n---\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"rationale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),t("p",[t("code",[e._v("updates")]),e._v(" and "),t("code",[e._v("updated-by")]),e._v(" apply only to EIPs in "),t("code",[e._v("active")]),e._v(" status as updates to EIPs in "),t("code",[e._v("final")]),e._v(" status are already handled by EIP headers "),t("code",[e._v("superseded-by")]),e._v(" and "),t("code",[e._v("replaces")]),e._v(".")]),e._v(" "),t("p",[e._v("The syntax should align with previous EIP header syntax, as this EIP is not updating syntax, simply adding header options.")]),e._v(" "),t("h2",{attrs:{id:"backwards-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),t("p",[e._v("These EIP headers are optional and do not introduce compatibility issues.")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),t("p",[e._v("An implementation is adding a header option.")]),e._v(" "),t("h2",{attrs:{id:"security-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),t("p",[e._v("This standard is informational and does not introduce technical security issues.")]),e._v(" "),t("h2",{attrs:{id:"copyright"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),t("p",[e._v("Copyright and related rights waived via "),t("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=d.exports}}]);