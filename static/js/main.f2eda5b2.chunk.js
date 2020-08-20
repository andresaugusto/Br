(this.webpackJsonpbr=this.webpackJsonpbr||[]).push([[0],{20:function(e,a,t){e.exports=t(33)},25:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),s=t.n(c),l=t(2);t(25);var i=function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(l.b,{className:"links",to:"/"},r.a.createElement("h1",null,"Br")),r.a.createElement("ul",null,r.a.createElement(l.b,{className:"links",to:"/characters"},r.a.createElement("li",null,"Characters")),r.a.createElement(l.b,{className:"links",to:"/episodes"},r.a.createElement("li",null,"Episodes")),r.a.createElement(l.b,{className:"links",to:"/quotes"},r.a.createElement("li",null,"Quotes")))))},o=t(1),m=t.n(o),u=t(4),p=t(5);var h=function(){Object(n.useEffect)((function(){s()}),[]);var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1],s=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/characters");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"background-collage"},t.map((function(e){return r.a.createElement("img",{key:e.char_id,className:"individual-bg-img",src:e.img,alt:e.name})})))};var E=function(){return r.a.createElement("section",null,r.a.createElement(h,null),r.a.createElement("section",{className:"home"},r.a.createElement("h1",{className:"home-titles"},"Would you love to learn how to cook meth?"),r.a.createElement("p",{className:"home-warnings"},r.a.createElement("u",null,"Well this is NOT")," the site for you."),r.a.createElement("p",{className:"home-warnings"},r.a.createElement("u",null,"We would NEVER")," teach how to cook meth here."),r.a.createElement("h1",{className:"home-titles"},"But you ",r.a.createElement("u",null,"will")," find information about the show that made us all sympathize with a meth dealer."),r.a.createElement("section",{className:"home-info"},r.a.createElement("h1",null,r.a.createElement("u",null,"About this app")),r.a.createElement("h1",null,"Powered by Tim Biles' ",r.a.createElement("i",null,'"The Breaking Bad API"'),", this is a portal to information about your favorite characters, episodes, and quotes from the show."),r.a.createElement("p",null,'As a fair warning, this database contains spoiler data like deaths and character appearances in episodes/seasons. If you, for some reason, have not finished watching the show yet, as Tim Biles introduced: "...Tread Lightly".'))))};var d=function(){Object(n.useEffect)((function(){s()}),[]);var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1],s=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/characters");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-title"},"Characters"),t.map((function(e){return r.a.createElement("h5",{key:e.char_id},r.a.createElement(l.b,{className:"names-list",to:"/characters/".concat(e.char_id)},e.name))})))};var f=function(e){var a=e.match;Object(n.useEffect)((function(){o()}),[]);var t=Object(n.useState)([]),c=Object(p.a)(t,2),s=c[0],i=c[1],o=function(){var e=Object(u.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/characters/".concat(a.params.characterId));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"item-info"},r.a.createElement("h3",{className:"page-title"},s.name),r.a.createElement("img",{className:"character-image",src:s.img,alt:s.name}),r.a.createElement("div",{className:"character-details-div"},r.a.createElement("ul",{className:"details"},r.a.createElement("li",{className:"details-parameter"},"alias :"),r.a.createElement("li",{className:"details-result"},s.nickname),r.a.createElement("li",{className:"details-parameter"},"birthday :"),r.a.createElement("li",{className:"details-result"},s.birthday),r.a.createElement("li",{className:"details-parameter"},"occupation :"),r.a.createElement("li",{className:"details-result"},s.occupation),r.a.createElement("li",{className:"details-parameter"},"appears in seasons :"),r.a.createElement("li",{className:"details-result"},s.appearance),r.a.createElement("li",{className:"details-parameter"},"status :"),r.a.createElement("li",{className:"details-result"},s.status),r.a.createElement("li",{className:"details-parameter"},"played by :"),r.a.createElement("li",{className:"details-result"},s.portrayed))),r.a.createElement(l.b,{to:"/characters"},r.a.createElement("h4",{className:"back-to"},"Back to Characters")))};var b=function(){Object(n.useEffect)((function(){s()}),[]);var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1],s=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/episodes");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-title"},"Episodes"),t.map((function(e){return r.a.createElement("h5",{key:e.episode_id},r.a.createElement(l.b,{className:"names-list",to:"/episodes/".concat(e.episode_id)},e.title))})))};var N=function(e){var a=e.match;Object(n.useEffect)((function(){o()}),[]);var t=Object(n.useState)([]),c=Object(p.a)(t,2),s=c[0],i=c[1],o=function(){var e=Object(u.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/episodes/".concat(a.params.episodeId));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"item-info"},r.a.createElement("h3",{className:"page-title"},s.title),r.a.createElement("div",{className:"episode-details-div"},r.a.createElement("ul",{className:"details"},r.a.createElement("li",{className:"details-parameter"},"season :"),r.a.createElement("li",{className:"details-result"},s.season),r.a.createElement("li",{className:"details-parameter"},"episode :"),r.a.createElement("li",{className:"details-result"},s.episode),r.a.createElement("li",{className:"details-parameter"},"characters :"),r.a.createElement("li",{className:"details-result"},s.characters),r.a.createElement("li",{className:"details-parameter"},"air date :"),r.a.createElement("li",{className:"details-result"},s.air_date))),r.a.createElement(l.b,{to:"/episodes"},r.a.createElement("h4",{className:"back-to"},"Back to Episodes")))};var v=function(){Object(n.useEffect)((function(){s()}),[]);var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1],s=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/quotes");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-title"},"Quotes"),t.map((function(e){return r.a.createElement("h4",{key:e.quote_id},r.a.createElement(l.b,{className:"names-list",to:"/quotes/".concat(e.quote_id)},r.a.createElement("i",null,'"',e.quote,'"')))})))};var w=function(e){var a=e.match;Object(n.useEffect)((function(){o()}),[]);var t=Object(n.useState)([]),c=Object(p.a)(t,2),s=c[0],i=c[1],o=function(){var e=Object(u.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/quotes/".concat(a.params.quoteId));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"item-info"},r.a.createElement("h3",{className:"quote-page-title"},r.a.createElement("i",null,'" ',s.quote,' "')),r.a.createElement("div",{className:"quote-details-div"},r.a.createElement("ul",{className:"details"},r.a.createElement("li",{className:"quote-details-result"},"- ",s.author))),r.a.createElement(l.b,{to:"/quotes"},r.a.createElement("h4",{className:"back-to"},"Back to Quotes")))};function g(){return r.a.createElement("footer",null,r.a.createElement("ul",{className:"sign-profile-link"},r.a.createElement("li",{className:"sign-profile-link"},r.a.createElement("a",{className:"sign-profile-link",href:"https://www.linkedin.com/in/andresortizmontalvo/"},"L I N K E D I N")),r.a.createElement("li",{className:"sign-profile-link"},r.a.createElement("a",{className:"sign-profile-link",href:"https://github.com/andresaugusto"},"G I T H U B")),r.a.createElement("li",{className:"sign-profile-link"},r.a.createElement("a",{className:"sign-profile-link",href:"https://codepen.io/andresaugusto"},"C O D E P E N"))),r.a.createElement("div",{className:"sign-email"},"andres.augusto@icloud.com"),r.a.createElement("span",{className:"sign-date"},r.a.createElement("small",null,"20",r.a.createElement("span",{className:"sign-first-letter"},"20"))))}var k=t(9);t(32);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:E}),r.a.createElement(k.a,{exact:!0,path:"/characters",component:d}),r.a.createElement(k.a,{exact:!0,path:"/characters/:characterId",component:f}),r.a.createElement(k.a,{exact:!0,path:"/episodes",component:b}),r.a.createElement(k.a,{exact:!0,path:"/episodes/:episodeId",component:N}),r.a.createElement(k.a,{exact:!0,path:"/quotes",component:v}),r.a.createElement(k.a,{exact:!0,path:"/quotes/:quoteId",component:w})),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(l.a,{basename:"/Br"},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f2eda5b2.chunk.js.map