(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{11:function(e,t,a){e.exports={tracking:"TrackingEmployees_tracking__1X1zt",list:"TrackingEmployees_list__2SZ-5"}},15:function(e,t,a){e.exports={app:"App_app__hkr-5"}},2:function(e,t,a){e.exports={letters:"Employess_letters__3T2W8",letter_list:"Employess_letter_list__in53o",letter_title:"Employess_letter_title__3VL3h",letter_item:"Employess_letter_item__5YiUc",letter_empty:"Employess_letter_empty__21CXU",item_radio:"Employess_item_radio__3kD-F",item_name:"Employess_item_name__SuQqL",active:"Employess_active__2AHe1"}},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),i=a(8),s=a.n(i),n=a(4),l=(a(27),a(15)),o=a.n(l),u=a(6),m=a(2),d=a.n(m),p=a(1),y=function(e){var t=Object(r.useState)(e.user.active),a=Object(u.a)(t,2),c=a[0],i=a[1];return Object(p.jsxs)("li",{className:d.a.letter_item,children:[Object(p.jsxs)("span",{className:c?"".concat(d.a.item_name," ").concat(d.a.active):d.a.item_name,children:[e.user.firstName," ",e.user.lastName]}),Object(p.jsxs)("div",{className:d.a.item_radio,children:[Object(p.jsx)("input",{label:"active",type:"radio",name:"".concat(e.user.id,"_active"),defaultChecked:e.user.active,onChange:function(){return i(!0),e.addActive({letter:e.letter,idx:e.idx,id:e.user.id,firstName:e.user.firstName,lastName:e.user.lastName,dob:e.user.dob,active:!0})}}),Object(p.jsx)("input",{label:"not active",type:"radio",name:"".concat(e.user.id,"_active"),defaultChecked:!e.user.active,onChange:function(){return i(!1),e.deleteActive({letter:e.letter,idx:e.idx,id:e.user.id,active:!1})}})]})]},e.user.id)},j=fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})),b=a(3),f=a(7),_="SET_EMPLOYEES",h="ADD_ACTIVE",v="DELETE_ACTIVE",g={employees:[],trackingEmployees:[],currentStorage:localStorage.getItem("activeStatus")&&Object(f.a)(new Set(localStorage.getItem("activeStatus").split(",")))},O=function(e){return{type:_,payload:e}},E=function(e){return{type:h,payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return console.log(e.trackingEmployees),Object(b.a)(Object(b.a)({},e),{},{employees:t.payload});case h:return localStorage.setItem("activeStatus",[localStorage.getItem("activeStatus"),t.payload.id]),Object(b.a)(Object(b.a)(Object(b.a)({},e),e.employees[t.payload.letter][t.payload.idx].active=t.payload.active),{},{trackingEmployees:[].concat(Object(f.a)(e.trackingEmployees),[{id:t.payload.id,firstName:t.payload.firstName,lastName:t.payload.lastName,dob:t.payload.dob}]).sort((function(e,t){return e.lastName.localeCompare(t.lastName)}))});case v:return e.currentStorage&&(e.currentStorage=e.currentStorage.filter((function(e){return e!==t.payload.id}))),localStorage.setItem("activeStatus",e.currentStorage),Object(b.a)(Object(b.a)(Object(b.a)({},e),e.employees[t.payload.letter][t.payload.idx].active=t.payload.active),{},{trackingEmployees:e.trackingEmployees.filter((function(e){return e.id!=t.payload.id}))});default:return e}},N=Array.from(Array(26)).map((function(e,t){return t+65})).map((function(e){return String.fromCharCode(e)})),S=j;for(var k=function(e){var t=Object(r.useState)(null),a=Object(u.a)(t,2),c=a[0],i=a[1],s=Object(r.useState)(!1),l=Object(u.a)(s,2),o=l[0],m=l[1],j=Object(n.c)();return Object(r.useEffect)((function(){S.then((function(e){m(!0);var t=N.reduce((function(e,t){return e[t]=[],e}),{});e.forEach((function(e,a){var r=e.firstName.slice(0,1);(null===t||void 0===t?void 0:t[r])&&t[r].push({id:e.id,firstName:e.firstName,lastName:e.lastName,dob:e.dob,active:!!localStorage.getItem("activeStatus")&&localStorage.getItem("activeStatus").includes(e.id)})})),j(O(t))}),(function(e){m(!0),i(e)}))}),[]),c?Object(p.jsxs)("div",{children:["Error: ",c.message]}):o?Object(p.jsx)("div",{className:d.a.letters,children:Object.keys(e.employees).map((function(t){return Object(p.jsxs)("ul",{className:d.a.letter_list,children:[Object(p.jsx)("h3",{className:d.a.letter_title,children:t}),e.employees[t].length?e.employees[t].sort((function(e,t){return e.firstName.localeCompare(t.firstName)})).map((function(a,r){return Object(p.jsx)(y,{user:a,addActive:e.addActive,deleteActive:e.deleteActive,idx:r,letter:t})})):Object(p.jsx)("li",{className:"".concat(d.a.letter_item," ").concat(d.a.letter_empty),children:"No Employees"})]},t)}))}):Object(p.jsx)("div",{children:"Loading..."})},A=a(11),D=a.n(A),C=new Date,w=[],I=["January","February","March","April","May","June","July","August","September","October","November","December"],M=C.getMonth();M<12;M++)w.push(I.splice([M],1,""));var T=w.length;w=[].concat(Object(f.a)(w),I).flat().filter(Boolean);var L=function(e){return Object(p.jsxs)("div",{className:D.a.tracking,children:[Object(p.jsx)("h2",{className:D.a.title,children:"Employees birthday"}),e.trackingEmployees.length?w.map((function(t,a){return Object(p.jsxs)("ul",{className:D.a.list,children:[Object(p.jsx)("h2",{children:t}),e.trackingEmployees.filter((function(e){return I[new Date(e.dob).getMonth()]===I[a-T]})).length?e.trackingEmployees.filter((function(e){return I[new Date(e.dob).getMonth()]===I[a-T]})).map((function(e){return Object(p.jsxs)("li",{children:[new Date(e.dob).getDate()," ",I[new Date(e.dob).getMonth()]," - ",e.firstName," ",e.lastName," "]},e.id)})):Object(p.jsx)("li",{children:"Employees List is empty"})]},t)})):Object(p.jsx)("h2",{children:"Employees List is empty"})]})};var J=function(e){return{employees:e.employees,trackingEmployees:e.trackingEmployees}},V=Object(n.b)(J,{setEmployees:O,addActive:E,deleteActive:function(e){return{type:v,payload:e}}})(k),B=Object(n.b)(J,{toggleActive:E})(L),F=function(){return Object(p.jsxs)("div",{className:o.a.app,children:[Object(p.jsx)(V,{}),Object(p.jsx)(B,{})]})},U=a(10),W=a(16),X=Object(U.createStore)(x,Object(W.composeWithDevTools)(Object(U.applyMiddleware)()));s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(n.a,{store:X,children:Object(p.jsx)(F,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.922a861d.chunk.js.map