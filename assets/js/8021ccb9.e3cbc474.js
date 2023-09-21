"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[77669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),s=r,b=m["".concat(o,".").concat(s)]||m[s]||u[s]||d;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,i=new Array(d);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<d;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},64168:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(83117),r=n(67294),d=n(3905);const i={id:"add-internal-direct-debit-payment-mandate-input",title:"AddInternalDirectDebitPaymentMandateInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/inputs/add-internal-direct-debit-payment-mandate-input",id:"api-reference/inputs/add-internal-direct-debit-payment-mandate-input",title:"AddInternalDirectDebitPaymentMandateInput",description:"Inputs to add an Internal Direct Debit Payment Mandate",source:"@site/docs/api-reference/inputs/add-internal-direct-debit-payment-mandate-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-internal-direct-debit-payment-mandate-input",permalink:"/api-reference/inputs/add-internal-direct-debit-payment-mandate-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-internal-direct-debit-payment-mandate-input.mdx",tags:[],version:"current",frontMatter:{id:"add-internal-direct-debit-payment-mandate-input",title:"AddInternalDirectDebitPaymentMandateInput",hide_table_of_contents:!1}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>paymentMethodId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbpaymentmethodidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>sequence</b></code><Bullet /><code>InternalDirectDebitSequence</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbsequencebcodeinternaldirectdebitsequence-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>reference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>language</b></code><Bullet /><code>MandateLanguage</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputblanguagebcodemandatelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>debtorAccountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbdebtoraccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandateInput.<b>signatureDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbsignaturedatebcodedate-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:p,Bullet:m,SpecifiedBy:u,Badge:s},y="wrapper";function f(e){let{components:t,...n}=e;return(0,d.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Inputs to add an Internal Direct Debit Payment Mandate"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddInternalDirectDebitPaymentMandateInput {\n  paymentMethodId: ID!\n  sequence: InternalDirectDebitSequence\n  reference: String\n  language: MandateLanguage\n  debtorAccountId: ID!\n  signatureDate: Date\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbpaymentmethodidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,d.kt)("b",null,"paymentMethodId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The ID of the concerned merchant payment method")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbsequencebcodeinternaldirectdebitsequence-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,d.kt)("b",null,"sequence"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/enums/internal-direct-debit-sequence"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitSequence"))," ",(0,d.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Determines whether the payment mandate is a one-off or recurring")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbreferencebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,d.kt)("b",null,"reference"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Reference of the payment mandate")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputblanguagebcodemandatelanguage-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,d.kt)("b",null,"language"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/enums/mandate-language"},(0,d.kt)("inlineCode",{parentName:"a"},"MandateLanguage"))," ",(0,d.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Language that will be used to produce the mandate PDF document")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbdebtoraccountidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,d.kt)("b",null,"debtorAccountId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"ID of the Swan account of the debtor")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandateinputbsignaturedatebcodedate-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandateInput.",(0,d.kt)("b",null,"signatureDate"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,d.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Signature date of the Internal Direct Debit mandate")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-internal-direct-debit-payment-mandate"},(0,d.kt)("inlineCode",{parentName:"a"},"addInternalDirectDebitPaymentMandate")),"  ",(0,d.kt)(s,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);