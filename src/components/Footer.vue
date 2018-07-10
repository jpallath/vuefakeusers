<template>
  <nav class="footer">
      <li>{{this.$route.name}}</li>
      <li>User: {{this.$route.params.id}}</li>
      <li>{{posts ? posts.length : ""}} posts</li>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {
    ...mapState(["posts"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 5vh;
  background: black;
  list-style: none;
  justify-content: space-between;
  align-items: center;
}
li,
a {
  color: white;
  margin: 5%;
  text-decoration: none;
}
</style>