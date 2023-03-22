"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79992],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(g,d(d({ref:t},s),{},{components:n})):a.createElement(g,d({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var i=2;i<o;i++)d[i]=n[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37496:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return p},Bullet:function(){return m},SpecifiedBy:function(){return u},assets:function(){return i},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return s}});var a=n(83117),r=n(67294),o=n(3905);const d={id:"standing-order",title:"StandingOrder",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api/objects/standing-order",id:"api/objects/standing-order",title:"StandingOrder",description:"No description",source:"@site/docs/api/objects/standing-order.mdx",sourceDirName:"api/objects",slug:"/api/objects/standing-order",permalink:"/docs/api/objects/standing-order",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/standing-order.mdx",tags:[],version:"current",frontMatter:{id:"standing-order",title:"StandingOrder",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StandingOrderNotFoundRejection",permalink:"/docs/api/objects/standing-order-not-found-rejection"},next:{title:"StatementConnection",permalink:"/docs/api/objects/statement-connection"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>reference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderbreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>amount</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderbamountbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>targetAvailableBalance</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderbtargetavailablebalancebcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>period</b></code><Bullet /><code>StandingOrderPeriod!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-standingorderbperiodbcodestandingorderperiod--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>firstExecutionDate</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderbfirstexecutiondatebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>lastExecutionDate</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderblastexecutiondatebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>sepaBeneficiary</b></code><Bullet /><code>SEPABeneficiary!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderbsepabeneficiarybcodesepabeneficiary--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>statusInfo</b></code><Bullet /><code>StandingOrderStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-standingorderbstatusinfobcodestandingorderstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderbcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>account</b></code><Bullet /><code>Account!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderbaccountbcodeaccount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>nextExecutionDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderbnextexecutiondatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.<b>payments</b></code><Bullet /><code>PaymentConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderbpaymentsbcodepaymentconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.payments.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderpaymentsboffsetbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.payments.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderpaymentsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.payments.<b>orderBy</b></code><Bullet /><code>PaymentOrderByInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-standingorderpaymentsborderbybcodepaymentorderbyinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrder.payments.<b>filters</b></code><Bullet /><code>PaymentFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-standingorderpaymentsbfiltersbcodepaymentfiltersinput-",level:5},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:m,SpecifiedBy:u,Badge:p},y="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StandingOrder {\n  id: ID!\n  reference: String\n  label: String\n  amount: Amount\n  targetAvailableBalance: Amount\n  period: StandingOrderPeriod!\n  firstExecutionDate: DateTime\n  lastExecutionDate: DateTime\n  sepaBeneficiary: SEPABeneficiary!\n  statusInfo: StandingOrderStatusInfo!\n  createdAt: Date!\n  updatedAt: Date!\n  account: Account!\n  createdBy: User!\n  nextExecutionDate: Date\n  payments(\n  first: Int! = 50\n  offset: Int\n  after: String\n  orderBy: PaymentOrderByInput\n  filters: PaymentFiltersInput\n): PaymentConnection!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Standing Order unique identifier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbreferencebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"reference"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"reference that will be transferred to the beneficiary throughout the entire end-to-end chain")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderblabelbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"label"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"label that will be transferred to the beneficiary")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbamountbcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Fixed Amount that will be regularly transferred")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbtargetavailablebalancebcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"targetAvailableBalance"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Target available balance value that will be used for periodically clipping the account")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbperiodbcodestandingorderperiod--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"period"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/standing-order-period"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderPeriod!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Scheduled period of Standing Order")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbfirstexecutiondatebcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"firstExecutionDate"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Earlier date the Standing Order will be executed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderblastexecutiondatebcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"lastExecutionDate"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Latest date the Standing Order will be executed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbsepabeneficiarybcodesepabeneficiary--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"sepaBeneficiary"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/sepabeneficiary"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPABeneficiary!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA beneficiary of the Standing Order")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbstatusinfobcodestandingorderstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/standing-order-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderStatusInfo!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the Standing Order")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbcreatedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Date the Standing Order has been created")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbupdatedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Last date the Standing Order has been updated")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbaccountbcodeaccount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"account"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/account"},(0,o.kt)("inlineCode",{parentName:"a"},"Account!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account of the Standing Order")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbcreatedbybcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"createdBy"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identity that scheduled the Standing Order")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbnextexecutiondatebcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"nextExecutionDate"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Next execution date of the Standing Order, if any")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderbpaymentsbcodepaymentconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.",(0,o.kt)("b",null,"payments"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/payment-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentConnection!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A list of payments of an standing order."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-standingorderpaymentsbfirstbcodeint--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.payments.",(0,o.kt)("b",null,"first"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"number of elements in the list (default value 50)")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-standingorderpaymentsboffsetbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.payments.",(0,o.kt)("b",null,"offset"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to start at a specific offset")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-standingorderpaymentsbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.payments.",(0,o.kt)("b",null,"after"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to start after a element")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-standingorderpaymentsborderbybcodepaymentorderbyinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.payments.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/payment-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentOrderByInput"))," ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be ordered")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-standingorderpaymentsbfiltersbcodepaymentfiltersinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrder.payments.",(0,o.kt)("b",null,"filters"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/payment-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentFiltersInput"))," ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be filtered")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/queries/standing-order"},(0,o.kt)("inlineCode",{parentName:"a"},"standingOrder")),"  ",(0,o.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/cancel-standing-order-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelStandingOrderSuccessPayload")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment"},(0,o.kt)("inlineCode",{parentName:"a"},"Payment")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/schedule-standing-order-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ScheduleStandingOrderSuccessPayload")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/standing-order-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderEdge")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);