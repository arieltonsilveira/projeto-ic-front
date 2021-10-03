<template>
  <div>
    <Navibar />
    <v-app-bar app color="blue">
      <!-- <v-btn v-if="log" icon :to="'/'" >
  <v-icon>mdi-home</v-icon>
</v-btn> -->
      <nav>
        <ul>
          <li><a @click="emitScroll('acumulados')">Dados dos Acumulados</a></li>
          <li><a @click="emitScroll('permanencia')">Taxa de Permanência de Cursos</a></li>
          <li><a @click="emitScroll('conclusao')">Taxa de Conclusão de Cursos</a></li>
          <li><a @click="emitScroll('desistencia')">Taxa De Desistência de Cursos</a></li>
        </ul>
      </nav>
      <v-spacer></v-spacer>
      
      <div>
        <v-btn
          style="background: #FF6060 !important"
          dark
          class="mb-2"
          @click="$refs.formFiltro.showAdd()"
        >
          Abrir Filtros
        </v-btn>
        <!-- {{ getFiltro }} -->
      </div>

      <v-btn
        v-if="log"
        class="mr-4"
        depressed
        color="error"
        @click.prevent="deslogar()"
      >
        Sair
      </v-btn>
    </v-app-bar>
    <DialogFiltro ref="formFiltro" />
  </div>
</template>

<script>
import EventBus from '../../main';
export default {
  components: {
    Navibar: () => import("./NavigationBar.vue"),
    DialogFiltro: () => import("../../views/home/components/DialogFiltro.vue"),
  },
  data() {
    return {
      log: false,
    };
  },
  mounted() {
    this.validarLog();
  },
  methods: {
    emitScroll(id){
      EventBus.$emit("scrollar", id)
    },
    deslogar() {
      this.$store
        .dispatch("logout", { token: this.$store.getters.tokenUser })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    async validarLog() {
      if (this.$store.state.user.access_token) {
        console.log(this.$store.state.user.access_token);
        this.log = true;
      }
    },
  },
  computed: {
    tokenUser() {
      return this.$store.getters.tokenUser;
    },
  },
};
</script>

<style scoped>
 nav ul {
   display: flex;
   list-style: none;
 }

 nav ul li a {
   text-decoration: none;
   color: white;
   font-weight: bold;
   transition: all .2s
 }

 nav ul li a:hover {
   color: rgba(255,255,255,0.8)
 }

 nav ul {
   gap: 10px
 }

 nav ul li a {
   padding: 15px;
 }
</style>