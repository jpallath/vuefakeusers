<template>
  <div class="users">
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        <router-link v-bind:to="'/posts/'+ user.id">{{user.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Users",
  data() {
    return {};
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getUsers");
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
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
