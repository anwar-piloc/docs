"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84516],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=o.createContext({}),s=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},l=function(t){var e=s(t.components);return o.createElement(i.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(f,u(u({ref:e},l),{},{components:n})):o.createElement(f,u({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,u=new Array(r);u[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[c]="string"==typeof t?t:a,u[1]=p;for(var s=2;s<r;s++)u[s]=n[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28064:function(t,e,n){n.r(e),n.d(e,{Badge:function(){return m},Bullet:function(){return c},SpecifiedBy:function(){return d},assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l}});var o=n(83117),a=n(67294),r=n(3905);const u={id:"supporting-document-status",title:"SupportingDocumentStatus",hide_table_of_contents:!1},p=void 0,i={unversionedId:"api/enums/supporting-document-status",id:"api/enums/supporting-document-status",title:"SupportingDocumentStatus",description:"Verification status of a document",source:"@site/docs/api/enums/supporting-document-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/supporting-document-status",permalink:"/docs/api/enums/supporting-document-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/supporting-document-status.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-status",title:"SupportingDocumentStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentPurposeEnum",permalink:"/docs/api/enums/supporting-document-purpose-enum"},next:{title:"SupportingDocumentType",permalink:"/docs/api/enums/supporting-document-type"}},s={},l=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>WaitingForUpload</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbwaitingforuploadbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>Uploaded</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbuploadedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>Validated</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbvalidatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>Refused</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbrefusedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentStatus.<b>NotUploaded</b></code>",id:"code-style-fontweight-normal-supportingdocumentstatusbnotuploadedbcode",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+t.class},t.text)),f={toc:l,Bullet:c,SpecifiedBy:d,Badge:m},g="wrapper";function b(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Verification status of a document"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupportingDocumentStatus {\n  WaitingForUpload\n  Uploaded\n  Validated\n  Refused\n  NotUploaded\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbwaitingforuploadbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"WaitingForUpload")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document is not uploaded yet.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbuploadedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"Uploaded")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document has been uploaded but not verified by Swan yet.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbvalidatedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"Validated")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document has been uploaded and verified by Swan.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbrefusedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"Refused")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document has been refused by Swan.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentstatusbnotuploadedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentStatus.",(0,r.kt)("b",null,"NotUploaded")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document has not been uploaded on time.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-not-uploaded-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentNotUploadedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-refused-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentRefusedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-status-does-not-allow-deletion-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowDeletionRejection")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-status-does-not-allow-update-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowUpdateRejection")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/supporting-document-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-status-not-allowed-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusNotAllowedRejection")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-uploaded-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentUploadedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-validated-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentValidatedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-waiting-for-upload-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentWaitingForUploadStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);