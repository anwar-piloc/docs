"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(a),u=d,m=s["".concat(o,".").concat(u)]||s[u]||b[u]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:d,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37415:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),d=a(67294),r=a(3905);const i={id:"add-received-sepa-direct-debit-b2-b-mandate",title:"addReceivedSepaDirectDebitB2bMandate",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api-reference/mutations/add-received-sepa-direct-debit-b2-b-mandate",id:"api-reference/mutations/add-received-sepa-direct-debit-b2-b-mandate",title:"addReceivedSepaDirectDebitB2bMandate",description:"Allows to add a received sepa direct debit mandate B2b.",source:"@site/docs/api-reference/mutations/add-received-sepa-direct-debit-b2-b-mandate.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-received-sepa-direct-debit-b2-b-mandate",permalink:"/api-reference/mutations/add-received-sepa-direct-debit-b2-b-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-received-sepa-direct-debit-b2-b-mandate.mdx",tags:[],version:"current",frontMatter:{id:"add-received-sepa-direct-debit-b2-b-mandate",title:"addReceivedSepaDirectDebitB2bMandate",hide_table_of_contents:!1}},l={},p=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addReceivedSepaDirectDebitB2bMandate.<b>input</b></code><Bullet /><code>AddReceivedSepaDirectDebitB2bMandateInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandatebinputbcodeaddreceivedsepadirectdebitb2bmandateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddReceivedSepaDirectDebitB2bMandatePayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"addreceivedsepadirectdebitb2bmandatepayload-",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:c=!1}=e;const[o,l]=(0,d.useState)(c);return(0,r.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&i)},f={Bullet:p,SpecifiedBy:s,Badge:b,toc:u,Details:m},y="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Allows to add a received sepa direct debit mandate B2b."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This mutation is restricted to an User access token (",(0,r.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request with the Swan app.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The user must be able to initiate payments for this account.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"addReceivedSepaDirectDebitB2bMandate(\n  input: AddReceivedSepaDirectDebitB2bMandateInput!\n): AddReceivedSepaDirectDebitB2bMandatePayload!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandatebinputbcodeaddreceivedsepadirectdebitb2bmandateinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"addReceivedSepaDirectDebitB2bMandate.",(0,r.kt)("b",null,"input"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-received-sepa-direct-debit-b2-b-mandate-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AddReceivedSepaDirectDebitB2bMandateInput!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"addreceivedsepadirectdebitb2bmandatepayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-received-sepa-direct-debit-b2-b-mandate-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddReceivedSepaDirectDebitB2bMandatePayload"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Union type return by the addReceivedSepaDirectDebitB2bMandate mutation")))}v.isMDXComponent=!0}}]);