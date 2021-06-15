<template>
  <v-dialog v-model="dialog.show" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{
          edicao ? "Editar Usuário" : "Adicionar Usuário"
        }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="formUsuario">
            <v-text-field
              label="Nome"
              v-model="usuario.name"
              required
            ></v-text-field>
            <v-text-field
              label="Email"
              type="email"
              v-model="usuario.email"
              required
            ></v-text-field>
            <v-text-field
              label="Telefone"
              v-model="usuario.telefone"
              v-mask="'(##)# ####-####'"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="usuario.password"
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
          @click="edicao ? setUsuarioEdit() : setUsuario()"
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
      master: false,
      dialog: {
        title: "",
        show: false,
      },
      usuario: {
        avatar: null,
        id: "",
        name: "",
        email: "",
        telefone: "",
        password: "",
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
      this.usuario.id = item.id;
      this.usuario.name = item.name;
      this.usuario.email = item.email;
      this.usuario.telefone = item.telefone;
    },
    async setUsuario() {
      try {
        await this.$http.post("/users", this.usuario);
        this.dialog.show = false
        this.$emit("listUsuarios");
        this.limparCampos();
      } catch (error) {
        console.log(error);
      }
    },
    async setUsuarioEdit() {
      let data = {...this.usuario};
      if (!data.password) {
        delete data.password;
      }
      try {
        await this.$http.put(`/users/${this.usuario.id}`, data);
        if (this.usuario.password == "") {
          this.usuario.password = null;
        }
        this.dialog.show = false
        this.$emit("listUsuarios");
        this.limparCampos();
      } catch (error) {
        console.log(error);
      }
    },
  },
  limparCampos(){
    this.dialog.show = true;
    this.usuario.name = "";
    this.usuario.email = "";
    this.usuario.telefone = "";
    this.usuario.password = "";

  }
};
</script>

<style>
</style>