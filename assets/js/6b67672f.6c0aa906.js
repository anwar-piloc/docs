"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[23798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,c(c({ref:t},s),{},{components:n})):a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63542:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var a=n(83117),o=n(67294),r=n(3905);const c={id:"generate-account-statement-input",title:"GenerateAccountStatementInput",hide_table_of_contents:!1},l=void 0,u={unversionedId:"api-reference/inputs/generate-account-statement-input",id:"api-reference/inputs/generate-account-statement-input",title:"GenerateAccountStatementInput",description:"Inputs to generate an account",source:"@site/docs/api-reference/inputs/generate-account-statement-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/generate-account-statement-input",permalink:"/api-reference/inputs/generate-account-statement-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/generate-account-statement-input.mdx",tags:[],version:"current",frontMatter:{id:"generate-account-statement-input",title:"GenerateAccountStatementInput",hide_table_of_contents:!1}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GenerateAccountStatementInput.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-generateaccountstatementinputbaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GenerateAccountStatementInput.<b>openingDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-generateaccountstatementinputbopeningdatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GenerateAccountStatementInput.<b>closingDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-generateaccountstatementinputbclosingdatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GenerateAccountStatementInput.<b>language</b></code><Bullet /><code>AccountLanguage</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-generateaccountstatementinputblanguagebcodeaccountlanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GenerateAccountStatementInput.<b>statementType</b></code><Bullet /><code>StatementType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-generateaccountstatementinputbstatementtypebcodestatementtype-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:d,SpecifiedBy:p,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inputs to generate an account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input GenerateAccountStatementInput {\n  accountId: ID!\n  openingDate: DateTime!\n  closingDate: DateTime!\n  language: AccountLanguage\n  statementType: StatementType\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-generateaccountstatementinputbaccountidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GenerateAccountStatementInput.",(0,r.kt)("b",null,"accountId"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique identifier of an account")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-generateaccountstatementinputbopeningdatebcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GenerateAccountStatementInput.",(0,r.kt)("b",null,"openingDate"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"starting date of the date window")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-generateaccountstatementinputbclosingdatebcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GenerateAccountStatementInput.",(0,r.kt)("b",null,"closingDate"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ending date of the date window")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-generateaccountstatementinputblanguagebcodeaccountlanguage-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GenerateAccountStatementInput.",(0,r.kt)("b",null,"language"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-language"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountLanguage"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"language to generate the statement in (default to account's language)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-generateaccountstatementinputbstatementtypebcodestatementtype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GenerateAccountStatementInput.",(0,r.kt)("b",null,"statementType"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/statement-type"},(0,r.kt)("inlineCode",{parentName:"a"},"StatementType"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Type of statement to generate")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/generate-account-statement"},(0,r.kt)("inlineCode",{parentName:"a"},"generateAccountStatement")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);