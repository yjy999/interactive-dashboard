<template>
  <div>
    <Echart
      :options="options"
      id="centreRight2Chart1"
      height="170px"
      width="260px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Array,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 175
          },  
          series: [
            {
              name: '睡眠时长',
              type: 'pie',
              center: ['45%', '50%'],
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 20,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: newData
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>