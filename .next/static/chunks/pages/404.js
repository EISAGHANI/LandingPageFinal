/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/404"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CEISA%20DATA%5CLANDING%20PAGE%5CFinalAttempt%5CLandingPageFinal%5Cpages%5C404.js&page=%2F404!":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CEISA%20DATA%5CLANDING%20PAGE%5CFinalAttempt%5CLandingPageFinal%5Cpages%5C404.js&page=%2F404! ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/404\",\n      function () {\n        return __webpack_require__(/*! ./pages/404.js */ \"./pages/404.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/404\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDRUlTQSUyMERBVEElNUNMQU5ESU5HJTIwUEFHRSU1Q0ZpbmFsQXR0ZW1wdCU1Q0xhbmRpbmdQYWdlRmluYWwlNUNwYWdlcyU1QzQwNC5qcyZwYWdlPSUyRjQwNCEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxzQ0FBZ0I7QUFDdkM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2ViMzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi80MDRcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzLzQwNC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvNDA0XCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CEISA%20DATA%5CLANDING%20PAGE%5CFinalAttempt%5CLandingPageFinal%5Cpages%5C404.js&page=%2F404!\n"));

/***/ }),

/***/ "./lib/redirect.js":
/*!*************************!*\
  !*** ./lib/redirect.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Redirect\": function() { return /* binding */ Redirect; },\n/* harmony export */   \"getRedirect\": function() { return /* binding */ getRedirect; },\n/* harmony export */   \"useRedirect\": function() { return /* binding */ useRedirect; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languageDetector */ \"./lib/languageDetector.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar useRedirect = function useRedirect(go) {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var to = go || router.asPath; // language detection\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var detectedLng = _languageDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].detect();\n\n    if (to.startsWith('/' + detectedLng) && router.route === '/404') {\n      // prevent endless loop\n      router.replace('/' + detectedLng + router.route);\n      return;\n    }\n\n    _languageDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cache(detectedLng);\n    router.replace('/' + detectedLng + to);\n  });\n  return null;\n};\n\n_s(useRedirect, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\nvar Redirect = function Redirect() {\n  _s2();\n\n  useRedirect();\n  return null;\n}; // eslint-disable-next-line react/display-name\n\n_s2(Redirect, \"4sVsHYlnUcDx9N5X/A6uPck44Lc=\", false, function () {\n  return [useRedirect];\n});\n\n_c = Redirect;\nvar getRedirect = function getRedirect(to) {\n  var _s3 = $RefreshSig$();\n\n  return _s3(function () {\n    _s3();\n\n    useRedirect(to);\n    return null;\n  }, \"4sVsHYlnUcDx9N5X/A6uPck44Lc=\", false, function () {\n    return [useRedirect];\n  });\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Redirect\");\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQVE7RUFBQTs7RUFDakMsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtFQUNBLElBQU1LLEVBQUUsR0FBR0YsRUFBRSxJQUFJQyxNQUFNLENBQUNFLE1BQXhCLENBRmlDLENBSWpDOztFQUNBUCxnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFNUSxXQUFXLEdBQUdOLGdFQUFBLEVBQXBCOztJQUNBLElBQUlJLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLE1BQU1GLFdBQXBCLEtBQW9DSCxNQUFNLENBQUNNLEtBQVAsS0FBaUIsTUFBekQsRUFBaUU7TUFBRTtNQUNqRU4sTUFBTSxDQUFDTyxPQUFQLENBQWUsTUFBTUosV0FBTixHQUFvQkgsTUFBTSxDQUFDTSxLQUExQztNQUNBO0lBQ0Q7O0lBRURULCtEQUFBLENBQXVCTSxXQUF2QjtJQUNBSCxNQUFNLENBQUNPLE9BQVAsQ0FBZSxNQUFNSixXQUFOLEdBQW9CRixFQUFuQztFQUNELENBVFEsQ0FBVDtFQVdBLE9BQU8sSUFBUDtBQUNELENBakJNOztHQUFNSDtVQUNJRjs7O0FBa0JWLElBQU1hLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFBQTs7RUFDNUJYLFdBQVc7RUFDWCxPQUFPLElBQVA7QUFDRCxDQUhNLEVBS1A7O0lBTGFXO1VBQ1hYOzs7S0FEV1c7QUFNTixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDVCxFQUFEO0VBQUE7O0VBQUEsV0FBUSxZQUFNO0lBQUE7O0lBQ3ZDSCxXQUFXLENBQUNHLEVBQUQsQ0FBWDtJQUNBLE9BQU8sSUFBUDtFQUNELENBSDBCO0lBQUEsUUFDekJILFdBRHlCO0VBQUE7QUFBQSxDQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvcmVkaXJlY3QuanM/ODNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGxhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnLi9sYW5ndWFnZURldGVjdG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VSZWRpcmVjdCA9IChnbykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRvID0gZ28gfHwgcm91dGVyLmFzUGF0aDtcclxuXHJcbiAgLy8gbGFuZ3VhZ2UgZGV0ZWN0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRldGVjdGVkTG5nID0gbGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKTtcclxuICAgIGlmICh0by5zdGFydHNXaXRoKCcvJyArIGRldGVjdGVkTG5nKSAmJiByb3V0ZXIucm91dGUgPT09ICcvNDA0JykgeyAvLyBwcmV2ZW50IGVuZGxlc3MgbG9vcFxyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycgKyBkZXRlY3RlZExuZyArIHJvdXRlci5yb3V0ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsYW5ndWFnZURldGVjdG9yLmNhY2hlKGRldGVjdGVkTG5nKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKCcvJyArIGRldGVjdGVkTG5nICsgdG8pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWRpcmVjdCA9ICgpID0+IHtcclxuICB1c2VSZWRpcmVjdCgpO1xyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG5leHBvcnQgY29uc3QgZ2V0UmVkaXJlY3QgPSAodG8pID0+ICgpID0+IHtcclxuICB1c2VSZWRpcmVjdCh0byk7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJsYW5ndWFnZURldGVjdG9yIiwidXNlUmVkaXJlY3QiLCJnbyIsInJvdXRlciIsInRvIiwiYXNQYXRoIiwiZGV0ZWN0ZWRMbmciLCJkZXRlY3QiLCJzdGFydHNXaXRoIiwicm91dGUiLCJyZXBsYWNlIiwiY2FjaGUiLCJSZWRpcmVjdCIsImdldFJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redirect.js\n"));

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/redirect */ \"./lib/redirect.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_lib_redirect__WEBPACK_IMPORTED_MODULE_0__.Redirect);\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLCtEQUFlQSxtREFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy80MDQuanM/M2VkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJy4uL2xpYi9yZWRpcmVjdCc7XHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0O1xyXG4iXSwibmFtZXMiOlsiUmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/404.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CEISA%20DATA%5CLANDING%20PAGE%5CFinalAttempt%5CLandingPageFinal%5Cpages%5C404.js&page=%2F404!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);