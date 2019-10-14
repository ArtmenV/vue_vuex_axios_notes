<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <Todos />
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Todos from "./components/Todos";
export default {
  data() {
    return {};
  },
  components: {
    Todos
  }
};
</script>

<style lang="scss">
</style>
