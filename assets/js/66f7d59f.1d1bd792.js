"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(a),b=r,m=s["".concat(o,".").concat(b)]||s[b]||u[b]||i;return a?n.createElement(m,d(d({ref:t},l),{},{components:a})):n.createElement(m,d({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,d=new Array(i);d[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:r,d[1]=c;for(var p=2;p<i;p++)d[p]=a[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},73579:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>o,toc:()=>b});var n=a(87462),r=a(67294),i=a(3905);const d={id:"update-received-sepa-direct-debit-b2-b-mandate",title:"updateReceivedSepaDirectDebitB2bMandate",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api-reference/mutations/update-received-sepa-direct-debit-b2-b-mandate",id:"api-reference/mutations/update-received-sepa-direct-debit-b2-b-mandate",title:"updateReceivedSepaDirectDebitB2bMandate",description:"Allows to update a received sepa direct debit mandate B2b.",source:"@site/docs/api-reference/mutations/update-received-sepa-direct-debit-b2-b-mandate.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/update-received-sepa-direct-debit-b2-b-mandate",permalink:"/api-reference/mutations/update-received-sepa-direct-debit-b2-b-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/update-received-sepa-direct-debit-b2-b-mandate.mdx",tags:[],version:"current",frontMatter:{id:"update-received-sepa-direct-debit-b2-b-mandate",title:"updateReceivedSepaDirectDebitB2bMandate",hide_table_of_contents:!1}},p={},l=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),b=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateReceivedSepaDirectDebitB2bMandate.<b>input</b></code><Bullet /><code>UpdateReceivedSepaDirectDebitB2bMandateInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandatebinputbcodeupdatereceivedsepadirectdebitb2bmandateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateReceivedSepaDirectDebitB2bMandatePayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"updatereceivedsepadirectdebitb2bmandatepayload-",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:c=!1}=e;const[o,p]=(0,r.useState)(c);return(0,i.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&d)},f={Bullet:l,SpecifiedBy:s,Badge:u,toc:b,Details:m},y="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Allows to update a received sepa direct debit mandate B2b."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This mutation is restricted to an User access token (",(0,i.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request with the Swan app.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The user must be able to initiate payments for this account.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"updateReceivedSepaDirectDebitB2bMandate(\n  input: UpdateReceivedSepaDirectDebitB2bMandateInput!\n): UpdateReceivedSepaDirectDebitB2bMandatePayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandatebinputbcodeupdatereceivedsepadirectdebitb2bmandateinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"updateReceivedSepaDirectDebitB2bMandate.",(0,i.kt)("b",null,"input"))),(0,i.kt)(l,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/update-received-sepa-direct-debit-b2-b-mandate-input"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateReceivedSepaDirectDebitB2bMandateInput!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"updatereceivedsepadirectdebitb2bmandatepayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/update-received-sepa-direct-debit-b2-b-mandate-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateReceivedSepaDirectDebitB2bMandatePayload"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Union type returned by the updateReceivedSepaDirectDebitB2bMandate mutation")))}v.isMDXComponent=!0}}]);