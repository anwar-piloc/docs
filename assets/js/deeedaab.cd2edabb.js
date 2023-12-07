"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),g=r,d=m["".concat(u,".").concat(g)]||m[g]||p[g]||a;return n?o.createElement(d,i(i({ref:t},s),{},{components:n})):o.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},67245:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>d,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>g});var o=n(87462),r=n(67294),a=n(3905);const i={id:"supporting-document-communication-language-settings",title:"SupportingDocumentCommunicationLanguageSettings",hide_table_of_contents:!1},c=void 0,u={unversionedId:"api-reference/enums/supporting-document-communication-language-settings",id:"api-reference/enums/supporting-document-communication-language-settings",title:"SupportingDocumentCommunicationLanguageSettings",description:"No description",source:"@site/docs/api-reference/enums/supporting-document-communication-language-settings.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/supporting-document-communication-language-settings",permalink:"/api-reference/enums/supporting-document-communication-language-settings",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/supporting-document-communication-language-settings.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-communication-language-settings",title:"SupportingDocumentCommunicationLanguageSettings",hide_table_of_contents:!1}},l={},s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),g=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCommunicationLanguageSettings.<b>en</b></code>",id:"code-style-fontweight-normal-supportingdocumentcommunicationlanguagesettingsbenbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCommunicationLanguageSettings.<b>fr</b></code>",id:"code-style-fontweight-normal-supportingdocumentcommunicationlanguagesettingsbfrbcode",level:4},{value:"Member Of",id:"member-of",level:3}],d=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[u,l]=(0,r.useState)(c);return(0,a.kt)("details",(0,o.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},u?t:n),u&&i)},f={Bullet:s,SpecifiedBy:m,Badge:p,toc:g,Details:d},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupportingDocumentCommunicationLanguageSettings {\n  en\n  fr\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcommunicationlanguagesettingsbenbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCommunicationLanguageSettings.",(0,a.kt)("b",null,"en")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcommunicationlanguagesettingsbfrbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCommunicationLanguageSettings.",(0,a.kt)("b",null,"fr")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member Of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-settings"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentSettings")),"  ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);