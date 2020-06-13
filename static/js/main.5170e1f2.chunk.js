(this["webpackJsonp2020-06-03_template_material-ui_task-manager"]=this["webpackJsonp2020-06-03_template_material-ui_task-manager"]||[]).push([[0],{163:function(e,t,n){e.exports=n(214)},168:function(e,t,n){},169:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"authAPI",(function(){return p})),n.d(a,"usersAPI",(function(){return f})),n.d(a,"projectsAPI",(function(){return h})),n.d(a,"tasksAPI",(function(){return E}));var r=n(0),c=n.n(r),s=n(12),i=n.n(s),o=(n(168),n(18)),l=n(24),u=(n(169),n(125)),d=function(e,t){return t?t.map((function(t){return"".concat(e,"=").concat(t,"&")})).toString().replace(/,/g,""):""},m=n.n(u).a.create({withCredentials:!0,baseURL:"http://my-json-server.typicode.com/genekomarov/task-manager_mui",headers:{}}),p={auth:function(e,t){return m.get("/authData?email=".concat(e,"&password=").concat(t)).then((function(e){return e.data}))}},f={getUsersByIds:function(e){return e.length?m.get("/users?".concat(d("id",e))).then((function(e){return e.data})):[]},getUserIdsByProjectIds:function(e){return e.length?m.get("/projects-to-users?".concat(d("projectId",e))).then((function(e){return e.data})):[]},addNewUser:function(){return console.error("method 'addNewUser' is not implemented")},changeUser:function(){return console.error("method 'changeUser' is not implemented")},deleteUser:function(){return console.error("method 'deleteUser' is not implemented")}},h={getProjectsByIds:function(e){return e.length?m.get("/projects?".concat(d("id",e))).then((function(e){return e.data})):[]},getProjectIdsByUserIds:function(e){return e.length?m.get("/projects-to-users?".concat(d("userId",e))).then((function(e){return e.data})):[]},addNewProject:function(){return console.error("method 'addNewProject' is not implemented")},changeProject:function(){return console.error("method 'changeProject' is not implemented")},deleteProject:function(){return console.error("method 'deleteProject' is not implemented")}},E={getTasksByProjectOrUserIds:function(e,t){return e||t?m.get("/tasks?".concat(d("project",e)).concat(d("author",t))).then((function(e){return e.data})):[]},addNewTask:function(e){return m.post("/tasks",e).then((function(e){return e.data}))},changeTask:function(e,t,n){return m.patch("/tasks/".concat(e),{title:t,isDone:n}).then((function(e){return e.data}))},deleteTask:function(e){return m.delete("/tasks/".concat(e)).then((function(e){return e.data}))}},g=n(49),b=n(126),j=n(60),O=n(6),I={clientSideData:{users:{items:[],deleted:[]},authData:{items:[],deleted:[]},projectsToUsers:{items:[],deleted:[]},projects:{items:[],deleted:[]},tasks:{items:[],deleted:[]}}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ID_TO_DELETED":return Object(O.a)(Object(O.a)({},e),{},{clientSideData:Object(O.a)(Object(O.a)({},e.clientSideData),{},Object(l.a)({},t.tableName,Object(O.a)(Object(O.a)({},e.clientSideData[t.tableName]),{},{deleted:[].concat(Object(j.a)(e.clientSideData[t.tableName].deleted),[t.itemId])})))});case"ADD_NEW_ITEM":return Object(O.a)(Object(O.a)({},e),{},{clientSideData:Object(O.a)(Object(O.a)({},e.clientSideData),{},Object(l.a)({},t.tableName,Object(O.a)(Object(O.a)({},e.clientSideData[t.tableName]),{},{items:[].concat(Object(j.a)(e.clientSideData[t.tableName].items),[t.item])})))});case"DELETE_ITEM":return Object(O.a)(Object(O.a)({},e),{},{clientSideData:Object(O.a)(Object(O.a)({},e.clientSideData),{},Object(l.a)({},t.tableName,Object(O.a)(Object(O.a)({},e.clientSideData[t.tableName]),{},{items:Object(j.a)(e.clientSideData[t.tableName].items).filter((function(e){return e.id!==t.itemId}))})))});default:return e}},k=n(10),y=n.n(k),w=n(16),S=n(127),P=function e(){Object(S.a)(this,e),this.message=void 0,this.message="\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c"},T={id:null,email:null,nickname:null,isAuth:!1},N=function(e,t,n,a){return{type:"auth/SET_USER_DATA",id:e,email:t,nickname:n,isAuth:a}},_=function(e,t){return function(){var n=Object(w.a)(y.a.mark((function n(a){var r,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.auth(e,t);case 3:if(0!==(r=n.sent).length){n.next=6;break}throw new P;case 6:return n.next=8,f.getUsersByIds([r[0].id]);case 8:if(c=n.sent,0!==r.length){n.next=11;break}throw new P;case 11:a(N(r[0].id,r[0].email,c[0].nickname,!0)),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),alert(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()},x=function(){return function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(N(null,null,null,!1));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(O.a)(Object(O.a)({},e),{},{id:t.id,email:t.email,nickname:t.nickname,isAuth:t.isAuth});default:return e}},D={projects:[],isFetching:!1,selectedProjectId:null},C=function(e){return{type:"projects/SET_PROJECTS",projects:e,selectedProjectId:e.length>0?e[0].id:null}},U=function(e){return{type:"projects/SET_FETCHING",isFetching:e}},A=function(e){return{type:"projects/SET_SELECTED_PROJECT_ID",selectedProjectId:e}},R=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){var a,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getProjectIdsByUserIds(e);case 3:return a=t.sent,t.next=6,h.getProjectsByIds(a.map((function(e){return e.projectId})));case 6:r=t.sent,n(C(r)),n(U(!1)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),alert(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"projects/SET_PROJECTS":return Object(O.a)(Object(O.a)({},e),{},{projects:t.projects,selectedProjectId:t.selectedProjectId});case"projects/SET_FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"projects/SET_SELECTED_PROJECT_ID":return Object(O.a)(Object(O.a)({},e),{},{selectedProjectId:t.selectedProjectId});default:return e}},L={users:[],isFetching:!1,selectedUserId:null},B=function(e){return{type:"users/SET_USERS",users:e}},W=function(e){return{type:"users/SET_FETCHING",isFetching:e}},G=function(e){return{type:"users/SET_SELECTED_USER_ID",selectedUserId:e}},M=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){var a,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(W(!0)),t.next=4,f.getUserIdsByProjectIds(e);case 4:return a=t.sent,t.next=7,f.getUsersByIds(a.map((function(e){return e.userId})));case 7:r=t.sent,n(B(r)),n(W(!1)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},H=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(G(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/SET_USERS":return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case"users/SET_FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"users/SET_SELECTED_USER_ID":return Object(O.a)(Object(O.a)({},e),{},{selectedUserId:t.selectedUserId});default:return e}},Z={tasks:[],isFetching:!1,filter:{userIds:[],status:null,content:""},sort:{}},V=function(e){return{type:"tasks/SET_TASKS",tasks:e}},K=function(e){return{type:"tasks/SET_FETCHING",isFetching:e}},X=function(e){return{type:"tasks/SET_FILTER",filter:e}},$=function(e,t){return function(){var n=Object(w.a)(y.a.mark((function n(a){var r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.getTasksByProjectOrUserIds(e,t);case 3:r=n.sent,a(V(r)),a(X({userIds:[],status:null,content:""})),a(K(!1)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),alert(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"tasks/SET_TASKS":return Object(O.a)(Object(O.a)({},e),{},{tasks:t.tasks});case"tasks/SET_FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"tasks/SET_FILTER":return Object(O.a)(Object(O.a)({},e),{},{filter:t.filter});default:return e}},Q={isInitialized:!1,initializationInProgress:!1},Y=function(e){return{type:"app/SET_INITIALIZED",isInitialized:e}},ee=function(e){return{type:"app/SET_INITIALIZATION_IN_PROGRESS",inProgress:e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET_INITIALIZED":return Object(O.a)(Object(O.a)({},e),{},{isInitialized:t.isInitialized});case"app/SET_INITIALIZATION_IN_PROGRESS":return Object(O.a)(Object(O.a)({},e),{},{initializationInProgress:t.inProgress});default:return e}},ne=Object(g.c)({api:v,auth:F,projects:z,users:J,tasks:q,app:te}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,re=Object(g.e)(ne,ae(Object(g.a)(b.a))),ce=1e3,se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce;return e!==ce&&(ce=e),ce++},ie=n(251),oe=n(253),le=n(15),ue=n(271),de=n(270),me=n(267),pe=n(280),fe=n(274),he=n(262),Ee=n(272),ge=n(145),be=n.n(ge),je=n(259),Oe=n(258),Ie=n(94),ve=n.n(Ie),ke=n(217),ye=n(254),we=n(255),Se=n(257),Pe=n(54),Te=n.n(Pe),Ne=n(55),_e=n.n(Ne),xe=n(132),Fe=n.n(xe),De=n(134),Ce=n.n(De),Ue=n(256),Ae=n(35),Re=n(133),ze=n.n(Re),Le=Object(ie.a)((function(e){return Object(oe.a)({root:{display:"flex",flexDirection:"column"},progress:{alignSelf:"center",margin:e.spacing(2)},nested:{paddingLeft:e.spacing(4)}})})),Be={getProjects:R,setFetching:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(U(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setProjects:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(C(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setSelectedProjectId:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(A(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setSelectedUserId:H},We=Object(Ae.b)((function(e){return{isFetching:e.projects.isFetching,isAuth:e.auth.isAuth,projects:e.projects.projects,myId:e.auth.id,selectedProjectId:e.projects.selectedProjectId,initializationInProgress:e.app.initializationInProgress,isInitialized:e.app.isInitialized}}),Be)((function(e){Object(r.useEffect)((function(){e.initializationInProgress&&e.setFetching(!0)}),[e.initializationInProgress,e.isAuth]),Object(r.useEffect)((function(){null!==e.myId?e.getProjects([e.myId]):e.setProjects([])}),[e.myId]);var t=Le(),n=c.a.useState(!0),a=Object(o.a)(n,2),s=a[0],i=a[1];return c.a.createElement("div",{className:t.root},c.a.createElement(ke.a,{button:!0,onClick:function(){i(!s)}},c.a.createElement(ye.a,null,c.a.createElement(Fe.a,null)),c.a.createElement(we.a,{primary:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",primaryTypographyProps:{variant:"body1"}}),s?c.a.createElement(Te.a,null):c.a.createElement(_e.a,null)),e.isFetching&&e.isAuth?c.a.createElement(Ue.a,{className:t.progress}):c.a.createElement(Se.a,{in:s,timeout:"auto",unmountOnExit:!0},e.isAuth&&e.projects.map((function(n){return c.a.createElement(Oe.a,{component:"div",disablePadding:!0,key:n.id},c.a.createElement(ke.a,{button:!0,className:t.nested,onClick:function(){return t=n.id,e.setSelectedProjectId(t),void e.setSelectedUserId(null);var t}},c.a.createElement(ye.a,null,n.id===e.selectedProjectId?c.a.createElement(ze.a,null):c.a.createElement(Ce.a,null)),c.a.createElement(we.a,{primary:n.projectName})))}))))})),Ge=n(135),Me=n.n(Ge),He=n(80),Je=n.n(He),Ze=n(137),Ve=n.n(Ze),Ke=n(136),Xe=n.n(Ke),$e=Object(ie.a)((function(e){return Object(oe.a)({root:{display:"flex",flexDirection:"column"},progress:{alignSelf:"center",margin:e.spacing(2)},nested:{paddingLeft:e.spacing(4)}})})),qe={setFetching:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(W(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:M,setSelectedUserId:H,setFilter:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(X(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},Qe=Object(Ae.b)((function(e){return{isFetching:e.users.isFetching,isAuth:e.auth.isAuth,projectsIsFetching:e.projects.isFetching,selectedProjectId:e.projects.selectedProjectId,users:e.users.users,selectedUserId:e.users.selectedUserId,tasks:e.tasks.tasks}}),qe)((function(e){Object(r.useEffect)((function(){e.projectsIsFetching&&e.setFetching(!0)}),[e.projectsIsFetching]),Object(r.useEffect)((function(){null!==e.selectedProjectId&&e.getUsers([e.selectedProjectId])}),[e.selectedProjectId]);var t=$e(),n=c.a.useState(!0),a=Object(o.a)(n,2),s=a[0],i=a[1];return c.a.createElement("div",{className:t.root},c.a.createElement(ke.a,{button:!0,onClick:function(){i(!s)}},c.a.createElement(ye.a,null,c.a.createElement(Me.a,null)),c.a.createElement(we.a,{primary:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430",primaryTypographyProps:{variant:"body1"}}),s?c.a.createElement(Te.a,null):c.a.createElement(_e.a,null)),e.isFetching&&e.isAuth?c.a.createElement(Je.a,{className:t.progress}):c.a.createElement(Se.a,{in:s,timeout:"auto",unmountOnExit:!0},e.isAuth&&e.users.map((function(n){return c.a.createElement(Oe.a,{component:"div",disablePadding:!0,key:n.id},c.a.createElement(ke.a,{button:!0,className:t.nested,onClick:function(){return t=n.id,e.setSelectedUserId(t),void e.setFilter({userIds:[t],status:null,content:""});var t}},c.a.createElement(ye.a,null,n.id===e.selectedUserId?c.a.createElement(Xe.a,null):c.a.createElement(Ve.a,null)),c.a.createElement(we.a,{primary:"".concat(n.nickname," (").concat(e.tasks.filter((function(e){return e.author===n.id})).length,")")})))}))))})),Ye=Object(ie.a)((function(e){return Object(oe.a)({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},verticalSpacing:{display:"flex",alignItems:"center",padding:e.spacing(2,1),justifyContent:"flex-end"}})})),et=function(){var e=Ye();return c.a.createElement(Oe.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:c.a.createElement(je.a,{component:"div",id:"nested-list-subheader"},"\u041c\u0435\u043d\u044e"),className:e.root},c.a.createElement(ve.a,null),c.a.createElement(We,null),c.a.createElement("div",{className:e.verticalSpacing}),c.a.createElement(Qe,null),c.a.createElement(ve.a,null))},tt=n(68),nt=n(261),at=n(146),rt=n(95),ct=n.n(rt),st=n(138),it=n.n(st),ot=Object(ie.a)((function(e){return Object(oe.a)({grow:{flexGrow:1},title:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})})),lt=function(){var e=ot(),t=c.a.useState(null),n=Object(o.a)(t,2),a=n[0],r=n[1],s=c.a.useState(null),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Boolean(a),m=Boolean(l),p=function(e){r(e.currentTarget)},f=function(){u(null)},h=function(){r(null),f()},E="primary-search-account-menu",g=c.a.createElement(at.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:h},c.a.createElement(nt.a,{onClick:h},"\u0412\u044b\u0439\u0442\u0438")),b=c.a.createElement(at.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:f},c.a.createElement(nt.a,{onClick:p},c.a.createElement(he.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},c.a.createElement(ct.a,null)),c.a.createElement("p",null,"Profile")));return c.a.createElement(c.a.Fragment,null,c.a.createElement(tt.a,{className:e.title,variant:"h6",noWrap:!0},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0437\u0430\u0434\u0430\u0447"),c.a.createElement("div",{className:e.grow}),c.a.createElement("div",{className:e.sectionDesktop},c.a.createElement(he.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:p,color:"inherit"},c.a.createElement(ct.a,null))),c.a.createElement("div",{className:e.sectionMobile},c.a.createElement(he.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},c.a.createElement(it.a,null))),b,g)},ut=n(143),dt=n.n(ut),mt=n(268),pt=n(142),ft=n.n(pt),ht=n(263),Et=n(275),gt=n(266),bt=n(139),jt=n.n(bt),Ot=Object(ie.a)((function(e){return Object(oe.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}})})),It=function(){var e=Ot(),t=c.a.useState(""),n=Object(o.a)(t,2),a=n[0],r=n[1];return c.a.createElement("div",null,c.a.createElement(ht.a,{className:e.formControl},c.a.createElement(Et.a,{value:a,onChange:function(e){r(e.target.value)},displayEmpty:!0,className:e.selectEmpty,inputProps:{"aria-label":"Without label"},startAdornment:c.a.createElement(gt.a,{position:"start"},c.a.createElement(jt.a,null))},c.a.createElement(nt.a,{value:""},c.a.createElement("em",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430")),c.a.createElement(me.a,null),c.a.createElement(nt.a,{value:"NEW_FIRST"},"\u041e\u0442 \u043d\u043e\u0432\u044b\u0445 \u043a \u0441\u0442\u0430\u0440\u044b\u043c"),c.a.createElement(nt.a,{value:"OLD_FIRST"},"\u041e\u0442 \u0441\u0442\u0430\u0440\u044b\u0445 \u043a \u043d\u043e\u0432\u044b\u043c"),c.a.createElement(me.a,null),c.a.createElement(nt.a,{value:"OPEN_FIRST"},"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"),c.a.createElement(nt.a,{value:"CLOSE_FIRST"},"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"))))},vt=n(140),kt=n.n(vt),yt=Object(ie.a)((function(e){return Object(oe.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}})})),wt=function(){var e=yt(),t=c.a.useState(""),n=Object(o.a)(t,2),a=n[0],r=n[1];return c.a.createElement("div",null,c.a.createElement(ht.a,{className:e.formControl},c.a.createElement(Et.a,{value:a,onChange:function(e){r(e.target.value)},displayEmpty:!0,className:e.selectEmpty,inputProps:{"aria-label":"Without label"},startAdornment:c.a.createElement(gt.a,{position:"start"},c.a.createElement(kt.a,null))},c.a.createElement(nt.a,{value:""},c.a.createElement("em",null,"\u041f\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0443")),c.a.createElement(nt.a,{value:"OPEN"},"\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"),c.a.createElement(nt.a,{value:"CLOSE"},"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"))))},St=n(273),Pt=n(278),Tt=Object(ie.a)((function(e){return Object(oe.a)({root:{width:"100%","& > * + *":{marginTop:e.spacing(3)}}})})),Nt=[{id:0,nickname:"test-user"},{id:1,nickname:"mom"},{id:2,nickname:"dad"},{id:3,nickname:"wife"},{id:4,nickname:"son"},{id:5,nickname:"daughter"},{id:6,nickname:"colleague-1"},{id:7,nickname:"colleague-2"},{id:8,nickname:"boss"},{id:9,nickname:"teacher"}],_t=function(){var e=Tt();return c.a.createElement("div",{className:e.root},c.a.createElement(St.a,{disableClearable:!0,multiple:!0,id:"tags-outlined",options:Nt,getOptionLabel:function(e){return e.nickname},defaultValue:[Nt[0]],filterSelectedOptions:!0,renderInput:function(e){return c.a.createElement(Pt.a,Object.assign({},e,{variant:"standard",label:"",placeholder:"\u0410\u0432\u0442\u043e\u0440\u044b"}))}}))},xt=Object(ie.a)((function(e){return Object(oe.a)({root:{"& > *":{margin:e.spacing(1,0)}}})})),Ft=function(){var e=xt();return c.a.createElement("form",{style:{width:"100%"},className:e.root,noValidate:!0,autoComplete:"off"},c.a.createElement(Pt.a,{id:"standard-basic",label:"\u0418\u0441\u043a\u0430\u0442\u044c \u043f\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443: ",fullWidth:!0}))},Dt=Object(ie.a)((function(e){return Object(oe.a)({root:{flexGrow:1}})})),Ct=function(){var e=Dt(),t=function(e){return c.a.createElement(ke.a,null,e.children,c.a.createElement(mt.a,null,c.a.createElement(he.a,{edge:"end","aria-label":"delete"},c.a.createElement(ft.a,null))))};return c.a.createElement("div",{className:e.root},c.a.createElement(Oe.a,{disablePadding:!0},c.a.createElement(t,null,c.a.createElement(It,null),c.a.createElement(wt,null)),c.a.createElement(t,null,c.a.createElement(_t,null)),c.a.createElement(t,null,c.a.createElement(Ft,null))))},Ut=(Object(ie.a)((function(e){return Object(oe.a)({})})),function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(ke.a,{button:!0,onClick:function(){a(!n)}},c.a.createElement(ye.a,null,c.a.createElement(dt.a,null)),c.a.createElement(we.a,{primary:"\u041f\u043e\u0438\u0441\u043a \u0437\u0430\u0434\u0430\u0447",primaryTypographyProps:{variant:"body1"}}),n?c.a.createElement(Te.a,null):c.a.createElement(_e.a,null)),c.a.createElement(Se.a,{in:n,timeout:"auto",unmountOnExit:!0},c.a.createElement(Oe.a,{component:"div",disablePadding:!0},c.a.createElement(Ct,null))))}),At=n(276),Rt=n(269),zt=n(144),Lt=n.n(zt),Bt=Object(ie.a)((function(e){return Object(oe.a)({root:{width:"100%",maxWidth:600,backgroundColor:e.palette.background.paper,display:"flex",flexDirection:"column"},progress:{alignSelf:"center",margin:e.spacing(2)}})})),Wt={setFetching:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(K(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getTasks:$},Gt=Object(Ae.b)((function(e){return{isFetching:e.tasks.isFetching,isAuth:e.auth.isAuth,usersIsFetching:e.users.isFetching,selectedUserId:e.users.selectedUserId,selectedProjectId:e.projects.selectedProjectId,tasks:e.tasks.tasks,users:e.users.users,myId:e.auth.id,filter:e.tasks.filter}}),Wt)((function(e){console.log('Component "TasksList" was drawed'),Object(r.useEffect)((function(){console.log("isFetching =        ".concat(e.isFetching))}),[e.isFetching]),Object(r.useEffect)((function(){console.log("isAuth] =           ".concat(e.isAuth))}),[e.isAuth]),Object(r.useEffect)((function(){console.log("usersIsFetching =   ".concat(e.usersIsFetching))}),[e.usersIsFetching]),Object(r.useEffect)((function(){console.log("selectedUserId =    ".concat(e.selectedUserId))}),[e.selectedUserId]),Object(r.useEffect)((function(){console.log("selectedProjectId = ".concat(e.selectedProjectId))}),[e.selectedProjectId]),Object(r.useEffect)((function(){console.log("tasks =             ".concat(e.tasks))}),[e.tasks]),Object(r.useEffect)((function(){console.log("users =             ".concat(e.users))}),[e.users]),Object(r.useEffect)((function(){console.log("myId =              ".concat(e.myId))}),[e.myId]),Object(r.useEffect)((function(){console.log("filter =            ".concat(e.filter))}),[e.filter]),Object(r.useEffect)((function(){e.usersIsFetching&&e.setFetching(!0)}),[e.usersIsFetching]),Object(r.useEffect)((function(){null!==e.selectedProjectId&&e.getTasks([e.selectedProjectId],null)}),[e.selectedProjectId]);var t=Bt(),n=c.a.useState([0]),a=Object(o.a)(n,2),s=a[0],i=a[1],l=function(t,n){var a=e.users.filter((function(e){return e.id===n.author}));return a.length>0&&a[0].nickname},u=Object(r.useMemo)((function(){return e.tasks.filter((function(t){var n=null===e.filter.status||t.isDone===e.filter.status,a=!(e.filter.userIds.length>0)||e.filter.userIds.filter((function(e){return e===t.author})).length>0,r=t.title.match(new RegExp(e.filter.content,"g"));return n&&a&&r}))}),[e.filter,e.tasks]);return c.a.createElement(Rt.a,{maxWidth:"sm"},c.a.createElement(Oe.a,{className:t.root},e.isFetching&&e.isAuth?c.a.createElement(Je.a,{className:t.progress,size:50}):e.isAuth&&u.map((function(t){var n,a="checkbox-list-label-".concat(t.id);return c.a.createElement(ke.a,{key:t.id,role:void 0,button:!0,onClick:(n=t.id,function(){var e=s.indexOf(n),t=Object(j.a)(s);-1===e?t.push(n):t.splice(e,1),i(t)})},c.a.createElement(ye.a,null,c.a.createElement(At.a,{edge:"start",checked:t.isDone,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":a}})),c.a.createElement(we.a,{id:a,primary:t.title,secondary:l(e.users,t)}),t.author===e.myId&&c.a.createElement(mt.a,null,c.a.createElement(he.a,{edge:"end","aria-label":"comments"},c.a.createElement(Lt.a,null))))}))))})),Mt=n(279),Ht=Object(ie.a)((function(e){return Object(oe.a)({root:{display:"flex"},drawer:Object(l.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(l.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(l.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})})),Jt={appInitializing:function(){return function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(ee(!0)),e.next=4,t(function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){try{setTimeout((function(){t(N(0,"testuser@email.com","testuser",!0)),e()}),2e3)}catch(a){alert(a.message),n()}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:t(Y(!0)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},Zt=Object(Ae.b)((function(e){return{isInitialized:e.app.isInitialized}}),Jt)((function(e){console.log('Component "App" was drawed'),Object(r.useEffect)((function(){e.appInitializing()}),[]),window.api=a,window.counter=se,window.dispatch=re.dispatch,window.thunk={},window.thunk.login=_,window.thunk.logout=x,window.thunk.getProjects=R,window.thunk.getUsers=M,window.thunk.getTasks=$;var t=Ht(),n=Object(le.a)(),s=c.a.useState(!1),i=Object(o.a)(s,2),l=i[0],u=i[1],d=function(){u(!l)},m=c.a.createElement("div",null,c.a.createElement("div",{className:t.toolbar}),c.a.createElement(me.a,null),c.a.createElement(et,null));return c.a.createElement("div",{className:t.root},c.a.createElement(Mt.a,{className:t.backdrop,open:!e.isInitialized},c.a.createElement(Ue.a,{color:"inherit"})),c.a.createElement(de.a,null),c.a.createElement(ue.a,{position:"fixed",className:t.appBar},c.a.createElement(Ee.a,null,c.a.createElement(he.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:d,className:t.menuButton},c.a.createElement(be.a,null)),c.a.createElement(lt,null))),c.a.createElement("nav",{className:t.drawer,"aria-label":"menu folders"},c.a.createElement(fe.a,{smUp:!0,implementation:"css"},c.a.createElement(pe.a,{variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:l,onClose:d,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},m)),c.a.createElement(fe.a,{xsDown:!0,implementation:"css"},c.a.createElement(pe.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},m))),c.a.createElement("main",{className:t.content},c.a.createElement("div",{className:t.toolbar}),c.a.createElement(Ut,null),c.a.createElement(Gt,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Ae.a,{store:re},c.a.createElement(Zt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.5170e1f2.chunk.js.map