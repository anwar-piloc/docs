"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,h=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(h,c(c({ref:t},p),{},{components:r})):n.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},99857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Activate physical cards"},c="Activate physical cards",o={unversionedId:"topics/cards/physical/guide-activate",id:"topics/cards/physical/guide-activate",title:"Activate physical cards",description:"Activate physical cards by either:",source:"@site/docs/topics/cards/physical/guide-activate.mdx",sourceDirName:"topics/cards/physical",slug:"/topics/cards/physical/guide-activate",permalink:"/topics/cards/physical/guide-activate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/cards/physical/guide-activate.mdx",tags:[],version:"current",frontMatter:{title:"Activate physical cards"},sidebar:"docSidebar",previous:{title:"Print physical cards",permalink:"/topics/cards/physical/guide-print"},next:{title:"View sensitive information",permalink:"/topics/cards/physical/guide-view-info"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"activate-physical-cards"},"Activate physical cards"),(0,a.kt)("p",null,"Activate physical cards by either:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Entering the PIN when making your first payment, or"),(0,a.kt)("li",{parentName:"ol"},"Calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"activatePhysicalCard")," mutation which returns a consent. You'll need the identifier on the back of the physical card to call this mutation.")),(0,a.kt)("p",null,"When you use the API, make sure you are authenticated with a user access token belonging to the cardholder.\nThen a ",(0,a.kt)("inlineCode",{parentName:"p"},"consentUrl")," is returned which invites the user to start Strong Customer Authentication with Swan."))}d.isMDXComponent=!0}}]);