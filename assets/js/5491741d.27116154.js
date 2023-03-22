"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[12121],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,y=s["".concat(u,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49525:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return s},SpecifiedBy:function(){return p},assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(83117),a=n(67294),o=n(3905);const i={id:"refund-payload",title:"RefundPayload",hide_table_of_contents:!1},c=void 0,u={unversionedId:"api/unions/refund-payload",id:"api/unions/refund-payload",title:"RefundPayload",description:"The respond body to a refund mutation",source:"@site/docs/api/unions/refund-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/refund-payload",permalink:"/docs/api/unions/refund-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/refund-payload.mdx",tags:[],version:"current",frontMatter:{id:"refund-payload",title:"RefundPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PrintPhysicalCardPayload",permalink:"/docs/api/unions/print-physical-card-payload"},next:{title:"RequestMerchantPaymentProductsPayload",permalink:"/docs/api/unions/request-merchant-payment-products-payload"}},d={},l=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>RefundSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"refundsuccesspayload-",level:4},{value:'<code>RefundRejection</code> <Badge class="secondary" text="object"/>',id:"refundrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:l,Bullet:s,SpecifiedBy:p,Badge:f},m="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The respond body to a refund mutation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union RefundPayload = RefundSuccessPayload | RefundRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"refundsuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/refund-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RefundSuccessPayload"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Consent generated by the refund mutation")),(0,o.kt)("h4",{id:"refundrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/refund-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"RefundRejection"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the transaction status is not correct for the desired action")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/mutations/refund"},(0,o.kt)("inlineCode",{parentName:"a"},"refund")),"  ",(0,o.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);