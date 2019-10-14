<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <AddNote />
    <Notes />
    <router-view />
  </div>
</template>

<script>
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
export default {
  data() {
    return {};
  },
  components: {
    Notes,
    AddNote
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 95%;
}
</style>
