<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-data-table
          :headers="table.headers"
          :items="table.items"
          :items-per-page="5"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Usuários</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>

              <v-btn v-if="master"
                color="primary"
                dark
                class="mb-2"
                @click="$refs.dialog.showAdd()" 
              >
                Novo Usuário
              </v-btn>
            </v-toolbar>
          </template>
          <template v-if="master" v-slot:item.actions="{ item }">
            <v-btn icon @click="$refs.dialog.showEdit(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteUsuario(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
    <DialogUsuario ref="dialog" @listUsuarios="getUsuarios($event)" />
  </v-container>
</template>

<script>
export default {
  components: {
    DialogUsuario: () => import("./components/DialogUsuario"),
  },
  data() {
    return {
      master: false,
      table: {
        headers: [
          { text: "Id", value: "id" },
          { text: "Nome", value: "name" },
          { text: "Email", value: "email" },
          { text: "Telefone", value: "telefone" },
          { text: "", value: "actions" },
        ],
        items: [],
      },
    };
  },
  methods: {
    async validarUser() {
      if (this.$store.state.user.user.id == 1) {
        this.master = true;
      }
    },
    async getUsuarios() {
      try {
        this.$store.dispatch("setCarregando", true);
        let response = await this.$http.get("/users", []);
        console.log(response.data.data.data);
        this.table.items = response.data.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.dispatch("setCarregando", false);
      }
    },
    async deleteUsuario(item) {
      try {
        await this.$http.delete(`/users/${item.id}`);
        this.getUsuarios();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.validarUser();
    this.getUsuarios();
  },
};
</script>

<style>
</style>