webpackHotUpdate_N_E("pages/media/[slug]",{

/***/ "./context/state.js":
/*!**************************!*\
  !*** ./context/state.js ***!
  \**************************/
/*! exports provided: AppWrapper, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppWrapper\", function() { return AppWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAppContext\", function() { return useAppContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/damon/Desktop/react-netflix-clone/context/state.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nfunction AppWrapper(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      currentMedia = _useState[0],\n      setCurrentMedia = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      similiarMedia = _useState2[0],\n      setSimiliarMedia = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      popular = _useState3[0],\n      setPopular = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      latest = _useState4[0],\n      setLatest = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      upcoming = _useState5[0],\n      setUpcoming = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      top = _useState6[0],\n      setTop = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState7[0],\n      setVisible = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      query = _useState8[0],\n      setQuery = _useState8[1];\n\n  var contextValue = {\n    currentMedia: currentMedia,\n    setCurrentMedia: setCurrentMedia,\n    visible: visible,\n    setVisible: setVisible,\n    query: query,\n    setQuery: setQuery,\n    popular: popular,\n    latest: latest,\n    upcoming: upcoming,\n    top: top,\n    similiarMedia: similiarMedia,\n    setSimiliarMedia: setSimiliarMedia\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var urlPopular = \"https://api.themoviedb.org/3/movie/popular?api_key=631627e688738d84a1cae51aa035b23a\";\n    var urlLatest = \"https://api.themoviedb.org/3/movie/now_playing?api_key=631627e688738d84a1cae51aa035b23a\";\n    var urlUpcoming = \"https://api.themoviedb.org/3/movie/upcoming?api_key=631627e688738d84a1cae51aa035b23a\";\n    var urlTop = \"https://api.themoviedb.org/3/movie/top_rated?api_key=631627e688738d84a1cae51aa035b23a\";\n    var requestPopular = axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(urlPopular);\n    var requestLatest = axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(urlLatest);\n    var requestUpcoming = axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(urlUpcoming);\n    var requestTop = axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(urlTop);\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.all([requestPopular, requestLatest, requestUpcoming, requestTop]).then(axios__WEBPACK_IMPORTED_MODULE_2___default.a.spread(function () {\n      for (var _len = arguments.length, responses = new Array(_len), _key = 0; _key < _len; _key++) {\n        responses[_key] = arguments[_key];\n      }\n\n      var popularResults = responses[0].data.results;\n      var latestResults = responses[1].data.results;\n      var upComingResults = responses[2].data.results;\n      var topResults = responses[3].data.results;\n\n      var shuffledPopularResults = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.shuffle(popularResults);\n\n      var shuffledLatestResults = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.shuffle(latestResults);\n\n      var shuffledUpComingResults = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.shuffle(upComingResults);\n\n      var shuffledTopResults = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.shuffle(topResults);\n\n      setPopular(shuffledPopularResults);\n      setLatest(shuffledLatestResults);\n      setUpcoming(shuffledUpComingResults);\n      setTop(shuffledTopResults);\n    }))[\"catch\"](function (errors) {\n      console.log(errors);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AppContext.Provider, {\n    value: contextValue,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AppWrapper, \"pT1F2qXdGTGMwvY5stmYqu65/zM=\");\n\n_c = AppWrapper;\nfunction useAppContext() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AppContext);\n}\n\n_s2(useAppContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"AppWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zdGF0ZS5qcz9kYmFjIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXBwV3JhcHBlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJjdXJyZW50TWVkaWEiLCJzZXRDdXJyZW50TWVkaWEiLCJzaW1pbGlhck1lZGlhIiwic2V0U2ltaWxpYXJNZWRpYSIsInBvcHVsYXIiLCJzZXRQb3B1bGFyIiwibGF0ZXN0Iiwic2V0TGF0ZXN0IiwidXBjb21pbmciLCJzZXRVcGNvbWluZyIsInRvcCIsInNldFRvcCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwicXVlcnkiLCJzZXRRdWVyeSIsImNvbnRleHRWYWx1ZSIsInVzZUVmZmVjdCIsInVybFBvcHVsYXIiLCJ1cmxMYXRlc3QiLCJ1cmxVcGNvbWluZyIsInVybFRvcCIsInJlcXVlc3RQb3B1bGFyIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0TGF0ZXN0IiwicmVxdWVzdFVwY29taW5nIiwicmVxdWVzdFRvcCIsImFsbCIsInRoZW4iLCJzcHJlYWQiLCJyZXNwb25zZXMiLCJwb3B1bGFyUmVzdWx0cyIsImRhdGEiLCJyZXN1bHRzIiwibGF0ZXN0UmVzdWx0cyIsInVwQ29taW5nUmVzdWx0cyIsInRvcFJlc3VsdHMiLCJzaHVmZmxlZFBvcHVsYXJSZXN1bHRzIiwiXyIsInNodWZmbGUiLCJzaHVmZmxlZExhdGVzdFJlc3VsdHMiLCJzaHVmZmxlZFVwQ29taW5nUmVzdWx0cyIsInNodWZmbGVkVG9wUmVzdWx0cyIsImVycm9ycyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLGdCQUFHQywyREFBYSxFQUFoQztBQUVPLFNBQVNDLFVBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7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Q0MsT0FBRixDQUFVSixlQUFWLENBQWhDOztBQUNBLFVBQU1PLGtCQUFrQixHQUFHSiw2Q0FBQyxDQUFDQyxPQUFGLENBQVVILFVBQVYsQ0FBM0I7O0FBRUFoQyxnQkFBVSxDQUFDaUMsc0JBQUQsQ0FBVjtBQUNBL0IsZUFBUyxDQUFDa0MscUJBQUQsQ0FBVDtBQUNBaEMsaUJBQVcsQ0FBQ2lDLHVCQUFELENBQVg7QUFDQS9CLFlBQU0sQ0FBQ2dDLGtCQUFELENBQU47QUFFRCxLQWpCSyxDQUZSLFdBbUJZLFVBQUFDLE1BQU0sRUFBSTtBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDRCxLQXJCSDtBQXNCRCxHQWpDUSxFQWlDTixFQWpDTSxDQUFUO0FBbUNBLHNCQUNFLHFFQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRTVCLFlBQTVCO0FBQUEsY0FDR2xCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBakVlRCxVOztLQUFBQSxVO0FBbUVULFNBQVNrRCxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLHdEQUFVLENBQUNyRCxVQUFELENBQWpCO0FBQ0Q7O0lBRmVvRCxhIiwiZmlsZSI6Ii4vY29udGV4dC9zdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY3VycmVudE1lZGlhLCBzZXRDdXJyZW50TWVkaWFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbc2ltaWxpYXJNZWRpYSwgc2V0U2ltaWxpYXJNZWRpYV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwb3B1bGFyLCBzZXRQb3B1bGFyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xhdGVzdCwgc2V0TGF0ZXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VwY29taW5nLCBzZXRVcGNvbWluZ10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b3AsIHNldFRvcF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XG4gICAgY3VycmVudE1lZGlhLFxuICAgIHNldEN1cnJlbnRNZWRpYSxcbiAgICB2aXNpYmxlLFxuICAgIHNldFZpc2libGUsXG4gICAgcXVlcnksXG4gICAgc2V0UXVlcnksXG4gICAgcG9wdWxhcixcbiAgICBsYXRlc3QsXG4gICAgdXBjb21pbmcsXG4gICAgdG9wLFxuICAgIHNpbWlsaWFyTWVkaWEsXG4gICAgc2V0U2ltaWxpYXJNZWRpYVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdXJsUG9wdWxhciA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT02MzE2MjdlNjg4NzM4ZDg0YTFjYWU1MWFhMDM1YjIzYWA7XG4gICAgbGV0IHVybExhdGVzdCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9NjMxNjI3ZTY4ODczOGQ4NGExY2FlNTFhYTAzNWIyM2FgO1xuICAgIGxldCB1cmxVcGNvbWluZyA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3VwY29taW5nP2FwaV9rZXk9NjMxNjI3ZTY4ODczOGQ4NGExY2FlNTFhYTAzNWIyM2FgO1xuICAgIGxldCB1cmxUb3AgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS90b3BfcmF0ZWQ/YXBpX2tleT02MzE2MjdlNjg4NzM4ZDg0YTFjYWU1MWFhMDM1YjIzYWA7XG5cbiAgICBjb25zdCByZXF1ZXN0UG9wdWxhciA9IGF4aW9zLmdldCh1cmxQb3B1bGFyKTtcbiAgICBjb25zdCByZXF1ZXN0TGF0ZXN0ID0gYXhpb3MuZ2V0KHVybExhdGVzdCk7XG4gICAgY29uc3QgcmVxdWVzdFVwY29taW5nID0gYXhpb3MuZ2V0KHVybFVwY29taW5nKTtcbiAgICBjb25zdCByZXF1ZXN0VG9wID0gYXhpb3MuZ2V0KHVybFRvcCk7XG5cbiAgICBheGlvc1xuICAgICAgLmFsbChbcmVxdWVzdFBvcHVsYXIsIHJlcXVlc3RMYXRlc3QsIHJlcXVlc3RVcGNvbWluZywgcmVxdWVzdFRvcF0pXG4gICAgICAudGhlbihheGlvcy5zcHJlYWQoKC4uLnJlc3BvbnNlcykgPT4ge1xuXG4gICAgICAgIGNvbnN0IHBvcHVsYXJSZXN1bHRzID0gcmVzcG9uc2VzWzBdLmRhdGEucmVzdWx0c1xuICAgICAgICBjb25zdCBsYXRlc3RSZXN1bHRzID0gcmVzcG9uc2VzWzFdLmRhdGEucmVzdWx0c1xuICAgICAgICBjb25zdCB1cENvbWluZ1Jlc3VsdHMgPSByZXNwb25zZXNbMl0uZGF0YS5yZXN1bHRzXG4gICAgICAgIGNvbnN0IHRvcFJlc3VsdHMgPSByZXNwb25zZXNbM10uZGF0YS5yZXN1bHRzXG5cbiAgICAgICAgY29uc3Qgc2h1ZmZsZWRQb3B1bGFyUmVzdWx0cyA9IF8uc2h1ZmZsZShwb3B1bGFyUmVzdWx0cylcbiAgICAgICAgY29uc3Qgc2h1ZmZsZWRMYXRlc3RSZXN1bHRzID0gXy5zaHVmZmxlKGxhdGVzdFJlc3VsdHMpXG4gICAgICAgIGNvbnN0IHNodWZmbGVkVXBDb21pbmdSZXN1bHRzID0gXy5zaHVmZmxlKHVwQ29taW5nUmVzdWx0cylcbiAgICAgICAgY29uc3Qgc2h1ZmZsZWRUb3BSZXN1bHRzID0gXy5zaHVmZmxlKHRvcFJlc3VsdHMpXG5cbiAgICAgICAgc2V0UG9wdWxhcihzaHVmZmxlZFBvcHVsYXJSZXN1bHRzKTtcbiAgICAgICAgc2V0TGF0ZXN0KHNodWZmbGVkTGF0ZXN0UmVzdWx0cyk7XG4gICAgICAgIHNldFVwY29taW5nKHNodWZmbGVkVXBDb21pbmdSZXN1bHRzKTtcbiAgICAgICAgc2V0VG9wKHNodWZmbGVkVG9wUmVzdWx0cyk7XG5cbiAgICAgIH0pKS5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/state.js\n");

/***/ })

})