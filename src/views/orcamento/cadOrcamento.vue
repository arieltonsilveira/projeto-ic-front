<template>
  <v-container>
    <v-card outlined>
      <v-card-title>Criar Orçamento</v-card-title>
      <v-divider />
      <v-card-text>
        <v-form v-model="valid">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="dados_instalacao.producao_media"
                :counter="true"
                type="number"
                :rules="nameRules"
                label="PRODUÇÃO MÉDIA MENSAL(kwh/mês)"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="dados_instalacao.fixacao"
                :rules="nameRules"
                :counter="10"
                label="ESTRUTURA FIXAÇÃO"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="dados_instalacao.modelo_inversor"
                :rules="nameRules"
                :counter="125"
                label="MODELO INVERSOR"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- 6 PRIMEIROS -->

          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="dados_instalacao.garantia"
                :counter="10"
                :rules="nameRules"
                label="GARANTIA DO INVERSOR:"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="2">
              <v-text-field
                v-model="dados_instalacao.qtd_placas"
                :counter="true"
                type="number"
                label="PQUANTIDADE DE PLACAS"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="2">
              <v-text-field
                v-model="dados_instalacao.area"
                :rules="nameRules"
                :counter="true"
                type="number"
                label="AREA NECESSARIA (m²)"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="dados_instalacao.modelo_placa"
                :rules="nameRules"
                :counter="125"
                label="MODELO PLACA:"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  v-model="dados_instalacao.des_materiais"
                  label="Descrição dos Materiais"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
             <v-col cols="12" md="6">
              <v-text-field
                v-model="dados_instalacao.valor"
                :rules="nameRules"
                :counter="true"
                type="number"
                label="Valor da Proposta ao clinete Ex: 61500"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="dados_instalacao.desconto"
                :rules="nameRules"
                :counter="true"
                type="number"
                label="Desconto em Porcentagem"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn block
            v-if="cadastro"
            color="success"
            class="mr-4"
            @click="setOrcamento()"
          >
            Cadastrar Orçamento
          </v-btn>
          <v-btn block
            v-else
            color="primary"
            class="mr-4"
            @click="getOrcamentoPDF()"
          >
            Baixar Orçamento
          </v-btn>
      </v-card-actions>

    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    cadastro: true,
    cliente_id: 0,
    orcamento_id: 0,
    nome: "",
    endereco: "",
    municipio: "",
    nameRules: [
      (v) => !!v || "Campo é Obrigatório",
      (v) => v.length <= 125 || "Tamanho minino é 4",
    ],
    dados_instalacao: {
      producao_media: "",
      fixacao: "",
      modelo_inversor: "",
      garantia: "",
      qtd_placas: "",
      area: "",
      modelo_placa: "",
      valor: "",
      desconto: "",
      cliente_id: 0,
      user_id: 0,
      des_materiais:"",
    },
  }),
  methods: {
    async getClienteId(id) {
      this.dados_instalacao.cliente_id = id;
      this.dados_instalacao.user_id = this.$store.state.user.user.id;
    },

    async setOrcamento() {
      try {
        let response = await this.$http.post("orcamento", this.dados_instalacao);
        this.$swal.fire("Orçamento Cadastrado com Sucesso!");
        this.orcamento_id = response.data.data.id;
        console.log(this.orcamento_id);
        this.cadastro = false;
      } catch (error) {
        console.log(error);
      }
    },

    async getOrcamentoPDF() {
      window.open('http://masterorcamento.com.br/api/doc/'+this.orcamento_id, '_blank');
    },
  },

  mounted() {
    this.getClienteId(this.$route.params.id);
  },
};
</script>