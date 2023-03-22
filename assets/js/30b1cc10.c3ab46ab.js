"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[93714],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=i,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36231:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return p},Bullet:function(){return f},SpecifiedBy:function(){return d},assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=n(83117),i=n(67294),r=n(3905);const a={id:"verification-status",title:"VerificationStatus",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api/enums/verification-status",id:"api/enums/verification-status",title:"VerificationStatus",description:"Verification status of an account holder",source:"@site/docs/api/enums/verification-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/verification-status",permalink:"/docs/api/enums/verification-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/verification-status.mdx",tags:[],version:"current",frontMatter:{id:"verification-status",title:"VerificationStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"VerificationFlow",permalink:"/docs/api/enums/verification-flow"},next:{title:"WalletProviderType",permalink:"/docs/api/enums/wallet-provider-type"}},s={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>VerificationStatus.<b>NotStarted</b></code>",id:"code-style-fontweight-normal-verificationstatusbnotstartedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>VerificationStatus.<b>WaitingForInformation</b></code>",id:"code-style-fontweight-normal-verificationstatusbwaitingforinformationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>VerificationStatus.<b>Pending</b></code>",id:"code-style-fontweight-normal-verificationstatusbpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>VerificationStatus.<b>Verified</b></code>",id:"code-style-fontweight-normal-verificationstatusbverifiedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>VerificationStatus.<b>Refused</b></code>",id:"code-style-fontweight-normal-verificationstatusbrefusedbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:f,SpecifiedBy:d,Badge:p},b="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Verification status of an account holder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum VerificationStatus {\n  NotStarted\n  WaitingForInformation\n  Pending\n  Verified\n  Refused\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-verificationstatusbnotstartedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VerificationStatus.",(0,r.kt)("b",null,"NotStarted")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the account holder has not started to answer the verification process.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-verificationstatusbwaitingforinformationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VerificationStatus.",(0,r.kt)("b",null,"WaitingForInformation")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When Swan is waiting for information about the account holder to continue the verification process.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-verificationstatusbpendingbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VerificationStatus.",(0,r.kt)("b",null,"Pending")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the verification process is pending.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-verificationstatusbverifiedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VerificationStatus.",(0,r.kt)("b",null,"Verified")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the account holder is verified.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-verificationstatusbrefusedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VerificationStatus.",(0,r.kt)("b",null,"Refused")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the account holder is refused.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/account-holder-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderFilterInput")),"  ",(0,r.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);