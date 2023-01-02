<template>
  <v-row>
    <v-col cols="12">
      <todo-form @todoAdded="(msg) => childMsg = !childMsg" />

    </v-col>
    <v-col cols="12">
      <dataTable ref="dataTable" />
    </v-col>
  </v-row>

</template>

<script>
import dataTable from './simple-table/Table.vue'
import todoForm from './actions/AddTodo.vue'
export default {
  data() {
    return {
      childMsg: false,
    }
  },
  components: {
    dataTable,
    todoForm,
  },
  watch: {
    childMsg(newV, oldV) {
      this.$refs.dataTable.getTodos()
    },
  },
}
</script>

<style>
</style>
