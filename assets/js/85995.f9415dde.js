"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[85995],{71520:(e,t,n)=>{n.d(t,{f:()=>i});function i(e,t){const n=[];let i=e;for(;null==i?void 0:i.kind;)n.push(i),i=i.prevState;for(let r=n.length-1;r>=0;r--)t(n[r])}(0,Object.defineProperty)(i,"name",{value:"forEachState",configurable:!0})},85995:(e,t,n)=>{n.r(t);var i=n(97480),r=n(44851),l=n(3801),o=n(71520),s=(n(59361),n(67294),n(85893),n(73935),Object.defineProperty),a=(e,t)=>s(e,"name",{value:t,configurable:!0});function c(e,t,n){const i=u(n,p(t.string));if(!i)return;const r=null!==t.type&&/"|\w/.test(t.string[0])?t.start:t.end;return{list:i,from:{line:e.line,ch:r},to:{line:e.line,ch:t.end}}}function u(e,t){if(!t)return f(e,(e=>!e.isDeprecated));return f(f(e.map((e=>({proximity:d(p(e.text),t),entry:e}))),(e=>e.proximity<=2)),(e=>!e.entry.isDeprecated)).sort(((e,t)=>(e.entry.isDeprecated?1:0)-(t.entry.isDeprecated?1:0)||e.proximity-t.proximity||e.entry.text.length-t.entry.text.length)).map((e=>e.entry))}function f(e,t){const n=e.filter(t);return 0===n.length?e:n}function p(e){return e.toLowerCase().replaceAll(/\W/g,"")}function d(e,t){let n=y(t,e);return e.length>t.length&&(n-=e.length-t.length-1,n+=0===e.indexOf(t)?0:.5),n}function y(e,t){let n,i;const r=[],l=e.length,o=t.length;for(n=0;n<=l;n++)r[n]=[n];for(i=1;i<=o;i++)r[0][i]=i;for(n=1;n<=l;n++)for(i=1;i<=o;i++){const l=e[n-1]===t[i-1]?0:1;r[n][i]=Math.min(r[n-1][i]+1,r[n][i-1]+1,r[n-1][i-1]+l),n>1&&i>1&&e[n-1]===t[i-2]&&e[n-2]===t[i-1]&&(r[n][i]=Math.min(r[n][i],r[n-2][i-2]+l))}return r[l][o]}function m(e,t,n){const i="Invalid"===t.state.kind?t.state.prevState:t.state,{kind:o,step:s}=i;if("Document"===o&&0===s)return c(e,t,[{text:"{"}]);const{variableToType:a}=n;if(!a)return;const u=g(a,t.state);if("Document"===o||"Variable"===o&&0===s){return c(e,t,Object.keys(a).map((e=>({text:`"${e}": `,type:a[e]}))))}if(("ObjectValue"===o||"ObjectField"===o&&0===s)&&u.fields){return c(e,t,Object.keys(u.fields).map((e=>u.fields[e])).map((e=>({text:`"${e.name}": `,type:e.type,description:e.description}))))}if("StringValue"===o||"NumberValue"===o||"BooleanValue"===o||"NullValue"===o||"ListValue"===o&&1===s||"ObjectField"===o&&2===s||"Variable"===o&&2===s){const n=u.type?(0,r.xC)(u.type):void 0;if(n instanceof r.sR)return c(e,t,[{text:"{"}]);if(n instanceof r.mR){return c(e,t,n.getValues().map((e=>({text:`"${e.name}"`,type:n,description:e.description}))))}if(n===l.EZ)return c(e,t,[{text:"true",type:l.EZ,description:"Not false."},{text:"false",type:l.EZ,description:"Not true."}])}}function g(e,t){const n={type:null,fields:null};return(0,o.f)(t,(t=>{switch(t.kind){case"Variable":n.type=e[t.name];break;case"ListValue":{const e=n.type?(0,r.tf)(n.type):void 0;n.type=e instanceof r.p2?e.ofType:null;break}case"ObjectValue":{const e=n.type?(0,r.xC)(n.type):void 0;n.fields=e instanceof r.sR?e.getFields():null;break}case"ObjectField":{const e=t.name&&n.fields?n.fields[t.name]:null;n.type=null==e?void 0:e.type;break}}})),n}a(c,"hintList"),a(u,"filterAndSortList"),a(f,"filterNonEmpty"),a(p,"normalizeText"),a(d,"getProximity"),a(y,"lexicalDistance"),i.C.registerHelper("hint","graphql-variables",((e,t)=>{const n=e.getCursor(),r=e.getTokenAt(n),l=m(n,r,t);return(null==l?void 0:l.list)&&l.list.length>0&&(l.from=i.C.Pos(l.from.line,l.from.ch),l.to=i.C.Pos(l.to.line,l.to.ch),i.C.signal(e,"hasCompletion",e,l,r)),l})),a(m,"getVariablesHint"),a(g,"getTypeInfo")}}]);