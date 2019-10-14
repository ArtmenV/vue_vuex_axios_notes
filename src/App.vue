<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <AddNote />
    <FilterNotes />
    <Notes />
    <router-view />
  </div>
</template>

<script>
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import FilterNotes from "./components/FilterNotes";
export default {
  data() {
    return {};
  },
  components: {
    Notes,
    AddNote,
    FilterNotes
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 95%;
}
</style>
