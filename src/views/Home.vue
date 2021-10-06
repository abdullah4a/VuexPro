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
              <v-dialog v-model="deleteDialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-on="on"
                    v-bind="attrs"
                    @click="ConfrimtoDelete(card.id)"
                    plain
                    text
                  >
                    <v-icon>
                      mdi-delete
                    </v-icon>
                    <span>Delete</span>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    Are you sure you want to delete it
                  </v-card-title>
                  <v-card-actions>
                    <v-btn @click="DeleteUser">OK</v-btn>
                    <v-btn @click="closeDialog">Cancel</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <router-link
                tag="button"
                :to="{ name: 'UserDetail', params: { id: card.id } }"
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
      deleteDialog: false,
      users: [
        // {
        //   Name: "Abdullah Iqbal",
        //   title: "Software Engineer",
        //   message: "He is also Testor and Software Engineer",
        //   hobbies: "N/A",
        // },
      ],
      UsertoDelete: {},
    };
  },
  methods: {
    DeleteUser() {
      Users.DeleteUser(this.UsertoDelete);
      this.deleteDialog = !this.deleteDialog;
    },
    ConfrimtoDelete(u) {
      const index = this.users.findIndex((us) => us.id === u);
      this.UsertoDelete = this.users[index];
      this.deleteDialog = !this.deleteDialog;
    },
    closeDialog() {
      this.deleteDialog = !this.deleteDialog;
    },
    async LoadUsers() {
      this.users = await Users.GetUsers();
    },
  },
  async created() {
    await this.LoadUsers();
  },
};
</script>
