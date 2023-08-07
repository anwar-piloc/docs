"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[98518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70465:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(83117),r=n(67294),o=n(3905);const i={id:"onboarding-status",title:"OnboardingStatus",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/enums/onboarding-status",id:"api-reference/enums/onboarding-status",title:"OnboardingStatus",description:"Possible values for onboarding status",source:"@site/docs/api-reference/enums/onboarding-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/onboarding-status",permalink:"/api-reference/enums/onboarding-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/onboarding-status.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-status",title:"OnboardingStatus",hide_table_of_contents:!1}},d={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingStatus.<b>Finalized</b></code>",id:"code-style-fontweight-normal-onboardingstatusbfinalizedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingStatus.<b>Invalid</b></code>",id:"code-style-fontweight-normal-onboardingstatusbinvalidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingStatus.<b>Valid</b></code>",id:"code-style-fontweight-normal-onboardingstatusbvalidbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:u,SpecifiedBy:p,Badge:b},m="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Possible values for onboarding status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OnboardingStatus {\n  Finalized\n  Invalid\n  Valid\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardingstatusbfinalizedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardingStatus.",(0,o.kt)("b",null,"Finalized")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the onboarding is finalized")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardingstatusbinvalidbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardingStatus.",(0,o.kt)("b",null,"Invalid")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when the onboarding is invalid. Final status")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardingstatusbvalidbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardingStatus.",(0,o.kt)("b",null,"Valid")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the onboarding is valid. Final status")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboarding-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingFiltersInput")),"  ",(0,o.kt)(b,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-finalized-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingFinalizedStatusInfo")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-invalid-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingInvalidStatusInfo")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/onboarding-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingStatusInfo")),"  ",(0,o.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-valid-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingValidStatusInfo")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);