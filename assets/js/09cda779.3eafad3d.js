"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[1323],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9729:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(5321);function o(e){let{version:n,severity:t,hasConfig:o,hasFix:i,isDeprecated:c}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:n,severity:t,hasConfig:o,hasFix:i,isDeprecated:c}))}},5321:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294);function a(e){let{hasConfig:n,hasFix:t,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},n&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),t&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:n,version:t,hasConfig:o,hasFix:i,isDeprecated:c}=e;const s=null==n?void 0:n.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",t),r.createElement("div",{className:"rule-severity "+s},s),r.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:c}))}},4379:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),o=t(9729);const i={},c=void 0,s={unversionedId:"rules/common/avoid-passing-async-when-sync-expected",id:"rules/common/avoid-passing-async-when-sync-expected",title:"avoid-passing-async-when-sync-expected",description:"Avoid passing asynchronous function as an argument where a synchronous function is expected.",source:"@site/docs/rules/common/avoid-passing-async-when-sync-expected.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-passing-async-when-sync-expected",permalink:"/docs/rules/common/avoid-passing-async-when-sync-expected",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-passing-async-when-sync-expected.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-non-null-assertion",permalink:"/docs/rules/common/avoid-non-null-assertion"},next:{title:"avoid-throw-in-catch-block",permalink:"/docs/rules/common/avoid-throw-in-catch-block"}},l={},d=[{value:"Example",id:"example",level:3}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"4.18.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Avoid passing asynchronous function as an argument where a synchronous function is expected."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For this rule it's recommended to exclude the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," folder.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void doSomethingWithCallback(VoidCallback function) {\n  ...\n  function();\n  ...\n}\n\nvoid main() {\n  doSomethingWithCallback(() async {\n    await Future.delayed(Duration(seconds: 1));\n    print('Hello World');\n  });\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void doSomethingWithCallback(VoidCallback function) {\n  ...\n  function();\n  ...\n}\n\nvoid main() {\n  doSomethingWithCallback(() {\n    print('Hello World');\n  });\n}\n")))}u.isMDXComponent=!0}}]);