"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[77669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=d,b=p["".concat(o,".").concat(u)]||p[u]||s[u]||r;return a?n.createElement(b,l(l({ref:t},m),{},{components:a})):n.createElement(b,l({ref:t},m))}));function b(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:d,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64168:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>m,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),d=a(67294),r=a(3905);const l={id:"add-internal-direct-debit-payment-mandate-input",title:"AddInternalDirectDebitPaymentMandateInput",hide_table_of_contents:!1},i=void 0,o={unversionedId:"api-reference/inputs/add-internal-direct-debit-payment-mandate-input",id:"api-reference/inputs/add-internal-direct-debit-payment-mandate-input",title:"AddInternalDirectDebitPaymentMandateInput",description:"Inputs to add an Internal Direct Debit Payment Mandate",source:"@site/docs/api-reference/inputs/add-internal-direct-debit-payment-mandate-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-internal-direct-debit-payment-mandate-input",permalink:"/api-reference/inputs/add-internal-direct-debit-payment-mandate-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-internal-direct-debit-payment-mandate-input.mdx",tags:[],version:"current",frontMatter:{id:"add-internal-direct-debit-payment-mandate-input",title:"AddInternalDirectDebitPaymentMandateInput",hide_table_of_contents:!1}},c={},m=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>paymentMethodId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbpaymentmethodidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>sequence</b></code><Bullet /><code>InternalDirectDebitSequence</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbsequencebcodeinternaldirectdebitsequence-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>reference</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>language</b></code><Bullet /><code>MandateLanguage</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputblanguagebcodemandatelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>debtorAccountId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbdebtoraccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>signatureDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbsignaturedatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbnamebcodestring-",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[o,c]=(0,d.useState)(i);return(0,r.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&l)},g={Bullet:m,SpecifiedBy:p,Badge:s,toc:u,Details:b},y="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inputs to add an Internal Direct Debit Payment Mandate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddInternalDirectDebitPaymentMandateInput {\n  paymentMethodId: ID!\n  sequence: InternalDirectDebitSequence\n  reference: String\n  language: MandateLanguage\n  debtorAccountId: ID!\n  signatureDate: Date\n  name: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbpaymentmethodidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,r.kt)("b",null,"paymentMethodId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ID of the concerned merchant payment method")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbsequencebcodeinternaldirectdebitsequence-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,r.kt)("b",null,"sequence"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/internal-direct-debit-sequence"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitSequence"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Determines whether the payment mandate is a one-off or recurring")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbreferencebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Reference of the payment mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputblanguagebcodemandatelanguage-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,r.kt)("b",null,"language"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/mandate-language"},(0,r.kt)("inlineCode",{parentName:"a"},"MandateLanguage"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Language that will be used to produce the mandate PDF document")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbdebtoraccountidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,r.kt)("b",null,"debtorAccountId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ID of the Swan account of the debtor")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbsignaturedatebcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,r.kt)("b",null,"signatureDate"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Signature date of the Internal Direct Debit mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Custom name of the Internal Direct Debit mandate")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-internal-direct-debit-payment-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"addInternalDirectDebitPaymentMandate")),"  ",(0,r.kt)(s,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);