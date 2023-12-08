import { createStore } from "vuex";
//import { createLogger } from "vuex";

export default createStore({
  //plugins: [createLogger()],
  state: {
    comments: JSON.parse(localStorage.getItem("comments") || "[]"),
  },
  getters: {
    getAllComments: (state) => state.comments,
    getCommentsById: (state) => (id) => state.comments.find((c) => c.id == id),
  },
  mutations: {
    addComment(state, comment) {
      state.comments.unshift(comment);
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    delComment(state, id) {
      state.comments = state.comments.filter((c) => c.id != id);
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    updateLikeComment(state, id) {
      const idx = state.comments.findIndex((c) => c.id == id);
      state.comments[idx].like = !state.comments[idx].like;
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
  },
  actions: {
    addComment({ commit }, comment) {
      commit("addComment", comment);
    },
    delComment({ commit }, id) {
      commit("delComment", id);
    },
    updateLikeComment({ commit }, id) {
      commit("updateLikeComment", id);
    },
  },
});
