(this.webpackJsonp20211208_login=this.webpackJsonp20211208_login||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(10),a=n.n(c),o=(n(15),n(5)),i=n(8),j=n(4),l=(n(16),n(9)),u=n(2),d=n(1);var b=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Sign In"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(d.jsx)("input",{type:"text",id:"userName",name:"userName",onChange:e.handleChange})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password",name:"password",onChange:e.handleChange})]})]})]})};var h=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Component A"}),Object(d.jsxs)("p",{children:["Welcome back, ",Object(d.jsx)("span",{style:{color:"#55ACEE",textTransform:"uppercase",fontWeight:"bold"},children:e.userName}),". You have successfully logged into our site!"]})]})};var m=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Component B"}),Object(d.jsx)("p",{children:"Incorrect user name and/or password. The information you entered does not match our records."})]})};var p=function(){var e=Object(r.useState)({userName:"",password:""}),t=Object(j.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)("/"),a=Object(j.a)(c,2),p=a[0],O=a[1],x=Object(r.useState)("Sign In"),g=Object(j.a)(x,2),f=g[0],w=g[1];return Object(r.useEffect)((function(){var e;e="Sign In"===f?[{userName:"guinness",password:"guinness"},{userName:"jake",password:"jake"},{userName:"bailey",password:"bailey"},{userName:"marc",password:"marc"}].findIndex((function(e){return e.userName===n.userName&&e.password===n.password}))>-1?"/compA":"/compB":"/",O((function(){return e}))}),[n,f]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{children:[Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/react_router_login/",element:Object(d.jsx)(b,{handleChange:function(e){s((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},e.target.name,e.target.value))}))}}),exact:!0}),Object(d.jsx)(u.a,{path:"/react_router_login/compA",element:Object(d.jsx)(h,{userName:n.userName})}),Object(d.jsx)(u.a,{path:"/react_router_login/compB",element:Object(d.jsx)(m,{})})]}),Object(d.jsx)("div",{className:"linkDiv",style:{textAlign:"center"},children:Object(d.jsx)(l.b,{style:{display:"inline-block",margin:"1rem",padding:".5rem 0",backgroundColor:"#292F33",color:"#55ACEE",fontWeight:"bold",borderRadius:"5px",textDecoration:"none",textTransform:"uppercase",width:"7.75rem"},onClick:function(){"Sign In"===f?w("Back"):(s({userName:"",password:""}),O("/"),w("Sign In"))},to:"/react_router_login"+p,children:f})})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.07dfc961.chunk.js.map