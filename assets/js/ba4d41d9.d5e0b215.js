"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39034],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,y=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(y,s(s({ref:t},d),{},{components:n})):a.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42975:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return p},SpecifiedBy:function(){return u},assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return d}});var a=n(83117),o=n(67294),r=n(3905);const s={id:"payment-consent-pending",title:"PaymentConsentPending",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api/objects/payment-consent-pending",id:"api/objects/payment-consent-pending",title:"PaymentConsentPending",description:"Payment status consent pending",source:"@site/docs/api/objects/payment-consent-pending.mdx",sourceDirName:"api/objects",slug:"/api/objects/payment-consent-pending",permalink:"/docs/api/objects/payment-consent-pending",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/payment-consent-pending.mdx",tags:[],version:"current",frontMatter:{id:"payment-consent-pending",title:"PaymentConsentPending",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentConnection",permalink:"/docs/api/objects/payment-connection"},next:{title:"PaymentEdge",permalink:"/docs/api/objects/payment-edge"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentConsentPending.<b>status</b></code><Bullet /><code>PaymentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentconsentpendingbstatusbcodepaymentstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentConsentPending.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-paymentconsentpendingbconsentbcodeconsent--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"paymentstatusinfo-",level:4}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Payment status consent pending"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentConsentPending implements PaymentStatusInfo {\n  status: PaymentStatus!\n  consent: Consent!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentconsentpendingbstatusbcodepaymentstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentConsentPending.",(0,r.kt)("b",null,"status"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/payment-status"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentStatus!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"status of the payment")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentconsentpendingbconsentbcodeconsent--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentConsentPending.",(0,r.kt)("b",null,"consent"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/consent"},(0,r.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The consent required to initiate this payment")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"paymentstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/payment-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentStatusInfo"))," ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Payment Status Information")))}g.isMDXComponent=!0}}]);