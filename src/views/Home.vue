<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <div>{{ a }}</div>
     -->
    <ul v-for="user in User" :key="user.id">
      <li>{{ user.id }}</li>
      <li>{{ user.Name }}</li>
      <li>{{ user.salary }}</li>
      <br /><br />
    </ul>
    <div>
      <label for="Uid">ID</label><br />
      <input type="number" id="Uid" v-model="U.id" /><br />
      <label for="Name">Name</label><br />
      <input type="text" id="Name" v-model="U.Name" /><br />
      <label for="Salary">Salary</label><br />
      <input type="number" id="Salary" v-model="U.salary" /><br />
      <button @click="Add">Save</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return { U: { id: 0, Name: "", salary: 0 } };
  },
  methods: {
    ...mapActions(["UserAddAct"]),
    Add() {
      this.UserAddAct(this.U);
    },
  },
  computed: {
    // a(){
    //   return this.$store.state.a
    // }
    // ...mapState({ a: (state) => state.a }),
    // ...mapState({ a: "a" }),
    ...mapState(["User"]),
  },
};
</script>
