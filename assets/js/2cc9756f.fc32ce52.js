"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[80706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=i(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return n?o.createElement(m,u(u({ref:t},p),{},{components:n})):o.createElement(m,u({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,u[1]=s;for(var i=2;i<a;i++)u[i]=n[i];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8494:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>l,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var o=n(83117),r=n(67294),a=n(3905);const u={id:"supporting-document-not-uploaded-status-info",title:"SupportingDocumentNotUploadedStatusInfo",hide_table_of_contents:!1},s=void 0,c={unversionedId:"api-reference/objects/supporting-document-not-uploaded-status-info",id:"api-reference/objects/supporting-document-not-uploaded-status-info",title:"SupportingDocumentNotUploadedStatusInfo",description:"Supporting document with NotUploaded status.",source:"@site/docs/api-reference/objects/supporting-document-not-uploaded-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document-not-uploaded-status-info",permalink:"/api-reference/objects/supporting-document-not-uploaded-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document-not-uploaded-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-not-uploaded-status-info",title:"SupportingDocumentNotUploadedStatusInfo",hide_table_of_contents:!1}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentNotUploadedStatusInfo.<b>status</b></code><Bullet /><code>SupportingDocumentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentnotuploadedstatusinfobstatusbcodesupportingdocumentstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"supportingdocumentstatusinfo-",level:4}],l=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:l,SpecifiedBy:d,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Supporting document with NotUploaded status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentNotUploadedStatusInfo implements SupportingDocumentStatusInfo {\n  status: SupportingDocumentStatus!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentnotuploadedstatusinfobstatusbcodesupportingdocumentstatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentNotUploadedStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-status"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatus!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the document has not been updated on time.")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"supportingdocumentstatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/supporting-document-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusInfo"))," ",(0,a.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);