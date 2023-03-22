"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18509],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||d;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<d;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34098:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return s},SpecifiedBy:function(){return p},assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var a=n(83117),r=n(67294),d=n(3905);const o={id:"add-card",title:"addCard",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/mutations/add-card",id:"api/mutations/add-card",title:"addCard",description:"Add a new card to an account membership.",source:"@site/docs/api/mutations/add-card.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/add-card",permalink:"/docs/api/mutations/add-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/mutations/add-card.mdx",tags:[],version:"current",frontMatter:{id:"add-card",title:"addCard",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"addAccountMemberships",permalink:"/docs/api/mutations/add-account-memberships"},next:{title:"addCardsWithGroupDelivery",permalink:"/docs/api/mutations/add-cards-with-group-delivery"}},u={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addCard.<b>input</b></code><Bullet /><code>AddCardInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addcardbinputbcodeaddcardinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddCardPayload</code> <Badge class="secondary" text="union"/>',id:"addcardpayload-",level:4}],s=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:s,SpecifiedBy:p,Badge:m},y="wrapper";function h(e){let{components:t,...n}=e;return(0,d.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Add a new card to an account membership."),(0,d.kt)("p",null,"This mutation is restricted to an User access token (",(0,d.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,d.kt)("p",null,"The user must have an account membership for this account with the attribute ",(0,d.kt)("inlineCode",{parentName:"p"},"canManageAccountMembership=true"),"."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"addCard(\n  input: AddCardInput!\n): AddCardPayload!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addcardbinputbcodeaddcardinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"addCard.",(0,d.kt)("b",null,"input"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/inputs/add-card-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardInput!"))," ",(0,d.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"addcardpayload-"},(0,d.kt)("a",{parentName:"h4",href:"/api/unions/add-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardPayload"))," ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,d.kt)("blockquote",null))}h.isMDXComponent=!0}}]);