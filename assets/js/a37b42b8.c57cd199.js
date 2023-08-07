"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[28678],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(a),f=n,y=p["".concat(i,".").concat(f)]||p[f]||u[f]||s;return a?r.createElement(y,c(c({ref:t},d),{},{components:a})):r.createElement(y,c({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,c[1]=o;for(var l=2;l<s;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88798:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=a(83117),n=a(67294),s=a(3905);const c={id:"physical-card-processing-status-info",title:"PhysicalCardProcessingStatusInfo",hide_table_of_contents:!1},o=void 0,i={unversionedId:"api-reference/objects/physical-card-processing-status-info",id:"api-reference/objects/physical-card-processing-status-info",title:"PhysicalCardProcessingStatusInfo",description:"when the physical card is in the process of being ready to use",source:"@site/docs/api-reference/objects/physical-card-processing-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/physical-card-processing-status-info",permalink:"/api-reference/objects/physical-card-processing-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/physical-card-processing-status-info.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-processing-status-info",title:"PhysicalCardProcessingStatusInfo",hide_table_of_contents:!1}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardProcessingStatusInfo.<b>status</b></code><Bullet /><code>PhysicalCardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-physicalcardprocessingstatusinfobstatusbcodephysicalcardstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PhysicalCardStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"physicalcardstatusinfo-",level:4}],p=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},h="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"when the physical card is in the process of being ready to use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type PhysicalCardProcessingStatusInfo implements PhysicalCardStatusInfo {\n  status: PhysicalCardStatus!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardprocessingstatusinfobstatusbcodephysicalcardstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardProcessingStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/physical-card-status"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatus!"))," ",(0,s.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Physical card status (always Processing for type PhysicalCardProcessingStatusInfo)")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"physicalcardstatusinfo-"},(0,s.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/physical-card-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatusInfo"))," ",(0,s.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Physical Card Status Information")))}m.isMDXComponent=!0}}]);