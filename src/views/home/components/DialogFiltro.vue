<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Selecione as Opções de Filtro</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="formFiltro">
              <v-row>
                <v-col cols="12" sm="12">
                  <v-autocomplete
                    v-model="filtro.cod_curso"
                    :items=cursos_cine
                    label="Curso"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" sm="12">
                  <v-autocomplete
                    v-model="filtro.instituicao"
                    :items=instituicoes
                    label="Instituição do Curso"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" sm="12">
                  <v-autocomplete
                    v-model="filtro.regiao"
                    :items="[
                      {text:'Centro Oeste', value:'5'},
                      {text:'Nordeste', value:'2'},
                      {text:'Norte', value:'1'},
                      {text:'Sudeste', value:'3'},
                      {text:'Sul', value:'4'}
                    ]"
                    label="Região"
                  ></v-autocomplete>
                </v-col>

                <!-- <v-col cols="12" sm="9" md="9">
                  <v-text-field
                    v-model="filtro.nome_curso"
                    label="Nome do Curso"
                  ></v-text-field>
                </v-col> -->

                <!-- <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    v-model="filtro.cod_curso"
                    label="Código Curso"
                    hint="Informe o codigo de cadastro do Curso"
                  ></v-text-field>
                </v-col> -->

                <!-- <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="filtro.grau_academico"
                    :items="['1', '2', '3']"
                    label="Grau Académico"
                  ></v-autocomplete>
                </v-col> -->

                <!-- <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="filtro.modelo_ensino"
                    :items="['1', '2']"
                    label="Modelo de Ensino"
                  ></v-autocomplete>
                </v-col> -->

                <v-col cols="12" sm="12">
                  <v-autocomplete
                    v-model="filtro.estado"
                    :items=estados
                    label="Filtrar por Estado"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" sm="12">
                  <v-autocomplete
                    v-model="filtro.municipio"
                    :items=municipios
                    label="Filtrar por Municipios"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-card flat color="transparent">
                <v-row>
                  <v-subheader>Taxa de Permanencia</v-subheader>

                  <v-checkbox
                    v-model="filtro.permanencia.ativa"
                    label="Ativar Filtro"
                    style="margin: 1% 0% 0% 20%"
                  ></v-checkbox>
                </v-row>
                <v-card-text>
                  <v-row>
                    <v-col class="pr-4">
                      <v-slider
                        v-model="filtro.permanencia.valor_inicio"
                        class="align-center"
                        label="inicial"
                        :max="filtro.permanencia.max"
                        :min="filtro.permanencia.inicio_min"
                        :disabled="filtro.permanencia.ativa ? false : true"
                        hide-details
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="filtro.permanencia.valor_inicio"
                            :disabled="filtro.permanencia.ativa ? false : true"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </v-col>

                    <v-col class="pr-4">
                      <v-slider
                        v-model="filtro.permanencia.valor_maximo"
                        class="align-center"
                        label="final"
                        :max="filtro.permanencia.max"
                        :min="filtro.permanencia.valor_inicio"
                        :disabled="filtro.permanencia.ativa ? false : true"
                        hide-details
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="filtro.permanencia.valor_maximo"
                            :disabled="filtro.permanencia.ativa ? false : true"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <v-card flat color="transparent">
                <v-row>
                  <v-subheader>Taxa de Conclusão Anual</v-subheader>

                  <v-checkbox
                    v-model="filtro.conclusao.ativa"
                    label="Ativar Filtro"
                    style="margin: 1% 15% 0% 15%"
                  ></v-checkbox>
                </v-row>
                <v-card-text>
                  <v-row>
                    <v-col class="pr-4">
                      <v-slider
                        v-model="filtro.conclusao.valor_inicio"
                        class="align-center"
                        label="inicial"
                        :max="filtro.conclusao.max"
                        :min="filtro.conclusao.inicio_min"
                        :disabled="filtro.conclusao.ativa ? false : true"
                        hide-details
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="filtro.conclusao.valor_inicio"
                            :disabled="filtro.conclusao.ativa ? false : true"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </v-col>

                    <v-col class="pr-4">
                      <v-slider
                        v-model="filtro.conclusao.valor_maximo"
                        class="align-center"
                        label="final"
                        :max="filtro.conclusao.max"
                        :min="filtro.conclusao.valor_inicio"
                        :disabled="filtro.conclusao.ativa ? false : true"
                        hide-details
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="filtro.conclusao.valor_maximo"
                            :disabled="filtro.conclusao.ativa ? false : true"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <v-card flat color="transparent">
                <v-row>
                  <v-subheader>Taxa de Desistencia anual</v-subheader>

                  <v-checkbox
                    v-model="filtro.desistencia.ativa"
                    label="Ativar Filtro"
                    style="margin: 1% 15% 0% 15%"
                  ></v-checkbox>
                </v-row>

                <v-card-text>
                  <v-row>
                    <v-col class="pr-4">
                      <v-slider
                        v-model="filtro.desistencia.valor_inicio"
                        class="align-center"
                        label="inicial"
                        :max="filtro.desistencia.max"
                        :min="filtro.desistencia.inicio_min"
                        :disabled="filtro.desistencia.ativa ? false : true"
                        hide-details
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="filtro.desistencia.valor_inicio"
                            :disabled="filtro.desistencia.ativa ? false : true"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </v-col>

                    <v-col class="pr-4">
                      <v-slider
                        v-model="filtro.desistencia.valor_maximo"
                        class="align-center"
                        label="final"
                        :max="filtro.desistencia.max"
                        :min="filtro.desistencia.valor_inicio"
                        :disabled="filtro.desistencia.ativa ? false : true"
                        hide-details
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="filtro.desistencia.valor_maximo"
                            :disabled="filtro.desistencia.ativa ? false : true"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Fechar
          </v-btn>
          <v-btn color="blue darken-1" text @click="limparFiltros()">
            Lipar Filtros
          </v-btn>
          <v-btn color="blue darken-1" text @click="buscarInformacoes()">
            Filtrar Dados
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    min: -50,
    max: 90,
    slider: 40,
    dialog: false,
    //estados: this.getLocalizacaoState.estados,
    //municipios: this.getLocalizacaoState.municipios,
    datas: [
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
      2028,
      2029,
      2030,
    ],
    instituicoes: [],
    cursos_cine: [],
    cursos:[],
    municipios:[],
    estados:[],
    filtro: {
      permanencia: {
        ativa: false,
        inicio_min: 0,
        max: 100,
        valor_inicio: 0,
        valor_maximo: 0,
      },
      conclusao: {
        ativa: false,
        inicio_min: 0,
        max: 100,
        valor_inicio: 0,
        valor_maximo: 0,
      },
      desistencia: {
        ativa: false,
        inicio_min: 0,
        max: 100,
        valor_inicio: 0,
        valor_maximo: 0,
      },
      regiao:'',
      area_cine: '',
      instituicao: '',
      nome_curso: '',
      cod_curso: '',
      grau_academico: '',
      modelo_ensino: '',
      municipio: '',
      estado: '',
    },
  }),
  mounted() {
    this.carregarFiltros();
    this.Instituicao();
    this.Cursos_cine();
    this.Estados();
    this.Municipios();
    console.log(this.municipios);
  },
  computed: {
    ...mapGetters(['getFiltro']),
  },
  methods: {
    ...mapActions(['setFiltro', 'setCarregando']),
    showAdd() {
      this.dialog = true;
    },

    limparFiltros(){
      this.filtro.cod_curso = '';
      this.filtro.estado = '';
      this.filtro.municipio = '';
      this.filtro.regiao = '';
      this.filtro.instituicao = '';
    },

    carregarFiltros() {
      if (this.getFiltro.filtro.permanencia) {
        this.filtro.permanencia = { ...this.getFiltro.filtro.permanencia };
        this.filtro.conclusao = { ...this.getFiltro.filtro.conclusao };
        this.filtro.desistencia = { ...this.getFiltro.filtro.desistencia };
      }
      this.filtro.cod_curso = this.getFiltro.filtro.cod_curso;
      this.filtro.estado = this.getFiltro.filtro.estado;
      this.filtro.municipio = this.getFiltro.filtro.municipio;
      this.filtro.regiao = this.getFiltro.filtro.regiao;
      this.filtro.instituicao = this.getFiltro.filtro.instituicao;

    },

    buscarInformacoes() {
      this.setFiltro({ filtro: this.filtro });
      this.dialog = false;
      this.$router.go('/');
    },

    async Instituicao() {
      try {
        this.setCarregando(true);
        let response = await this.$http.get("/instituicao", []);
        response.data.forEach(item => {
          this.instituicoes.push({text: item.instituicao, value: item.id})
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setCarregando(false);
      }
    },

    async Cursos_cine() {
      try {
        this.setCarregando(true);
        let response = await this.$http.get("/cusoscine", []);
        response.data.forEach(item => {
          this.cursos_cine.push({text: item.nome_curso, value: item.id})
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setCarregando(false);
      }
    },

    async Municipios() {
      try {
        this.setCarregando(true);
        let response = await this.$http.get("/municipios", []);
        response.data.forEach(item => {
          this.municipios.push({text: item.municipio, value: item.id})
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setCarregando(false);
      }
    },

    async Estados() {
      try {
        this.setCarregando(true);
        let response = await this.$http.get("/estados", []);
        response.data.forEach(item => {
          this.estados.push({text: item.nome, value: item.id})
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setCarregando(false);
      }
    },
  },
};
</script>

<style></style>
