"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[60746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,f=u["".concat(l,".").concat(p)]||u[p]||g[p]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59724:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=n(67294),i=n(3905);const o={id:"digital-card-pending-status-info",title:"DigitalCardPendingStatusInfo",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/objects/digital-card-pending-status-info",id:"api-reference/objects/digital-card-pending-status-info",title:"DigitalCardPendingStatusInfo",description:"Digital Card Pending Status Information",source:"@site/docs/api-reference/objects/digital-card-pending-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/digital-card-pending-status-info",permalink:"/api-reference/objects/digital-card-pending-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/digital-card-pending-status-info.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-pending-status-info",title:"DigitalCardPendingStatusInfo",hide_table_of_contents:!1}},s={},c=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardPendingStatusInfo.<b>status</b></code><Bullet /><code>PendingDigitalCardStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-digitalcardpendingstatusinfobstatusbcodependingdigitalcardstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PendingDigitalCardStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"pendingdigitalcardstatusinfo-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:d=!1}=e;const[l,s]=(0,r.useState)(d);return(0,i.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&o)},m={Bullet:c,SpecifiedBy:u,Badge:g,toc:p,Details:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Digital Card Pending Status Information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DigitalCardPendingStatusInfo implements PendingDigitalCardStatusInfo {\n  status: PendingDigitalCardStatus!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-digitalcardpendingstatusinfobstatusbcodependingdigitalcardstatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardPendingStatusInfo.",(0,i.kt)("b",null,"status"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/pending-digital-card-status"},(0,i.kt)("inlineCode",{parentName:"a"},"PendingDigitalCardStatus!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Digital Card status (always Pending for type DigitalCardPendingStatusInfo).")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"pendingdigitalcardstatusinfo-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/pending-digital-card-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PendingDigitalCardStatusInfo"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pending Digital Card Status Information")))}y.isMDXComponent=!0}}]);