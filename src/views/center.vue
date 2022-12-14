<template>
  <div id="center">
    <div class="down">
      <div class="ranking bg-color-black">
        <span class="fs-xl text mx-2 mb-1 pl-3">运动情况</span>
        <CenterChart />
     </div>
    </div>
  </div>
</template>

<script>
import CenterChart from '@/components/echart/center/centerChartRate'

export default {
  data() {
    return {
      rate: [
        {
          id: 'centerRate1',
          tips: 60,
          colorData: {
            textStyle: '#3fc0fb',
            series: {
              color: ['#00bcd44a', 'transparent'],
              dataColor: {
                normal: '#03a9f4',
                shadowColor: '#97e2f5'
              }
            }
          }
        },
        {
          id: 'centerRate2',
          tips: 40,
          colorData: {
            textStyle: '#67e0e3',
            series: {
              color: ['#faf3a378', 'transparent'],
              dataColor: {
                normal: '#ff9800',
                shadowColor: '#fcebad'
              }
            }
          }
        }
      ]
    }
  },
  components: {
    CenterChart
  }
}
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  width: 547px;
  flex-direction: column;
  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 410px;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
    }
    .ranking {
      padding: 10px;
      width: 100%;
      .dv-scr-rank-board {
        height: 100%;
      }
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 120px;
        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
        .dv-wa-le-po {
          height: 120px;
        }
      }
    }
  }
}
</style>
