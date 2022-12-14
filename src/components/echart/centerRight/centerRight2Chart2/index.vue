<template>
    <div>
      <Chart :cdata="cdata"/>
    </div>
  </template>
  
  <script>
  import Chart from './chart.vue';
  import sleeptend from '../../../../assets/data/sleeptend.json'
  
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
        for(let i in sleeptend) {
          this.cdata.push(sleeptend[i].count);
        }
      },
    }
  }
  </script>