(window["webpackJsonpreact-router-v5"]=window["webpackJsonpreact-router-v5"]||[]).push([[0],{65:function(e,t,a){e.exports=a(98)},70:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),l=(a(70),a(5)),u=a(10),i=a(102),m=a(103),s=a(104);function p(){return c.a.createElement("div",null,c.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",bg:"info",variant:"dark"},c.a.createElement(i.a.Brand,{as:l.c,to:"/"},"React Router V5"),c.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(m.a,{className:"mr-auto"},c.a.createElement(m.a.Link,{exact:!0,as:l.c,to:"/"},"Home"),c.a.createElement(m.a.Link,{as:l.c,to:"/about"},"About"),c.a.createElement(m.a.Link,{as:l.c,to:"/todo"},"Todo"),c.a.createElement(m.a.Link,{as:l.c,to:"/common-one"},"Array Route 1"),c.a.createElement(m.a.Link,{as:l.c,to:"/common-two"},"Array Route 2"),c.a.createElement(m.a.Link,{as:l.c,to:"/topics"},"Topics"),c.a.createElement(m.a.Link,{as:l.c,to:"/dashboard"},"Dashboard"),c.a.createElement(m.a.Link,{as:l.c,to:"/redirect"},"Redirect"),c.a.createElement(m.a.Link,{as:l.c,to:"/items"},"Items"),c.a.createElement(s.a,{title:"Protected",id:"collasible-nav-dropdown"},c.a.createElement(s.a.Item,{exact:!0,as:l.c,to:"/protected"},"Protected"),c.a.createElement(s.a.Item,{as:l.c,to:"/private"},"Private"),c.a.createElement(s.a.Divider,null),c.a.createElement(s.a.Item,{as:l.c,to:"/private/100"},"Private/param"))),c.a.createElement(m.a,null,c.a.createElement(m.a.Link,{as:l.c,to:"/contact"},"Contact")))))}function E(){return c.a.createElement("div",{className:"text-center footer"},"https://github.com/vigneshwaran-chandrasekaran")}var h=a(58),d=a(59),f=a(63),v=a(60),g=a(64),b=a(61),w=Object(u.h)(function(e){var t=e.history;return j.isAuthenticated?c.a.createElement("p",null,"Welcome!"," ",c.a.createElement("button",{className:"btn btn-danger",onClick:function(){j.signout(function(){return t.push("/")})}},"Log out")):c.a.createElement("p",{className:"bg-danger text-white"},"You are not logged in. Go to any one of protected route for login")});function y(e){var t=e.component,a=Object(b.a)(e,["component"]);return c.a.createElement(u.c,Object.assign({},a,{render:function(e){return j.isAuthenticated?c.a.createElement(t,e):c.a.createElement(u.b,{to:{pathname:"/login",state:{from:e.location}}})}}))}var j={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}},O=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={redirectToReferrer:!1},a.login=function(){j.authenticate(function(){a.setState({redirectToReferrer:!0})})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?c.a.createElement(u.b,{to:e}):c.a.createElement("div",null,c.a.createElement("p",null,"You must log in to view the page at ",e.pathname),c.a.createElement("button",{className:"btn btn-success",onClick:this.login},"Log in"))}}]),t}(n.Component);function k(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Home page"))}var x=a(32);function A(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"About page"),c.a.createElement(x.a,{variant:"primary",onClick:function(){console.log({props:e}),e.history.push("/todo")}},"Click here to programmatic navigation to todo page"))}var N=a(17);var C=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement(u.a,{message:"Are you sure you want to leave?"}),c.a.createElement(u.a,{when:!!a,message:"Are you sure you want to leave this page?"}),c.a.createElement(u.a,{when:!!a,message:function(e){return"Are you sure you want to ".concat(e.pathname)}}),c.a.createElement(u.a,{message:function(e){return!!e.pathname.startsWith("/dashboard")||"Are you sure you want to go to ".concat(e.pathname,"?")}}),c.a.createElement("h1",null,"Contact page"),c.a.createElement("p",null,"This page is implemented ",c.a.createElement("strong",null,"Prompt")," concept"),c.a.createElement("p",null,"If you type anything in below textbox and try to navigate any other route(page) except Dashboard page, the Prompt will invoke"),c.a.createElement("input",{value:a,onChange:function(e){r(e.target.value),console.log(!a),console.log(!!a)},placeholder:"Name"}),c.a.createElement("p",null,a))},L=a(27),P=a.n(L),T=a(33);function I(e){var t=e.match;Object(n.useEffect)(function(){console.log("Component did mount")},[]),Object(n.useEffect)(function(){console.log("Id changes"),u()},[t.params.id]),Object(n.useEffect)(function(){console.log("always call")});var a=Object(n.useState)([]),r=Object(N.a)(a,2),o=r[0],l=r[1],u=function(){var e=Object(T.a)(P.a.mark(function e(){var a,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos/".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("h1",null,"Todo page"),c.a.createElement("p",null,t.params.id," - ",o.id," - ",o.title))}function R(e){var t=e.match;Object(n.useEffect)(function(){console.log({match:t}),m()},[]);var a=Object(n.useState)([]),r=Object(N.a)(a,2),o=r[0],i=r[1],m=function(){var e=Object(T.a)(P.a.mark(function e(){var t,a;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"d-flex flex-row justify-content-between"},c.a.createElement("div",null,c.a.createElement("h1",null,"Todos page"),c.a.createElement("hr",null),o.map(function(e){var a=e.id,n=e.title;return c.a.createElement("div",{key:a},c.a.createElement(l.b,{to:"".concat(t.url,"/").concat(a)},a," - ",n))}),c.a.createElement("hr",null)),c.a.createElement("div",null,c.a.createElement(u.c,{exact:!0,path:"".concat(t.path,"/:id"),component:I}),c.a.createElement(u.c,{exact:!0,path:t.path,render:function(){return c.a.createElement("h3",null,"Please select a todo.")}})))}var S=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Common page for multiple routes"),c.a.createElement("p",null,"Array route 1"),c.a.createElement("p",null,"Array route 2"))};function D(e){return Object(n.useEffect)(function(){console.log({props:e})},[]),c.a.createElement("div",null,"Dashboard - ",e.name," ",e.place)}function W(e){var t=e.match;return c.a.createElement("div",null,c.a.createElement("h2",null,"Topics"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"".concat(t.url,"/rendering")},"Rendering with React")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"".concat(t.url,"/components")},"Components")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),c.a.createElement(u.c,{path:"".concat(t.path,"/:topicId"),component:B}),c.a.createElement(u.c,{exact:!0,path:t.path,render:function(){return c.a.createElement("h3",null,"Please select a topic.")}}))}function B(e){var t=e.match;return c.a.createElement("div",null,c.a.createElement("h3",null,t.params.topicId))}function H(){return c.a.createElement("h1",{className:"text-center"},"404 Error")}function J(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Protected"))}function Y(){var e=Object(n.useState)(0),t=Object(N.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("p",null,'On fifth time button click page will direct to dashboard Page using "Redirect"'),a>=5&&c.a.createElement(u.b,{to:"/dashboard"}),c.a.createElement("button",{className:"btn btn-warning",onClick:function(){r(a+1)}},"Click me ",a))}var G=a(62),Q=a.n(G);function V(e){var t=Object(n.useState)(""),a=Object(N.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)(function(){console.log({props:e});var t=Q.a.parse(e.location.search,{ignoreQueryPrefix:!0});console.log({urlParams:t}),t.userName&&o(t.userName)},[]),c.a.createElement("div",null,c.a.createElement("p",null,"Items ww ",e.data?e.data.category:""),c.a.createElement("form",{onSubmit:function(e){console.log("handleSubmit"),e.preventDefault()}},c.a.createElement("label",null,"Name:",c.a.createElement("input",{type:"text",name:"userName",value:r,onChange:function(t){var a=t.target.value;o(a),e.history.push({search:"?userName=".concat(a)})}})),c.a.createElement("div",null,c.a.createElement("input",{className:"btn btn-success",type:"submit",value:"Submit"}))))}a(97);var $={category:"food"};var _=function(){return c.a.createElement(l.a,null,c.a.createElement(p,null),c.a.createElement(w,null),c.a.createElement("div",{className:"container"},c.a.createElement(u.e,null,c.a.createElement(u.c,{path:"/",exact:!0,component:k}),c.a.createElement(u.c,{path:"/about",component:A}),c.a.createElement(u.c,{path:"/todo",component:R}),c.a.createElement(u.c,{path:"/topics",component:W}),c.a.createElement(u.c,{path:"/contact",component:C}),c.a.createElement(u.c,{path:["/common-one","/common-two"],component:S}),c.a.createElement(u.c,{path:"/dashboard",render:function(e){return c.a.createElement(D,Object.assign({},e,{isAuthed:!0,name:"vigneshwaran",place:"chennai"}))}}),c.a.createElement(u.c,{path:"/redirect",component:Y}),c.a.createElement(u.c,{path:"/login",component:O}),c.a.createElement(y,{path:"/protected",component:J}),c.a.createElement(y,{path:"/private/:id?",component:J}),c.a.createElement(u.c,{exact:!0,path:"/items",component:V}),c.a.createElement(u.c,{exact:!0,path:"/items",render:function(){return c.a.createElement("div",null,"List of Items")}}),c.a.createElement(u.c,{exact:!0,path:"/items",render:function(e){return c.a.createElement(V,Object.assign({},e,{data:$}))}}),c.a.createElement(u.c,{children:function(e){return c.a.createElement(V,e)}}),c.a.createElement(u.c,{children:function(){return c.a.createElement(V,null)}}),c.a.createElement(u.c,{component:H}))),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[65,1,2]]]);
//# sourceMappingURL=main.7c455c83.chunk.js.map