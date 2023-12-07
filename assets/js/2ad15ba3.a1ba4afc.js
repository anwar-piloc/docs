"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,p=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(p,o(o({ref:t},s),{},{components:n})):a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44902:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var a=n(87462),r=n(67294),i=n(3905);const o={id:"instant-funding-limit",title:"InstantFundingLimit",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/objects/instant-funding-limit",id:"api-reference/objects/instant-funding-limit",title:"InstantFundingLimit",description:"No description",source:"@site/docs/api-reference/objects/instant-funding-limit.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/instant-funding-limit",permalink:"/api-reference/objects/instant-funding-limit",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/instant-funding-limit.mdx",tags:[],version:"current",frontMatter:{id:"instant-funding-limit",title:"InstantFundingLimit",hide_table_of_contents:!1}},d={},s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InstantFundingLimit.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-instantfundinglimitbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InstantFundingLimit.<b>funding</b></code><Bullet /><code>Amount</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-instantfundinglimitbfundingbcodeamount-",level:4},{value:"Member Of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[c,d]=(0,r.useState)(l);return(0,i.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},g={Bullet:s,SpecifiedBy:u,Badge:m,toc:f,Details:p},b="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type InstantFundingLimit {\n  amount: Amount!\n  funding: Amount\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-instantfundinglimitbamountbcodeamount--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InstantFundingLimit.",(0,i.kt)("b",null,"amount"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,i.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Maximum Instant Funding Amount authorized")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-instantfundinglimitbfundingbcodeamount-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InstantFundingLimit.",(0,i.kt)("b",null,"funding"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,i.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Instant Funding Amount that has already been used")),(0,i.kt)("h3",{id:"member-of"},"Member Of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings"},(0,i.kt)("inlineCode",{parentName:"a"},"FundingLimitSettings")),"  ",(0,i.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);