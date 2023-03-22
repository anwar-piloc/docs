"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21256],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return n?a.createElement(m,d(d({ref:t},s),{},{components:n})):a.createElement(m,d({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:i,d[1]=c;for(var l=2;l<r;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76162:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return p},Bullet:function(){return u},SpecifiedBy:function(){return b},assets:function(){return l},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return s}});var a=n(83117),i=n(67294),r=n(3905);const d={id:"enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api/unions/enable-received-direct-debit-mandate-payload",id:"api/unions/enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload",description:"Union type return by the enableReceivedDirectDebitMandate mutation",source:"@site/docs/api/unions/enable-received-direct-debit-mandate-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/enable-received-direct-debit-mandate-payload",permalink:"/docs/api/unions/enable-received-direct-debit-mandate-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/enable-received-direct-debit-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DisableAccountMembershipPayload",permalink:"/docs/api/unions/disable-account-membership-payload"},next:{title:"FinalizeOnboardingPayload",permalink:"/docs/api/unions/finalize-onboarding-payload"}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>EnableReceivedDirectDebitMandateSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"enablereceiveddirectdebitmandatesuccesspayload-",level:4},{value:'<code>ReceivedDirectDebitMandateNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"receiveddirectdebitmandatenotfoundrejection-",level:4},{value:'<code>ReceivedDirectDebitMandateCanceledRejection</code> <Badge class="secondary" text="object"/>',id:"receiveddirectdebitmandatecanceledrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:b,Badge:p},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Union type return by the enableReceivedDirectDebitMandate mutation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union EnableReceivedDirectDebitMandatePayload = EnableReceivedDirectDebitMandateSuccessPayload | ReceivedDirectDebitMandateNotFoundRejection | ReceivedDirectDebitMandateCanceledRejection | ForbiddenRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"enablereceiveddirectdebitmandatesuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/enable-received-direct-debit-mandate-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"EnableReceivedDirectDebitMandateSuccessPayload"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Return type in case of a successful response of the enableReceivedDirectDebitMandate mutation")),(0,r.kt)("h4",{id:"receiveddirectdebitmandatenotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/received-direct-debit-mandate-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateNotFoundRejection"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error returned if the received direct debit mandate was not found or if the user does not have the rights to receive information abo\nut the existence of the received direct debit mandate")),(0,r.kt)("h4",{id:"receiveddirectdebitmandatecanceledrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/received-direct-debit-mandate-canceled-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateCanceledRejection"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Received direct debit mandate is canceled and therefore can't be enabled/suspended or updated")),(0,r.kt)("h4",{id:"forbiddenrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/enable-received-direct-debit-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"enableReceivedDirectDebitMandate")),"  ",(0,r.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);