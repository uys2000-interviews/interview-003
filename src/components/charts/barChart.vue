<template>
  <canvas ref="chart" class="w-full h-full" />
</template>
<script>
import Chart from "chart.js/auto";
export default {
  props: ["labels", "dataSets", "title"],
  mounted() {
    new Chart(this.$refs.chart, {
      type: "bar",
      data: {
        labels: this.labels,
        datasets: this.dataSets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: this.title,
          },
        },
      },
    });
  },
};
</script>
