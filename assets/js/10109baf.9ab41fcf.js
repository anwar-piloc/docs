"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[47826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(f,u(u({ref:t},i),{},{components:n})):o.createElement(f,u({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,u[1]=p;for(var s=2;s<r;s++)u[s]=n[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35808:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>l,toc:()=>i});var o=n(83117),a=n(67294),r=n(3905);const u={id:"supporting-document-status",title:"SupportingDocumentStatus",hide_table_of_contents:!1},p=void 0,l={unversionedId:"api-reference/enums/supporting-document-status",id:"api-reference/enums/supporting-document-status",title:"SupportingDocumentStatus",description:"Verification status of a document",source:"@site/docs/api-reference/enums/supporting-document-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/supporting-document-status",permalink:"/api-reference/enums/supporting-document-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/supporting-document-status.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-status",title:"SupportingDocumentStatus",hide_table_of_contents:!1}},s={},i=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>WaitingForUpload</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbwaitingforuploadbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>Uploaded</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbuploadedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>Validated</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbvalidatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>Refused</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbrefusedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>NotUploaded</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbnotuploadedbcode",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:c,SpecifiedBy:d,Badge:m},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Verification status of a document"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupportingDocumentStatus {\n  WaitingForUpload\n  Uploaded\n  Validated\n  Refused\n  NotUploaded\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbwaitingforuploadbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"WaitingForUpload")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document is not uploaded yet.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbuploadedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"Uploaded")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document has been uploaded but not verified by Swan yet.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbvalidatedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"Validated")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document has been uploaded and verified by Swan.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbrefusedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"Refused")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document has been refused by Swan.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbnotuploadedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"NotUploaded")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document has not been uploaded on time.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-not-uploaded-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentNotUploadedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-refused-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentRefusedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-status-does-not-allow-deletion-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowDeletionRejection")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-status-does-not-allow-update-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowUpdateRejection")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/interfaces/supporting-document-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-status-not-allowed-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusNotAllowedRejection")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-uploaded-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentUploadedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-validated-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentValidatedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-waiting-for-upload-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentWaitingForUploadStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);