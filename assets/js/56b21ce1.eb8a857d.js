"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||s[u]||o;return n?i.createElement(m,a(a({ref:t},f),{},{components:n})):i.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85081:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>f});var i=n(83117),r=n(67294),o=n(3905);const a={id:"identification-level",title:"IdentificationLevel",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/enums/identification-level",id:"api-reference/enums/identification-level",title:"IdentificationLevel",description:"Possible value for the field IdentificationLevel",source:"@site/docs/api-reference/enums/identification-level.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/identification-level",permalink:"/api-reference/enums/identification-level",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/identification-level.mdx",tags:[],version:"current",frontMatter:{id:"identification-level",title:"IdentificationLevel",hide_table_of_contents:!1}},d={},f=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevel.<b>Expert</b></code>",id:"code-style-fontweight-normal-identificationlevelbexpertbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevel.<b>QES</b></code>",id:"code-style-fontweight-normal-identificationlevelbqesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevel.<b>PVID</b></code>",id:"code-style-fontweight-normal-identificationlevelbpvidbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:f,Bullet:p,SpecifiedBy:s,Badge:u},b="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Possible value for the field IdentificationLevel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum IdentificationLevel {\n  Expert\n  QES\n  PVID\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelbexpertbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevel.",(0,o.kt)("b",null,"Expert")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Human identity verification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelbqesbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevel.",(0,o.kt)("b",null,"QES")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identity verification with Qualified Electronic Signature")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelbpvidbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevel.",(0,o.kt)("b",null,"PVID")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identity verification with PVID")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembership")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding"},(0,o.kt)("inlineCode",{parentName:"a"},"Onboarding")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-info"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingInfo")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);