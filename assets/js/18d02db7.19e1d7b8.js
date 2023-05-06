"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,p=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?i.createElement(p,a(a({ref:t},s),{},{components:n})):i.createElement(p,a({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67131:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(83117),r=n(67294),o=n(3905);const a={id:"funding-limit",title:"FundingLimit",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/objects/funding-limit",id:"api-reference/objects/funding-limit",title:"FundingLimit",description:"No description",source:"@site/docs/api-reference/objects/funding-limit.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/funding-limit",permalink:"/docs/api-reference/objects/funding-limit",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/funding-limit.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit",title:"FundingLimit",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingLimitSettings",permalink:"/docs/api-reference/objects/funding-limit-settings"},next:{title:"FundingSourceConnection",permalink:"/docs/api-reference/objects/funding-source-connection"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimit.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-fundinglimitbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimit.<b>funding</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-fundinglimitbfundingbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimit.<b>rollingDays</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundinglimitbrollingdaysbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:u,SpecifiedBy:m,Badge:f},g="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingLimit {\n  amount: Amount!\n  funding: Amount\n  rollingDays: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitbamountbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FundingLimit.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Maximum Funding Amount authorized")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitbfundingbcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FundingLimit.",(0,o.kt)("b",null,"funding"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Funding Amount that has already been used during the interval")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitbrollingdaysbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FundingLimit.",(0,o.kt)("b",null,"rollingDays"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Interval in number of calendar days where the limit is applied")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"FundingLimitSettings")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);