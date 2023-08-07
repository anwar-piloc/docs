"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(i,".").concat(p)]||d[p]||g[p]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27538:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>g,assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(83117),o=n(67294),a=n(3905);const c={id:"funding-source-wrong-status-rejection",title:"FundingSourceWrongStatusRejection",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api-reference/objects/funding-source-wrong-status-rejection",id:"api-reference/objects/funding-source-wrong-status-rejection",title:"FundingSourceWrongStatusRejection",description:"Rejection returned when the Funding Source is not in the expected status",source:"@site/docs/api-reference/objects/funding-source-wrong-status-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/funding-source-wrong-status-rejection",permalink:"/api-reference/objects/funding-source-wrong-status-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/funding-source-wrong-status-rejection.mdx",tags:[],version:"current",frontMatter:{id:"funding-source-wrong-status-rejection",title:"FundingSourceWrongStatusRejection",hide_table_of_contents:!1}},u={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceWrongStatusRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundingsourcewrongstatusrejectionbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceWrongStatusRejection.<b>currentStatus</b></code><Bullet /><code>FundingSourceStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-fundingsourcewrongstatusrejectionbcurrentstatusbcodefundingsourcestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceWrongStatusRejection.<b>expectedStatus</b></code><Bullet /><code>FundingSourceStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-fundingsourcewrongstatusrejectionbexpectedstatusbcodefundingsourcestatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:d,SpecifiedBy:g,Badge:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rejection returned when the Funding Source is not in the expected status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingSourceWrongStatusRejection implements Rejection {\n  message: String!\n  currentStatus: FundingSourceStatus!\n  expectedStatus: FundingSourceStatus!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundingsourcewrongstatusrejectionbmessagebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceWrongStatusRejection.",(0,a.kt)("b",null,"message"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundingsourcewrongstatusrejectionbcurrentstatusbcodefundingsourcestatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceWrongStatusRejection.",(0,a.kt)("b",null,"currentStatus"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-source-status"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingSourceStatus!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundingsourcewrongstatusrejectionbexpectedstatusbcodefundingsourcestatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceWrongStatusRejection.",(0,a.kt)("b",null,"expectedStatus"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-source-status"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingSourceStatus!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"rejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,a.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/unions/initiate-funding-request-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"InitiateFundingRequestPayload")),"  ",(0,a.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);