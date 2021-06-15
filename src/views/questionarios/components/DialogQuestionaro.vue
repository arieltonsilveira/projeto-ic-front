<template>
  <v-dialog v-model="dialog.show" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Adicionar Questionario</span>
      <v-card-title>
    </v-card-title>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="formQuestionario">
            <v-text-field
              label="Nome do Questionario"
              v-model="questionario.nome"
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
          @click="setClinete()"
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
        dialog: {
        title: "Adicionar Questionário",
        show: false,
      },
      questionario: {
        nome: "",
        turma_id: this.$route.params.id,
      },
    };
  },
  methods: {
    showAdd() {
      this.dialog.show = true;
    },
    async setClinete() {
      try {
        await this.$http.post("/questionario", this.questionario);
        this.dialog.show = false;
        this.$emit("listQuestionario");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>