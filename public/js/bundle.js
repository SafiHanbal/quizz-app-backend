parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iz0v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var e={question:{},highScores:[],timeLeft:30,bonusTimeLeft:30,maxTime:{easy:30,medium:45,hard:"&infin;",expert:"&infin;"},waitTime:{easy:0,medium:500,hard:1e3,expert:1500},questionNo:0,excludeQuestions:[],score:0,difficultyArr:["easy","easy","easy","medium","medium","medium","hard","hard","hard","expert"]};exports.store=e;
},{}],"GR39":[function(require,module,exports) {
"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(){r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(k){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(k){return{type:"throw",arg:k}}}e.wrap=f;var l={};function p(){}function v(){}function y(){}var d={};s(d,a,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==n&&o.call(m,a)&&(d=m);var w=y.prototype=p.prototype=Object.create(d);function x(t){["next","throw","return"].forEach(function(r){s(t,r,function(t){return this._invoke(r,t)})})}function b(r,e){var n;this._invoke=function(i,a){function c(){return new e(function(n,c){!function n(i,a,c,u){var s=h(r[i],r,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==t(l)&&o.call(l,"__await")?e.resolve(l.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):e.resolve(l).then(function(t){f.value=t,c(f)},function(t){return n("throw",t,c,u)})}u(s.arg)}(i,a,n,c)})}return n=n?n.then(c,c):c()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,s(w,"constructor",y),s(y,"constructor",v),v.displayName=s(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(w),s(w,u,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},e}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise(function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setHighScore=exports.getQuestion=exports.getHighScores=void 0;var o=function(){var t=n(r().mark(function t(e){var n,o,i,a=arguments;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.length>1&&void 0!==a[1]?a[1]:[],t.prev=1,e){t.next=4;break}throw new Error("Provide difficulty of question");case 4:return o="/api/v1/question/".concat(e,"?exclude=").concat(n.join(",")),t.next=7,fetch(o);case 7:return i=t.sent,t.next=10,i.json();case 10:return t.abrupt("return",t.sent);case 13:t.prev=13,t.t0=t.catch(1),console.error(t.t0.message);case 16:case"end":return t.stop()}},t,null,[[1,13]])}));return function(r){return t.apply(this,arguments)}}();exports.getQuestion=o;var i=function(){var t=n(r().mark(function t(){var e;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"/api/v1/high-score",t.next=4,fetch("/api/v1/high-score");case 4:return e=t.sent,t.next=7,e.json();case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0.message);case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(){return t.apply(this,arguments)}}();exports.getHighScores=i;var a=function(){var t=n(r().mark(function t(e,n){var o;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"/api/v1/high-score",t.next=4,fetch("/api/v1/high-score",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,score:n})});case 4:return o=t.sent,t.next=7,o.json();case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0.message);case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(r,e){return t.apply(this,arguments)}}();exports.setHighScore=a;
},{}],"YaYI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateCurrentScore=exports.timer=exports.renderQuestion=exports.renderHighScores=exports.endGame=exports.difficulty=exports.bonusTimer=void 0;var t,e,r,n=require("./store"),o=require("./fromBackend"),i=require("./eventListener"),a=require("./index");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return q()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=b(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=f;var l={};function h(){}function v(){}function m(){}var d={};u(d,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==e&&r.call(g,o)&&(d=g);var x=m.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function L(t,e){var n;this._invoke=function(o,i){function a(){return new e(function(n,a){!function n(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==s(l)&&r.call(l,"__await")?e.resolve(l.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):e.resolve(l).then(function(t){f.value=t,a(f)},function(t){return n("throw",t,a,c)})}c(u.arg)}(o,i,n,a)})}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:q}}function q(){return{value:void 0,done:!0}}return v.prototype=m,u(x,"constructor",m),u(m,"constructor",v),v.displayName=u(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(L.prototype),u(L.prototype,i,function(){return this}),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(x),u(x,a,"Generator"),u(x,o,function(){return this}),u(x,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function u(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,s,"next",t)}function s(t){u(i,n,o,a,s,"throw",t)}a(void 0)})}}exports.difficulty=r,exports.bonusTimer=e,exports.timer=t;var p=function(){var t=f(c().mark(function t(){var e;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.store.score>n.store.highScores[4].score?(e='\n      <h2 class="heading-popup">Hurray!</h2>\n      <p class="paragraph-popup">You scored '.concat(n.store.score,' points.</p>\n      <p class="paragraph-popup">\n        Enter your name to showcase your skills.\n      </p>\n      <form class="save-score-form">\n        <input\n          class="input"\n          type="text"\n          name="name"\n          id="name"\n           maxlength="10"\n        />\n        <input class="save" type="submit" value="Save" />\n      </form>\n    '),a.formContainer.innerHTML=e,a.saveScorePopup.classList.add("save-score-popup--active"),document.querySelector(".save-score-form").addEventListener("submit",i.saveFormListener)):(e='\n    <h2 class="heading-popup">Congratulations</h2>\n    <p class="paragraph-popup">You scored '.concat(n.store.score,' points.</p>\n    <p class="paragraph-popup">\n    Play better to reach HIGH SCORE.\n    </p>\n    '),a.formContainer.innerHTML=e,a.saveScorePopup.classList.add("save-score-popup--active"),setTimeout(function(){location.reload()},3e3));case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();exports.endGame=p;var l=function(){var i=f(c().mark(function i(){var s;return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return exports.difficulty=r=n.store.difficultyArr[n.store.questionNo],i.next=3,(0,o.getQuestion)(r,n.store.excludeQuestions);case 3:if("success"===(s=i.sent).status){i.next=6;break}return i.abrupt("return");case 6:n.store.question=s.data.question,n.store.question.waitTime=n.store.waitTime[r],n.store.excludeQuestions.push(n.store.question._id),n.store.questionNo=n.store.questionNo+1,a.currentQuestionElement.textContent=n.store.questionNo,a.questionElement.textContent=n.store.question.question,a.answerElements.forEach(function(t,e){t.textContent=n.store.question.answerOptions[e]}),(0,a.addAnswerContainerListener)(),n.store.timeLeft=n.store.maxTime[r],exports.bonusTimer=e=setInterval(function(){n.store.bonusTimeLeft=n.store.bonusTimeLeft-1,0===n.store.timeLeft&&clearInterval(e)},1e3),"&infin;"===n.store.timeLeft?(a.timerTextElement.innerHTML=n.store.timeLeft,a.timerTextElement.style.fontSize="4rem"):(a.timerTextElement.textContent=n.store.timeLeft,exports.timer=t=setInterval(function(){n.store.timeLeft=n.store.timeLeft-1,0===n.store.timeLeft&&((0,a.removeAnswerContainerListener)(),clearInterval(t),p()),a.timerTextElement.textContent=n.store.timeLeft},1e3));case 17:case"end":return i.stop()}},i)}));return function(){return i.apply(this,arguments)}}();exports.renderQuestion=l;var h=function(){var t=f(c().mark(function t(){var e;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.getHighScores)();case 2:if("success"===(e=t.sent).status){t.next=5;break}return t.abrupt("return");case 5:n.store.highScores=e.data.highScores,n.store.highScores.forEach(function(t,e){a.nameArr[e].textContent=t.name,a.highScoreArr[e].textContent=t.score});case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();exports.renderHighScores=h;var v=function(){var t={easy:300,medium:500,hard:700,expert:1e3}[r],e=10*n.store.bonusTimeLeft;n.store.score=n.store.score+t+e,a.myScore.textContent=n.store.score};exports.updateCurrentScore=v;
},{"./store":"iz0v","./fromBackend":"GR39","./eventListener":"jeLD","./index":"Focm"}],"jeLD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.saveFormListener=exports.answerContainerEventListener=void 0;var t=require("./store"),e=require("./fromBackend"),r=require("./index"),n=require("./helper");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var h={};function p(){}function v(){}function y(){}var d={};s(d,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==e&&r.call(g,a)&&(d=g);var w=y.prototype=p.prototype=Object.create(d);function L(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var n;this._invoke=function(i,a){function c(){return new e(function(n,c){!function n(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==o(h)&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):e.resolve(h).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,u)})}u(s.arg)}(i,a,n,c)})}return n=n?n.then(c,c):c()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=y,s(w,"constructor",y),s(y,"constructor",v),v.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},L(x.prototype),s(x.prototype,c,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},L(w),s(w,u,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}var u=function(e){var o=t.store.question;if(e.preventDefault(),"answer"!==!e.target.className){var i=e.target.closest(".answer");null==i||i.classList.add("answer--selected"),(0,r.removeAnswerContainerListener)(),clearInterval(n.timer),clearInterval(n.bonusTimer),setTimeout(function(){i.querySelector(".answer-text").textContent===o.answerCorrect?(i.classList.remove("answer--selected"),i.classList.add("answer--right"),setTimeout(function(){if((0,n.updateCurrentScore)(),t.store.bonusTimeLeft=30,10===t.store.questionNo)return(0,n.endGame)();(0,n.renderQuestion)("easy"),i.classList.remove("answer--right")},1e3)):(i.classList.remove("answer--selected"),i.classList.add("answer--wrong"),setTimeout(function(){return(0,n.endGame)()},1e3))},o.waitTime)}};exports.answerContainerEventListener=u;var s=function(){var r=c(i().mark(function r(n){var o;return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.next=3,(0,e.setHighScore)(document.querySelector(".input").value,t.store.score);case 3:o=r.sent,document.querySelector(".save").style.backgroundColor="#b3b3b3",document.querySelector(".save").value="Saving...","success"===o.status&&setTimeout(function(){location.reload()},2e3);case 7:case"end":return r.stop()}},r)}));return function(t){return r.apply(this,arguments)}}();exports.saveFormListener=s;
},{"./store":"iz0v","./fromBackend":"GR39","./index":"Focm","./helper":"YaYI"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timerTextElement=exports.saveScorePopup=exports.removeAnswerContainerListener=exports.questionElement=exports.nameArr=exports.myScore=exports.input=exports.highScoreArr=exports.formContainer=exports.form=exports.currentQuestionElement=exports.answerElements=exports.addAnswerContainerListener=void 0;var e=require("./eventListener"),r=require("./helper"),t=document.querySelector(".answer-container"),o=document.querySelector(".rules"),n=document.querySelector(".close"),s=document.querySelector(".info-popup"),c=document.querySelector(".restart"),u=document.querySelector(".question");exports.questionElement=u;var i=document.querySelectorAll(".answer-text");exports.answerElements=i;var a=document.querySelector(".timer-text");exports.timerTextElement=a;var p=document.querySelector(".my-score");exports.myScore=p;var l=document.querySelectorAll(".name");exports.nameArr=l;var m=document.querySelectorAll(".score");exports.highScoreArr=m;var d=document.querySelector(".input");exports.input=d;var v=document.querySelector(".save-score-form");exports.form=v;var x=document.querySelector(".save-score-form-container");exports.formContainer=x;var S=document.querySelector(".save-score-popup");exports.saveScorePopup=S;var q=document.querySelector(".current-question");exports.currentQuestionElement=q,o.addEventListener("click",function(){s.classList.add("info-popup--active")}),n.addEventListener("click",function(){s.classList.remove("info-popup--active")}),c.addEventListener("click",function(){location.reload()});var y=function(){return t.removeEventListener("click",e.answerContainerEventListener)};exports.removeAnswerContainerListener=y;var f=function(){return t.addEventListener("click",e.answerContainerEventListener)};exports.addAnswerContainerListener=f,(0,r.renderQuestion)(),(0,r.renderHighScores)();
},{"./eventListener":"jeLD","./helper":"YaYI"}]},{},["Focm"], null)
//# sourceMappingURL=/bundle.js.map