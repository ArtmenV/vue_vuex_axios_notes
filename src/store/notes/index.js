import { instAPI } from "../../api";

export default {
  state: {
    notes: []
  },
  getters: {
    allTodos(state) {
      return state.notes;
    }
  },
  actions: {
    async getTodos({ commit }) {
      const { data } = await instAPI("/todos");

      commit("loadTodos", data);
    },
    async AddNote({ commit }, title) {
      const { data } = await instAPI.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          id: new Date(),
          title,
          completed: false
        }
      );
      commit("newNote", data);
    }
  },
  mutations: {
    loadTodos(state, data) {
      state.notes = data;
    },
    newNote: (state, data) => state.notes.unshift(data)
  }
};
