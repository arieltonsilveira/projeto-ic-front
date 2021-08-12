<template>
  <div class="grafico-principal">
    <h1>Grafico Com os Dados dos Acumulados (BRASIL)</h1>
    <apexchart
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import apexchart from 'vue-apexcharts'
//import VueApexCharts from "vue-apexcharts";
// Vue.use(VueApexCharts)

// Vue.component('apexchart', VueApexCharts)

export default {
    components: {
        apexchart
    },
  data: () => ({
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [2019]
        }
      },
      series: [{
        name: 'Taxa de Permanencia (%)',
        data: [9.45]
      },
      {
        name: 'Taxa de Comclusão (%)',
        data: [36.52]
      },
      {
        name: 'Taxa de Desistência (%)',
        data: [54.01]
      }]
    }),
};
</script>

<style>
.grafico-principal {
  text-align: center;
  margin-top: 1%;
  margin-left: 20%;
  margin-right: 10%;
}
</style>