<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="pergunta">
          {{ selecionada.questao }}
        </div>
      </v-col>
    </v-row>
    <v-radio-group v-model="resposta">
      <v-radio
        class="alternativa"
        :label="selecionada.alternativa_1"
        :value="1"
      ></v-radio>
      <v-radio
        class="alternativa"
        :label="selecionada.alternativa_2"
        :value="2"
      ></v-radio>
      <v-radio
        class="alternativa"
        :label="selecionada.alternativa_3"
        :value="3"
      ></v-radio>
      <v-radio
        class="alternativa"
        :label="selecionada.alternativa_4"
        :value="4"
      ></v-radio>
    </v-radio-group>
    <v-alert
      v-if="alert"
      color="purple"
      icon="$mdiAccount"
      type="info"
    ></v-alert>

    <v-btn @click="questao_atual ? iniciar() : proximo()" block color="primary" elevation="8" x-large
      >Iniciar Desafio</v-btn
    >
  </v-container>
</template>

<script>
export default {
  components: {
    // DialogQuestionaro: () => import("./components/DialogQuestionaro"),
  },
  data() {
    return {
      alert: false,
      resposta: 0,

      perguntas: [],
      selecionada: {
        questao: "",
        alternativa_1: "",
        alternativa_2: "",
        alternativa_3: "",
        alternativa_4: "",
        alternativa_correta: "",
        questionario_id: this.$route.params.id,
      },
      questao_atual: 0,
      total_acerto: 0,
      total_erro: 0,
    };
  },
  mounted() {
    this.getPerguntas();
  },
  methods: {
    iniciar() {
      if (this.perguntas.length == 0) {
        this.alert = true;
      }
      console.log(this.perguntas.length);
      if (this.perguntas.length >= this.questao_atual) {
        console.log("entrou leng");
      }
      this.selecionada.questao = this.perguntas[this.questao_atual].questao;
      this.selecionada.alternativa_1 = this.perguntas[
        this.questao_atual
      ].alternativa_1;
      this.selecionada.alternativa_2 = this.perguntas[
        this.questao_atual
      ].alternativa_2;
      this.selecionada.alternativa_3 = this.perguntas[
        this.questao_atual
      ].alternativa_3;
      this.selecionada.alternativa_4 = this.perguntas[
        this.questao_atual
      ].alternativa_4;
      this.selecionada.alternativa_correta = this.perguntas[
        this.questao_atual
      ].alternativa_correta;
      // console.log(this.selecionada);
    },
    proximo() {
      this.questao_atual++;
      this.iniciar();
    },
    async getPerguntas() {
      try {
        this.$store.dispatch("setCarregando", true);
        let response = await this.$http.get(
          "/pergunta?questionario_id=" + this.$route.params.id,
          []
        );
        this.perguntas = response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.dispatch("setCarregando", false);
      }
    },
  },
};
</script>

<style>
.pergunta {
  font-size: 32pt;
  text-align: center;
}
.alternativa {
  font-size: 32pt;
  margin: 50px 0px 20px 100px;
}
</style>