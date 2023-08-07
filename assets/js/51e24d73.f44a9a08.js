"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[24564],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(a),g=r,f=s["".concat(i,".").concat(g)]||s[g]||m[g]||d;return a?n.createElement(f,c(c({ref:t},l),{},{components:a})):n.createElement(f,c({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,c=new Array(d);c[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:r,c[1]=o;for(var p=2;p<d;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},91879:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=a(83117),r=a(67294),d=a(3905);const c={id:"edge",title:"Edge",hide_table_of_contents:!1},o=void 0,i={unversionedId:"api-reference/interfaces/edge",id:"api-reference/interfaces/edge",title:"Edge",description:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL",source:"@site/docs/api-reference/interfaces/edge.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/edge",permalink:"/api-reference/interfaces/edge",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/edge.mdx",tags:[],version:"current",frontMatter:{id:"edge",title:"Edge",hide_table_of_contents:!1}},p={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Edge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-edgebcursorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],s=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:s,SpecifiedBy:m,Badge:g},y="wrapper";function u(e){let{components:t,...a}=e;return(0,d.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Edge {\n  cursor: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-edgebcursorbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Edge.",(0,d.kt)("b",null,"cursor"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Opaque identifier pointing to this node in the pagination mechanism")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/interfaces/connection"},(0,d.kt)("inlineCode",{parentName:"a"},"Connection")),"  ",(0,d.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/account-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"AccountEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"AccountHolderEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"AccountMembershipEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/card-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"CardEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/consent-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"ConsentEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"DigitalCardEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/external-account-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"ExternalAccountEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/external-balance-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"ExternalBalanceEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-source-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"FundingSourceEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/invoice-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"InvoiceEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/legal-document-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"LegalDocumentEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/merchant-profile-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"MerchantProfileEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"OnboardingEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/payment-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"PaymentEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/payment-mandate-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"PaymentMandateEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/received-direct-debit-mandate-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"StandingOrderEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/statement-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"StatementEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/transaction-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"TransactionEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/user-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"UserEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/virtual-ibanentry-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntryEdge")),"  ",(0,d.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);