"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=c,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,r=new Array(a);r[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:c,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61377:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(83117),c=n(67294),a=n(3905);const r={id:"account-connection",title:"AccountConnection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/objects/account-connection",id:"api-reference/objects/account-connection",title:"AccountConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/api-reference/objects/account-connection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-connection",permalink:"/api-reference/objects/account-connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-connection.mdx",tags:[],version:"current",frontMatter:{id:"account-connection",title:"AccountConnection",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-accountconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountConnection.<b>edges</b></code><Bullet /><code>[AccountEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-accountconnectionbedgesbcodeaccountedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="secondary" text="interface"/>',id:"connection-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(c.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:p,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Implements the Relay Connection interface, used to paginate list of element (",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [AccountEdge!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountconnectionbtotalcountbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountConnection.",(0,a.kt)("b",null,"totalCount"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Total number of element in the list")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountconnectionbpageinfobcodepageinfo--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountConnection.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountconnectionbedgesbcodeaccountedge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountConnection.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[AccountEdge!]!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"AccountEdge list")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"connection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/connection"},(0,a.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,a.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/queries/accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"accounts")),"  ",(0,a.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);