"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3776);
/* harmony import */ var _context_DispatchContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5185);
/* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7294);
/* harmony import */ var _store_global_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8678);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7626);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_auth_store__WEBPACK_IMPORTED_MODULE_4__, _i18n__WEBPACK_IMPORTED_MODULE_7__, _state__WEBPACK_IMPORTED_MODULE_8__]);
([_store_auth_store__WEBPACK_IMPORTED_MODULE_4__, _i18n__WEBPACK_IMPORTED_MODULE_7__, _state__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function MyApp({ Component , pageProps  }) {
    const [GlobalState, GlobalDispatcher] = (0,use_immer__WEBPACK_IMPORTED_MODULE_1__.useImmerReducer)(_store_global_store__WEBPACK_IMPORTED_MODULE_5__/* .GlobalReducer */ ._, _store_global_store__WEBPACK_IMPORTED_MODULE_5__/* .initialGlobalState */ .T);
    const [AuthState, AuthDispatcher] = (0,use_immer__WEBPACK_IMPORTED_MODULE_1__.useImmerReducer)(_store_auth_store__WEBPACK_IMPORTED_MODULE_4__/* .AuthReducer */ .l, _store_auth_store__WEBPACK_IMPORTED_MODULE_4__/* .initialAuthState */ .F);
    const StateProviders = {
        GlobalState,
        AuthState
    };
    const DispatchProviders = {
        GlobalDispatcher,
        AuthDispatcher
    };
    console.log("store is ", _state__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
        store: _state__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_StateContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
            value: {
                ...StateProviders
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_DispatchContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Provider */ .Z.Provider, {
                value: {
                    ...DispatchProviders
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ initialAuthState),
/* harmony export */   "l": () => (/* binding */ AuthReducer)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, _pages_api_client__WEBPACK_IMPORTED_MODULE_2__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_0__, _pages_api_client__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



let categoryres;
let catdata = _pages_api_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get("api/Categories").then((response)=>{
    categoryres = response.data;
    console.log("checking context response", categoryres);
});
const initialAuthState = {
    isLoggedIn: !!js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("auth_token"),
    user: null,
    category: !!catdata,
    favorite: null,
    categorydata: null
};
const login = (draft)=>{
    console.log(">>>>>> Logging in ");
    draft.isLoggedIn = true;
    return draft;
};
const addCategories = (draft, payload)=>{
    draft.categorydata = payload;
    return draft;
};
const displayCategories = (draft)=>{
    draft.category = true;
    return draft;
};
const logout = (draft)=>{
    console.log("<<<<>>>>>>>>>> Logging out ");
    draft.isLoggedIn = false;
    draft.favorite = null;
    draft.user = initialAuthState.user;
    return draft;
};
const addUser = (draft, payload)=>{
    draft.user = payload;
    return draft;
};
const removeUser = (draft, payload)=>{
    draft.user = initialAuthState.user;
    return draft;
};
const getfavorite = (draft, payload)=>{
    draft.user = initialAuthState.favorite;
    return draft;
};
const AuthReducer = (draft, action)=>{
    const actions = {
        login: ()=>{
            login(draft);
        },
        logout: ()=>{
            logout(draft);
        },
        addUser: ()=>{
            addUser(draft, action.payload);
        },
        getfavorite: ()=>{
            getfavorite(draft, action.payload);
        },
        removeUser: ()=>{
            removeUser(draft, action.payload);
        },
        addCategories: ()=>{
            addCategories(draft, action.payload);
        },
        displayCategories: ()=>{
            displayCategories(draft);
        }
    };
    draft = actions[action.type]();
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ initialGlobalState),
/* harmony export */   "_": () => (/* binding */ GlobalReducer)
/* harmony export */ });
const initialGlobalState = {
    applicationFormResultMessage: null
};
const setApplicationFormResultMessage = (draft, payload)=>{
    draft.applicationFormResultMessage = payload;
    return draft;
};
function GlobalReducer(draft, action) {
    const actions = {
        setApplicationFormResultMessage: ()=>setApplicationFormResultMessage(draft, action.payload)
    };
    draft = actions[action.type]();
}



/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8805:
/***/ ((module) => {

module.exports = require("i18next");

/***/ }),

/***/ 6071:
/***/ ((module) => {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("use-immer");

/***/ }),

/***/ 4329:
/***/ ((module) => {

module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();