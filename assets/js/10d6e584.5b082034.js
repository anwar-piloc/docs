"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82188:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905);const l={id:"payment-order-by-field-input",title:"PaymentOrderByFieldInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/enums/payment-order-by-field-input",id:"api-reference/enums/payment-order-by-field-input",title:"PaymentOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing payment",source:"@site/docs/api-reference/enums/payment-order-by-field-input.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/payment-order-by-field-input",permalink:"/api-reference/enums/payment-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/payment-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"payment-order-by-field-input",title:"PaymentOrderByFieldInput",hide_table_of_contents:!1}},p={},c=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-paymentorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-paymentorderbyfieldinputbupdatedatbcode",level:4},{value:"Member Of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[d,p]=(0,a.useState)(i);return(0,o.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&l)},f={Bullet:c,SpecifiedBy:u,Badge:s,toc:m,Details:y},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Field we can use when ordering that can be applied when listing payment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentOrderByFieldInput {\n  createdAt\n  updatedAt\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentorderbyfieldinputbcreatedatbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentOrderByFieldInput.",(0,o.kt)("b",null,"createdAt")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentorderbyfieldinputbupdatedatbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentOrderByFieldInput.",(0,o.kt)("b",null,"updatedAt")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/payment-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentOrderByInput")),"  ",(0,o.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);