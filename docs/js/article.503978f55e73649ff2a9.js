!function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(m&&m(e);u.length;)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={1:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var m=c;o.push([323,0]),n()}({30:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n.d(e,"a",(function(){return r}));var r=function(){function t(e){var n=e.formId,a=e.input,r=a.inputId,o=a.validationFunc,i=e.error;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=document.getElementById(n),this.input=document.getElementById(r),this.valid="invalid",this.display=!1,this.error=i;var s=document.createElement("label");s.for=r.id,s.className=i.className,this.errElem=s,this.validationFunc=o,this.onInput=!1,this.init()}var e,n,r;return e=t,(n=[{key:"onInputValidation",value:function(){this.onInput=!0,this.form.addEventListener("input",this.inputHandler.bind(this))}},{key:"inputHandler",value:function(t){t.preventDefault();var e=this.input.value,n=this.display;this.valid=this.validationFunc(e),this.displayValidationResult(n)}},{key:"displayValidationResult",value:function(t){switch(this.valid){case"valid":t&&(this.errElem.remove(),this.display=!1);break;case"require":t?this.errElem.textContent=this.error.message.require:(this.input.insertAdjacentElement("afterend",this.errElem),this.errElem.textContent=this.error.message.require,this.display=!0);break;case"invalid":t?this.errElem.textContent=this.error.message.invalid:(this.input.insertAdjacentElement("afterend",this.errElem),this.errElem.textContent=this.error.message.invalid,this.display=!0)}}},{key:"initHandler",value:function(t){if(t.preventDefault(),!this.onInput){var e=this.input.value,n=this.display;this.valid=this.validationFunc(e),this.displayValidationResult(n),this.onInputValidation()}}},{key:"init",value:function(){this.form.addEventListener("submit",this.initHandler.bind(this))}}])&&a(e.prototype,n),r&&a(e,r),t}()},323:function(t,e,n){n(99),t.exports=n(324)},324:function(t,e,n){"use strict";n.r(e);n(133),n(134);var a=n(53),r=n(55),o=n(56),i=n(57),s=n(58),c=n(54),l=(n(135),n(326)),m=n(3),d=n(1);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var v={update:function(){var t=this,e=t.params.navigation;if(!t.params.loop){var n=t.navigation,a=n.$nextEl,r=n.$prevEl;r&&r.length>0&&(t.isBeginning?r.addClass(e.disabledClass):r.removeClass(e.disabledClass),r[t.params.watchOverflow&&t.isLocked?"addClass":"removeClass"](e.lockClass)),a&&a.length>0&&(t.isEnd?a.addClass(e.disabledClass):a.removeClass(e.disabledClass),a[t.params.watchOverflow&&t.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(t){var e=this;t.preventDefault(),e.isBeginning&&!e.params.loop||e.slidePrev()},onNextClick:function(t){var e=this;t.preventDefault(),e.isEnd&&!e.params.loop||e.slideNext()},init:function(){var t,e,n=this,a=n.params.navigation;(a.nextEl||a.prevEl)&&(a.nextEl&&(t=Object(m.a)(a.nextEl),n.params.uniqueNavElements&&"string"==typeof a.nextEl&&t.length>1&&1===n.$el.find(a.nextEl).length&&(t=n.$el.find(a.nextEl))),a.prevEl&&(e=Object(m.a)(a.prevEl),n.params.uniqueNavElements&&"string"==typeof a.prevEl&&e.length>1&&1===n.$el.find(a.prevEl).length&&(e=n.$el.find(a.prevEl))),t&&t.length>0&&t.on("click",n.navigation.onNextClick),e&&e.length>0&&e.on("click",n.navigation.onPrevClick),Object(d.c)(n.navigation,{$nextEl:t,nextEl:t&&t[0],$prevEl:e,prevEl:e&&e[0]}))},destroy:function(){var t=this,e=t.navigation,n=e.$nextEl,a=e.$prevEl;n&&n.length&&(n.off("click",t.navigation.onNextClick),n.removeClass(t.params.navigation.disabledClass)),a&&a.length&&(a.off("click",t.navigation.onPrevClick),a.removeClass(t.params.navigation.disabledClass))}},p={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){Object(d.a)(this,{navigation:u({},v)})},on:{init:function(t){t.navigation.init(),t.navigation.update()},toEdge:function(t){t.navigation.update()},fromEdge:function(t){t.navigation.update()},destroy:function(t){t.navigation.destroy()},click:function(t,e){var n,a=t.navigation,r=a.$nextEl,o=a.$prevEl;!t.params.navigation.hideOnClick||Object(m.a)(e.target).is(o)||Object(m.a)(e.target).is(r)||(r?n=r.hasClass(t.params.navigation.hiddenClass):o&&(n=o.hasClass(t.params.navigation.hiddenClass)),!0===n?t.emit("navigationShow"):t.emit("navigationHide"),r&&r.toggleClass(t.params.navigation.hiddenClass),o&&o.toggleClass(t.params.navigation.hiddenClass))}}},f=n(2);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var b={handle:function(t){var e=this,n=Object(f.b)(),a=Object(f.a)(),r=e.rtlTranslate,o=t;o.originalEvent&&(o=o.originalEvent);var i=o.keyCode||o.charCode,s=e.params.keyboard.pageUpDown,c=s&&33===i,l=s&&34===i,m=37===i,d=39===i,u=38===i,v=40===i;if(!e.allowSlideNext&&(e.isHorizontal()&&d||e.isVertical()&&v||l))return!1;if(!e.allowSlidePrev&&(e.isHorizontal()&&m||e.isVertical()&&u||c))return!1;if(!(o.shiftKey||o.altKey||o.ctrlKey||o.metaKey||a.activeElement&&a.activeElement.nodeName&&("input"===a.activeElement.nodeName.toLowerCase()||"textarea"===a.activeElement.nodeName.toLowerCase()))){if(e.params.keyboard.onlyInViewport&&(c||l||m||d||u||v)){var p=!1;if(e.$el.parents("."+e.params.slideClass).length>0&&0===e.$el.parents("."+e.params.slideActiveClass).length)return;var h=n.innerWidth,b=n.innerHeight,g=e.$el.offset();r&&(g.left-=e.$el[0].scrollLeft);for(var _=[[g.left,g.top],[g.left+e.width,g.top],[g.left,g.top+e.height],[g.left+e.width,g.top+e.height]],y=0;y<_.length;y+=1){var k=_[y];k[0]>=0&&k[0]<=h&&k[1]>=0&&k[1]<=b&&(p=!0)}if(!p)return}e.isHorizontal()?((c||l||m||d)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),((l||d)&&!r||(c||m)&&r)&&e.slideNext(),((c||m)&&!r||(l||d)&&r)&&e.slidePrev()):((c||l||u||v)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),(l||v)&&e.slideNext(),(c||u)&&e.slidePrev()),e.emit("keyPress",i)}},enable:function(){var t=this,e=Object(f.a)();t.keyboard.enabled||(Object(m.a)(e).on("keydown",t.keyboard.handle),t.keyboard.enabled=!0)},disable:function(){var t=this,e=Object(f.a)();t.keyboard.enabled&&(Object(m.a)(e).off("keydown",t.keyboard.handle),t.keyboard.enabled=!1)}},g={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){Object(d.a)(this,{keyboard:h({enabled:!1},b)})},on:{init:function(t){t.params.keyboard.enabled&&t.keyboard.enable()},destroy:function(t){t.keyboard.enabled&&t.keyboard.disable()}}},_=function(){l.a.use([p,g]);new l.a(".article-slider__container",{direction:"horizontal",loop:!0,navigation:{nextEl:".article-slider-button--next",prevEl:".article-slider-button--prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},autoHeight:!0})};function y(t,e,n,a,r,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,r)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){y(o,a,r,i,s,"next",t)}function s(t){y(o,a,r,i,s,"throw",t)}i(void 0)}))}}var w=function(){var t=document.querySelector(".comments-download-more"),e="no data",n=function(){var n=e.length>2?3:e.length;t.remove();for(var a=0;a<n;a++){var r=e[a],o=r.date,i=r.name,s=r.message,c=r.likes,l=r.image,m=document.createElement("div"),d=parseInt(c)>0?"positive":"negative";m.className="comments-comment-card comments__comment-card",m.innerHTML='\n\t\t\t\t<img\n\t\t\t\t\tsrc="'.concat(l,'"\n\t\t\t\t\talt="').concat(i,'"\n\t\t\t\t\tclass="comments-comment-card__avatar"\n\t\t\t\t/>\n\n\t\t\t\t<div class="comments-comment-card__wrapper">\n\t\t\t\t\t<div class="comments-comment-card__info">\n\t\t\t\t\t\t<span class="comments-comment-card__name">').concat(i,'</span>\n\t\t\t\t\t\t<span class="comments-comment-card__date">').concat(o,'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t\x3c!-- /.comments-comments-card__info --\x3e\n\t\t\t\t\t<p class="comments-comment-card__text">\n\t\t\t\t\t\t').concat(s,'\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class="comments-comment-card__panel">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc="./assets/image/comment-icon.svg"\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\talt="Иконка комментарния"\n\t\t\t\t\t\t\t\tclass="comments-comment-card__replay-icon"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<span class="comments-comment-card__replay-text">Ответить</span>\n\t\t\t\t\t\t\n            <button class="comments-comment-card__rating-button">\n            <svg\n            width="15"\n            height="15"\n            class="comments-comment-card__like"\n          >\n            <use xlink:href="./assets/image/rating.svg#Thumb-like"></use>\n          </svg>\n          </button>\n          \n         \n\n\n            <span \n            data-likes="').concat(parseInt(c),'"\n\t\t\t\t\t\tclass="comments-comment-card__like-counter comments-comment-card__like-counter--').concat(d,'"\n\t\t\t\t\t\t>').concat(c,'</span>\n\t\t\t\t\t\t\n\t\t\t\t\t\t          \n            <button class="comments-comment-card__rating-button">\n            <svg\n            width="15"\n            height="15"\n            class="comments-comment-card__dislike"\n          >\n            <use xlink:href="./assets/image/rating.svg#Thumb-dislike"></use>\n          </svg>\n          </button>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\x3c!-- /.comments-comments-card__wrapper --\x3e\n\t\t\t'),document.querySelector(".comments__container").append(m)}e.splice(0,n),e.length>0&&document.querySelector(".comments__container").append(t)};t.addEventListener("click",k(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("no data"!==e){t.next=10;break}return t.next=3,fetch("./assets/db-comments.json");case 3:return a=t.sent,t.next=6,a.json();case 6:e=t.sent,n(),t.next=11;break;case 10:n();case 11:case"end":return t.stop()}}),t)}))))},E=n(30),x=function(){var t=document.getElementById("add-comment"),e=document.getElementById("message"),n=new E.a({formId:"add-comment",input:{inputId:"message",validationFunc:function(t){var e=t.trim();return""===e?"require":e.length<99?"invalid":e.length>=100?"valid":void 0}},error:{className:"invalid-message",message:{require:"Данное поле должно быть заполнено",invalid:"Введите минимум 100 символов"}}}),a=function(t){if(t.preventDefault(),"valid"===n.valid){var a={date:function(){var t=new Date,e=function(t){return t>9?t:"0"+t},n=e(t.getDate()),a=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"][t.getMonth()],r=e(t.getHours()),o=e(t.getMinutes());return"".concat(n," ").concat(a,", ").concat(r,":").concat(o)},name:"Екатерина Орлова",image:"./assets/image/current-user.png",message:e.value},r=a.date,o=a.name,i=a.message,s=a.image,c=document.createElement("div");c.className="comments-comment-card comments__comment-card",c.innerHTML='\n\t\t\t\t\n\t\t\t\t<img\n\t\t\t\t\tsrc="'.concat(s,'"\n\t\t\t\t\talt="').concat(o,'"\n\t\t\t\t\tclass="comments-comment-card__avatar"\n\t\t\t\t/>\n\n\t\t\t\t<div class="comments-comment-card__wrapper">\n\t\t\t\t\t<div class="comments-comment-card__info">\n\t\t\t\t\t\t<span class="comments-comment-card__name">').concat(o,'</span>\n\t\t\t\t\t\t<span class="comments-comment-card__date">').concat(r(),'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t\x3c!-- /.comments-comments-card__info --\x3e\n\t\t\t\t\t<p class="comments-comment-card__text">\n\t\t\t\t\t\t').concat(i,'\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class="comments-comment-card__panel">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc="./assets/image/comment-icon.svg"\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\talt="Иконка комментарния"\n\t\t\t\t\t\t\t\tclass="comments-comment-card__replay-icon"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<span class="comments-comment-card__replay-text">Ответить</span>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button class="comments-comment-card__rating-button">\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\twidth="15"\n\t\t\t\t\t\theight="15"\n\t\t\t\t\t\tclass="comments-comment-card__like"\n\t\t\t\t\t>\n\t\t\t\t\t\t<use xlink:href="./assets/image/rating.svg#Thumb-like"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t\t<span \n\t\t\t\t\t\tdata-likes="0"\n\t\t\t\t\t\tclass="comments-comment-card__like-counter"\n\t\t\t\t\t\t>0</span>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button class="comments-comment-card__rating-button">\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\twidth="15"\n\t\t\t\t\t\theight="15"\n\t\t\t\t\t\tclass="comments-comment-card__dislike"\n\t\t\t\t\t>\n\t\t\t\t\t\t<use xlink:href="./assets/image/rating.svg#Thumb-dislike"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\x3c!-- /.comments-comments-card__wrapper --\x3e\n\t\t\t'),document.querySelector(".comments-download-more")?document.querySelector(".comments-download-more").insertAdjacentElement("beforebegin",c):document.querySelector(".comments__container").append(c),e.value=""}};t.addEventListener("submit",a)},C=function(){document.querySelector(".comments__container").addEventListener("click",(function(t){var e=t.target.closest("svg"),n=t.target.closest(".comments-comment-card__panel");if(n){var a=n.querySelector(".comments-comment-card__like"),r=n.querySelector(".comments-comment-card__dislike"),o=n.querySelector(".comments-comment-card__like-counter"),i=o.dataset.likes;e===a&&(a.classList.contains("comments-comment-card__like--active")?(a.classList.remove("comments-comment-card__like--active"),o.textContent=+i>0?"+"+i:i):(a.classList.add("comments-comment-card__like--active"),r.classList.remove("comments-comment-card__dislike--active"),o.textContent=+i+1>0?"+"+(+i+1):+i+1)),e===r&&(r.classList.contains("comments-comment-card__dislike--active")?(r.classList.remove("comments-comment-card__dislike--active"),o.textContent=+i>0?"+"+i:i):(r.classList.add("comments-comment-card__dislike--active"),a.classList.remove("comments-comment-card__like--active"),o.textContent=+i-1>0?"+"+(+i-1):+i-1)),0==+o.textContent?(o.classList.remove("comments-comment-card__like-counter--negative"),o.classList.remove("comments-comment-card__like-counter--positive")):+o.textContent>0?(o.classList.add("comments-comment-card__like-counter--positive"),o.classList.remove("comments-comment-card__like-counter--negative")):+o.textContent<0&&(o.classList.remove("comments-comment-card__like-counter--positive"),o.classList.add("comments-comment-card__like-counter--negative"))}}))},O=function(){var t=document.querySelector(".comments__container"),e=document.getElementById("add-comment");t.addEventListener("click",(function(t){t.target.closest([".comments-comment-card__replay-icon",".comments-comment-card__replay-text",".comments__button"].join(", "))&&e.scrollIntoView({block:"center",behavior:"smooth"})}))};Object(a.a)(),Object(r.a)(),Object(o.a)(),Object(i.a)(),Object(s.a)(),Object(c.a)(),_(),w(),x(),C(),O()},53:function(t,e,n){"use strict";e.a=function(){var t=document.querySelector(".header .burger"),e=document.querySelector(".header-navbar"),n=e.querySelector(".header-navbar__search");t.addEventListener("click",(function(){e.classList.toggle("header-navbar--mobile-visible"),n.classList.toggle("header-navbar__search--mobile-visible")}))}},54:function(t,e,n){"use strict";var a=n(8);e.a=function(){a(".bookmark").on("click",(function(){a(this).toggleClass("bookmark--active")}))}},55:function(t,e,n){"use strict";var a=n(30);e.a=function(){var t=document.getElementById("subscribe-form"),e=document.getElementById("modal-subscribe-form"),n=document.querySelector(".modal-subscribe"),r=document.querySelector(".modal-result"),o=function(t){return""===t.trim()?"require":/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(t)?"valid":"invalid"},i={require:"Данное поле должно быть заполнено",invalid:"Введите корректный email"},s=new a.a({formId:"subscribe-form",input:{inputId:"subscribe-email",validationFunc:o},error:{className:"invalid",message:i}}),c=new a.a({formId:"modal-subscribe-form",input:{inputId:"modal-subscribe-email",validationFunc:o},error:{className:"invalid",message:i}});t.addEventListener("submit",(function(t){t.preventDefault();var e=s.valid,n=t.target;if("valid"===e){var a=new FormData(n);fetch("./assets/php/send.php",{method:"POST",body:a}).then((function(t){if(200!==t.status)throw new Error(t.status);n.querySelectorAll("input").forEach((function(t){var e=t.type.toLowerCase();"button"===e&&"range"===e||(t.value="")})),r.classList.add("modal-result--visible"),window.subscription=!0})).catch((function(t){return console.error(t)}))}})),e.addEventListener("submit",(function(t){t.preventDefault();var e=c.valid,a=t.target;if("valid"===e){var o=new FormData(a);fetch("./assets/php/send.php",{method:"POST",body:o}).then((function(t){if(200!==t.status)throw new Error(t.status);a.querySelectorAll("input").forEach((function(t){var e=t.type.toLowerCase();"button"===e&&"range"===e||(t.value="")})),n.classList.remove("modal-subscribe--visible"),r.classList.add("modal-result--visible")})).catch((function(t){return console.error(t)}))}}))}},56:function(t,e,n){"use strict";var a=n(8);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){r=!0,o=t}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}e.a=function(){var t=a(".modal-subscribe__close"),e=a(".modal-subscribe"),n=a(".modal-subscribe__overlay"),o=function(){return e.removeClass("modal-subscribe--visible")};t.on("click",o),n.on("click",o),window.addEventListener("keydown",(function(t){"Escape"===t.key&&o()}));var i,s;setTimeout((function(){var t,n,a;window.subscription||"showed"===(t="showed",n=document.cookie.split("; "),a="not found",n.every((function(e){var n=r(e.split("="),2),o=n[0],i=n[1];return o!==t||(a=i,!1)})),a)||(e.addClass("modal-subscribe--visible"),function(t,e,n){var a="";a+="".concat(encodeURIComponent(t),"="),a+="".concat(encodeURIComponent(e),";"),a+="max-age=".concat(60*n*60,";"),a+="path=/;",document.cookie=a}("showed","showed",.5))}),1e3*(i=8,s=14,Math.floor((s-i)*Math.random())+i))}},57:function(t,e,n){"use strict";var a=n(8);e.a=function(){var t=a(".modal-result__close"),e=a(".modal-result"),n=a(".modal-result__overlay"),r=function(){return e.removeClass("modal-result--visible")};window.addEventListener("keydown",(function(t){"Escape"===t.key&&r()})),t.on("click",r),n.on("click",r)}},58:function(t,e,n){"use strict";e.a=function(){var t=document.querySelector(".to-up");window.addEventListener("scroll",(function(){window.scrollY>700?t.classList.add("to-up--visible"):t.classList.remove("to-up--visible")})),t.addEventListener("click",(function(t){t.preventDefault(),document.body.scrollIntoView({block:"start",behavior:"smooth"})}))}}});