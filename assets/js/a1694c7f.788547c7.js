"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[24748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,b=f["".concat(d,".").concat(u)]||f[u]||g[u]||r;return n?o.createElement(b,l(l({ref:t},s),{},{components:n})):o.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31675:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var o=n(83117),a=n(67294),r=n(3905);const l={id:"onboarding-info",title:"OnboardingInfo",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/objects/onboarding-info",id:"api-reference/objects/onboarding-info",title:"OnboardingInfo",description:"No description",source:"@site/docs/api-reference/objects/onboarding-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/onboarding-info",permalink:"/api-reference/objects/onboarding-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/onboarding-info.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-info",title:"OnboardingInfo",hide_table_of_contents:!1}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardinginfobidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>accountName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardinginfobaccountnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>accountCountry</b></code><Bullet /><code>AccountCountry</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardinginfobaccountcountrybcodeaccountcountry-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>email</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardinginfobemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>language</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardinginfoblanguagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>info</b></code><Bullet /><code>OnboardingAccountHolderInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-onboardinginfobinfobcodeonboardingaccountholderinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>onboardingUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardinginfobonboardingurlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>onboardingState</b></code><Bullet /><code>OnboardingState</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardinginfobonboardingstatebcodeonboardingstate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>redirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardinginfobredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>projectInfo</b></code><Bullet /><code>ProjectInfo</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardinginfobprojectinfobcodeprojectinfo-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>verificationFlow</b></code><Bullet /><code>VerificationFlow!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardinginfobverificationflowbcodeverificationflow--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>oAuthRedirectParameters</b></code><Bullet /><code>OAuthRedirectParameters</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardinginfoboauthredirectparametersbcodeoauthredirectparameters-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>statusInfo</b></code><Bullet /><code>OnboardingStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-onboardinginfobstatusinfobcodeonboardingstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>supportingDocumentCollection</b></code><Bullet /><code>SupportingDocumentCollection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardinginfobsupportingdocumentcollectionbcodesupportingdocumentcollection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>legalRepresentativeAcceptedIdentificationLevels</b></code><Bullet /><code>[IdentificationLevel]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardinginfoblegalrepresentativeacceptedidentificationlevelsbcodeidentificationlevel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>legalRepresentativeRecommendedIdentificationLevel</b></code><Bullet /><code>IdentificationLevel!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardinginfoblegalrepresentativerecommendedidentificationlevelbcodeidentificationlevel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInfo.<b>tcuUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardinginfobtcuurlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:f,SpecifiedBy:g,Badge:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type OnboardingInfo {\n  id: String!\n  accountName: String\n  accountCountry: AccountCountry\n  email: String\n  language: String\n  info: OnboardingAccountHolderInfo!\n  onboardingUrl: String!\n  onboardingState: OnboardingState\n  redirectUrl: String!\n  projectInfo: ProjectInfo\n  verificationFlow: VerificationFlow!\n  oAuthRedirectParameters: OAuthRedirectParameters\n  statusInfo: OnboardingStatusInfo!\n  supportingDocumentCollection: SupportingDocumentCollection!\n  legalRepresentativeAcceptedIdentificationLevels: [IdentificationLevel]!\n  legalRepresentativeRecommendedIdentificationLevel: IdentificationLevel!\n  tcuUrl: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"id"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"unique identifier of an onboarding")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobaccountnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"accountName"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobaccountcountrybcodeaccountcountry-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"accountCountry"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-country"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountCountry"))," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Country of the account that will be created at the end of the onboarding process")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobemailbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"email"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"email")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfoblanguagebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"language"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"language of the onboarding process. This consists of a 2-3 letter base language tag representing the language, optionally followed by additional subtags separated by '-'. The most common extra information is the country or region variant (like 'en-US' or 'fr-CA') or the type of alphabet to use (like 'sr-Latn'). Other variants like the type of orthography ('de-DE-1996') are usually not used in the context of this header. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"},"Learn More"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobinfobcodeonboardingaccountholderinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"info"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/onboarding-account-holder-info"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingAccountHolderInfo!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information regarding the Individual or the company to onboard")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobonboardingurlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"onboardingUrl"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Redirect the legal representative of a new account holder to this URL to start the onboarding process")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobonboardingstatebcodeonboardingstate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"onboardingState"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/onboarding-state"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingState"))," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Current computed state of onboarding")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobredirecturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"redirectUrl"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"URL used to redirect the user at the end of the onboarding process. If ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," the user is redirected to the white label web banking.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobprojectinfobcodeprojectinfo-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"projectInfo"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/project-info"},(0,r.kt)("inlineCode",{parentName:"a"},"ProjectInfo"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Project infos you set in the dashboard")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobverificationflowbcodeverificationflow--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"verificationFlow"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/verification-flow"},(0,r.kt)("inlineCode",{parentName:"a"},"VerificationFlow!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Verification Flow")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfoboauthredirectparametersbcodeoauthredirectparameters-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"oAuthRedirectParameters"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/oauth-redirect-parameters"},(0,r.kt)("inlineCode",{parentName:"a"},"OAuthRedirectParameters"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Extra parameters provided by partner")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobstatusinfobcodeonboardingstatusinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"statusInfo"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/onboarding-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingStatusInfo!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Status (valid/invalid/finalized) and details of errors on fields")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobsupportingdocumentcollectionbcodesupportingdocumentcollection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"supportingDocumentCollection"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/supporting-document-collection"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollection!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Supporting document collection related to onboarding.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfoblegalrepresentativeacceptedidentificationlevelsbcodeidentificationlevel--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"legalRepresentativeAcceptedIdentificationLevels"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/identification-level"},(0,r.kt)("inlineCode",{parentName:"a"},"[IdentificationLevel]!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of accepted identification level for the legal representative")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfoblegalrepresentativerecommendedidentificationlevelbcodeidentificationlevel--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"legalRepresentativeRecommendedIdentificationLevel"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/identification-level"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationLevel!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Recommended identification level for the legal representative")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginfobtcuurlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInfo.",(0,r.kt)("b",null,"tcuUrl"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Swan TCU URL")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/update-company-onboarding-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateCompanyOnboardingSuccessPayload")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/update-individual-onboarding-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingSuccessPayload")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);