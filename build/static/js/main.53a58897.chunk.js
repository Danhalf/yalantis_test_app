(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{14:function(e,t,a){e.exports={tracking:"TrackingEmployees_tracking__1Rwgm",list:"TrackingEmployees_list__2549M"}},18:function(e,t,a){e.exports={app:"App_app__2sS-N"}},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),i=a(12),n=a.n(i),s=a(8),l=a(20),o=a(1),u=(a(31),a(18)),d=a.n(u),m=a(6),p=a(5),j=a.n(p),b=a(2),y=function(e){var t=Object(r.useState)(e.user.active),a=Object(m.a)(t,2),c=a[0],i=a[1];return Object(b.jsxs)("li",{className:j.a.letter_item,children:[Object(b.jsxs)("span",{className:c?"".concat(j.a.item_name," ").concat(j.a.active):j.a.item_name,children:[e.user.firstName," ",e.user.lastName]}),Object(b.jsxs)("div",{className:j.a.item_radio,children:[Object(b.jsx)("input",{label:"active",type:"radio",name:"".concat(e.user.id,"_active"),defaultChecked:e.user.active,onChange:function(){return i(!0),e.addActive({letter:e.letter,idx:e.idx,id:e.user.id,firstName:e.user.firstName,lastName:e.user.lastName,dob:e.user.dob,active:!0})}}),Object(b.jsx)("input",{label:"not active",type:"radio",name:"".concat(e.user.id,"_active"),defaultChecked:!e.user.active,onChange:function(){return i(!1),e.deleteActive({letter:e.letter,idx:e.idx,id:e.user.id,active:!1})}})]})]},e.user.id)},f=fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})),v=a(7),h=a(9),O="SET_EMPLOYEES",_="ADD_ACTIVE",g="DELETE_ACTIVE",N={employees:[],trackingEmployees:[],currentStorage:localStorage.getItem("activeStatus")&&Object(h.a)(new Set(localStorage.getItem("activeStatus").split(",")))},x=function(e){return{type:O,payload:e}},E=function(e){return{type:_,payload:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(v.a)(Object(v.a)({},e),{},{employees:t.payload});case _:return localStorage.setItem("activeStatus",[localStorage.getItem("activeStatus"),t.payload.id]),Object(v.a)(Object(v.a)(Object(v.a)({},e),e.employees[t.payload.letter][t.payload.idx].active=t.payload.active),{},{trackingEmployees:[].concat(Object(h.a)(e.trackingEmployees),[{id:t.payload.id,firstName:t.payload.firstName,lastName:t.payload.lastName,dob:t.payload.dob}]).sort((function(e,t){return e.lastName.localeCompare(t.lastName)}))});case g:return e.currentStorage&&(e.currentStorage=e.currentStorage.filter((function(e){return e!==t.payload.id}))),localStorage.setItem("activeStatus",e.currentStorage),Object(v.a)(Object(v.a)(Object(v.a)({},e),e.employees[t.payload.letter][t.payload.idx].active=t.payload.active),{},{trackingEmployees:e.trackingEmployees.filter((function(e){return e.id!==t.payload.id}))});default:return e}},k=Array.from(Array(26)).map((function(e,t){return t+65})).map((function(e){return String.fromCharCode(e)})),A=f;for(var w=function(e){var t=Object(r.useState)(null),a=Object(m.a)(t,2),c=a[0],i=a[1],n=Object(r.useState)(!1),l=Object(m.a)(n,2),o=l[0],u=l[1],d=Object(s.c)();return Object(r.useEffect)((function(){A.then((function(e){u(!0);var t=k.reduce((function(e,t){return e[t]=[],e}),{});e.forEach((function(e,a){var r=e.firstName.slice(0,1);(null===t||void 0===t?void 0:t[r])&&t[r].push({id:e.id,firstName:e.firstName,lastName:e.lastName,dob:e.dob,active:!!localStorage.getItem("activeStatus")&&localStorage.getItem("activeStatus").includes(e.id)})})),d(x(t))}),(function(e){u(!0),i(e)}))}),[]),c?Object(b.jsxs)("div",{children:["Error: ",c.message]}):o?Object(b.jsx)("div",{className:j.a.letters,children:Object.keys(e.employees).map((function(t){return Object(b.jsxs)("ul",{className:j.a.letter_list,children:[Object(b.jsx)("h3",{className:j.a.letter_title,children:t}),e.employees[t].length?e.employees[t].sort((function(e,t){return e.firstName.localeCompare(t.firstName)})).map((function(a,r){return Object(b.jsx)(y,{user:a,addActive:e.addActive,deleteActive:e.deleteActive,idx:r,letter:t},"".concat(r).concat(t))})):Object(b.jsx)("li",{className:"".concat(j.a.letter_item," ").concat(j.a.letter_empty),children:"No Employees"})]},t)}))}):Object(b.jsx)("div",{children:"Loading..."})},C=a(14),D=a.n(C),I=new Date,M=[],T=["January","February","March","April","May","June","July","August","September","October","November","December"],J=I.getMonth();J<12;J++)M.push(T.splice([J],1,""));var L=M.length;M=[].concat(Object(h.a)(M),T).flat().filter(Boolean);var B=function(e){var t=e.trackingEmployees?Object(h.a)(function e(t){if(Array.isArray(t))return t.filter((function(e){return!0===e.active})).reduce((function(e,t){return[].concat(Object(h.a)(e),[{id:t.id,firstName:t.firstName,lastName:t.lastName,dob:t.dob}])}),[]);for(var a=[],r=0,c=Object.values(t);r<c.length;r++){var i=c[r];a.push(e(i))}return a}(e.employees)).filter((function(e){return 0!==e.length})).flat(1):e.trackingEmployees;return Object(b.jsxs)("div",{className:D.a.tracking,children:[Object(b.jsx)("h2",{className:D.a.title,children:"Employees birthday"}),t.length>0?M.map((function(e,a){return Object(b.jsxs)("ul",{className:D.a.list,children:[Object(b.jsx)("h2",{children:e}),t.filter((function(e){return T[new Date(e.dob).getMonth()]===T[a-L]})).length?t.filter((function(e){return T[new Date(e.dob).getMonth()]===T[a-L]})).map((function(e){return Object(b.jsxs)("li",{children:[new Date(e.dob).getDate()," ",T[new Date(e.dob).getMonth()]," -"," ",e.firstName," ",e.lastName," "]},e.id)})):Object(b.jsx)("li",{children:""})]},e)})):Object(b.jsx)("h2",{children:"Employees List is empty"})]})};var R=function(e){return{employees:e.employees,trackingEmployees:e.trackingEmployees}},V=Object(s.b)(R,{setEmployees:x,addActive:E,deleteActive:function(e){return{type:g,payload:e}}})(w),q=Object(s.b)(R,{toggleActive:E})(B),F=function(){return Object(b.jsxs)("div",{className:d.a.app,children:[Object(b.jsx)(V,{}),Object(b.jsx)(q,{})]})},H=a(13),P=a(19),W=Object(H.createStore)(S,Object(P.composeWithDevTools)(Object(H.applyMiddleware)()));n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(s.a,{store:W,children:Object(b.jsx)(l.a,{children:Object(b.jsx)(o.c,{children:Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(F,{})})})})})}),document.getElementById("root"))},5:function(e,t,a){e.exports={letters:"Employess_letters__3iB4o",letter_list:"Employess_letter_list__1wH8j",letter_title:"Employess_letter_title__2S8CJ",letter_item:"Employess_letter_item__14Td2",letter_empty:"Employess_letter_empty__2rkE3",item_radio:"Employess_item_radio__1bA9-",item_name:"Employess_item_name__1jXqI",active:"Employess_active__1bf-R"}}},[[33,1,2]]]);
//# sourceMappingURL=main.53a58897.chunk.js.map