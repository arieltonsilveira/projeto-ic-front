<template>
  <div class="grafico-principal">
    <h1 id="titulo">{{ title }}</h1>
    <div id="chart">
      <apexchart
        type="line"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
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
      title: "",
      series: [
        {
          name: "PERMANENCIA",
          data: [87.3886, 69.339, 53.7292, 36.4371, 19.4701, 9.1238],
        },
      ],
      chartOptions: {
        chart: {
          height: 800,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ["2014", "2015", "2016", "2017", "2018", "2019"],
        },
      },
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
        this.title = val.title ? val.title : "ERROR";
        this.series[0].name = val.name ? val.name : "ERROR";
        this.series[0].data = val.data ? val.data : [0];
        this.chartOptions.xaxis.categories = val.categories ? val.categories : [0];
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
#titulo {
  padding-top: 10%;
}

.grafico-principal {
  text-align: center;
  margin-top: 1%;
  margin-left: 20%;
  margin-right: 10%;
}
</style>