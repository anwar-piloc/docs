"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[58299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=o(a),f=r,u=l["".concat(i,".").concat(f)]||l[f]||m[f]||c;return a?n.createElement(u,d(d({ref:t},s),{},{components:a})):n.createElement(u,d({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,d=new Array(c);d[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:r,d[1]=p;for(var o=2;o<c;o++)d[o]=a[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85554:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>l,SpecifiedBy:()=>m,assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var n=a(83117),r=a(67294),c=a(3905);const d={id:"date",title:"Date",hide_table_of_contents:!1},p=void 0,i={unversionedId:"api-reference/scalars/date",id:"api-reference/scalars/date",title:"Date",description:"Date with YYYY-MM-DD format",source:"@site/docs/api-reference/scalars/date.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/date",permalink:"/docs/api-reference/scalars/date",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/date.mdx",tags:[],version:"current",frontMatter:{id:"date",title:"Date",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DateTime",permalink:"/docs/api-reference/scalars/date-time"},next:{title:"EmailAddress",permalink:"/docs/api-reference/scalars/email-address"}},o={},s=[{value:"Member of",id:"member-of",level:3}],l=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:l,SpecifiedBy:m,Badge:f},y="wrapper";function k(e){let{components:t,...a}=e;return(0,c.kt)(y,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Date with YYYY-MM-DD format"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Date\n")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-company-info"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountHolderCompanyInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-internal-direct-debit-payment-mandate-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandateInput")),"  ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-received-sepa-direct-debit-b2-b-mandate-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AddReceivedSepaDirectDebitB2bMandateInput")),"  ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-funding-source-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"CanceledFundingSourceStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-merchant-payment-method-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentMethodStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-merchant-profile-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"CanceledMerchantProfileStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document"},(0,c.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocument")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/check-merchant-payment-method"},(0,c.kt)("inlineCode",{parentName:"a"},"CheckMerchantPaymentMethod")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/check-merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"CheckMerchantPaymentProduct")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/disabled-merchant-payment-method-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"DisabledMerchantPaymentMethodStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/disabled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"DisabledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/enabled-funding-source-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"EnabledFundingSourceStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/enabled-merchant-payment-method-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"EnabledMerchantPaymentMethodStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/enabled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"EnabledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/enabled-merchant-profile-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"EnabledMerchantProfileStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequest")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitB2BMerchantPaymentMethod")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitMerchantPaymentProduct")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-standard-merchant-payment-method"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitStandardMerchantPaymentMethod")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-payment-direct-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalPaymentDirectDebitMandate")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-received-direct-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalReceivedDirectDebitMandate")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/merchant-payment-method"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethod")),"  ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProduct")),"  ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/received-direct-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandate")),"  ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-funding-source-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"RejectedFundingSourceStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-merchant-payment-method-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"RejectedMerchantPaymentMethodStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"RejectedMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-merchant-profile-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"RejectedMerchantProfileStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/report-exchange-rate"},(0,c.kt)("inlineCode",{parentName:"a"},"ReportExchangeRate")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/restricted-to"},(0,c.kt)("inlineCode",{parentName:"a"},"RestrictedTo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/restricted-to-input"},(0,c.kt)("inlineCode",{parentName:"a"},"RestrictedToInput")),"  ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepapayment-direct-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPAPaymentDirectDebitMandate")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/separeceived-direct-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPAReceivedDirectDebitMandate")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order"},(0,c.kt)("inlineCode",{parentName:"a"},"StandingOrder")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order-canceled-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"StandingOrderCanceledStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/suspended-funding-source-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SuspendedFundingSourceStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/suspended-merchant-payment-method-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantPaymentMethodStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/suspended-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/suspended-merchant-profile-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantProfileStatusInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/ultimate-beneficial-direct-owner-individual-info"},(0,c.kt)("inlineCode",{parentName:"a"},"UltimateBeneficialDirectOwnerIndividualInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/ultimate-beneficial-indirect-owner-individual-info"},(0,c.kt)("inlineCode",{parentName:"a"},"UltimateBeneficialIndirectOwnerIndividualInfo")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/updated-restricted-to-input"},(0,c.kt)("inlineCode",{parentName:"a"},"UpdatedRestrictedToInput")),"  ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/user"},(0,c.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/user-filter-input"},(0,c.kt)("inlineCode",{parentName:"a"},"UserFilterInput")),"  ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);