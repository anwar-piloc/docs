"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21777:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var o=n(83117),r=n(67294),a=n(3905);const c={id:"supporting-document-collection-status-info",title:"SupportingDocumentCollectionStatusInfo",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/interfaces/supporting-document-collection-status-info",id:"api-reference/interfaces/supporting-document-collection-status-info",title:"SupportingDocumentCollectionStatusInfo",description:"No description",source:"@site/docs/api-reference/interfaces/supporting-document-collection-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/supporting-document-collection-status-info",permalink:"/api-reference/interfaces/supporting-document-collection-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/supporting-document-collection-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-status-info",title:"SupportingDocumentCollectionStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatementInfo",permalink:"/api-reference/interfaces/statement-info"},next:{title:"SupportingDocumentStatusInfo",permalink:"/api-reference/interfaces/supporting-document-status-info"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionStatusInfo.<b>status</b></code><Bullet /><code>SupportingDocumentCollectionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionstatusinfobstatusbcodesupportingdocumentcollectionstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:d,Badge:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"interface SupportingDocumentCollectionStatusInfo {\n  status: SupportingDocumentCollectionStatus!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusinfobstatusbcodesupportingdocumentcollectionstatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-collection-status"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatus!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Status of the supporting document collection")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollection")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-approved-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionApprovedStatusInfo")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-canceled-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionCanceledStatusInfo")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-pending-review-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionPendingReviewStatusInfo")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-rejected-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionRejectedStatusInfo")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-waiting-for-document-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionWaitingForDocumentStatusInfo")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);