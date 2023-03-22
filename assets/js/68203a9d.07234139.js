"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[83552],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(y,d(d({ref:t},s),{},{components:n})):a.createElement(y,d({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,d[1]=c;for(var l=2;l<o;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28206:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return s}});var a=n(83117),r=n(67294),o=n(3905);const d={id:"add-internal-direct-debit-payment-mandate-payload",title:"AddInternalDirectDebitPaymentMandatePayload",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api/unions/add-internal-direct-debit-payment-mandate-payload",id:"api/unions/add-internal-direct-debit-payment-mandate-payload",title:"AddInternalDirectDebitPaymentMandatePayload",description:"Union type return by the addInternalDirectDebitPaymentMandate mutation",source:"@site/docs/api/unions/add-internal-direct-debit-payment-mandate-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/add-internal-direct-debit-payment-mandate-payload",permalink:"/docs/api/unions/add-internal-direct-debit-payment-mandate-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/add-internal-direct-debit-payment-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-internal-direct-debit-payment-mandate-payload",title:"AddInternalDirectDebitPaymentMandatePayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddFundingLimitSettingsChangeRequestPayload",permalink:"/docs/api/unions/add-funding-limit-settings-change-request-payload"},next:{title:"AddMerchantProfilePayload",permalink:"/docs/api/unions/add-merchant-profile-payload"}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddInternalDirectDebitPaymentMandateSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addinternaldirectdebitpaymentmandatesuccesspayload-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>NotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"notfoundrejection-",level:4},{value:'<code>DebtorAccountNotAllowedRejection</code> <Badge class="secondary" text="object"/>',id:"debtoraccountnotallowedrejection-",level:4},{value:'<code>DebtorAccountClosedRejection</code> <Badge class="secondary" text="object"/>',id:"debtoraccountclosedrejection-",level:4},{value:'<code>SchemeWrongRejection</code> <Badge class="secondary" text="object"/>',id:"schemewrongrejection-",level:4},{value:'<code>PaymentMandateReferenceAlreadyUsedRejection</code> <Badge class="secondary" text="object"/>',id:"paymentmandatereferencealreadyusedrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:p,Badge:m},b="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Union type return by the addInternalDirectDebitPaymentMandate mutation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddInternalDirectDebitPaymentMandatePayload = AddInternalDirectDebitPaymentMandateSuccessPayload | ForbiddenRejection | NotFoundRejection | DebtorAccountNotAllowedRejection | DebtorAccountClosedRejection | SchemeWrongRejection | PaymentMandateReferenceAlreadyUsedRejection | InternalErrorRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"addinternaldirectdebitpaymentmandatesuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/add-internal-direct-debit-payment-mandate-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandateSuccessPayload"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return type in case of a successful response of the addInternalDirectDebitPaymentMandate mutation")),(0,o.kt)("h4",{id:"forbiddenrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"notfoundrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/not-found-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"NotFoundRejection"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists")),(0,o.kt)("h4",{id:"debtoraccountnotallowedrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/debtor-account-not-allowed-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"DebtorAccountNotAllowedRejection"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Debtor does not belong to the same project as the creditor")),(0,o.kt)("h4",{id:"debtoraccountclosedrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/debtor-account-closed-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"DebtorAccountClosedRejection"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Debtor is closed")),(0,o.kt)("h4",{id:"schemewrongrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/scheme-wrong-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"SchemeWrongRejection"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when adding a B2B mandate with an Individual debtor")),(0,o.kt)("h4",{id:"paymentmandatereferencealreadyusedrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/payment-mandate-reference-already-used-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandateReferenceAlreadyUsedRejection"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when a payment mandate reference is already for a creditor")),(0,o.kt)("h4",{id:"internalerrorrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/internal-error-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/mutations/add-internal-direct-debit-payment-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"addInternalDirectDebitPaymentMandate")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);