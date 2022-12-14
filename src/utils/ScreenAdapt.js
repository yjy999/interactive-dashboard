// 屏幕适配
// 默认缩放值
const scale = {
  width: '1',
  height: '1',
}

//尺寸、比例
const ScreenWidth = 1920
const ScreenHeight = 1080
const Proportion = parseFloat((ScreenWidth / ScreenHeight).toFixed(5))

export default {
  data() {
    return {
      // * 定时函数 
      drawTiming: null
    }
  },
  mounted () {
    this.calcRate()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    calcRate () {
      const appRef = this.$refs["appRef"]
      if (!appRef) return 
      const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5)) //当前屏幕宽高比
      if (appRef) {
        if (currentRate > Proportion) {
          // 表示更宽
          scale.width = ((window.innerHeight * Proportion) / ScreenWidth).toFixed(5)
          scale.height = (window.innerHeight / ScreenHeight).toFixed(5)
          appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
        } else {
          // 表示更高
          scale.height = ((window.innerWidth / Proportion) / ScreenHeight).toFixed(5)
          scale.width = (window.innerWidth / ScreenWidth).toFixed(5)
          appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
        }
      }
    },
    resize () {
      clearTimeout(this.drawTiming)
      this.drawTiming = setTimeout(() => {
        this.calcRate()
      }, 0)
    }
  },
}