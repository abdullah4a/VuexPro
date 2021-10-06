<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              <v-icon>mdi-home</v-icon>&nbsp;
              <span>Home</span>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" v-for="card in users" :key="card.id">
          <v-card class="primary white--text">
            <v-card-title>{{ card.Name }}</v-card-title>
            <v-card-subtitle>{{ card.title }}</v-card-subtitle>
            <v-card-text>
              <p>
                {{ card.message }}
              </p>
              <p>
                {{ card.hobbies }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-dialog width="500">
                <template #activator:{attrs,on}>
                  <v-btn plain text v-on="on" v-bind="attrs">
                    <v-icon>mdi-delete</v-icon>
                    <span>Delete</span>
                  </v-btn>
                </template>
              </v-dialog>
              <router-link
                :to="{ name: 'UserDetail', params: { id: 'user.id' } }"
              >
                <v-icon>mdi-pencil</v-icon>
                <span>Edit</span>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { Users } from "../shared";
export default {
  name: "Home",

  components: {},
  data() {
    return {
      users: [
        // {
        //   Name: "Abdullah Iqbal",
        //   title: "Software Engineer",
        //   message: "He is also Testor and Software Engineer",
        //   hobbies: "N/A",
        // },
      ],
    };
  },
  methods: {
    async LoadUsers() {
      this.users = await Users.GetUsers();
      console.log(this.users);
    },
  },
  async created() {
    await this.LoadUsers();
  },
};
</script>
