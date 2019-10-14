import Vue from "vue";
import Vuex from "vuex";
import Todos from "./notes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Todos
  }
});
