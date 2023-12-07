"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,p=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return n?o.createElement(p,r(r({ref:t},d),{},{components:n})):o.createElement(p,r({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65080:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var o=n(87462),a=n(67294),i=n(3905);const r={id:"invoice-status",title:"InvoiceStatus",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/enums/invoice-status",id:"api-reference/enums/invoice-status",title:"InvoiceStatus",description:"The different statuses of invoice",source:"@site/docs/api-reference/enums/invoice-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/invoice-status",permalink:"/api-reference/enums/invoice-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/invoice-status.mdx",tags:[],version:"current",frontMatter:{id:"invoice-status",title:"InvoiceStatus",hide_table_of_contents:!1}},s={},d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>InvoiceStatus.<b>Failed</b></code>",id:"code-style-fontweight-normal-invoicestatusbfailedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvoiceStatus.<b>NotPaid</b></code>",id:"code-style-fontweight-normal-invoicestatusbnotpaidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvoiceStatus.<b>Paid</b></code>",id:"code-style-fontweight-normal-invoicestatusbpaidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvoiceStatus.<b>PaymentDue</b></code>",id:"code-style-fontweight-normal-invoicestatusbpaymentduebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvoiceStatus.<b>Pending</b></code>",id:"code-style-fontweight-normal-invoicestatusbpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvoiceStatus.<b>Voided</b></code>",id:"code-style-fontweight-normal-invoicestatusbvoidedbcode",level:4},{value:"Member Of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[c,s]=(0,a.useState)(l);return(0,i.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},b={Bullet:d,SpecifiedBy:u,Badge:f,toc:m,Details:p},v="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(v,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The different statuses of invoice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum InvoiceStatus {\n  Failed\n  NotPaid\n  Paid\n  PaymentDue\n  Pending\n  Voided\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-invoicestatusbfailedbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InvoiceStatus.",(0,i.kt)("b",null,"Failed")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-invoicestatusbnotpaidbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InvoiceStatus.",(0,i.kt)("b",null,"NotPaid")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-invoicestatusbpaidbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InvoiceStatus.",(0,i.kt)("b",null,"Paid")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-invoicestatusbpaymentduebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InvoiceStatus.",(0,i.kt)("b",null,"PaymentDue")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-invoicestatusbpendingbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InvoiceStatus.",(0,i.kt)("b",null,"Pending")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-invoicestatusbvoidedbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InvoiceStatus.",(0,i.kt)("b",null,"Voided")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member Of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/invoice"},(0,i.kt)("inlineCode",{parentName:"a"},"Invoice")),"  ",(0,i.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);