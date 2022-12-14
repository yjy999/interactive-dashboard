<template>
  <div>
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="480px"
      width="100%"
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
        const colors = ['rgb(159,230,184)', 'rgb(255,240,101)', 'rgb(255,159,127)'];
        this.options = {
          color: colors,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            top: '10%',
            right: '18%',
            left: '4%'
          },
          legend: {
            data: ['体重', '身高', 'BMI']
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: newData.year
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '体重',
              position: 'right',
              alignTicks: false,
              splitLine:{
                  show:false
              },

              axisLine: {
                show: true,
                lineStyle: {
                  color: colors[0]
                }
              },
              axisLabel: {
                formatter: '{value} kg'
              }
            },
            {
              type: 'value',
              name: '身高',
              position: 'right',
              alignTicks: true,
              offset: 80,
              splitLine:{
                  show:false
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: colors[1]
                }
              },
              axisLabel: {
                formatter: '{value} cm'
              }
            },
            {
              type: 'value',
              name: 'BMI',
              position: 'left',
              alignTicks: true,
              splitLine:{
                  show:false
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: colors[2]
                }
              },
              axisLabel: {
                formatter: '{value} '
              }
            }
            ],
            series: [
              {
                name: '体重',
                type: 'bar',
                data: newData.weight,
                markPoint: {
                  data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                  ]
                },
                markLine: {
                  data: [{ type: 'average', name: 'Avg' }]
                },
              },
              {
                name: '身高',
                type: 'bar',
                yAxisIndex: 1,
                data: newData.height,
                markPoint: {
                  data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                  ]
                },
                markLine: {
                  data: [{ type: 'average', name: 'Avg' }]
                },
              },
              {
                name: 'BMI',
                type: 'line',
                yAxisIndex: 2,
                data: newData.BMI,
                markPoint: {
                  data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                  ]
                },
              },
              
            ],
            dataZoom : [
              {
                type: 'slider',
                show: true,
                height: '10',
                start: 0,
                end: 100,
                xAxisIndex: [0],
              },
            ],

        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>