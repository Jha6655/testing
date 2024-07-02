<template>
  <div ref="logo" class="logo"></div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  props: {
    speed: {
      type: Number,
      default: 1,
    },
    direction: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      lottie: null,
    }
  },
  mounted() {
    this.initLottie()
  },
  beforeDestroy() {
    this.lottie && this.lottie.destroy()
  },
  methods: {
    initLottie() {
      this.lottie = lottie.loadAnimation({
        container: this.$refs.logo, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/lottie/logo.json', // the path to the animation json
      })
      this.lottie.setSpeed(this.speed)
      this.lottie.setDirection(this.direction)
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  width: 3.3rem;
  @include max(lg) {
    width: 2.5rem;
  }
  @include max(xs) {
    width: 3rem;
  }
}
</style>
