"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,b=u["".concat(l,".").concat(y)]||u[y]||p[y]||o;return n?a.createElement(b,c(c({ref:t},d),{},{components:n})):a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},92739:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const c={id:"cancel-virtual-iban-entry-payload",title:"CancelVirtualIbanEntryPayload",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/unions/cancel-virtual-iban-entry-payload",id:"api-reference/unions/cancel-virtual-iban-entry-payload",title:"CancelVirtualIbanEntryPayload",description:"No description",source:"@site/docs/api-reference/unions/cancel-virtual-iban-entry-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/cancel-virtual-iban-entry-payload",permalink:"/api-reference/unions/cancel-virtual-iban-entry-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/cancel-virtual-iban-entry-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-virtual-iban-entry-payload",title:"CancelVirtualIbanEntryPayload",hide_table_of_contents:!1}},s={},d=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>CancelVirtualIbanEntrySuccessPayload</code> <Badge class="secondary" text="object"/>',id:"cancelvirtualibanentrysuccesspayload-",level:4},{value:'<code>AccountNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountnotfoundrejection-",level:4},{value:'<code>BadAccountStatusRejection</code> <Badge class="secondary" text="object"/>',id:"badaccountstatusrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:u,SpecifiedBy:p,Badge:y},f="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union CancelVirtualIbanEntryPayload = CancelVirtualIbanEntrySuccessPayload | AccountNotFoundRejection | BadAccountStatusRejection | InternalErrorRejection | ValidationRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"cancelvirtualibanentrysuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/cancel-virtual-iban-entry-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelVirtualIbanEntrySuccessPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"accountnotfoundrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-not-found-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountNotFoundRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists")),(0,o.kt)("h4",{id:"badaccountstatusrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/bad-account-status-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,o.kt)("h4",{id:"internalerrorrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-error-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,o.kt)("h4",{id:"validationrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/cancel-virtual-iban-entry"},(0,o.kt)("inlineCode",{parentName:"a"},"cancelVirtualIbanEntry")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);