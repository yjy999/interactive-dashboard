<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import BMIdata from "../../../../assets/data/BMI.json"
export default {
  data () {
    return {
      cdata: {
        year: [],
        BMI: [],
        height: [],
        weight: []
      }
    };
  },
  components: {
    Chart,
  },
  mounted () {
    this.setData();
  },
  methods: {
    setData () {
      this.cdata.year = [];
      this.cdata.BMI = [];
      this.cdata.height = [];
      this.cdata.weight = [];
      for (let i in BMIdata) {
        this.cdata.year.push(BMIdata[i].year);
        this.cdata.BMI.push((BMIdata[i].weight/(BMIdata[i].height*BMIdata[i].height/10000)).toFixed(2));
        this.cdata.height.push(BMIdata[i].height);
        this.cdata.weight.push(BMIdata[i].weight);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>