(()=>{var e={};e.id=626,e.ids=[626],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},40770:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(88683),r(13540),r(35866);var s=r(23191),n=r(88716),a=r(37922),i=r.n(a),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,88683)),"/Users/devanhduy/Desktop/Freelancer/aws-task-manager/src/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,13540)),"/Users/devanhduy/Desktop/Freelancer/aws-task-manager/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/devanhduy/Desktop/Freelancer/aws-task-manager/src/app/login/page.tsx"],u="/login/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},70135:(e,t,r)=>{Promise.resolve().then(r.bind(r,12233)),Promise.resolve().then(r.bind(r,69177)),Promise.resolve().then(r.bind(r,97322))},90400:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},17892:(e,t,r)=>{Promise.resolve().then(r.bind(r,63556))},63556:(e,t,r)=>{"use strict";r.d(t,{LoginPage:()=>F});var s=r(10326),n=r(90434),a=r(99705),i=r(67852),o=r(55987),l=r(11348),c=r(71260),d=r(64414),u=r(38750),p=r(54693),m=r(19941),h=r(69789),g=r(37342),x=r(47908),f=r(9531),v=r(71463),w=r(64229),y=r(89751),b=r(53963),P=r(40815),j=r(17209),k=r(2605),q=r(4401),S=r(90126);async function _(e){let{username:t}=e;(0,b.n)(!!t,P.X.EmptySignUpUsername);let r=v.d.getConfig().Auth?.Cognito;(0,w.FG)(r);let{userPoolClientId:s,userPoolId:n}=r,a=e.options?.clientMetadata,i=(0,S.u)({username:t,userPoolId:n,userPoolClientId:s}),{CodeDeliveryDetails:o}=await (0,k.S5)({region:(0,j.u)(r.userPoolId),userAgentValue:(0,q.W)(y.g4.ResendSignUpCode)},{Username:t,ClientMetadata:a,ClientId:r.userPoolClientId,UserContextData:i}),{DeliveryMedium:l,AttributeName:c,Destination:d}={...o};return{destination:d,deliveryMedium:l,attributeName:c||void 0}}var U=r(42242),C=r(48231),A=r(67773),I=r(10119),z=r(52225);let D=()=>(0,I.D)({mutationFn:async e=>await (0,z.z)({username:e.email,password:e.password,options:{userAttributes:{email:e.email}}})});function F(){let{mutateAsync:e,isPending:t}=D(),{mutateAsync:r}=(0,A.M)(),v=(0,h.c)({initialValues:{email:"",password:""},validate:{email:(0,g.J)("Please enter a valid email address."),password:(0,U.L)("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number and one special characters.")}}),w=async t=>{try{let n=await e(t);if("CONFIRM_SIGN_UP"===n.nextStep.signInStep)return _({username:t.email}),x.qk.open({title:"Verify Email",children:s.jsx(C.Q,{email:t.email,onVerify:async({code:e})=>{(await r({username:t.email,code:e})).isSignUpComplete&&(window.location.href="/tasks")}})});return window.location.href="/tasks"}catch(e){f.N9.show({color:"red",title:"Create account fail",message:e?.toString(),style:{fontWeight:"bold"}})}};return s.jsx(a.k,{h:"100%",bg:"dark",justify:"center",align:"center",children:s.jsx("form",{onSubmit:v.onSubmit(w),children:(0,s.jsxs)(i.W,{h:"fit-content",w:400,children:[s.jsx(o.D,{ta:"center",children:"Welcome Back!"}),(0,s.jsxs)(l.x,{c:"dimmed",size:"sm",ta:"center",mt:5,children:["Do not have an account yet?"," ",s.jsx(c.e,{children:s.jsx(n.default,{href:"/register",children:"Create account"})})]}),(0,s.jsxs)(d.X,{withBorder:!0,shadow:"md",p:30,mt:30,radius:"md",children:[s.jsx(u.o,{label:"Email",placeholder:"example@gmail.com",...v.getInputProps("email")},v.key("email")),s.jsx(p.W,{label:"Password",placeholder:"••••••••",mt:"md",...v.getInputProps("password")},v.key("password")),s.jsx(m.z,{loading:t,bg:"blue",size:"lg",type:"submit",fullWidth:!0,mt:"xl",children:"Sign in"})]})]})})})}},97322:(e,t,r)=>{"use strict";r.d(t,{AppProvider:()=>q});var s=r(10326),n=r(17577),a=r(24528),i=r(64058),o=r(45086),l=r(91649);let c=(0,r(60114).Ue)(e=>({user:null,setUser:t=>e({user:t})}));var d=r(35047),u=r(21153),p=r(78799),m=r(22852),h=r(44976),g=r(87974),x=r(62841),f=r(25193),v=r(92027),w=r(22887),y=r(38018),b=r(64181);let P=[{value:"logout",label:"Log out"}],j=({children:e})=>{let t=(0,x.K)({onDropdownClose:()=>t.resetSelectedOption()}),r=e=>{if("logout"===e)return(0,b.w)(),window.location.href="/login"},n=P.map(e=>s.jsx(f.h.Option,{value:e.label,onClick:()=>r(e.value),children:e.label},e.value));return(0,s.jsxs)(v.x,{h:"100vh",children:[s.jsx(w.Z,{bg:"gray",justify:"end",ta:"right",p:20,children:(0,s.jsxs)(f.h,{store:t,width:100,withArrow:!0,children:[s.jsx(f.h.Target,{children:s.jsx(y.q,{radius:"xl",onClick:()=>t.toggleDropdown()})}),s.jsx(f.h.Dropdown,{children:s.jsx(f.h.Options,{children:n})})]})}),e]})};r(29223).V.configure({Auth:{Cognito:{identityPoolId:"ap-southeast-1:3f9db4f5-a5b5-45d4-8d86-bb2dc899ea5e",userPoolId:"ap-southeast-1_JY7dzNgUH",userPoolClientId:"q0c4spc84ackfl38obkg2faui",signUpVerificationMethod:"code",loginWith:{username:!0,email:!1,phone:!1}}},API:{REST:{}},Storage:{S3:{bucket:"task-manager-asset",region:"ap-southeast-1"}}});let k=new m.S,q=({children:e})=>{let t=(0,d.usePathname)(),[r,{toggle:m}]=(0,i.q)(!0),{user:x,setUser:f}=c(),v=t.includes("login")||t.includes("register");return((0,n.useEffect)(()=>{x||(async()=>{try{let e=await (0,o.t)(),t=await (0,l.y)();if(e||(window.location.href="/login"),f(e),(0,g.o)(t.tokens?.accessToken.toString()||""),v)return window.location.href="/tasks";m()}catch(e){v||(window.location.href="/login")}})()},[x,v]),x||v)?(0,s.jsxs)(h.aH,{client:k,children:[s.jsx(u.$,{children:s.jsx(j,{children:e})}),s.jsx(p.T,{position:"bottom-right",zIndex:2e3})]}):s.jsx(h.aH,{client:k,children:s.jsx(a.f,{visible:r,zIndex:1e3,overlayProps:{radius:"sm",blur:2}})})}},48231:(e,t,r)=>{"use strict";r.d(t,{Q:()=>p});var s=r(10326),n=r(17577),a=r(52165),i=r(11348),o=r(78269),l=r(19941),c=r(69789),d=r(14611),u=r(9531);let p=({email:e,onVerify:t})=>{let[r,p]=(0,n.useState)(!1),m=(0,c.c)({initialValues:{code:""},validate:{code:(0,d.U)("Please provide code")}}),h=async e=>{try{p(!0),await t(e),p(!1)}catch(e){p(!1),u.N9.show({color:"red",title:"Create account fail",message:e?.toString(),style:{fontWeight:"bold"}})}};return s.jsx("form",{onSubmit:m.onSubmit(h),children:(0,s.jsxs)(a.K,{justify:"center",align:"center",gap:30,children:[(0,s.jsxs)(i.x,{fz:16,ta:"center",children:["Please enter the 6-digits code we have sent to your account",(0,s.jsxs)(i.x,{c:"blue",fw:500,component:"span",children:["\xa0",e]})]}),s.jsx(i.x,{fz:16,ta:"center",children:"It may take up 1 minute to receive the code"}),s.jsx(o.E,{length:6,type:"number",...m.getInputProps("code")},m.key("code")),s.jsx(l.z,{mb:15,bg:"blue",size:"md",w:"fit-content",fullWidth:!0,type:"submit",loading:r,children:"Verify account"})]})})}},67773:(e,t,r)=>{"use strict";r.d(t,{M:()=>a});var s=r(10119),n=r(60392);let a=()=>(0,s.D)({mutationFn:async({username:e,code:t})=>await (0,n._)({username:e,confirmationCode:t})})},87974:(e,t,r)=>{"use strict";r.d(t,{U:()=>s,o:()=>n});let s=r(44099).Z.create({baseURL:`${process.env.API_URL||""}/api`});s.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),s.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});let n=e=>{s.defaults.headers.Authorization=`Bearer ${e}`}},42242:(e,t,r)=>{"use strict";r.d(t,{L:()=>n});var s=r(89758);r(98327);let n=e=>(0,s.w)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,e)},13540:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>h});var s=r(19510),n=r(11178),a=r.n(n),i=r(36181),o=r(44395),l=r(47080),c=r(68570);let d=(0,c.createProxy)(String.raw`/Users/devanhduy/Desktop/Freelancer/aws-task-manager/src/app/provider.tsx`),{__esModule:u,$$typeof:p}=d;d.default;let m=(0,c.createProxy)(String.raw`/Users/devanhduy/Desktop/Freelancer/aws-task-manager/src/app/provider.tsx#AppProvider`);r(26559),r(15500),r(88210),r(5023);let h={title:"Task Manager",description:"This is task manager project"},g=(0,i.j)({fontFamily:a().style.fontFamily});function x({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[s.jsx("head",{children:s.jsx(o.D,{})}),s.jsx("body",{className:a().className,children:s.jsx(l.M,{defaultColorScheme:"dark",theme:g,children:s.jsx(m,{children:e})})})]})}},88683:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(19510),n=r(68570);let a=(0,n.createProxy)(String.raw`/Users/devanhduy/Desktop/Freelancer/aws-task-manager/src/app/login/components/LoginPage.tsx`),{__esModule:i,$$typeof:o}=a;a.default;let l=(0,n.createProxy)(String.raw`/Users/devanhduy/Desktop/Freelancer/aws-task-manager/src/app/login/components/LoginPage.tsx#LoginPage`);function c(){return s.jsx(l,{})}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(66621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,673,621,582,28],()=>r(40770));module.exports=s})();