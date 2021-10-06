<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>{{ id }} User</v-card-title>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: 0 },
  },
};
</script>

<style lang="scss" scoped></style>
