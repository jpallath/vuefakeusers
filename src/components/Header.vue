<template>
  <nav class="header">
      <router-link to="/">Home</router-link>
      <li>{{user ? user.name : "Not Logged In"}}</li>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"])
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