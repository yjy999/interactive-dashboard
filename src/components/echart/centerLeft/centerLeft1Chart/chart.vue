<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="400px"
      width="650px"
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
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          grid: {
            bottom: 100,
            left: 60
          },
          width: 530,
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  animation: false,
                  label: {
                      backgroundColor: '#505765'
                  }
              }
          },
          legend: {
              data: ['心率', '血氧饱和度'],
          },
          dataZoom: [
              {
                  show: true,
                  realtime: true,
                  bottom: 70,
                  height: '10',
                  start: 60,
                  end: 61
              },
              {
                  type: 'inside',
                  realtime: true,
                  start: 60,
                  end: 61
              }
          ],
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  axisLine: { onZero: false },
                  // prettier-ignore
                  data: newData.time
              }
          ],
          yAxis: [
              {
                  name: '心率(次/分钟)',
                  type: 'value',
                  max: 250,
                  min: 0,
                  interval: 50
              },
              {
                  name: '血氧饱和度(%)',
                  type: 'value',
                  max: 100,
                  min: 90,
                  interval: 2.5
              }
          ],
          series: [
              {
                  name: '心率',
                  type: 'line',
                  color: 'rgb(132,206,210)',
                  lineStyle: {
                      width: 1
                  },
                  emphasis: {
                      focus: 'series'
                  },

                  // prettier-ignore
                  data: newData.heartrate
              },
              {
                  name: '血氧饱和度',
                  type: 'line',
                  yAxisIndex: 1,
                  lineStyle: {
                      width: 1
                  },
                  emphasis: {
                      focus: 'series'
                  },
                  data: newData.blood
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

<style lang="scss" scoped>
</style>