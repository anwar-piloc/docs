"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[7723],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(d,".").concat(h)]||u[h]||s[h]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},91151:function(e,t,r){r.r(t),r.d(t,{Badge:function(){return h},Bullet:function(){return u},SpecifiedBy:function(){return s},assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=r(83117),a=r(67294),o=r(3905);const l={id:"shareholder-type",title:"ShareholderType",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api/enums/shareholder-type",id:"api/enums/shareholder-type",title:"ShareholderType",description:"Shareholder type to identify individuals and companies.",source:"@site/docs/api/enums/shareholder-type.mdx",sourceDirName:"api/enums",slug:"/api/enums/shareholder-type",permalink:"/docs/api/enums/shareholder-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/shareholder-type.mdx",tags:[],version:"current",frontMatter:{id:"shareholder-type",title:"ShareholderType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ShareholderStatus",permalink:"/docs/api/enums/shareholder-status"},next:{title:"SimulationCardType",permalink:"/docs/api/enums/simulation-card-type"}},c={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ShareholderType.<b>Individual</b></code>",id:"code-style-fontweight-normal-shareholdertypebindividualbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ShareholderType.<b>Company</b></code>",id:"code-style-fontweight-normal-shareholdertypebcompanybcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:u,SpecifiedBy:s,Badge:h},y="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Shareholder type to identify individuals and companies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ShareholderType {\n  Individual\n  Company\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-shareholdertypebindividualbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ShareholderType.",(0,o.kt)("b",null,"Individual")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Individual shareholder type.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-shareholdertypebcompanybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ShareholderType.",(0,o.kt)("b",null,"Company")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Company shareholder type.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/company-shareholder"},(0,o.kt)("inlineCode",{parentName:"a"},"CompanyShareholder")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/individual-shareholder"},(0,o.kt)("inlineCode",{parentName:"a"},"IndividualShareholder")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);