"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[33107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=l(n),f=a,m=g["".concat(u,".").concat(f)]||g[f]||d[f]||s;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[g]="string"==typeof e?e:a,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82852:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>g,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var i=n(83117),a=n(67294),s=n(3905);const r={id:"funding-limit-settings-change-request-status-info",title:"FundingLimitSettingsChangeRequestStatusInfo",hide_table_of_contents:!1},o=void 0,u={unversionedId:"api-reference/interfaces/funding-limit-settings-change-request-status-info",id:"api-reference/interfaces/funding-limit-settings-change-request-status-info",title:"FundingLimitSettingsChangeRequestStatusInfo",description:"Object containing details about funding limit settings change request status",source:"@site/docs/api-reference/interfaces/funding-limit-settings-change-request-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/funding-limit-settings-change-request-status-info",permalink:"/api-reference/interfaces/funding-limit-settings-change-request-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/funding-limit-settings-change-request-status-info.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-change-request-status-info",title:"FundingLimitSettingsChangeRequestStatusInfo",hide_table_of_contents:!1}},l={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestStatusInfo.<b>status</b></code><Bullet /><code>FundingLimitSettingsChangeRequestStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequeststatusinfobstatusbcodefundinglimitsettingschangerequeststatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],g=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:g,SpecifiedBy:d,Badge:f},p="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Object containing details about funding limit settings change request status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"interface FundingLimitSettingsChangeRequestStatusInfo {\n  status: FundingLimitSettingsChangeRequestStatus!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequeststatusinfobstatusbcodefundinglimitsettingschangerequeststatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(g,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-limit-settings-change-request-status"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestStatus!"))," ",(0,s.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Current limit settings change request status.")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequest")),"  ",(0,s.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request-approved-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestApprovedStatusInfo")),"  ",(0,s.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(g,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request-pending-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestPendingStatusInfo")),"  ",(0,s.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(g,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request-refused-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestRefusedStatusInfo")),"  ",(0,s.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(g,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request-waiting-for-information-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo")),"  ",(0,s.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);