"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75873],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),y=r,b=u["".concat(c,".").concat(y)]||u[y]||p[y]||o;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},34413:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var a=n(83117),r=n(67294),o=n(3905);const i={id:"allow-sdd-virtual-iban-entry-payload",title:"AllowSddVirtualIbanEntryPayload",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api/unions/allow-sdd-virtual-iban-entry-payload",id:"api/unions/allow-sdd-virtual-iban-entry-payload",title:"AllowSddVirtualIbanEntryPayload",description:"No description",source:"@site/docs/api/unions/allow-sdd-virtual-iban-entry-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/allow-sdd-virtual-iban-entry-payload",permalink:"/docs/api/unions/allow-sdd-virtual-iban-entry-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/allow-sdd-virtual-iban-entry-payload.mdx",tags:[],version:"current",frontMatter:{id:"allow-sdd-virtual-iban-entry-payload",title:"AllowSddVirtualIbanEntryPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AllowSddPayload",permalink:"/docs/api/unions/allow-sdd-payload"},next:{title:"BindAccountMembershipPayload",permalink:"/docs/api/unions/bind-account-membership-payload"}},d={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AllowSddVirtualIbanEntrySuccessPayload</code> <Badge class="secondary" text="object"/>',id:"allowsddvirtualibanentrysuccesspayload-",level:4},{value:'<code>BadAccountStatusRejection</code> <Badge class="secondary" text="object"/>',id:"badaccountstatusrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:u,SpecifiedBy:p,Badge:y},f="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union AllowSddVirtualIbanEntryPayload = AllowSddVirtualIbanEntrySuccessPayload | BadAccountStatusRejection | ValidationRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"allowsddvirtualibanentrysuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/allow-sdd-virtual-iban-entry-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AllowSddVirtualIbanEntrySuccessPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"badaccountstatusrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/bad-account-status-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,o.kt)("h4",{id:"validationrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/mutations/allow-sdd-virtual-iban-entry"},(0,o.kt)("inlineCode",{parentName:"a"},"allowSddVirtualIbanEntry")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);