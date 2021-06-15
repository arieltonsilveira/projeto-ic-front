<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-data-table
          :headers="table.headers"
          :items="table.items"
          :items-per-page="50"
        >
          <template v-slot:top>
            <v-row dense>
              <v-col>
                <v-toolbar flat class="ma-0">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    @click="$refs.dialog.showAdd()"
                  >
                    Filtrar Informações
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
        </v-data-table>
      </v-card-text>
    </v-card>
    <DialogFiltro ref="dialog"/>
  </v-container>
</template>

<script>
export default {
  components: {
    DialogFiltro: () => import("./components/DialogFiltro"),
  },
  data() {
    return {
      master: false,
      table: {
        headers: [
          { text: "Codigo", value: "id" },
          { text: "Nome", value: "nome_curso" },
          { text: "Conclusão Acumulada", value: "taxa_conc_acumulada" },
          { text: "Conclusão Anual", value: "taxa_conc_anual" },
          { text: "Desistencia Acumulada", value: "taxa_desistencia_acumulada" },
          { text: "Desistencia Anual", value: "taxa_desistencia_anula" },
          { text: "Permanencia", value: "taxa_pemanencia" },
        ],
        search:"",
        items: [],
      },
    };
  },
  methods: {
    async getDados() {
      try {
        this.$store.dispatch("setCarregando", true);
        let response = await this.$http.get("/filtro", []);
        this.table.items = response.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.dispatch("setCarregando", false);
      }
    },
  },
  mounted() {
    this.getDados();
  },
};
</script>

<style>
</style>