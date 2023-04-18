"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[52662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),g=c(a),s=l,f=g["".concat(i,".").concat(s)]||g[s]||m[s]||o;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[g]="string"==typeof e?e:l,r[1]=d;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},20739:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>g,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(83117),l=a(67294),o=a(3905);const r={id:"mandate-language",title:"MandateLanguage",hide_table_of_contents:!1},d=void 0,i={unversionedId:"api/enums/mandate-language",id:"api/enums/mandate-language",title:"MandateLanguage",description:"Language: ISO 639-1 language code",source:"@site/docs/api/enums/mandate-language.mdx",sourceDirName:"api/enums",slug:"/api/enums/mandate-language",permalink:"/docs/api/enums/mandate-language",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/mandate-language.mdx",tags:[],version:"current",frontMatter:{id:"mandate-language",title:"MandateLanguage",hide_table_of_contents:!1}},c={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MandateLanguage.<b>de</b></code>",id:"code-style-fontweight-normal-mandatelanguagebdebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MandateLanguage.<b>en</b></code>",id:"code-style-fontweight-normal-mandatelanguagebenbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MandateLanguage.<b>fr</b></code>",id:"code-style-fontweight-normal-mandatelanguagebfrbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MandateLanguage.<b>it</b></code>",id:"code-style-fontweight-normal-mandatelanguagebitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MandateLanguage.<b>nl</b></code>",id:"code-style-fontweight-normal-mandatelanguagebnlbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MandateLanguage.<b>es</b></code>",id:"code-style-fontweight-normal-mandatelanguagebesbcode",level:4},{value:"Member of",id:"member-of",level:3}],g=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:g,SpecifiedBy:m,Badge:s},p="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Language: ISO 639-1 language code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MandateLanguage {\n  de\n  en\n  fr\n  it\n  nl\n  es\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mandatelanguagebdebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MandateLanguage.",(0,o.kt)("b",null,"de")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mandatelanguagebenbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MandateLanguage.",(0,o.kt)("b",null,"en")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mandatelanguagebfrbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MandateLanguage.",(0,o.kt)("b",null,"fr")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mandatelanguagebitbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MandateLanguage.",(0,o.kt)("b",null,"it")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mandatelanguagebnlbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MandateLanguage.",(0,o.kt)("b",null,"nl")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mandatelanguagebesbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MandateLanguage.",(0,o.kt)("b",null,"es")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/add-internal-direct-debit-payment-mandate-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandateInput")),"  ",(0,o.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);