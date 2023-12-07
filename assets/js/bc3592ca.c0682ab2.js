"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),h=a,m=s["".concat(d,".").concat(h)]||s[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Add account for existing account holder"},i="Add account for existing account holder",c={unversionedId:"topics/onboarding/account-holders/guide-add-additional-account",id:"topics/onboarding/account-holders/guide-add-additional-account",title:"Add account for existing account holder",description:"If an account holder already exists, you can add another account for that account holder.",source:"@site/docs/topics/onboarding/account-holders/guide-add-additional-account.mdx",sourceDirName:"topics/onboarding/account-holders",slug:"/topics/onboarding/account-holders/guide-add-additional-account",permalink:"/topics/onboarding/account-holders/guide-add-additional-account",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/onboarding/account-holders/guide-add-additional-account.mdx",tags:[],version:"current",frontMatter:{title:"Add account for existing account holder"},sidebar:"docSidebar",previous:{title:"Account holders",permalink:"/topics/onboarding/account-holders/"},next:{title:"Sandbox",permalink:"/topics/onboarding/account-holders/sandbox"}},d={},l=[{value:"Company account holder",id:"add-company",level:2},{value:"Individual account holder",id:"add-individual",level:2}],u={toc:l},s="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-account-for-existing-account-holder"},"Add account for existing account holder"),(0,a.kt)("p",null,'If an account holder already exists, you can add another account for that account holder.\nThe account holder still needs to be "officially" verified by Swan, but verification is quick as Swan already knows the account holder.'),(0,a.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The account holder must be ",(0,a.kt)("inlineCode",{parentName:"p"},"Verified")," with an ",(0,a.kt)("inlineCode",{parentName:"p"},"Open")," account.")),(0,a.kt)("h2",{id:"add-company"},"Company account holder"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/company/guide-create-onboarding"},"Run the ",(0,a.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolder")," mutation"),", using the same information as the account holder's existing Swan account."),(0,a.kt)("li",{parentName:"ol"},"Finalize the onboarding with the new onboarding ID and the user access token.\nThe account holder doesn't need to do anything."),(0,a.kt)("li",{parentName:"ol"},"You'll get new ",(0,a.kt)("inlineCode",{parentName:"li"},"accountId")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"accountHolder")," objects immediately, both with the status ",(0,a.kt)("inlineCode",{parentName:"li"},"Pending"),", which is possible because the legal representative already completed ID verification for the first account."),(0,a.kt)("li",{parentName:"ol"},"Swan will verify the account.\nSince Swan already knows the account holder, verification is quicker than for a new account holder.")),(0,a.kt)("h2",{id:"add-individual"},"Individual account holder"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/individual/guide-create-onboarding"},"Run the ",(0,a.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolder")," mutation"),", using the same information as the account holder's existing Swan account."),(0,a.kt)("li",{parentName:"ol"},"Finalize the onboarding with the new onboarding ID and the user access token.\nThe account holder doesn't need to do anything."),(0,a.kt)("li",{parentName:"ol"},"You'll get new ",(0,a.kt)("inlineCode",{parentName:"li"},"accountId")," immediately with the status ",(0,a.kt)("inlineCode",{parentName:"li"},"Pending"),"."),(0,a.kt)("li",{parentName:"ol"},"Swan will verify the account.\nSince Swan already knows the account holder, verification is quicker than for a new account holder.")))}p.isMDXComponent=!0}}]);