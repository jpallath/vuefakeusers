<template>
  <div class="posts">
<h1> Hello {{user ? user.name : "Loading"}}</h1>
<ul>Posts
    <PostListItem v-for="post in posts" v-bind:key="post.id" v-bind:id="post.id" v-bind:body="post.body" />
    <NewPost />
</ul>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NewPost from "@/components/NewPost";
import PostListItem from "@/components/PostListItem";
export default {
  name: "Posts",
  components: { NewPost, PostListItem },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState(["posts", "user", "users"])
  },
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch("getPosts", id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 100%;
  text-align: left;
}
li:nth-child(even) {
  color: turquoise;
}
li i {
  transition: 0.5s all ease;
}
li i:hover {
  color: red;
}
a {
  color: #42b983;
}
</style>
