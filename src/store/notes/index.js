import { instAPI } from "../../api";

export default {
  state: {
    notes: []
  },
  getters: {
    allNotes(state) {
      return state.notes;
    }
  },
  actions: {
    async getNotes({ commit }) {
      const { data } = await instAPI("/todos");

      commit("loadNotes", data);
    },
    async AddNote({ commit }, title) {
      const { data } = await instAPI.post("/todos", {
        title,
        completed: false
      });
      commit("newNote", data);
    },
    async deleteNote({ commit }, id) {
      await instAPI.delete(`/todos/${id}`);
      commit("removeNote", id);
    },
    async filterNotes({ commit }, e) {
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
      console.log(limit);
      const { data } = await instAPI(`/todos?_limit=${limit}`);
      commit("loadNotes", data);
    }
  },
  mutations: {
    loadNotes(state, data) {
      state.notes = data;
    },
    newNote(state, data) {
      state.notes.unshift(data);
    },
    removeNote(state, id) {
      return (state.notes = state.notes.filter(note => note.id !== id));
    }
  }
};
