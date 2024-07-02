<template>
  <div class="loader">
    <div ref="loader" class="loader__inner"></div>
    <img
      v-if="false"
      src="/img/no-signal.gif"
      alt="no-signal"
      class="loader__image"
    />
  </div>
</template>

<script>
import lottie from 'lottie-web'
export default {
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
        container: this.$refs.loader,
        renderer: 'svg',
        autoplay: false,
        path: '/lottie/loader.json',
        loop: true,
        rendererSettings: {
          preserveAspectRatio: 'none',
        },
      })
      this.$refs.loader._lottie = this.lottie
    },
  },
}
</script>
<style lang="scss" scoped>
.loader {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: var(--color-dark);
  z-index: 10000;
  transform-origin: center bottom;
  // transform: scaleY(0);
  display: none;
}

.loader__inner {
  display: block;
  width: 100%;
  height: 100%;
}
.loader__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
