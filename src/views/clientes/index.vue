<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-data-table
          :headers="table.headers"
          :items="table.items"
          :items-per-page="5"
          :search="table.search"
        >
          <template v-slot:top>
            <v-row dense>
              <v-col>
                <v-toolbar flat class="ma-0">
                  <v-toolbar-title>Clientes</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    @click="$refs.dialogformTurmas"
                  >
                    Novo Cliente
                  </v-btn>
                </v-toolbar>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col md="4" sm="12" cols="12">
                <v-text-field v-model="table.search" append-icon="mdi-magnify"></v-text-field>
              </v-col>
            </v-row>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon @click="$refs.dialogClinete.showEdit(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn v-if="master" icon @click="deleteCliente(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon :to="`/novo/orcamentos/${item.id}`">
              <v-icon>mdi-message-text</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
    <DialogCliente ref="dialogClinete" @listClientes="getClientes($event)" />
  </v-container>
</template>

<script>
export default {
  components: {
    DialogCliente: () => import("./components/DialogCliente"),
  },
  data() {
    return {
      master: false,
      table: {
        headers: [
          { text: "Id", value: "id" },
          { text: "Nome", value: "nome" },
          { text: "Email", value: "email" },
          { text: "Telefone", value: "telefone" },
          { text: "", value: "actions" },
        ],
        search:"",
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
    async getClientes() {
      try {
        this.$store.dispatch("setCarregando", true);
        let response = await this.$http.get("/cliente", []);
        this.table.items = response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.dispatch("setCarregando", false);
      }
    },
    async deleteCliente(item) {
      try {
        await this.$http.delete(`/cliente/${item.id}`);
        this.getClientes();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.validarUser();
    this.getClientes();
  },
};
</script>

<style>
</style>