parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=new Promise(function(e,n){document.body.addEventListener("mousedown",function(){e()}),setTimeout(function(){n(new Error("error"))},3e3)}),n=new Promise(function(e,n){document.body.addEventListener("click",function(){e()}),document.body.addEventListener("contextmenu",function(n){e(),n.preventDefault()})}),t=new Promise(function(e,n){var t=!1,o=!1;function c(){t&&o&&e()}document.body.addEventListener("click",function(){o=!0,c()}),document.body.addEventListener("contextmenu",function(){t=!0,c()})});function o(e,n){var t=document.createElement("div");t.dataset.qa="notification",t.className=n,t.textContent=e,document.body.append(t)}e.then(function(){o("First promise was resolved","success")},function(){o("First promise was rejected","warning")}),n.then(function(){o("Second promise was resolved","success")}),t.then(function(){o("Third promise was resolved","success")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e8c21fb1.js.map