<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import Header from './components/layout/Header.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'App',
  components: {
    Header,
    Todos,
    AddTodo
  },
  data () {
    return {
      todos: [
        {
          id: 1,
          title: 'Todo One',
          completed: false
        },
        {
          id: 2,
          title: 'Todo Two',
          completed: false
        },
        {
          id: 3,
          title: 'Todo Three',
          completed: false
        }
      ]
    }
  },
  methods: {
    deleteTodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo (newTodo) {
      if (newTodo.title === '') {
        return
      }
      this.todos = [...this.todos, newTodo]
    }
  }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        pad: 0;
    }
    body{
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
    }
    .btn{
        display: inline-block;
        border: none;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }
    .btn:hover{
        background: #666;
    }
</style>
