"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6734],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||c;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<c;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},89664:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return d},SpecifiedBy:function(){return p},assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var o=n(83117),a=n(67294),c=n(3905);const r={id:"close-account-payload",title:"CloseAccountPayload",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api/unions/close-account-payload",id:"api/unions/close-account-payload",title:"CloseAccountPayload",description:"No description",source:"@site/docs/api/unions/close-account-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/close-account-payload",permalink:"/docs/api/unions/close-account-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/close-account-payload.mdx",tags:[],version:"current",frontMatter:{id:"close-account-payload",title:"CloseAccountPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelVirtualIbanEntryPayload",permalink:"/docs/api/unions/cancel-virtual-iban-entry-payload"},next:{title:"CloseAccountStatusReason",permalink:"/docs/api/unions/close-account-status-reason"}},s={},u=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>CloseAccountSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"closeaccountsuccesspayload-",level:4},{value:'<code>AccountNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountnotfoundrejection-",level:4},{value:'<code>BadAccountStatusRejection</code> <Badge class="secondary" text="object"/>',id:"badaccountstatusrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],d=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:d,SpecifiedBy:p,Badge:y},b="wrapper";function m(e){let{components:t,...n}=e;return(0,c.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"union CloseAccountPayload = CloseAccountSuccessPayload | AccountNotFoundRejection | BadAccountStatusRejection | ForbiddenRejection | InternalErrorRejection | ValidationRejection\n")),(0,c.kt)("h3",{id:"possible-types"},"Possible types"),(0,c.kt)("h4",{id:"closeaccountsuccesspayload-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/close-account-success-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CloseAccountSuccessPayload"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"accountnotfoundrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/account-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountNotFoundRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists")),(0,c.kt)("h4",{id:"badaccountstatusrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/bad-account-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,c.kt)("h4",{id:"forbiddenrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"internalerrorrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/internal-error-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,c.kt)("h4",{id:"validationrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,c.kt)("h3",{id:"returned-by"},"Returned by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/mutations/close-account"},(0,c.kt)("inlineCode",{parentName:"a"},"closeAccount")),"  ",(0,c.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);