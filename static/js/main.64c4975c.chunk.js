(this.webpackJsonpemployee_tracker=this.webpackJsonpemployee_tracker||[]).push([[0],{17:function(e,t,a){e.exports=a(46)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l);a(22),a(23);var c=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};a(24);var s=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h2",null,"Employee Directory"))},m=a(12),u=a(13),i=a(16),p=a(15);a(25);var d=function(e){return r.a.createElement("div",{id:"searchArea"},r.a.createElement("input",{type:"text",placeholder:"search",onChange:function(t){return e.employeeSearch(t)}}))};a(26);var E=function(e){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Image"),r.a.createElement("th",{onClick:e.sortLastName},"Name"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"DOB"))),r.a.createElement("tbody",null,e.employees.map((function(e){return r.a.createElement("tr",{key:e.id.name+"-"+e.id.value},r.a.createElement("td",null,e.id.name+"-"+e.id.value),r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:"employee"})),r.a.createElement("td",null,e.name.first+" "+e.name.last),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob.date.slice(0,10)))}))))},h=a(14),f=a.n(h),y=function(){return f.a.get("https://randomuser.me/api/?results=20&inc=id,name,email,dob,phone,picture&nat=us")},v=(a(44),function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],sortStatus:"D",filteredEmployees:[]},e.employeeSearch=function(t){var a=t.target.value,n=e.state.employees.filter((function(e){return e.name.last.toLowerCase().includes(a.toLowerCase())}));e.setState({filteredEmployees:n})},e.sortLastName=function(){if("D"===e.state.sortStatus){var t=e.state.filteredEmployees.sort((function(e,t){return e.name.last>t.name.last?1:-1}));e.setState({filteredEmployees:t,sortStatus:"A"})}else{var a=e.state.employees.sort((function(e,t){return e.name.last<t.lname.last?1:-1}));e.setState({filteredEmployees:a,sortStatus:"D"})}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{employeeSearch:this.employeeSearch}),r.a.createElement(E,{employees:this.state.filteredEmployees,sortLastName:this.sortLastName}))}}]),a}(n.Component));a(45);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c,null,r.a.createElement(s,null),r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.64c4975c.chunk.js.map