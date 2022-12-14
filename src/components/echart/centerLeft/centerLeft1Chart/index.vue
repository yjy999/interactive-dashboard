<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
import * as echarts from 'echarts';
import heart from '../../../../assets/data/heart.json';

export default {
  data () {
    return {
      cdata: {
        time: [],
        heartrate: [],
        blood: []
      }
    }
  },
  components: {
    Chart,
  },
  mounted () {
    this.setData();
  },
  methods: {
    setData() {
      this.time = [];
      this.heartrate = [];
      this.blood = [];
      for(let i in heart){
        this.cdata.time.push(echarts.time.format("yyyy-MM-dd HH-mm", heart[i].date));
        this.cdata.heartrate.push(heart[i].heartrate);
        this.cdata.blood.push(heart[i].blood);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>