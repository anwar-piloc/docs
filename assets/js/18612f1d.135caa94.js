"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(a),y=d,b=m["".concat(l,".").concat(y)]||m[y]||p[y]||r;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=a.length,o=new Array(r);o[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:d,o[1]=c;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},56232:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(83117),d=a(67294),r=a(3905);const o={id:"sepapayment-direct-debit-mandate",title:"SEPAPaymentDirectDebitMandate",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/objects/sepapayment-direct-debit-mandate",id:"api-reference/objects/sepapayment-direct-debit-mandate",title:"SEPAPaymentDirectDebitMandate",description:"Payment direct debit mandate for SEPA",source:"@site/docs/api-reference/objects/sepapayment-direct-debit-mandate.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/sepapayment-direct-debit-mandate",permalink:"/api-reference/objects/sepapayment-direct-debit-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/sepapayment-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"sepapayment-direct-debit-mandate",title:"SEPAPaymentDirectDebitMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SEPADirectDebitTransaction",permalink:"/api-reference/objects/sepadirect-debit-transaction"},next:{title:"SEPAPaymentMandateCreditor",permalink:"/api-reference/objects/sepapayment-mandate-creditor"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>scheme</b></code><Bullet /><code>SEPAPaymentMandateScheme!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebschemebcodesepapaymentmandatescheme--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>statusInfo</b></code><Bullet /><code>PaymentMandateStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebstatusinfobcodepaymentmandatestatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>sequence</b></code><Bullet /><code>SEPAPaymentMandateSequence!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebsequencebcodesepapaymentmandatesequence--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>mandateDocumentUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebmandatedocumenturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>debtor</b></code><Bullet /><code>SEPAPaymentMandateDebtor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebdebtorbcodesepapaymentmandatedebtor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>ultimateCreditorName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebultimatecreditornamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>creditor</b></code><Bullet /><code>SEPAPaymentMandateCreditor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebcreditorbcodesepapaymentmandatecreditor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>signatureDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebsignaturedatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>executedAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebexecutedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>expiredAt</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebexpiredatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>accountHolder</b></code><Bullet /><code>AccountHolder!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebaccountholderbcodeaccountholder--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.<b>transactions</b></code><Bullet /><code>TransactionConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebtransactionsbcodetransactionconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.transactions.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatetransactionsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentDirectDebitMandate.transactions.<b>filters</b></code><Bullet /><code>TransactionsFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatetransactionsbfiltersbcodetransactionsfiltersinput-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SEPADirectDebitMandate</code> <Badge class="secondary" text="interface"/>',id:"sepadirectdebitmandate-",level:4},{value:'<code>PaymentDirectDebitMandate</code> <Badge class="secondary" text="interface"/>',id:"paymentdirectdebitmandate-",level:4},{value:'<code>PaymentMandate</code> <Badge class="secondary" text="interface"/>',id:"paymentmandate-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:m,SpecifiedBy:p,Badge:y},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Payment direct debit mandate for SEPA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPAPaymentDirectDebitMandate implements SEPADirectDebitMandate, PaymentDirectDebitMandate, PaymentMandate {\n  id: ID!\n  reference: String!\n  scheme: SEPAPaymentMandateScheme!\n  statusInfo: PaymentMandateStatusInfo!\n  sequence: SEPAPaymentMandateSequence!\n  mandateDocumentUrl: String!\n  debtor: SEPAPaymentMandateDebtor!\n  ultimateCreditorName: String\n  creditor: SEPAPaymentMandateCreditor!\n  signatureDate: Date\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  executedAt: DateTime\n  expiredAt: Date\n  accountHolder: AccountHolder!\n  transactions(\n  first: Int! = 50\n  after: String\n  filters: TransactionsFiltersInput\n): TransactionConnection\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique identifier of the SEPA Direct Debit Payment Mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebreferencebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique reference of the SEPA Direct Debit Payment Mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebschemebcodesepapaymentmandatescheme--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"scheme"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/sepapayment-mandate-scheme"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateScheme!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate scheme")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebstatusinfobcodepaymentmandatestatusinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"statusInfo"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-mandate-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentMandateStatusInfo!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate status information")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebsequencebcodesepapaymentmandatesequence--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"sequence"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/sepapayment-mandate-sequence"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateSequence!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate sequence")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebmandatedocumenturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"mandateDocumentUrl"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate PDF document URL")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebdebtorbcodesepapaymentmandatedebtor--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"debtor"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/sepapayment-mandate-debtor"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateDebtor!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate debtor information")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebultimatecreditornamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"ultimateCreditorName"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SEPA direct debit ultimate creditor name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebcreditorbcodesepapaymentmandatecreditor--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"creditor"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/sepapayment-mandate-creditor"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateCreditor!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate creditor information")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebsignaturedatebcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"signatureDate"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Signature date of the SEPA Direct Debit Payment Mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebcreatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Creation date of the SEPA Direct Debit Payment Mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebupdatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Last Update date of the SEPA Direct Debit Payment Mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebexecutedatbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"executedAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Date of the the last transaction executed for the concerned SEPA Direct Debit Payment Mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebexpiredatbcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"expiredAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Expiry date of the SEPA Direct Debit Payment Mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebaccountholderbcodeaccountholder--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"accountHolder"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolder!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account Holder information")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatebtransactionsbcodetransactionconnection-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.",(0,r.kt)("b",null,"transactions"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/transaction-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionConnection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of transactions associated with the SEPA Payment Direct Debit Mandate."),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatetransactionsbfirstbcodeint--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.transactions.",(0,r.kt)("b",null,"first"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"number of elements in the list (default value 50)")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatetransactionsbafterbcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.transactions.",(0,r.kt)("b",null,"after"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the list of elements needs to start after a element")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-sepapaymentdirectdebitmandatetransactionsbfiltersbcodetransactionsfiltersinput-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentDirectDebitMandate.transactions.",(0,r.kt)("b",null,"filters"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/inputs/transactions-filters-input"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionsFiltersInput"))," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be filtered")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"sepadirectdebitmandate-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/sepadirect-debit-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitMandate"))," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"paymentdirectdebitmandate-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-direct-debit-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentDirectDebitMandate"))," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"paymentmandate-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentMandate"))," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/add-sepa-direct-debit-payment-mandate-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddSepaDirectDebitPaymentMandateSuccessPayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);