<template>
    <div>
      <Chart :cdata="cdata"/>
    </div>
  </template>
  
  <script>
  import Chart from './chart.vue';
  import sleeptime from '../../../../assets/data/sleep.json'
  
  export default {
    data () {
      return {
        cdata: []
      }
    },
    components: {
      Chart,
    },
    mounted () {
      this.setData();
    },
    methods: {
      setData () {
        this.cdata = [];
        for(let i in sleeptime) {
          this.cdata.push({value:sleeptime[i].times, name:sleeptime[i].perior});
        }
      },
    }
  }
  </script>