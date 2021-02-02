webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/search.js":
/*!*************************!*\
  !*** ./sagas/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return searchSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/search */ \"./reducers/search.js\");\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(search),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSearch),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(searchSaga);\n\n\n\n\n\nfunction searchAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/KR/KRW/ko-KR/\", {\n    params: {\n      query: data\n    },\n    headers: {\n      \"x-rapidapi-key\": \"469557a336mshd2e8b79d6b4248ep17d5bcjsn0394592f4758\",\n      \"x-rapidapi-host\": \"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com\"\n    }\n  });\n}\n\nfunction search(action) {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function search$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(searchAPI, action.data);\n\n        case 3:\n          result = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_search__WEBPACK_IMPORTED_MODULE_3__[\"AIRPORT_SEARCH_SUCCESS\"],\n            data: result\n          });\n\n        case 6:\n          _context.next = 13;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(_context.t0);\n          _context.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_search__WEBPACK_IMPORTED_MODULE_3__[\"AIRPORT_SEARCH_FAILURE\"],\n            error: _context.t0.response.data\n          });\n\n        case 13:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\nfunction watchSearch() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSearch$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_search__WEBPACK_IMPORTED_MODULE_3__[\"AIRPORT_SEARCH_REQUEST\"], search);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\nfunction searchSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function searchSaga$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchSearch)]);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvc2VhcmNoLmpzP2M3ZDkiXSwibmFtZXMiOlsic2VhcmNoIiwid2F0Y2hTZWFyY2giLCJzZWFyY2hTYWdhIiwic2VhcmNoQVBJIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwicXVlcnkiLCJoZWFkZXJzIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJBSVJQT1JUX1NFQVJDSF9TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiQUlSUE9SVF9TRUFSQ0hfRkFJTFVSRSIsInJlc3BvbnNlIiwidGFrZUxhdGVzdCIsIkFJUlBPUlRfU0VBUkNIX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tHQXdCVUEsTTttR0FnQkFDLFc7bUdBSWVDLFU7O0FBNUN6QjtBQUNBO0FBQ0E7O0FBTUEsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUNMLDBHQURLLEVBRUw7QUFDRUMsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRUo7QUFERCxLQURWO0FBSUVLLFdBQU8sRUFBRTtBQUNQLHdCQUFrQixvREFEWDtBQUVQLHlCQUNFO0FBSEs7QUFKWCxHQUZLLENBQVA7QUFhRDs7QUFFRCxTQUFVVCxNQUFWLENBQWlCVSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CLGlCQUFNQywrREFBSSxDQUFDUixTQUFELEVBQVlPLE1BQU0sQ0FBQ04sSUFBbkIsQ0FBVjs7QUFGbkI7QUFFVVEsZ0JBRlY7QUFBQTtBQUdJLGlCQUFNQyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVDLHVFQURFO0FBRVJYLGdCQUFJLEVBQUVRO0FBRkUsV0FBRCxDQUFUOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRSUksaUJBQU8sQ0FBQ0MsS0FBUjtBQVJKO0FBU0ksaUJBQU1KLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUksdUVBREU7QUFFUkQsaUJBQUssRUFBRSxZQUFNRSxRQUFOLENBQWVmO0FBRmQsV0FBRCxDQUFUOztBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCQSxTQUFVSCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNbUIscUVBQVUsQ0FBQ0MsdUVBQUQsRUFBeUJyQixNQUF6QixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRSxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNb0IsOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDdEIsV0FBRCxDQUFMLENBQUQsQ0FBVDs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NhZ2FzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0LCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtcbiAgQUlSUE9SVF9TRUFSQ0hfRkFJTFVSRSxcbiAgQUlSUE9SVF9TRUFSQ0hfUkVRVUVTVCxcbiAgQUlSUE9SVF9TRUFSQ0hfU1VDQ0VTUyxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3NlYXJjaFwiO1xuXG5mdW5jdGlvbiBzZWFyY2hBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFxuICAgIFwiaHR0cHM6Ly9za3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbS9hcGlzZXJ2aWNlcy9hdXRvc3VnZ2VzdC92MS4wL0tSL0tSVy9rby1LUi9cIixcbiAgICB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcXVlcnk6IGRhdGEsXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiNDY5NTU3YTMzNm1zaGQyZThiNzlkNmI0MjQ4ZXAxN2Q1YmNqc24wMzk0NTkyZjQ3NThcIixcbiAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjpcbiAgICAgICAgICBcInNreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24qIHNlYXJjaChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNlYXJjaEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBSVJQT1JUX1NFQVJDSF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBSVJQT1JUX1NFQVJDSF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFJUlBPUlRfU0VBUkNIX1JFUVVFU1QsIHNlYXJjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzZWFyY2hTYWdhKCkge1xuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hTZWFyY2gpXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/search.js\n");

/***/ })

})