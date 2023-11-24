"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,y=u["".concat(i,".").concat(s)]||u[s]||m[s]||o;return n?r.createElement(y,d(d({ref:t},c),{},{components:n})):r.createElement(y,d({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,d[1]=l;for(var p=2;p<o;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57928:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var r=n(83117),a=n(67294),o=n(3905);const d={id:"payment-mandate-order-by-field-input",title:"PaymentMandateOrderByFieldInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/enums/payment-mandate-order-by-field-input",id:"api-reference/enums/payment-mandate-order-by-field-input",title:"PaymentMandateOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing payment mandate results",source:"@site/docs/api-reference/enums/payment-mandate-order-by-field-input.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/payment-mandate-order-by-field-input",permalink:"/api-reference/enums/payment-mandate-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/payment-mandate-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-order-by-field-input",title:"PaymentMandateOrderByFieldInput",hide_table_of_contents:!1}},p={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-paymentmandateorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-paymentmandateorderbyfieldinputbupdatedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:u,SpecifiedBy:m,Badge:s},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Field we can use when ordering that can be applied when listing payment mandate results"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentMandateOrderByFieldInput {\n  createdAt\n  updatedAt\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateorderbyfieldinputbcreatedatbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateOrderByFieldInput.",(0,o.kt)("b",null,"createdAt")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateorderbyfieldinputbupdatedatbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateOrderByFieldInput.",(0,o.kt)("b",null,"updatedAt")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/payment-mandate-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandateOrderByInput")),"  ",(0,o.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);