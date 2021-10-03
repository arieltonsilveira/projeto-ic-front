<template>
  <div class="grafico-principal">
    <h1>Grafico Com os Dados dos Acumulados (BRASIL)</h1>
    <apexchart type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  components: {
    apexchart,
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [2000],
        },
      },
      series: [
        {
          name: "Taxa de Permanencia (%)",
          data: [9.45],
        },
        {
          name: "Taxa de Comclusão (%)",
          data: [36.52],
        },
        {
          name: "Taxa de Desistência (%)",
          data: [54.01],
        },
      ],
    };
  },
  props: {
    indice: {
      type: Object,
    },
  },
  watch: {
    indice: {
      handler(val) {
        this.options.xaxis.categories = val.ano_referencia ? [val.ano_referencia] : [0];
        this.series[0].data = val.taxa_pemanencia ? [val.taxa_pemanencia] : [0];
        this.series[1].data = val.taxa_desistencia_acumulada ? [val.taxa_desistencia_acumulada] : [0];
        this.series[2].data = val.taxa_conc_acumulada ? [val.taxa_conc_acumulada] : [0];
      },
      immediate: true,
    },
  },
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