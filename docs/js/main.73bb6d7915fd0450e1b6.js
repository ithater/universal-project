!function(e){function t(t){for(var n,o,l=t[0],s=t[1],c=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);m.length;)m.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={0:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([125,1]),r()}({125:function(e,t,r){r(126),e.exports=r(315)},315:function(e,t,r){"use strict";r.r(t);r(312),r(313);var n=function(){var e=document.querySelector(".header .burger"),t=document.querySelector(".header-navbar"),r=t.querySelector(".header-navbar__search");e.addEventListener("click",(function(){t.classList.toggle("header-navbar--mobile-visible"),r.classList.toggle("header-navbar__search--mobile-visible")}))},a=r(31),i=function(){var e=a(".recommended-tabs-buttons__button"),t=a(".recommended-tabs-content__item");e.on("click",(function(e){e.preventDefault();var r=a(this).attr("data-target");console.log(r),t.removeClass("recommended-tabs-content__item--visible"),a(r).addClass("recommended-tabs-content__item--visible")}))},o=(r(314),r(320)),l=r(317),s=r(318),c=r(319),u=function(){o.a.use([l.a,s.a,c.a]);new o.a(".article-cards-slider",{effect:"fade",speed:400,loop:!0,autoplay:!0,pagination:{el:".article-cards-slider-pagination",bulletClass:"article-cards-slider-pagination__dot",bulletActiveClass:"article-cards-slider-pagination__dot--active",clickable:!0}})},d=function(){a(".offered-articles-main-card__bookmark").on("click",(function(){a(this).toggleClass("offered-articles-main-card__bookmark--active")}))};function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t){var r=t.form,n=t.email,a=t.error;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=document.querySelector(r),this.emailInput=document.querySelector("#"+n.id),this.valid=!1,this.display=!1,this.error=a;var i=document.createElement("label");i.for=n.id,i.className=a.className,this.errElem=i,this.onInput=!1,console.log(this.form),this.init()}var t,r,n;return t=e,(r=[{key:"onInputValidation",value:function(){var e=this;this.form.addEventListener("input",(function(){var t=e.emailInput.value,r=e.display;e.valid=e.validateEmail(t),e.onInput=!0,e.valid?r&&(e.errElem.remove(),e.display=!1):""===t.trim()?r?e.errElem.textContent=e.error.message.require:(e.emailInput.insertAdjacentElement("afterend",e.errElem),e.errElem.textContent=e.error.message.require,e.display=!0):r?e.errElem.textContent=e.error.message.email:(e.emailInput.insertAdjacentElement("afterend",e.errElem),e.errElem.textContent=e.error.message.email,e.display=!0)}))}},{key:"init",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),console.log("validation");var r=e.emailInput.value,n=e.display;e.valid=e.validateEmail(r),e.onInput||(e.valid?n&&(e.errElem.remove(),e.display=!1):""===r.trim()?n?e.errElem.textContent=e.error.message.require:(e.emailInput.insertAdjacentElement("afterend",e.errElem),e.errElem.textContent=e.error.message.require,e.display=!0):n?e.errElem.textContent=e.error.message.email:(e.emailInput.insertAdjacentElement("afterend",e.errElem),e.errElem.textContent=e.error.message.email,e.display=!0),e.onInputValidation(),e.onInput=!0)}))}},{key:"validateEmail",value:function(e){return/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(e)}}])&&m(t.prototype,r),n&&m(t,n),e}(),p=function(){var e=document.getElementById("subscribe-form"),t=new f({form:"#subscribe-form",email:{id:"subscribe-email"},error:{className:"invalid",message:{require:"Данное поле должно быть заполнено",email:"Введите корректный email"}}});e.addEventListener("submit",(function(e){if(e.preventDefault(),t.valid){var r=new FormData(e.target),n={};r.forEach((function(e,t){return n[t]=e})),console.log(n),fetch("./assets/php/send.php",{method:"POST",body:n}).then((function(e){console.log(e)}))}}))};n(),i(),u(),d(),p()}});