"use strict";
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 3947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9353);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1658);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_api_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8257);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3776);
/* harmony import */ var _context_DispatchContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5185);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9915);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _LoginModal_Loginmodal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _pages_api_client__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_9__, _LoginModal_Loginmodal__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _pages_api_client__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_9__, _LoginModal_Loginmodal__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Signin = ({ saveUser , CloseModalForm , onSuccess  })=>{
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const { AuthState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_StateContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const { AuthDispatcher  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_DispatchContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
    const { 0: recapcha , 1: setRecapcha  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    function handleClick() {
        setLoading(true);
    }
    const { 0: loginsucess , 1: setLoginsucess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [article, setArticle] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const onSubmit = async (data)=>{
        console.log(data.email);
        console.log(data.password);
        if (!recapcha) {
            console.log("please use recaptcha");
            setLoginsucess(true);
        } else {
            await handleClick();
            await _pages_api_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].post */ .Z.post("api/login", data).then((response)=>{
                console.log("it worked hahha", response);
                const user = response.data;
                console.log("your auth token is", response.data.auth_token);
                js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].set("auth_token", response.data.auth_token);
                AuthDispatcher({
                    type: "login"
                });
                AuthDispatcher({
                    type: "addUser",
                    payload: response.data
                });
                setArticle({
                    ...article,
                    user
                });
                console.log("article payload data", article);
                saveUser(article);
                console.log("the user state is", AuthState.user);
                onSuccess();
                setLoginsucess(true);
                setLoading(false);
            }).catch((err)=>{
                setLoginsucess(false);
                console.log("invalid data entered");
                setLoading(false);
            });
        }
    };
    console.log("finding the recaptcha ", "6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: "form",
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flexitems__flexsignin",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    style: {
                        fontSize: "1.4rem",
                        color: "#152238",
                        fontWeight: "bold",
                        marginTop: "30px"
                    },
                    children: "Log In"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .CustomDivider */ .eW, {}),
                !loginsucess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyledBox */ .D, {
                    sx: {
                        background: "red"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        color: "white",
                        align: "center",
                        sx: {
                            fontSize: "0.9rem",
                            fontFamily: "serif"
                        },
                        children: "Email or password is incorrect"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyledTextField */ .tH, {
                    type: "text",
                    size: "small",
                    label: "email",
                    ...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyledTextField */ .tH, {
                    type: "password",
                    size: "small",
                    ...register("password", {
                        required: true,
                        maxLength: 100
                    }),
                    label: "password"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_10___default()), {
                    sitekey: "6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG",
                    onChange: ()=>{
                        setRecapcha(true);
                    }
                }),
                loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyleLoadingButton */ .yf, {
                    loading: loading,
                    loadingPosition: "end",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                    variant: "contained",
                    children: "Login"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyleCheckoutButton */ .d0, {
                    type: "submit",
                    variant: "contained",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                    children: [
                        " ",
                        "Login"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyledTypography */ .fN, {
                    children: [
                        "        Don't have an Account?",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "text",
                            sx: {
                                textTransform: "none"
                            },
                            onClick: ()=>{
                                handleOpen();
                            },
                            children: "SignUp"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginModal_Loginmodal__WEBPACK_IMPORTED_MODULE_11__/* .LoginModal */ ._, {
                    OpenModalForm: open,
                    isSignup: true,
                    CloseModalForm: handleClose
                }),
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyledButton */ .Sn, {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "fb.png",
                                    alt: "facebookimage",
                                    height: 20,
                                    style: {
                                        color: "white",
                                        background: "white",
                                        marginRight: "2px",
                                        position: "relative"
                                    }
                                }),
                                "Facebook"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyledButtonGoogle */ .nj, {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "google.png",
                                    alt: "googleimage",
                                    height: 20,
                                    style: {
                                        color: "white",
                                        background: "white",
                                        marginRight: "2px",
                                        position: "relative"
                                    }
                                }),
                                "Google"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signin);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ StyledBox),
/* harmony export */   "Sn": () => (/* binding */ StyledButton),
/* harmony export */   "d0": () => (/* binding */ StyleCheckoutButton),
/* harmony export */   "eW": () => (/* binding */ CustomDivider),
/* harmony export */   "fN": () => (/* binding */ StyledTypography),
/* harmony export */   "nj": () => (/* binding */ StyledButtonGoogle),
/* harmony export */   "tH": () => (/* binding */ StyledTextField),
/* harmony export */   "yf": () => (/* binding */ StyleLoadingButton)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);



const StyledButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.experimental_sx)({
    "width": "35%",
    "color": "white",
    "borderRadius": "13px",
    "textTransform": "none",
    "boxShadow": "  0px 1px 0px 1px #888888",
    "background": "	#4267B2",
    "&:hover": {
        background: "blue"
    }
}));
const StyledButtonGoogle = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.experimental_sx)({
    "width": "35%",
    "color": "black",
    "borderRadius": "13px",
    "textTransform": "none",
    "background": "whitesmoke",
    "boxShadow": "  0px 1px 0px 1px #888888",
    "&:hover": {
        background: "white"
    }
}));
const CustomDivider = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Divider)((0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.experimental_sx)({
    width: "80%",
    marginTop: "40px"
}));
const StyledTextField = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField)((0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.experimental_sx)({
    width: "80%",
    marginTop: "30px",
    color: "white",
    borderRadius: "10px",
    textTransform: "none"
}));
const StyledBox = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)((0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.experimental_sx)({
    width: "80%",
    marginTop: "30px"
}));
const StyleCheckoutButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.experimental_sx)({
    "width": "80%",
    "color": "white",
    "marginTop": "30px",
    "borderRadius": "13px",
    "textTransform": "none",
    "background": "#152238",
    "borderShadow": " 0px 0px 0px 10px grey",
    "&:hover": {
        background: "#035772"
    }
}));
const StyleLoadingButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_1___default()))((0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.experimental_sx)({
    width: "80%",
    color: "white",
    marginTop: "30px",
    borderRadius: "13px",
    textTransform: "none",
    background: "#FFA500",
    borderShadow: " 5px 4px grey",
    boxShadow: " 5px 4px #888888"
}));
const StyledTypography = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)((0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.experimental_sx)({
    marginTop: "10px",
    fontFamily: "serif"
}));


