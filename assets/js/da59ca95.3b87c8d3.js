"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[83337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,d=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=c(n),p=s,g=l["".concat(d,".").concat(p)]||l[p]||f[p]||a;return n?r.createElement(g,o(o({ref:t},i),{},{components:n})):r.createElement(g,o({ref:t},i))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[l]="string"==typeof e?e:s,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23642:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=n(83117),s=n(67294),a=n(3905);const o={id:"suspended-funding-source-status-info",title:"SuspendedFundingSourceStatusInfo",hide_table_of_contents:!1},u=void 0,d={unversionedId:"api-reference/objects/suspended-funding-source-status-info",id:"api-reference/objects/suspended-funding-source-status-info",title:"SuspendedFundingSourceStatusInfo",description:"Funding Source Suspended status information",source:"@site/docs/api-reference/objects/suspended-funding-source-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/suspended-funding-source-status-info",permalink:"/api-reference/objects/suspended-funding-source-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/suspended-funding-source-status-info.mdx",tags:[],version:"current",frontMatter:{id:"suspended-funding-source-status-info",title:"SuspendedFundingSourceStatusInfo",hide_table_of_contents:!1}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendedFundingSourceStatusInfo.<b>status</b></code><Bullet /><code>FundingSourceStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-suspendedfundingsourcestatusinfobstatusbcodefundingsourcestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendedFundingSourceStatusInfo.<b>suspendedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-suspendedfundingsourcestatusinfobsuspendedatbcodedate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingSourceStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"fundingsourcestatusinfo-",level:4}],l=()=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(s.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:l,SpecifiedBy:f,Badge:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Funding Source Suspended status information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SuspendedFundingSourceStatusInfo implements FundingSourceStatusInfo {\n  status: FundingSourceStatus!\n  suspendedAt: Date!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-suspendedfundingsourcestatusinfobstatusbcodefundingsourcestatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SuspendedFundingSourceStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-source-status"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingSourceStatus!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Funding Source Suspended status")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-suspendedfundingsourcestatusinfobsuspendedatbcodedate--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SuspendedFundingSourceStatusInfo.",(0,a.kt)("b",null,"suspendedAt"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,a.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Date at which the funding source was suspended")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"fundingsourcestatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/funding-source-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingSourceStatusInfo"))," ",(0,a.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Funding Source status information")))}y.isMDXComponent=!0}}]);