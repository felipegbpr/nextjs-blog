webpackHotUpdate_N_E("pages/categories/[category]",{

/***/ "./src/containers/HomePage/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/HomePage/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/containers/HomePage/styles.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MainContainer */ \"./src/components/MainContainer/index.tsx\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PostCard */ \"./src/components/PostCard/index.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ \"./src/components/Footer/index.tsx\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/app-config */ \"./src/config/app-config.ts\");\nvar _jsxFileName = \"/home/felipe/cursos/cursojstypescript/projects/blog-next/src/containers/HomePage/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction HomePage(_ref) {\n  var _this = this;\n  var posts = _ref.posts,\n    category = _ref.category;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, _config_app_config__WEBPACK_IMPORTED_MODULE_7__[\"SITE_NAME\"]), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Este \\xE9 meu blog de tecnologia.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), category && __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 20\n    }\n  }, \"Categoria: \", category), __jsx(_components_MainContainer__WEBPACK_IMPORTED_MODULE_4__[\"MainContainer\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__[\"PostCard\"], {\n      key: post.slug,\n      cover: post.cover.formats.small.url,\n      slug: post.slug,\n      title: post.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    });\n  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"Footer\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }));\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZVBhZ2UvaW5kZXgudHN4PzQxODEiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJfcmVmIiwiX3RoaXMiLCJwb3N0cyIsImNhdGVnb3J5IiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiSGVhZCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiU0lURV9OQU1FIiwibmFtZSIsImNvbnRlbnQiLCJIZWFkZXIiLCJDYXRlZ29yeSIsIk1haW5Db250YWluZXIiLCJDb250YWluZXIiLCJtYXAiLCJwb3N0IiwiUG9zdENhcmQiLCJrZXkiLCJzbHVnIiwiY292ZXIiLCJmb3JtYXRzIiwic21hbGwiLCJ1cmwiLCJ0aXRsZSIsIkZvb3RlciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDa0I7QUFFRTtBQUNjO0FBQ1Y7QUFDSjtBQUNHO0FBT3JDLFNBQVNBLFFBQVFBLENBQUFDLElBQUEsRUFBcUM7RUFBQSxJQUFBQyxLQUFBO0VBQUEsSUFBbENDLEtBQUssR0FBQUYsSUFBQSxDQUFMRSxLQUFLO0lBQUVDLFFBQVEsR0FBQUgsSUFBQSxDQUFSRyxRQUFRO0VBQ2hELE9BQ0VDLEtBQUEsQ0FBQUMsNENBQUEsQ0FBQUMsUUFBQSxRQUNFRixLQUFBLENBQUNHLGdEQUFJO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNIVCxLQUFBO0lBQUFJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFRQyw0REFBaUIsQ0FBQyxFQUMxQlYsS0FBQTtJQUFNVyxJQUFJLEVBQUMsYUFBYTtJQUFDQyxPQUFPLEVBQUMsbUNBQWdDO0lBQUFSLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQy9ELENBQUMsRUFDUFQsS0FBQSxDQUFDYSx5REFBTTtJQUFBVCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ1RWLFFBQVEsSUFBSUMsS0FBQSxDQUFDYyxnREFBUTtJQUFBVixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsa0JBQWFWLFFBQW1CLENBQUMsRUFDdkRDLEtBQUEsQ0FBQ2UsdUVBQWE7SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1pULEtBQUEsQ0FBQ2dCLGlEQUFTO0lBQUFaLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNQWCxLQUFLLENBQUNtQixHQUFHLENBQUMsVUFBQ0MsSUFBSTtJQUFBLE9BQ2RsQixLQUFBLENBQUNtQiw2REFBUTtNQUNQQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csSUFBSztNQUNmQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsR0FBSTtNQUNwQ0osSUFBSSxFQUFFSCxJQUFJLENBQUNHLElBQUs7TUFDaEJLLEtBQUssRUFBRVIsSUFBSSxDQUFDUSxLQUFNO01BQUF0QixNQUFBLEVBQUFQLEtBQUE7TUFBQVEsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxDQUNuQixDQUFDO0VBQUEsQ0FDSCxDQUNRLENBQ0UsQ0FBQyxFQUNoQlQsS0FBQSxDQUFDMkIseURBQU07SUFBQXZCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQ1QsQ0FBQztBQUVQO0FBQUNtQixFQUFBLEdBeEJ1QmpDLFFBQVE7QUFBQSxJQUFBaUMsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lUGFnZS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ2F0ZWdvcnksIENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vZG9tYWluL3Bvc3RzL3Bvc3QnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgTWFpbkNvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgeyBQb3N0Q2FyZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgU0lURV9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC1jb25maWcnO1xuXG5leHBvcnQgdHlwZSBIb21lUGFnZVByb3BzID0ge1xuICBwb3N0czogUG9zdERhdGFbXTtcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IHBvc3RzLCBjYXRlZ29yeSB9OiBIb21lUGFnZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1NJVEVfTkFNRX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRXN0ZSDDqSBtZXUgYmxvZyBkZSB0ZWNub2xvZ2lhLlwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7Y2F0ZWdvcnkgJiYgPENhdGVnb3J5PkNhdGVnb3JpYToge2NhdGVnb3J5fTwvQ2F0ZWdvcnk+fVxuICAgICAgPE1haW5Db250YWluZXI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAgICAgIGtleT17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5jb3Zlci5mb3JtYXRzLnNtYWxsLnVybH1cbiAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9NYWluQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/HomePage/index.tsx\n");

/***/ })

})