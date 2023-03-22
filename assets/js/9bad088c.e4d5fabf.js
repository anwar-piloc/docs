"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[32380],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(a),u=o,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78654:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return u},Bullet:function(){return m},SpecifiedBy:function(){return p},assets:function(){return i},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var n=a(83117),o=a(67294),r=a(3905);const l={id:"merchant-profile",title:"MerchantProfile",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api/objects/merchant-profile",id:"api/objects/merchant-profile",title:"MerchantProfile",description:"Merchant Profile",source:"@site/docs/api/objects/merchant-profile.mdx",sourceDirName:"api/objects",slug:"/api/objects/merchant-profile",permalink:"/docs/api/objects/merchant-profile",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/merchant-profile.mdx",tags:[],version:"current",frontMatter:{id:"merchant-profile",title:"MerchantProfile",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MerchantProfileWrongStatusRejection",permalink:"/docs/api/objects/merchant-profile-wrong-status-rejection"},next:{title:"MissingMandatoryFieldRejection",permalink:"/docs/api/objects/missing-mandatory-field-rejection"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>merchantName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebmerchantnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>merchantWebsite</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebmerchantwebsitebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>statusInfo</b></code><Bullet /><code>MerchantProfileStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-merchantprofilebstatusinfobcodemerchantprofilestatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>productType</b></code><Bullet /><code>ProductType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantprofilebproducttypebcodeproducttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>expectedMonthlyPaymentVolume</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantprofilebexpectedmonthlypaymentvolumebcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>merchantPaymentProducts</b></code><Bullet /><code>[MerchantPaymentProduct!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-merchantprofilebmerchantpaymentproductsbcodemerchantpaymentproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>expectedAverageBasket</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantprofilebexpectedaveragebasketbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebupdatedatbcodedatetime--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:m,SpecifiedBy:p,Badge:u},h="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Merchant Profile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MerchantProfile {\n  id: ID!\n  accountId: ID!\n  merchantName: String!\n  merchantWebsite: String\n  statusInfo: MerchantProfileStatusInfo!\n  productType: ProductType!\n  expectedMonthlyPaymentVolume: Amount!\n  merchantPaymentProducts: [MerchantPaymentProduct!]\n  expectedAverageBasket: Amount!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Merchant Profile ID")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebaccountidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"accountId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Account ID this Merchant Profile is linked to")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebmerchantnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"merchantName"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Business name of the merchant, i.e. name that will be displayed on debtors' bank statements")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebmerchantwebsitebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"merchantWebsite"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Url of the merchant's website")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebstatusinfobcodemerchantprofilestatusinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"statusInfo"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/merchant-profile-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"MerchantProfileStatusInfo!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The status of the merchant profile")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebproducttypebcodeproducttype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"productType"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/product-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductType!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Type of product sold. List of value: Goods, Services, VirtualGoods, GiftsAndDonations. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebexpectedmonthlypaymentvolumebcodeamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"expectedMonthlyPaymentVolume"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Expected annual activity volumes for all payment method")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebmerchantpaymentproductsbcodemerchantpaymentproduct--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"merchantPaymentProducts"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/merchant-payment-product"},(0,r.kt)("inlineCode",{parentName:"a"},"[MerchantPaymentProduct!]"))," ",(0,r.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Payment Products associated")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebexpectedaveragebasketbcodeamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"expectedAverageBasket"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"expected average basket value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebcreatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"created date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebupdatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"updated date")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/queries/merchant-profile"},(0,r.kt)("inlineCode",{parentName:"a"},"merchantProfile")),"  ",(0,r.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/add-merchant-profile-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddMerchantProfileSuccessPayload")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/merchant-profile-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"MerchantProfileEdge")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/request-merchant-payment-products-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentProductsSuccessPayload")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);