"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[94650],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,y=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85134:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return d},SpecifiedBy:function(){return p},assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var a=n(83117),r=n(67294),s=n(3905);const o={id:"physical-card-processing-status-info",title:"PhysicalCardProcessingStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api/objects/physical-card-processing-status-info",id:"api/objects/physical-card-processing-status-info",title:"PhysicalCardProcessingStatusInfo",description:"when the physical card is in the process of being ready to use",source:"@site/docs/api/objects/physical-card-processing-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/physical-card-processing-status-info",permalink:"/docs/api/objects/physical-card-processing-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/physical-card-processing-status-info.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-processing-status-info",title:"PhysicalCardProcessingStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PhysicalCardNotFoundRejection",permalink:"/docs/api/objects/physical-card-not-found-rejection"},next:{title:"PhysicalCardRenewedStatusInfo",permalink:"/docs/api/objects/physical-card-renewed-status-info"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardProcessingStatusInfo.<b>status</b></code><Bullet /><code>PhysicalCardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-physicalcardprocessingstatusinfobstatusbcodephysicalcardstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PhysicalCardStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"physicalcardstatusinfo-",level:4}],d=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:d,SpecifiedBy:p,Badge:f},h="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"when the physical card is in the process of being ready to use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type PhysicalCardProcessingStatusInfo implements PhysicalCardStatusInfo {\n  status: PhysicalCardStatus!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardprocessingstatusinfobstatusbcodephysicalcardstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardProcessingStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/enums/physical-card-status"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatus!"))," ",(0,s.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Physical card status (always Processing for type PhysicalCardProcessingStatusInfo)")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"physicalcardstatusinfo-"},(0,s.kt)("a",{parentName:"h4",href:"/api/interfaces/physical-card-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatusInfo"))," ",(0,s.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Physical Card Status Information")))}m.isMDXComponent=!0}}]);