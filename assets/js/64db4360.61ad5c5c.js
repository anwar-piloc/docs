"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19326],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=o,p=s["".concat(c,".").concat(f)]||s[f]||m[f]||r;return n?i.createElement(p,a(a({ref:t},u),{},{components:n})):i.createElement(p,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35314:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return s},SpecifiedBy:function(){return m},assets:function(){return d},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var i=n(83117),o=n(67294),r=n(3905);const a={id:"funding-limit",title:"FundingLimit",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api/objects/funding-limit",id:"api/objects/funding-limit",title:"FundingLimit",description:"No description",source:"@site/docs/api/objects/funding-limit.mdx",sourceDirName:"api/objects",slug:"/api/objects/funding-limit",permalink:"/docs/api/objects/funding-limit",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/funding-limit.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit",title:"FundingLimit",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingLimitSettings",permalink:"/docs/api/objects/funding-limit-settings"},next:{title:"FundingSourceConnection",permalink:"/docs/api/objects/funding-source-connection"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimit.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-fundinglimitbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimit.<b>funding</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-fundinglimitbfundingbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimit.<b>rollingDays</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundinglimitbrollingdaysbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:u,Bullet:s,SpecifiedBy:m,Badge:f},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingLimit {\n  amount: Amount!\n  funding: Amount\n  rollingDays: Int!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitbamountbcodeamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FundingLimit.",(0,r.kt)("b",null,"amount"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Maximum Funding Amount authorized")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitbfundingbcodeamount-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FundingLimit.",(0,r.kt)("b",null,"funding"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Funding Amount that has already been used during the interval")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitbrollingdaysbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FundingLimit.",(0,r.kt)("b",null,"rollingDays"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Interval in number of calendar days where the limit is applied")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/funding-limit-settings"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingLimitSettings")),"  ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);