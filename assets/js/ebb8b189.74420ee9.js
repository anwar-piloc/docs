"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[46550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=i(n),b=o,p=u["".concat(c,".").concat(b)]||u[b]||g[b]||r;return n?a.createElement(p,l(l({ref:t},s),{},{components:n})):a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:o,l[1]=d;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},97638:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=n(83117),o=n(67294),r=n(3905);const l={id:"onboarding",title:"Onboarding",hide_table_of_contents:!1},d=void 0,c={unversionedId:"api-reference/objects/onboarding",id:"api-reference/objects/onboarding",title:"Onboarding",description:"Information provided during the onboarding process of an individual or a company",source:"@site/docs/api-reference/objects/onboarding.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/onboarding",permalink:"/docs/api-reference/objects/onboarding",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/onboarding.mdx",tags:[],version:"current",frontMatter:{id:"onboarding",title:"Onboarding",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardingValidStatusInfo",permalink:"/docs/api-reference/objects/onboarding-valid-status-info"},next:{title:"PageInfo",permalink:"/docs/api-reference/objects/page-info"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>accountName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbaccountnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>accountCountry</b></code><Bullet /><code>AccountCountry</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingbaccountcountrybcodeaccountcountry-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>email</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>finalizedAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbfinalizedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>language</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingblanguagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>info</b></code><Bullet /><code>OnboardingAccountHolderInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-onboardingbinfobcodeonboardingaccountholderinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>accountHolder</b></code><Bullet /><code>AccountHolder</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardingbaccountholderbcodeaccountholder-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>onboardingUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbonboardingurlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>onboardingState</b></code><Bullet /><code>OnboardingState!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingbonboardingstatebcodeonboardingstate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>redirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>oAuthRedirectParameters</b></code><Bullet /><code>OAuthRedirectParameters</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardingboauthredirectparametersbcodeoauthredirectparameters-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>statusInfo</b></code><Bullet /><code>OnboardingStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-onboardingbstatusinfobcodeonboardingstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>tcuUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbtcuurlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>supportingDocumentCollection</b></code><Bullet /><code>SupportingDocumentCollection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardingbsupportingdocumentcollectionbcodesupportingdocumentcollection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>account</b></code><Bullet /><code>Account</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardingbaccountbcodeaccount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>legalRepresentativeAcceptedIdentificationLevels</b></code><Bullet /><code>[IdentificationLevel]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingblegalrepresentativeacceptedidentificationlevelsbcodeidentificationlevel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Onboarding.<b>legalRepresentativeRecommendedIdentificationLevel</b></code><Bullet /><code>IdentificationLevel!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingblegalrepresentativerecommendedidentificationlevelbcodeidentificationlevel--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:u,SpecifiedBy:g,Badge:b},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Information provided during the onboarding process of an individual or a company"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Onboarding {\n  id: String!\n  accountName: String\n  accountCountry: AccountCountry\n  createdAt: DateTime!\n  email: String\n  finalizedAt: DateTime\n  language: String\n  info: OnboardingAccountHolderInfo!\n  accountHolder: AccountHolder\n  onboardingUrl: String!\n  onboardingState: OnboardingState!\n  redirectUrl: String!\n  oAuthRedirectParameters: OAuthRedirectParameters\n  statusInfo: OnboardingStatusInfo!\n  tcuUrl: String!\n  supportingDocumentCollection: SupportingDocumentCollection!\n  updatedAt: DateTime!\n  account: Account\n  legalRepresentativeAcceptedIdentificationLevels: [IdentificationLevel]!\n  legalRepresentativeRecommendedIdentificationLevel: IdentificationLevel!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"id"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique identifier of an onboarding")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbaccountnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"accountName"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbaccountcountrybcodeaccountcountry-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"accountCountry"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-country"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountCountry"))," ",(0,r.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account Country")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbcreatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Creation date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbemailbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"email"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Email")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbfinalizedatbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"finalizedAt"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Finalization date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingblanguagebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"language"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Language of the onboarding process. This consists of a 2-3 letter base language tag representing the language, optionally followed by additional subtags separated by '-'. The most common extra information is the country or region variant (like 'en-US' or 'fr-CA') or the type of alphabet to use (like 'sr-Latn'). Other variants like the type of orthography ('de-DE-1996') are usually not used in the context of this header. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"},"Learn More"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbinfobcodeonboardingaccountholderinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"info"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/onboarding-account-holder-info"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingAccountHolderInfo!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information regarding the Individual or the company to onboard")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbaccountholderbcodeaccountholder-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"accountHolder"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolder"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account holder created at the end of the onboarding process")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbonboardingurlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"onboardingUrl"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Redirect the legal representative of a new account holder to this URL to start the onboarding process")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbonboardingstatebcodeonboardingstate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"onboardingState"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/onboarding-state"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingState!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Current computed state of onboarding")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbredirecturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"redirectUrl"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"URL used to redirect the user at the end of the onboarding process. If ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," the user is redirected to the white label web banking.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingboauthredirectparametersbcodeoauthredirectparameters-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"oAuthRedirectParameters"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/oauth-redirect-parameters"},(0,r.kt)("inlineCode",{parentName:"a"},"OAuthRedirectParameters"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Extra parameters provided by partner")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbstatusinfobcodeonboardingstatusinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"statusInfo"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/onboarding-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingStatusInfo!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Status (valid/invalid/finalized) and details of errors on fields")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbtcuurlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"tcuUrl"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Swan TCU URL")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbsupportingdocumentcollectionbcodesupportingdocumentcollection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"supportingDocumentCollection"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/supporting-document-collection"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollection!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of supporting document collection owned by the account holder.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbupdatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Creation date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingbaccountbcodeaccount-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"account"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account opened after the onboarding finalization")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingblegalrepresentativeacceptedidentificationlevelsbcodeidentificationlevel--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"legalRepresentativeAcceptedIdentificationLevels"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/identification-level"},(0,r.kt)("inlineCode",{parentName:"a"},"[IdentificationLevel]!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of accepted identification level for the legal representative")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardingblegalrepresentativerecommendedidentificationlevelbcodeidentificationlevel--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Onboarding.",(0,r.kt)("b",null,"legalRepresentativeRecommendedIdentificationLevel"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/identification-level"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationLevel!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Recommended identification level for the legal representative")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/queries/onboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"onboarding")),"  ",(0,r.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/finalize-onboarding-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"FinalizeOnboardingSuccessPayload")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/onboard-company-account-holder-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderSuccessPayload")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/onboard-individual-account-holder-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderSuccessPayload")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingEdge")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-not-completed-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingNotCompletedRejection")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/shareholder"},(0,r.kt)("inlineCode",{parentName:"a"},"Shareholder")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);