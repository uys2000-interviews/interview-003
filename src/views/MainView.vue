<template>
  <div class="flex flex-wrap w-fit mx-auto gap-1">
    <div class="w-[400px] md:w-[500px] xl:w-[600px] max-w-screen h-[400px] md:h-[500px] xl:h-[600px] max-h-screen mx-auto">
      <polar-area class="flex" v-if="t1" :labels="t1.labels" :dataSets="t1.datasets" title="Polar T1 Data" />
    </div>
    <div class="w-[400px] md:w-[500px] xl:w-[600px] max-w-screen h-[400px] md:h-[500px] xl:h-[600px] max-h-screen mx-auto">
      <polar-area class="flex" v-if="t2" :labels="t2.labels" :dataSets="t2.datasets" title="Polar T2 Data" />
    </div>
    <div class="w-[400px] md:w-[500px] xl:w-[600px]  max-w-screen h-[200px] md:h-[250px] xl:h-[300px] max-h-screen mx-auto">
      <bar-chart class="flex" v-if="t1" :labels="t1.labels" :dataSets="t1.datasets" title="Bar T1 Data" />
    </div>
    <div class="w-[400px] md:w-[500px] xl:w-[600px]  max-w-screen h-[200px] md:h-[250px] xl:h-[300px] max-h-screen mx-auto">
      <bar-chart class="flex" v-if="t2" :labels="t2.labels" :dataSets="t2.datasets" title="Bar T2 Data" />
    </div>
    <div class="w-[400px] md:w-[500px] xl:w-[600px]  max-w-screen h-[200px] md:h-[250px] xl:h-[300px] max-h-screen mx-auto">
      <line-chart class="flex" v-if="t1" :labels="t1.labels" :dataSets="t1.datasets" title="Line T1 Data" />
    </div>
    <div class="w-[400px] md:w-[500px] xl:w-[600px]  max-w-screen h-[200px] md:h-[250px] xl:h-[300px] max-h-screen mx-auto">
      <line-chart class="flex" v-if="t2" :labels="t2.labels" :dataSets="t2.datasets" title="Line T2 Data" />
    </div>
    <div class="w-full cm">
      <div class="p-5">
        <div><a target="_blank" href="https://www.linkedin.com/in/uys2000/">LinkedIn</a></div>
        <div><a target="_blank" href="https://mehmetuysal.tech/">My Web Site</a></div>
        <div><a target="_blank" href="https://github.com/uys2000">Github</a></div>
        <div><a target="_blank" href="https://mehmetuysal.tech/">Proje Codes</a></div>
      </div>
      <div class="p-5">
        <div><a target="_blank" href="https://chartjs.org/">ChartJs</a></div>
        <div><a target="_blank" href="https://firebase.google.com/">Firebase</a></div>
        <div><a target="_blank" href="https://tailwindcss.com/">TailwindCss</a></div>
        <div><a target="_blank" href="https://vuejs.org/">VueJs</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { readData, writeData } from "@/services/firebase/fireStore";
import barChart from "@/components/charts/barChart";
import polarArea from "@/components/charts/polarArea";
import lineChart from "@/components/charts/lineChart";

import { t1, t2 } from "@/services/exampleData";
export default {
  components: { barChart, polarArea, lineChart },
  data() {
    return {
      t1: null,
      t2: null,
      t: 0,
    };
  },
  methods: {
    getDatas: function () {
      readData("t1").then((res) => (this.t1 = res.data()));
      readData("t2").then((res) => (this.t2 = res.data()));
    },
    writeDataExampleDatas: function () {
      this.t += 1;
      writeData("t1", t1).then(() => (this.t == 2 ? this.getDatas() : 0));
      writeData("t2", t2).then(() => (this.t == 2 ? this.getDatas() : 0));
    },
  },
  mounted() {
    this.writeDataExampleDatas();
    this.getDatas();
  },
};
</script>
