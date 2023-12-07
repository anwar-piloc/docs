"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91437],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,m=u["".concat(d,".").concat(p)]||u[p]||b[p]||r;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},53186:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>b,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=t(87462),o=t(67294),r=t(3905);const i={id:"invalid-iban-code",title:"InvalidIbanCode",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/enums/invalid-iban-code",id:"api-reference/enums/invalid-iban-code",title:"InvalidIbanCode",description:"InvalidIbanCode",source:"@site/docs/api-reference/enums/invalid-iban-code.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/invalid-iban-code",permalink:"/api-reference/enums/invalid-iban-code",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/invalid-iban-code.mdx",tags:[],version:"current",frontMatter:{id:"invalid-iban-code",title:"InvalidIbanCode",hide_table_of_contents:!1}},c={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>InvalidIbanCode.<b>InvalidLength</b></code>",id:"code-style-fontweight-normal-invalidibancodebinvalidlengthbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvalidIbanCode.<b>InvalidStructure</b></code>",id:"code-style-fontweight-normal-invalidibancodebinvalidstructurebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvalidIbanCode.<b>InvalidChecksum</b></code>",id:"code-style-fontweight-normal-invalidibancodebinvalidchecksumbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvalidIbanCode.<b>InvalidBank</b></code>",id:"code-style-fontweight-normal-invalidibancodebinvalidbankbcode",level:4},{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:n,dataClose:t,children:i,startOpen:l=!1}=e;const[d,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?n:t),d&&i)},f={Bullet:s,SpecifiedBy:u,Badge:b,toc:p,Details:m},v="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(v,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"InvalidIbanCode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum InvalidIbanCode {\n  InvalidLength\n  InvalidStructure\n  InvalidChecksum\n  InvalidBank\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-invalidibancodebinvalidlengthbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InvalidIbanCode.",(0,r.kt)("b",null,"InvalidLength")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Iban is either too short (","<","2) or does not match this country's specified length")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-invalidibancodebinvalidstructurebcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InvalidIbanCode.",(0,r.kt)("b",null,"InvalidStructure")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We do not know this IBAN Structure (Meaning that the country code is probably wrong)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-invalidibancodebinvalidchecksumbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InvalidIbanCode.",(0,r.kt)("b",null,"InvalidChecksum")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The IBAN does not verify the mod97 algorithm")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-invalidibancodebinvalidbankbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InvalidIbanCode.",(0,r.kt)("b",null,"InvalidBank")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We do not know the banking institution referenced in this IBAN.")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/invalid-iban"},(0,r.kt)("inlineCode",{parentName:"a"},"InvalidIban")),"  ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);