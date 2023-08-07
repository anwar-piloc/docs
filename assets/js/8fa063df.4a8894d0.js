"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[37775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=d(n),p=o,g=l["".concat(u,".").concat(p)]||l[p]||f[p]||a;return n?r.createElement(g,c(c({ref:t},i),{},{components:n})):r.createElement(g,c({ref:t},i))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:o,c[1]=s;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42527:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var r=n(83117),o=n(67294),a=n(3905);const c={id:"rejected-funding-source-status-info",title:"RejectedFundingSourceStatusInfo",hide_table_of_contents:!1},s=void 0,u={unversionedId:"api-reference/objects/rejected-funding-source-status-info",id:"api-reference/objects/rejected-funding-source-status-info",title:"RejectedFundingSourceStatusInfo",description:"Funding Source Rejected status information",source:"@site/docs/api-reference/objects/rejected-funding-source-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/rejected-funding-source-status-info",permalink:"/api-reference/objects/rejected-funding-source-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/rejected-funding-source-status-info.mdx",tags:[],version:"current",frontMatter:{id:"rejected-funding-source-status-info",title:"RejectedFundingSourceStatusInfo",hide_table_of_contents:!1}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedFundingSourceStatusInfo.<b>status</b></code><Bullet /><code>FundingSourceStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-rejectedfundingsourcestatusinfobstatusbcodefundingsourcestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedFundingSourceStatusInfo.<b>rejectedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-rejectedfundingsourcestatusinfobrejectedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedFundingSourceStatusInfo.<b>reasonCode</b></code><Bullet /><code>RejectedFundingSourceReason!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-rejectedfundingsourcestatusinfobreasoncodebcoderejectedfundingsourcereason--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingSourceStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"fundingsourcestatusinfo-",level:4}],l=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:l,SpecifiedBy:f,Badge:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Funding Source Rejected status information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RejectedFundingSourceStatusInfo implements FundingSourceStatusInfo {\n  status: FundingSourceStatus!\n  rejectedAt: Date!\n  reasonCode: RejectedFundingSourceReason!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-rejectedfundingsourcestatusinfobstatusbcodefundingsourcestatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RejectedFundingSourceStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-source-status"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingSourceStatus!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Funding Source Rejected status")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-rejectedfundingsourcestatusinfobrejectedatbcodedate--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RejectedFundingSourceStatusInfo.",(0,a.kt)("b",null,"rejectedAt"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,a.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Date at which the funding source was rejected")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-rejectedfundingsourcestatusinfobreasoncodebcoderejectedfundingsourcereason--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RejectedFundingSourceStatusInfo.",(0,a.kt)("b",null,"reasonCode"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/rejected-funding-source-reason"},(0,a.kt)("inlineCode",{parentName:"a"},"RejectedFundingSourceReason!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reason code of the rejection")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"fundingsourcestatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/funding-source-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingSourceStatusInfo"))," ",(0,a.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Funding Source status information")))}y.isMDXComponent=!0}}]);