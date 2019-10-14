<template>
  <div>
    <h3>Notes</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(note)"
        class="todo"
        v-for="note in allNotes"
        :key="note.id"
        :class="{'is-complete' : note.completed}"
      >
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
    ...mapActions(["getNotes", "deleteNote", "updateNotes"]),
    onDblClick(note) {
      const updNote = {
        id: note.id,
        title: note.title,
        completed: !note.completed
      };
      this.updateNotes(updNote);
    }
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
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #34595e;
  color: #fff;
}

@media (max-width: 500) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
