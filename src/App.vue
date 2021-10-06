<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-icon v-if="!drawer" @click="drawer = !drawer"
        >mdi-dots-vertical</v-icon
      >
      <v-icon v-if="drawer" @click="drawer = !drawer">mdi-close</v-icon>
    </v-app-bar>
    <v-navigation-drawer color="primary" v-model="drawer" app>
      <v-list-item>
        <v-img
          src="https://cdn.dribbble.com/users/4565696/screenshots/9934453/barber_shop_logo_design_concept.jpg"
        > </v-img>
      </v-list-item>
      <v-list dense>
        <v-list-item v-for="nav in navArray" :key="nav.id" :to="nav.route">
          <v-icon>{{ nav.icon }}</v-icon>
          <v-list-item-title class="text-subtitle">
            {{ nav.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,
      navArray: [
        { icon: "mdi-home", title: "Home", route: "/" },
        { icon: "mdi-information", title: "About", route: "/about" },
        // {icon:"mdi-home",title='Home',route:'/'}
      ],
    };
  },
};
</script>
