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
            <v-card-actions>
              <v-dialog v-model="Adddialog" max-width="500">
                <template #activator="{on,attrs}">
                  <v-btn
                    plain
                    rounded
                    class="primary mb-6"
                    v-on="on"
                    v-bind="attrs"
                  >
                    <v-icon>mdi-account-plus</v-icon>
                    <span>&nbsp;Add User</span>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <v-icon>mdi-account-plus</v-icon>
                    <span>&nbsp;Add User</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="User ID"
                      v-model="aDDUSER.id"
                    ></v-text-field>
                    <v-text-field label="User First Name"></v-text-field>
                    <v-text-field label="User Last Name"></v-text-field>
                    <v-text-field label="User Title"></v-text-field>
                    <v-text-field label="User Message"></v-text-field>
                    <v-text-field label="User Hobbies"></v-text-field>
                  </v-card-text>
                </v-card>
                <v-card-actions class="primary">
                  <v-spacer></v-spacer>
                  <v-btn text rounded>
                    <v-icon>mdi-plus</v-icon>
                    <span>&nbsp;Add</span>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn plain rounded @click="Adddialog = !AddDilog">
                    <v-icon>
                      mdi-cancel
                    </v-icon>
                    <span>&nbsp;Cancel</span>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-dialog>
            </v-card-actions>
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
      Adddialog: false,
      users: [
        // {
        //   Name: "Abdullah Iqbal",
        //   title: "Software Engineer",
        //   message: "He is also Testor and Software Engineer",
        //   hobbies: "N/A",
        // },
      ],
      UsertoDelete: {},
      aDDUSER: [
        {
          id: 0,
          Name: "",
          title: "",
          message: "",
          hobbies: "",
        },
      ],
    };
  },
  methods: {
    AddUser() {},
    DeleteUser() {
      Users.DeleteUser(this.UsertoDelete);
      this.deleteDialog = !this.deleteDialog;
    },
    ConfrimtoDelete(u) {
      const index = this.users.findIndex((us) => us.id === u);
      this.UsertoDelete = { ...this.users.splice(index, 1) };
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
    Users.MaxId;
  },
};
</script>
