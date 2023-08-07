"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,f=p["".concat(d,".").concat(y)]||p[y]||s[y]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},29890:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(83117),r=n(67294),i=n(3905);const l={id:"add-virtual-iban-entry",title:"addVirtualIbanEntry",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api-reference/mutations/add-virtual-iban-entry",id:"api-reference/mutations/add-virtual-iban-entry",title:"addVirtualIbanEntry",description:"Add a new Virtual IBAN.",source:"@site/docs/api-reference/mutations/add-virtual-iban-entry.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-virtual-iban-entry",permalink:"/api-reference/mutations/add-virtual-iban-entry",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-virtual-iban-entry.mdx",tags:[],version:"current",frontMatter:{id:"add-virtual-iban-entry",title:"addVirtualIbanEntry",hide_table_of_contents:!1}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addVirtualIbanEntry.<b>input</b></code><Bullet /><code>AddVirtualIbanInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addvirtualibanentrybinputbcodeaddvirtualibaninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddVirtualIbanEntryPayload</code> <Badge class="secondary" text="union"/>',id:"addvirtualibanentrypayload-",level:4}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:p,SpecifiedBy:s,Badge:y},b="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add a new Virtual IBAN."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"addVirtualIbanEntry(\n  input: AddVirtualIbanInput\n): AddVirtualIbanEntryPayload\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-addvirtualibanentrybinputbcodeaddvirtualibaninput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"addVirtualIbanEntry.",(0,i.kt)("b",null,"input"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-virtual-iban-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AddVirtualIbanInput"))," ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"addvirtualibanentrypayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-virtual-iban-entry-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"AddVirtualIbanEntryPayload"))," ",(0,i.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}m.isMDXComponent=!0}}]);