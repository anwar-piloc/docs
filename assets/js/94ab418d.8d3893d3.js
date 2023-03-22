"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75349],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=i(n),f=a,y=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:a,c[1]=d;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33009:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return i},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(83117),a=n(67294),o=n(3905);const c={id:"schedule-standing-order-success-payload",title:"ScheduleStandingOrderSuccessPayload",hide_table_of_contents:!1},d=void 0,s={unversionedId:"api/objects/schedule-standing-order-success-payload",id:"api/objects/schedule-standing-order-success-payload",title:"ScheduleStandingOrderSuccessPayload",description:"No description",source:"@site/docs/api/objects/schedule-standing-order-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/schedule-standing-order-success-payload",permalink:"/docs/api/objects/schedule-standing-order-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/schedule-standing-order-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"schedule-standing-order-success-payload",title:"ScheduleStandingOrderSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RollingReserve",permalink:"/docs/api/objects/rolling-reserve"},next:{title:"SchemeWrongRejection",permalink:"/docs/api/objects/scheme-wrong-rejection"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ScheduleStandingOrderSuccessPayload.<b>standingOrder</b></code><Bullet /><code>StandingOrder!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-schedulestandingordersuccesspayloadbstandingorderbcodestandingorder--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:l,Bullet:u,SpecifiedBy:p,Badge:f},g="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ScheduleStandingOrderSuccessPayload {\n  standingOrder: StandingOrder!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-schedulestandingordersuccesspayloadbstandingorderbcodestandingorder--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ScheduleStandingOrderSuccessPayload.",(0,o.kt)("b",null,"standingOrder"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/standing-order"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrder!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/unions/schedule-standing-order-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ScheduleStandingOrderPayload")),"  ",(0,o.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);