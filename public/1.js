(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pesan/Pesan2.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pesan/Pesan2.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    source: String
  },
  data: function data() {
    return {
      // dateOpsi: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      // timeOpsi: { hour: '2-digit', minute: '2-digit' },
      date: null,
      time: null,
      maxtempt: null,
      AvgTemperature: null,
      AvgPh: null,
      AvgSoil: null,
      Data: []
    };
  },
  methods: {
    getAvgData: function getAvgData() {
      var _this = this;

      var uri = "/api/iterationval";
      axios.get(uri).then(function (response) {
        _this.AvgTemperature = response.data.AvgTemperature;
        _this.AvgPh = response.data.AvgPh;
        _this.AvgSoil = response.data.AvgSoil; // this.date = new Date(response.data.created_at).toLocaleTimeString('id',dateOpsi);
      });
    },
    getDhtVal: function getDhtVal() {
      var _this2 = this;

      var dateOpsi = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var timeOpsi = {
        hour: '2-digit',
        minute: '2-digit'
      };
      var uri = "/api/maxdhtpast";
      axios.get(uri).then(function (response) {
        _this2.maxtempt = response.data.temperature;
        _this2.time = new Date(response.data.dateCreate).toLocaleTimeString('id', timeOpsi);
        _this2.date = new Date(response.data.dateCreate).toLocaleDateString('id', dateOpsi);
        console.log(_this2.date);
        console.log(_this2.time);
      });
    }
  },
  created: function created() {
    this.getAvgData();
    this.getDhtVal();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pesan/Pesan2.vue?vue&type=template&id=52bac716&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pesan/Pesan2.vue?vue&type=template&id=52bac716& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { "font-size": "16px" } }, [
    _c("p", [
      _vm._v(
        "berdasarkan pemantauan data pada " +
          _vm._s(_vm.date) +
          ".\n        Hari anda dapat melakukan pengaliran air ke tanaman sekitar jam " +
          _vm._s(_vm.time)
      ),
      _c("br"),
      _vm._v("\n        berikut ini rekap singkatnya:\n    ")
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "Temperature Tertinggi: " +
          _vm._s(_vm.maxtempt) +
          " Pada Jam : " +
          _vm._s(_vm.time)
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v("Rata-rata Temperature: " + _vm._s(_vm.AvgTemperature) + " C")
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v("Rata-Rata Kadar Air Media Tanam: " + _vm._s(_vm.AvgSoil) + "%")
    ]),
    _vm._v(" "),
    _c("p", [_vm._v("Rata-Rata Ph Air: " + _vm._s(_vm.AvgPh))])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Pesan/Pesan2.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Pesan/Pesan2.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pesan2_vue_vue_type_template_id_52bac716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pesan2.vue?vue&type=template&id=52bac716& */ "./resources/js/components/Pesan/Pesan2.vue?vue&type=template&id=52bac716&");
/* harmony import */ var _Pesan2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pesan2.vue?vue&type=script&lang=js& */ "./resources/js/components/Pesan/Pesan2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pesan2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pesan2_vue_vue_type_template_id_52bac716___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pesan2_vue_vue_type_template_id_52bac716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pesan/Pesan2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pesan/Pesan2.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Pesan/Pesan2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pesan2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pesan2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pesan/Pesan2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pesan2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pesan/Pesan2.vue?vue&type=template&id=52bac716&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Pesan/Pesan2.vue?vue&type=template&id=52bac716& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pesan2_vue_vue_type_template_id_52bac716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pesan2.vue?vue&type=template&id=52bac716& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pesan/Pesan2.vue?vue&type=template&id=52bac716&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pesan2_vue_vue_type_template_id_52bac716___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pesan2_vue_vue_type_template_id_52bac716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);