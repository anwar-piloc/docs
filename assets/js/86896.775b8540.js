"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86896],{86896:function(e,t,n){n.r(t);var r=n(97480),u=n(59361),l=(n(67294),n(73935),Object.defineProperty);function a(e,t){var n,r;const{levels:u,indentLevel:l}=e;return((u&&0!==u.length?u[u.length-1]-((null===(n=this.electricInput)||void 0===n?void 0:n.test(t))?1:0):l)||0)*((null===(r=this.config)||void 0===r?void 0:r.indentUnit)||0)}r.C.defineMode("graphql-results",(e=>{const t=(0,u.o)({eatWhitespace:e=>e.eatSpace(),lexRules:i,parseRules:s,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:a,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}})),l(a,"name",{value:"indent",configurable:!0});const i={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},s={Document:[(0,u.p)("{"),(0,u.l)("Entry",(0,u.p)(",")),(0,u.p)("}")],Entry:[(0,u.t)("String","def"),(0,u.p)(":"),"Value"],Value(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[(0,u.t)("Number","number")],StringValue:[(0,u.t)("String","string")],BooleanValue:[(0,u.t)("Keyword","builtin")],NullValue:[(0,u.t)("Keyword","keyword")],ListValue:[(0,u.p)("["),(0,u.l)("Value",(0,u.p)(",")),(0,u.p)("]")],ObjectValue:[(0,u.p)("{"),(0,u.l)("ObjectField",(0,u.p)(",")),(0,u.p)("}")],ObjectField:[(0,u.t)("String","property"),(0,u.p)(":"),"Value"]}}}]);