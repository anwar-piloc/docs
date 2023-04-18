"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,u=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return n?a.createElement(u,s(s({ref:t},i),{},{components:n})):a.createElement(u,s({ref:t},i))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:r,s[1]=d;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22339:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=n(83117),r=n(67294),o=n(3905);const s={id:"address-info",title:"AddressInfo",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api/objects/address-info",id:"api/objects/address-info",title:"AddressInfo",description:"Address information.",source:"@site/docs/api/objects/address-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/address-info",permalink:"/docs/api/objects/address-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/address-info.mdx",tags:[],version:"current",frontMatter:{id:"address-info",title:"AddressInfo",hide_table_of_contents:!1}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInfo.<b>addressLine1</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinfobaddressline1bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInfo.<b>addressLine2</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinfobaddressline2bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInfo.<b>city</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinfobcitybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInfo.<b>postalCode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinfobpostalcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInfo.<b>state</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinfobstatebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInfo.<b>country</b></code><Bullet /><code>CCA3</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinfobcountrybcodecca3-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:i,Bullet:p,SpecifiedBy:f,Badge:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Address information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddressInfo {\n  addressLine1: String\n  addressLine2: String\n  city: String\n  postalCode: String\n  state: String\n  country: CCA3\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addressinfobaddressline1bcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddressInfo.",(0,o.kt)("b",null,"addressLine1"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Address line 1.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addressinfobaddressline2bcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddressInfo.",(0,o.kt)("b",null,"addressLine2"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Address line 2.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addressinfobcitybcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddressInfo.",(0,o.kt)("b",null,"city"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"City.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addressinfobpostalcodebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddressInfo.",(0,o.kt)("b",null,"postalCode"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Postal code.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addressinfobstatebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddressInfo.",(0,o.kt)("b",null,"state"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"State.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addressinfobcountrybcodecca3-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddressInfo.",(0,o.kt)("b",null,"country"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/cca3"},(0,o.kt)("inlineCode",{parentName:"a"},"CCA3"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Country.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/account-holder"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/account-membership"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembership")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/onboarding-company-account-holder-info"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingCompanyAccountHolderInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/onboarding-individual-account-holder-info"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingIndividualAccountHolderInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);