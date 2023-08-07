"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||d;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,i=new Array(d);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<d;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31627:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(83117),a=n(67294),d=n(3905);const i={id:"suspend-received-direct-debit-mandated-rejection",title:"SuspendReceivedDirectDebitMandatedRejection",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api-reference/objects/suspend-received-direct-debit-mandated-rejection",id:"api-reference/objects/suspend-received-direct-debit-mandated-rejection",title:"SuspendReceivedDirectDebitMandatedRejection",description:"Rejection returned if the SuspendReceivedDirectDebitMandatedRejection mutation is rejected",source:"@site/docs/api-reference/objects/suspend-received-direct-debit-mandated-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/suspend-received-direct-debit-mandated-rejection",permalink:"/api-reference/objects/suspend-received-direct-debit-mandated-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/suspend-received-direct-debit-mandated-rejection.mdx",tags:[],version:"current",frontMatter:{id:"suspend-received-direct-debit-mandated-rejection",title:"SuspendReceivedDirectDebitMandatedRejection",hide_table_of_contents:!1}},s={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendReceivedDirectDebitMandatedRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatedrejectionbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendReceivedDirectDebitMandatedRejection.<b>reason</b></code><Bullet /><code>SuspendReceivedDirectDebitMandatedRejectionReason!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatedrejectionbreasonbcodesuspendreceiveddirectdebitmandatedrejectionreason--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:p,SpecifiedBy:u,Badge:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,d.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Rejection returned if the SuspendReceivedDirectDebitMandatedRejection mutation is rejected"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type SuspendReceivedDirectDebitMandatedRejection implements Rejection {\n  message: String!\n  reason: SuspendReceivedDirectDebitMandatedRejectionReason!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatedrejectionbmessagebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandatedRejection.",(0,d.kt)("b",null,"message"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatedrejectionbreasonbcodesuspendreceiveddirectdebitmandatedrejectionreason--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandatedRejection.",(0,d.kt)("b",null,"reason"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/enums/suspend-received-direct-debit-mandated-rejection-reason"},(0,d.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandatedRejectionReason!"))," ",(0,d.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"rejection-"},(0,d.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,d.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/suspend-received-direct-debit-mandate-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandatePayload")),"  ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);