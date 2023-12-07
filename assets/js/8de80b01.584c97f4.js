"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[40350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,m=p["".concat(d,".").concat(u)]||p[u]||f[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71299:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),i=n(67294),r=n(3905);const o={id:"expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/expired-identification-level-status-info",id:"api-reference/objects/expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo",description:"Describes an identification level for the process associated to this identification that has expired and is no longer considered valid",source:"@site/docs/api-reference/objects/expired-identification-level-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/expired-identification-level-status-info",permalink:"/api-reference/objects/expired-identification-level-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/expired-identification-level-status-info.mdx",tags:[],version:"current",frontMatter:{id:"expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo",hide_table_of_contents:!1}},s={},c=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExpiredIdentificationLevelStatusInfo.<b>status</b></code><Bullet /><code>SwanIdentificationStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-expiredidentificationlevelstatusinfobstatusbcodeswanidentificationstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExpiredIdentificationLevelStatusInfo.<b>expiredAt</b></code><Bullet /><code>Date!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-expiredidentificationlevelstatusinfobexpiredatbcodedate--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[d,s]=(0,i.useState)(l);return(0,r.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&o)},b={Bullet:c,SpecifiedBy:p,Badge:f,toc:u,Details:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Describes an identification level for the process associated to this identification that has expired and is no longer considered valid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ExpiredIdentificationLevelStatusInfo {\n  status: SwanIdentificationStatus!\n  expiredAt: Date!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-expiredidentificationlevelstatusinfobstatusbcodeswanidentificationstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExpiredIdentificationLevelStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/swan-identification-status"},(0,r.kt)("inlineCode",{parentName:"a"},"SwanIdentificationStatus!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Always set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Expired"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-expiredidentificationlevelstatusinfobexpiredatbcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExpiredIdentificationLevelStatusInfo.",(0,r.kt)("b",null,"expiredAt"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When this identification level expired")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/identification-level-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationLevelStatusInfo")),"  ",(0,r.kt)(f,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);