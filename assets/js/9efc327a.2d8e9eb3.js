"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[71135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),p=s,f=c["".concat(l,".").concat(p)]||c[p]||g[p]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44043:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),s=n(67294),i=n(3905);const r={id:"funding-limit-settings-change-request-approved-status-info",title:"FundingLimitSettingsChangeRequestApprovedStatusInfo",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api-reference/objects/funding-limit-settings-change-request-approved-status-info",id:"api-reference/objects/funding-limit-settings-change-request-approved-status-info",title:"FundingLimitSettingsChangeRequestApprovedStatusInfo",description:"StatusInfo when funding limit settings change request has been approved",source:"@site/docs/api-reference/objects/funding-limit-settings-change-request-approved-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/funding-limit-settings-change-request-approved-status-info",permalink:"/api-reference/objects/funding-limit-settings-change-request-approved-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/funding-limit-settings-change-request-approved-status-info.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-change-request-approved-status-info",title:"FundingLimitSettingsChangeRequestApprovedStatusInfo",hide_table_of_contents:!1}},u={},d=()=>(0,i.kt)(s.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,i.kt)(s.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(s.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestApprovedStatusInfo.<b>status</b></code><Bullet /><code>FundingLimitSettingsChangeRequestStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestapprovedstatusinfobstatusbcodefundinglimitsettingschangerequeststatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestApprovedStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestapprovedstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingLimitSettingsChangeRequestStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"fundinglimitsettingschangerequeststatusinfo-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:o=!1}=e;const[l,u]=(0,s.useState)(o);return(0,i.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&r)},m={Bullet:d,SpecifiedBy:c,Badge:g,toc:p,Details:f},b="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"StatusInfo when funding limit settings change request has been approved"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingLimitSettingsChangeRequestApprovedStatusInfo implements FundingLimitSettingsChangeRequestStatusInfo {\n  status: FundingLimitSettingsChangeRequestStatus!\n  reason: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestapprovedstatusinfobstatusbcodefundinglimitsettingschangerequeststatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestApprovedStatusInfo.",(0,i.kt)("b",null,"status"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-limit-settings-change-request-status"},(0,i.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestStatus!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestapprovedstatusinfobreasonbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestApprovedStatusInfo.",(0,i.kt)("b",null,"reason"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"fundinglimitsettingschangerequeststatusinfo-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/funding-limit-settings-change-request-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestStatusInfo"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Object containing details about funding limit settings change request status")))}h.isMDXComponent=!0}}]);