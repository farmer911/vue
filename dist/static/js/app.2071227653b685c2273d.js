webpackJsonp([1],{"5byv":function(t,e){},E8ab:function(t,e){},Iiof:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),d=o("Gu7T"),i=o.n(d),a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v("\n      "+t._s(t.todo.title)+"\n      "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])])},staticRenderFns:[]};var s={name:"Todos",components:{TodoItem:o("VU/8")({name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},a,!1,function(t){o("E8ab")},"data-v-48f87cd0",null).exports},props:["todos"]},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)}),0)},staticRenderFns:[]};var c=o("VU/8")(s,r,!1,function(t){o("T83/")},"data-v-4fb86586",null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Header",{staticClass:"header"},[e("h1",[this._v("Todo List")])])},staticRenderFns:[]};var u=o("VU/8")({name:"header"},l,!1,function(t){o("5byv")},"data-v-d9a82bb0",null).exports,p=o("DlMc"),m=o.n(p),f={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={id:m.a.v4(),title:this.title,completed:!1};this.$emit("add-to",e),this.title=""}}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},staticRenderFns:[]};var h={name:"App",components:{Header:u,Todos:c,AddTodo:o("VU/8")(f,v,!1,function(t){o("dc2X")},"data-v-b9168120",null).exports},data:function(){return{todos:[{id:1,title:"Todo One",completed:!1},{id:2,title:"Todo Two",completed:!0},{id:3,title:"Todo Three",completed:!1}]}},methods:{deleteTodo:function(t){this.todos=this.todos.filter(function(e){return e.id!==t})},addTodo:function(t){this.todos=[].concat(i()(this.todos),[t])}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("AddTodo",{on:{"add-todo":this.addTodo}}),this._v(" "),e("Todos",{attrs:{todos:this.todos},on:{"del-todo":this.deleteTodo}})],1)},staticRenderFns:[]};var _=o("VU/8")(h,T,!1,function(t){o("Iiof")},"data-v-5010742e",null).exports,b=o("YaEn"),x=o.n(b);n.a.config.productionTip=!1,new n.a({el:"#app",router:x.a,components:{App:_},template:"<App/>"})},"T83/":function(t,e){},YaEn:function(t,e){},dc2X:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2071227653b685c2273d.js.map