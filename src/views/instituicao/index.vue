<template>
  <v-container>
    <div class="text-center pt-2">
      <v-card class="elevation-0">
        <v-card-text>
          <v-row class="d-flex flex-row align-center">
            <v-col class="align-center">
              <v-text-field
                class="search ma-0 pa-0"
                append-outer-icon="mdi-magnify"
                hide-details
                placeholder="pesquisar Instituição"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions> </v-card-actions>
      </v-card>
    </div>
    <v-card>
      <v-card-text>
        <v-data-table
          dense
          class="mytable elevation-0"
          :headers="table.headers"
          :items="paginate.items"
          :items-per-page="paginate.perPage"
          :search="table.search"
          hide-default-footer
        >
        </v-data-table>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-pagination
          v-model="paginate.currentPage"
          :length="paginate.total"
          @next="getData()"
          @previous="getData()"
          @input="getData()"
        ></v-pagination>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      paginate: {
        currentPage: 1,
        perPage: 2,
        total: 0,
        items: []
      },
      table: {
        headers: [
          { text: "Instituição", value: "instituicao" },
          { text: "Permanencia", value: "taxa_pemanencia" },
          { text: "Conclusão", value: "taxa_conc_acumulada" },
          { text: "Desistencia", value: "taxa_desistencia_acumulada" }
        ],
        search: "",
        items: [],
      },
    }
  },
  computed: {
    ...mapGetters(["getFiltro"]),
  },
  methods: {
    ...mapActions(["setCarregando"]),
    async getData() {
      try {
        this.setCarregando(true);
        const { data } = await this.$http.post('/tabela/filtro?page='+this.paginate.currentPage, this.getFiltro);
        console.log(data.total);

        this.paginate.perPage = data.per_page;
        this.paginate.total = data.total / data.per_page;
        
        this.paginate.items = [...data.data];
      } catch (error) {
        console.log(error);
      } finally {
        this.setCarregando(false);
      }
    },
  },
  mounted(){
    this.getData();
  }
}
</script>

<style>

</style>