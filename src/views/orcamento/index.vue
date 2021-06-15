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
                  <v-toolbar-title>Orçamentos</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
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
            <v-btn icon @click="getOrcamentoPDF(item.Codigo)">
              <v-icon>mdi-message-text</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      table: {
        headers: [
          { text: "Codigo", value: "Codigo" },
          { text: "Nome", value: "Nome" },
          { text: "Telefone", value: "Telefone" },
          { text: "Vendedor", value: "Vendedor" },
          { text: "Data do Orçamento", value: "dia" },
          { text: "", value: "actions" },
        ],
        search:"",
        items: [],
      },
    };
  },
  methods: {
    async getOrcamentos() {
      try {
        this.$store.dispatch("setCarregando", true);
        let response = await this.$http.get("/orcamento", []);
        this.table.items = response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.dispatch("setCarregando", false);
      }
    },
    async getOrcamentoPDF(id) {
      window.open('http://masterorcamento.com.br/api/doc/'+id, '_blank');
    }
  },
  mounted() {
    this.getOrcamentos();
  },
};
</script>

<style>
</style>