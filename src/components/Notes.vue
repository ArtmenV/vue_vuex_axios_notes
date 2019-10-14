<template>
  <div>
    <h3>Notes</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        <h3>{{todo.id}}. {{todo.title}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["getTodos"])
  },
  async mounted() {
    this.getTodos();
  }
};
</script>
<style lang="scss" scoped>
.todos {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;
}
.todo {
  width: 100%;
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
