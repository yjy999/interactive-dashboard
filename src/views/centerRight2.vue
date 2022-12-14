<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <span class="fs-xl text mx-2">睡眠情况</span>
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <centerRight2Chart1 />
        <dv-decoration-2 style="width:300px;height:25px;" />
        <CenterRight2Chart2 />
      </div>
    </div>
  </div>
</template>

<script>
import centerRight2Chart1 from '@/components/echart/centerRight/centerRight2Chart1'
import CenterRight2Chart2 from '@/components/echart/centerRight/centerRight2Chart2'
export default {
  data() {
    return {
    }
  },
  components: { centerRight2Chart1, CenterRight2Chart2 }
}
</script>

<style lang="scss" scoped>
#centerRight2 {
  $box-height: 410px;
  $box-width: 300px;
  padding: 5px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 100%;
      height: 160px;
    }
  }
}
</style>
