parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cJVa":[function(require,module,exports) {
class i{constructor(i){this.viewPort=i.viewPort,this.sliderBar=i.sliderBar,this.position=0,this.classForShowImg=i.classForShowImg,this.init()}goTo(i){this.viewPort.children[this.position].classList.remove(this.classForShowImg),this.position=i,this.viewPort.children[this.position].classList.add(this.classForShowImg)}replaseImgInVeivport(){for(let i=0;i<this.sliderBar.length;i++)this.viewPort.appendChild(this.sliderBar[i].firstChild.cloneNode(!1))}addListenerForBar(){for(let i=0;i<this.sliderBar.length;i++)this.sliderBar[i].firstChild.addEventListener("click",i=>{this.goTo(i.target.title)})}init(){this.replaseImgInVeivport(),this.addListenerForBar(),this.goTo(this.position)}}const e=new i({viewPort:document.getElementById("specifications_viev_port"),sliderBar:document.getElementById("specifications_bar").children,classForShowImg:"slider_view"}),t=new i({viewPort:document.getElementById("accessories_viev_port"),sliderBar:document.getElementById("accessories_bar").children,classForShowImg:"slider_view"}),s=new i({viewPort:document.getElementById("description_viev_port"),sliderBar:document.getElementById("description_bar").children,classForShowImg:"slider_view"});
},{}],"Jd8S":[function(require,module,exports) {
class e{static addValidColor(e){e.value.length?e.validity.valid?e.style="border-color: lawngreen;":e.required?e.style="border-color: red;":e.style="border-color: orange;":e.required?e.style="border-color: orange;":e.style="border-color: deepskyblue;"}constructor(e){this.elemForm=e.elemForm,this.headLineTelegram=e.headLineTelegram||`sent from the form located at ${window.location.href}`,this.elemPhoneNumber=e.elemPhoneNumber||this.elemForm.querySelector('input[type="tel"]')||!1,this.elemEmail=e.elemEmail||this.elemForm.querySelector('input[type="email"]')||!1,this.elemName=e.elemName||this.elemForm.querySelector('input[name="name"]')||!1,this.elemCity=e.elemCity||this.elemForm.querySelector('input[name="city"]')||!1,this.elemWarehouseIndex=e.elemWarehouseIndex||this.elemForm.querySelector('input[name="warehouseIndex"]')||!1,this.elemDescription=e.elemDescription||this.elemForm.querySelector("textarea")||!1,this.botTelegramToken=e.botTelegramToken||!1,this.telegramChatId=e.telegramChatId||!1,this.apiKeyNovaPoshta=e.apiKeyNovaPoshta||!1,this.listWarehousesNP=[],this.listRefCities=[],this.inut()}addListnerOnPhoneNumber(){this.elemPhoneNumber.addEventListener("input",t=>{"deleteContentBackward"===t.inputType?"_"!==this.phoneNumberValue[0]&&(this.phoneNumberValue=this.phoneNumberValue.slice(0,this.phoneNumberValue.length-1)):!isNaN(t.data)&&" "!==t.data&&this.phoneNumberValue.length<=9&&(this.phoneNumberValue+=t.data),this.changePhoneNumber(),e.addValidColor(this.elemPhoneNumber)})}changePhoneNumber(){const e=this.phoneNumberValue+"__________";this.elemPhoneNumber.value=`+38 (${e.slice(0,3)}) ${e.slice(3,6)}-${e.slice(6,8)}-${e.slice(8,10)}`}addListnerOnSubmit(){this.elemForm.addEventListener("submit",e=>{e.preventDefault();let t=`____________________%0A${this.headLineTelegram} %0A%0A`;this.elemPhoneNumber&&(t+=`<b>${this.elemPhoneNumber.placeholder}:</b> ${this.elemPhoneNumber.value}%0A`),this.elemEmail&&(t+=`<b>${this.elemEmail.placeholder}:</b> ${this.elemEmail.value}%0A`),this.elemName&&(t+=`<b>${this.elemName.placeholder}:</b> ${this.elemName.value}%0A`),this.elemCity&&(t+=`<b>${this.elemCity.placeholder}:</b> ${this.elemCity.value}%0A`),this.elemWarehouseIndex&&(t+=`<b>${this.elemWarehouseIndex.placeholder}:</b> ${this.elemWarehouseIndex.value}%0A`),this.elemDescription&&(t+=`<b>${this.elemDescription.placeholder}:</b> ${this.elemDescription.value}%0A`),console.log(t)})}initiatoryStatePhoneNumber(){this.elemPhoneNumber.value="+38 (___) ___-__-__",this.elemPhoneNumber.pattern="\\+38\\s\\(0\\d{2}\\)\\s\\d{3}-\\d{2}-\\d{2}",this.phoneNumberValue=""}initiatoryStateEmail(){this.elemEmail.pattern=".+@.+\\..+",this.elemEmail.addEventListener("input",()=>{e.addValidColor(this.elemEmail)})}createElemListCity(){this.elemListCity=document.createElement("datalist"),this.elemListCity.id="listCitiesNP",this.elemForm.appendChild(this.elemListCity)}createElemListWarehouses(){this.elemListWarehouses=document.createElement("datalist"),this.elemListWarehouses.id="listWarehouseNP",this.elemForm.appendChild(this.elemListWarehouses)}updateListCity(e){if(this.elemListCity.innerHTML="",this.listRefCities=[],1===e.length)return this.listRefCities=[e[0].DeliveryCity],this.elemCity.pattern="[А-Яа-яЁёs]+$",void(this.elemWarehouseIndex.disabled=!1);e.map(e=>{const t=document.createElement("option");t.value=e.Present,console.log(e.DeliveryCity),this.listRefCities.push(e.DeliveryCity),this.elemListCity.appendChild(t)}),this.elemCity.pattern="[^0-9A-Za-z]{1,3}\\.[^0-9A-Za-z]{2,}",this.elemWarehouseIndex.disabled=!0}updateListWarehouses(e){this.elemListWarehouses.innerHTML="",e.map(e=>{const t=document.createElement("option");t.value=e.Description,this.elemListWarehouses.appendChild(t)})}async getCitiesFromNP(){const e={apiKey:this.apiKeyNovaPoshta,modelName:"Address",calledMethod:"searchSettlements",methodProperties:{CityName:this.elemCity.value,Limit:20}},t={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},redirect:"follow",body:JSON.stringify(e)};await fetch("https://api.novaposhta.ua/v2.0/json/",t).then(e=>e.json()).then(e=>e.data).then(e=>e[0].Addresses).then(e=>e.filter(e=>e.Warehouses)).then(e=>this.updateListCity(e)).catch(e=>console.log("error",e))}async getWarehousesFromNP(){const e={apiKey:this.apiKeyNovaPoshta,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityRef:this.listRefCities[0]}},t={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(e)};await fetch("http://testapi.novaposhta.ua/v2.0/json/Address/searchSettlements/",t).then(e=>e.json()).then(e=>e.data).then(e=>this.listWarehousesNP=e).catch(e=>console.log("error",e))}filterWritelistWarehouses(){const e=this.listWarehousesNP.filter(e=>{return(e.Number+"").slice(0,this.elemWarehouseIndex.value.length)===this.elemWarehouseIndex.value});this.updateListWarehouses(e)}initiatoryStateCity(){this.elemCity.pattern="[^0-9A-Za-z]{1,3}\\.[^0-9A-Za-z]{2,}",this.elemCity.title="Впишіть назву вашого населеного пункту і виберіть один із запропонованих варіантів",this.apiKeyNovaPoshta&&(this.createElemListCity(),this.elemCity.addEventListener("onChange",()=>console.log("change")),this.elemCity.addEventListener("input",async()=>{this.elemCity.value.length>2&&/[а-яё]+$/i.test(this.elemCity.value)&&(await this.getCitiesFromNP(),e.addValidColor(this.elemCity))})),this.elemCity.addEventListener("input",()=>{e.addValidColor(this.elemCity)})}initiatoryStateName(){this.elemName.pattern="[A-Za-zА-Яа-яЁё\\s]{2,}",this.elemName.addEventListener("input",()=>{e.addValidColor(this.elemName)})}initiatoryStateDescription(){this.elemDescription.addEventListener("input",()=>{e.addValidColor(this.elemDescription)})}initiatoryStateWarehouseIndex(){this.apiKeyNovaPoshta&&(this.elemWarehouseIndex.title="Спочатку виберіть ваше місто, потім впишіть номер відділеннь нової пошти і оберіть один їх предложеннх варіантів",this.createElemListWarehouses(),this.elemWarehouseIndex.addEventListener("focus",()=>{this.listRefCities&&1===this.listRefCities.length&&this.getWarehousesFromNP()}),this.elemWarehouseIndex.addEventListener("input",()=>{this.listWarehousesNP.length&&this.filterWritelistWarehouses()})),this.elemWarehouseIndex.addEventListener("input",()=>{e.addValidColor(this.elemWarehouseIndex)})}inut(){this.elemPhoneNumber&&(this.initiatoryStatePhoneNumber(),this.addListnerOnPhoneNumber()),this.telegramChatId&&this.botTelegramToken&&this.addListnerOnSubmit(),this.elemEmail&&this.initiatoryStateEmail(),this.elemCity&&this.initiatoryStateCity(),this.elemName&&this.initiatoryStateName(),this.elemDescription&&this.initiatoryStateDescription(),this.elemWarehouseIndex&&(this.initiatoryStateWarehouseIndex(),this.elemWarehouseIndex.disabled=!0)}}const t=new e({elemForm:document.getElementById("order_form"),botTelegramToken:"1045208272:AAF0mdAKIwIrKhzihkwjPcDYl4f0mxBWWdE",telegramChatId:"-1001368260472"});
},{}],"daZs":[function(require,module,exports) {

},{"./../img/Edit3.jpg":[["Edit3.3f619443.jpg","vacW"],"vacW"],"./../img/Edit.jpg":[["Edit.680b9081.jpg","uSCB"],"uSCB"]}],"mahc":[function(require,module,exports) {
"use strict";require("./slider"),require("./API_form"),require("../style/base.scss"),document.addEventListener("DOMContentLoaded",()=>{window.onload=(()=>{setTimeout(()=>{document.getElementById("preloader").classList.remove("preloader")},200)});const e=document.getElementById("headline_question"),t=document.getElementById("order_form"),s=document.getElementById("description"),n=document.getElementById("headline"),o=document.getElementById("accessories"),d=document.getElementById("specifications"),c=e=>{const t=e.clientHeight+e.offsetTop-(window.scrollY+81)>100,s=window.scrollY+window.innerHeight-e.offsetTop>250;return t&&s?e.classList.add(`${e.id}_active`):e.classList.remove(`${e.id}_active`),t&&s};window.onscroll=(()=>{c(e),c(s),c(n),c(t),c(o),c(d)});const r=document.getElementById("btn_ask"),i=document.getElementById("btn_order");(()=>{let e=!0;const t=(t,s)=>{setTimeout(()=>{e&&t()},s)},s=()=>{t(()=>r.classList.add("btn_ask_alert"),2e3),t(()=>r.classList.remove("btn_ask_alert"),7e3),t(()=>i.classList.add("btn_order_alert"),12e3),t(()=>i.classList.remove("btn_order_alert"),17e3),setTimeout(s,4e4)};s(),r.addEventListener("mouseover",()=>{i.classList.remove("btn_order_alert"),r.classList.add("btn_ask_alert"),e=!1}),r.addEventListener("mouseout",()=>{r.classList.remove("btn_ask_alert"),e=!0}),i.addEventListener("mouseover",()=>{r.classList.remove("btn_ask_alert"),i.classList.add("btn_order_alert"),e=!1}),i.addEventListener("mouseout",()=>{i.classList.remove("btn_order_alert"),e=!0})})();const l=document.getElementById("section_buy"),a=document.getElementById("phone_btn_order"),m=document.getElementById("form_buy_btn_closse");a.addEventListener("click",()=>{l.classList.remove("section_buy_closse")}),i.addEventListener("click",()=>{l.classList.remove("section_buy_closse")}),m.addEventListener("click",()=>{l.classList.add("section_buy_closse")});const _=document.getElementById("btn_phone_menu"),u=document.getElementById("phone_menu"),L=u.children[0].children;for(let v=0;v<L.length;v++)L[v].addEventListener("click",()=>{u.classList.remove("phone_menu_active")});_.addEventListener("click",()=>{_.classList.toggle("btn_phone_menu_active"),u.classList.toggle("phone_menu_active")})});
},{"./slider":"cJVa","./API_form":"Jd8S","../style/base.scss":"daZs"}]},{},["mahc"], null)
//# sourceMappingURL=/riverbird/view/js.ab673e5a.js.map