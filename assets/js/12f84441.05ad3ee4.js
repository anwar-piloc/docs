"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),f=r,m=g["".concat(o,".").concat(f)]||g[f]||d[f]||a;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97864:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>g,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(83117),r=n(67294),a=n(3905);const s={id:"funding-limit-settings-change-request",title:"fundingLimitSettingsChangeRequest",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/queries/funding-limit-settings-change-request",id:"api-reference/queries/funding-limit-settings-change-request",title:"fundingLimitSettingsChangeRequest",description:"Returns a request for funding limit settings change from its id.",source:"@site/docs/api-reference/queries/funding-limit-settings-change-request.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/funding-limit-settings-change-request",permalink:"/api-reference/queries/funding-limit-settings-change-request",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/funding-limit-settings-change-request.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-change-request",title:"fundingLimitSettingsChangeRequest",hide_table_of_contents:!1}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>fundingLimitSettingsChangeRequest.<b>fundingLimitSettingsChangeRequestId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestbfundinglimitsettingschangerequestidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>FundingLimitSettingsChangeRequest</code> <Badge class="secondary" text="object"/>',id:"fundinglimitsettingschangerequest-",level:4}],g=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:g,SpecifiedBy:d,Badge:f},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns a request for funding limit settings change from its id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"fundingLimitSettingsChangeRequest(\n  fundingLimitSettingsChangeRequestId: ID!\n): FundingLimitSettingsChangeRequest\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestbfundinglimitsettingschangerequestidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"fundingLimitSettingsChangeRequest.",(0,a.kt)("b",null,"fundingLimitSettingsChangeRequestId"))),(0,a.kt)(g,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"fundinglimitsettingschangerequest-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/funding-limit-settings-change-request"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequest"))," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Funding Limit Settings Change Request")))}h.isMDXComponent=!0}}]);