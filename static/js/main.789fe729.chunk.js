(this["webpackJsonpmui-transition-01"]=this["webpackJsonpmui-transition-01"]||[]).push([[0],{51:function(e,t,a){e.exports=a(64)},56:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),m=a.n(i),c=(a(56),a(20)),o=a(47),l=a(6),s=a(48),u=a(94),g=a(33),h=a(66),E=a(95),d=a(100),p=a(96),N=a(90),b=a(91),f=a(67),k=a(97),y=a(46),v=a.n(y),F=a(68),j=Object(F.a)((function(){return{typographyStyles:{flex:1}}})),w=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=e.title,i=j();return r.a.createElement(N.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(f.a,{className:i.typographyStyles},n),r.a.createElement(h.a,{title:"use this switch for dark/light mode"},r.a.createElement(v.a,null)),r.a.createElement(k.a,{checked:t,onChange:function(){return a(!t)}})))},O=[{questionNumber:1,imageFileName:"B1"},{questionNumber:2,imageFileName:"C1"},{questionNumber:3,imageFileName:"D1"},{questionNumber:4,imageFileName:"E1"},{questionNumber:5,imageFileName:"F1"},{questionNumber:6,imageFileName:"G1"},{questionNumber:7,imageFileName:"O1"},{questionNumber:8,imageFileName:"S1"},{questionNumber:9,imageFileName:"S2"},{questionNumber:10,imageFileName:"T1"}],q=a(99),D=a(93),M=a(92),S=a(98),I=Object(M.a)((function(e){return Object(S.a)({root:{},wrapper:{},paper:{zIndex:1,position:"relative",margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}})})),x=function(e){var t=I(),a=r.a.useState(!1),n=Object(c.a)(a,2),i=n[0],m=n[1];return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.wrapper},r.a.createElement(D.a,{control:r.a.createElement(k.a,{checked:i,onChange:function(){m((function(e){return!e}))}}),label:i?"Hide Number Plate":"Show Number Plate"}),r.a.createElement(q.a,{direction:"left",in:i,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(h.a,{elevation:4,className:t.paper},r.a.createElement("img",{src:"images/".concat(e.imageFileName,".png"),alt:e.imageFileName})))))},W=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,i=Object(g.a)(),m=Object(n.useState)(!1),o=Object(c.a)(m,1)[0],l=Object(n.useState)(O),s=Object(c.a)(l,1)[0];return r.a.createElement(u.a,{theme:i},r.a.createElement(h.a,{elevation:0,square:!0,style:{height:"100vh"}},r.a.createElement(E.a,{container:!0,direction:"column",justify:"center",spacing:4},r.a.createElement(E.a,{item:!0},r.a.createElement(w,{title:"What's My Number?",isDarkMode:t,setIsDarkMode:a})),o?r.a.createElement(d.a,{open:!0},r.a.createElement(p.a,{color:"inherit"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{style:{marginLeft:30}},"Name the Film or TV Show that used these number plates."),r.a.createElement(E.a,{style:{margin:"0 30px"},item:!0,container:!0,direction:"column",spacing:3,justify:"space-evenly",alignItems:"center"},s.map((function(e,t){return r.a.createElement(E.a,{item:!0,container:!0,key:t,spacing:2,justify:"flex-start"},r.a.createElement(E.a,{item:!0},e.questionNumber),r.a.createElement(E.a,{item:!0},r.a.createElement(x,{imageFileName:e.imageFileName})))})))))))},B=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],m=Object(s.a)({palette:{type:a?"dark":"light",primary:{main:"#0b5994"},secondary:{main:"#1d83c6"}}});return r.a.createElement(u.a,{theme:m},r.a.createElement(o.a,{basename:"/mui-transition-01"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,render:function(){return r.a.createElement(W,{isDarkMode:a,setIsDarkMode:i})}}),r.a.createElement(l.a,{path:"*",render:function(){return r.a.createElement(W,{isDarkMode:a,setIsDarkMode:i})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.789fe729.chunk.js.map