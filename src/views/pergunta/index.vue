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
                  <v-toolbar-title>Perguntas</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    @click="$refs.dialogPergunta.showAdd()"
                  >
                    Nova Pergunta
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
            <v-btn icon @click="$refs.dialogPergunta.showEdit(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deletePergunta(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
    <DialogPergunta ref="dialogPergunta" @listPergunta="getPerguntas($event)" />
  </v-container>
</template>

<script>
export default {
  components: {
    DialogPergunta: () => import("./components/DialogPergunta"),
  },
  data() {
    return {
      table: {
        headers: [
          { text: "Id", value: "id" },
          { text: "Questão", value: "questao" },
          { text: "", value: "actions" },
        ],
        search:"",
        items: [],
      },
    };
  },
  methods: {
    async getPerguntas() {
      try {
        this.$store.dispatch("setCarregando", true);
        let response = await this.$http.get("/pergunta?questionario_id="+this.$route.params.id, []);
        this.table.items = response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.dispatch("setCarregando", false);
      }
    },
    async deletePergunta(item) {
      try {
        await this.$http.delete(`/pergunta/${item.id}`);
        this.getPerguntas();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getPerguntas();
  },
};
</script>

<style>
</style>