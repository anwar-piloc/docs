"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[68072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return n?a.createElement(m,d(d({ref:t},s),{},{components:n})):a.createElement(m,d({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[b]="string"==typeof e?e:r,d[1]=c;for(var l=2;l<i;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31825:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>b,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var a=n(83117),r=n(67294),i=n(3905);const d={id:"enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api-reference/unions/enable-received-direct-debit-mandate-payload",id:"api-reference/unions/enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload",description:"Union type return by the enableReceivedDirectDebitMandate mutation",source:"@site/docs/api-reference/unions/enable-received-direct-debit-mandate-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/enable-received-direct-debit-mandate-payload",permalink:"/api-reference/unions/enable-received-direct-debit-mandate-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/enable-received-direct-debit-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload",hide_table_of_contents:!1}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>EnableReceivedDirectDebitMandateSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"enablereceiveddirectdebitmandatesuccesspayload-",level:4},{value:'<code>ReceivedDirectDebitMandateNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"receiveddirectdebitmandatenotfoundrejection-",level:4},{value:'<code>ReceivedDirectDebitMandateCanceledRejection</code> <Badge class="secondary" text="object"/>',id:"receiveddirectdebitmandatecanceledrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:b,SpecifiedBy:p,Badge:u},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Union type return by the enableReceivedDirectDebitMandate mutation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"union EnableReceivedDirectDebitMandatePayload = EnableReceivedDirectDebitMandateSuccessPayload | ReceivedDirectDebitMandateNotFoundRejection | ReceivedDirectDebitMandateCanceledRejection | ForbiddenRejection\n")),(0,i.kt)("h3",{id:"possible-types"},"Possible types"),(0,i.kt)("h4",{id:"enablereceiveddirectdebitmandatesuccesspayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/enable-received-direct-debit-mandate-success-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"EnableReceivedDirectDebitMandateSuccessPayload"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Return type in case of a successful response of the enableReceivedDirectDebitMandate mutation")),(0,i.kt)("h4",{id:"receiveddirectdebitmandatenotfoundrejection-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/received-direct-debit-mandate-not-found-rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateNotFoundRejection"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Error returned if the received direct debit mandate was not found or if the user does not have the rights to receive information abo\nut the existence of the received direct debit mandate")),(0,i.kt)("h4",{id:"receiveddirectdebitmandatecanceledrejection-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/received-direct-debit-mandate-canceled-rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateCanceledRejection"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Received direct debit mandate is canceled and therefore can't be enabled/suspended or updated")),(0,i.kt)("h4",{id:"forbiddenrejection-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/enable-received-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"enableReceivedDirectDebitMandate")),"  ",(0,i.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);