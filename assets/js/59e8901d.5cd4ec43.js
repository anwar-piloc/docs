"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36453],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return n?o.createElement(b,i(i({ref:t},u),{},{components:n})):o.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41756:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return d},SpecifiedBy:function(){return p},assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(83117),r=n(67294),c=n(3905);const i={id:"account-not-eligible-rejection",title:"AccountNotEligibleRejection",hide_table_of_contents:!1},a=void 0,l={unversionedId:"api/objects/account-not-eligible-rejection",id:"api/objects/account-not-eligible-rejection",title:"AccountNotEligibleRejection",description:"Thrown when an related account is not eligible to the feature",source:"@site/docs/api/objects/account-not-eligible-rejection.mdx",sourceDirName:"api/objects",slug:"/api/objects/account-not-eligible-rejection",permalink:"/docs/api/objects/account-not-eligible-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/account-not-eligible-rejection.mdx",tags:[],version:"current",frontMatter:{id:"account-not-eligible-rejection",title:"AccountNotEligibleRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountMembership",permalink:"/docs/api/objects/account-membership"},next:{title:"AccountNotFoundRejection",permalink:"/docs/api/objects/account-not-found-rejection"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountNotEligibleRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountnoteligiblerejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4}],d=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:u,Bullet:d,SpecifiedBy:p,Badge:f},g="wrapper";function m(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Thrown when an related account is not eligible to the feature"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountNotEligibleRejection implements Rejection {\n  message: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountnoteligiblerejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountNotEligibleRejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"rejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/interfaces/rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}m.isMDXComponent=!0}}]);