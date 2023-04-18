"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79610],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),b=a,y=u["".concat(l,".").concat(b)]||u[b]||p[b]||r;return t?o.createElement(y,d(d({ref:n},s),{},{components:t})):o.createElement(y,d({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,d=new Array(r);d[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,d[1]=c;for(var i=2;i<r;i++)d[i]=t[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},84623:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>s});var o=t(83117),a=t(67294),r=t(3905);const d={id:"onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api/objects/onboard-individual-account-holder-success-payload",id:"api/objects/onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",description:"No description",source:"@site/docs/api/objects/onboard-individual-account-holder-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/onboard-individual-account-holder-success-payload",permalink:"/docs/api/objects/onboard-individual-account-holder-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/onboard-individual-account-holder-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",hide_table_of_contents:!1}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderSuccessPayload.<b>onboarding</b></code><Bullet /><code>Onboarding!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardindividualaccountholdersuccesspayloadbonboardingbcodeonboarding--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:p,Badge:b},m="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type OnboardIndividualAccountHolderSuccessPayload {\n  onboarding: Onboarding!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholdersuccesspayloadbonboardingbcodeonboarding--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderSuccessPayload.",(0,r.kt)("b",null,"onboarding"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/onboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"Onboarding!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/unions/onboard-individual-account-holder-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderPayload")),"  ",(0,r.kt)(b,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);