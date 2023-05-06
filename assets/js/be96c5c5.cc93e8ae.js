"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[98487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(n),f=c,y=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(y,r(r({ref:t},d),{},{components:n})):o.createElement(y,r({ref:t},d))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,r=new Array(a);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:c,r[1]=s;for(var i=2;i<a;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68557:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(83117),c=n(67294),a=n(3905);const r={id:"close-account-success-payload",title:"CloseAccountSuccessPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/close-account-success-payload",id:"api-reference/objects/close-account-success-payload",title:"CloseAccountSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/close-account-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/close-account-success-payload",permalink:"/docs/api-reference/objects/close-account-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/close-account-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"close-account-success-payload",title:"CloseAccountSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CloseAccountReason",permalink:"/docs/api-reference/objects/close-account-reason"},next:{title:"CompanyInfo",permalink:"/docs/api-reference/objects/company-info"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CloseAccountSuccessPayload.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-closeaccountsuccesspayloadbconsentbcodeconsent--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(c.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CloseAccountSuccessPayload {\n  consent: Consent!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-closeaccountsuccesspayloadbconsentbcodeconsent--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CloseAccountSuccessPayload.",(0,a.kt)("b",null,"consent"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent"},(0,a.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/unions/close-account-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"CloseAccountPayload")),"  ",(0,a.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);