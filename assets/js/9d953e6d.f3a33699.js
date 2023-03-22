"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59535],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),y=r,u=m["".concat(l,".").concat(y)]||m[y]||p[y]||o;return n?a.createElement(u,d(d({ref:t},s),{},{components:n})):a.createElement(u,d({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,d[1]=i;for(var c=2;c<o;c++)d[c]=n[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1856:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return m},SpecifiedBy:function(){return p},assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return s}});var a=n(83117),r=n(67294),o=n(3905);const d={id:"internal-payment-mandate-creditor",title:"InternalPaymentMandateCreditor",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api/objects/internal-payment-mandate-creditor",id:"api/objects/internal-payment-mandate-creditor",title:"InternalPaymentMandateCreditor",description:"No description",source:"@site/docs/api/objects/internal-payment-mandate-creditor.mdx",sourceDirName:"api/objects",slug:"/api/objects/internal-payment-mandate-creditor",permalink:"/docs/api/objects/internal-payment-mandate-creditor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/internal-payment-mandate-creditor.mdx",tags:[],version:"current",frontMatter:{id:"internal-payment-mandate-creditor",title:"InternalPaymentMandateCreditor",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalPaymentDirectDebitMandate",permalink:"/docs/api/objects/internal-payment-direct-debit-mandate"},next:{title:"InternalPaymentMandateDebtor",permalink:"/docs/api/objects/internal-payment-mandate-debtor"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateCreditor.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatecreditorbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateCreditor.<b>identifier</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatecreditorbidentifierbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatecreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateCreditor.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internalpaymentmandatecreditorbaddressbcodeaddress--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentMandateCreditor</code> <Badge class="secondary" text="interface"/>',id:"paymentmandatecreditor-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:p,Badge:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternalPaymentMandateCreditor implements PaymentMandateCreditor {\n  id: ID!\n  identifier: ID!\n  name: String!\n  address: Address!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatecreditorbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateCreditor.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate creditor UUID")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatecreditorbidentifierbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateCreditor.",(0,o.kt)("b",null,"identifier"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate Creditor Idenfier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatecreditorbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateCreditor.",(0,o.kt)("b",null,"name"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate creditor name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatecreditorbaddressbcodeaddress--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateCreditor.",(0,o.kt)("b",null,"address"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate creditor address")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"paymentmandatecreditor-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/payment-mandate-creditor"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandateCreditor"))," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/internal-payment-direct-debit-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalPaymentDirectDebitMandate")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);