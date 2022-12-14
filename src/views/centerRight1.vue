<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2">部分身体数据</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <div class="part1">
          <div class="innerfont">血氧饱和度</div><dv-percent-pond :config="config" style="width:200px;height:100px;float: left;" />
        </div>
        <div class="part2">
          <div class="innerfont">心率</div>
            <div class="heart">
                <img src="../assets/img/heart.png" align="absmiddle"><span>60</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        value: 90,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5,
        lineDash: [10, 2],
        localGradient: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 410px;
$box-width: 340px;
#centerRight1 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    margin-top: 15px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .part1 {
      .innerfont {
        font-weight: bold;
        padding-left: 55px;
        margin-bottom: 10px;
      }
    }
    .part2 {
      width: 250px;
      height: 200px;
      .innerfont {
        font-weight: bold;
        margin-top: 30px;
        margin-bottom: 10px;
        padding-left: 30px;
        margin-left: 75px;
      }
      img {
        margin-left: 20px;
        margin-right: 20px;
        width: 100px;
        height: 100px;
      }
      .heart{
        margin-left: 15px;
        font-size: 60px;
        font-weight: bold;
      }
    }
  }
}
</style>
