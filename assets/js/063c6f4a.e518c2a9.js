"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[96048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,b=p["".concat(d,".").concat(f)]||p[f]||m[f]||c;return n?a.createElement(b,r(r({ref:t},s),{},{components:n})):a.createElement(b,r({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<c;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83816:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(83117),o=n(67294),c=n(3905);const r={id:"received-direct-debit-mandate-connection",title:"ReceivedDirectDebitMandateConnection",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/objects/received-direct-debit-mandate-connection",id:"api-reference/objects/received-direct-debit-mandate-connection",title:"ReceivedDirectDebitMandateConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/api-reference/objects/received-direct-debit-mandate-connection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/received-direct-debit-mandate-connection",permalink:"/api-reference/objects/received-direct-debit-mandate-connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/received-direct-debit-mandate-connection.mdx",tags:[],version:"current",frontMatter:{id:"received-direct-debit-mandate-connection",title:"ReceivedDirectDebitMandateConnection",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ReceivedDirectDebitMandateConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-receiveddirectdebitmandateconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReceivedDirectDebitMandateConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-receiveddirectdebitmandateconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReceivedDirectDebitMandateConnection.<b>edges</b></code><Bullet /><code>[ReceivedDirectDebitMandateEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-receiveddirectdebitmandateconnectionbedgesbcodereceiveddirectdebitmandateedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="secondary" text="interface"/>',id:"connection-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:m,Badge:f},u="wrapper";function g(e){let{components:t,...n}=e;return(0,c.kt)(u,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Implements the Relay Connection interface, used to paginate list of element (",(0,c.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type ReceivedDirectDebitMandateConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [ReceivedDirectDebitMandateEdge!]!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-receiveddirectdebitmandateconnectionbtotalcountbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ReceivedDirectDebitMandateConnection.",(0,c.kt)("b",null,"totalCount"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Total number of elements in the list")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-receiveddirectdebitmandateconnectionbpageinfobcodepageinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ReceivedDirectDebitMandateConnection.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-receiveddirectdebitmandateconnectionbedgesbcodereceiveddirectdebitmandateedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ReceivedDirectDebitMandateConnection.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/received-direct-debit-mandate-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[ReceivedDirectDebitMandateEdge!]!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"ReceivedDirectDebitMandateEdge list")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"connection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/connection"},(0,c.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,c.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);