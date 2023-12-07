"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21661],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),i=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),b=o,y=u["".concat(l,".").concat(b)]||u[b]||p[b]||r;return t?a.createElement(y,d(d({ref:n},s),{},{components:t})):a.createElement(y,d({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,d[1]=c;for(var i=2;i<r;i++)d[i]=t[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},42244:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>b});var a=t(87462),o=t(67294),r=t(3905);const d={id:"onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/objects/onboard-individual-account-holder-success-payload",id:"api-reference/objects/onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/onboard-individual-account-holder-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/onboard-individual-account-holder-success-payload",permalink:"/api-reference/objects/onboard-individual-account-holder-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/onboard-individual-account-holder-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",hide_table_of_contents:!1}},i={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderSuccessPayload.<b>onboarding</b></code><Bullet /><code>Onboarding!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-onboardindividualaccountholdersuccesspayloadbonboardingbcodeonboarding--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],y=e=>{let{dataOpen:n,dataClose:t,children:d,startOpen:c=!1}=e;const[l,i]=(0,o.useState)(c);return(0,r.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?n:t),l&&d)},f={Bullet:s,SpecifiedBy:u,Badge:p,toc:b,Details:y},m="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type OnboardIndividualAccountHolderSuccessPayload {\n  onboarding: Onboarding!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholdersuccesspayloadbonboardingbcodeonboarding--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderSuccessPayload.",(0,r.kt)("b",null,"onboarding"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/onboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"Onboarding!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/onboard-individual-account-holder-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderPayload")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);