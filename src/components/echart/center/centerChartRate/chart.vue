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
            console.log(newData);
        this.options = {
            visualMap: {
                type: 'continuous',
                min: 0,
                max: 10,
                hoverLink:true,
                inRange: {
                color: ['#1cf9de', '#14aaf4', '#d82ed8', '#da1069']
                },
                left: 40,
                bottom: 40
            },
            series: {
                center: ["42%","45%"],
                type: 'sunburst',
                data: [
  {
    name: '有氧运动',
    children: [
      {
        name: '球类',
        value: 15,
        children: [
          {
            name: '羽毛球',
            value: 2
          },
          {
            name: '篮球',
            value: 4,
          },
          {
            name: '网球',
            value: 4
          },
          {
            name:'足球',
            value:2
          },
          {
            name:'排球',
            value:2
          },
          {
            name:'冰球',
            value:1
          }
        ]
      },
      {
        name: '田径类',
        value: 10,
        children: [
          {
            name: '跑步',
            value: 5
          },
          {
            name: '竞走',
            value: 1
          },
          {
            name: '跳高',
            value: 1
          },
          {
            name: '跳远',
            value: 1
          }
        ]
      }
    ]
  },
  {
    name: '无氧运动',
    children: [
      {
        name: '竞技类',
        value:10,
        children: [
          {
            name: '电子竞技',
            value: 1
          },
          {
            name: '举重',
            value: 2
          },
          {
            name:'标枪',
            value:2
          },
          {
            name:'自行车',
            value:3
          }
        ]
      },
      {
      name: '其他',
        value:5,
        children: [
          {
            name: '拔河',
            value: 1
          },
          {
            name: 'keep',
            value: 2
          },
          {
            name:'健身',
            value:1
          }
        ]
      }
    ]
  }
],
                radius: [0, '90%'],
                itemStyle: {
                borderRadius: 10,
                borderWidth: 2
                },
                label: {
                show: true
                }
            }
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