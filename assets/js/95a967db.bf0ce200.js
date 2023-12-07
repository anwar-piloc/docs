"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[8757],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>y});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,r=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=l(a),u=d,y=s["".concat(c,".").concat(u)]||s[u]||p[u]||r;return a?n.createElement(y,i(i({ref:t},b),{},{components:a})):n.createElement(y,i({ref:t},b))}));function y(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:d,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40982:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>b,Details:()=>y,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),d=a(67294),r=a(3905);const i={id:"add-received-internal-direct-debit-b2-b-mandate-payload",title:"AddReceivedInternalDirectDebitB2bMandatePayload",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/unions/add-received-internal-direct-debit-b2-b-mandate-payload",id:"api-reference/unions/add-received-internal-direct-debit-b2-b-mandate-payload",title:"AddReceivedInternalDirectDebitB2bMandatePayload",description:"Union type return by the addReceivedInternalDirectDebitB2bMandate mutation",source:"@site/docs/api-reference/unions/add-received-internal-direct-debit-b2-b-mandate-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/add-received-internal-direct-debit-b2-b-mandate-payload",permalink:"/api-reference/unions/add-received-internal-direct-debit-b2-b-mandate-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/add-received-internal-direct-debit-b2-b-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-received-internal-direct-debit-b2-b-mandate-payload",title:"AddReceivedInternalDirectDebitB2bMandatePayload",hide_table_of_contents:!1}},l={},b=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedInternalDirectDebitB2bMandatePayload.<b>AddReceivedInternalDirectDebitB2bMandateSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatepayloadbaddreceivedinternaldirectdebitb2bmandatesuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedInternalDirectDebitB2bMandatePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatepayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedInternalDirectDebitB2bMandatePayload.<b>PaymentMandateMandateNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatepayloadbpaymentmandatemandatenotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedInternalDirectDebitB2bMandatePayload.<b>AccountHolderTypeIndividualRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatepayloadbaccountholdertypeindividualrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[c,l]=(0,d.useState)(o);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&i)},m={Bullet:b,SpecifiedBy:s,Badge:p,toc:u,Details:y},f="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Union type return by the addReceivedInternalDirectDebitB2bMandate mutation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddReceivedInternalDirectDebitB2bMandatePayload = AddReceivedInternalDirectDebitB2bMandateSuccessPayload | ForbiddenRejection | PaymentMandateMandateNotFoundRejection | AccountHolderTypeIndividualRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatepayloadbaddreceivedinternaldirectdebitb2bmandatesuccesspayloadbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/add-received-internal-direct-debit-b2-b-mandate-success-payload"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedInternalDirectDebitB2bMandatePayload.",(0,r.kt)("b",null,"AddReceivedInternalDirectDebitB2bMandateSuccessPayload")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Return type in case of a successful response of the addReceivedInternalDirectDebitB2bMandate mutation")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatepayloadbforbiddenrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedInternalDirectDebitB2bMandatePayload.",(0,r.kt)("b",null,"ForbiddenRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatepayloadbpaymentmandatemandatenotfoundrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment-mandate-mandate-not-found-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedInternalDirectDebitB2bMandatePayload.",(0,r.kt)("b",null,"PaymentMandateMandateNotFoundRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error returned if the payment mandate was not found")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatepayloadbaccountholdertypeindividualrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder-type-individual-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedInternalDirectDebitB2bMandatePayload.",(0,r.kt)("b",null,"AccountHolderTypeIndividualRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the account holder type is individual.\nAn individual account holder can't create a b2b received direct debit mandate.")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-received-internal-direct-debit-b2-b-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"addReceivedInternalDirectDebitB2bMandate")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);