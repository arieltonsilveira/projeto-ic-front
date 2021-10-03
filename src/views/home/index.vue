<template>
  <v-container>
    <div>
      <h3>{{ IndicesFiltrados[0].registros}}</h3>
      ta
      <div>
        <v-btn
          color="primary"
          dark
          class="mb-2"
          @click="$refs.formFiltro.showAdd()"
        >
          Abrir Filtros
        </v-btn>
        <!-- {{ getFiltro }} -->
      </div>
      <Grafico :indice="getIndices[5]" />
      <div v-for="(indice, key) in IndicesFiltrados" :key="key">
        <LinhaGrafico :indice="indice" />
      </div>
      <DialogFiltro ref="formFiltro" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    DialogFiltro: () => import("./components/DialogFiltro"),
    Grafico: () => import("./components/Grafico"),
    LinhaGrafico: () => import("./components/LinhaGrafico"),
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
  computed: {
    ...mapGetters(["getFiltro", "getIndices"]),

    IndicesFiltrados: function () {
      let categories = [];
      let conclusao = [];
      let desistencia = [];
      let permanencia = [];
      let registros = [];
      this.getIndices.forEach((item) => {
        categories.push(item.ano_referencia);
        conclusao.push(item.taxa_conc_acumulada);
        desistencia.push(item.taxa_desistencia_acumulada);
        permanencia.push(item.taxa_pemanencia);
        registros.push(item.num_cursos);
      });
      return [
        {
          title: "Taxa De Permanencia de Cursos",
          name: "PERMANENCIA",
          data: permanencia,
          categories: categories,
          registros: registros
        },
        {
          title: "Taxa De Conclusão de Cursos",
          name: "COMCLUSÃO",
          data: conclusao,
          categories: categories,
          registros: registros
        },
        {
          title: "Taxa De Desistência de Cursos",
          name: "DESISTENCIA",
          data: conclusao,
          categories: categories,
          registros: registros
        },
      ];
    },
  },
  methods: {
    ...mapActions(["setCarregando", "setEndereco", "setFiltro", "setIndices"]),

    async getDados() {
      try {
        this.setCarregando(true);
        let response = await this.$http.post("/filtrar", this.getFiltro);
        this.setIndices(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        this.setCarregando(false);
      }
    },
  },
  // beforeMount() {
  //   this.getDados();
  // },
  // beforeUpdate() {
  //   this.getDados();
  // },
  mounted() {
    this.getDados();
    this.getIndices()
  },
};
</script>

<style>
</style>