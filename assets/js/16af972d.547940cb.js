"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(f,c(c({ref:t},m),{},{components:n})):a.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75574:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=n(87462),r=n(67294),o=n(3905);const c={id:"sepapayment-mandate-scheme",title:"SEPAPaymentMandateScheme",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/enums/sepapayment-mandate-scheme",id:"api-reference/enums/sepapayment-mandate-scheme",title:"SEPAPaymentMandateScheme",description:"No description",source:"@site/docs/api-reference/enums/sepapayment-mandate-scheme.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/sepapayment-mandate-scheme",permalink:"/api-reference/enums/sepapayment-mandate-scheme",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/sepapayment-mandate-scheme.mdx",tags:[],version:"current",frontMatter:{id:"sepapayment-mandate-scheme",title:"SEPAPaymentMandateScheme",hide_table_of_contents:!1}},s={},m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SEPAPaymentMandateScheme.<b>SepaDirectDebitCore</b></code>",id:"code-style-fontweight-normal-sepapaymentmandateschemebsepadirectdebitcorebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SEPAPaymentMandateScheme.<b>SepaDirectDebitB2b</b></code>",id:"code-style-fontweight-normal-sepapaymentmandateschemebsepadirectdebitb2bbcode",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:i=!1}=e;const[l,s]=(0,r.useState)(i);return(0,o.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&c)},b={Bullet:m,SpecifiedBy:p,Badge:d,toc:u,Details:f},y="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SEPAPaymentMandateScheme {\n  SepaDirectDebitCore\n  SepaDirectDebitB2b\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandateschemebsepadirectdebitcorebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateScheme.",(0,o.kt)("b",null,"SepaDirectDebitCore")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Core")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandateschemebsepadirectdebitb2bbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateScheme.",(0,o.kt)("b",null,"SepaDirectDebitB2b")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit B2B")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/sepapayment-direct-debit-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPAPaymentDirectDebitMandate")),"  ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);