"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"22a616e9d895\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHNqLXNrXFxyZXBvc1xccG9ydGZvbGlvLW5leHRqc1xccGVubnktam91cm5hbFxcc3JjXFxhcHBcXGdsb2JhbHMuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMjJhNjE2ZTlkODk1XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/AuthProvider.tsx":
/*!*****************************************!*\
  !*** ./src/components/AuthProvider.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/supabase */ \"(app-pages-browser)/./src/utils/supabase.ts\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction AuthProvider(param) {\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            // Initial session check\n            const initializeAuth = {\n                \"AuthProvider.useEffect.initializeAuth\": async ()=>{\n                    try {\n                        const { data: { session } } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession();\n                        setSession(session);\n                        var _session_user;\n                        setUser((_session_user = session === null || session === void 0 ? void 0 : session.user) !== null && _session_user !== void 0 ? _session_user : null);\n                        // Handle redirection based on auth state and current path\n                        if (session && pathname === '/login') {\n                            console.log('Authenticated user on login page, redirecting to home');\n                            router.replace('/');\n                        } else if (!session && pathname !== '/login') {\n                            console.log('Unauthenticated user on protected page, redirecting to login');\n                            router.replace('/login');\n                        }\n                    } catch (error) {\n                        console.error('Error checking session:', error);\n                    } finally{\n                        setIsLoading(false);\n                    }\n                }\n            }[\"AuthProvider.useEffect.initializeAuth\"];\n            initializeAuth();\n            // Subscribe to auth changes\n            const { data: { subscription } } = _utils_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange({\n                \"AuthProvider.useEffect\": async (event, session)=>{\n                    console.log('Auth state changed:', event);\n                    setSession(session);\n                    var _session_user;\n                    setUser((_session_user = session === null || session === void 0 ? void 0 : session.user) !== null && _session_user !== void 0 ? _session_user : null);\n                    if (event === 'SIGNED_IN') {\n                        console.log('User signed in, redirecting to home');\n                        await router.replace('/');\n                        router.refresh();\n                    } else if (event === 'SIGNED_OUT') {\n                        console.log('User signed out, redirecting to login');\n                        await router.replace('/login');\n                        router.refresh();\n                    }\n                }\n            }[\"AuthProvider.useEffect\"]);\n            return ({\n                \"AuthProvider.useEffect\": ()=>{\n                    subscription.unsubscribe();\n                }\n            })[\"AuthProvider.useEffect\"];\n        }\n    }[\"AuthProvider.useEffect\"], [\n        pathname,\n        router\n    ]);\n    const signOut = async ()=>{\n        try {\n            await _utils_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signOut();\n            router.refresh();\n        } catch (error) {\n            console.error('Error signing out:', error);\n        }\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\components\\\\AuthProvider.tsx\",\n            lineNumber: 82,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            session,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sj-sk\\\\repos\\\\portfolio-nextjs\\\\penny-journal\\\\src\\\\components\\\\AuthProvider.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"wijOCKQ7BySBfy9FF7Vx8DTdUN4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n};\n_s1(useAuth, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F1dGhQcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ2Q7QUFFYjtBQVE1QyxNQUFNTyw0QkFBY1Asb0RBQWFBLENBQThCUTtBQUV4RCxTQUFTQyxhQUFhLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBaUMsR0FBM0M7O0lBQzNCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQWlCO0lBQ3ZELE1BQU0sQ0FBQ1ksV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNYyxTQUFTYiwwREFBU0E7SUFDeEIsTUFBTWMsV0FBV2IsNERBQVdBO0lBRTVCSCxnREFBU0E7a0NBQUM7WUFDUix3QkFBd0I7WUFDeEIsTUFBTWlCO3lEQUFpQjtvQkFDckIsSUFBSTt3QkFDRixNQUFNLEVBQUVDLE1BQU0sRUFBRVAsT0FBTyxFQUFFLEVBQUUsR0FBRyxNQUFNUCxxREFBUUEsQ0FBQ2UsSUFBSSxDQUFDQyxVQUFVO3dCQUM1RFIsV0FBV0Q7NEJBQ0hBO3dCQUFSRCxRQUFRQyxDQUFBQSxnQkFBQUEsb0JBQUFBLDhCQUFBQSxRQUFTRixJQUFJLGNBQWJFLDJCQUFBQSxnQkFBaUI7d0JBRXpCLDBEQUEwRDt3QkFDMUQsSUFBSUEsV0FBV0ssYUFBYSxVQUFVOzRCQUNwQ0ssUUFBUUMsR0FBRyxDQUFDOzRCQUNaUCxPQUFPUSxPQUFPLENBQUM7d0JBQ2pCLE9BQU8sSUFBSSxDQUFDWixXQUFXSyxhQUFhLFVBQVU7NEJBQzVDSyxRQUFRQyxHQUFHLENBQUM7NEJBQ1pQLE9BQU9RLE9BQU8sQ0FBQzt3QkFDakI7b0JBQ0YsRUFBRSxPQUFPQyxPQUFPO3dCQUNkSCxRQUFRRyxLQUFLLENBQUMsMkJBQTJCQTtvQkFDM0MsU0FBVTt3QkFDUlYsYUFBYTtvQkFDZjtnQkFDRjs7WUFFQUc7WUFFQSw0QkFBNEI7WUFDNUIsTUFBTSxFQUFFQyxNQUFNLEVBQUVPLFlBQVksRUFBRSxFQUFFLEdBQUdyQixxREFBUUEsQ0FBQ2UsSUFBSSxDQUFDTyxpQkFBaUI7MENBQ2hFLE9BQU9DLE9BQU9oQjtvQkFDWlUsUUFBUUMsR0FBRyxDQUFDLHVCQUF1Qks7b0JBQ25DZixXQUFXRDt3QkFDSEE7b0JBQVJELFFBQVFDLENBQUFBLGdCQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNGLElBQUksY0FBYkUsMkJBQUFBLGdCQUFpQjtvQkFFekIsSUFBSWdCLFVBQVUsYUFBYTt3QkFDekJOLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWixNQUFNUCxPQUFPUSxPQUFPLENBQUM7d0JBQ3JCUixPQUFPYSxPQUFPO29CQUNoQixPQUFPLElBQUlELFVBQVUsY0FBYzt3QkFDakNOLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWixNQUFNUCxPQUFPUSxPQUFPLENBQUM7d0JBQ3JCUixPQUFPYSxPQUFPO29CQUNoQjtnQkFDRjs7WUFHRjswQ0FBTztvQkFDTEgsYUFBYUksV0FBVztnQkFDMUI7O1FBQ0Y7aUNBQUc7UUFBQ2I7UUFBVUQ7S0FBTztJQUVyQixNQUFNZSxVQUFVO1FBQ2QsSUFBSTtZQUNGLE1BQU0xQixxREFBUUEsQ0FBQ2UsSUFBSSxDQUFDVyxPQUFPO1lBQzNCZixPQUFPYSxPQUFPO1FBQ2hCLEVBQUUsT0FBT0osT0FBTztZQUNkSCxRQUFRRyxLQUFLLENBQUMsc0JBQXNCQTtRQUN0QztJQUNGO0lBRUEsSUFBSVgsV0FBVztRQUNiLHFCQUFPLDhEQUFDa0I7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUMxQixZQUFZMkIsUUFBUTtRQUFDQyxPQUFPO1lBQUV4QjtZQUFNRTtZQUFTbUI7UUFBUTtrQkFDbkR0Qjs7Ozs7O0FBR1A7R0ExRWdCRDs7UUFJQ0wsc0RBQVNBO1FBQ1BDLHdEQUFXQTs7O0tBTGRJO0FBNEVULE1BQU0yQixVQUFVOztJQUNyQixNQUFNQyxVQUFVcEMsaURBQVVBLENBQUNNO0lBQzNCLElBQUk4QixZQUFZN0IsV0FBVztRQUN6QixNQUFNLElBQUk4QixNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFO0lBTldEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHNqLXNrXFxyZXBvc1xccG9ydGZvbGlvLW5leHRqc1xccGVubnktam91cm5hbFxcc3JjXFxjb21wb25lbnRzXFxBdXRoUHJvdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBTZXNzaW9uLCBVc2VyIH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICdAL3V0aWxzL3N1cGFiYXNlJztcclxuXHJcbnR5cGUgQXV0aENvbnRleHRUeXBlID0ge1xyXG4gIHVzZXI6IFVzZXIgfCBudWxsO1xyXG4gIHNlc3Npb246IFNlc3Npb24gfCBudWxsO1xyXG4gIHNpZ25PdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XHJcbn07XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlPFNlc3Npb24gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSW5pdGlhbCBzZXNzaW9uIGNoZWNrXHJcbiAgICBjb25zdCBpbml0aWFsaXplQXV0aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgc2Vzc2lvbiB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKTtcclxuICAgICAgICBzZXRTZXNzaW9uKHNlc3Npb24pO1xyXG4gICAgICAgIHNldFVzZXIoc2Vzc2lvbj8udXNlciA/PyBudWxsKTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIHJlZGlyZWN0aW9uIGJhc2VkIG9uIGF1dGggc3RhdGUgYW5kIGN1cnJlbnQgcGF0aFxyXG4gICAgICAgIGlmIChzZXNzaW9uICYmIHBhdGhuYW1lID09PSAnL2xvZ2luJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhlbnRpY2F0ZWQgdXNlciBvbiBsb2dpbiBwYWdlLCByZWRpcmVjdGluZyB0byBob21lJyk7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXNlc3Npb24gJiYgcGF0aG5hbWUgIT09ICcvbG9naW4nKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVW5hdXRoZW50aWNhdGVkIHVzZXIgb24gcHJvdGVjdGVkIHBhZ2UsIHJlZGlyZWN0aW5nIHRvIGxvZ2luJyk7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHNlc3Npb246JywgZXJyb3IpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5pdGlhbGl6ZUF1dGgoKTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgdG8gYXV0aCBjaGFuZ2VzXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgc3Vic2NyaXB0aW9uIH0gfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoXHJcbiAgICAgIGFzeW5jIChldmVudCwgc2Vzc2lvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBdXRoIHN0YXRlIGNoYW5nZWQ6JywgZXZlbnQpO1xyXG4gICAgICAgIHNldFNlc3Npb24oc2Vzc2lvbik7XHJcbiAgICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyID8/IG51bGwpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQgPT09ICdTSUdORURfSU4nKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBzaWduZWQgaW4sIHJlZGlyZWN0aW5nIHRvIGhvbWUnKTtcclxuICAgICAgICAgIGF3YWl0IHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdTSUdORURfT1VUJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgc2lnbmVkIG91dCwgcmVkaXJlY3RpbmcgdG8gbG9naW4nKTtcclxuICAgICAgICAgIGF3YWl0IHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICB9LCBbcGF0aG5hbWUsIHJvdXRlcl0pO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XHJcbiAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzaWduaW5nIG91dDonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2Vzc2lvbiwgc2lnbk91dCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59OyAiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZVBhdGhuYW1lIiwic3VwYWJhc2UiLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsInBhdGhuYW1lIiwiaW5pdGlhbGl6ZUF1dGgiLCJkYXRhIiwiYXV0aCIsImdldFNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsImVycm9yIiwic3Vic2NyaXB0aW9uIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJldmVudCIsInJlZnJlc2giLCJ1bnN1YnNjcmliZSIsInNpZ25PdXQiLCJkaXYiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AuthProvider.tsx\n"));

/***/ })

});