"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[68041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42490:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var o=n(87462),r=n(67294),a=n(3905);const i={id:"supporting-document-collection-waiting-for-document-status-info",title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/objects/supporting-document-collection-waiting-for-document-status-info",id:"api-reference/objects/supporting-document-collection-waiting-for-document-status-info",title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",description:"Supporting document collection with WaitingForUpload status",source:"@site/docs/api-reference/objects/supporting-document-collection-waiting-for-document-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document-collection-waiting-for-document-status-info",permalink:"/api-reference/objects/supporting-document-collection-waiting-for-document-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document-collection-waiting-for-document-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-waiting-for-document-status-info",title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",hide_table_of_contents:!1}},u={},s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionWaitingForDocumentStatusInfo.<b>status</b></code><Bullet /><code>SupportingDocumentCollectionStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionwaitingfordocumentstatusinfobstatusbcodesupportingdocumentcollectionstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentCollectionStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"supportingdocumentcollectionstatusinfo-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[l,u]=(0,r.useState)(c);return(0,a.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&i)},g={Bullet:s,SpecifiedBy:p,Badge:d,toc:f,Details:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Supporting document collection with WaitingForUpload status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionWaitingForDocumentStatusInfo implements SupportingDocumentCollectionStatusInfo {\n  status: SupportingDocumentCollectionStatus!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionwaitingfordocumentstatusinfobstatusbcodesupportingdocumentcollectionstatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionWaitingForDocumentStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-collection-status"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatus!"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the Supporting Document Collection is created")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"supportingdocumentcollectionstatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/supporting-document-collection-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusInfo"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);