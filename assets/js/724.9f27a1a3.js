"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[724],{57181:(e,t,n)=>{n.d(t,{a:()=>p,b:()=>f,c:()=>d,d:()=>m,e:()=>g,g:()=>l});var i=n(44851),a=n(59361),o=n(71520),r=Object.defineProperty,u=(e,t)=>r(e,"name",{value:t,configurable:!0});function l(e,t){const n={schema:e,type:null,parentType:null,inputType:null,directiveDef:null,fieldDef:null,argDef:null,argDefs:null,objectFieldDefs:null};return(0,o.f)(t,(t=>{var a,o;switch(t.kind){case"Query":case"ShortQuery":n.type=e.getQueryType();break;case"Mutation":n.type=e.getMutationType();break;case"Subscription":n.type=e.getSubscriptionType();break;case"InlineFragment":case"FragmentDefinition":t.type&&(n.type=e.getType(t.type));break;case"Field":case"AliasedField":n.fieldDef=n.type&&t.name?s(e,n.parentType,t.name):null,n.type=null===(a=n.fieldDef)||void 0===a?void 0:a.type;break;case"SelectionSet":n.parentType=n.type?(0,i.xC)(n.type):null;break;case"Directive":n.directiveDef=t.name?e.getDirective(t.name):null;break;case"Arguments":const r=t.prevState?"Field"===t.prevState.kind?n.fieldDef:"Directive"===t.prevState.kind?n.directiveDef:"AliasedField"===t.prevState.kind?t.prevState.name&&s(e,n.parentType,t.prevState.name):null:null;n.argDefs=r?r.args:null;break;case"Argument":if(n.argDef=null,n.argDefs)for(let e=0;e<n.argDefs.length;e++)if(n.argDefs[e].name===t.name){n.argDef=n.argDefs[e];break}n.inputType=null===(o=n.argDef)||void 0===o?void 0:o.type;break;case"EnumValue":const u=n.inputType?(0,i.xC)(n.inputType):null;n.enumValue=u instanceof i.mR?c(u.getValues(),(e=>e.value===t.name)):null;break;case"ListValue":const l=n.inputType?(0,i.tf)(n.inputType):null;n.inputType=l instanceof i.p2?l.ofType:null;break;case"ObjectValue":const p=n.inputType?(0,i.xC)(n.inputType):null;n.objectFieldDefs=p instanceof i.sR?p.getFields():null;break;case"ObjectField":const f=t.name&&n.objectFieldDefs?n.objectFieldDefs[t.name]:null;n.inputType=null==f?void 0:f.type;break;case"NamedType":n.type=t.name?e.getType(t.name):null}})),n}function s(e,t,n){return n===a.S.name&&e.getQueryType()===t?a.S:n===a.T.name&&e.getQueryType()===t?a.T:n===a.a.name&&(0,i.Gv)(t)?a.a:t&&t.getFields?t.getFields()[n]:void 0}function c(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return e[n]}function p(e){return{kind:"Field",schema:e.schema,field:e.fieldDef,type:y(e.fieldDef)?null:e.parentType}}function f(e){return{kind:"Directive",schema:e.schema,directive:e.directiveDef}}function d(e){return e.directiveDef?{kind:"Argument",schema:e.schema,argument:e.argDef,directive:e.directiveDef}:{kind:"Argument",schema:e.schema,argument:e.argDef,field:e.fieldDef,type:y(e.fieldDef)?null:e.parentType}}function m(e){return{kind:"EnumValue",value:e.enumValue||void 0,type:e.inputType?(0,i.xC)(e.inputType):void 0}}function g(e,t){return{kind:"Type",schema:e.schema,type:t||e.type}}function y(e){return"__"===e.name.slice(0,2)}u(l,"getTypeInfo"),u(s,"getFieldDef"),u(c,"find"),u(p,"getFieldReference"),u(f,"getDirectiveReference"),u(d,"getArgumentReference"),u(m,"getEnumValueReference"),u(g,"getTypeReference"),u(y,"isMetaField")},71520:(e,t,n)=>{n.d(t,{f:()=>i});function i(e,t){const n=[];let i=e;for(;null==i?void 0:i.kind;)n.push(i),i=i.prevState;for(let a=n.length-1;a>=0;a--)t(n[a])}(0,Object.defineProperty)(i,"name",{value:"forEachState",configurable:!0})},724:(e,t,n)=>{n.r(t);var i=n(97480),a=n(57181),o=(n(59361),n(67294),n(85893),n(73935),n(71520),Object.defineProperty),r=(e,t)=>o(e,"name",{value:t,configurable:!0});function u(e,t){const n=t.target||t.srcElement;if(!(n instanceof HTMLElement))return;if("SPAN"!==(null==n?void 0:n.nodeName))return;const i=n.getBoundingClientRect(),a={left:(i.left+i.right)/2,top:(i.top+i.bottom)/2};e.state.jump.cursor=a,e.state.jump.isHoldingModifier&&f(e)}function l(e){e.state.jump.isHoldingModifier||!e.state.jump.cursor?e.state.jump.isHoldingModifier&&e.state.jump.marker&&d(e):e.state.jump.cursor=null}function s(e,t){if(e.state.jump.isHoldingModifier||!p(t.key))return;e.state.jump.isHoldingModifier=!0,e.state.jump.cursor&&f(e);const n=r((r=>{r.code===t.code&&(e.state.jump.isHoldingModifier=!1,e.state.jump.marker&&d(e),i.C.off(document,"keyup",n),i.C.off(document,"click",a),e.off("mousedown",o))}),"onKeyUp"),a=r((t=>{const{destination:n,options:i}=e.state.jump;n&&i.onClick(n,t)}),"onClick"),o=r(((t,n)=>{e.state.jump.destination&&(n.codemirrorIgnore=!0)}),"onMouseDown");i.C.on(document,"keyup",n),i.C.on(document,"click",a),e.on("mousedown",o)}i.C.defineOption("jump",!1,((e,t,n)=>{if(n&&n!==i.C.Init){const t=e.state.jump.onMouseOver;i.C.off(e.getWrapperElement(),"mouseover",t);const n=e.state.jump.onMouseOut;i.C.off(e.getWrapperElement(),"mouseout",n),i.C.off(document,"keydown",e.state.jump.onKeyDown),delete e.state.jump}if(t){const n=e.state.jump={options:t,onMouseOver:u.bind(null,e),onMouseOut:l.bind(null,e),onKeyDown:s.bind(null,e)};i.C.on(e.getWrapperElement(),"mouseover",n.onMouseOver),i.C.on(e.getWrapperElement(),"mouseout",n.onMouseOut),i.C.on(document,"keydown",n.onKeyDown)}})),r(u,"onMouseOver"),r(l,"onMouseOut"),r(s,"onKeyDown");const c="undefined"!=typeof navigator&&navigator&&navigator.appVersion.includes("Mac");function p(e){return e===(c?"Meta":"Control")}function f(e){if(e.state.jump.marker)return;const{cursor:t,options:n}=e.state.jump,i=e.coordsChar(t),a=e.getTokenAt(i,!0),o=n.getDestination||e.getHelper(i,"jump");if(o){const t=o(a,n,e);if(t){const n=e.markText({line:i.line,ch:a.start},{line:i.line,ch:a.end},{className:"CodeMirror-jump-token"});e.state.jump.marker=n,e.state.jump.destination=t}}}function d(e){const{marker:t}=e.state.jump;e.state.jump.marker=null,e.state.jump.destination=null,t.clear()}r(p,"isJumpModifier"),r(f,"enableJumpMode"),r(d,"disableJumpMode"),i.C.registerHelper("jump","graphql",((e,t)=>{if(!t.schema||!t.onClick||!e.state)return;const{state:n}=e,{kind:i,step:o}=n,r=(0,a.g)(t.schema,n);return"Field"===i&&0===o&&r.fieldDef||"AliasedField"===i&&2===o&&r.fieldDef?(0,a.a)(r):"Directive"===i&&1===o&&r.directiveDef?(0,a.b)(r):"Argument"===i&&0===o&&r.argDef?(0,a.c)(r):"EnumValue"===i&&r.enumValue?(0,a.d)(r):"NamedType"===i&&r.type?(0,a.e)(r):void 0}))}}]);