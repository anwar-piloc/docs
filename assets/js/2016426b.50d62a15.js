"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(83117),a=(r(67294),r(3905));const i={title:"Renew physical cards"},c="Renew physical cards",o={unversionedId:"topics/cards/physical/guide-renew",id:"topics/cards/physical/guide-renew",title:"Renew physical cards",description:"Physical cards are renewed automatically before the expiry date, which, by default, is three years after adding the card.",source:"@site/docs/topics/cards/physical/guide-renew.mdx",sourceDirName:"topics/cards/physical",slug:"/topics/cards/physical/guide-renew",permalink:"/topics/cards/physical/guide-renew",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/cards/physical/guide-renew.mdx",tags:[],version:"current",frontMatter:{title:"Renew physical cards"},sidebar:"docSidebar",previous:{title:"Block & unblock physical cards",permalink:"/topics/cards/physical/guide-block-unblock"},next:{title:"Cancel physical cards",permalink:"/topics/cards/physical/guide-cancel"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"renew-physical-cards"},"Renew physical cards"),(0,a.kt)("p",null,"Physical cards are renewed automatically before the expiry date, which, by default, is three years after adding the card."),(0,a.kt)("p",null,"About six weeks before the expiry date, the status of the physical card changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"ToRenewed")," with the delivery details available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PhysicalCardRenewedStatus")," object.\nThe estimated date of delivery can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"estimatedDeliveryDate")," field.\nYou'll find the carrier and tracking number in the fields ",(0,a.kt)("inlineCode",{parentName:"p"},"shippingProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"trackingNumber")," as soon as they're available."))}u.isMDXComponent=!0}}]);