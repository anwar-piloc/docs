"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,y=p["".concat(o,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(y,c(c({ref:t},d),{},{components:n})):a.createElement(y,c({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81150:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var a=n(83117),r=n(67294),i=n(3905);const c={id:"activate-physical-card-input",title:"ActivatePhysicalCardInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/inputs/activate-physical-card-input",id:"api-reference/inputs/activate-physical-card-input",title:"ActivatePhysicalCardInput",description:"No description",source:"@site/docs/api-reference/inputs/activate-physical-card-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/activate-physical-card-input",permalink:"/api-reference/inputs/activate-physical-card-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/activate-physical-card-input.mdx",tags:[],version:"current",frontMatter:{id:"activate-physical-card-input",title:"ActivatePhysicalCardInput",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivatePhysicalCardInput.<b>identifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activatephysicalcardinputbidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivatePhysicalCardInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activatephysicalcardinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ActivatePhysicalCardInput {\n  identifier: String!\n  consentRedirectUrl: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activatephysicalcardinputbidentifierbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivatePhysicalCardInput.",(0,i.kt)("b",null,"identifier"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unique identifier present on physical card")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activatephysicalcardinputbconsentredirecturlbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivatePhysicalCardInput.",(0,i.kt)("b",null,"consentRedirectUrl"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/activate-physical-card"},(0,i.kt)("inlineCode",{parentName:"a"},"activatePhysicalCard")),"  ",(0,i.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);