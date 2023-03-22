"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[96389],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=l(a),y=r,f=u["".concat(s,".").concat(y)]||u[y]||p[y]||c;return a?n.createElement(f,o(o({ref:t},i),{},{components:a})):n.createElement(f,o({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=y;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var l=2;l<c;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},40824:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return y},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return l},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i}});var n=a(83117),r=a(67294),c=a(3905);const o={id:"add-card-success-payload",title:"AddCardSuccessPayload",hide_table_of_contents:!1},d=void 0,s={unversionedId:"api/objects/add-card-success-payload",id:"api/objects/add-card-success-payload",title:"AddCardSuccessPayload",description:"No description",source:"@site/docs/api/objects/add-card-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/add-card-success-payload",permalink:"/docs/api/objects/add-card-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/add-card-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-card-success-payload",title:"AddCardSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddAccountMembershipsSuccessPayload",permalink:"/docs/api/objects/add-account-memberships-success-payload"},next:{title:"AddCardsSuccessPayload",permalink:"/docs/api/objects/add-cards-success-payload"}},l={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardSuccessPayload.<b>card</b></code><Bullet /><code>Card!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addcardsuccesspayloadbcardbcodecard--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:u,SpecifiedBy:p,Badge:y},m="wrapper";function b(e){let{components:t,...a}=e;return(0,c.kt)(m,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddCardSuccessPayload {\n  card: Card!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addcardsuccesspayloadbcardbcodecard--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddCardSuccessPayload.",(0,c.kt)("b",null,"card"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/card"},(0,c.kt)("inlineCode",{parentName:"a"},"Card!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The new card added")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/unions/add-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"AddCardPayload")),"  ",(0,c.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);