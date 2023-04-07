"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[77261],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:e},l),{},{components:n})):r.createElement(f,a({ref:e},l))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89529:function(t,e,n){n.r(e),n.d(e,{Badge:function(){return m},Bullet:function(){return u},SpecifiedBy:function(){return d},assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(83117),i=n(67294),o=n(3905);const a={id:"physical-card-custom-options-input",title:"PhysicalCardCustomOptionsInput",hide_table_of_contents:!1},s=void 0,c={unversionedId:"api/inputs/physical-card-custom-options-input",id:"api/inputs/physical-card-custom-options-input",title:"PhysicalCardCustomOptionsInput",description:"No description",source:"@site/docs/api/inputs/physical-card-custom-options-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/physical-card-custom-options-input",permalink:"/docs/api/inputs/physical-card-custom-options-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/physical-card-custom-options-input.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-custom-options-input",title:"PhysicalCardCustomOptionsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PhysicalCardCustomOptionsForPrintInput",permalink:"/docs/api/inputs/physical-card-custom-options-for-print-input"},next:{title:"PrintPhysicalCardInput",permalink:"/docs/api/inputs/print-physical-card-input"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardCustomOptionsInput.<b>additionalEmbossedLine</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardcustomoptionsinputbadditionalembossedlinebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+t.class},t.text)),f={toc:l,Bullet:u,SpecifiedBy:d,Badge:m},y="wrapper";function b(t){let{components:e,...n}=t;return(0,o.kt)(y,(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input PhysicalCardCustomOptionsInput {\n  additionalEmbossedLine: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-physicalcardcustomoptionsinputbadditionalembossedlinebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardCustomOptionsInput.",(0,o.kt)("b",null,"additionalEmbossedLine"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Additional line to be embossed on the card.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/add-cards-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardsInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);