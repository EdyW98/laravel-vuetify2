(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DailyLogMenu/Soil.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DailyLogMenu/Soil.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
      page: 1,
      pageCount: 0,
      search: '',
      //Tabel Kelembapan Udara
      headers: [{
        text: 'Rata Rata',
        value: 'AvgSoil',
        sortable: false
      }, {
        text: 'Tertinggi',
        value: 'MaxSoil',
        sortable: false
      }, {
        text: 'Terendah',
        value: 'MinSoil',
        sortable: false
      }],
      data: [],
      //Chart Kelembapan Udara
      seriesTempt: [{
        name: "Rata-Rata Kadar Air",
        data: []
      }, {
        name: "Kelembapan Kadar Air",
        data: []
      }, {
        name: "Kelembapan Kadar Air",
        data: []
      }],
      optionsTempt: {
        chart: {
          id: 'vuechart-example',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        title: {
          text: 'Graf Kelembapan Udara',
          align: 'Center'
        },
        xaxis: {
          categories: []
        }
      }
    };
  },
  methods: {
    getDataTest2: function getDataTest2() {
      var _this = this;

      var uri = "/api/daily/";
      axios.get(uri).then(function (response) {
        console.log(response.data);
        _this.data = response.data;
      });
    },
    getDataTest: function getDataTest() {
      var _this2 = this;

      var data1 = [];
      var data2 = [];
      var data3 = [];
      var cat = [];
      var uri = "/api/daily/";
      axios.get(uri).then(function (response) {
        console.log(response.data);
        response.data.forEach(function (element) {
          data1.push(element.AvgSoil);
        });
        response.data.forEach(function (element) {
          data2.push(element.MaxSoil);
        });
        response.data.forEach(function (element) {
          data3.push(element.MinSoil);
        });
        _this2.seriesTempt = [{
          data: data1
        }, {
          data: data2
        }, {
          data: data3
        }];
        _this2.optionsTempt = {
          xaxis: {
            categories: cat
          }
        };
      });
    }
  },
  created: function created() {
    this.getDataTest();
    this.getDataTest2();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DailyLogMenu/Soil.vue?vue&type=template&id=8006ff6e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DailyLogMenu/Soil.vue?vue&type=template&id=8006ff6e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            {
              staticClass: "mx-0",
              attrs: { align: "start", justify: "center" }
            },
            [
              _c(
                "v-col",
                { staticClass: "text-center" },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "px-2 mx-auto",
                      attrs: {
                        width: "fill",
                        "max-height": "750",
                        "min-height": "500",
                        outlined: ""
                      }
                    },
                    [
                      _c("v-card-title", [_vm._v("Graf Kadar Ph Air")]),
                      _vm._v(" "),
                      _c("apexchart", {
                        attrs: {
                          height: "100%",
                          type: "line",
                          options: _vm.optionsTempt,
                          series: _vm.seriesTempt
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { align: "start", justify: "center" } },
            [
              _c(
                "v-col",
                { staticClass: "text-center" },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "px-auto mx-auto",
                      attrs: { width: "fill", outlined: "" }
                    },
                    [
                      _c("v-card-title", [_vm._v("Tabel Kadar Ph Air")]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.data,
                          page: _vm.page,
                          "items-per-page": 15,
                          search: _vm.search,
                          "hide-default-footer": ""
                        },
                        on: {
                          "update:page": function($event) {
                            _vm.page = $event
                          },
                          "page-count": function($event) {
                            _vm.pageCount = $event
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center pt-2" },
                        [
                          _c("v-pagination", {
                            attrs: {
                              length: _vm.pageCount,
                              "total-visible": 7
                            },
                            model: {
                              value: _vm.page,
                              callback: function($$v) {
                                _vm.page = $$v
                              },
                              expression: "page"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DailyLogMenu/Soil.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/DailyLogMenu/Soil.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Soil_vue_vue_type_template_id_8006ff6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Soil.vue?vue&type=template&id=8006ff6e& */ "./resources/js/components/DailyLogMenu/Soil.vue?vue&type=template&id=8006ff6e&");
/* harmony import */ var _Soil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Soil.vue?vue&type=script&lang=js& */ "./resources/js/components/DailyLogMenu/Soil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Soil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Soil_vue_vue_type_template_id_8006ff6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Soil_vue_vue_type_template_id_8006ff6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DailyLogMenu/Soil.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DailyLogMenu/Soil.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DailyLogMenu/Soil.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Soil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Soil.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DailyLogMenu/Soil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Soil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DailyLogMenu/Soil.vue?vue&type=template&id=8006ff6e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/DailyLogMenu/Soil.vue?vue&type=template&id=8006ff6e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Soil_vue_vue_type_template_id_8006ff6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Soil.vue?vue&type=template&id=8006ff6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DailyLogMenu/Soil.vue?vue&type=template&id=8006ff6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Soil_vue_vue_type_template_id_8006ff6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Soil_vue_vue_type_template_id_8006ff6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);