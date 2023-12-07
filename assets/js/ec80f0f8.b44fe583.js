"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[37581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||l;return n?a.createElement(m,o(o({ref:t},g),{},{components:n})):a.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74811:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>g,Details:()=>m,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>f});var a=n(87462),r=n(67294),l=n(3905);const o={id:"language",title:"Language",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/enums/language",id:"api-reference/enums/language",title:"Language",description:"No description",source:"@site/docs/api-reference/enums/language.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/language",permalink:"/api-reference/enums/language",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/language.mdx",tags:[],version:"current",frontMatter:{id:"language",title:"Language",hide_table_of_contents:!1}},u={},g=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>Language.<b>de</b></code>",id:"code-style-fontweight-normal-languagebdebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>Language.<b>en</b></code>",id:"code-style-fontweight-normal-languagebenbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>Language.<b>fr</b></code>",id:"code-style-fontweight-normal-languagebfrbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>Language.<b>it</b></code>",id:"code-style-fontweight-normal-languagebitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>Language.<b>nl</b></code>",id:"code-style-fontweight-normal-languagebnlbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>Language.<b>es</b></code>",id:"code-style-fontweight-normal-languagebesbcode",level:4},{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[i,u]=(0,r.useState)(c);return(0,l.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},p={Bullet:g,SpecifiedBy:d,Badge:s,toc:f,Details:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum Language {\n  de\n  en\n  fr\n  it\n  nl\n  es\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-languagebdebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Language.",(0,l.kt)("b",null,"de")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-languagebenbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Language.",(0,l.kt)("b",null,"en")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-languagebfrbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Language.",(0,l.kt)("b",null,"fr")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-languagebitbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Language.",(0,l.kt)("b",null,"it")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-languagebnlbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Language.",(0,l.kt)("b",null,"nl")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-languagebesbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Language.",(0,l.kt)("b",null,"es")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/inputs/create-merchant-payment-link-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateMerchantPaymentLinkInput")),"  ",(0,l.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);