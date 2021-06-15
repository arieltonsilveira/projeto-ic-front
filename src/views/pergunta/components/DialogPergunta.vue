<template>
  <v-dialog v-model="dialog.show" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{
          edicao ? "Editar Pergunta" : "Adicionar Pergunta"
        }}</span>
        <v-card-title>
    </v-card-title>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="formPergunta">
            <v-text-field
              label="Nome da Questão"
              v-model="pergunta.questao"
              required
            ></v-text-field>
            <v-text-field
              label="Alternativa 1"
              v-model="pergunta.alternativa_1"
              required
            ></v-text-field>
            <v-text-field
              label="Alternativa 2"
              v-model="pergunta.alternativa_2"
              required
            ></v-text-field>
            <v-text-field
              label="Alternativa 3"
              v-model="pergunta.alternativa_3"
              required
            ></v-text-field>
            <v-text-field
              label="Alternativa 4"
              v-model="pergunta.alternativa_4"
              required
            ></v-text-field>
            <v-text-field
              label="Alternativa Correta (Número)"
              v-model="pergunta.alternativa_correta"
              required
            ></v-text-field>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog.show = false">
          Close
        </v-btn>
        <v-btn
          color="primary"
          @click="edicao ? setPerguntaEdit() : setPergunta()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      dialog: {
        title: "",
        show: false,
      },
      pergunta: {
        id: "",
        questao: "",
        alternativa_1: "",
        alternativa_2: "",
        alternativa_3:"",
        alternativa_4:"",
        alternativa_correta:"",
        questionario_id: this.$route.params.id
      },
      edicao: false,
    };
  },
  methods: {
    showAdd() {
      this.edicao = false;
      this.dialog.show = true;
    },
    showEdit(item) {
      this.edicao = true;
      this.dialog.show = true;
      this.pergunta.id = item.id;
      this.pergunta.questao = item.questao;
      this.pergunta.alternativa_1 = item.alternativa_1;
      this.pergunta.alternativa_2 = item.alternativa_2;
      this.pergunta.alternativa_3 = item.alternativa_3;
      this.pergunta.alternativa_4 = item.alternativa_4;
      this.pergunta.alternativa_correta = item.alternativa_correta;
    },
    async setPergunta() {
      try {
        await this.$http.post("/pergunta", this.pergunta);
        this.dialog.show = false;
        this.pergunta.id = "";
        this.pergunta.questao = "";
        this.pergunta.alternativa_1 = "";
        this.pergunta.alternativa_2 = "";
        this.pergunta.alternativa_3 = "";
        this.pergunta.alternativa_4 = "";
        this.pergunta.alternativa_correta = "";
        this.$emit("listPergunta");
      } catch (error) {
        console.log(error);
      }
    },
    async setPerguntaEdit() {
      try {
        await this.$http.put(`/pergunta/${this.pergunta.id}`, this.pergunta);
        this.dialog.show = false;
        this.pergunta.id = "";
        this.pergunta.questao = "";
        this.pergunta.alternativa_1 = "";
        this.pergunta.alternativa_2 = "";
        this.pergunta.alternativa_3 = "";
        this.pergunta.alternativa_4 = "";
        this.pergunta.alternativa_correta = "";
        this.$emit("listPergunta");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>