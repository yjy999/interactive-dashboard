<template>
    <div>
      <Echart
        :options="options"
        id="centreRight2Chart2"
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
            legend: {
                textStyle:{
                        color:'#fff',
                        fontSize:12
                    },
                left: 175
            },
            radar: [
                {
                    indicator: [
                        { text: '22:00前' },
                        { text: '24:00前' },
                        { text: '1:00前' },
                        { text: '2:00前' },
                        { text: '2:00后' }
                    ],
                    center: ['45%', '55%'],//中心位置
                    radius: 55,//调整雷达图的大小
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        formatter:'{value}',
                        textStyle: {
                            color:'#72ACD1'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(114, 172, 209, 0.2)',
                            'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                            'rgba(114, 172, 209, 0.8)', 'rgba(255, 0, 0, 1)'],
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            lineStyle: {
                                width: 1
                            }
                        }
                    },
                    data: [
                        {
                            value: newData,
                            name: '睡眠倾向',
                            symbolSize: 1,
                            areaStyle: {
                                normal: {
                                    color: 'rgba(255, 255, 255, 0.5)'
                                }
                            }
                        }
                    ]
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