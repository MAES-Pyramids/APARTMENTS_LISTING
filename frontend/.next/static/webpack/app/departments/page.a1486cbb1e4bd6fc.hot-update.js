"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/departments/page",{

/***/ "(app-pages-browser)/./components/departments/DepartmentsFilter.tsx":
/*!******************************************************!*\
  !*** ./components/departments/DepartmentsFilter.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DepartmentFilter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/TextInput */ \"(app-pages-browser)/./components/common/TextInput.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst options = [\n    {\n        label: \"Option 1\",\n        value: \"1\"\n    },\n    {\n        label: \"Option 2\",\n        value: \"2\"\n    },\n    {\n        label: \"Option 3\",\n        value: \"3\"\n    }\n];\nfunction DepartmentFilter() {\n    _s();\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-lg md:text-2xl text-[#4D5F65] font-bold mb-3\",\n                children: \"Filter\"\n            }, void 0, false, {\n                fileName: \"E:\\\\..My Apps\\\\nawy_assignment\\\\frontend\\\\components\\\\departments\\\\DepartmentsFilter.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center flex-wrap gap-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_TextInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    label: \"Search\",\n                    value: inputValue,\n                    placeholder: \"Enter department name\",\n                    onRowChange: (e)=>setInputValue(e.target.value),\n                    className: \"w-full\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\..My Apps\\\\nawy_assignment\\\\frontend\\\\components\\\\departments\\\\DepartmentsFilter.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\..My Apps\\\\nawy_assignment\\\\frontend\\\\components\\\\departments\\\\DepartmentsFilter.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\..My Apps\\\\nawy_assignment\\\\frontend\\\\components\\\\departments\\\\DepartmentsFilter.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(DepartmentFilter, \"R0UT9d3Aj5h+eCpl7zfGsvaOlkY=\");\n_c = DepartmentFilter;\nvar _c;\n$RefreshReg$(_c, \"DepartmentFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGVwYXJ0bWVudHMvRGVwYXJ0bWVudHNGaWx0ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFFVztBQUU1QyxNQUFNRSxVQUFVO0lBQ2Q7UUFBRUMsT0FBTztRQUFZQyxPQUFPO0lBQUk7SUFDaEM7UUFBRUQsT0FBTztRQUFZQyxPQUFPO0lBQUk7SUFDaEM7UUFBRUQsT0FBTztRQUFZQyxPQUFPO0lBQUk7Q0FDakM7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FHMUM7SUFDVixNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFFN0MscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBb0Q7Ozs7OzswQkFHbEUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDVix5REFBU0E7b0JBQ1JFLE9BQU07b0JBQ05DLE9BQU9JO29CQUNQSyxhQUFZO29CQUNaQyxhQUFhLENBQUNDLElBQU1OLGNBQWNNLEVBQUVDLE1BQU0sQ0FBQ1osS0FBSztvQkFDaERPLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBdkJ3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIkU6XFwuLk15IEFwcHNcXG5hd3lfYXNzaWdubWVudFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXGRlcGFydG1lbnRzXFxEZXBhcnRtZW50c0ZpbHRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi9jb21tb24vRHJvcGRvd25cIjtcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4uL2NvbW1vbi9UZXh0SW5wdXRcIjtcblxuY29uc3Qgb3B0aW9ucyA9IFtcbiAgeyBsYWJlbDogXCJPcHRpb24gMVwiLCB2YWx1ZTogXCIxXCIgfSxcbiAgeyBsYWJlbDogXCJPcHRpb24gMlwiLCB2YWx1ZTogXCIyXCIgfSxcbiAgeyBsYWJlbDogXCJPcHRpb24gM1wiLCB2YWx1ZTogXCIzXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcGFydG1lbnRGaWx0ZXIoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGU8e1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgfSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC0yeGwgdGV4dC1bIzRENUY2NV0gZm9udC1ib2xkIG1iLTNcIj5cbiAgICAgICAgRmlsdGVyXG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgZ2FwLTNcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlcGFydG1lbnQgbmFtZVwiXG4gICAgICAgICAgb25Sb3dDaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUZXh0SW5wdXQiLCJvcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsIkRlcGFydG1lbnRGaWx0ZXIiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInBsYWNlaG9sZGVyIiwib25Sb3dDaGFuZ2UiLCJlIiwidGFyZ2V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/departments/DepartmentsFilter.tsx\n"));

/***/ })

});