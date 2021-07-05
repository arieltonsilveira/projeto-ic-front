<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Selecione as Opções de Filtro</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="[
                    'Educação',
                    'Artes e humanidades',
                    'Computação e Tecnologias da Informação e Comunicação (TIC)',
                  ]"
                  label="Area Cine"
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="[
                    'UNEMAT',
                  ]"
                  label="Instituição do Curso"
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="4"
              >
                <v-autocomplete
                  :items="datas"
                  label="Ano de Ingresso"
                  hint="Periodo onde o aluno ingressou na Universidade"
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="4"
              >
                <v-autocomplete
                  :items="datas"
                  label="Ano de Ingresso"
                  hint="Periodo onde o aluno ingressou na Universidade"
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="4"
              >
                <v-autocomplete
                  :items="datas"
                  label="Ano de Ingresso"
                  hint="Periodo onde o aluno ingressou na Universidade"
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="9"
                md="9"
              >
                <v-text-field
                  label="Nome do Curso"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="3"
                md="3"
              >
                <v-text-field
                  label="Código Curso"
                  hint="Informe o codigo de cadastro do Curso"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['1', '2', '3']"
                  label="Grau Académico"
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['1', '2']"
                  label="Modelo de Ensino"
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="[
                    'São José dos Quatro Marcos',
                    'Curvelândia',
                    'Mirassol Do Oeste',
                  ]"
                  label="Filtrar por Municipios"
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="[
                    'Mato Grosso',
                    'Piauí',
                    'São Paulo',
                  ]"
                  label="Filtrar por Estado"
                ></v-autocomplete>
              </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    data: () => ({
      dialog: false,
      datas: [
        2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022, 2023, 2024, 2025,
        2026, 2027, 2028, 2029, 2030
      ]
    }),
    methods: {
      showAdd() {
        this.dialog = true;
      },
    }
}
</script>

<style>

</style>