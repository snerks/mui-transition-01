(this["webpackJsonpmui-transition-01"]=this["webpackJsonpmui-transition-01"]||[]).push([[0],{218:function(e,t,a){e.exports=a(422)},417:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);a(219),a(228);var n=a(0),i=a.n(n),r=a(37),m=a.n(r),o=(a(417),a(50)),c=a(212),l=a(18),s=a(213),u=a(450),g=a(109),p=a(423),d=a(451),E=a(452),h=a(453),N=a(446),b=a(447),f=a(424),v=a(426),y=Object(v.a)((function(){return{typographyStyles:{flex:1}}})),k=function(e){e.isDarkMode,e.setIsDarkMode;var t=e.title,a=y();return i.a.createElement(N.a,{position:"static"},i.a.createElement(b.a,null,i.a.createElement(f.a,{className:a.typographyStyles},t)))},w=[{questionNumber:1,imageFileName:"B1"},{questionNumber:2,imageFileName:"C1"},{questionNumber:3,imageFileName:"D1"},{questionNumber:4,imageFileName:"E1"},{questionNumber:5,imageFileName:"F1"},{questionNumber:6,imageFileName:"G1"},{questionNumber:7,imageFileName:"O1"},{questionNumber:8,imageFileName:"S1"},{questionNumber:9,imageFileName:"S2"},{questionNumber:10,imageFileName:"T1"}],F=a(454),O=a(455),j=a(449),q=a(448),S=a(456),x=Object(q.a)((function(e){return Object(S.a)({root:{},wrapper:{},paper:{zIndex:1,position:"relative",margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}})})),D=function(e){var t=x(),a=i.a.useState(!1),n=Object(o.a)(a,2),r=n[0],m=n[1];return i.a.createElement("div",{className:t.root},i.a.createElement("div",{className:t.wrapper},i.a.createElement(j.a,{control:i.a.createElement(F.a,{checked:r,onChange:function(){m((function(e){return!e}))}}),label:r?"Hide":"Show"}),i.a.createElement(O.a,{direction:e.direction,in:r,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(p.a,{elevation:4,className:t.paper},i.a.createElement("img",{style:{maxWidth:250},src:"".concat("/mui-transition-01","/images/").concat(e.imageFileName,".png"),alt:e.imageFileName})))))},M=a(425),I=Object(q.a)((function(e){return Object(S.a)({root:{},wrapper:{},paper:{zIndex:1,position:"relative",margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}})})),W=function(e){var t=I(),a=i.a.useState(!1),n=Object(o.a)(a,2),r=n[0],m=n[1];return i.a.createElement("div",{className:t.root},i.a.createElement("div",{className:t.wrapper},i.a.createElement(j.a,{control:i.a.createElement(F.a,{checked:r,onChange:function(){m((function(e){return!e}))}}),label:r?"Hide":"Show"}),i.a.createElement(M.a,{in:r,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(p.a,{elevation:4,className:t.paper},i.a.createElement("img",{style:{maxWidth:250},src:"".concat("/mui-transition-01","/images/").concat(e.imageFileName,".png"),alt:e.imageFileName})))))},B=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,r=Object(g.a)(),m=Object(n.useState)(!1),c=Object(o.a)(m,1)[0],l=Object(n.useState)(w),s=Object(o.a)(l,1)[0];return i.a.createElement(u.a,{theme:r},i.a.createElement(p.a,{elevation:0,square:!0,style:{height:"100vh"}},i.a.createElement(d.a,{container:!0,direction:"column",justify:"center",spacing:4},i.a.createElement(d.a,{item:!0},i.a.createElement(k,{title:"What's My Number?",isDarkMode:t,setIsDarkMode:a})),c?i.a.createElement(E.a,{open:!0},i.a.createElement(h.a,{color:"inherit"})):i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{style:{marginLeft:30}},"Name the Film or TV Show that used these number plates."),i.a.createElement(d.a,{style:{margin:"0 10px 0 0"},item:!0,container:!0,direction:"column",spacing:3,justify:"space-evenly",alignItems:"center"},s.map((function(e,t){var a=t%4,n="left";return 0===a&&(n="left"),1===a&&(n="right"),2===a&&(n="down"),3===a&&(n="down"),i.a.createElement(d.a,{item:!0,container:!0,key:t,spacing:2,justify:"flex-start"},i.a.createElement(d.a,{item:!0},"Q",e.questionNumber),i.a.createElement(d.a,{item:!0},t%3!==0?i.a.createElement(D,{imageFileName:e.imageFileName,direction:n}):i.a.createElement(W,{imageFileName:e.imageFileName,direction:n})))})))))))},C=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],m=Object(s.a)({palette:{type:a?"dark":"light",primary:{main:"#0b5994"},secondary:{main:"#1d83c6"}}});return i.a.createElement(u.a,{theme:m},i.a.createElement(c.a,{basename:"/mui-transition-01"},i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/",exact:!0,render:function(){return i.a.createElement(B,{isDarkMode:a,setIsDarkMode:r})}}),i.a.createElement(l.a,{path:"*",render:function(){return i.a.createElement(B,{isDarkMode:a,setIsDarkMode:r})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.31587ec4.chunk.js.map