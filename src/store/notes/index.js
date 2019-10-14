import { instAPI } from "../../api";
export default {
  state: {
    todos: []
  },
  getters: {
    allTodos(state) {
      return state.todos;
    }
  },
  actions: {
    async getTodos({ commit }) {
      const { data } = await instAPI("/todos");

      commit("loadTodos", data);
    }
  },
  mutations: {
    loadTodos(state, data) {
      state.todos = data;
    }
  }
};
