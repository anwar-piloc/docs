"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30847],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,f=d["".concat(l,".").concat(p)]||d[p]||s[p]||o;return t?a.createElement(f,c(c({ref:n},m),{},{components:t})):a.createElement(f,c({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},25630:function(e,n,t){t.r(n),t.d(n,{Badge:function(){return p},Bullet:function(){return d},SpecifiedBy:function(){return s},assets:function(){return u},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var a=t(83117),r=t(67294),o=t(3905);const c={id:"internal-payment-mandate-sequence",title:"InternalPaymentMandateSequence",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api/enums/internal-payment-mandate-sequence",id:"api/enums/internal-payment-mandate-sequence",title:"InternalPaymentMandateSequence",description:"Internal Direct Debit Payment Mandate Sequence",source:"@site/docs/api/enums/internal-payment-mandate-sequence.mdx",sourceDirName:"api/enums",slug:"/api/enums/internal-payment-mandate-sequence",permalink:"/docs/api/enums/internal-payment-mandate-sequence",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/internal-payment-mandate-sequence.mdx",tags:[],version:"current",frontMatter:{id:"internal-payment-mandate-sequence",title:"InternalPaymentMandateSequence",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalPaymentMandateScheme",permalink:"/docs/api/enums/internal-payment-mandate-scheme"},next:{title:"InternalReceivedDirectDebitMandateScheme",permalink:"/docs/api/enums/internal-received-direct-debit-mandate-scheme"}},u={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>InternalPaymentMandateSequence.<b>Recurring</b></code>",id:"code-style-fontweight-normal-internalpaymentmandatesequencebrecurringbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InternalPaymentMandateSequence.<b>OneOff</b></code>",id:"code-style-fontweight-normal-internalpaymentmandatesequenceboneoffbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:d,SpecifiedBy:s,Badge:p},y="wrapper";function b(e){let{components:n,...t}=e;return(0,o.kt)(y,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Internal Direct Debit Payment Mandate Sequence"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum InternalPaymentMandateSequence {\n  Recurring\n  OneOff\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatesequencebrecurringbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateSequence.",(0,o.kt)("b",null,"Recurring")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Internal Direct Debit Payment Mandate can be used for recurrent collections")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatesequenceboneoffbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateSequence.",(0,o.kt)("b",null,"OneOff")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Internal Direct Debit Payment Mandate can be used only once")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/internal-payment-direct-debit-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalPaymentDirectDebitMandate")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);