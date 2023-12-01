"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[71235],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93970:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(83117),o=a(67294),r=a(3905);const i={id:"capital-deposit-document-status-info",title:"CapitalDepositDocumentStatusInfo",hide_table_of_contents:!1},s=void 0,c={unversionedId:"api-reference/interfaces/capital-deposit-document-status-info",id:"api-reference/interfaces/capital-deposit-document-status-info",title:"CapitalDepositDocumentStatusInfo",description:"Status info of the document.",source:"@site/docs/api-reference/interfaces/capital-deposit-document-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/capital-deposit-document-status-info",permalink:"/api-reference/interfaces/capital-deposit-document-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/capital-deposit-document-status-info.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-document-status-info",title:"CapitalDepositDocumentStatusInfo",hide_table_of_contents:!1}},l={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocumentStatusInfo.<b>status</b></code><Bullet /><code>CapitalDepositDocumentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositdocumentstatusinfobstatusbcodecapitaldepositdocumentstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:m},y="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Status info of the document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface CapitalDepositDocumentStatusInfo {\n  status: CapitalDepositDocumentStatus!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentstatusinfobstatusbcodecapitaldepositdocumentstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocumentStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/capital-deposit-document-status"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentStatus!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Status of the document.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocument")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document-pending-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentPendingStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document-refused-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentRefusedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document-uploaded-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentUploadedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document-validated-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentValidatedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);