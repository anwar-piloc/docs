"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51966],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return b}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(a),y=o,b=p["".concat(d,".").concat(y)]||p[y]||u[y]||r;return a?n.createElement(b,c(c({ref:t},s),{},{components:a})):n.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},88023:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return y},Bullet:function(){return p},SpecifiedBy:function(){return u},assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var n=a(83117),o=a(67294),r=a(3905);const c={id:"print-physical-card-payload",title:"PrintPhysicalCardPayload",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api/unions/print-physical-card-payload",id:"api/unions/print-physical-card-payload",title:"PrintPhysicalCardPayload",description:"No description",source:"@site/docs/api/unions/print-physical-card-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/print-physical-card-payload",permalink:"/docs/api/unions/print-physical-card-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/print-physical-card-payload.mdx",tags:[],version:"current",frontMatter:{id:"print-physical-card-payload",title:"PrintPhysicalCardPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardIndividualAccountHolderPayload",permalink:"/docs/api/unions/onboard-individual-account-holder-payload"},next:{title:"RefundPayload",permalink:"/docs/api/unions/refund-payload"}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>PrintPhysicalCardSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"printphysicalcardsuccesspayload-",level:4},{value:'<code>AccountMembershipNotAllowedRejection</code> <Badge class="secondary" text="object"/>',id:"accountmembershipnotallowedrejection-",level:4},{value:'<code>AlreadyValidPhysicalCardRejection</code> <Badge class="secondary" text="object"/>',id:"alreadyvalidphysicalcardrejection-",level:4},{value:'<code>BadAccountStatusRejection</code> <Badge class="secondary" text="object"/>',id:"badaccountstatusrejection-",level:4},{value:'<code>BadRequestRejection</code> <Badge class="secondary" text="object"/>',id:"badrequestrejection-",level:4},{value:'<code>CardNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"cardnotfoundrejection-",level:4},{value:'<code>CardProductNotApplicableToPhysicalCardsRejection</code> <Badge class="secondary" text="object"/>',id:"cardproductnotapplicabletophysicalcardsrejection-",level:4},{value:'<code>CardProductDisabledRejection</code> <Badge class="secondary" text="object"/>',id:"cardproductdisabledrejection-",level:4},{value:'<code>MissingMandatoryFieldRejection</code> <Badge class="secondary" text="object"/>',id:"missingmandatoryfieldrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:u,Badge:y},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union PrintPhysicalCardPayload = PrintPhysicalCardSuccessPayload | AccountMembershipNotAllowedRejection | AlreadyValidPhysicalCardRejection | BadAccountStatusRejection | BadRequestRejection | CardNotFoundRejection | CardProductNotApplicableToPhysicalCardsRejection | CardProductDisabledRejection | MissingMandatoryFieldRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"printphysicalcardsuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/print-physical-card-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"PrintPhysicalCardSuccessPayload"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountmembershipnotallowedrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/account-membership-not-allowed-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotAllowedRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Membership is not allowed to use an operation.")),(0,r.kt)("h4",{id:"alreadyvalidphysicalcardrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/already-valid-physical-card-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AlreadyValidPhysicalCardRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if card already has a valid Physical Card")),(0,r.kt)("h4",{id:"badaccountstatusrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/bad-account-status-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,r.kt)("h4",{id:"badrequestrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/bad-request-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"BadRequestRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"cardnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/card-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"CardNotFoundRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card was not found or if the user does not have the rights to know that the account exists")),(0,r.kt)("h4",{id:"cardproductnotapplicabletophysicalcardsrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/card-product-not-applicable-to-physical-cards-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"CardProductNotApplicableToPhysicalCardsRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is not applicable to physical card.")),(0,r.kt)("h4",{id:"cardproductdisabledrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/card-product-disabled-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"CardProductDisabledRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is disabled.")),(0,r.kt)("h4",{id:"missingmandatoryfieldrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/missing-mandatory-field-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"MissingMandatoryFieldRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when mandatory fields are missing from the call.")),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/print-physical-card"},(0,r.kt)("inlineCode",{parentName:"a"},"printPhysicalCard")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);