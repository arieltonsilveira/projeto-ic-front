<template>
  <v-app-bar app
  color="blue"
>
<v-btn v-if="log" icon :to="'/'" >
  <v-icon>mdi-home</v-icon>
</v-btn>

<v-spacer></v-spacer>

<v-btn v-if="log" class="mr-4" depressed color="error" @click.prevent="deslogar()"> Sair </v-btn>

</v-app-bar>
</template>

<script>
export default {
data() {
    return {
      log: false
    };
  },
  mounted() {
    this.validarLog();
  },
  methods: {
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
}
</script>

<style>

</style>