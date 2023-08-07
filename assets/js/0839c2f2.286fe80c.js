"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[28505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,s=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return n?i.createElement(s,r(r({ref:t},d),{},{components:n})):i.createElement(s,r({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58107:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(83117),a=n(67294),l=n(3905);const r={id:"individual-ultimate-beneficial-owner-type-enum",title:"IndividualUltimateBeneficialOwnerTypeEnum",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/enums/individual-ultimate-beneficial-owner-type-enum",id:"api-reference/enums/individual-ultimate-beneficial-owner-type-enum",title:"IndividualUltimateBeneficialOwnerTypeEnum",description:"Individual Ultimate beneficial owner nature",source:"@site/docs/api-reference/enums/individual-ultimate-beneficial-owner-type-enum.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/individual-ultimate-beneficial-owner-type-enum",permalink:"/api-reference/enums/individual-ultimate-beneficial-owner-type-enum",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/individual-ultimate-beneficial-owner-type-enum.mdx",tags:[],version:"current",frontMatter:{id:"individual-ultimate-beneficial-owner-type-enum",title:"IndividualUltimateBeneficialOwnerTypeEnum",hide_table_of_contents:!1}},u={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>IndividualUltimateBeneficialOwnerTypeEnum.<b>LegalRepresentative</b></code>",id:"code-style-fontweight-normal-individualultimatebeneficialownertypeenumblegalrepresentativebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IndividualUltimateBeneficialOwnerTypeEnum.<b>HasCapital</b></code>",id:"code-style-fontweight-normal-individualultimatebeneficialownertypeenumbhascapitalbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IndividualUltimateBeneficialOwnerTypeEnum.<b>Other</b></code>",id:"code-style-fontweight-normal-individualultimatebeneficialownertypeenumbotherbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),s={toc:d,Bullet:p,SpecifiedBy:m,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Individual Ultimate beneficial owner nature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum IndividualUltimateBeneficialOwnerTypeEnum {\n  LegalRepresentative\n  HasCapital\n  Other\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownertypeenumblegalrepresentativebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwnerTypeEnum.",(0,l.kt)("b",null,"LegalRepresentative")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Beneficial Owner is the representant legal")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownertypeenumbhascapitalbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwnerTypeEnum.",(0,l.kt)("b",null,"HasCapital")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Beneficial Owner have shares")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownertypeenumbotherbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwnerTypeEnum.",(0,l.kt)("b",null,"Other")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Other")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/interfaces/individual-ultimate-beneficial-owner-info"},(0,l.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerInfo")),"  ",(0,l.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/inputs/individual-ultimate-beneficial-owner-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerInput")),"  ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/individual-ultimate-beneficial-owner-type-has-capital"},(0,l.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerTypeHasCapital")),"  ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/individual-ultimate-beneficial-owner-type-legal-representative"},(0,l.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerTypeLegalRepresentative")),"  ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/individual-ultimate-beneficial-owner-type-other"},(0,l.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerTypeOther")),"  ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);