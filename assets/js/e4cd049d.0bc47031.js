"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50449],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63948:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return d},Bullet:function(){return p},SpecifiedBy:function(){return m},assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(83117),a=n(67294),o=n(3905);const c={id:"account-membership",title:"accountMembership",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api/queries/account-membership",id:"api/queries/account-membership",title:"accountMembership",description:"Returns an account membership from its id.",source:"@site/docs/api/queries/account-membership.mdx",sourceDirName:"api/queries",slug:"/api/queries/account-membership",permalink:"/docs/api/queries/account-membership",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/queries/account-membership.mdx",tags:[],version:"current",frontMatter:{id:"account-membership",title:"accountMembership",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"accountHolders",permalink:"/docs/api/queries/account-holders"},next:{title:"accountMemberships",permalink:"/docs/api/queries/account-memberships"}},u={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>accountMembership.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipbidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AccountMembership</code> <Badge class="secondary" text="object"/>',id:"accountmembership-",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:p,SpecifiedBy:m,Badge:d},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns an account membership from its id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"accountMembership(\n  id: ID!\n): AccountMembership\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"accountMembership.",(0,o.kt)("b",null,"id"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"accountmembership-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/account-membership"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembership"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An account membership represents the rights of a user for a given account.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Each account is administered by an account membership having the capacity of legal representative. He has the possibility of delegating rights on this account to other users.")),(0,o.kt)("blockquote",null))}h.isMDXComponent=!0}}]);