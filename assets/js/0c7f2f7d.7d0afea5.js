"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[60553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85341:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>p,contentTitle:()=>a,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(83117),o=n(67294),i=n(3905);const c={id:"invoice-type",title:"InvoiceType",hide_table_of_contents:!1},a=void 0,l={unversionedId:"api-reference/enums/invoice-type",id:"api-reference/enums/invoice-type",title:"InvoiceType",description:"No description",source:"@site/docs/api-reference/enums/invoice-type.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/invoice-type",permalink:"/api-reference/enums/invoice-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/invoice-type.mdx",tags:[],version:"current",frontMatter:{id:"invoice-type",title:"InvoiceType",hide_table_of_contents:!1}},p={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>InvoiceType.<b>Invoice</b></code>",id:"code-style-fontweight-normal-invoicetypebinvoicebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InvoiceType.<b>RefundNote</b></code>",id:"code-style-fontweight-normal-invoicetypebrefundnotebcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:f,Badge:d},y="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum InvoiceType {\n  Invoice\n  RefundNote\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-invoicetypebinvoicebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InvoiceType.",(0,i.kt)("b",null,"Invoice")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-invoicetypebrefundnotebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InvoiceType.",(0,i.kt)("b",null,"RefundNote")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/invoice"},(0,i.kt)("inlineCode",{parentName:"a"},"Invoice")),"  ",(0,i.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);