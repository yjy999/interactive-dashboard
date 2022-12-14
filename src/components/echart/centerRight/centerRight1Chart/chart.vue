<template>
    <div>
      <Echart
        id="centreRight1Chart"
        height="100px"
        width="200px"
      ><dv-percent-pond :config="config" style="width:200px;height:100px;" /></Echart>
    </div>
  </template>
  
  <script>
  import Echart from '@/common/echart'
  export default {
    data () {
      return {
        config: {
        value: 90,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5,
        lineDash: [10, 2],
        localGradient: true
      }
      };
    },
    components: {
      Echart,
    },
    props: {
    },
    watch: {
    }
  };
  </script>