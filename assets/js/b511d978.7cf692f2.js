"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,l=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=u(n),m=c,g=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=n.length,a=new Array(l);a[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[s]="string"==typeof e?e:c,a[1]=r;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83879:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(83117),c=n(67294),l=n(3905);const a={id:"supporting-document-collection-status",title:"SupportingDocumentCollectionStatus",hide_table_of_contents:!1},r=void 0,i={unversionedId:"api-reference/enums/supporting-document-collection-status",id:"api-reference/enums/supporting-document-collection-status",title:"SupportingDocumentCollectionStatus",description:"Verification status of a supporting document collection",source:"@site/docs/api-reference/enums/supporting-document-collection-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/supporting-document-collection-status",permalink:"/api-reference/enums/supporting-document-collection-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/supporting-document-collection-status.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-status",title:"SupportingDocumentCollectionStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectMode",permalink:"/api-reference/enums/supporting-document-collect-mode"},next:{title:"SupportingDocumentCommunicationLanguageSettings",permalink:"/api-reference/enums/supporting-document-communication-language-settings"}},u={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>WaitingForDocument</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbwaitingfordocumentbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>PendingReview</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbpendingreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>Approved</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbapprovedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbrejectedbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(c.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:s,SpecifiedBy:d,Badge:m},f="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Verification status of a supporting document collection"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupportingDocumentCollectionStatus {\n  WaitingForDocument\n  PendingReview\n  Approved\n  Canceled\n  Rejected\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbwaitingfordocumentbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,l.kt)("b",null,"WaitingForDocument")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the supporting document collection is created and on going")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbpendingreviewbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,l.kt)("b",null,"PendingReview")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the supporting document collection is completed and in compliance review")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbapprovedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,l.kt)("b",null,"Approved")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the supporting document collection is approved. Final status")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbcanceledbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,l.kt)("b",null,"Canceled")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the supporting document collection is canceled. Final status")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbrejectedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,l.kt)("b",null,"Rejected")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the supporting document collection is rejected. Final status")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-approved-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionApprovedStatusInfo")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-canceled-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionCanceledStatusInfo")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-pending-review-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionPendingReviewStatusInfo")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-rejected-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionRejectedStatusInfo")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-status-does-not-allow-deletion-rejection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-status-does-not-allow-update-rejection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/interfaces/supporting-document-collection-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusInfo")),"  ",(0,l.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-status-not-allowed-rejection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusNotAllowedRejection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-waiting-for-document-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionWaitingForDocumentStatusInfo")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-upload-not-allowed-rejection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentUploadNotAllowedRejection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);