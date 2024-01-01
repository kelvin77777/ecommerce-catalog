(function(){"use strict";var t={436:function(t,e,r){var n=r(7195),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("ProductDisplay",{attrs:{product:t.currentProduct},on:{"next-product":t.getNextProduct}})],1)},i=[],a=r(4582),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all",class:t.sectionClass},[t.isMenOrWomenCategory?e("div",{staticClass:"app-container"},[e("img",{staticStyle:{"max-width":"200px","max-height":"300px",float:"left","margin-left":"100px","margin-top":"0px"},attrs:{src:t.product.image,alt:"Product Image"}}),e("div",{staticStyle:{"margin-left":"100px","margin-top":"30px","margin-bottom":"1px"}},[e("p",{staticClass:"Title",staticStyle:{"font-family":"Arial, Helvetica, sans-serif","font-size":"x-large"}},[t._v(" "+t._s(t.product.title)+" ")]),e("p",[e("span",{staticStyle:{float:"left"}},[t._v(t._s(t.product.category))]),e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.product.rating.rate)+"/5")])]),e("br"),e("hr"),e("p",{staticStyle:{"font-family":"'Times New Roman', Times, serif","font-size":"larger"}},[t._v(" "+t._s(t.product.description)+" ")]),e("hr"),e("p",{staticClass:"Price",staticStyle:{"font-family":"Arial, Helvetica, sans-serif","font-size":"x-large"}},[t._v(" $"+t._s(t.product.price)+" ")]),e("button",{staticClass:"Button1",staticStyle:{"text-align":"center","margin-top":"10px","margin-left":"0px"}},[t._v(" Buy Now ")]),e("button",{staticClass:"Button2",staticStyle:{"text-align":"center","margin-top":"10px","margin-left":"40px"},on:{click:t.getNextProduct}},[t._v(" Next Product ")])])]):t._e(),t.isMenOrWomenCategory?t._e():e("div",[e("img",{staticStyle:{padding:"70px",width:"80%",height:"30%",margin:"0 auto",display:"block"},attrs:{src:r(1544),alt:""}}),e("p",{staticStyle:{"font-size":"large","text-align":"center",position:"absolute",left:"50%",transform:"translateX(-50%)","margin-top":"-28%"}},[t._v(" This product is unavailable to show ")]),e("button",{staticClass:"border-button3",staticStyle:{"text-align":"center",position:"absolute",left:"50%",transform:"translateX(-50%)","margin-top":"-25%"},on:{click:t.getNextProduct}},[t._v(" Next Product ")])]),t.loading?e("div",{staticClass:"loader-overlay"},[e("div",{staticClass:"loader"})]):t._e()])},s=[],u={props:{product:Object},data(){return{loading:!1}},computed:{sectionClass(){const t=this.product.category;return"men's clothing"===t?"men-section":"women's clothing"===t?"women-section":"unavailable-product"},isMenOrWomenCategory(){const t=this.product.category;return"men's clothing"===t||"women's clothing"===t}},methods:{getNextProduct(){this.loading=!0,setTimeout((()=>{this.$emit("next-product"),this.loading=!1}),1e3)}}},l=u,d=r(1001),p=(0,d.Z)(l,c,s,!1,null,"15ed0b5a",null),f=p.exports;const g="https://fakestoreapi.com/products/";var m={name:"App",components:{ProductDisplay:f},data(){return{currentProductIndex:1,currentProduct:{}}},methods:{async getApi(t){try{const e=await a.Z.get(g+t);return e.data}catch(e){return console.error(e),null}},async getNextProduct(){if(this.currentProductIndex<=20){const t=await this.getApi(this.currentProductIndex);t?(this.currentProduct=t,this.currentProductIndex++):console.error("Failed to fetch product data")}else this.currentProductIndex=1,this.getNextProduct()}},mounted(){this.getNextProduct()}},h=m,v=(0,d.Z)(h,o,i,!1,null,null,null),x=v.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(x)}).$mount("#app")},1544:function(t,e,r){t.exports=r.p+"img/image.60baf0dc.png"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,o,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,a=n[0],c=n[1],s=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var l=s(r)}for(e&&e(n);u<a.length;u++)i=a[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},n=self["webpackChunkecommerce"]=self["webpackChunkecommerce"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(436)}));n=r.O(n)})();
//# sourceMappingURL=app.f12dbd4f.js.map