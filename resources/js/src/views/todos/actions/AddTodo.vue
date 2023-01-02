<template>
  <v-card>
    <v-card-title>Add Todo</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="title"
          label="Title"
          outlined
          dense
          placeholder="Title"
        ></v-text-field>
        <v-text-field
          v-model="description"
          label="Description"
          outlined
          dense
          placeholder="Description"
        ></v-text-field>
        <v-btn
          block
          color="primary"
          @click="createTodo()"
          :disabled="title.length == 0 || description.length == 0 "
        > {{btnTxt}} </v-btn>

      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'
import todosService from '../../../services/todos.service'
export default {
  emits: ['todoAdded'],
  data() {
    return {
      title: 'Demo Title',
      description: 'Demo Description',
      btnTxt: 'Create',
    }
  },
  methods: {
    createTodo() {
      if (this.title && this.description) {
        this.btnTxt = 'Creating...'
        todosService
          .add(this.title, this.description)
          .then(r => {
            this.$emit('todoAdded', 'Todo was added.')
            this.title = 'Demo Title'
            this.description = 'Demo Description'
            this.btnTxt = 'Create'
          })
          .catch(e => {
            alert('Error')
          })
      }
    },
  },
}
</script>

<style>
</style>
