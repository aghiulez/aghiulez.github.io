(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,a,t){e.exports=t(59)},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),s=t(9),m=t(6),o=function(e){e.user;var a=Object(n.useState)(!1),t=Object(s.a)(a,2),l=t[0],c=t[1];return r.a.createElement("nav",{className:l?"active":""},r.a.createElement("div",{className:"header"},r.a.createElement(m.b,{className:"AraMatthew",to:"/"},"Ara",r.a.createElement("span",{className:"boldBlue"},"Matthew")),r.a.createElement("figure",{className:"dropbtn",onClick:function(){c(!l)}})),r.a.createElement("div",{onClick:function(){c(!l)},id:"links",className:"links"},r.a.createElement(m.b,{to:"/about"},"About"),r.a.createElement(m.b,{to:"/projects"},"Projects"),r.a.createElement(m.b,{to:"/experience"},"Experience"),r.a.createElement(m.b,{to:"/contact"},"Contact")))},i=(t(27),t(18)),u=t.n(i);t(28);u.a.setAppElement("#root");var E=function(e){var a=e.user;return r.a.createElement("section",{id:"projectspage"},r.a.createElement("div",{className:"projects"},a.projects.map((function(e){return r.a.createElement("div",{className:"project",key:e.name},r.a.createElement("img",{className:"gif",src:e.website,alt:"gif of app"}),r.a.createElement("div",{className:"information"},r.a.createElement("h1",{className:"projectName"}," ",e.name," "),r.a.createElement("div",{className:"languages"},e.languages.map((function(e){return r.a.createElement("em",{key:e},e," ")})),r.a.createElement("div",{className:"frameworks"},e.libraries.map((function(e){return r.a.createElement("em",{key:e},e," ")})))),r.a.createElement("p",null,e.summary)))}))))},p=t(29),f=t.n(p),h=function(e){var a=e.user;return r.a.createElement("section",{id:"home"},r.a.createElement("h1",null,"Hello, my name is ",r.a.createElement("strong",null,a.basics.name)),r.a.createElement("p",null,"I am a ",r.a.createElement("strong",null,a.basics.region)," based ",r.a.createElement("strong",null,a.basics.headline)," with a strong inclination for problem-solving and seeing unique ideas come to life."),r.a.createElement(f.a,{className:"typingEffect",text:"Learn more about me! "}),r.a.createElement("a",{href:"/about"}," ",r.a.createElement("figure",{className:"bottombtn"})))},d=t(19),b=function(e){var a=e.user;return r.a.createElement("div",{className:"SocialLinks"},a.basics.profiles.map((function(e){return r.a.createElement("div",{className:e.network,key:e.network},r.a.createElement(d.SocialIcon,{url:e.url,target:"_blank",style:{height:30,width:30},bgColor:"#ffffff"}),r.a.createElement("em",{className:"name"}," ",e.network," "))})),r.a.createElement("div",null,r.a.createElement(d.SocialIcon,{url:"mailto:"+a.basics.email,network:"email",style:{height:30,width:30},bgColor:"#ffffff"}),r.a.createElement("em",{className:"name"}," email ")))},v=function(e){var a=e.user;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"bio"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null," ",a.basics.summary," "),r.a.createElement("p",{className:"forwards"}," Want to know more about me? Check out my ",r.a.createElement("a",{href:"/experience"}," experience "),"and ",r.a.createElement("a",{href:"/projects"}," projects!"))),r.a.createElement("div",{className:"contacts"},r.a.createElement("h1",null,"Contact"),r.a.createElement(b,{user:a})))},g=t(30),N=t(31),w=t(33),k=t(32),y=t(11),j=t(34),S=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(w.a)(this,Object(k.a)(a).call(this,e))).submitForm=t.submitForm.bind(Object(y.a)(t)),t.state={status:"show"},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){var e=this.state.status;return console.log(e),r.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/xjvaajap",method:"POST"},"SUCCESS"!==e?r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"label"},r.a.createElement("label",null,"Email:")),r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"email",name:"email"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"label"},r.a.createElement("label",null,"Message:")),r.a.createElement("div",{className:"input"},r.a.createElement("textarea",{className:"messageInput",type:"text"})))):r.a.createElement("p",null,"Sent."),"SUCCESS"===e?r.a.createElement("p",null,"Thank you, I will get back to you soon!"):r.a.createElement("button",null,"Submit"),"ERROR"===e&&r.a.createElement("p",null,"Ooops! There was an error."))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),r=new XMLHttpRequest;r.open(t.method,t.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},r.send(n)}}]),a}(r.a.Component),C=function(e){var a=e.user;return r.a.createElement("section",{id:"experiencepage"},a.work.map((function(e){return r.a.createElement("a",{href:e.website,className:"link",target:"_blank",key:e.company},r.a.createElement("img",{className:"gif",src:e.highlights[0],alt:"logo"}),r.a.createElement("div",{className:"info"},r.a.createElement("h1",{className:"position"}," ",e.position," "),r.a.createElement("h4",{className:"company"}," ",e.company," "),r.a.createElement("h5",{className:"dates"}," ",e.start.month,"/",e.start.year," - ",e.end.month,"/",e.end.year," "),r.a.createElement("p",null,e.summary)))})))},O=t(7),x=function(e){var a=e.user;return r.a.createElement("section",{id:"page"},r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/contact"},r.a.createElement("div",{className:"pageSummary"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"If you'd like to reach me, feel free to contact me via ",r.a.createElement("a",{href:"mailto:"+a.basics.email},"email"),", ",r.a.createElement("a",{href:a.basics.profiles[2].url},"LinkedIn"),", or the form below!"))),r.a.createElement(S,null)),r.a.createElement(O.a,{path:"/about"},r.a.createElement("div",{className:"pageSummary"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:a.basics.picture,alt:"Ara Matthew Profile Pic"}),r.a.createElement("h1",null,"Ara Matthew Ghiulezian"),r.a.createElement("p",null,"Los Angeles based Software Engineer"))),r.a.createElement(v,{className:"container",user:a})),r.a.createElement(O.a,{path:"/projects"},r.a.createElement("div",{className:"pageSummary"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Projects"),r.a.createElement("p",null,"Showcased here are some of the projects I have worked on in the past. Chekout out my ",r.a.createElement("a",{href:a.basics.profiles[1].url},"GitHub")," for more details and projects."))),r.a.createElement(E,{user:a})),r.a.createElement(O.a,{path:"/experience"},r.a.createElement("div",{className:"pageSummary"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Experience"),r.a.createElement("p",null,"To find out more about each jobsite, click on the tab to find out more!"))),r.a.createElement(C,{user:a})),r.a.createElement(O.a,{path:"/"},r.a.createElement(h,{user:a}))))},A=function(e){var a=e.user;return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"@ 2020 AraMatthew."),r.a.createElement("div",{className:"socialLinks"},r.a.createElement(b,{user:a})))},I=function(e){var a=e.user;return r.a.createElement(m.a,null,r.a.createElement(o,null),r.a.createElement("div",{className:"curr"},r.a.createElement(x,{user:a})),r.a.createElement(A,{user:a}))},M=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/aghiulez").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),t?r.a.createElement(I,{className:"page",user:t}):(console.log("nothing"),r.a.createElement("div",null,"   "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.775e9756.chunk.js.map