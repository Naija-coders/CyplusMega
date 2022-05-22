"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 7142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


let mainurl = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://salty-shore-67212.herokuapp.com/",
    headers: {
        Accept: "application/json"
    }
});
mainurl.interceptors.request.use((request)=>{
    const authToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("auth_token");
    const companyToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("CompanyToken");
    if (authToken) {
        request.headers["Authorization"] = `Bearer ${authToken}`;
    }
    if (companyToken) {
        request.headers["CompanyToken"] = `${companyToken}`;
    }
    return request;
});
mainurl.interceptors.response.use((response)=>{
    return response;
}, function(error) {
    var ref;
    if (((ref = error.response) === null || ref === void 0 ? void 0 : ref.status) === 401) {
        var _NEXT_PUBLIC_CURRENT_DOMAIN;
        // localStorage.removeItem("auth_token")
        // localStorage.removeItem("refresh_token")
        // localStorage.removeItem("current_company_id")
        // localStorage.removeItem("CompanyToken")
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("auth_token", {
            domain: (_NEXT_PUBLIC_CURRENT_DOMAIN = process.env.NEXT_PUBLIC_CURRENT_DOMAIN) !== null && _NEXT_PUBLIC_CURRENT_DOMAIN !== void 0 ? _NEXT_PUBLIC_CURRENT_DOMAIN : "localhost"
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("CompanyToken");
    // store.dispatch(action(actionTypes.UNAUTHENTICATE))
    }
    return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainurl);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7142));
module.exports = __webpack_exports__;

})();