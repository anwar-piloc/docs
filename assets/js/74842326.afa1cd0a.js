"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,f=p["".concat(o,".").concat(y)]||p[y]||d[y]||l;return n?a.createElement(f,c(c({ref:t},s),{},{components:n})):a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<l;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},60545:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var a=n(83117),r=n(67294),l=n(3905);const c={id:"cancel-virtual-iban-entry",title:"cancelVirtualIbanEntry",hide_table_of_contents:!1},i=void 0,o={unversionedId:"api-reference/mutations/cancel-virtual-iban-entry",id:"api-reference/mutations/cancel-virtual-iban-entry",title:"cancelVirtualIbanEntry",description:"Cancels a Virtual IBAN.",source:"@site/docs/api-reference/mutations/cancel-virtual-iban-entry.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/cancel-virtual-iban-entry",permalink:"/docs/api-reference/mutations/cancel-virtual-iban-entry",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/cancel-virtual-iban-entry.mdx",tags:[],version:"current",frontMatter:{id:"cancel-virtual-iban-entry",title:"cancelVirtualIbanEntry",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"cancelTransaction",permalink:"/docs/api-reference/mutations/cancel-transaction"},next:{title:"closeAccount",permalink:"/docs/api-reference/mutations/close-account"}},u={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>cancelVirtualIbanEntry.<b>input</b></code><Bullet /><code>CancelVirtualIbanEntryInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-cancelvirtualibanentrybinputbcodecancelvirtualibanentryinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CancelVirtualIbanEntryPayload</code> <Badge class="secondary" text="union"/>',id:"cancelvirtualibanentrypayload-",level:4}],p=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:d,Badge:y},m="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cancels a Virtual IBAN."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"cancelVirtualIbanEntry(\n  input: CancelVirtualIbanEntryInput!\n): CancelVirtualIbanEntryPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-cancelvirtualibanentrybinputbcodecancelvirtualibanentryinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"cancelVirtualIbanEntry.",(0,l.kt)("b",null,"input"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/inputs/cancel-virtual-iban-entry-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CancelVirtualIbanEntryInput!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"cancelvirtualibanentrypayload-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/unions/cancel-virtual-iban-entry-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CancelVirtualIbanEntryPayload"))," ",(0,l.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}b.isMDXComponent=!0}}]);