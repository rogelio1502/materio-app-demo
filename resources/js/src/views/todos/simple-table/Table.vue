<template>
  <v-card>
    <v-card-title>Todos</v-card-title>
    <v-card-text v-if="todos.length == 0">No todos... Add One!</v-card-text>
    <v-simple-table v-else>

      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-uppercase">
              Id
            </th>
            <th class="text-center text-uppercase">
              Title
            </th>
            <th class="text-center text-uppercase">
              Description
            </th>
            <th class="text-center text-uppercase">
              Options
            </th>

          </tr>
        </thead>
        <tbody>

          <tr
            v-for="todo in todos"
            :key="todo.id"
          >
            <td>{{ todo.id }}</td>
            <td class="text-center">
              {{ todo.title }}
            </td>
            <td class="text-center">
              {{ todo.description }}
            </td>
            <td class="text-center">
              <v-btn
                color="warning"
                @click="removeTodo(todo.id)"
              >Remove</v-btn>
            </td>

          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>

</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    this.getTodos()
  },
  setup() {},
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    getTodos() {
      this.todos = []
      axios
        .get('/api/todos', {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).authorisation.token,
          },
        })
        .then(r => {
          r.data.todos.forEach(todo => {
            this.todos.push(todo)
          })
        })
    },
    removeTodo(todoId) {
      this.todos = []
      axios
        .delete('/api/todo/' + todoId, {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).authorisation.token,
          },
        })
        .then(r => {
          this.getTodos()
        })
    },
  },
}
</script>
