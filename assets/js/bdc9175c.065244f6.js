"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[82913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return n?o.createElement(f,c(c({ref:t},d),{},{components:n})):o.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49492:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var o=n(83117),r=n(67294),a=n(3905);const c={id:"account-country",title:"AccountCountry",hide_table_of_contents:!1},l=void 0,u={unversionedId:"api-reference/enums/account-country",id:"api-reference/enums/account-country",title:"AccountCountry",description:"Refers to the country of the account. It will determine the country code of the local IBAN of the account.",source:"@site/docs/api-reference/enums/account-country.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/account-country",permalink:"/api-reference/enums/account-country",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/account-country.mdx",tags:[],version:"current",frontMatter:{id:"account-country",title:"AccountCountry",hide_table_of_contents:!1}},i={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AccountCountry.<b>FRA</b></code>",id:"code-style-fontweight-normal-accountcountrybfrabcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountCountry.<b>DEU</b></code>",id:"code-style-fontweight-normal-accountcountrybdeubcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountCountry.<b>ESP</b></code>",id:"code-style-fontweight-normal-accountcountrybespbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountCountry.<b>NLD</b></code>",id:"code-style-fontweight-normal-accountcountrybnldbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:s,Badge:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Refers to the country of the account. It will determine the country code of the local IBAN of the account."),(0,a.kt)("p",null,"Available Account Country: CCA3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AccountCountry {\n  FRA\n  DEU\n  ESP\n  NLD\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountcountrybfrabcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountCountry.",(0,a.kt)("b",null,"FRA")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"French account with a French IBAN, starting with FR.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountcountrybdeubcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountCountry.",(0,a.kt)("b",null,"DEU")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"German account with a German IBAN, starting with DE.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountcountrybespbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountCountry.",(0,a.kt)("b",null,"ESP")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Spanish account with a Spanish IBAN, starting with ES.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountcountrybnldbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountCountry.",(0,a.kt)("b",null,"NLD")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Dutch account with a Dutch IBAN, starting with DU.\nCOMING SOON")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/account"},(0,a.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboard-company-account-holder-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderInput")),"  ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboard-individual-account-holder-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderInput")),"  ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding"},(0,a.kt)("inlineCode",{parentName:"a"},"Onboarding")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-info"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingInfo")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/update-company-onboarding-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateCompanyOnboardingInput")),"  ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/update-individual-onboarding-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingInput")),"  ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);