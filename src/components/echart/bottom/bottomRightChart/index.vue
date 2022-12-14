<template>
  <div>
    <Chart :StepData="StepData" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import * as echarts from 'echarts';
import StepcountJson from '../../../../assets/data/stepcount.json'
export default {
  data () {
    return {
      StepData: [],
      drawTiming: null,
    }
  },
  components: {
    Chart
  },
  mounted () {
    this.drawTimingFn();
  },
  beforeDestroy () {
    clearInterval(this.drawTiming);
  },
  methods: {
    drawTimingFn () {
      this.setData();
      this.drawTiming = setInterval(() => {
        this.setData();
      }, 6000);
    },
    setData () {
      this.StepData = [];
      for(let i in StepcountJson) {
        this.StepData.push([echarts.time.format("yyyy-MM-dd", StepcountJson[i].date),StepcountJson[i].stepcount]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>