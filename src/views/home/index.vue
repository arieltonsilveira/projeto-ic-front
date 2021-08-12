<template>
  <v-container>

    <!-- Parte Do filtro de Pesquisa -->


    <!-- <v-card class="mx-auto" max-width="1080" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Filtros Selecionados</div>
          <v-list-item-title class="text-h5 mb-1">
            Headline 5
            <v-btn depressed color="primary"> Primary </v-btn>
            <v-btn depressed color="primary"> Primary </v-btn>
            <v-btn depressed color="primary"> Primary </v-btn>
          </v-list-item-title>
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> Button </v-btn>
      </v-card-actions>
    </v-card> -->

    <!-- <DialogFiltro ref="dialog"/> -->
    <Grafico/>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    // DialogFiltro: () => import("./components/DialogFiltro"),
    Grafico: () => import("./components/Grafico"),
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
          {
            text: "Desistencia Acumulada",
            value: "taxa_desistencia_acumulada",
          },
          { text: "Desistencia Anual", value: "taxa_desistencia_anula" },
          { text: "Permanencia", value: "taxa_pemanencia" },
        ],
        search: "",
        items: [],
      },
    };
  },
  methods: {
    ...mapActions(["setEndereco"]),

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
    this.setEndereco();
    this.getDados();
  },
};
</script>

<style>
</style>