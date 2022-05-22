"use strict";
exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 5185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DispatchContext);


/***/ }),

/***/ 3776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export StateContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateContext);


/***/ }),

/***/ 8257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ }),

/***/ 6212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* reexport */ action_creators_namespaceObject),
  "Z": () => (/* reexport */ state_store)
});

// NAMESPACE OBJECT: ./state/action-creators/index.ts
var action_creators_namespaceObject = {};
__webpack_require__.r(action_creators_namespaceObject);
__webpack_require__.d(action_creators_namespaceObject, {
  "bankrupt": () => (bankrupt),
  "depositMoney": () => (depositMoney),
  "getuserfavorite": () => (getuserfavorite),
  "mainServices": () => (mainServices),
  "storecategory": () => (storecategory),
  "storeservices": () => (storeservices),
  "user": () => (user),
  "withdrawMoney": () => (withdrawMoney)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(8417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
;// CONCATENATED MODULE: ./state/action-types/index.ts
var ActionType;
(function(ActionType) {
    ActionType["DEPOSIT"] = "deposit";
    ActionType["WITHDRAW"] = "withdraw";
    ActionType["BANKRUPT"] = "bankrupt";
    ActionType["USER"] = "user";
    ActionType["CATEGORY"] = "category";
    ActionType["SERVICEVIAID"] = "serviceviaid";
    ActionType["SERVICE"] = "services";
    ActionType["FAVORITE"] = "favorites";
})(ActionType || (ActionType = {}));

;// CONCATENATED MODULE: ./state/reducers/mainReducer.ts

const initialState = {
    user: [],
    isLoggedIn: false,
    categories: [],
    isCategories: false,
    services: [],
    mainservices: [],
    userfavorite: []
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionType.DEPOSIT:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case ActionType.CATEGORY:
            return {
                ...state,
                isCategories: false,
                categories: action.payload
            };
        case ActionType.SERVICEVIAID:
            return {
                ...state,
                services: action.payload
            };
        case ActionType.FAVORITE:
            return {
                ...state,
                userfavorite: action.payload
            };
        case ActionType.SERVICE:
            return {
                ...state,
                mainservices: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const mainReducer = (reducer);

;// CONCATENATED MODULE: ./state/reducers/index.ts


const reducers = (0,external_redux_.combineReducers)({
    appstate: mainReducer
});
/* harmony default export */ const state_reducers = (reducers);

;// CONCATENATED MODULE: ./state/store.ts



const store = (0,external_redux_.createStore)(state_reducers, {}, (0,external_redux_.applyMiddleware)((external_redux_thunk_default())));
/* harmony default export */ const state_store = (store);

;// CONCATENATED MODULE: ./state/action-creators/index.ts

const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        });
    };
};
const getuserfavorite = (favorite)=>{
    return (dispatch)=>{
        dispatch({
            type: ActionType.FAVORITE,
            payload: favorite
        });
    };
};
const storecategory = (category)=>{
    return (dispatch)=>{
        dispatch({
            type: ActionType.CATEGORY,
            payload: category
        });
    };
};
const storeservices = (services)=>{
    return (dispatch)=>{
        dispatch({
            type: ActionType.SERVICEVIAID,
            payload: services
        });
    };
};
const mainServices = (mainservices)=>{
    return (dispatch)=>{
        dispatch({
            type: ActionType.SERVICE,
            payload: mainservices
        });
    };
};
const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        });
    };
};
const user = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: ActionType.USER,
            payload: amount
        });
    };
};
const bankrupt = ()=>{
    return (dispatch)=>{
        dispatch({
            type: ActionType.BANKRUPT
        });
    };
};

;// CONCATENATED MODULE: ./state/index.ts




/***/ })

};
;