/***/ }),

/***/ 4636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SignUp = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "this is SignUp"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);


/***/ }),

/***/ 9960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx


function Footer({}) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer__stripbackground",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "facebook"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "instagram"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "pinterest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "twitter"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer__footeritem",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    children: "hi"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Footer/index.tsx



/***/ }),

/***/ 6966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ LoginModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8257);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3776);
/* harmony import */ var _context_DispatchContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5185);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions_actionCreators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2910);
/* harmony import */ var _Authentication_Signin_Signin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3947);
/* harmony import */ var _Authentication_Signup_Signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4636);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_client__WEBPACK_IMPORTED_MODULE_2__, _Authentication_Signin_Signin__WEBPACK_IMPORTED_MODULE_7__]);
([_pages_api_client__WEBPACK_IMPORTED_MODULE_2__, _Authentication_Signin_Signin__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// make login reusable
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 370,
    borderRadius: "25px",
    outline: 0
};
const LoginModal = ({ CloseModalForm , OpenModalForm , isSignup ,  })=>{
    const { AuthState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_StateContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { AuthDispatcher  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_DispatchContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.articles
    , react_redux__WEBPACK_IMPORTED_MODULE_6__.shallowEqual);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const saveuser = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((article)=>dispatch((0,_store_actions_actionCreators__WEBPACK_IMPORTED_MODULE_10__/* .addArticle */ .q)(article))
    , [
        dispatch
    ]);
    const fetchuser = ()=>{
        _pages_api_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get("api/user").then((response)=>{
            const user = response.data;
            AuthDispatcher({
                type: "login"
            });
            AuthDispatcher({
                type: "addUser",
                payload: user
            });
            console.log(AuthState.user);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Modal, {
        open: OpenModalForm,
        onClose: CloseModalForm,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
            sx: style,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {
                style: {
                    borderRadius: "25px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
                        onClick: CloseModalForm,
                        sx: {
                            position: "absolute",
                            right: "5%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9___default()), {})
                    }),
                    isSignup ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Authentication_Signup_Signup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Authentication_Signin_Signin__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        saveUser: saveuser,
                        onSuccess: fetchuser,
                        CloseModalForm: CloseModalForm
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6212);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1567);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7372);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8179);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_MenuRounded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5828);
/* harmony import */ var _mui_icons_material_MenuRounded__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MenuRounded__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _LoginModal_Loginmodal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6966);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3776);
/* harmony import */ var _context_DispatchContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5185);
/* harmony import */ var _pages_api_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8257);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoginModal_Loginmodal__WEBPACK_IMPORTED_MODULE_14__, _pages_api_client__WEBPACK_IMPORTED_MODULE_17__, js_cookie__WEBPACK_IMPORTED_MODULE_18__]);
([_LoginModal_Loginmodal__WEBPACK_IMPORTED_MODULE_14__, _pages_api_client__WEBPACK_IMPORTED_MODULE_17__, js_cookie__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* import React, { useState, useEffect, useContext } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
//plus button
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

import {
  AppBar,
  Typography,
  Link,
  Box,
  ListItemText,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  ListItemIcon,
  List,
  ListItemButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";
import {
  StyledAppBar,
  StyledButton,
  StyledSearchSubmitButton,
  StyledTextField,
} from "./styles";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { LoginModal } from "../LoginModal/Loginmodal";
import VerifiedIcon from "@mui/icons-material/Verified";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Clientapi from "../../pages/api/client";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import ForumIcon from "@mui/icons-material/Forum";

import Cookies from "js-cookie";
interface Contextype {
  AuthState: null | any;
  AuthDispatcher: null | any;
}
type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};
const Navbar: React.FC<Props> = ({ article, removeArticle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [categories, setCategories] = useState([]);
  const categoriesval = categories.slice(0, 14);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const dispatch: Dispatch<any> = useDispatch();

  console.log("article", article);

  const route = useRouter();
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setMyaccount(false);
  };

  const Closeevent = () => setOpen(false);
  const [scroll, setScroll] = useState("33px");
  const [myaccount, setMyaccount] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mainservice, setMainservices] = useState([]);
  const [anchorElmenu, setAnchorElmenu] = React.useState<null | HTMLElement>(
    null
  );
  const displaylist = Boolean(anchorEl);
  const displaymenu = Boolean(anchorElmenu);
  const [uservaldata, setUserValdata] = useState<any>();
  const handleProfileClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMyaccount(!myaccount);
  };
  const handleCloseMenu = () => {
    setAnchorElmenu(null);
  };
  const [menu, setMenu] = useState(true);
  const handleMenuClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElmenu(event.currentTarget);
    setMenu(!menu);
  };
  const handleScroll = () => {
    setScroll("0%");
  };
  const handleScrollclose = () => {
    setScroll("33px");
  };
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? handleScrollclose() : handleScroll();
  });
  const state = useSelector((state: RootState) => state.appstate);
  console.log("confirmation of the state ", state);
  console.log("checking the category state", state.categories);

  const { depositMoney, storecategory, withdrawMoney, mainServices, bankrupt } =
    bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    if (categories.length === 0) {
      Clientapi.get("api/Categories").then((response) => {
        setCategories(response.data);
        AuthDispatcher({ type: "addCategories", payload: response.data });
        console.log(
          "checking data",
          AuthDispatcher({ type: "addCategories", payload: response.data })
        );
        storecategory(response.data);
        AuthDispatcher({ type: "displayCategories" });
      });

      console.log("the lenght wasnt fetched", AuthState.categorydata);
    }
    if (mainservice.length === 0) {
      Clientapi.get("/api/company/categories").then((response) => {
        mainServices(response.data);
      });
    }
    if (AuthState.isLoggedIn) {
      Clientapi.get("api/user").then((response) => {
        const user = response.data;
        AuthDispatcher({ type: "addUser", payload: user });
        console.log(AuthState.user);
        //checking dispatch for reducer
        depositMoney(user);
      });
    }
  }, [categories]);

  let catvalue = state.categories?.slice(0, 14);
  console.log("this are the categories", categories);

  const HandleLogout = () => {
    Clientapi.get("api/logout").then((response) => {
      const user = response.data;
      console.log("logging out");
      Cookies.remove("auth_token");
      AuthDispatcher({ type: "logout" });
      handleClose();
    });
  };

  const imagelist = [
    "ITservice.png",
    "cleaningservice.png",
    "Eventservice.png",
    "entertainmentservices.png",
    "childcareservices.jpeg",
    "automativeservices.jpeg",
    "building&tradeservices.png",
    "legalservices.png",
    "image&beautyservices.jpeg",
    "landscaping&gardeningservices.jpeg",
    "logisticsservices.png",
    "printingservices.png",
    "photography&videoservices.png",
    "weddingeventsservices.jpeg",
  ];
  const RenderMobile = () => {
    return (
      <div className="navbar__nav_mobile">
        <IconButton onClick={handleMenuClicks} onMouseLeave={handleCloseMenu}>
          <MenuRoundedIcon />
          <Menu
            id="basic-menu"
            anchorEl={anchorElmenu}
            open={displaymenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {" "}
            <Box>
              {catvalue?.map(
                (
                  item: {
                    type:
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                  },
                  i: string | number | any
                ) => (
                  <MenuItem key={Math.random()}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignSelf: "self-end",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "serif",

                          fontSize: "0.9rem",
                        }}
                      >
                        <img
                          src={imagelist[i]}
                          style={{
                            height: "20px",
                            width: "20px",
                            position: "relative",
                            top: "4px",
                            left: -10,
                          }}
                        />
                        {item?.type}
                      </Typography>
                    </div>
                  </MenuItem>
                )
              )}
              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  style={{
                    fontFamily: "serif",

                    fontSize: "0.9rem",
                  }}
                >
                  Other Services
                </Typography>
              </MenuItem>
            </Box>
          </Menu>
        </IconButton>

        <StyledTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="small"
        />
      </div>
    );
  };
  return (
    <div className="navbar__navbarwrapper">
      <div className="navbar__subitem">
        <StyledButton sx={{ textDecoration: "underline" }}>
          {" "}
          <VerifiedIcon color="primary" /> Post on Wiki{" "}
        </StyledButton>
        <StyledButton>
          <ForumIcon color="primary" /> Forum
        </StyledButton>
      </div>
      <StyledAppBar
        sx={{
          postion: "relative",
          top: scroll,
        }}
        onScroll={handleScroll}
      >
        {RenderMobile()}
        <div className="navbar__container">
          <div className="navbar__mainwrapper">
            <IconButton onMouseEnter={handleMenuClicks}>
              <MenuRoundedIcon />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorElmenu}
              open={displaymenu}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {" "}
              <Box>
                {catvalue?.map(
                  (
                    item: {
                      type:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined;
                    },
                    i: string | number | any
                  ) => (
                    <MenuItem key={Math.random()}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignSelf: "self-end",
                        }}
                      >
                        <Typography
                          style={{
                            fontFamily: "serif",

                            fontSize: "0.9rem",
                          }}
                        >
                          <img
                            src={imagelist[i]}
                            style={{
                              height: "20px",
                              width: "20px",
                              position: "relative",
                              top: "4px",
                              left: -10,
                            }}
                          />
                          {item?.type}
                        </Typography>
                      </div>
                    </MenuItem>
                  )
                )}
                <MenuItem onClick={handleCloseMenu}>
                  <Typography
                    style={{
                      fontFamily: "serif",

                      fontSize: "0.9rem",
                    }}
                  >
                    Other Services
                  </Typography>
                </MenuItem>
              </Box>
            </Menu>
          </div>
          <div>
            {" "}
            <Link
              onClick={() => {
                route.push("/");
              }}
            >
              <Typography
                color="black"
                sx={{
                  fontFamily: "Geotica Four Open",
                  font: "Geotica Four Open",
                }}
              >
                GreatServices
              </Typography>
            </Link>
          </div>
          <div style={{ width: "100%" }} className="navbar__childcontainer">
            <StyledTextField
              placeholder="Find Service"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
            <StyledSearchSubmitButton size="small" variant="contained">
              {" "}
              Search
            </StyledSearchSubmitButton>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {AuthState.user ? (
                <StyledButton
                  variant="text"
                  sx={{ textTransform: "none" }}
                  onClick={handleProfileClicks}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar /> &nbsp; Hi {AuthState.user.name}{" "}
                  {myaccount ? (
                    <>
                      {" "}
                      <KeyboardArrowDown
                        sx={{ transform: "rotate(0deg)" }}
                      />{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <KeyboardArrowDown
                        sx={{ transform: "rotate(180deg)" }}
                      />{" "}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={displaylist}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={HandleLogout}>Logout</MenuItem>
                      </Menu>
                    </>
                  )}
                </StyledButton>
              ) : (
                <>
                  <StyledButton
                    variant="text"
                    sx={{ textTransform: "none" }}
                    onClick={handleOpen}
                  >
                    <PersonIcon /> Account <KeyboardArrowDown />
                  </StyledButton>
                  <LoginModal
                    OpenModalForm={open}
                    CloseModalForm={handleClose}
                  />{" "}
                </>
              )}

              <StyledButton variant="text" sx={{ textTransform: "none" }}>
                {" "}
                <HelpIcon />
                Help
                <KeyboardArrowDown />
              </StyledButton>
              <StyledButton variant="text" sx={{ textTransform: "none" }}>
                {" "}
                <FavoriteBorderIcon />
                Favorite
              </StyledButton>
            </div>
          </div>
          <div></div>
        </div>
      </StyledAppBar>
    </div>
  );
};
export default Navbar;
 */ 

















