"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35062:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(83117),r=n(67294),o=n(3905);const i={id:"authorization-type",title:"AuthorizationType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/enums/authorization-type",id:"api-reference/enums/authorization-type",title:"AuthorizationType",description:"Type of the card authorization transaction",source:"@site/docs/api-reference/enums/authorization-type.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/authorization-type",permalink:"/api-reference/enums/authorization-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/authorization-type.mdx",tags:[],version:"current",frontMatter:{id:"authorization-type",title:"AuthorizationType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AuthenticatorType",permalink:"/api-reference/enums/authenticator-type"},next:{title:"BusinessActivity",permalink:"/api-reference/enums/business-activity"}},u={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AuthorizationType.<b>Classic</b></code>",id:"code-style-fontweight-normal-authorizationtypebclassicbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AuthorizationType.<b>PreAuthorization</b></code>",id:"code-style-fontweight-normal-authorizationtypebpreauthorizationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AuthorizationType.<b>DataRequest</b></code>",id:"code-style-fontweight-normal-authorizationtypebdatarequestbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:d,Badge:h},m="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Type of the card authorization transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AuthorizationType {\n  Classic\n  PreAuthorization\n  DataRequest\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authorizationtypebclassicbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AuthorizationType.",(0,o.kt)("b",null,"Classic")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Classic authorization, nominal use-case, in order to hold the amount in the available balance that will be debited in the following days")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authorizationtypebpreauthorizationbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AuthorizationType.",(0,o.kt)("b",null,"PreAuthorization")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Pre-authorization.\nUsually an authorization in order to hold the amount in the available balance that will be updated in a second time with the final amount (gaz station, car rent, etc)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authorizationtypebdatarequestbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AuthorizationType.",(0,o.kt)("b",null,"DataRequest")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usually an authorization used by a merchant to verify if the card exists and can successfully receive a future authorization")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/card-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);