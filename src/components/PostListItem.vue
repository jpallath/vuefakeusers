<template>
    <li v-bind:key="id"><i @click="deletePost(id)" class="fas fa-times-circle"></i>{{body}}</li>
</template>

<script>
export default {
  name: "PostListItem",
  props: ["id", "body"],
  methods: {
    deletePost: function(id) {
      let data = { userId: this.$route.params.id, post: id };
      this.$store.dispatch("deletePost", data);
    }
  }
};
</script>

<style scoped>
i {
  transition: 0.5s all ease;
  color: black;
}
i:hover {
  color: red;
}
</style>