function Navbar() {
    var ref;
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOpen = ()=>setOpen(true)
    ;
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const categoriesval = categories.slice(0, 14);
    const { AuthState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_StateContext__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z);
    const { AuthDispatcher  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_DispatchContext__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handleClose = ()=>{
        setOpen(false);
        setAnchorEl(null);
        setMyaccount(false);
    };
    const Closeevent = ()=>setOpen(true)
    ;
    const { 0: scroll , 1: setScroll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("33px");
    const { 0: myaccount , 1: setMyaccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const { 0: mainservice , 1: setMainservices  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [anchorElmenu, setAnchorElmenu] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const displaylist = Boolean(anchorEl);
    const displaymenu = Boolean(anchorElmenu);
    const { 0: uservaldata , 1: setUserValdata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleProfileClicks = (event)=>{
        setAnchorEl(event.currentTarget);
        setMyaccount(!myaccount);
    };
    const handleCloseMenu = ()=>{
        setAnchorElmenu(null);
    };
    const { 0: menu , 1: setMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const handleMenuClicks = (event)=>{
        setAnchorElmenu(event.currentTarget);
        setMenu(!menu);
    };
    const handleScroll = ()=>{
        setScroll("0%");
    };
    const handleScrollclose = ()=>{
        setScroll("33px");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.onscroll = ()=>window.pageYOffset === 0 ? handleScrollclose() : handleScroll()
        ;
    });
    const state1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.appstate
    );
    console.log("confirmation of the state ", state1);
    console.log("checking the category state", state1.categories);
    //button color is FCA301
    const UserFavorite = ()=>{
        _pages_api_client__WEBPACK_IMPORTED_MODULE_17__/* ["default"].get */ .Z.get("api/user/favorite").then((res)=>{
            const favorite = res.data;
            AuthDispatcher({
                type: "getfavorite",
                payload: favorite
            });
            getuserfavorite(favorite);
        });
    };
    const { depositMoney , storecategory , mainServices , getuserfavorite  } = (0,redux__WEBPACK_IMPORTED_MODULE_3__.bindActionCreators)(_state__WEBPACK_IMPORTED_MODULE_4__/* .actionCreators */ .c, dispatch);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (categories.length === 0) {
            _pages_api_client__WEBPACK_IMPORTED_MODULE_17__/* ["default"].get */ .Z.get("api/Categories").then((response)=>{
                setCategories(response.data);
                AuthDispatcher({
                    type: "addCategories",
                    payload: response.data
                });
                console.log("checking data", AuthDispatcher({
                    type: "addCategories",
                    payload: response.data
                }));
                storecategory(response.data);
                AuthDispatcher({
                    type: "displayCategories"
                });
            });
            console.log("the lenght wasnt fetched", AuthState.categorydata);
        }
        if (mainservice.length === 0) {
            _pages_api_client__WEBPACK_IMPORTED_MODULE_17__/* ["default"].get */ .Z.get("/api/company/categories").then((response)=>{
                mainServices(response.data);
            });
        }
        if (AuthState.isLoggedIn) {
            _pages_api_client__WEBPACK_IMPORTED_MODULE_17__/* ["default"].get */ .Z.get("api/user").then((response)=>{
                const user = response.data;
                AuthDispatcher({
                    type: "addUser",
                    payload: user
                });
                console.log(AuthState.user);
                //checking dispatch for reducer
                depositMoney(user);
            });
        }
    }, [
        categories
    ]);
    let catvalue = (ref = state1.categories) === null || ref === void 0 ? void 0 : ref.slice(0, 14);
    console.log("this are the categories", categories);
    const HandleLogout = ()=>{
        _pages_api_client__WEBPACK_IMPORTED_MODULE_17__/* ["default"].get */ .Z.get("api/logout").then((response)=>{
            const user = response.data;
            console.log("logging out");
            js_cookie__WEBPACK_IMPORTED_MODULE_18__["default"].remove("auth_token");
            AuthDispatcher({
                type: "logout"
            });
            handleClose();
        });
    };
    const imagelist = [
        "ITservice.png",
        "cleaningservice.png",
        "Eventservice.png",
        "entertainmentservices.png",
        "childcareservices.jpeg",
        "automativeservices.jpeg",
        "building&tradeservices.png",
        "legalservices.png",
        "image&beautyservices.jpeg",
        "landscaping&gardeningservices.jpeg",
        "logisticsservices.png",
        "printingservices.png",
        "photography&videoservices.png",
        "weddingeventsservices.jpeg", 
    ];
    const RenderMobile = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "navbar__nav_mobile",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                    onClick: handleMenuClicks,
                    onMouseLeave: handleCloseMenu,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MenuRounded__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Menu, {
                            id: "basic-menu",
                            anchorEl: anchorElmenu,
                            open: displaymenu,
                            onClose: handleCloseMenu,
                            MenuListProps: {
                                "aria-labelledby": "basic-button"
                            },
                            children: [
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                    children: [
                                        catvalue === null || catvalue === void 0 ? void 0 : catvalue.map((item, i)=>{
                                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignSelf: "self-end"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                        style: {
                                                            fontFamily: "serif",
                                                            fontSize: "0.9rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: imagelist[i],
                                                                style: {
                                                                    height: "20px",
                                                                    width: "20px",
                                                                    position: "relative",
                                                                    top: "4px",
                                                                    left: -10
                                                                }
                                                            }),
                                                            item === null || item === void 0 ? void 0 : item.type
                                                        ]
                                                    })
                                                })
                                            }, Math.random());
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                                            onClick: handleCloseMenu,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                style: {
                                                    fontFamily: "serif",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Other Services"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_9__/* .StyledTextField */ .tH, {
                    InputProps: {
                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.InputAdornment, {
                            position: "start",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_11___default()), {})
                        })
                    },
                    size: "small"
                })
            ]
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_9__/* .StyledAppBar */ .OR, {
        sx: {
            postion: "relative"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "navbar__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "navbar__mainwrapper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_9__/* .StyledTypography */ .fN, {
                        onClick: ()=>{
                            route.push("/");
                        },
                        sx: {
                            fontFamily: "GeoticaW01-FourOpen",
                            cursor: "pointer"
                        },
                        children: "GreatServices"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_9__/* .StyledDiv */ .lx, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_9__/* .StyledMainButton */ .iM, {
                            variant: "outlined",
                            size: "small",
                            children: [
                                "Post a Service",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    sx: {
                                        transform: "rotate(270deg)"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                            sx: {
                                color: "#ffff"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_5___default()), {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                            onClick: ()=>{
                                route.push("/my-favorite");
                            },
                            sx: {
                                color: "#ffff"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_8___default()), {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: AuthState.user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_9__/* .StyledButton */ .Sn, {
                                variant: "text",
                                sx: {
                                    textTransform: "none"
                                },
                                onClick: handleProfileClicks,
                                "aria-controls": open ? "basic-menu" : undefined,
                                "aria-haspopup": "true",
                                "aria-expanded": open ? "true" : undefined,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Avatar, {}),
                                    " \xa0 Hi ",
                                    AuthState.user.name,
                                    " ",
                                    myaccount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                sx: {
                                                    transform: "rotate(180deg)"
                                                }
                                            }),
                                            " "
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                sx: {
                                                    transform: "rotate(0deg)"
                                                }
                                            }),
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Menu, {
                                                id: "basic-menu",
                                                anchorEl: anchorEl,
                                                open: displaylist,
                                                onClose: handleClose,
                                                MenuListProps: {
                                                    "aria-labelledby": "basic-button"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                                                        onClick: ()=>{
                                                            route.push("/profile");
                                                        },
                                                        children: "Profile"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                                                        onClick: handleClose,
                                                        children: "My account"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                                                        onClick: HandleLogout,
                                                        children: "Logout"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_9__/* .StyledButton */ .Sn, {
                                        variant: "text",
                                        sx: {
                                            textTransform: "none"
                                        },
                                        onClick: handleOpen,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                                            " Account ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginModal_Loginmodal__WEBPACK_IMPORTED_MODULE_14__/* .LoginModal */ ._, {
                                        OpenModalForm: open,
                                        CloseModalForm: handleClose
                                    }),
                                    " "
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OR": () => (/* binding */ StyledAppBar),
/* harmony export */   "Sn": () => (/* binding */ StyledButton),
/* harmony export */   "fN": () => (/* binding */ StyledTypography),
/* harmony export */   "iM": () => (/* binding */ StyledMainButton),
/* harmony export */   "lx": () => (/* binding */ StyledDiv),
/* harmony export */   "tH": () => (/* binding */ StyledTextField)
/* harmony export */ });
/* unused harmony exports StyledQuote, StyledCaption, StyledSearchSubmitButton, Styledpaper, Wrapper, StyledProfile, StyledTitle */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);


const StyledTypography = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    color: "#fffff",
    fontFamily: "GeoticaW01-FourOpen",
    fontSize: "28px"
}));
const StyledQuote = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    fontSize: "40px",
    color: "#221133",
    fontFamily: "cursive"
}));
const StyledCaption = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({}));
const StyledAppBar = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AppBar)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    height: 70,
    position: "fixed",
    justifyContent: "center",
    display: "flex",
    background: "#152238",
    opacity: "100%",
    width: "100%"
}));
//BUTTON MAIN COLOR IS #F68B1E
const StyledSearchSubmitButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    "color": "white",
    "textTransform": "none",
    "height": "40px",
    "background": "#F68B1E",
    "&:hover": {
        background: "#F68B1E"
    }
}));
const StyledTextField = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    minWidth: "40%"
}));
const StyledButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    color: "#ffff",
    textTransform: "none"
}));
const Styledpaper = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    "height": 500,
    "width": 300,
    "position": "relative",
    "borderRadius": "10px",
    "&:hover": {
        elevation: "19%",
        height: 400,
        cursor: "pointer",
        boxShadow: 20
    }
}));
const Wrapper = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)("div")((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    width: "90%",
    marginLeft: "10%",
    marginTop: "4%"
}));
const StyledProfile = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)("div")((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    justifyContent: "spaced-evenly",
    alignItems: "self",
    display: "flex",
    left: "10%",
    position: "absolute",
    bottom: "40px"
}));
const StyledTitle = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)("div")((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    justifyContent: "spaced-evenly",
    alignItems: "center",
    display: "flex",
    left: "26%",
    position: "absolute",
    bottom: "40px"
}));
const StyledDiv = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)("div")((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    display: "flex",
    width: "100%",
    justifyContent: "end",
    justifyItems: "end",
    marginRight: "20%",
    alignItems: "center"
}));
const StyledMainButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.experimental_sx)({
    "border": "1px #035772 ",
    "height": "40px",
    "borderStyle": "solid",
    "borderRadius": "20px",
    "fontFamily": "Avenir Light",
    "textTransform": "none",
    "background": "#F6F9F5",
    "color": "#152238",
    "fontSize": "13px",
    "&:hover": {
        background: "#035772",
        color: "white"
    }
}));


/***/ }),

/***/ 3595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3671);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__]);
_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ addArticle)
});

// UNUSED EXPORTS: simulateHttpRequest

;// CONCATENATED MODULE: ./store/actions/actionTypes.ts
const ADD_USERS = "ADD_USERS";
const ADD_CATEGORY = "ADD_CATEGORY";

;// CONCATENATED MODULE: ./store/actions/actionCreators.ts

function addArticle(payload) {
    const action = {
        type: ADD_USERS,
        payload
    };
    return simulateHttpRequest(action);
}
function simulateHttpRequest(action) {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(action);
        }, 500);
    };
}


/***/ })

};
;