"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[78112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||d;return n?a.createElement(b,i(i({ref:t},l),{},{components:n})):a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,i=new Array(d);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<d;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77827:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),r=n(67294),d=n(3905);const i={id:"suspend-received-direct-debit-mandate",title:"suspendReceivedDirectDebitMandate",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api-reference/mutations/suspend-received-direct-debit-mandate",id:"api-reference/mutations/suspend-received-direct-debit-mandate",title:"suspendReceivedDirectDebitMandate",description:"Allows to suspend a received direct debit mandate in the Enabled status.",source:"@site/docs/api-reference/mutations/suspend-received-direct-debit-mandate.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/suspend-received-direct-debit-mandate",permalink:"/api-reference/mutations/suspend-received-direct-debit-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/suspend-received-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"suspend-received-direct-debit-mandate",title:"suspendReceivedDirectDebitMandate",hide_table_of_contents:!1}},s={},l=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>suspendReceivedDirectDebitMandate.<b>input</b></code><Bullet /><code>SuspendReceivedDirectDebitMandateInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatebinputbcodesuspendreceiveddirectdebitmandateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SuspendReceivedDirectDebitMandatePayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"suspendreceiveddirectdebitmandatepayload-",level:4}],b=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[o,s]=(0,r.useState)(c);return(0,d.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&i)},f={Bullet:l,SpecifiedBy:p,Badge:u,toc:m,Details:b},y="wrapper";function v(e){let{components:t,...n}=e;return(0,d.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Allows to suspend a received direct debit mandate in the Enabled status."),(0,d.kt)("p",null,(0,d.kt)("em",{parentName:"p"},"The user must be able to initiate payments for this account.")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"suspendReceivedDirectDebitMandate(\n  input: SuspendReceivedDirectDebitMandateInput!\n): SuspendReceivedDirectDebitMandatePayload!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatebinputbcodesuspendreceiveddirectdebitmandateinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"suspendReceivedDirectDebitMandate.",(0,d.kt)("b",null,"input"))),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/inputs/suspend-received-direct-debit-mandate-input"},(0,d.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandateInput!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"suspendreceiveddirectdebitmandatepayload-"},(0,d.kt)("a",{parentName:"h4",href:"/api-reference/unions/suspend-received-direct-debit-mandate-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandatePayload"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Union type returned by the suspendReceivedDirectDebitMandate mutation")))}v.isMDXComponent=!0}}]);