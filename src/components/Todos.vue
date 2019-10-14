<template>
  <div class="Todos">
    <div class="post" v-for="todo in allTodos" :key="todo.id">
      <h2>{{todo.title}}</h2>
      <p>{{todo.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: mapActions(["getTodos"]),
  async mounted() {
    this.getTodos();
  }
};
</script>
