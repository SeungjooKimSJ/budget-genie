"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/ssr */ \"(middleware)/./node_modules/@supabase/ssr/dist/module/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nasync function middleware(req) {\n    const res = next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n    // Create a Supabase client configured to use cookies\n    const supabase = (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createServerClient)(\"https://zolrdsjasjafdwmqakib.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvbHJkc2phc2phZmR3bXFha2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NjM4MTIsImV4cCI6MjA2MDMzOTgxMn0.1pYEPumd7uxhXpqt3G8rQ5A3HDEeMh0TEjFv11SMPLM\", {\n        cookies: {\n            get: (name)=>req.cookies.get(name)?.value,\n            set: (name, value, options)=>{\n                res.cookies.set({\n                    name,\n                    value,\n                    ...options,\n                    sameSite: 'lax',\n                    path: '/'\n                });\n            },\n            remove: (name, options)=>{\n                res.cookies.set({\n                    name,\n                    value: '',\n                    ...options,\n                    maxAge: 0,\n                    path: '/'\n                });\n            }\n        }\n    });\n    try {\n        const { data: { session } } = await supabase.auth.getSession();\n        const pathname = req.nextUrl.pathname;\n        // Skip middleware for public routes and API routes\n        if (pathname.startsWith('/_next') || pathname.startsWith('/static') || pathname.startsWith('/api/') || pathname === '/favicon.ico') {\n            return res;\n        }\n        // Only handle initial SSR requests, let client handle the rest\n        const isSSRRequest = !req.headers.get('sec-fetch-mode');\n        if (!isSSRRequest) {\n            return res;\n        }\n        // Handle authentication for SSR requests\n        if (!session && pathname !== '/login') {\n            const redirectUrl = new URL('/login', req.url);\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(redirectUrl);\n        }\n        if (session && pathname === '/login') {\n            const redirectUrl = new URL('/', req.url);\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(redirectUrl);\n        }\n        return res;\n    } catch (error) {\n        console.error('Middleware - Error:', error);\n        return res;\n    }\n}\nconst config = {\n    matcher: [\n        '/((?!_next/static|_next/image|favicon.ico).*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtRDtBQUNSO0FBR3BDLGVBQWVFLFdBQVdDLEdBQWdCO0lBQy9DLE1BQU1DLE1BQU1ILHFEQUFZQSxDQUFDSSxJQUFJO0lBRTdCLHFEQUFxRDtJQUNyRCxNQUFNQyxXQUFXTixpRUFBa0JBLENBQ2pDTywwQ0FBb0MsRUFDcENBLGtOQUF5QyxFQUN6QztRQUNFSSxTQUFTO1lBQ1BDLEtBQUssQ0FBQ0MsT0FBU1YsSUFBSVEsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU9DO1lBQ3RDQyxLQUFLLENBQUNGLE1BQU1DLE9BQU9FO2dCQUNqQlosSUFBSU8sT0FBTyxDQUFDSSxHQUFHLENBQUM7b0JBQ2RGO29CQUNBQztvQkFDQSxHQUFHRSxPQUFPO29CQUNWQyxVQUFVO29CQUNWQyxNQUFNO2dCQUNSO1lBQ0Y7WUFDQUMsUUFBUSxDQUFDTixNQUFNRztnQkFDYlosSUFBSU8sT0FBTyxDQUFDSSxHQUFHLENBQUM7b0JBQ2RGO29CQUNBQyxPQUFPO29CQUNQLEdBQUdFLE9BQU87b0JBQ1ZJLFFBQVE7b0JBQ1JGLE1BQU07Z0JBQ1I7WUFDRjtRQUNGO0lBQ0Y7SUFHRixJQUFJO1FBQ0YsTUFBTSxFQUFFRyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxFQUFFLEdBQUcsTUFBTWhCLFNBQVNpQixJQUFJLENBQUNDLFVBQVU7UUFDNUQsTUFBTUMsV0FBV3RCLElBQUl1QixPQUFPLENBQUNELFFBQVE7UUFFckMsbURBQW1EO1FBQ25ELElBQUlBLFNBQVNFLFVBQVUsQ0FBQyxhQUNwQkYsU0FBU0UsVUFBVSxDQUFDLGNBQ3BCRixTQUFTRSxVQUFVLENBQUMsWUFDcEJGLGFBQWEsZ0JBQWdCO1lBQy9CLE9BQU9yQjtRQUNUO1FBRUEsK0RBQStEO1FBQy9ELE1BQU13QixlQUFlLENBQUN6QixJQUFJMEIsT0FBTyxDQUFDakIsR0FBRyxDQUFDO1FBQ3RDLElBQUksQ0FBQ2dCLGNBQWM7WUFDakIsT0FBT3hCO1FBQ1Q7UUFFQSx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDa0IsV0FBV0csYUFBYSxVQUFVO1lBQ3JDLE1BQU1LLGNBQWMsSUFBSUMsSUFBSSxVQUFVNUIsSUFBSTZCLEdBQUc7WUFDN0MsT0FBTy9CLHFEQUFZQSxDQUFDZ0MsUUFBUSxDQUFDSDtRQUMvQjtRQUVBLElBQUlSLFdBQVdHLGFBQWEsVUFBVTtZQUNwQyxNQUFNSyxjQUFjLElBQUlDLElBQUksS0FBSzVCLElBQUk2QixHQUFHO1lBQ3hDLE9BQU8vQixxREFBWUEsQ0FBQ2dDLFFBQVEsQ0FBQ0g7UUFDL0I7UUFFQSxPQUFPMUI7SUFDVCxFQUFFLE9BQU84QixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLE9BQU85QjtJQUNUO0FBQ0Y7QUFFTyxNQUFNZ0MsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQWlEO0FBQzdELEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2otc2tcXHJlcG9zXFxwb3J0Zm9saW8tbmV4dGpzXFxwZW5ueS1qb3VybmFsXFxzcmNcXG1pZGRsZXdhcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VydmVyQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3Nzcic7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHR5cGUgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCByZXMgPSBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBTdXBhYmFzZSBjbGllbnQgY29uZmlndXJlZCB0byB1c2UgY29va2llc1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlU2VydmVyQ2xpZW50KFxyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZISxcclxuICAgIHtcclxuICAgICAgY29va2llczoge1xyXG4gICAgICAgIGdldDogKG5hbWUpID0+IHJlcS5jb29raWVzLmdldChuYW1lKT8udmFsdWUsXHJcbiAgICAgICAgc2V0OiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgIHJlcy5jb29raWVzLnNldCh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiAobmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgcmVzLmNvb2tpZXMuc2V0KHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICBtYXhBZ2U6IDAsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YTogeyBzZXNzaW9uIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xyXG4gICAgY29uc3QgcGF0aG5hbWUgPSByZXEubmV4dFVybC5wYXRobmFtZTtcclxuXHJcbiAgICAvLyBTa2lwIG1pZGRsZXdhcmUgZm9yIHB1YmxpYyByb3V0ZXMgYW5kIEFQSSByb3V0ZXNcclxuICAgIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKCcvX25leHQnKSB8fCBcclxuICAgICAgICBwYXRobmFtZS5zdGFydHNXaXRoKCcvc3RhdGljJykgfHwgXHJcbiAgICAgICAgcGF0aG5hbWUuc3RhcnRzV2l0aCgnL2FwaS8nKSB8fFxyXG4gICAgICAgIHBhdGhuYW1lID09PSAnL2Zhdmljb24uaWNvJykge1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgaGFuZGxlIGluaXRpYWwgU1NSIHJlcXVlc3RzLCBsZXQgY2xpZW50IGhhbmRsZSB0aGUgcmVzdFxyXG4gICAgY29uc3QgaXNTU1JSZXF1ZXN0ID0gIXJlcS5oZWFkZXJzLmdldCgnc2VjLWZldGNoLW1vZGUnKTtcclxuICAgIGlmICghaXNTU1JSZXF1ZXN0KSB7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlIGF1dGhlbnRpY2F0aW9uIGZvciBTU1IgcmVxdWVzdHNcclxuICAgIGlmICghc2Vzc2lvbiAmJiBwYXRobmFtZSAhPT0gJy9sb2dpbicpIHtcclxuICAgICAgY29uc3QgcmVkaXJlY3RVcmwgPSBuZXcgVVJMKCcvbG9naW4nLCByZXEudXJsKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChyZWRpcmVjdFVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlc3Npb24gJiYgcGF0aG5hbWUgPT09ICcvbG9naW4nKSB7XHJcbiAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID0gbmV3IFVSTCgnLycsIHJlcS51cmwpO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KHJlZGlyZWN0VXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNaWRkbGV3YXJlIC0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvKCg/IV9uZXh0L3N0YXRpY3xfbmV4dC9pbWFnZXxmYXZpY29uLmljbykuKiknLF0sXHJcbn07ICJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXJDbGllbnQiLCJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsInN1cGFiYXNlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwiY29va2llcyIsImdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldCIsIm9wdGlvbnMiLCJzYW1lU2l0ZSIsInBhdGgiLCJyZW1vdmUiLCJtYXhBZ2UiLCJkYXRhIiwic2Vzc2lvbiIsImF1dGgiLCJnZXRTZXNzaW9uIiwicGF0aG5hbWUiLCJuZXh0VXJsIiwic3RhcnRzV2l0aCIsImlzU1NSUmVxdWVzdCIsImhlYWRlcnMiLCJyZWRpcmVjdFVybCIsIlVSTCIsInVybCIsInJlZGlyZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwiY29uZmlnIiwibWF0Y2hlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});