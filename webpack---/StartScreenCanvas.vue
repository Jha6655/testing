<template>
  <div ref="container" class="start-screen__canvas-wrapper">
    <video
      ref="videodom"
      style="visibility: hidden; position: absolute; pointer-events: none"
      playsinline
      loop
      muted
      crossOrigin="anonymous"
    >
      <source src="/models/tv_square.mp4" />
    </video>
    <div
      ref="label"
      class="start-screen__mode-switcher"
      :class="{ hidden: isHidden }"
    >
      <NightmodeLabel />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { TV } from '@/plugins/TV'
import NightmodeLabel from '@/components/NightmodelLabel.vue'

export default {
  components: {
    NightmodeLabel,
  },
  data: () => ({
    tv: null,
    isHidden: false,
  }),
  async mounted() {
    await this.init3D()
    this.inisScroll()
    this.addEventListeners()
    this.playVideo()
  },
  beforeDestroy() {
    this.setNightMode(false)
    this.removeEventListeners()
  },
  methods: {
    ...mapMutations(['toggleNightMode', 'setNightMode', 'setTV']),
    playVideo() {
      const video = this.$refs.videodom
      if (video.paused) {
        video.play()
        window.addEventListener('click', this.initVideoPlay)
      }
    },
    initVideoPlay() {
      const video = this.$refs.videodom
      if (video.paused) {
        video.play()
      }
      window.removeEventListener('click', this.initVideoPlay)
    },

    async init3D() {
      this.tv = new TV(
        this.$refs.container,
        this.$refs.label,
        this.$refs.videodom
      )
      await this.tv.init()
      this.tv.on('animationEnd', () => {
        const loader = document.querySelector('.loader')
        const loaderInner = loader.querySelector('.loader__inner')
        this.$gsap
          .timeline({
            onComplete: () => {
              loaderInner._lottie && loaderInner._lottie.stop()
              document.querySelector('#scroller').style.overflow = ''
            },
          })
          .set(loader, {
            display: 'block',
            onComplete: () => {
              loaderInner._lottie && loaderInner._lottie.play()
              document.querySelector('#scroller').scrollTo(0, 0)
              document.querySelector('#scroller').style.overflow = 'hidden'
              this.setTV(false)
            },
          })
          .set(loader, {
            display: 'none',
            delay: 1,
          })
      })
      return Promise.resolve()
    },

    inisScroll() {
      const container = document.querySelector('.start-screen-wrapper')
      this.$st.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: ({ progress }) => {
          window.innerWidth < 768 && (this.isHidden = true)
          this.tv.animateCameraPosition(progress)
        },
      })
    },
    onResize() {
      this.tv.resize()
    },
    onMousemove(e) {
      this.tv.setMousePosition(e.clientX, e.clientY)
    },
    onClick() {
      const intersects = this.tv.getIntersects(true)
      if (intersects.includes('button')) {
        this.toggleNightMode()
        this.tv.toggleNightModeTV()
      }
    },
    addEventListeners() {
      window.addEventListener('resize', this.onResize)
      window.addEventListener('mousemove', this.onMousemove)
      window.addEventListener('click', this.onClick)
    },
    removeEventListeners() {
      window.removeEventListener('resize', this.onResize)
      window.removeEventListener('mousemove', this.onMousemove)
      window.removeEventListener('click', this.onClick)
      window.removeEventListener('click', this.initVideoPlay)
    },
  },
}
</script>

<style lang="scss" scoped>
.start-screen__canvas-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.start-screen__mode-switcher {
  position: fixed;
  left: 50%;
  top: 50%;
  // @include max(xs) {
  //   top: unset;
  //   left: 40%;
  //   bottom: 200px;
  //   transform: translateX(-50%);
  // }
}
.start-screen__mode-switcher.hidden {
  transition: 0.5s ease-in-out;
  opacity: 0;
}
</style>
