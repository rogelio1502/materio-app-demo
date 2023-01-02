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
export default {
  emits: ['todoAdded'],
  data() {
    return {
      title: '',
      description: '',
      btnTxt: 'Create',
    }
  },
  methods: {
    createTodo() {
      if (this.title && this.description) {
        this.btnTxt = 'Creating...'
        let bodyFormData = new FormData()
        bodyFormData.append('title', this.title)
        bodyFormData.append('description', this.description)
        axios
          .post('/api/todo', bodyFormData, {
            headers: {
              Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).authorisation.token,
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(r => {
            this.$emit('todoAdded', 'Todo was added.')
            this.title = ''
            this.description = ''
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
