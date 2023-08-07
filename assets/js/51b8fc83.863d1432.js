"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[11664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||f[s]||o;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14779:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>p,contentTitle:()=>a,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=n(83117),r=n(67294),o=n(3905);const l={id:"identification-level-input",title:"IdentificationLevelInput",hide_table_of_contents:!1},a=void 0,c={unversionedId:"api-reference/enums/identification-level-input",id:"api-reference/enums/identification-level-input",title:"IdentificationLevelInput",description:"User identification levels input payload.",source:"@site/docs/api-reference/enums/identification-level-input.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/identification-level-input",permalink:"/api-reference/enums/identification-level-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/identification-level-input.mdx",tags:[],version:"current",frontMatter:{id:"identification-level-input",title:"IdentificationLevelInput",hide_table_of_contents:!1}},p={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevelInput.<b>Expert</b></code>",id:"code-style-fontweight-normal-identificationlevelinputbexpertbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevelInput.<b>PVID</b></code>",id:"code-style-fontweight-normal-identificationlevelinputbpvidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevelInput.<b>QES</b></code>",id:"code-style-fontweight-normal-identificationlevelinputbqesbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:f,Badge:s},b="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User identification levels input payload."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum IdentificationLevelInput {\n  Expert\n  PVID\n  QES\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelinputbexpertbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevelInput.",(0,o.kt)("b",null,"Expert")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identity verified by an expert (Ubble-like)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelinputbpvidbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevelInput.",(0,o.kt)("b",null,"PVID")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identity verified by an expert with a Remote Identity Verification Service")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelinputbqesbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevelInput.",(0,o.kt)("b",null,"QES")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identity verified by an expert and a Qualified Electronic Signature has been done")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/user-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UserFilterInput")),"  ",(0,o.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);