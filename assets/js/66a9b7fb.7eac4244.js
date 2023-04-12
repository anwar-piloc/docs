"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[77222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=o,f=p["".concat(d,".").concat(s)]||p[s]||m[s]||r;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},18803:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=n(83117),o=n(67294),r=n(3905);const a={id:"approved-funding-limit",title:"ApprovedFundingLimit",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api/objects/approved-funding-limit",id:"api/objects/approved-funding-limit",title:"ApprovedFundingLimit",description:"Approved Funding Limit",source:"@site/docs/api/objects/approved-funding-limit.mdx",sourceDirName:"api/objects",slug:"/api/objects/approved-funding-limit",permalink:"/docs/api/objects/approved-funding-limit",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/approved-funding-limit.mdx",tags:[],version:"current",frontMatter:{id:"approved-funding-limit",title:"ApprovedFundingLimit",hide_table_of_contents:!1}},u={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ApprovedFundingLimit.<b>instantFundingLimit</b></code><Bullet /><code>FundingLimitAmount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-approvedfundinglimitbinstantfundinglimitbcodefundinglimitamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ApprovedFundingLimit.<b>fundingLimit</b></code><Bullet /><code>FundingLimitAmount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-approvedfundinglimitbfundinglimitbcodefundinglimitamount--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:p,SpecifiedBy:m,Badge:s},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Approved Funding Limit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ApprovedFundingLimit {\n  instantFundingLimit: FundingLimitAmount!\n  fundingLimit: FundingLimitAmount!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-approvedfundinglimitbinstantfundinglimitbcodefundinglimitamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ApprovedFundingLimit.",(0,r.kt)("b",null,"instantFundingLimit"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/funding-limit-amount"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingLimitAmount!"))," ",(0,r.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requested amount settings for the instant funding limit")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-approvedfundinglimitbfundinglimitbcodefundinglimitamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ApprovedFundingLimit.",(0,r.kt)("b",null,"fundingLimit"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/funding-limit-amount"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingLimitAmount!"))," ",(0,r.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requested amount settings for the funding limit")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/funding-limit-settings-change-request"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequest")),"  ",(0,r.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);