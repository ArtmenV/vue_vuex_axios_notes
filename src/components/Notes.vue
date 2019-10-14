<template>
  <div>
    <h3>Notes</h3>
    <div class="todos">
      <div class="todo" v-for="note in allNotes" :key="note.id">
        <h3>{{note.title}}</h3>
        <i class="fas fa-trash-alt" @click="deleteNote(note.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Notes",
  computed: mapGetters(["allNotes"]),
  methods: {
    ...mapActions(["getNotes", "deleteNote"])
  },
  async mounted() {
    this.getNotes();
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

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
