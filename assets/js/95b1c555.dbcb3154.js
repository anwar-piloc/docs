"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49532],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),y=o,f=u["".concat(d,".").concat(y)]||u[y]||p[y]||r;return n?a.createElement(f,c(c({ref:t},s),{},{components:n})):a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},48247:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var a=n(83117),o=n(67294),r=n(3905);const c={id:"add-external-account-payload",title:"AddExternalAccountPayload",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api/unions/add-external-account-payload",id:"api/unions/add-external-account-payload",title:"AddExternalAccountPayload",description:"No description",source:"@site/docs/api/unions/add-external-account-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/add-external-account-payload",permalink:"/docs/api/unions/add-external-account-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/add-external-account-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-external-account-payload",title:"AddExternalAccountPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddExternalAccountBalancePayload",permalink:"/docs/api/unions/add-external-account-balance-payload"},next:{title:"AddFundingLimitSettingsChangeRequestPayload",permalink:"/docs/api/unions/add-funding-limit-settings-change-request-payload"}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddExternalAccountSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addexternalaccountsuccesspayload-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:'<code>IbanValidationRejection</code> <Badge class="secondary" text="object"/>',id:"ibanvalidationrejection-",level:4},{value:'<code>ExternalAccountAlreadyExistsRejection</code> <Badge class="secondary" text="object"/>',id:"externalaccountalreadyexistsrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:u,SpecifiedBy:p,Badge:y},b="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddExternalAccountPayload = AddExternalAccountSuccessPayload | ValidationRejection | IbanValidationRejection | ExternalAccountAlreadyExistsRejection | ForbiddenRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"addexternalaccountsuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/add-external-account-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddExternalAccountSuccessPayload"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h4",{id:"ibanvalidationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/iban-validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"IbanValidationRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"externalaccountalreadyexistsrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/external-account-already-exists-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ExternalAccountAlreadyExistsRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"forbiddenrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/add-external-account"},(0,r.kt)("inlineCode",{parentName:"a"},"addExternalAccount")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);