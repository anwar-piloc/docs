"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,p=u["".concat(a,".").concat(m)]||u[m]||f[m]||l;return n?r.createElement(p,o(o({ref:t},d),{},{components:n})):r.createElement(p,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84851:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>c,default:()=>v,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(83117),i=n(67294),l=n(3905);const o={id:"drivers-license-document-file",title:"DriversLicenseDocumentFile",hide_table_of_contents:!1},c=void 0,a={unversionedId:"api-reference/objects/drivers-license-document-file",id:"api-reference/objects/drivers-license-document-file",title:"DriversLicenseDocumentFile",description:"No description",source:"@site/docs/api-reference/objects/drivers-license-document-file.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/drivers-license-document-file",permalink:"/api-reference/objects/drivers-license-document-file",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/drivers-license-document-file.mdx",tags:[],version:"current",frontMatter:{id:"drivers-license-document-file",title:"DriversLicenseDocumentFile",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DriversLicenseDocumentFile.<b>downloadUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-driverslicensedocumentfilebdownloadurlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DriversLicenseDocumentFile.<b>side</b></code><Bullet /><code>DriversLicenseFileSide!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-driverslicensedocumentfilebsidebcodedriverslicensefileside--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>DocumentFile</code> <Badge class="secondary" text="interface"/>',id:"documentfile-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:d,Bullet:u,SpecifiedBy:f,Badge:m},y="wrapper";function v(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type DriversLicenseDocumentFile implements DocumentFile {\n  downloadUrl: String!\n  side: DriversLicenseFileSide!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-driverslicensedocumentfilebdownloadurlbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DriversLicenseDocumentFile.",(0,l.kt)("b",null,"downloadUrl"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-driverslicensedocumentfilebsidebcodedriverslicensefileside--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DriversLicenseDocumentFile.",(0,l.kt)("b",null,"side"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/drivers-license-file-side"},(0,l.kt)("inlineCode",{parentName:"a"},"DriversLicenseFileSide!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"documentfile-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/document-file"},(0,l.kt)("inlineCode",{parentName:"a"},"DocumentFile"))," ",(0,l.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/drivers-license-document"},(0,l.kt)("inlineCode",{parentName:"a"},"DriversLicenseDocument")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);