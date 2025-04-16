"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"(app-pages-browser)/./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction LoginPage() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_3__.createClientComponentClient)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setError(null);\n        setIsLoading(true);\n        try {\n            console.log('Attempting to sign in with:', email);\n            const { data, error } = await supabase.auth.signInWithPassword({\n                email,\n                password\n            });\n            if (error) {\n                console.error('Sign in error:', error);\n                throw error;\n            }\n            if (data === null || data === void 0 ? void 0 : data.session) {\n                console.log('Sign in successful, setting session');\n                // Navigate first, then update session\n                router.push('/');\n                // Update session in the background\n                await supabase.auth.setSession(data.session);\n            }\n        } catch (error) {\n            console.error('Error:', error);\n            setError('Invalid email or password. Please try again.');\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center bg-gray-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-6 text-center text-3xl font-extrabold text-gray-900\",\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"mt-8 space-y-6\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md shadow-sm -space-y-px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"sr-only\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"email\",\n                                            name: \"email\",\n                                            type: \"email\",\n                                            required: true,\n                                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\",\n                                            placeholder: \"Email\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            disabled: isLoading\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            className: \"sr-only\",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"password\",\n                                            name: \"password\",\n                                            type: \"password\",\n                                            required: true,\n                                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\",\n                                            placeholder: \"Password\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            disabled: isLoading\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative\",\n                            role: \"alert\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"block sm:inline\",\n                                children: error\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: isLoading,\n                                className: \"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white \".concat(isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700', \" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\"),\n                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"animate-spin -ml-1 mr-3 h-5 w-5 text-white\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                    className: \"opacity-25\",\n                                                    cx: \"12\",\n                                                    cy: \"12\",\n                                                    r: \"10\",\n                                                    stroke: \"currentColor\",\n                                                    strokeWidth: \"4\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    className: \"opacity-75\",\n                                                    fill: \"currentColor\",\n                                                    d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 19\n                                        }, this),\n                                        \"Signing in...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 17\n                                }, this) : 'Sign In'\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"jz9qRxvO7uN93PEQN75fPT0GIWE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ1c7QUFDZ0M7QUFFN0QsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFnQjtJQUNsRCxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVksV0FBV1YsMEZBQTJCQTtJQUM1QyxNQUFNVyxTQUFTWiwwREFBU0E7SUFFeEIsTUFBTWEsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQlAsU0FBUztRQUNURSxhQUFhO1FBRWIsSUFBSTtZQUNGTSxRQUFRQyxHQUFHLENBQUMsK0JBQStCZDtZQUMzQyxNQUFNLEVBQUVlLElBQUksRUFBRVgsS0FBSyxFQUFFLEdBQUcsTUFBTUksU0FBU1EsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQztnQkFDN0RqQjtnQkFDQUU7WUFDRjtZQUVBLElBQUlFLE9BQU87Z0JBQ1RTLFFBQVFULEtBQUssQ0FBQyxrQkFBa0JBO2dCQUNoQyxNQUFNQTtZQUNSO1lBRUEsSUFBSVcsaUJBQUFBLDJCQUFBQSxLQUFNRyxPQUFPLEVBQUU7Z0JBQ2pCTCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osc0NBQXNDO2dCQUN0Q0wsT0FBT1UsSUFBSSxDQUFDO2dCQUNaLG1DQUFtQztnQkFDbkMsTUFBTVgsU0FBU1EsSUFBSSxDQUFDSSxVQUFVLENBQUNMLEtBQUtHLE9BQU87WUFDN0M7UUFDRixFQUFFLE9BQU9kLE9BQU87WUFDZFMsUUFBUVQsS0FBSyxDQUFDLFVBQVVBO1lBQ3hCQyxTQUFTO1lBQ1RFLGFBQWE7UUFDZjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDs4QkFDQyw0RUFBQ0U7d0JBQUdELFdBQVU7a0NBQXlEOzs7Ozs7Ozs7Ozs4QkFJekUsOERBQUNFO29CQUFLRixXQUFVO29CQUFpQkcsVUFBVWY7O3NDQUN6Qyw4REFBQ1c7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDs7c0RBQ0MsOERBQUNLOzRDQUFNQyxTQUFROzRDQUFRTCxXQUFVO3NEQUFVOzs7Ozs7c0RBRzNDLDhEQUFDTTs0Q0FDQ0MsSUFBRzs0Q0FDSEMsTUFBSzs0Q0FDTEMsTUFBSzs0Q0FDTEMsUUFBUTs0Q0FDUlYsV0FBVTs0Q0FDVlcsYUFBWTs0Q0FDWkMsT0FBT2xDOzRDQUNQbUMsVUFBVSxDQUFDeEIsSUFBTVYsU0FBU1UsRUFBRXlCLE1BQU0sQ0FBQ0YsS0FBSzs0Q0FDeENHLFVBQVUvQjs7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDZTs7c0RBQ0MsOERBQUNLOzRDQUFNQyxTQUFROzRDQUFXTCxXQUFVO3NEQUFVOzs7Ozs7c0RBRzlDLDhEQUFDTTs0Q0FDQ0MsSUFBRzs0Q0FDSEMsTUFBSzs0Q0FDTEMsTUFBSzs0Q0FDTEMsUUFBUTs0Q0FDUlYsV0FBVTs0Q0FDVlcsYUFBWTs0Q0FDWkMsT0FBT2hDOzRDQUNQaUMsVUFBVSxDQUFDeEIsSUFBTVIsWUFBWVEsRUFBRXlCLE1BQU0sQ0FBQ0YsS0FBSzs0Q0FDM0NHLFVBQVUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUtmRix1QkFDQyw4REFBQ2lCOzRCQUFJQyxXQUFVOzRCQUEwRWdCLE1BQUs7c0NBQzVGLDRFQUFDQztnQ0FBS2pCLFdBQVU7MENBQW1CbEI7Ozs7Ozs7Ozs7O3NDQUl2Qyw4REFBQ2lCO3NDQUNDLDRFQUFDbUI7Z0NBQ0NULE1BQUs7Z0NBQ0xNLFVBQVUvQjtnQ0FDVmdCLFdBQVcsMkhBRVYsT0FEQ2hCLFlBQVksa0JBQWtCLHFDQUMvQjswQ0FFQUEsMEJBQ0MsOERBQUNlO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ21COzRDQUFJbkIsV0FBVTs0Q0FBNkNvQixPQUFNOzRDQUE2QkMsTUFBSzs0Q0FBT0MsU0FBUTs7OERBQ2pILDhEQUFDQztvREFBT3ZCLFdBQVU7b0RBQWF3QixJQUFHO29EQUFLQyxJQUFHO29EQUFLQyxHQUFFO29EQUFLQyxRQUFPO29EQUFlQyxhQUFZOzs7Ozs7OERBQ3hGLDhEQUFDQztvREFBSzdCLFdBQVU7b0RBQWFxQixNQUFLO29EQUFlUyxHQUFFOzs7Ozs7Ozs7Ozs7d0NBQy9DOzs7Ozs7MkNBSVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEI7R0FsSHdCckQ7O1FBTVBGLHNEQUFTQTs7O0tBTkZFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHNqLXNrXFxyZXBvc1xccG9ydGZvbGlvLW5leHRqc1xccGVubnktam91cm5hbFxcc3JjXFxhcHBcXGxvZ2luXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50Q29tcG9uZW50Q2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtaGVscGVycy1uZXh0anMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudENvbXBvbmVudENsaWVudCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBzaWduIGluIHdpdGg6JywgZW1haWwpO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25JbldpdGhQYXNzd29yZCh7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU2lnbiBpbiBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhPy5zZXNzaW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NpZ24gaW4gc3VjY2Vzc2Z1bCwgc2V0dGluZyBzZXNzaW9uJyk7XHJcbiAgICAgICAgLy8gTmF2aWdhdGUgZmlyc3QsIHRoZW4gdXBkYXRlIHNlc3Npb25cclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSBzZXNzaW9uIGluIHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgYXdhaXQgc3VwYWJhc2UuYXV0aC5zZXRTZXNzaW9uKGRhdGEuc2Vzc2lvbik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgc2V0RXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgc3BhY2UteS04IHAtOCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXQtOCBzcGFjZS15LTZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3ctc20gLXNwYWNlLXktcHhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtdC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwIGJvcmRlciBib3JkZXItcmVkLTIwMCB0ZXh0LXJlZC03MDAgcHgtNCBweS0zIHJvdW5kZWQgcmVsYXRpdmVcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBzbTppbmxpbmVcIj57ZXJyb3J9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgJHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/ICdiZy1pbmRpZ28tNDAwJyA6ICdiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAnXHJcbiAgICAgICAgICAgICAgfSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIC1tbC0xIG1yLTMgaC01IHctNSB0ZXh0LXdoaXRlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwib3BhY2l0eS0yNVwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCI0XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwib3BhY2l0eS03NVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0em0yIDUuMjkxQTcuOTYyIDcuOTYyIDAgMDE0IDEySDBjMCAzLjA0MiAxLjEzNSA1LjgyNCAzIDcuOTM4bDMtMi42NDd6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgU2lnbmluZyBpbi4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICdTaWduIEluJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiY3JlYXRlQ2xpZW50Q29tcG9uZW50Q2xpZW50IiwiTG9naW5QYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic3VwYWJhc2UiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImF1dGgiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZXNzaW9uIiwicHVzaCIsInNldFNlc3Npb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJyb2xlIiwic3BhbiIsImJ1dHRvbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsImQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});