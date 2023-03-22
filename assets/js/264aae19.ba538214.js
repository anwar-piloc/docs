"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[7412],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=r,m=s["".concat(i,".").concat(f)]||s[f]||p[f]||a;return n?o.createElement(m,c(c({ref:t},u),{},{components:n})):o.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var d=2;d<a;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13702:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return s},SpecifiedBy:function(){return p},assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var o=n(83117),r=n(67294),a=n(3905);const c={id:"account-holder-info",title:"AccountHolderInfo",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api/interfaces/account-holder-info",id:"api/interfaces/account-holder-info",title:"AccountHolderInfo",description:"Account holder types.",source:"@site/docs/api/interfaces/account-holder-info.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/account-holder-info",permalink:"/docs/api/interfaces/account-holder-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/account-holder-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-info",title:"AccountHolderInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ViewPhysicalCardPinInput",permalink:"/docs/api/inputs/view-physical-card-pin-input"},next:{title:"AccountHolderStatusInfo",permalink:"/docs/api/interfaces/account-holder-status-info"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderInfo.<b>type</b></code><Bullet /><code>AccountHolderType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderinfobtypebcodeaccountholdertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderInfo.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderinfobnamebcodestring--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:s,SpecifiedBy:p,Badge:f},y="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Account holder types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"interface AccountHolderInfo {\n  type: AccountHolderType!\n  name: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountholderinfobtypebcodeaccountholdertype--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderInfo.",(0,a.kt)("b",null,"type"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/account-holder-type"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolderType!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Account holder type")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountholderinfobnamebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderInfo.",(0,a.kt)("b",null,"name"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Account holder name")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/objects/account-holder"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/objects/account-holder-company-info"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolderCompanyInfo")),"  ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/objects/account-holder-individual-info"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolderIndividualInfo")),"  ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);