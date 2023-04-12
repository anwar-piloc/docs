"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[32992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,b=d["".concat(l,".").concat(p)]||d[p]||f[p]||r;return n?a.createElement(b,s(s({ref:t},i),{},{components:n})):a.createElement(b,s({ref:t},i))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:o,s[1]=u;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33181:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=n(83117),o=n(67294),r=n(3905);const s={id:"enabled-funding-source-status-info",title:"EnabledFundingSourceStatusInfo",hide_table_of_contents:!1},u=void 0,l={unversionedId:"api/objects/enabled-funding-source-status-info",id:"api/objects/enabled-funding-source-status-info",title:"EnabledFundingSourceStatusInfo",description:"Funding Source Enabled status information",source:"@site/docs/api/objects/enabled-funding-source-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/enabled-funding-source-status-info",permalink:"/docs/api/objects/enabled-funding-source-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/enabled-funding-source-status-info.mdx",tags:[],version:"current",frontMatter:{id:"enabled-funding-source-status-info",title:"EnabledFundingSourceStatusInfo",hide_table_of_contents:!1}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EnabledFundingSourceStatusInfo.<b>status</b></code><Bullet /><code>FundingSourceStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-enabledfundingsourcestatusinfobstatusbcodefundingsourcestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EnabledFundingSourceStatusInfo.<b>enabledAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-enabledfundingsourcestatusinfobenabledatbcodedate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingSourceStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"fundingsourcestatusinfo-",level:4}],d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:d,SpecifiedBy:f,Badge:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Funding Source Enabled status information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type EnabledFundingSourceStatusInfo implements FundingSourceStatusInfo {\n  status: FundingSourceStatus!\n  enabledAt: Date!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-enabledfundingsourcestatusinfobstatusbcodefundingsourcestatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"EnabledFundingSourceStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/funding-source-status"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingSourceStatus!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Funding Source Enabled status")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-enabledfundingsourcestatusinfobenabledatbcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"EnabledFundingSourceStatusInfo.",(0,r.kt)("b",null,"enabledAt"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Date at which the funding source was enabled")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"fundingsourcestatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/funding-source-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingSourceStatusInfo"))," ",(0,r.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Funding Source status information")))}m.isMDXComponent=!0}}]);