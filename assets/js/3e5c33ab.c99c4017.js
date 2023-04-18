"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[5763],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(f,l(l({ref:e},u),{},{components:n})):a.createElement(f,l({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[c]="string"==typeof t?t:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8573:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(83117),o=n(67294),r=n(3905);const l={id:"supporting-document-validated-status-info",title:"SupportingDocumentValidatedStatusInfo",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api/objects/supporting-document-validated-status-info",id:"api/objects/supporting-document-validated-status-info",title:"SupportingDocumentValidatedStatusInfo",description:"Supporting document with Validated status",source:"@site/docs/api/objects/supporting-document-validated-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/supporting-document-validated-status-info",permalink:"/docs/api/objects/supporting-document-validated-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/supporting-document-validated-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-validated-status-info",title:"SupportingDocumentValidatedStatusInfo",hide_table_of_contents:!1}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentValidatedStatusInfo.<b>status</b></code><Bullet /><code>SupportingDocumentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentvalidatedstatusinfobstatusbcodesupportingdocumentstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentValidatedStatusInfo.<b>downloadUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentvalidatedstatusinfobdownloadurlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentValidatedStatusInfo.<b>validatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentvalidatedstatusinfobvalidatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentValidatedStatusInfo.<b>filename</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentvalidatedstatusinfobfilenamebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"supportingdocumentstatusinfo-",level:4}],c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=t=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+t.class},t.text)),f={toc:u,Bullet:c,SpecifiedBy:p,Badge:m},g="wrapper";function y(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supporting document with Validated status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentValidatedStatusInfo implements SupportingDocumentStatusInfo {\n  status: SupportingDocumentStatus!\n  downloadUrl: String!\n  validatedAt: DateTime!\n  filename: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentvalidatedstatusinfobstatusbcodesupportingdocumentstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentValidatedStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/supporting-document-status"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatus!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the document has been uploaded and verified by Swan")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentvalidatedstatusinfobdownloadurlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentValidatedStatusInfo.",(0,r.kt)("b",null,"downloadUrl"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An unique URL and one-time URL to download the Document")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentvalidatedstatusinfobvalidatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentValidatedStatusInfo.",(0,r.kt)("b",null,"validatedAt"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Date on which the supporting document has been validated")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentvalidatedstatusinfobfilenamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentValidatedStatusInfo.",(0,r.kt)("b",null,"filename"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Original file name")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"supportingdocumentstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/supporting-document-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusInfo"))," ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}y.isMDXComponent=!0}}]);