(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27696dc4"],{2666:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),r("el-table",{attrs:{data:e.userlist,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"姓名",prop:"username"}}),r("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),r("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),r("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.userStateChanged(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.setRole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[r("div",[r("p",[e._v("当前的用户："+e._s(e.userInfo.username))]),r("p",[e._v("当前的角色："+e._s(e.userInfo.role_name))]),r("p",[e._v("分配新角色： "),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectedRoleId,callback:function(t){e.selectedRoleId=t},expression:"selectedRoleId"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)])],1)},a=[],o=(r("99af"),r("d3b7"),r("96cf"),r("a960")),i={data:function(){var e=function(e,t,r){var n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;if(n.test(t))return r();r(new Error("请输入合法的邮箱"))},t=function(e,t,r){var n=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;if(n.test(t))return r();r(new Error("请输入合法的手机号"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},userlist:[],total:0,addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"用户名的长度在3~10个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"用户名的长度在6~15个字符之间",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入用户手机",trigger:"blur"},{validator:t,trigger:"blur"}]},setRoleDialogVisible:!1,userInfo:{},rolesList:[],selectedRoleId:""}},components:{Header:o["a"]},created:function(){this.getUserList()},methods:{getUserList:function(){var e,t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(this.$http.get("users",{params:this.queryInfo}));case 2:if(e=r.sent,t=e.data,200===t.meta.status){r.next=6;break}return r.abrupt("return",this.$message.error("获取用户列表失败！"));case 6:this.userlist=t.data.users,this.total=t.data.total;case 8:case"end":return r.stop()}}),null,this)},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStateChanged:function(e){var t,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state)));case 2:if(t=n.sent,r=t.data,200===r.meta.status){n.next=7;break}return e.mg_state=!e.mg_state,n.abrupt("return",this.$message.error("更新用户状态失败！"));case 7:this.$message.success("更新用户状态成功！");case 8:case"end":return n.stop()}}),null,this)},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addFormRef.validate((function(t){var r,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,regeneratorRuntime.awrap(e.$http.post("users",e.addForm));case 4:r=a.sent,n=r.data,201!==n.meta.status&&e.$message.error("添加用户失败！"),e.$message.success("添加用户成功！"),e.addDialogVisible=!1,e.getUserList();case 10:case"end":return a.stop()}}))}))},showEditDialog:function(e){var t,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.$http.get("users/"+e));case 2:if(t=n.sent,r=t.data,200===r.meta.status){n.next=6;break}return n.abrupt("return",this.$message.error("查询用户信息失败！"));case 6:this.editForm=r.data,this.editDialogVisible=!0;case 8:case"end":return n.stop()}}),null,this)},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editUserInfo:function(){var e=this;this.$refs.editFormRef.validate((function(t){var r,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,regeneratorRuntime.awrap(e.$http.put("users/"+e.editForm.id,{email:e.editForm.email,mobile:e.editForm.mobile}));case 4:if(r=a.sent,n=r.data,200===n.meta.status){a.next=8;break}return a.abrupt("return",e.$message.error("更新用户信息失败！"));case 8:e.editDialogVisible=!1,e.getUserList(),e.$message.success("更新用户信息成功！");case 11:case"end":return a.stop()}}))}))},removeUserById:function(e){var t,r,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e})));case 2:if(t=a.sent,"confirm"===t){a.next=5;break}return a.abrupt("return",this.$message.info("已取消删除"));case 5:return a.next=7,regeneratorRuntime.awrap(this.$http.delete("users/"+e));case 7:if(r=a.sent,n=r.data,200===n.meta.status){a.next=11;break}return a.abrupt("return",this.$message.error("删除用户失败！"));case 11:this.$message.success("删除用户成功！"),this.getUserList();case 13:case"end":return a.stop()}}),null,this)},setRole:function(e){var t,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return this.userInfo=e,n.next=3,regeneratorRuntime.awrap(this.$http.get("roles"));case 3:if(t=n.sent,r=t.data,200===r.meta.status){n.next=7;break}return n.abrupt("return",this.$message.error("获取角色列表失败！"));case 7:this.rolesList=r.data,this.setRoleDialogVisible=!0;case 9:case"end":return n.stop()}}),null,this)},saveRoleInfo:function(){var e,t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(this.selectedRoleId){r.next=2;break}return r.abrupt("return",this.$message.error("请选择要分配的角色！"));case 2:return r.next=4,regeneratorRuntime.awrap(this.$http.put("users/".concat(this.userInfo.id,"/role"),{rid:this.selectedRoleId}));case 4:if(e=r.sent,t=e.data,200===t.meta.status){r.next=8;break}return r.abrupt("return",this.$message.error("更新角色失败！"));case 8:this.$message.success("更新角色成功！"),this.getUserList(),this.setRoleDialogVisible=!1;case 11:case"end":return r.stop()}}),null,this)},setRoleDialogClosed:function(){this.selectedRoleId="",this.userInfo={}}}},s=i,l=r("2877"),u=Object(l["a"])(s,n,a,!1,null,"ba7d7cba",null);t["default"]=u.exports},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new I(n||[]);return o._invoke=F(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=l;var c="suspendedStart",d="suspendedYield",f="executing",m="completed",h={};function p(){}function g(){}function b(){}var v={};v[o]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(E([])));w&&w!==r&&n.call(w,o)&&(v=w);var x=b.prototype=p.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function k(e){function t(r,a,o,i){var s=u(e[r],e,a);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(c).then((function(e){l.value=e,o(l)}),(function(e){return t("throw",e,o,i)}))}i(s.arg)}var r;function a(e,n){function a(){return new Promise((function(r,a){t(e,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=a}function F(e,t,r){var n=c;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return D()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=R(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===c)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?m:d,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=u(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function E(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){while(++a<e.length)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:D}}function D(){return{value:t,done:!0}}return g.prototype=x.constructor=b,b.constructor=g,b[s]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(k.prototype),k.prototype[i]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,a){var o=new k(l(t,r,n,a));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;$(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:E(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},a960:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._l(e.$route.meta,(function(t,n){return r("el-breadcrumb-item",{key:n},[e._v(e._s(t))])}))],2)],1)},a=[],o={},i=o,s=r("2877"),l=Object(s["a"])(i,n,a,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-27696dc4.5ed46e2c.js.map