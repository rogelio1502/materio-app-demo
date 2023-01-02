<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Id
          </th>
          <th class="text-center text-uppercase">
            Titulo de la tarea
          </th>
          <th class="text-center text-uppercase">
            Usuario
          </th>
          <th class="text-center text-uppercase">
            Completada
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
            {{ todo.userId }}
          </td>
          <td class="text-center">
            {{ todo.completed }}
          </td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
      axios.get('https://jsonplaceholder.typicode.com/todos').then(r => {
        // console.log(r.data)
        r.data.forEach(todo => {
          // console.log(todo.id)
          this.todos.push(todo)
        })
      })
    },
  },
}
</script>
