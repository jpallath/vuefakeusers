<template>
        <li class="new-post">
            <input type="text" v-model="newPost" @keyup.enter="addPost(newPost)"/> 
            <input type="submit" @click="addPost(newPost)">
            </li>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "NewPost",
  data() {
    return {
      newPost: ""
    };
  },
  methods: {
    addPost: function(post) {
      if (post) {
        let user = this.$store.state.user || { id: 8, name: "Clarice" };
        let data = { userId: user.id, post: post };
        this.newPost = null;
        this.$store.dispatch("newPost", data);
      }
    }
  },
  computed: {
    ...mapState(["user"])
  },
  mounted() {}
};
</script>

<style>
.new-post {
  text-align: center;
}
</style>


