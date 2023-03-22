"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20177],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(a),g=r,u=s["".concat(c,".").concat(g)]||s[g]||m[g]||o;return a?n.createElement(u,d(d({ref:t},l),{},{components:a})):n.createElement(u,d({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,d[1]=i;for(var p=2;p<o;p++)d[p]=a[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},97335:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return g},Bullet:function(){return s},SpecifiedBy:function(){return m},assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return l}});var n=a(83117),r=a(67294),o=a(3905);const d={id:"edge",title:"Edge",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/interfaces/edge",id:"api/interfaces/edge",title:"Edge",description:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL",source:"@site/docs/api/interfaces/edge.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/edge",permalink:"/docs/api/interfaces/edge",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/edge.mdx",tags:[],version:"current",frontMatter:{id:"edge",title:"Edge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DigitalCard",permalink:"/docs/api/interfaces/digital-card"},next:{title:"FeeCreditor",permalink:"/docs/api/interfaces/fee-creditor"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Edge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-edgebcursorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:l,Bullet:s,SpecifiedBy:m,Badge:g},y="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Edge {\n  cursor: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-edgebcursorbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Edge.",(0,o.kt)("b",null,"cursor"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Opaque identifier pointing to this node in the pagination mechanism")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/connection"},(0,o.kt)("inlineCode",{parentName:"a"},"Connection")),"  ",(0,o.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/account-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/account-holder-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountHolderEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/account-membership-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/capital-deposit-case-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/card-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"CardEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/consent-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"ConsentEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/digital-card-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"DigitalCardEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/external-account-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"ExternalAccountEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/external-balance-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"ExternalBalanceEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/funding-limit-settings-change-request-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/funding-source-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"FundingSourceEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/invoice-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"InvoiceEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/merchant-profile-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/onboarding-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment-mandate-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandateEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/received-direct-debit-mandate-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/standing-order-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/statement-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"StatementEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/transaction-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/virtual-ibanentry-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntryEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);