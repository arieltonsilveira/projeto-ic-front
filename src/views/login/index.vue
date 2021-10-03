<template>
  <form>
    <v-card class="mx-auto mt-12 titulocard" max-width="500">
      <v-card-title>Login de Usuário</v-card-title>
      <v-container class="sm-4 md-4">
        <v-text-field
          label="E-mail"
          outlined
          v-model="form.email"
          required
        ></v-text-field>
        <v-text-field
          outlined
          v-model="form.password"
          label="Senha"
          type="password"
          required
        ></v-text-field>
        <v-btn class="mr-4" color="primary" to="/"> Logar </v-btn>
      </v-container>
    </v-card>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    // onSubmit() {
    //   this.$store
    //     .dispatch("login", this.form)
    //     .then(() => {
    //       this.sendToken();
    //     })
    //     .catch(() => {
    //       this.$swal.fire('Usuário e/ou senha Invalido!')
    //     });
    // },
    // sendToken() {
    //   this.$store
    //     .dispatch("sendToken")
    //     .then(() => {
    //       this.$router.push("/");
    //     })
    //     .catch(() => {});
    // },
  },
};
</script>

<style>
.titulocard {
  text-align: right;
  color: blue;
  font-size: 24pt;
}
</style>