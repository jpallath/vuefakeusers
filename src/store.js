import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: null,
    posts: [],
    user: null
  },
  getters: {},
  mutations: {
    GET_USERS: async state => {
      state.users = await api.getUsers();
    },
    GET_POSTS: async (state, id) => {
      let { response, profile } = await api.getPosts(id);
      state.posts = response;
      state.user = profile;
    },
    ADD_POST: async (state, data) => {
      let newPost = await api.newPost(data);
      newPost = { body: data.post, id: state.posts.length + 99 };
      state.posts.push(newPost);
    },
    DELETE_POST: async (state, data) => {
      let deletedPost = await api.deletePost(data);
      let updatedPosts = state.posts.filter(post => {
        return post.id !== data.post;
      });
      state.posts = updatedPosts;
    }
  },
  actions: {
    getUsers: context => {
      context.commit("GET_USERS");
    },
    getPosts: (context, id) => {
      context.commit("GET_POSTS", id);
    },
    newPost(context, data) {
      context.commit("ADD_POST", data);
    },
    deletePost(context, data) {
      context.commit("DELETE_POST", data);
    }
  }
});
