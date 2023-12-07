"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18681],{3905:(e,t,d)=>{d.d(t,{Zo:()=>l,kt:()=>y});var a=d(67294);function n(e,t,d){return t in e?Object.defineProperty(e,t,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[t]=d,e}function i(e,t){var d=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),d.push.apply(d,a)}return d}function r(e){for(var t=1;t<arguments.length;t++){var d=null!=arguments[t]?arguments[t]:{};t%2?i(Object(d),!0).forEach((function(t){n(e,t,d[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(d)):i(Object(d)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(d,t))}))}return e}function c(e,t){if(null==e)return{};var d,a,n=function(e,t){if(null==e)return{};var d,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)d=i[a],t.indexOf(d)>=0||(n[d]=e[d]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)d=i[a],t.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(e,d)&&(n[d]=e[d])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),d=t;return e&&(d="function"==typeof e?e(t):r(r({},t),e)),d},l=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var d=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(d),u=n,y=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return d?a.createElement(y,r(r({ref:t},l),{},{components:d})):a.createElement(y,r({ref:t},l))}));function y(e,t){var d=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=d.length,r=new Array(i);r[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[b]="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=d[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,d)}u.displayName="MDXCreateElement"},84380:(e,t,d)=>{d.r(t),d.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>b,assets:()=>s,contentTitle:()=>c,default:()=>v,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=d(87462),n=d(67294),i=d(3905);const r={id:"suspend-received-direct-debit-mandate-payload",title:"SuspendReceivedDirectDebitMandatePayload",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api-reference/unions/suspend-received-direct-debit-mandate-payload",id:"api-reference/unions/suspend-received-direct-debit-mandate-payload",title:"SuspendReceivedDirectDebitMandatePayload",description:"Union type returned by the suspendReceivedDirectDebitMandate mutation",source:"@site/docs/api-reference/unions/suspend-received-direct-debit-mandate-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/suspend-received-direct-debit-mandate-payload",permalink:"/api-reference/unions/suspend-received-direct-debit-mandate-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/suspend-received-direct-debit-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"suspend-received-direct-debit-mandate-payload",title:"SuspendReceivedDirectDebitMandatePayload",hide_table_of_contents:!1}},s={},l=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),u=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendReceivedDirectDebitMandatePayload.<b>SuspendReceivedDirectDebitMandateSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbsuspendreceiveddirectdebitmandatesuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendReceivedDirectDebitMandatePayload.<b>SuspendReceivedDirectDebitMandatedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbsuspendreceiveddirectdebitmandatedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendReceivedDirectDebitMandatePayload.<b>ReceivedDirectDebitMandateNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbreceiveddirectdebitmandatenotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendReceivedDirectDebitMandatePayload.<b>ReceivedDirectDebitMandateCanceledRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbreceiveddirectdebitmandatecanceledrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendReceivedDirectDebitMandatePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbforbiddenrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],y=e=>{let{dataOpen:t,dataClose:d,children:r,startOpen:c=!1}=e;const[o,s]=(0,n.useState)(c);return(0,i.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},o?t:d),o&&r)},m={Bullet:l,SpecifiedBy:b,Badge:p,toc:u,Details:y},f="wrapper";function v(e){let{components:t,...d}=e;return(0,i.kt)(f,(0,a.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Union type returned by the suspendReceivedDirectDebitMandate mutation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"union SuspendReceivedDirectDebitMandatePayload = SuspendReceivedDirectDebitMandateSuccessPayload | SuspendReceivedDirectDebitMandatedRejection | ReceivedDirectDebitMandateNotFoundRejection | ReceivedDirectDebitMandateCanceledRejection | ForbiddenRejection\n")),(0,i.kt)("h3",{id:"possible-types"},"Possible types"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbsuspendreceiveddirectdebitmandatesuccesspayloadbcode-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/suspend-received-direct-debit-mandate-success-payload"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandatePayload.",(0,i.kt)("b",null,"SuspendReceivedDirectDebitMandateSuccessPayload")))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Return type in case of a successful response of the suspendReceivedDirectDebitMandate mutation")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbsuspendreceiveddirectdebitmandatedrejectionbcode-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/suspend-received-direct-debit-mandated-rejection"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandatePayload.",(0,i.kt)("b",null,"SuspendReceivedDirectDebitMandatedRejection")))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Rejection returned if the SuspendReceivedDirectDebitMandatedRejection mutation is rejected")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbreceiveddirectdebitmandatenotfoundrejectionbcode-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/received-direct-debit-mandate-not-found-rejection"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandatePayload.",(0,i.kt)("b",null,"ReceivedDirectDebitMandateNotFoundRejection")))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Error returned if the received direct debit mandate was not found or if the user does not have the rights to receive information abo\nut the existence of the received direct debit mandate")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbreceiveddirectdebitmandatecanceledrejectionbcode-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/received-direct-debit-mandate-canceled-rejection"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandatePayload.",(0,i.kt)("b",null,"ReceivedDirectDebitMandateCanceledRejection")))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Received direct debit mandate is canceled and therefore can't be enabled/suspended or updated")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatepayloadbforbiddenrejectionbcode-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandatePayload.",(0,i.kt)("b",null,"ForbiddenRejection")))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/suspend-received-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"suspendReceivedDirectDebitMandate")),"  ",(0,i.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);