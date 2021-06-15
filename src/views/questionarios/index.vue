<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="informacoes">Questionarios Disponiveis</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="add_turma">
          Adicionar Turmas
          <v-btn
            class="mx-2"
            fab
            dark
            color="indigo"
            @click="$refs.dialog.showAdd()"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters style="height: 150px">
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        md="4"
        sm="12"
      >
        <v-card class="mx-auto card_quiz" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ card.nome }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              v-if="professor == true"
              :to="`/pergunta/` + card.id"
              color="primary"
              outlined
              rounded
              text
            >
              Acessar
            </v-btn>
            <v-btn
              v-if="professor == false"
              :to="`/quiz/` + card.id"
              color="primary"
              outlined
              rounded
              text
            >
              Iniciar Desafio
            </v-btn>
          </v-card-actions>
        </v-card>
        <!-- FINAL -->
      </v-col>
    </v-row>
    <DialogQuestionaro
      ref="dialog"
      @listQuestionario="getQuestionarios($event)"
    />
  </v-container>
</template>

<script>
export default {
  components: {
    DialogQuestionaro: () => import("./components/DialogQuestionaro"),
  },
  data() {
    return {
      professor: false,
      cards: [],
    };
  },
  mounted() {
    this.getQuestionarios();
    this.isProfessor();
  },
  methods: {
    isProfessor(){
      if (this.$store.state.user.user.perfil == 1) {
        this.professor = true;
      }
    },
    async getQuestionarios() {
      try {
        this.$store.dispatch("setCarregando", true);
        let response = await this.$http.get("/questionario", []);
        this.cards = response.data.data;
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
.card_quiz {
  margin-top: 20px;
}

.informacoes {
  font-size: 42pt;
  text-align: center;
}

.add_turma {
  font-size: 36pt;
  margin: 20px 0px 40px 100px;
}
</style>