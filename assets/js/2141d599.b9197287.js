"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[82209],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=i(n),p=r,f=s["".concat(l,".").concat(p)]||s[p]||d[p]||o;return n?a.createElement(f,c(c({ref:t},m),{},{components:n})):a.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:r,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54141:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return p},Bullet:function(){return s},SpecifiedBy:function(){return d},assets:function(){return i},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var a=n(83117),r=n(67294),o=n(3905);const c={id:"payment-mandate-sequence",title:"PaymentMandateSequence",hide_table_of_contents:!1},u=void 0,l={unversionedId:"api/enums/payment-mandate-sequence",id:"api/enums/payment-mandate-sequence",title:"PaymentMandateSequence",description:"Payment Mandate Sequence",source:"@site/docs/api/enums/payment-mandate-sequence.mdx",sourceDirName:"api/enums",slug:"/api/enums/payment-mandate-sequence",permalink:"/docs/api/enums/payment-mandate-sequence",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/payment-mandate-sequence.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-sequence",title:"PaymentMandateSequence",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentMandateScheme",permalink:"/docs/api/enums/payment-mandate-scheme"},next:{title:"PaymentMandateStatus",permalink:"/docs/api/enums/payment-mandate-status"}},i={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateSequence.<b>Recurrent</b></code>",id:"code-style-fontweight-normal-paymentmandatesequencebrecurrentbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateSequence.<b>OneOff</b></code>",id:"code-style-fontweight-normal-paymentmandatesequenceboneoffbcode",level:4}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:s,SpecifiedBy:d,Badge:p},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Payment Mandate Sequence"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentMandateSequence {\n  Recurrent\n  OneOff\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatesequencebrecurrentbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateSequence.",(0,o.kt)("b",null,"Recurrent")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Payment Mandate can be used for recurrent collections")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatesequenceboneoffbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateSequence.",(0,o.kt)("b",null,"OneOff")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Payment Mandate can be used only once")))}b.isMDXComponent=!0}}]);