"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15610],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),i=c(a),p=o,k=i["".concat(s,".").concat(p)]||i[p]||u[p]||l;return a?n.createElement(k,d(d({ref:t},m),{},{components:a})):n.createElement(k,d({ref:t},m))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,d=new Array(l);d[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[i]="string"==typeof e?e:o,d[1]=r;for(var c=2;c<l;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},68810:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return p},Bullet:function(){return i},SpecifiedBy:function(){return u},assets:function(){return c},contentTitle:function(){return r},default:function(){return y},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return m}});var n=a(83117),o=a(67294),l=a(3905);const d={id:"statement",title:"Statement",hide_table_of_contents:!1},r=void 0,s={unversionedId:"api/objects/statement",id:"api/objects/statement",title:"Statement",description:"A statement represent metadata around a banking document that list all of the BOOKED banking transactions that have happened between startDate and endDate",source:"@site/docs/api/objects/statement.mdx",sourceDirName:"api/objects",slug:"/api/objects/statement",permalink:"/docs/api/objects/statement",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/statement.mdx",tags:[],version:"current",frontMatter:{id:"statement",title:"Statement",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatementEdge",permalink:"/docs/api/objects/statement-edge"},next:{title:"SupportingDocumentCollectionApprovedStatusInfo",permalink:"/docs/api/objects/supporting-document-collection-approved-status-info"}},c={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-statementbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>openingBalance</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-statementbopeningbalancebcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>closingBalance</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-statementbclosingbalancebcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>openingDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-statementbopeningdatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>closingDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-statementbclosingdatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>status</b></code><Bullet /><code>StatementStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-statementbstatusbcodestatementstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>period</b></code><Bullet /><code>StatementPeriod</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-statementbperiodbcodestatementperiod-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>totalCredits</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-statementbtotalcreditsbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>totalDebits</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-statementbtotaldebitsbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>fees</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-statementbfeesbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>type</b></code><Bullet /><code>[StatementInfo]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-statementbtypebcodestatementinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-statementbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Statement.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-statementbupdatedatbcodedatetime--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],i=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:m,Bullet:i,SpecifiedBy:u,Badge:p},b="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A statement represent metadata around a banking document that list all of the BOOKED banking transactions that have happened between startDate and endDate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Statement {\n  id: ID!\n  openingBalance: Amount!\n  closingBalance: Amount!\n  openingDate: DateTime!\n  closingDate: DateTime!\n  status: StatementStatus!\n  period: StatementPeriod\n  totalCredits: Amount!\n  totalDebits: Amount!\n  fees: Amount!\n  type: [StatementInfo]!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"id"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"unique identifier of the statement")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbopeningbalancebcodeamount--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"openingBalance"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,l.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"booked balance at the start of the window")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbclosingbalancebcodeamount--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"closingBalance"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,l.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"booked balance at the end of the window")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbopeningdatebcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"openingDate"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"starting date of the date window")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbclosingdatebcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"closingDate"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ending date of the date window")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbstatusbcodestatementstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"status"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/statement-status"},(0,l.kt)("inlineCode",{parentName:"a"},"StatementStatus!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"status of the statement")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbperiodbcodestatementperiod-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"period"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/statement-period"},(0,l.kt)("inlineCode",{parentName:"a"},"StatementPeriod"))," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"period of statement (either custom or monthly)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbtotalcreditsbcodeamount--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"totalCredits"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,l.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"the sum of credit transactions during the window")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbtotaldebitsbcodeamount--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"totalDebits"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,l.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"the sum of debit transactions during the window")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbfeesbcodeamount--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"fees"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,l.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"the sum of fee transactions during the window")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbtypebcodestatementinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"type"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/interfaces/statement-info"},(0,l.kt)("inlineCode",{parentName:"a"},"[StatementInfo]!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"type of statements (ex: PDF)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"created date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statementbupdatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Statement.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"updated date")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/queries/account-statement"},(0,l.kt)("inlineCode",{parentName:"a"},"accountStatement")),"  ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/mutations/generate-account-statement"},(0,l.kt)("inlineCode",{parentName:"a"},"generateAccountStatement")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/statement-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"StatementEdge")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);