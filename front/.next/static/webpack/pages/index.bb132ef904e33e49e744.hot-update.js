webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SearchInput.js":
/*!***********************************!*\
  !*** ./components/SearchInput.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/search */ \"./reducers/search.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/ggyu/coding/react-air/front/components/SearchInput.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SearchInput() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      departureText = _useState[0],\n      setDepartureText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isDepartureText = _useState2[0],\n      setIsDepartureText = _useState2[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.search;\n  }),\n      searchList = _useSelector.searchList;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var onChangeDeparture = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setDepartureText(e.target.value);\n    dispatch({\n      type: _reducers_search__WEBPACK_IMPORTED_MODULE_4__[\"AIRPORT_SEARCH_REQUEST\"],\n      data: e.target.value\n    });\n  }, [departureText]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n      placeholder: \"\\uB3C4\\uC2DC\\uBA85\",\n      onChange: onChangeDeparture,\n      value: departureText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: \"absolute\",\n        width: \"100%\",\n        background: \"white\"\n      },\n      children: searchList.map(function (v) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              textAlign: \"left\",\n              marginTop: \"5px\"\n            },\n            children: [v.PlaceName, \"(\", v.PlaceId, \")\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(SearchInput, \"UkUhrkHHoBb4sxEBZUU+Mxbch8E=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n\n_c = SearchInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchInput);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchInput\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hJbnB1dC5qcz9iYTkxIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0IiwidXNlU3RhdGUiLCJkZXBhcnR1cmVUZXh0Iiwic2V0RGVwYXJ0dXJlVGV4dCIsImlzRGVwYXJ0dXJlVGV4dCIsInNldElzRGVwYXJ0dXJlVGV4dCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzZWFyY2giLCJzZWFyY2hMaXN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2hhbmdlRGVwYXJ0dXJlIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiQUlSUE9SVF9TRUFSQ0hfUkVRVUVTVCIsImRhdGEiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZCIsIm1hcCIsInYiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJQbGFjZU5hbWUiLCJQbGFjZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsRUFBRCxDQUQ3QjtBQUFBLE1BQ2RDLGFBRGM7QUFBQSxNQUNDQyxnQkFERDs7QUFBQSxtQkFFeUJGLHNEQUFRLENBQUMsS0FBRCxDQUZqQztBQUFBLE1BRWRHLGVBRmM7QUFBQSxNQUVHQyxrQkFGSDs7QUFBQSxxQkFHRUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxNQUFqQjtBQUFBLEdBQUQsQ0FIYjtBQUFBLE1BR2JDLFVBSGEsZ0JBR2JBLFVBSGE7O0FBSXJCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0MseURBQVcsQ0FDbkMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0xYLG9CQUFnQixDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUNBTixZQUFRLENBQUM7QUFDUE8sVUFBSSxFQUFFQyx1RUFEQztBQUVQQyxVQUFJLEVBQUVMLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUZSLEtBQUQsQ0FBUjtBQUlELEdBUGtDLEVBUW5DLENBQUNkLGFBQUQsQ0FSbUMsQ0FBckM7QUFVQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDBDQUFEO0FBQ0UsaUJBQVcsRUFBQyxvQkFEZDtBQUVFLGNBQVEsRUFBRVUsaUJBRlo7QUFHRSxXQUFLLEVBQUVWO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFDRSxXQUFLLEVBQUU7QUFDTGtCLGdCQUFRLEVBQUUsVUFETDtBQUVMQyxhQUFLLEVBQUUsTUFGRjtBQUdMQyxrQkFBVSxFQUFFO0FBSFAsT0FEVDtBQUFBLGdCQU9HYixVQUFVLENBQUNjLEdBQVgsQ0FBZSxVQUFDQyxDQUFEO0FBQUEsNEJBQ2Q7QUFBQSxpQ0FDRTtBQUFLLGlCQUFLLEVBQUU7QUFBRUMsdUJBQVMsRUFBRSxNQUFiO0FBQXFCQyx1QkFBUyxFQUFFO0FBQWhDLGFBQVo7QUFBQSx1QkFDR0YsQ0FBQyxDQUFDRyxTQURMLE9BQ2lCSCxDQUFDLENBQUNJLE9BRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQURjO0FBQUEsT0FBZjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBLGtCQURGO0FBd0JEOztHQXhDUTVCLFc7VUFHZ0JNLHVELEVBQ05LLHVEOzs7S0FKVlgsVztBQTBDTUEsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaElucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBBSVJQT1JUX1NFQVJDSF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3NlYXJjaFwiO1xuXG5mdW5jdGlvbiBTZWFyY2hJbnB1dCgpIHtcbiAgY29uc3QgW2RlcGFydHVyZVRleHQsIHNldERlcGFydHVyZVRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0RlcGFydHVyZVRleHQsIHNldElzRGVwYXJ0dXJlVGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgc2VhcmNoTGlzdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2gpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25DaGFuZ2VEZXBhcnR1cmUgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgc2V0RGVwYXJ0dXJlVGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFJUlBPUlRfU0VBUkNIX1JFUVVFU1QsXG4gICAgICAgIGRhdGE6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBbZGVwYXJ0dXJlVGV4dF1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi64+E7Iuc66qFXCJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRGVwYXJ0dXJlfVxuICAgICAgICB2YWx1ZT17ZGVwYXJ0dXJlVGV4dH1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7c2VhcmNoTGlzdC5tYXAoKHYpID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XG4gICAgICAgICAgICAgIHt2LlBsYWNlTmFtZX0oe3YuUGxhY2VJZH0pXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SearchInput.js\n");

/***/ })

})