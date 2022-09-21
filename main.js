(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e,this._token=n}var n,o;return n=t,(o=[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._parseResponse(t)}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._parseResponse)}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(){t._parseResponse}))}},{key:"getInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._token.authorization,"Content-Type":"application/json"}}).then(this._parseResponse)}},{key:"setInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.link})}).then(this._parseResponse)}},{key:"setAva",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._parseResponse)}},{key:"setlike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._parseResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._parseResponse)}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){var o=t.data,r=t.handleCardClick,i=t.currentUser,a=t.deleteButtonClick,u=t.setLike,s=t.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=o,this._name=o.name,this._link=o.link,this._id=o._id,this._likeCounter=o.likes,this._owner=o.owner._id,this._currentUser=i,this._templateSelector=n,this._handleCardClick=r,this._deleteButtonClick=a,this._setLike=u,this._deleteLike=s}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element__cards-item").cloneNode(!0)}},{key:"_likesNumber",value:function(e){return String(e.likes.length)}},{key:"setLike",value:function(e){this._element.querySelector(".element__button").classList.add("element__buton_active"),this._element.querySelector(".element__button_count").textContent=this._likesNumber(e)}},{key:"deleteLike",value:function(e){this._element.querySelector(".element__button").classList.remove("element__buton_active"),this._element.querySelector(".element__button_count").textContent=this._likesNumber(e)}},{key:"_LikedByMe",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._currentUser&&e._element.querySelector(".element__button").classList.add("element__buton_active")}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__cards-img"),this._element.querySelector(".gallery__like_count").textContent=this._likeCounter.length,this._element.querySelector(".element__cards-title").textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._setEventListners(),this._LikedByMe(),this._owner===this._currentUser&&this._element.querySelector(".element__button-delete").classList.remove("element__button-delete_hide"),this._element}},{key:"_setEventListners",value:function(){var e=this;this._element.querySelector(".element__button-delete").addEventListener("click",(function(){e._deleteButtonClick()})),this._element.querySelector(".element__buton_").addEventListener("click",(function(){e._element.querySelector(".element__buton_").classList.contains("element__buton_active")?e._deleteLike():e._setLike()})),this._image.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"deleteCard",value:function(){this._element.remove()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n,this._validationData=t,this._inputList=Array.from(this._formSelector.querySelectorAll(this._validationData.input)),this._button=this._formSelector.querySelector(this._validationData.button)}var t,n;return t=e,(n=[{key:"_showFieldError",value:function(e){this._formSelector.querySelector(".".concat(e.id,"-error")).textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){this._formSelector.querySelector(".".concat(e.id,"-error")).textContent=""}},{key:"_setError",value:function(e){e.validity.valid?e.classList.remove(this._validationData.inputError):e.classList.add(this._validationData.inputError)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showFieldError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.checkValidity()}))}},{key:"_setSubmitButtonState",value:function(){this._hasInvalidInput()?(this._button.setAttribute("disabled",!0),this._button.classList.add(this._validationData.buttonDisabled)):(this._button.removeAttribute("disabled"),this._button.classList.remove(this._validationData.buttonDisabled))}},{key:"resetValidation",value:function(){var e=this;this._setSubmitButtonState(),this._inputList.forEach((function(t){e._hideInputError(t),t.classList.remove(e._validationData.inputError)}))}},{key:"_handleFormInput",value:function(){var e=this;this._setSubmitButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._setError(t),e._setSubmitButtonState()}))}))}},{key:"enableValidation",value:function(){this._handleFormInput()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"setItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),c(this,"_handleOverlayClose",(function(e){e.target===e.currentTarget&&n.close()})),c(this,"_buttonClose",(function(){n.close()})),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._closeButton=this._popup.querySelector(".popup__button-close"),this._popup.addEventListener("mousedown",this._handleOverlayClose),this._closeButton.addEventListener("click",this._buttonClose)}},{key:"_removeEventListeners",value:function(){this._popup.removeEventListener("mousedown",this._handleOverlayClose),this._closeButton.removeEventListener("click",this._buttonClose)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=h(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},_.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(o);if(r){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__object-picture"),t._popupTitle=t._popup.querySelector(".popup__img-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupTitle.textContent=e,_(m(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=w(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function g(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(o);if(r){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t,n,o,r,u=e.popupElement,s=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r=function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())},(o="_submitForm")in(n=C(t=i.call(this,u)))?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,t._form=t._popup.querySelector(".popup__form"),t._handleFormSubmit=s,t._buttonSubmit=t._form.querySelector(".popup__button-save"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){S(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitForm)}},{key:"_removeEventListeners",value:function(){S(L(a.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._submitForm)}},{key:"close",value:function(){S(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var P=function(){function e(t){var n=t.nameSelector,o=t.subSelector,r=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._aboutInfo=o,this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,activity:this._aboutInfo.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._aboutInfo.textContent=t}},{key:"setUserAva",value:function(e){this._avatar.src=e.avatar}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),q=document.querySelector(".popup_edit"),I=document.querySelector(".profile__button-edit"),T=q.querySelector(".popup__form_edit"),R=q.querySelector(".popup__input-name"),D=q.querySelector(".popup__input-activity"),U=document.querySelector(".popup_add"),x=U.querySelector(".popup__form_add"),B=document.querySelector(".profile__button-add"),V=document.querySelector(".popup_img"),F=document.querySelector(".profile__title"),N=document.querySelector(".profile__subtitle"),z=document.querySelector(".popup__confirm"),A={form:".popup__form",input:".popup__input",inputError:"popup__input_type_error",button:".popup__button-save",buttonDisabled:"popup__button-save_disabled"},J=new i(A,T);J.enableValidation();var M=new i(A,x);M.enableValidation();var H=new u({renderer:function(e){H.setItem(Z(e))}},".element__cards-list"),G=new t("https://mesto.nomoreparties.co/v1/cohort-50","7f9ed849-91dd-461f-a1ba-4d8a8f634854");G.getInfo().then((function(e){K=e._id,userInfo.setUserInfo({name:e.name,status:e.about})})).catch((function(e){console.log(e)}));var K=null,Q=new v(V);Q.setEventListeners();var W=new O({popupElement:U,handleFormSubmit:function(e){H.setItem(Z({name:e.text,link:e.source,alt:e.text})),W.close(),W.removeEventListeners()}});W.setEventListeners();var X=new P({nameSelector:F,subSelector:N}),Y=new O({popupElement:q,handleFormSubmit:function(e){X.setUserInfo(e.name,e.activity),Y.close(),Y.removeEventListeners()}});function Z(e){var t=new o({data:e,handleCardClick:function(e,t){Q.open(e,t)},currentUser:K,deleteButtonClick:function(){popupDel.open(),popupDel.submitDelete((function(){G.deleteCard(e._id).then((function(){t.deleteCard(),z.close()})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))}))}))},setLike:function(){G.setlike(o._data).then((function(e){newCard.setLike(e)})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))}))},deleteLike:function(){G.removeLike(o._data).then((function(e){newCard.deleteLike(e)})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))}))}},"#element-template");return t.generateCard()}Y.setEventListeners(),B.addEventListener("click",(function(){M.resetValidation(),W.open()})),I.addEventListener("click",(function(){var e=X.getUserInfo(),t=e.name,n=e.activity;R.value=t,D.value=n,J.resetValidation(),Y.open()}))})();