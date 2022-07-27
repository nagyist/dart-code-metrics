"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5326],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),l=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=l(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return t?r.createElement(f,o(o({ref:a},m),{},{components:t})):r.createElement(f,o({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1234:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),n=(t(7294),t(3905));const i={sidebar_label:"Overview",sidebar_position:0},o="Rules overview",s={unversionedId:"rules/overview",id:"rules/overview",title:"Rules overview",description:"Rules are grouped by a category to help you understand their purpose.",source:"@site/docs/rules/overview.md",sourceDirName:"rules",slug:"/rules/overview",permalink:"/docs/rules/overview",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Overview",sidebar_position:0},sidebar:"sidebar",previous:{title:"Check unused l10n",permalink:"/docs/cli/check-unused-l10n"},next:{title:"Avoid banned imports",permalink:"/docs/rules/common/avoid-banned-imports"}},p={},l=[{value:"Common",id:"common",level:2},{value:"Flutter specific",id:"flutter-specific",level:2},{value:"Intl specific",id:"intl-specific",level:2},{value:"Angular specific",id:"angular-specific",level:2}],m={toc:l};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rules-overview"},"Rules overview"),(0,n.kt)("p",null,"Rules are grouped by a category to help you understand their purpose."),(0,n.kt)("p",null,"Rules configuration is ",(0,n.kt)("a",{parentName:"p",href:"../getting-started/configuration#configuring-a-rules-entry"},"described here"),"."),(0,n.kt)("h2",{id:"common"},"Common"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-banned-imports"},"avoid-banned-imports")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-banned-imports#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Configure some imports that you want to ban.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-collection-methods-with-unrelated-types"},"avoid-collection-methods-with-unrelated-types")),(0,n.kt)("p",{parentName:"li"},"  Avoid using collection methods with unrelated types, such as accessing a map of integers using a string key.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-duplicate-exports"},"avoid-duplicate-exports")),(0,n.kt)("p",{parentName:"li"},"  Warns when a file has multiple ",(0,n.kt)("inlineCode",{parentName:"p"},"exports")," declarations with the same URI.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-dynamic"},"avoid-dynamic")),(0,n.kt)("p",{parentName:"li"},"  Warns when ",(0,n.kt)("inlineCode",{parentName:"p"},"dynamic")," type is used as variable type in declaration, return type of a function, etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-global-state"},"avoid-global-state")),(0,n.kt)("p",{parentName:"li"},"  Warns about usage mutable global variables.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-ignoring-return-values"},"avoid-ignoring-return-values")),(0,n.kt)("p",{parentName:"li"},"  Warns when a return value of a method or function invocation or a class instance property access is not used.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-late-keyword"},"avoid-late-keyword")),(0,n.kt)("p",{parentName:"li"},"  Warns when a field or variable is declared with a ",(0,n.kt)("inlineCode",{parentName:"p"},"late")," keyword.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-missing-enum-constant-in-map"},"avoid-missing-enum-constant-in-map")),(0,n.kt)("p",{parentName:"li"},"  Warns when a enum constant is missing in a map declaration.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-nested-conditional-expressions"},"avoid-nested-conditional-expressions")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Warns about nested conditional expressions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-non-ascii-symbols"},"avoid-non-ascii-symbols")),(0,n.kt)("p",{parentName:"li"},"  Warns when a string literal contains non ascii characters.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-non-null-assertion"},"avoid-non-null-assertion")),(0,n.kt)("p",{parentName:"li"},"  Warns when non null assertion operator (or \u201cbang\u201d operator) is used for a property access or method invocation. The operator check works at runtime and it may fail and throw a runtime exception.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-throw-in-catch-block"},"avoid-throw-in-catch-block")),(0,n.kt)("p",{parentName:"li"},"  Warns when call ",(0,n.kt)("inlineCode",{parentName:"p"},"throw")," in a catch block.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-top-level-members-in-tests"},"avoid-top-level-members-in-tests")),(0,n.kt)("p",{parentName:"li"},"  Warns when a public top-level member (expect the entrypoint) is declared inside a test file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-unnecessary-type-assertions"},"avoid-unnecessary-type-assertions")),(0,n.kt)("p",{parentName:"li"},"  Warns about unnecessary usage of 'is' and 'whereType' operators.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-unnecessary-type-casts"},"avoid-unnecessary-type-casts")),(0,n.kt)("p",{parentName:"li"},"  Warns about unnecessary usage of 'as' operators.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-unrelated-type-assertions"},"avoid-unrelated-type-assertions")),(0,n.kt)("p",{parentName:"li"},"  Warns about unrelated usages of 'is' operators.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-unused-parameters"},"avoid-unused-parameters")),(0,n.kt)("p",{parentName:"li"},"  Checks for unused parameters inside a function or method body.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/ban-name"},"ban-name")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/ban-name#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Configure some names that you want to ban.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/binary-expression-operand-order"},"binary-expression-operand-order")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Warns when a literal value is on the left hand side in a binary expressions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/double-literal-format"},"double-literal-format")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Checks that double literals should begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"0.")," instead of just ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", and should not end with a trailing ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/format-comment"},"format-comment")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/format-comment#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"Prefer format comments like sentences.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering"},"member-ordering")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Enforces ordering for a class members.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering-extended"},"member-ordering-extended")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering-extended#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Enforces ordering for a class members.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/newline-before-return"},"newline-before-return")),(0,n.kt)("p",{parentName:"li"},"  Enforces blank line between statements and return in a block.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/no-boolean-literal-compare"},"no-boolean-literal-compare")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Warns on comparison to a boolean literal, as in x == true.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/no-empty-block"},"no-empty-block")),(0,n.kt)("p",{parentName:"li"},"  Disallows empty blocks except catch clause block.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/no-equal-arguments"},"no-equal-arguments")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,n.kt)("p",{parentName:"li"},"  Warns when equal arguments passed to a function or method invocation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/no-equal-then-else"},"no-equal-then-else")),(0,n.kt)("p",{parentName:"li"},"  Warns when if statement has equal then and else statements or conditional expression has equal then and else expressions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/no-magic-number"},"no-magic-number")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/no-magic-number#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Warns against using number literals outside of named constants or variables.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/no-object-declaration"},"no-object-declaration")),(0,n.kt)("p",{parentName:"li"},"  Warns when a class member is declared with Object type.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-async-await"},"prefer-async-await")),(0,n.kt)("p",{parentName:"li"},"  Recommends to use async/await syntax to handle Futures result instead of ",(0,n.kt)("inlineCode",{parentName:"p"},".then()")," invocation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-commenting-analyzer-ignores"},"prefer-commenting-analyzer-ignores")),(0,n.kt)("p",{parentName:"li"},"  Warns when ",(0,n.kt)("inlineCode",{parentName:"p"},"// ignore:")," comments are left without any additional description why this ignore is applied.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-conditional-expressions"},"prefer-conditional-expressions")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Recommends to use a conditional expression instead of assigning to the same thing or return statement in each branch of an if statement.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-correct-identifier-length"},"prefer-correct-identifier-length")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-correct-identifier-length#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Warns when identifier name length very short or long.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-correct-type-name"},"prefer-correct-type-name")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-correct-type-name#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Type name should only contain alphanumeric characters, start with an uppercase character and span between min-length and max-length characters in length.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-enums-by-name"},"prefer-enums-by-name")),(0,n.kt)("p",{parentName:"li"},"  Since Dart 2.15 it's possible to use ",(0,n.kt)("inlineCode",{parentName:"p"},"byName")," method on enum ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," prop instead of searching the value with ",(0,n.kt)("inlineCode",{parentName:"p"},"firstWhere"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-first"},"prefer-first")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Use ",(0,n.kt)("inlineCode",{parentName:"p"},"first")," to gets the first element.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-immediate-return"},"prefer-immediate-return")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Warns when a method or a function returns a variable declared right before the return statement.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-last"},"prefer-last")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Use ",(0,n.kt)("inlineCode",{parentName:"p"},"last")," to gets the last element.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-match-file-name"},"prefer-match-file-name")),(0,n.kt)("p",{parentName:"li"},"  Warns when file name does not match class name.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-trailing-comma"},"prefer-trailing-comma")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-trailing-comma#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Check for trailing comma for arguments, parameters, enum values and collections.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/tag-name"},"tag-name")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-trailing-comma#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"Warns when tag name does not match class name."))),(0,n.kt)("h2",{id:"flutter-specific"},"Flutter specific"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/always-remove-listener"},"always-remove-listener")),(0,n.kt)("p",{parentName:"li"},"  Warns when an event listener is added but never removed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-border-all"},"avoid-border-all")),(0,n.kt)("p",{parentName:"li"},"  Avoid using Border.all constructor.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-returning-widgets"},"avoid-returning-widgets")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-returning-widgets#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Warns when a method or function returns a Widget or subclass of a Widget.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-unnecessary-setstate"},"avoid-unnecessary-setstate")),(0,n.kt)("p",{parentName:"li"},"  Warns when ",(0,n.kt)("inlineCode",{parentName:"p"},"setState")," is called inside ",(0,n.kt)("inlineCode",{parentName:"p"},"initState"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"didUpdateWidget")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," methods and when it is called from a ",(0,n.kt)("inlineCode",{parentName:"p"},"sync")," method that is called inside those methods.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-wrapping-in-padding"},"avoid-wrapping-in-padding")),(0,n.kt)("p",{parentName:"li"},"  Warns when a widget is wrapped in a Padding widget but has a padding settings by itself.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-use-expanded-as-spacer"},"avoid-use-expanded-as-spacer")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Avoid using Expanded widget as Spacer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-const-border-radius"},"prefer-const-border-radius")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Warns when used non const border radius.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-correct-edge-insets-constructor"},"prefer-correct-edge-insets-constructor")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Prefer correct EdgeInsets constructor.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-extracting-callbacks"},"prefer-extracting-callbacks")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-extracting-callbacks#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Warns about inline callbacks in a widget tree and suggest to extract them to a widget method.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-single-widget-per-file"},"prefer-single-widget-per-file")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-single-widget-per-file#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Warns when a file contains more than a single widget."))),(0,n.kt)("h2",{id:"intl-specific"},"Intl specific"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/intl/prefer-intl-name"},"prefer-intl-name")," ","\xa0"," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,n.kt)("p",{parentName:"li"},"  Recommends to use ClassName_ClassMemberName pattern for Intl methods name argument.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/intl/provide-correct-intl-args"},"provide-correct-intl-args")),(0,n.kt)("p",{parentName:"li"},"  Warns when the Intl.message() invocation has incorrect args."))),(0,n.kt)("h2",{id:"angular-specific"},"Angular specific"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/angular/avoid-preserve-whitespace-false"},"avoid-preserve-whitespace-false")),(0,n.kt)("p",{parentName:"li"},"  Warns when a ",(0,n.kt)("inlineCode",{parentName:"p"},"@Component")," annotation has explicit false value for preserveWhitespace.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/angular/component-annotation-arguments-ordering"},"component-annotation-arguments-ordering")," ","\xa0"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/rules/angular/component-annotation-arguments-ordering#config-example"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,n.kt)("p",{parentName:"li"},"  Enforces Angular ",(0,n.kt)("inlineCode",{parentName:"p"},"@Component")," annotation arguments ordering.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/rules/angular/prefer-on-push-cd-strategy"},"prefer-on-push-cd-strategy")),(0,n.kt)("p",{parentName:"li"},"  Prefer setting changeDetection: ChangeDetectionStrategy.OnPush in Angular ",(0,n.kt)("inlineCode",{parentName:"p"},"@Component")," annotations."))))}c.isMDXComponent=!0}}]);