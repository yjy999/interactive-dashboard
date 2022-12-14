<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="480px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data() {
    return {
      options: {},
    }
  },
  components: {
    Echart
  },
  props: {
    StepData: {
      type: Array,
      default: () => ({})
    }
  },
  watch: {
    StepData: {
      handler(newData) {
        this.options = {
          title: {
            text: '',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip : {
            trigger: 'item'
          },
          calendar: [{
            cellSize: [29,27],
            dayLabel: {
              nameMap: 'ZH',
              color: "#fff"
            },
            monthLabel: {
              nameMap: 'ZH',
              color: "#FFF"
            },
            top: 30,
            left: 80,
            range: ['2022-01-01', '2022-06-30'],
            splitLine: {
              show: true,
              lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
              }
            },
            yearLabel: {
              formatter: '{start}  1st',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(39,43,43)',
                borderWidth: 1,
                borderColor: '#111'
              }
            }
          }, 
          {
            cellSize: [29,27],
            dayLabel: {
              nameMap: 'ZH',
              color: "#fff"
            },
            monthLabel: {
              nameMap: 'ZH',
              color: "#FFF"
            },
            top: 250,
            left: 80,
            range: ['2022-07-01', '2022-12-31'],
            splitLine: {
              show: true,
              lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
              }
            },
            yearLabel: {
              formatter: '{start}  2nd',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(39,43,43)',
                borderWidth: 1,
                borderColor: '#111'
              }
            }
          }],
          series: [{
            name: '步数',
            type: 'scatter',
            data: newData,
            coordinateSystem: 'calendar',
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    color: 'rgb(155,246,251)'
                }
            }
          },
          {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: newData,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    color: 'rgb(155,246,251)'
                }
            }
          }
        ]
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
