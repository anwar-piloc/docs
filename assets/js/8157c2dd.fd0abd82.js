"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96649:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>f});var a=n(87462),o=n(67294),r=n(3905);const s={id:"upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/upcoming-transaction-status-info",id:"api-reference/objects/upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo",description:"Upcoming transaction status information",source:"@site/docs/api-reference/objects/upcoming-transaction-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/upcoming-transaction-status-info",permalink:"/api-reference/objects/upcoming-transaction-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/upcoming-transaction-status-info.mdx",tags:[],version:"current",frontMatter:{id:"upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo",hide_table_of_contents:!1}},l={},u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpcomingTransactionStatusInfo.<b>status</b></code><Bullet /><code>TransactionStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-upcomingtransactionstatusinfobstatusbcodetransactionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpcomingTransactionStatusInfo.<b>executionDate</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-upcomingtransactionstatusinfobexecutiondatebcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TransactionStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"transactionstatusinfo-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:c=!1}=e;const[i,l]=(0,o.useState)(c);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&s)},g={Bullet:u,SpecifiedBy:d,Badge:p,toc:f,Details:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Upcoming transaction status information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpcomingTransactionStatusInfo implements TransactionStatusInfo {\n  status: TransactionStatus!\n  executionDate: DateTime!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-upcomingtransactionstatusinfobstatusbcodetransactionstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpcomingTransactionStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-status"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatus!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"status of the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-upcomingtransactionstatusinfobexecutiondatebcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpcomingTransactionStatusInfo.",(0,r.kt)("b",null,"executionDate"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The date when the transaction will be executed")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"transactionstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transaction Status information")))}y.isMDXComponent=!0}}]);