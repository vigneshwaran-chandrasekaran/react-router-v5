(window["webpackJsonpreact-router-v5"]=window["webpackJsonpreact-router-v5"]||[]).push([[0],{59:function(e,t,a){e.exports=a(76)},64:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),o=a.n(r),l=(a(64),a(4)),u=a(9),i=a(80),m=a(81),s=a(79);function p(){return c.a.createElement("div",null,c.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",bg:"info",variant:"dark"},c.a.createElement(i.a.Brand,{as:l.c,to:"/"},"React Router V5"),c.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(m.a,{className:"mr-auto"},c.a.createElement(m.a.Link,{exact:!0,as:l.c,to:"/"},"Home"),c.a.createElement(m.a.Link,{as:l.c,to:"/about"},"About"),c.a.createElement(m.a.Link,{as:l.c,to:"/todo"},"Todo"),c.a.createElement(m.a.Link,{as:l.c,to:"/common-one"},"Array Route 1"),c.a.createElement(m.a.Link,{as:l.c,to:"/common-two"},"Array Route 2"),c.a.createElement(m.a.Link,{as:l.c,to:"/topics"},"Topics"),c.a.createElement(m.a.Link,{as:l.c,to:"/dashboard"},"Dashboard"),c.a.createElement(m.a.Link,{as:l.c,to:"/redirect"},"Redirect"),c.a.createElement(m.a.Link,{as:l.c,to:"/items"},"Items"),c.a.createElement(s.a,{title:"Protected",id:"collasible-nav-dropdown"},c.a.createElement(s.a.Item,{exact:!0,as:l.c,to:"/protected"},"Protected"),c.a.createElement(s.a.Item,{as:l.c,to:"/private"},"Private"),c.a.createElement(s.a.Divider,null),c.a.createElement(s.a.Item,{as:l.c,to:"/private/100"},"Private/param"))),c.a.createElement(m.a,null,c.a.createElement(m.a.Link,{as:l.c,to:"/contact"},"Contact")))))}function E(){return c.a.createElement("div",{className:"text-center footer"},"https://github.com/vigneshwaran-chandrasekaran")}var h=a(51),d=a(52),f=a(58),v=a(54),b=a(57),g=a(55),j=Object(u.k)(function(e){var t=e.history;return y.isAuthenticated?c.a.createElement("p",null,"Welcome!"," ",c.a.createElement("button",{className:"btn btn-danger",onClick:function(){y.signout(function(){return t.push("/")})}},"Log out")):c.a.createElement("p",{className:"bg-danger text-white"},"You are not logged in. Go to any one of protected route for login")});function O(e){var t=e.component,a=Object(g.a)(e,["component"]);return c.a.createElement(u.c,Object.assign({},a,{render:function(e){return y.isAuthenticated?c.a.createElement(t,e):c.a.createElement(u.b,{to:{pathname:"/login",state:{from:e.location}}})}}))}var y={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}},w=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={redirectToReferrer:!1},a.login=function(){y.authenticate(function(){a.setState({redirectToReferrer:!0})})},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?c.a.createElement(u.b,{to:e}):c.a.createElement("div",null,c.a.createElement("p",null,"You must log in to view the page at ",e.pathname),c.a.createElement("button",{className:"btn btn-success",onClick:this.login},"Log in"))}}]),t}(n.Component);function k(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Home pages"),c.a.createElement("p",null,Object({NODE_ENV:"production",PUBLIC_URL:"/react-router-v5"}).REACT_APP_NAME))}var x=a(31);function A(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"About page"),c.a.createElement(x.a,{variant:"primary",onClick:function(){console.log({props:e}),e.history.push("/todo")}},"Click here to programmatic navigation to todo page"))}var N=a(14);var C=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement(u.a,{message:"Are you sure you want to leave?"}),c.a.createElement(u.a,{when:!!a,message:"Are you sure you want to leave this page?"}),c.a.createElement(u.a,{when:!!a,message:function(e){return"Are you sure you want to ".concat(e.pathname)}}),c.a.createElement(u.a,{message:function(e){return!!e.pathname.startsWith("/dashboard")||"Are you sure you want to go to ".concat(e.pathname,"?")}}),c.a.createElement("h1",null,"Contact page"),c.a.createElement("p",null,"This page is implemented ",c.a.createElement("strong",null,"Prompt")," concept"),c.a.createElement("p",null,"If you type anything in below textbox and try to navigate any other route(page) except Dashboard page, the Prompt will invoke"),c.a.createElement("input",{value:a,onChange:function(e){r(e.target.value),console.log(!a),console.log(!!a)},placeholder:"Name"}),c.a.createElement("p",null,a))},P=a(21),L=a.n(P),R=a(32);function T(e){var t=e.match,a=Object(u.i)().id,r=Object(u.j)(),o=r.path,l=r.url;console.log({path:o}),console.log({url:l}),Object(n.useEffect)(function(){console.log("Component did mount")},[]),Object(n.useEffect)(function(){console.log("Id changes"),E()},[t.params.id]),Object(n.useEffect)(function(){console.log("always call")});var i=Object(n.useState)([]),m=Object(N.a)(i,2),s=m[0],p=m[1],E=function(){var e=Object(R.a)(L.a.mark(function e(){var a,n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos/".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,p(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("h1",null,"Todo page"),c.a.createElement("p",null,t.params.id," - ",s.id," - ",s.title),c.a.createElement("p",null,a))}function I(e){var t=e.match,a=Object(u.j)(),r=a.path,o=a.url;console.log({path:r}),console.log({url:o}),Object(n.useEffect)(function(){console.log({match:t}),E()},[]);var i=Object(n.useState)([]),m=Object(N.a)(i,2),s=m[0],p=m[1],E=function(){var e=Object(R.a)(L.a.mark(function e(){var t,a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,p(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"d-flex flex-row justify-content-between"},c.a.createElement("div",null,c.a.createElement("h1",null,"Todos page"),c.a.createElement("hr",null),s.map(function(e){var a=e.id,n=e.title;return c.a.createElement("div",{key:a},c.a.createElement(l.b,{to:"".concat(t.url,"/").concat(a)},a," - ",n),c.a.createElement("br",null),c.a.createElement(l.b,{to:"".concat(o,"/").concat(a)},a," - ",n))}),c.a.createElement("hr",null)),c.a.createElement("div",null,c.a.createElement(u.c,{exact:!0,path:"".concat(t.path,"/:id"),component:T}),c.a.createElement(u.c,{exact:!0,path:"".concat(r,"/:id"),component:T}),c.a.createElement(u.c,{exact:!0,path:t.path,render:function(){return c.a.createElement("h3",null,"Please select a todo.")}})))}function S(e){var t=e.label,a=e.to,n=e.activeOnlyWhenExact,r=Object(u.j)({path:a,exact:n});return console.log("match",r),c.a.createElement("div",{className:r?"active":""},r&&"> ",c.a.createElement(l.b,{to:a},t))}var D=function(e){var t=Object(u.h)();console.log("location",t),console.log("props",e);var a=Object(u.j)(),n=a.path,r=a.url;return console.log({path:n}),console.log({url:r}),c.a.createElement("div",null,c.a.createElement("h1",null,"Common page for multiple routes"),c.a.createElement("p",null,"Array route 1"),c.a.createElement("p",null,"Array route 2"),c.a.createElement("p",null,t.pathname),c.a.createElement("div",null,c.a.createElement(S,{activeOnlyWhenExact:!0,to:"".concat(r,"/custom-link-1"),label:"custom-link-1"}),c.a.createElement(S,{to:"".concat(r,"/custom-link-2"),label:"custom-link-2"})),c.a.createElement("div",null,c.a.createElement(u.c,{exact:!0,path:"".concat(n,"/:id"),component:T}),c.a.createElement(u.c,{exact:!0,path:n,render:function(){return c.a.createElement("h3",null,"Please select custom link")}})))};function W(e){return Object(n.useEffect)(function(){console.log({props:e})},[]),c.a.createElement("div",null,"Dashboard - ",e.name," ",e.place)}function _(e){var t=e.match;return c.a.createElement("div",null,c.a.createElement("h2",null,"Topics"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"".concat(t.url,"/rendering")},"Rendering with React")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"".concat(t.url,"/components")},"Components")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),c.a.createElement(u.c,{path:"".concat(t.path,"/:topicId"),component:B}),c.a.createElement(u.c,{exact:!0,path:t.path,render:function(){return c.a.createElement("h3",null,"Please select a topic.")}}))}function B(e){var t=e.match;return c.a.createElement("div",null,c.a.createElement("h3",null,t.params.topicId))}function H(){return c.a.createElement("h1",{className:"text-center"},"404 Error")}function J(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Protected"))}function U(){var e=Object(n.useState)(0),t=Object(N.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("p",null,'On fifth time button click page will direct to dashboard Page using "Redirect"'),a>=5&&c.a.createElement(u.b,{to:"/dashboard"}),c.a.createElement("button",{className:"btn btn-warning",onClick:function(){r(a+1)}},"Click me ",a))}var V=a(56),Y=a.n(V);function G(e){var t=Object(n.useState)(""),a=Object(N.a)(t,2),r=a[0],o=a[1],l=Object(u.h)(),i=Object(u.j)();return console.log("location",l),console.log("match",i),Object(n.useEffect)(function(){console.log({props:e});var t=Y.a.parse(e.location.search,{ignoreQueryPrefix:!0});console.log({urlParams:t}),t.userName&&o(t.userName)},[]),c.a.createElement("div",null,c.a.createElement("p",null,"Items ww ",e.data?e.data.category:""),c.a.createElement("form",{onSubmit:function(e){console.log("handleSubmit"),e.preventDefault()}},c.a.createElement("label",null,"Name:",c.a.createElement("input",{type:"text",name:"userName",value:r,onChange:function(t){var a=t.target.value;o(a),e.history.push({search:"?userName=".concat(a)})}})),c.a.createElement("div",null,c.a.createElement("input",{className:"btn btn-success",type:"submit",value:"Submit"}))))}a(75);var M={category:"food"};var Q=function(){return c.a.createElement(l.a,null,c.a.createElement(p,null),c.a.createElement(j,null),c.a.createElement("div",{className:"container"},c.a.createElement(u.e,null,c.a.createElement(u.c,{path:"/",exact:!0,component:k}),c.a.createElement(u.c,{path:"/about",component:A}),c.a.createElement(u.c,{path:"/todo",component:I}),c.a.createElement(u.c,{path:"/topics",component:_}),c.a.createElement(u.c,{path:"/contact",component:C}),c.a.createElement(u.c,{path:["/common-one","/common-two"],component:D}),c.a.createElement(u.c,{path:"/dashboard",render:function(e){return c.a.createElement(W,Object.assign({},e,{isAuthed:!0,name:"vigneshwaran",place:"chennai"}))}}),c.a.createElement(u.c,{path:"/redirect",component:U}),c.a.createElement(u.c,{path:"/login",component:w}),c.a.createElement(O,{path:"/protected",component:J}),c.a.createElement(O,{path:"/private/:id?",component:J}),c.a.createElement(u.c,{exact:!0,path:"/items",component:G}),c.a.createElement(u.c,{exact:!0,path:"/items",render:function(){return c.a.createElement("div",null,"List of Items")}}),c.a.createElement(u.c,{exact:!0,path:"/items",render:function(e){return c.a.createElement(G,Object.assign({},e,{data:M}))}}),c.a.createElement(u.c,{children:function(e){return c.a.createElement(G,e)}}),c.a.createElement(u.c,{children:function(){return c.a.createElement(G,null)}}),c.a.createElement(u.c,{component:H}))),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[59,1,2]]]);
//# sourceMappingURL=main.aec05f85.chunk.js.map