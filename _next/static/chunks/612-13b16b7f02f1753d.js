"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{806:function(e,t,n){n.d(t,{_:function(){return ne}});var o=n(5893),r=n(7294),i=n(8257),a=n(3776),s=n(5185),l=n(9688),c=n(7357),u=n(5113),d=n(3946),f=n(1248);function p(e){return function(e){return function(t){setTimeout((function(){t(e)}),500)}}({type:"ADD_USERS",payload:e})}var h=n(4051),x=n.n(h),g=n(5861),m=n(3321),y=n(7536),b=n(7720),Z=n(8271),v=n(8987),j=n(3264),w=n(525),S=(0,j.Z)(m.Z)((0,w.Z)({width:"35%",color:"white",borderRadius:"13px",textTransform:"none",boxShadow:"  0px 1px 0px 1px #888888",background:"\t#4267B2","&:hover":{background:"blue"}})),k=(0,j.Z)(m.Z)((0,w.Z)({width:"35%",color:"black",borderRadius:"13px",textTransform:"none",background:"whitesmoke",boxShadow:"  0px 1px 0px 1px #888888","&:hover":{background:"white"}})),C=(0,j.Z)(b.Z)((0,w.Z)({width:"80%",marginTop:"40px"})),A=(0,j.Z)(Z.Z)((0,w.Z)({width:"80%",marginTop:"30px",color:"white",borderRadius:"10px",textTransform:"none"})),T=(0,j.Z)(c.Z)((0,w.Z)({width:"80%",marginTop:"30px"})),O=(0,j.Z)(m.Z)((0,w.Z)({width:"80%",color:"white",marginTop:"30px",borderRadius:"13px",textTransform:"none",background:"#152238",borderShadow:" 0px 0px 0px 10px grey","&:hover":{background:"#035772"}})),F=(0,j.Z)(v.Z)((0,w.Z)({width:"80%",color:"white",marginTop:"30px",borderRadius:"13px",textTransform:"none",background:"#FFA500",borderShadow:" 5px 4px grey",boxShadow:" 5px 4px #888888"})),I=(0,j.Z)(g.Z)((0,w.Z)({marginTop:"10px",fontFamily:"serif"})),_=n(3379),L=n(1955),P=n(4853);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function R(e,t,n,o,r,i,a){try{var s=e[i](a),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(o,r)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){U(e,t,n[t])}))}return e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=function(e){var t=e.saveUser,n=(e.CloseModalForm,e.onSuccess),l=(0,y.cI)(),u=l.register,d=l.handleSubmit,f=(l.formState.errors,(0,r.useContext)(a.Z).AuthState),p=(0,r.useContext)(s.Z).AuthDispatcher,h=(0,r.useState)(!1),b=h[0],Z=h[1],v=N(r.useState(!1),2),j=v[0],w=v[1],E=(0,r.useState)(!1),U=E[0],z=E[1],D=(0,r.useState)(!0),G=D[0],V=D[1],B=N(r.useState(),2),$=B[0],H=B[1],W=function(){var e,o=(e=x().mark((function e(o){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(o.email),console.log(o.password),b){e.next=6;break}console.log("please use recaptcha"),V(!0),e.next=10;break;case 6:return e.next=8,void w(!0);case 8:return e.next=10,i.Z.post("api/login",o).then((function(e){console.log("it worked hahha",e);var o=e.data;console.log("your auth token is",e.data.auth_token),L.Z.set("auth_token",e.data.auth_token),p({type:"login"}),p({type:"addUser",payload:e.data}),H(M({},$,{user:o})),console.log("article payload data",$),t($),console.log("the user state is",f.user),n(),V(!0),w(!1)})).catch((function(e){V(!1),console.log("invalid data entered"),w(!1)}));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){R(i,o,r,a,s,"next",e)}function s(e){R(i,o,r,a,s,"throw",e)}a(void 0)}))});return function(e){return o.apply(this,arguments)}}();return console.log("finding the recaptcha ","6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG"),(0,o.jsx)(c.Z,{component:"form",onSubmit:d(W),children:(0,o.jsxs)("div",{className:"flexitems__flexsignin",children:[(0,o.jsx)(g.Z,{style:{fontSize:"1.4rem",color:"#152238",fontWeight:"bold",marginTop:"30px"},children:"Log In"}),(0,o.jsx)(C,{}),!G&&(0,o.jsx)(T,{sx:{background:"red"},children:(0,o.jsx)(g.Z,{color:"white",align:"center",sx:{fontSize:"0.9rem",fontFamily:"serif"},children:"Email or password is incorrect"})}),(0,o.jsx)(A,M({type:"text",size:"small",label:"email"},u("email",{required:!0,pattern:/^\S+@\S+$/i}))),(0,o.jsx)(A,M({type:"password",size:"small"},u("password",{required:!0,maxLength:100}),{label:"password"})),(0,o.jsx)("br",{}),(0,o.jsx)(P.Z,{sitekey:"6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG",className:"flexitems__recaptchadesgin",onChange:function(){Z(!0)}}),j?(0,o.jsx)(F,{loading:j,loadingPosition:"end",endIcon:(0,o.jsx)(_.Z,{}),variant:"contained",children:"Login"}):(0,o.jsxs)(O,{type:"submit",variant:"contained",endIcon:(0,o.jsx)(_.Z,{}),children:[" ","Login"]}),(0,o.jsxs)(I,{children:["        Don't have an Account?",(0,o.jsx)(m.Z,{variant:"text",sx:{textTransform:"none"},onClick:function(){z(!0)},children:"SignUp"})]}),(0,o.jsx)(ne,{OpenModalForm:U,isSignup:!0,CloseModalForm:function(){z(!1)}})," ",(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[(0,o.jsxs)(S,{children:[" ",(0,o.jsx)("img",{src:"fb.png",alt:"facebookimage",height:20,style:{color:"white",background:"white",marginRight:"2px",position:"relative"}}),"Facebook"]}),(0,o.jsxs)(k,{children:[" ",(0,o.jsx)("img",{src:"google.png",alt:"googleimage",height:20,style:{color:"white",background:"white",marginRight:"2px",position:"relative"}}),"Google"]})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})},D=(0,j.Z)(m.Z)((0,w.Z)({width:"35%",color:"white",borderRadius:"13px",textTransform:"none",boxShadow:"  0px 1px 0px 1px #888888",background:"\t#4267B2","&:hover":{background:"blue"}})),G=(0,j.Z)(m.Z)((0,w.Z)({width:"35%",color:"black",borderRadius:"13px",textTransform:"none",background:"whitesmoke",boxShadow:"  0px 1px 0px 1px #888888","&:hover":{background:"white"}})),V=(0,j.Z)(b.Z)((0,w.Z)({width:"80%",marginTop:"40px"})),B=(0,j.Z)(Z.Z)((0,w.Z)({width:"80%",marginTop:"30px",color:"white",borderRadius:"10px",textTransform:"none"})),$=(0,j.Z)(c.Z)((0,w.Z)({width:"80%",marginTop:"30px"})),H=(0,j.Z)(m.Z)((0,w.Z)({width:"80%",color:"white",marginTop:"30px",borderRadius:"13px",textTransform:"none",background:"#152238",borderShadow:" 0px 0px 0px 10px grey","&:hover":{background:"#035772"}})),W=(0,j.Z)(v.Z)((0,w.Z)({width:"80%",color:"white",marginTop:"30px",borderRadius:"13px",textTransform:"none",background:"#FFA500",borderShadow:" 5px 4px grey",boxShadow:" 5px 4px #888888"})),q=(0,j.Z)(g.Z)((0,w.Z)({marginTop:"10px",fontFamily:"serif"}));function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Y(e,t,n,o,r,i,a){try{var s=e[i](a),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(o,r)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){J(e,t,n[t])}))}return e}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ee=function(e){var t=e.saveUser,n=(e.CloseModalForm,e.onSuccess),l=(0,y.cI)(),u=l.register,d=l.handleSubmit,f=(l.formState.errors,(0,r.useContext)(a.Z).AuthState),p=(0,r.useContext)(s.Z).AuthDispatcher,h=(0,r.useState)(!1),b=h[0],Z=h[1],v=X(r.useState(!1),2),j=v[0],w=v[1],S=(0,r.useState)(!1),k=S[0],C=S[1],A=(0,r.useState)(!0),T=A[0],O=A[1],F=X(r.useState(),2),I=F[0],E=F[1],R=function(){var e,o=(e=x().mark((function e(o){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(o.email),console.log(o.password),b){e.next=6;break}console.log("please use recaptcha"),O(!0),e.next=10;break;case 6:return e.next=8,void w(!0);case 8:return e.next=10,i.Z.post("api/login",o).then((function(e){console.log("it worked hahha",e);var o=e.data;console.log("your auth token is",e.data.auth_token),L.Z.set("auth_token",e.data.auth_token),p({type:"login"}),p({type:"addUser",payload:e.data}),E(K({},I,{user:o})),console.log("article payload data",I),t(I),console.log("the user state is",f.user),n(),O(!0),w(!1)})).catch((function(e){O(!1),console.log("invalid data entered"),w(!1)}));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){Y(i,o,r,a,s,"next",e)}function s(e){Y(i,o,r,a,s,"throw",e)}a(void 0)}))});return function(e){return o.apply(this,arguments)}}();return console.log("finding the recaptcha ","6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG"),(0,o.jsx)(c.Z,{component:"form",onSubmit:d(R),children:(0,o.jsxs)("div",{className:"flexitems__flexsignin",children:[(0,o.jsx)(g.Z,{style:{fontSize:"1.4rem",color:"#152238",fontWeight:"bold",marginTop:"30px"},children:"Log In"}),(0,o.jsx)(V,{}),!T&&(0,o.jsx)($,{sx:{background:"red"},children:(0,o.jsx)(g.Z,{color:"white",align:"center",sx:{fontSize:"0.9rem",fontFamily:"serif"},children:"Email or password is incorrect"})}),(0,o.jsx)(B,K({type:"text",size:"small",label:"email"},u("email",{required:!0,pattern:/^\S+@\S+$/i}))),(0,o.jsx)(B,K({type:"password",size:"small"},u("password",{required:!0,maxLength:100}),{label:"password"})),(0,o.jsx)("br",{}),(0,o.jsx)(P.Z,{sitekey:"6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG",onChange:function(){Z(!0)}}),j?(0,o.jsx)(W,{loading:j,loadingPosition:"end",endIcon:(0,o.jsx)(_.Z,{}),variant:"contained",children:"Login"}):(0,o.jsxs)(H,{type:"submit",variant:"contained",endIcon:(0,o.jsx)(_.Z,{}),children:[" ","Login"]}),(0,o.jsxs)(q,{children:["        Don't have an Account?",(0,o.jsx)(m.Z,{variant:"text",sx:{textTransform:"none"},onClick:function(){C(!0)},children:"SignUp"})]}),(0,o.jsx)(ne,{OpenModalForm:k,isSignup:!0,CloseModalForm:function(){C(!1)}})," ",(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[(0,o.jsxs)(D,{children:[" ",(0,o.jsx)("img",{src:"fb.png",alt:"facebookimage",height:20,style:{color:"white",background:"white",marginRight:"2px",position:"relative"}}),"Facebook"]}),(0,o.jsxs)(G,{children:[" ",(0,o.jsx)("img",{src:"google.png",alt:"googleimage",height:20,style:{color:"white",background:"white",marginRight:"2px",position:"relative"}}),"Google"]})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})},te=n(594),ne=function(e){var t=e.CloseModalForm,n=e.OpenModalForm,h=e.isSignup,x=(0,r.useContext)(a.Z).AuthState,g=(0,r.useContext)(s.Z).AuthDispatcher,m=(0,r.useState)(!1),y=(m[0],m[1],(0,f.v9)((function(e){return e.articles}),f.wU),(0,f.I0)()),b=r.useCallback((function(e){return y(p(e))}),[y]),Z=function(){i.Z.get("api/user").then((function(e){var t=e.data;g({type:"login"}),g({type:"addUser",payload:t}),console.log(x.user)}))};return(0,o.jsx)(l.Z,{open:n,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsx)(c.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:305,md:370},borderRadius:"25px",outline:0},children:(0,o.jsxs)(u.Z,{style:{borderRadius:"25px"},children:[(0,o.jsx)(d.Z,{onClick:t,sx:{position:"absolute",right:"5%"},children:(0,o.jsx)(te.Z,{})}),h?(0,o.jsx)(ee,{saveUser:b,onSuccess:Z,CloseModalForm:t}):(0,o.jsx)(z,{saveUser:b,onSuccess:Z,CloseModalForm:t})]})})})}},7612:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var o=n(5893),r=n(5125),i=n(7294),a=n(1248),s=n(5217),l=n(6753),c=(n(8161),n(5152)),u=n(5817),d=n(9005),f=n(3946),p=n(517),h=(n(7357),n(3599)),x=n(5861),g=(n(7109),n(9661)),m=n(1163),y=n(6111),b=n(2293),Z=n(3321),v=n(8271),j=n(5113),w=n(3264),S=n(525),k=(0,w.Z)(x.Z)((0,S.Z)({color:"#fffff",fontFamily:"GeoticaW01-FourOpen",fontSize:{xs:"1.3rem",md:"28px"}})),C=(0,w.Z)(f.Z)((0,S.Z)({display:{xs:"flex",md:"none"},alignSelf:"center"})),A=((0,w.Z)(x.Z)((0,S.Z)({fontSize:"40px",color:"#221133",fontFamily:"cursive"})),(0,w.Z)(x.Z)((0,S.Z)({})),(0,w.Z)(b.Z)((0,S.Z)({height:70,position:"fixed",justifyContent:"center",display:"flex",background:"#152238",opacity:"100%",width:"100%"}))),T=((0,w.Z)(Z.Z)((0,S.Z)({color:"white",textTransform:"none",height:"40px",background:"#F68B1E","&:hover":{background:"#F68B1E"}})),(0,w.Z)(v.Z)((0,S.Z)({minWidth:"40%"})),(0,w.Z)(Z.Z)((0,S.Z)({display:{xs:"none",md:"flex"},color:"#ffff",textTransform:"none"}))),O=((0,w.Z)(j.Z)((0,S.Z)({height:500,width:300,position:"relative",borderRadius:"10px","&:hover":{elevation:"19%",height:400,cursor:"pointer",boxShadow:20}})),(0,w.Z)(f.Z)((0,S.Z)({display:{xs:"flex",sm:"flex",md:"none",lg:"none",xl:"none"}}))),F=((0,w.Z)("div")((0,S.Z)({width:"90%",marginLeft:"10%",marginTop:"4%"})),(0,w.Z)("div")((0,S.Z)({justifyContent:"spaced-evenly",alignItems:"self",display:"flex",left:"10%",position:"absolute",bottom:"40px"})),(0,w.Z)("div")((0,S.Z)({justifyContent:"spaced-evenly",alignItems:"center",display:"flex",left:"26%",position:"absolute",bottom:"40px"})),(0,w.Z)("div")((0,S.Z)({display:"flex",width:"100%",justifyContent:"end",justifyItems:"end",marginRight:"20%",alignItems:"center"}))),I=(0,w.Z)(Z.Z)((0,S.Z)({display:{xs:"none",md:"solid"},border:"1px #035772 ",height:"40px",borderStyle:"solid",borderRadius:"20px",fontFamily:"Avenir Light",textTransform:"none",background:"#F6F9F5",color:"#152238",fontSize:"13px","&:hover":{background:"#035772",color:"white"}})),_=(0,w.Z)(f.Z)((0,S.Z)({display:{xs:"none",md:"flex"}})),L=(0,w.Z)(p.Z)((0,S.Z)({display:{xs:"none",md:"flex"}})),P=n(5503),E=(n(2761),n(5398)),R=n(9750),U=n(806),M=n(3776),N=n(5185),z=n(8257),D=n(1955);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $=(0,c.default)((function(){return n.e(595).then(n.bind(n,3595))}),{loadableGenerated:{webpack:function(){return[3595]}},ssr:!1});function H(){var e,t=(0,i.useState)(!1),n=t[0],c=t[1],f=function(){return c(!0)},p=(0,i.useState)([]),x=p[0],b=p[1],Z=(0,i.useContext)(M.Z).AuthState,v=(0,i.useContext)(N.Z).AuthDispatcher,j=(0,a.I0)(),w=((0,r.$)().t,(0,m.useRouter)()),S=function(){c(!1),K(null),Q(!1)},G=(0,i.useState)("33px"),H=(G[0],G[1]),W=(0,i.useState)(!1),q=W[0],Q=W[1],Y=B(i.useState(null),2),J=Y[0],K=Y[1],X=(0,i.useState)([]),ee=X[0],te=(X[1],(0,i.useState)([])),ne=te[0],oe=(te[1],B(i.useState(null),2)),re=oe[0],ie=(oe[1],Boolean(J)),ae=(Boolean(re),(0,i.useState)()),se=(ae[0],ae[1],(0,i.useState)(!0));se[0],se[1];(0,i.useEffect)((function(){window.onscroll=function(){return 0===window.pageYOffset?void H("33px"):void H("0%")}}));var le=(0,a.v9)((function(e){return e.appstate}));console.log("confirmation of the state ",le),console.log("checking the category state",le.categories);var ce=B(i.useState({top:!1,left:!1,bottom:!1,right:!1}),2),ue=ce[0],de=ce[1],fe=(0,s.DE)(l.c,j),pe=fe.depositMoney,he=fe.storecategory,xe=fe.mainServices,ge=(fe.getuserfavorite,fe.getallservices);(0,i.useEffect)((function(){0===x.length&&(z.Z.get("api/Categories").then((function(e){b(e.data),v({type:"addCategories",payload:e.data}),console.log("checking data",v({type:"addCategories",payload:e.data})),he(e.data),v({type:"displayCategories"})})),console.log("the lenght wasnt fetched",Z.categorydata)),0===ee.length&&z.Z.get("/api/company/categories").then((function(e){xe(e.data)})),0===ne.length&&z.Z.get("/api/company/allservices").then((function(e){ge(e.data)})),Z.isLoggedIn&&z.Z.get("api/user").then((function(e){var t=e.data;v({type:"addUser",payload:t}),console.log(Z.user),pe(t)}))}),[x]);null===(e=le.categories)||void 0===e||e.slice(0,14);console.log("this are the categories",x);var me=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&de(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){V(e,t,n[t])}))}return e}({},le,V({},e,t)))}};return(0,o.jsx)(A,{sx:{postion:"relative"},children:(0,o.jsxs)("div",{className:"navbar__container",children:[(0,o.jsx)("div",{className:"navbar__mainwrapper",children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"left",alignItems:"center"},children:[(0,o.jsx)(C,{onClick:me("left",!0),children:(0,o.jsx)(R.Z,{sx:{color:"white"}})}),(0,o.jsx)(d.Z,{anchor:"left",open:ue.left,onClose:me("left",!1),onOpen:me("left",!0),children:(0,o.jsx)("div",{children:"coming soon"})}),(0,o.jsx)(k,{onClick:function(){w.push("/")},sx:{fontFamily:"GeoticaW01-FourOpen",cursor:"pointer"},children:"GreatServices"})]})}),(0,o.jsxs)(F,{children:[(0,o.jsxs)(I,{variant:"outlined",size:"small",children:["Post a Service"," ",(0,o.jsx)(P.Z,{sx:{transform:"rotate(270deg)"}})]}),(0,o.jsx)(_,{sx:{color:"#ffff"},children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(_,{onClick:function(){w.push("/my-favorite")},sx:{color:"#ffff"},children:(0,o.jsx)(y.Z,{})}),(0,o.jsx)("div",{children:Z.user?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(T,{variant:"text",sx:{textTransform:"none"},onClick:function(e){K(e.currentTarget),Q(!q)},"aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,children:[(0,o.jsx)(g.Z,{})," \xa0 Hi ",Z.user.name," ",q?(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)(P.Z,{sx:{transform:"rotate(180deg)"}})," "]}):(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)(P.Z,{sx:{transform:"rotate(0deg)"}})," ",(0,o.jsxs)(L,{id:"basic-menu",anchorEl:J,open:ie,onClose:S,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,o.jsx)(h.Z,{onClick:function(){w.push("/profile")},children:"Profile"}),(0,o.jsx)(h.Z,{onClick:S,children:"My account"}),(0,o.jsx)(h.Z,{onClick:function(){z.Z.get("api/logout").then((function(e){e.data;console.log("logging out"),D.Z.remove("auth_token"),v({type:"logout"}),S()}))},children:"Logout"})]})]})]}),(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",bottom:"20px",position:"absolute",right:0},children:(0,o.jsx)(O,{sx:{color:"#ffff"},onClick:f,children:(0,o.jsx)(g.Z,{sx:{height:"1.3rem",width:"1.3rem"}})})})]}):(0,o.jsxs)("div",{children:[(0,o.jsxs)(T,{variant:"text",sx:{textTransform:"none"},onClick:f,children:[(0,o.jsx)(E.Z,{})," Account ",(0,o.jsx)(P.Z,{})]}),(0,o.jsx)(U._,{OpenModalForm:n,CloseModalForm:S})," ",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",bottom:"20px",position:"absolute",right:0},children:(0,o.jsx)(O,{sx:{color:"#ffff"},onClick:f,children:(0,o.jsx)(E.Z,{sx:{fontSize:"1.3rem"}})})})]})}),(0,o.jsx)($,{})]})]})})}function W(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer__stripbackground",children:[(0,o.jsx)("p",{children:"facebook"}),(0,o.jsx)("p",{children:"instagram"}),(0,o.jsx)("p",{children:"pinterest"}),(0,o.jsx)("p",{children:"twitter"})]}),(0,o.jsx)("div",{className:"footer__footeritem",children:(0,o.jsx)("h6",{children:"hi"})})]})}var q=function(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(H,{}),t,(0,o.jsx)(W,{})]})}}}]);