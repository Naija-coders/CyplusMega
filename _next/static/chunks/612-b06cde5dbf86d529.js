"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{806:function(e,t,n){n.d(t,{_:function(){return ne}});var o=n(5893),r=n(7294),i=n(8257),a=n(3776),s=n(5185),l=n(9688),c=n(7357),u=n(5113),d=n(3946),f=n(1248);function x(e){return function(e){return function(t){setTimeout((function(){t(e)}),500)}}({type:"ADD_USERS",payload:e})}var p=n(4051),h=n.n(p),g=n(5861),m=n(3321),y=n(7536),b=n(7720),Z=n(5311),j=n(8987),v=n(3264),w=n(525),S=(0,v.Z)(m.Z)((0,w.Z)({width:"35%",color:"white",borderRadius:"13px",textTransform:"none",boxShadow:"  0px 1px 0px 1px #888888",background:"\t#4267B2","&:hover":{background:"blue"}})),k=(0,v.Z)(m.Z)((0,w.Z)({width:"35%",color:"black",borderRadius:"13px",textTransform:"none",background:"whitesmoke",boxShadow:"  0px 1px 0px 1px #888888","&:hover":{background:"white"}})),A=(0,v.Z)(b.Z)((0,w.Z)({width:"80%",marginTop:"40px"})),C=(0,v.Z)(Z.Z)((0,w.Z)({width:"80%",marginTop:"30px",color:"white",borderRadius:"10px",textTransform:"none"})),T=(0,v.Z)(c.Z)((0,w.Z)({width:"80%",marginTop:"30px"})),F=(0,v.Z)(m.Z)((0,w.Z)({width:"80%",color:"white",marginTop:"30px",borderRadius:"13px",textTransform:"none",background:"#152238",borderShadow:" 0px 0px 0px 10px grey","&:hover":{background:"#035772"}})),O=(0,v.Z)(j.Z)((0,w.Z)({width:"80%",color:"white",marginTop:"30px",borderRadius:"13px",textTransform:"none",background:"#FFA500",borderShadow:" 5px 4px grey",boxShadow:" 5px 4px #888888"})),I=(0,v.Z)(g.Z)((0,w.Z)({marginTop:"10px",fontFamily:"serif"})),_=n(3379),L=n(1955),E=n(4853);function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function R(e,t,n,o,r,i,a){try{var s=e[i](a),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(o,r)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){U(e,t,n[t])}))}return e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(e){var t=e.saveUser,n=(e.CloseModalForm,e.onSuccess),l=(0,y.cI)(),u=l.register,d=l.handleSubmit,f=(l.formState.errors,(0,r.useContext)(a.Z).AuthState),x=(0,r.useContext)(s.Z).AuthDispatcher,p=(0,r.useState)(!1),b=p[0],Z=p[1],j=z(r.useState(!1),2),v=j[0],w=j[1],P=(0,r.useState)(!1),U=P[0],N=P[1],D=(0,r.useState)(!0),G=D[0],V=D[1],B=z(r.useState(),2),H=B[0],W=B[1],$=function(){var e,o=(e=h().mark((function e(o){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(o.email),console.log(o.password),b){e.next=6;break}console.log("please use recaptcha"),V(!0),e.next=10;break;case 6:return e.next=8,void w(!0);case 8:return e.next=10,i.Z.post("api/login",o).then((function(e){console.log("it worked hahha",e);var o=e.data;console.log("your auth token is",e.data.auth_token),L.Z.set("auth_token",e.data.auth_token),x({type:"login"}),x({type:"addUser",payload:e.data}),W(M({},H,{user:o})),console.log("article payload data",H),t(H),console.log("the user state is",f.user),n(),V(!0),w(!1)})).catch((function(e){V(!1),console.log("invalid data entered"),w(!1)}));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){R(i,o,r,a,s,"next",e)}function s(e){R(i,o,r,a,s,"throw",e)}a(void 0)}))});return function(e){return o.apply(this,arguments)}}();return console.log("finding the recaptcha ","6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG"),(0,o.jsx)(c.Z,{component:"form",onSubmit:d($),children:(0,o.jsxs)("div",{className:"flexitems__flexsignin",children:[(0,o.jsx)(g.Z,{style:{fontSize:"1.4rem",color:"#152238",fontWeight:"bold",marginTop:"30px"},children:"Log In"}),(0,o.jsx)(A,{}),!G&&(0,o.jsx)(T,{sx:{background:"red"},children:(0,o.jsx)(g.Z,{color:"white",align:"center",sx:{fontSize:"0.9rem",fontFamily:"serif"},children:"Email or password is incorrect"})}),(0,o.jsx)(C,M({type:"text",size:"small",label:"email"},u("email",{required:!0,pattern:/^\S+@\S+$/i}))),(0,o.jsx)(C,M({type:"password",size:"small"},u("password",{required:!0,maxLength:100}),{label:"password"})),(0,o.jsx)("br",{}),(0,o.jsx)(E.Z,{sitekey:"6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG",className:"flexitems__recaptchadesgin",onChange:function(){Z(!0)}}),v?(0,o.jsx)(O,{loading:v,loadingPosition:"end",endIcon:(0,o.jsx)(_.Z,{}),variant:"contained",children:"Login"}):(0,o.jsxs)(F,{type:"submit",variant:"contained",endIcon:(0,o.jsx)(_.Z,{}),children:[" ","Login"]}),(0,o.jsxs)(I,{children:["        Don't have an Account?",(0,o.jsx)(m.Z,{variant:"text",sx:{textTransform:"none"},onClick:function(){N(!0)},children:"SignUp"})]}),(0,o.jsx)(ne,{OpenModalForm:U,isSignup:!0,CloseModalForm:function(){N(!1)}})," ",(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[(0,o.jsxs)(S,{children:[" ",(0,o.jsx)("img",{src:"fb.png",alt:"facebookimage",height:20,style:{color:"white",background:"white",marginRight:"2px",position:"relative"}}),"Facebook"]}),(0,o.jsxs)(k,{children:[" ",(0,o.jsx)("img",{src:"google.png",alt:"googleimage",height:20,style:{color:"white",background:"white",marginRight:"2px",position:"relative"}}),"Google"]})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})},D=(0,v.Z)(m.Z)((0,w.Z)({width:"35%",color:"white",borderRadius:"13px",textTransform:"none",boxShadow:"  0px 1px 0px 1px #888888",background:"\t#4267B2","&:hover":{background:"blue"}})),G=(0,v.Z)(m.Z)((0,w.Z)({width:"35%",color:"black",borderRadius:"13px",textTransform:"none",background:"whitesmoke",boxShadow:"  0px 1px 0px 1px #888888","&:hover":{background:"white"}})),V=(0,v.Z)(b.Z)((0,w.Z)({width:"80%",marginTop:"40px"})),B=(0,v.Z)(Z.Z)((0,w.Z)({width:"80%",marginTop:"30px",color:"white",borderRadius:"10px",textTransform:"none"})),H=(0,v.Z)(c.Z)((0,w.Z)({width:"80%",marginTop:"30px"})),W=(0,v.Z)(m.Z)((0,w.Z)({width:"80%",color:"white",marginTop:"30px",borderRadius:"13px",textTransform:"none",background:"#152238",borderShadow:" 0px 0px 0px 10px grey","&:hover":{background:"#035772"}})),$=(0,v.Z)(j.Z)((0,w.Z)({width:"80%",color:"white",marginTop:"30px",borderRadius:"13px",textTransform:"none",background:"#FFA500",borderShadow:" 5px 4px grey",boxShadow:" 5px 4px #888888"})),q=(0,v.Z)(g.Z)((0,w.Z)({marginTop:"10px",fontFamily:"serif"}));function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Y(e,t,n,o,r,i,a){try{var s=e[i](a),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(o,r)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){J(e,t,n[t])}))}return e}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ee=function(e){var t=e.saveUser,n=(e.CloseModalForm,e.onSuccess),l=(0,y.cI)(),u=l.register,d=l.handleSubmit,f=(l.formState.errors,(0,r.useContext)(a.Z).AuthState),x=(0,r.useContext)(s.Z).AuthDispatcher,p=(0,r.useState)(!1),b=p[0],Z=p[1],j=X(r.useState(!1),2),v=j[0],w=j[1],S=(0,r.useState)(!1),k=S[0],A=S[1],C=(0,r.useState)(!0),T=C[0],F=C[1],O=X(r.useState(),2),I=O[0],P=O[1],R=function(){var e,o=(e=h().mark((function e(o){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(o.email),console.log(o.password),b){e.next=6;break}console.log("please use recaptcha"),F(!0),e.next=10;break;case 6:return e.next=8,void w(!0);case 8:return e.next=10,i.Z.post("api/login",o).then((function(e){console.log("it worked hahha",e);var o=e.data;console.log("your auth token is",e.data.auth_token),L.Z.set("auth_token",e.data.auth_token),x({type:"login"}),x({type:"addUser",payload:e.data}),P(K({},I,{user:o})),console.log("article payload data",I),t(I),console.log("the user state is",f.user),n(),F(!0),w(!1)})).catch((function(e){F(!1),console.log("invalid data entered"),w(!1)}));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){Y(i,o,r,a,s,"next",e)}function s(e){Y(i,o,r,a,s,"throw",e)}a(void 0)}))});return function(e){return o.apply(this,arguments)}}();return console.log("finding the recaptcha ","6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG"),(0,o.jsx)(c.Z,{component:"form",onSubmit:d(R),children:(0,o.jsxs)("div",{className:"flexitems__flexsignin",children:[(0,o.jsx)(g.Z,{style:{fontSize:"1.4rem",color:"#152238",fontWeight:"bold",marginTop:"30px"},children:"Log In"}),(0,o.jsx)(V,{}),!T&&(0,o.jsx)(H,{sx:{background:"red"},children:(0,o.jsx)(g.Z,{color:"white",align:"center",sx:{fontSize:"0.9rem",fontFamily:"serif"},children:"Email or password is incorrect"})}),(0,o.jsx)(B,K({type:"text",size:"small",label:"email"},u("email",{required:!0,pattern:/^\S+@\S+$/i}))),(0,o.jsx)(B,K({type:"password",size:"small"},u("password",{required:!0,maxLength:100}),{label:"password"})),(0,o.jsx)("br",{}),(0,o.jsx)(E.Z,{sitekey:"6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG",onChange:function(){Z(!0)}}),v?(0,o.jsx)($,{loading:v,loadingPosition:"end",endIcon:(0,o.jsx)(_.Z,{}),variant:"contained",children:"Login"}):(0,o.jsxs)(W,{type:"submit",variant:"contained",endIcon:(0,o.jsx)(_.Z,{}),children:[" ","Login"]}),(0,o.jsxs)(q,{children:["        Don't have an Account?",(0,o.jsx)(m.Z,{variant:"text",sx:{textTransform:"none"},onClick:function(){A(!0)},children:"SignUp"})]}),(0,o.jsx)(ne,{OpenModalForm:k,isSignup:!0,CloseModalForm:function(){A(!1)}})," ",(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[(0,o.jsxs)(D,{children:[" ",(0,o.jsx)("img",{src:"fb.png",alt:"facebookimage",height:20,style:{color:"white",background:"white",marginRight:"2px",position:"relative"}}),"Facebook"]}),(0,o.jsxs)(G,{children:[" ",(0,o.jsx)("img",{src:"google.png",alt:"googleimage",height:20,style:{color:"white",background:"white",marginRight:"2px",position:"relative"}}),"Google"]})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})},te=n(594),ne=function(e){var t=e.CloseModalForm,n=e.OpenModalForm,p=e.isSignup,h=(0,r.useContext)(a.Z).AuthState,g=(0,r.useContext)(s.Z).AuthDispatcher,m=(0,r.useState)(!1),y=(m[0],m[1],(0,f.v9)((function(e){return e.articles}),f.wU),(0,f.I0)()),b=r.useCallback((function(e){return y(x(e))}),[y]),Z=function(){i.Z.get("api/user").then((function(e){var t=e.data;g({type:"login"}),g({type:"addUser",payload:t}),console.log(h.user)}))};return(0,o.jsx)(l.Z,{open:n,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsx)(c.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:305,md:370},borderRadius:"25px",outline:0},children:(0,o.jsxs)(u.Z,{style:{borderRadius:"25px"},children:[(0,o.jsx)(d.Z,{onClick:t,sx:{position:"absolute",right:"5%"},children:(0,o.jsx)(te.Z,{})}),p?(0,o.jsx)(ee,{saveUser:b,onSuccess:Z,CloseModalForm:t}):(0,o.jsx)(N,{saveUser:b,onSuccess:Z,CloseModalForm:t})]})})})}},7612:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var o=n(5893),r=n(7294),i=n(1248),a=n(9569),s=n(6753),l=n(5817),c=n(3946),u=n(517),d=(n(7357),n(3599)),f=n(5861),x=(n(7109),n(9661)),p=n(1163),h=n(6111),g=n(2293),m=n(3321),y=n(5311),b=n(5113),Z=n(3264),j=n(525),v=(0,Z.Z)(f.Z)((0,j.Z)({color:"#fffff",fontFamily:"GeoticaW01-FourOpen",fontSize:{xs:"1.3rem",md:"28px"}})),w=(0,Z.Z)(c.Z)((0,j.Z)({display:{xs:"flex",md:"none"},alignSelf:"center"})),S=((0,Z.Z)(f.Z)((0,j.Z)({fontSize:"40px",color:"#221133",fontFamily:"cursive"})),(0,Z.Z)(f.Z)((0,j.Z)({})),(0,Z.Z)(g.Z)((0,j.Z)({height:70,position:"fixed",justifyContent:"center",display:"flex",background:"#152238",opacity:"100%",width:"100%"}))),k=((0,Z.Z)(m.Z)((0,j.Z)({color:"white",textTransform:"none",height:"40px",background:"#F68B1E","&:hover":{background:"#F68B1E"}})),(0,Z.Z)(y.Z)((0,j.Z)({minWidth:"40%"})),(0,Z.Z)(m.Z)((0,j.Z)({display:{xs:"none",md:"flex"},color:"#ffff",textTransform:"none"}))),A=((0,Z.Z)(b.Z)((0,j.Z)({height:500,width:300,position:"relative",borderRadius:"10px","&:hover":{elevation:"19%",height:400,cursor:"pointer",boxShadow:20}})),(0,Z.Z)(c.Z)((0,j.Z)({display:{xs:"flex",sm:"flex",md:"none",lg:"none",xl:"none"}}))),C=((0,Z.Z)("div")((0,j.Z)({width:"90%",marginLeft:"10%",marginTop:"4%"})),(0,Z.Z)("div")((0,j.Z)({justifyContent:"spaced-evenly",alignItems:"self",display:"flex",left:"10%",position:"absolute",bottom:"40px"})),(0,Z.Z)("div")((0,j.Z)({justifyContent:"spaced-evenly",alignItems:"center",display:"flex",left:"26%",position:"absolute",bottom:"40px"})),(0,Z.Z)("div")((0,j.Z)({display:"flex",width:"100%",justifyContent:"end",justifyItems:"end",marginRight:"20%",alignItems:"center"}))),T=(0,Z.Z)(m.Z)((0,j.Z)({display:{xs:"none",md:"solid"},border:"1px #035772 ",height:"40px",borderStyle:"solid",borderRadius:"20px",fontFamily:"Avenir Light",textTransform:"none",background:"#F6F9F5",color:"#152238",fontSize:"13px","&:hover":{background:"#035772",color:"white"}})),F=(0,Z.Z)(c.Z)((0,j.Z)({display:{xs:"none",md:"flex"}})),O=(0,Z.Z)(u.Z)((0,j.Z)({display:{xs:"none",md:"flex"}})),I=n(5503),_=(n(2761),n(5398)),L=n(9750),E=n(806),P=n(3776),R=n(5185),U=n(8257),M=n(1955);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(){var e,t=(0,r.useState)(!1),n=t[0],c=t[1],u=function(){return c(!0)},f=(0,r.useState)([]),g=f[0],m=f[1],y=(g.slice(0,14),(0,r.useContext)(P.Z).AuthState),b=(0,r.useContext)(R.Z).AuthDispatcher,Z=(0,i.I0)(),j=(0,p.useRouter)(),z=function(){c(!1),q(null),H(!1)},D=(0,r.useState)("33px"),G=(D[0],D[1]),V=(0,r.useState)(!1),B=V[0],H=V[1],W=N(r.useState(null),2),$=W[0],q=W[1],Q=(0,r.useState)([]),Y=Q[0],J=(Q[1],(0,r.useState)([])),K=J[0],X=(J[1],N(r.useState(null),2)),ee=X[0],te=(X[1],Boolean($)),ne=(Boolean(ee),(0,r.useState)()),oe=(ne[0],ne[1],(0,r.useState)(!0));oe[0],oe[1];(0,r.useEffect)((function(){window.onscroll=function(){return 0===window.pageYOffset?void G("33px"):void G("0%")}}));var re=(0,i.v9)((function(e){return e.appstate}));console.log("confirmation of the state ",re),console.log("checking the category state",re.categories);var ie=(0,a.DE)(s.c,Z),ae=ie.depositMoney,se=ie.storecategory,le=ie.mainServices,ce=(ie.getuserfavorite,ie.getallservices);(0,r.useEffect)((function(){0===g.length&&(U.Z.get("api/Categories").then((function(e){m(e.data),b({type:"addCategories",payload:e.data}),console.log("checking data",b({type:"addCategories",payload:e.data})),se(e.data),b({type:"displayCategories"})})),console.log("the lenght wasnt fetched",y.categorydata)),0===Y.length&&U.Z.get("/api/company/categories").then((function(e){le(e.data)})),0===K.length&&U.Z.get("/api/company/allservices").then((function(e){ce(e.data)})),y.isLoggedIn&&U.Z.get("api/user").then((function(e){var t=e.data;b({type:"addUser",payload:t}),console.log(y.user),ae(t)}))}),[g]);null===(e=re.categories)||void 0===e||e.slice(0,14);console.log("this are the categories",g);return(0,o.jsx)(S,{sx:{postion:"relative"},children:(0,o.jsxs)("div",{className:"navbar__container",children:[(0,o.jsx)("div",{className:"navbar__mainwrapper",children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"left",alignItems:"center"},children:[(0,o.jsx)(w,{children:(0,o.jsx)(L.Z,{sx:{color:"white"}})}),(0,o.jsx)(v,{onClick:function(){j.push("/")},sx:{fontFamily:"GeoticaW01-FourOpen",cursor:"pointer"},children:"GreatServices"})]})}),(0,o.jsxs)(C,{children:[(0,o.jsxs)(T,{variant:"outlined",size:"small",children:["Post a Service"," ",(0,o.jsx)(I.Z,{sx:{transform:"rotate(270deg)"}})]}),(0,o.jsx)(F,{sx:{color:"#ffff"},children:(0,o.jsx)(l.Z,{})}),(0,o.jsx)(F,{onClick:function(){j.push("/my-favorite")},sx:{color:"#ffff"},children:(0,o.jsx)(h.Z,{})}),(0,o.jsx)("div",{children:y.user?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(k,{variant:"text",sx:{textTransform:"none"},onClick:function(e){q(e.currentTarget),H(!B)},"aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,children:[(0,o.jsx)(x.Z,{})," \xa0 Hi ",y.user.name," ",B?(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)(I.Z,{sx:{transform:"rotate(180deg)"}})," "]}):(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)(I.Z,{sx:{transform:"rotate(0deg)"}})," ",(0,o.jsxs)(O,{id:"basic-menu",anchorEl:$,open:te,onClose:z,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,o.jsx)(d.Z,{onClick:function(){j.push("/profile")},children:"Profile"}),(0,o.jsx)(d.Z,{onClick:z,children:"My account"}),(0,o.jsx)(d.Z,{onClick:function(){U.Z.get("api/logout").then((function(e){e.data;console.log("logging out"),M.Z.remove("auth_token"),b({type:"logout"}),z()}))},children:"Logout"})]})]})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"center",bottom:"20px",position:"absolute",right:0},children:[(0,o.jsx)(A,{sx:{color:"#ffff"},children:(0,o.jsx)(h.Z,{sx:{fontSize:"1.3rem"}})}),(0,o.jsx)(A,{sx:{color:"#ffff"},children:(0,o.jsx)(l.Z,{sx:{fontSize:"1.3rem"}})}),(0,o.jsx)(A,{sx:{color:"#ffff"},onClick:u,children:(0,o.jsx)(x.Z,{sx:{height:"1.3rem",width:"1.3rem"}})})]})]}):(0,o.jsxs)("div",{children:[(0,o.jsxs)(k,{variant:"text",sx:{textTransform:"none"},onClick:u,children:[(0,o.jsx)(_.Z,{})," Account ",(0,o.jsx)(I.Z,{})]}),(0,o.jsx)(E._,{OpenModalForm:n,CloseModalForm:z})," ",(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"center",bottom:"20px",position:"absolute",right:0},children:[(0,o.jsx)(A,{sx:{color:"#ffff"},children:(0,o.jsx)(h.Z,{sx:{fontSize:"1.3rem"}})}),(0,o.jsx)(A,{sx:{color:"#ffff"},children:(0,o.jsx)(l.Z,{sx:{fontSize:"1.3rem"}})}),(0,o.jsx)(A,{sx:{color:"#ffff"},onClick:u,children:(0,o.jsx)(_.Z,{sx:{fontSize:"1.3rem"}})})]})]})})]})]})})}function G(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer__stripbackground",children:[(0,o.jsx)("p",{children:"facebook"}),(0,o.jsx)("p",{children:"instagram"}),(0,o.jsx)("p",{children:"pinterest"}),(0,o.jsx)("p",{children:"twitter"})]}),(0,o.jsx)("div",{className:"footer__footeritem",children:(0,o.jsx)("h6",{children:"hi"})})]})}var V=function(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),t,(0,o.jsx)(G,{})]})}}}]);