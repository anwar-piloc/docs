"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97955],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.createContext({}),s=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),l=s(n),f=a,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||r;return n?o.createElement(m,i(i({ref:e},c),{},{components:n})):o.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=f;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[l]="string"==typeof t?t:a,i[1]=u;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57669:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>f,Bullet:()=>l,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=n(83117),a=n(67294),r=n(3905);const i={id:"supporting-document-waiting-for-upload-status-info",title:"SupportingDocumentWaitingForUploadStatusInfo",hide_table_of_contents:!1},u=void 0,p={unversionedId:"api-reference/objects/supporting-document-waiting-for-upload-status-info",id:"api-reference/objects/supporting-document-waiting-for-upload-status-info",title:"SupportingDocumentWaitingForUploadStatusInfo",description:"Supporting document with WaitingForUpload status",source:"@site/docs/api-reference/objects/supporting-document-waiting-for-upload-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document-waiting-for-upload-status-info",permalink:"/api-reference/objects/supporting-document-waiting-for-upload-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document-waiting-for-upload-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-waiting-for-upload-status-info",title:"SupportingDocumentWaitingForUploadStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentValidatedStatusInfo",permalink:"/api-reference/objects/supporting-document-validated-status-info"},next:{title:"SupportingDocument",permalink:"/api-reference/objects/supporting-document"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentWaitingForUploadStatusInfo.<b>status</b></code><Bullet /><code>SupportingDocumentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentwaitingforuploadstatusinfobstatusbcodesupportingdocumentstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentWaitingForUploadStatusInfo.<b>upload</b></code><Bullet /><code>SupportingDocumentUploadInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentwaitingforuploadstatusinfobuploadbcodesupportingdocumentuploadinfo--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"supportingdocumentstatusinfo-",level:4}],l=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),f=t=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+t.class},t.text)),m={toc:c,Bullet:l,SpecifiedBy:d,Badge:f},g="wrapper";function y(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supporting document with WaitingForUpload status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentWaitingForUploadStatusInfo implements SupportingDocumentStatusInfo {\n  status: SupportingDocumentStatus!\n  upload: SupportingDocumentUploadInfo!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentwaitingforuploadstatusinfobstatusbcodesupportingdocumentstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentWaitingForUploadStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(l,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-status"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatus!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the document is not uploaded yet")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentwaitingforuploadstatusinfobuploadbcodesupportingdocumentuploadinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentWaitingForUploadStatusInfo.",(0,r.kt)("b",null,"upload"))),(0,r.kt)(l,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/supporting-document-upload-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentUploadInfo!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Info to upload the document : url and fields to add along file in form (POST)")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"supportingdocumentstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/supporting-document-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusInfo"))," ",(0,r.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}y.isMDXComponent=!0}}]);