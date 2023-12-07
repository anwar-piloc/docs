"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41832],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>b});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=a.createContext({}),i=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(o),y=n,b=p["".concat(d,".").concat(y)]||p[y]||s[y]||r;return o?a.createElement(b,c(c({ref:t},u),{},{components:o})):a.createElement(b,c({ref:t},u))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,c=new Array(r);c[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=o[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,o)}y.displayName="MDXCreateElement"},16764:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>s,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>y});var a=o(87462),n=o(67294),r=o(3905);const c={id:"update-account-holder-payload",title:"UpdateAccountHolderPayload",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/unions/update-account-holder-payload",id:"api-reference/unions/update-account-holder-payload",title:"UpdateAccountHolderPayload",description:"No description",source:"@site/docs/api-reference/unions/update-account-holder-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/update-account-holder-payload",permalink:"/api-reference/unions/update-account-holder-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/update-account-holder-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-account-holder-payload",title:"UpdateAccountHolderPayload",hide_table_of_contents:!1}},i={},u=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),y=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateAccountHolderPayload.<b>UpdateAccountHolderSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-updateaccountholderpayloadbupdateaccountholdersuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateAccountHolderPayload.<b>AccountHolderNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-updateaccountholderpayloadbaccountholdernotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateAccountHolderPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-updateaccountholderpayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:o,children:c,startOpen:l=!1}=e;const[d,i]=(0,n.useState)(l);return(0,r.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:o),d&&c)},f={Bullet:u,SpecifiedBy:p,Badge:s,toc:y,Details:b},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union UpdateAccountHolderPayload = UpdateAccountHolderSuccessPayload | AccountHolderNotFoundRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateaccountholderpayloadbupdateaccountholdersuccesspayloadbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/update-account-holder-success-payload"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateAccountHolderPayload.",(0,r.kt)("b",null,"UpdateAccountHolderSuccessPayload")))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateaccountholderpayloadbaccountholdernotfoundrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder-not-found-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateAccountHolderPayload.",(0,r.kt)("b",null,"AccountHolderNotFoundRejection")))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Holder was not found")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateaccountholderpayloadbvalidationrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateAccountHolderPayload.",(0,r.kt)("b",null,"ValidationRejection")))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/update-account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"updateAccountHolder")),"  ",(0,r.kt)(s,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);