"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43637],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||s;return n?a.createElement(f,r(r({ref:t},l),{},{components:n})):a.createElement(f,r({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81399:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return p},Bullet:function(){return u},SpecifiedBy:function(){return m},assets:function(){return d},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return l}});var a=n(83117),o=n(67294),s=n(3905);const r={id:"payment-mandate-consent-pending-status-info",title:"PaymentMandateConsentPendingStatusInfo",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/objects/payment-mandate-consent-pending-status-info",id:"api/objects/payment-mandate-consent-pending-status-info",title:"PaymentMandateConsentPendingStatusInfo",description:"Payment Mandate Consent Pending status information",source:"@site/docs/api/objects/payment-mandate-consent-pending-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/payment-mandate-consent-pending-status-info",permalink:"/docs/api/objects/payment-mandate-consent-pending-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/payment-mandate-consent-pending-status-info.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-consent-pending-status-info",title:"PaymentMandateConsentPendingStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentMandateConnection",permalink:"/docs/api/objects/payment-mandate-connection"},next:{title:"PaymentMandateEdge",permalink:"/docs/api/objects/payment-mandate-edge"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateConsentPendingStatusInfo.<b>status</b></code><Bullet /><code>PaymentMandateStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentmandateconsentpendingstatusinfobstatusbcodepaymentmandatestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateConsentPendingStatusInfo.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-paymentmandateconsentpendingstatusinfobconsentbcodeconsent--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentMandateStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"paymentmandatestatusinfo-",level:4}],u=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:u,SpecifiedBy:m,Badge:p},y="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Payment Mandate Consent Pending status information"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentMandateConsentPendingStatusInfo implements PaymentMandateStatusInfo {\n  status: PaymentMandateStatus!\n  consent: Consent!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateconsentpendingstatusinfobstatusbcodepaymentmandatestatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateConsentPendingStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/enums/payment-mandate-status"},(0,s.kt)("inlineCode",{parentName:"a"},"PaymentMandateStatus!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Payment Mandate status (always Enabled for type PaymentMandateEnableedStatusInfo).")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateconsentpendingstatusinfobconsentbcodeconsent--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateConsentPendingStatusInfo.",(0,s.kt)("b",null,"consent"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/consent"},(0,s.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Consent information required to enable the concerned Payment Mandate")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"paymentmandatestatusinfo-"},(0,s.kt)("a",{parentName:"h4",href:"/api/interfaces/payment-mandate-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PaymentMandateStatusInfo"))," ",(0,s.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Payment Mandate status information")))}g.isMDXComponent=!0}}]);