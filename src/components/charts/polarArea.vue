<template></template>

<script>
export default {
  props: ["labels", "dataSets"],
  mounted() {
    new Chart(this.$refs.chart, {
      type: "polarArea",
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
      },
    });
  },
};
</script>
