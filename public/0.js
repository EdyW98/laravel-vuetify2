(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      //Tabel Kelembapan Udara
      headers: [{
        text: 'Rata Rata',
        value: 'AvgHumidity',
        sortable: false
      }, {
        text: 'Tertinggi',
        value: 'MaxHumidity',
        sortable: false
      }, {
        text: 'Terendah',
        value: 'MinHumidity',
        sortable: false
      }, {
        text: 'Tanggal',
        value: 'created_at',
        sortable: false
      }],
      data: [],
      //Chart Kelembapan Udara
      seriesHumidity: [{
        name: "Rata-Rata Kelembapan Udara",
        data: []
      }, {
        name: "Kelembapan Udara Tertinggi",
        data: []
      }, {
        name: "Kelembapan Udara Terendah",
        data: []
      }],
      optionsHumidity: {
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
          data1.push(element.AvgHumidity);
        });
        response.data.forEach(function (element) {
          data2.push(element.MaxHumidity);
        });
        response.data.forEach(function (element) {
          data3.push(element.MinHumidity);
        });
        _this2.seriesHumidity = [{
          data: data1
        }, {
          data: data2
        }, {
          data: data3
        }];
        _this2.optionsHumidity = {
          xaxis: {
            categories: cat
          }
        };
      });
    },
    setSearchTable: function setSearchTable() {
      this.search = this.date;
      this.menu = false;
    },
    resetSearchTable: function resetSearchTable() {
      this.search = '';
      this.menu = false;
    }
  },
  created: function created() {
    this.getDataTest();
    this.getDataTest2();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=template&id=2fc43506&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=template&id=2fc43506& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                      _c("v-card-title", [_vm._v("Graf Temperatur")]),
                      _vm._v(" "),
                      _c("apexchart", {
                        attrs: {
                          height: "100%",
                          type: "line",
                          options: _vm.optionsHumidity,
                          series: _vm.seriesHumidity
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
                    "v-menu",
                    {
                      ref: "menu",
                      attrs: {
                        "close-on-content-click": false,
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "290px"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        label: "Cari",
                                        "prepend-icon": "mdi-calendar",
                                        readonly: ""
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.menu,
                        callback: function($$v) {
                          _vm.menu = $$v
                        },
                        expression: "menu"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-date-picker",
                        {
                          attrs: { "no-title": "", scrollable: "" },
                          model: {
                            value: _vm.date,
                            callback: function($$v) {
                              _vm.date = $$v
                            },
                            expression: "date"
                          }
                        },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "primary" },
                              on: { click: _vm.resetSearchTable }
                            },
                            [_vm._v("Reset")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "primary" },
                              on: { click: _vm.setSearchTable }
                            },
                            [_vm._v("Set")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    {
                      staticClass: "px-auto mx-auto",
                      attrs: { width: "fill", outlined: "" }
                    },
                    [
                      _c("v-card-title", [_vm._v("Tabel Temperature")]),
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

/***/ "./resources/js/components/DailyLogMenu/Humidity.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/DailyLogMenu/Humidity.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Humidity_vue_vue_type_template_id_2fc43506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Humidity.vue?vue&type=template&id=2fc43506& */ "./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=template&id=2fc43506&");
/* harmony import */ var _Humidity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Humidity.vue?vue&type=script&lang=js& */ "./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Humidity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Humidity_vue_vue_type_template_id_2fc43506___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Humidity_vue_vue_type_template_id_2fc43506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DailyLogMenu/Humidity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Humidity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Humidity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Humidity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=template&id=2fc43506&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=template&id=2fc43506& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Humidity_vue_vue_type_template_id_2fc43506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Humidity.vue?vue&type=template&id=2fc43506& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DailyLogMenu/Humidity.vue?vue&type=template&id=2fc43506&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Humidity_vue_vue_type_template_id_2fc43506___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Humidity_vue_vue_type_template_id_2fc43506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);