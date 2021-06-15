<template>
  <v-dialog v-model="dialog.show" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{
          edicao ? "Editar Cliente" : "Adicionar Cliente"
        }}</span>
        <v-card-title>
    </v-card-title>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="formCliente">
            <v-text-field
              label="Nome"
              v-model="cliente.nome"
              required
            ></v-text-field>
            <v-text-field
              label="Email"
              type="email"
              v-model="cliente.email"
              required
            ></v-text-field>
            <v-text-field
              label="Telefone"
              v-model="cliente.telefone"
              v-mask="'(##)# ####-####'"
            ></v-text-field>
            <v-text-field
              label="Endereço"
              v-model="cliente.endereco"
            ></v-text-field>
            <v-text-field
              label="Municipio"
              v-model="cliente.municipio"
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
          @click="edicao ? setClineteEdit() : setClinete()"
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
      cliente: {
        id: "",
        nome: "",
        email: "",
        telefone: "",
        endereco:"",
        municipio:"",
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
      this.cliente.id = item.id;
      this.cliente.nome = item.nome;
      this.cliente.email = item.email;
      this.cliente.telefone = item.telefone;
      this.cliente.endereco = item.endereco;
      this.cliente.municipio = item.municipio;
    },
    async setClinete() {
      try {
        await this.$http.post("/cliente", this.cliente);
        this.dialog.show = false;
        this.cliente.nome = "";
        this.cliente.email = "";
        this.cliente.telefone = "";
        this.cliente.endereco = "";
        this.cliente.municipio = "";
        this.$emit("listClientes");
      } catch (error) {
        console.log(error);
      }
    },
    async setClineteEdit() {
      try {
        await this.$http.put(`/cliente/${this.cliente.id}`, this.cliente);
        this.dialog.show = false;
        this.cliente.nome = "";
        this.cliente.email = "";
        this.cliente.telefone = "";
        this.cliente.endereco = "";
        this.cliente.municipio = "";
        this.$emit("listClientes");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>