(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{5942:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return r(3288)}])},3288:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return He}});var o=r(5893),n=r(7294),l=r(5659),i=r(5113),a=r(6753),s=r(1248),c=r(5217),d=r(3776),u=r(5185),f=r(3946),p=r(1811),h=r(6111),b=r(5861),m=r(9661),v=r(7720),x=r(3321),g=r(3264),w=r(525),y=r(3366),Z=r(7462),S=(r(9864),r(6010)),j=r(4780),C=r(948),M=r(1657),B=r(2734),R=r(7144);let T;function W(){if(T)return T;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),T="reverse",e.scrollLeft>0?T="default":(e.scrollLeft=1,0===e.scrollLeft&&(T="negative")),document.body.removeChild(e),T}function k(e,t){const r=e.scrollLeft;if("rtl"!==t)return r;switch(W()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function E(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var N=r(5340);const P=["onChange"],A={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var D=r(8169),z=(0,D.Z)((0,o.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),I=(0,D.Z)((0,o.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),L=r(2607),F=r(5677),O=r(1588);function H(e){return(0,F.Z)("MuiTabScrollButton",e)}var _,X,$=(0,O.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);const Y=["className","direction","orientation","disabled"],q=(0,C.ZP)(L.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})((({ownerState:e})=>(0,Z.Z)({width:40,flexShrink:0,opacity:.8,[`&.${$.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})));var V=n.forwardRef((function(e,t){const r=(0,M.Z)({props:e,name:"MuiTabScrollButton"}),{className:n,direction:l}=r,i=(0,y.Z)(r,Y),a="rtl"===(0,B.Z)().direction,s=(0,Z.Z)({isRtl:a},r),c=(e=>{const{classes:t,orientation:r,disabled:o}=e,n={root:["root",r,o&&"disabled"]};return(0,j.Z)(n,H,t)})(s);return(0,o.jsx)(q,(0,Z.Z)({component:"div",className:(0,S.Z)(c.root,n),ref:t,role:null,ownerState:s,tabIndex:null},i,{children:"left"===l?_||(_=(0,o.jsx)(z,{fontSize:"small"})):X||(X=(0,o.jsx)(I,{fontSize:"small"}))}))})),K=r(2068);function U(e){return(0,F.Z)("MuiTabs",e)}var G=(0,O.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),J=r(8038);const Q=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],ee=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,te=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,re=(e,t,r)=>{let o=!1,n=r(e,t);for(;n;){if(n===e.firstChild){if(o)return;o=!0}const t=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!t)return void n.focus();n=r(e,n)}},oe=(0,C.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${G.scrollButtons}`]:t.scrollButtons},{[`& .${G.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,Z.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${G.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),ne=(0,C.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,Z.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),le=(0,C.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})((({ownerState:e})=>(0,Z.Z)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),ie=(0,C.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,Z.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),ae=(0,C.ZP)((function(e){const{onChange:t}=e,r=(0,y.Z)(e,P),l=n.useRef(),i=n.useRef(null),a=()=>{l.current=i.current.offsetHeight-i.current.clientHeight};return n.useEffect((()=>{const e=(0,R.Z)((()=>{const e=l.current;a(),e!==l.current&&t(l.current)})),r=(0,N.Z)(i.current);return r.addEventListener("resize",e),()=>{e.clear(),r.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{a(),t(l.current)}),[t]),(0,o.jsx)("div",(0,Z.Z)({style:A,ref:i},r))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),se={};var ce=n.forwardRef((function(e,t){const r=(0,M.Z)({props:e,name:"MuiTabs"}),l=(0,B.Z)(),i="rtl"===l.direction,{"aria-label":a,"aria-labelledby":s,action:c,centered:d=!1,children:u,className:f,component:p="div",allowScrollButtonsMobile:h=!1,indicatorColor:b="primary",onChange:m,orientation:v="horizontal",ScrollButtonComponent:x=V,scrollButtons:g="auto",selectionFollowsFocus:w,TabIndicatorProps:C={},TabScrollButtonProps:T={},textColor:P="primary",value:A,variant:D="standard",visibleScrollbar:z=!1}=r,I=(0,y.Z)(r,Q),L="scrollable"===D,F="vertical"===v,O=F?"scrollTop":"scrollLeft",H=F?"top":"left",_=F?"bottom":"right",X=F?"clientHeight":"clientWidth",$=F?"height":"width",Y=(0,Z.Z)({},r,{component:p,allowScrollButtonsMobile:h,indicatorColor:b,orientation:v,vertical:F,scrollButtons:g,textColor:P,variant:D,visibleScrollbar:z,fixed:!L,hideScrollbar:L&&!z,scrollableX:L&&!F,scrollableY:L&&F,centered:d&&!L,scrollButtonsHideMobile:!h}),q=(e=>{const{vertical:t,fixed:r,hideScrollbar:o,scrollableX:n,scrollableY:l,centered:i,scrollButtonsHideMobile:a,classes:s}=e,c={root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",o&&"hideScrollbar",n&&"scrollableX",l&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[o&&"hideScrollbar"]};return(0,j.Z)(c,U,s)})(Y);const[G,ce]=n.useState(!1),[de,ue]=n.useState(se),[fe,pe]=n.useState({start:!1,end:!1}),[he,be]=n.useState({overflow:"hidden",scrollbarWidth:0}),me=new Map,ve=n.useRef(null),xe=n.useRef(null),ge=()=>{const e=ve.current;let t,r;if(e){const r=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:k(e,l.direction),scrollWidth:e.scrollWidth,top:r.top,bottom:r.bottom,left:r.left,right:r.right}}if(e&&!1!==A){const e=xe.current.children;if(e.length>0){const t=e[me.get(A)];0,r=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:r}},we=(0,K.Z)((()=>{const{tabsMeta:e,tabMeta:t}=ge();let r,o=0;if(F)r="top",t&&e&&(o=t.top-e.top+e.scrollTop);else if(r=i?"right":"left",t&&e){const n=i?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;o=(i?-1:1)*(t[r]-e[r]+n)}const n={[r]:o,[$]:t?t[$]:0};if(isNaN(de[r])||isNaN(de[$]))ue(n);else{const e=Math.abs(de[r]-n[r]),t=Math.abs(de[$]-n[$]);(e>=1||t>=1)&&ue(n)}})),ye=(e,{animation:t=!0}={})=>{t?function(e,t,r,o={},n=(()=>{})){const{ease:l=E,duration:i=300}=o;let a=null;const s=t[e];let c=!1;const d=()=>{c=!0},u=o=>{if(c)return void n(new Error("Animation cancelled"));null===a&&(a=o);const d=Math.min(1,(o-a)/i);t[e]=l(d)*(r-s)+s,d>=1?requestAnimationFrame((()=>{n(null)})):requestAnimationFrame(u)};s===r?n(new Error("Element already at target position")):requestAnimationFrame(u)}(O,ve.current,e,{duration:l.transitions.duration.standard}):ve.current[O]=e},Ze=e=>{let t=ve.current[O];F?t+=e:(t+=e*(i?-1:1),t*=i&&"reverse"===W()?-1:1),ye(t)},Se=()=>{const e=ve.current[X];let t=0;const r=Array.from(xe.current.children);for(let o=0;o<r.length;o+=1){const n=r[o];if(t+n[X]>e)break;t+=n[X]}return t},je=()=>{Ze(-1*Se())},Ce=()=>{Ze(Se())},Me=n.useCallback((e=>{be({overflow:null,scrollbarWidth:e})}),[]),Be=(0,K.Z)((e=>{const{tabsMeta:t,tabMeta:r}=ge();if(r&&t)if(r[H]<t[H]){const o=t[O]+(r[H]-t[H]);ye(o,{animation:e})}else if(r[_]>t[_]){const o=t[O]+(r[_]-t[_]);ye(o,{animation:e})}})),Re=(0,K.Z)((()=>{if(L&&!1!==g){const{scrollTop:e,scrollHeight:t,clientHeight:r,scrollWidth:o,clientWidth:n}=ve.current;let a,s;if(F)a=e>1,s=e<t-r-1;else{const e=k(ve.current,l.direction);a=i?e<o-n-1:e>1,s=i?e>1:e<o-n-1}a===fe.start&&s===fe.end||pe({start:a,end:s})}}));n.useEffect((()=>{const e=(0,R.Z)((()=>{we(),Re()})),t=(0,N.Z)(ve.current);let r;return t.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(r=new ResizeObserver(e),Array.from(xe.current.children).forEach((e=>{r.observe(e)}))),()=>{e.clear(),t.removeEventListener("resize",e),r&&r.disconnect()}}),[we,Re]);const Te=n.useMemo((()=>(0,R.Z)((()=>{Re()}))),[Re]);n.useEffect((()=>()=>{Te.clear()}),[Te]),n.useEffect((()=>{ce(!0)}),[]),n.useEffect((()=>{we(),Re()})),n.useEffect((()=>{Be(se!==de)}),[Be,de]),n.useImperativeHandle(c,(()=>({updateIndicator:we,updateScrollButtons:Re})),[we,Re]);const We=(0,o.jsx)(ie,(0,Z.Z)({},C,{className:(0,S.Z)(q.indicator,C.className),ownerState:Y,style:(0,Z.Z)({},de,C.style)}));let ke=0;const Ee=n.Children.map(u,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?ke:e.props.value;me.set(t,ke);const r=t===A;return ke+=1,n.cloneElement(e,(0,Z.Z)({fullWidth:"fullWidth"===D,indicator:r&&!G&&We,selected:r,selectionFollowsFocus:w,onChange:m,textColor:P,value:t},1!==ke||!1!==A||e.props.tabIndex?{}:{tabIndex:0}))})),Ne=(()=>{const e={};e.scrollbarSizeListener=L?(0,o.jsx)(ae,{onChange:Me,className:(0,S.Z)(q.scrollableX,q.hideScrollbar)}):null;const t=fe.start||fe.end,r=L&&("auto"===g&&t||!0===g);return e.scrollButtonStart=r?(0,o.jsx)(x,(0,Z.Z)({orientation:v,direction:i?"right":"left",onClick:je,disabled:!fe.start},T,{className:(0,S.Z)(q.scrollButtons,T.className)})):null,e.scrollButtonEnd=r?(0,o.jsx)(x,(0,Z.Z)({orientation:v,direction:i?"left":"right",onClick:Ce,disabled:!fe.end},T,{className:(0,S.Z)(q.scrollButtons,T.className)})):null,e})();return(0,o.jsxs)(oe,(0,Z.Z)({className:(0,S.Z)(q.root,f),ownerState:Y,ref:t,as:p},I,{children:[Ne.scrollButtonStart,Ne.scrollbarSizeListener,(0,o.jsxs)(ne,{className:q.scroller,ownerState:Y,style:{overflow:he.overflow,[F?"margin"+(i?"Left":"Right"):"marginBottom"]:z?void 0:-he.scrollbarWidth},ref:ve,onScroll:Te,children:[(0,o.jsx)(le,{"aria-label":a,"aria-labelledby":s,"aria-orientation":"vertical"===v?"vertical":null,className:q.flexContainer,ownerState:Y,onKeyDown:e=>{const t=xe.current,r=(0,J.Z)(t).activeElement;if("tab"!==r.getAttribute("role"))return;let o="horizontal"===v?"ArrowLeft":"ArrowUp",n="horizontal"===v?"ArrowRight":"ArrowDown";switch("horizontal"===v&&i&&(o="ArrowRight",n="ArrowLeft"),e.key){case o:e.preventDefault(),re(t,r,te);break;case n:e.preventDefault(),re(t,r,ee);break;case"Home":e.preventDefault(),re(t,null,ee);break;case"End":e.preventDefault(),re(t,null,te)}},ref:xe,role:"tablist",children:Ee}),G&&We]}),Ne.scrollButtonEnd]}))})),de=r(8216);function ue(e){return(0,F.Z)("MuiTab",e)}var fe=(0,O.Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);const pe=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],he=(0,C.ZP)(L.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${(0,de.Z)(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})((({theme:e,ownerState:t})=>(0,Z.Z)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:"top"===t.iconPosition||"bottom"===t.iconPosition?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${fe.iconWrapper}`]:(0,Z.Z)({},"top"===t.iconPosition&&{marginBottom:6},"bottom"===t.iconPosition&&{marginTop:6},"start"===t.iconPosition&&{marginRight:e.spacing(1)},"end"===t.iconPosition&&{marginLeft:e.spacing(1)})},"inherit"===t.textColor&&{color:"inherit",opacity:.6,[`&.${fe.selected}`]:{opacity:1},[`&.${fe.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"primary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${fe.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${fe.disabled}`]:{color:(e.vars||e).palette.text.disabled}},"secondary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${fe.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${fe.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})));var be=n.forwardRef((function(e,t){const r=(0,M.Z)({props:e,name:"MuiTab"}),{className:l,disabled:i=!1,disableFocusRipple:a=!1,fullWidth:s,icon:c,iconPosition:d="top",indicator:u,label:f,onChange:p,onClick:h,onFocus:b,selected:m,selectionFollowsFocus:v,textColor:x="inherit",value:g,wrapped:w=!1}=r,C=(0,y.Z)(r,pe),B=(0,Z.Z)({},r,{disabled:i,disableFocusRipple:a,selected:m,icon:!!c,iconPosition:d,label:!!f,fullWidth:s,textColor:x,wrapped:w}),R=(e=>{const{classes:t,textColor:r,fullWidth:o,wrapped:n,icon:l,label:i,selected:a,disabled:s}=e,c={root:["root",l&&i&&"labelIcon",`textColor${(0,de.Z)(r)}`,o&&"fullWidth",n&&"wrapped",a&&"selected",s&&"disabled"],iconWrapper:["iconWrapper"]};return(0,j.Z)(c,ue,t)})(B),T=c&&f&&n.isValidElement(c)?n.cloneElement(c,{className:(0,S.Z)(R.iconWrapper,c.props.className)}):c;return(0,o.jsxs)(he,(0,Z.Z)({focusRipple:!a,className:(0,S.Z)(R.root,l),ref:t,role:"tab","aria-selected":m,disabled:i,onClick:e=>{!m&&p&&p(e,g),h&&h(e)},onFocus:e=>{v&&!m&&p&&p(e,g),b&&b(e)},ownerState:B,tabIndex:m?0:-1},C,{children:["top"===d||"start"===d?(0,o.jsxs)(n.Fragment,{children:[T,f]}):(0,o.jsxs)(n.Fragment,{children:[f,T]}),u]}))}));function me(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){me(e,t,r[t])}))}return e}var xe=(0,g.Z)((function(e){return(0,o.jsx)(ce,ve({},e,{TabIndicatorProps:{children:(0,o.jsx)("span",{className:"MuiTabs-indicatorSpan"})}}))}))({"& .MuiTabs-indicator":{display:"flex",justifyContent:"center",backgroundColor:"transparent",minHeight:"5px"},"& .MuiTabs-indicatorSpan":{width:"80%",backgroundColor:"#152238"}}),ge=(0,g.Z)("div")((0,w.Z)({borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"10px",width:"100% !important"})),we=(0,g.Z)("div")((0,w.Z)({background:"white",borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",width:{md:"30%",xl:"25%"},gap:"10px",marginRight:"20px",justifyItems:"center",paddingLeft:"1rem",alignItems:"center"})),ye=(0,g.Z)("div")((0,w.Z)({display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"})),Ze=(0,g.Z)("div")((0,w.Z)({display:"flex",flexDirection:"column",width:"100%",padding:"1rem",overflowY:"scroll"})),Se=(0,g.Z)("div")((0,w.Z)({display:"flex",width:"60%",background:"#f6f9f5"})),je=(0,g.Z)(b.Z)((0,w.Z)({padding:"2rem",fontSize:"1rem",color:"black"})),Ce=(0,g.Z)(b.Z)((0,w.Z)({padding:"2rem",fontSize:"1.4rem",fontWeight:"bold"})),Me=(0,g.Z)(b.Z)((0,w.Z)({fontSize:"1rem",color:"black"})),Be=(0,g.Z)((function(e){return(0,o.jsx)(be,ve({disableRipple:!0},e))}))((function(e){return{textTransform:"none",marginRight:e.theme.spacing(1),color:"grey","&.Mui-selected":{color:"#152238"},"&.Mui-focusVisible":{backgroundColor:"rgba(100, 95, 228, 0.32)"}}})),Re=(0,g.Z)("div")((0,w.Z)({display:"flex",flexDirection:"column",width:"90%",justifyContent:"center",height:"500px",padding:"1rem"})),Te=(0,g.Z)(m.Z)((0,w.Z)({})),We=(0,g.Z)("div")((0,w.Z)({display:"flex",gap:"10px",alignItems:"center",padding:"1rem"})),ke=(0,g.Z)(v.Z)((0,w.Z)({marginLeft:"10px",width:"90%"})),Ee=(0,g.Z)("div")((0,w.Z)({borderRadius:"5px",border:"solid 1px #D9D9D9"})),Ne=(0,g.Z)(x.Z)((0,w.Z)({background:"#152238",width:"90%",padding:"0.8rem",color:"white",textTransform:"none","&:hover":{background:"#152238",color:"white"}})),Pe=r(8257),Ae=r(1163),De=r(8352),ze=(r(1082),r(4747),r(1669),r(5236),r(965)),Ie=function(e){var t=e.myimage,r=(0,n.useState)(null),l=r[0],i=(r[1],(0,n.useState)([t])),a=i[0];i[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(De.tq,{spaceBetween:10,navigation:!0,thumbs:{swiper:l},modules:[ze.Rv,ze.W_,ze.o3],className:"mySwiper2",children:null===a||void 0===a?void 0:a.map((function(e){return(0,o.jsx)(De.o5,{children:(0,o.jsx)("img",{src:null===e||void 0===e?void 0:e.image})},Math.random())}))}),(0,o.jsx)(De.tq,{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:[ze.Rv,ze.W_,ze.o3],className:"mySwiper3",children:null===a||void 0===a?void 0:a.map((function(e){return(0,o.jsx)(De.o5,{children:(0,o.jsx)("img",{src:null===e||void 0===e?void 0:e.image})},Math.random())}))})]})};function Le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function Fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(o=r.next()).done)&&(l.push(o.value),!t||l.length!==t);i=!0);}catch(s){a=!0,n=s}finally{try{i||null==r.return||r.return()}finally{if(a)throw n}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Le(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(){var e=Fe(n.useState("Overview"),2),t=e[0],r=e[1],l=(0,Ae.useRouter)().query.ad,b=(n.useContext(d.Z).AuthState,n.useContext(u.Z).AuthDispatcher,(0,s.I0)()),m=(0,s.v9)((function(e){return e.appstate})),v=Fe(n.useState(!1),2),x=v[0],g=v[1],w=[],y=(0,c.DE)(a.c,b).getmainservices;return n.useEffect((function(){Pe.Z.get("/api/company/services").then((function(e){w=e.data.filter((function(e){return(null===e||void 0===e?void 0:e.services_id)==l})),y(w),console.log("the service ad data is ",w)}))}),[]),console.log("state service",m.servicedata),(0,o.jsxs)("div",{className:"navbar__mycontainer",children:[(0,o.jsxs)("div",{className:"navbar__catwrapper",children:[(0,o.jsxs)("div",{style:{width:"80%",position:"relative",marginTop:"2%"},children:[(0,o.jsx)(i.Z,{sx:{width:"100%",border:"solid 1px #D9D9D9",background:"#f6f9f5",height:"55px",position:"sticky",top:0,zIndex:100},elevation:0,children:(0,o.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"space-between"},children:[(0,o.jsxs)(xe,{value:t,onChange:function(e,t){r(t)},"aria-label":"secondary StyledTabs example",children:[(0,o.jsx)(Be,{value:"Overview",label:"Overview"}),(0,o.jsx)(Be,{value:"Description",label:"Description"}),(0,o.jsx)(Be,{value:"About",label:"About seller"}),(0,o.jsx)(Be,{value:"Similar",label:"Similar services"}),(0,o.jsx)(Be,{value:"Reviews",label:"Reviews"})]}),(0,o.jsx)(f.Z,{onClick:function(){g(!x)},children:x?(0,o.jsx)(p.Z,{}):(0,o.jsx)(h.Z,{sx:{color:"red"}})})]})}),(0,o.jsxs)(ge,{sx:{width:"100%"},children:[" ",m.servicedata.map((function(e){return(0,o.jsxs)(ye,{children:[(0,o.jsx)(Se,{children:(0,o.jsxs)(Ze,{children:[(0,o.jsxs)(Ee,{id:"Overview",children:[(0,o.jsx)(Re,{children:(0,o.jsx)(Ie,{myimage:e})}),(0,o.jsxs)(We,{children:[(0,o.jsx)(Te,{}),(0,o.jsx)(je,{children:"mano"})]})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(Ee,{children:[(0,o.jsx)(Ce,{id:"Description",children:"Description"}),(0,o.jsx)(je,{paragraph:!0,children:e.About})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(Ee,{children:[(0,o.jsx)(Ce,{id:"About",children:"About this Seller"}),(0,o.jsx)(je,{paragraph:!0,children:"A course description is a brief summary of the significant learning experiences for a course. Course descriptions appear in individual Course Outlines and in the Program of Studies (POSs) for individual programs."})]})]})}),(0,o.jsx)(we,{sx:{position:"sticky",top:100,zIndex:1},children:(0,o.jsx)(Ee,{children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",justifyItems:"center",gap:"10px",alignItems:"center"},children:[(0,o.jsx)(Ce,{align:"center",children:"Find out more about this seller"}),(0,o.jsx)(ke,{}),(0,o.jsx)(Te,{variant:"square",sx:{width:"50%",margin:"10px"}}),(0,o.jsx)(Me,{align:"center",children:null===e||void 0===e?void 0:e.title}),(0,o.jsxs)(Ne,{variant:"contained",children:["Send Enquiry"," "]}),(0,o.jsx)(Me,{align:"center",children:"Submit an enquiry direct"}),(0,o.jsx)("br",{})]})})})]},Math.random())}))]})]})," "]})," ",(0,o.jsx)("div",{style:{marginTop:"37%"}})]})}var He=function(e){return(0,o.jsx)(l.default,{showSearch:!0,isVisible:!0,children:(0,o.jsx)(Oe,{})})}},4747:function(){},1669:function(){},5236:function(){}},function(e){e.O(0,[115,497,659,774,888,179],(function(){return t=5942,e(e.s=t);var t}));var t=e.O();_N_E=t}]);