"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||c;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<c;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37234:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(83117),r=a(67294),c=a(3905);const i={id:"enable-received-direct-debit-mandate-success-payload",title:"EnableReceivedDirectDebitMandateSuccessPayload",hide_table_of_contents:!1},d=void 0,o={unversionedId:"api-reference/objects/enable-received-direct-debit-mandate-success-payload",id:"api-reference/objects/enable-received-direct-debit-mandate-success-payload",title:"EnableReceivedDirectDebitMandateSuccessPayload",description:"Return type in case of a successful response of the enableReceivedDirectDebitMandate mutation",source:"@site/docs/api-reference/objects/enable-received-direct-debit-mandate-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/enable-received-direct-debit-mandate-success-payload",permalink:"/api-reference/objects/enable-received-direct-debit-mandate-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/enable-received-direct-debit-mandate-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"enable-received-direct-debit-mandate-success-payload",title:"EnableReceivedDirectDebitMandateSuccessPayload",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EnableReceivedDirectDebitMandateSuccessPayload.<b>receivedDirectDebitMandate</b></code><Bullet /><code>ReceivedDirectDebitMandate!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-enablereceiveddirectdebitmandatesuccesspayloadbreceiveddirectdebitmandatebcodereceiveddirectdebitmandate--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:b,Badge:u},f="wrapper";function y(e){let{components:t,...a}=e;return(0,c.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Return type in case of a successful response of the enableReceivedDirectDebitMandate mutation"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type EnableReceivedDirectDebitMandateSuccessPayload {\n  receivedDirectDebitMandate: ReceivedDirectDebitMandate!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-enablereceiveddirectdebitmandatesuccesspayloadbreceiveddirectdebitmandatebcodereceiveddirectdebitmandate--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"EnableReceivedDirectDebitMandateSuccessPayload.",(0,c.kt)("b",null,"receivedDirectDebitMandate"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/received-direct-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandate!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The received direct debit mandate is enable, i.e that it is moved back to from the suspended to the enabled status")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/enable-received-direct-debit-mandate-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"EnableReceivedDirectDebitMandatePayload")),"  ",(0,c.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);