<template>
  <div ref="trigger" class="about-page__scroll-block">
    <div ref="block" class="scroll-block">
      <div class="scroll-block__left">
        <div ref="graphics" class="scroll-block__graphics"></div>
        <div ref="tabs" class="scroll-block__graphics-tabs"></div>
      </div>
      <div ref="right" class="scroll-block__right">
        <div ref="container" class="scroll-block__slides">
          <div
            v-for="{ description, title, id } in features"
            :key="id"
            class="scroll-block__slide"
          >
            <p class="scroll-block__slide-description p2">{{ description }}</p>
            <h3 class="scroll-block__slide-title h3">{{ title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  props: {
    features: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    timeline: null,
    st: null,
    lottieGraphics: {
      animation: null,
      duration: 0,
    },
    lottieTabs: {
      animation: null,
      duration: 0,
    },
    isLottiesLoaded: false,
    progress: 0,
  }),
  watch: {
    progress(progress) {
      if (!this.isLottiesLoaded) return

      if (progress >= 0.2) {
        this.$gsap.to(this.$refs.tabs, {
          autoAlpha: 1,
          duration: 0.1,
        })
      } else {
        this.$gsap.to(this.$refs.tabs, {
          autoAlpha: 0,
          duration: 0.1,
        })
      }
      this.lottieGraphics.animation.goToAndStop(
        Math.floor(progress * this.lottieGraphics.duration),
        true
      )
      this.lottieTabs.animation.goToAndStop(
        Math.floor(
          (Math.max(progress - 0.2, 0) / 0.8) * this.lottieTabs.duration
        ),
        true
      )
    },
  },
  async mounted() {
    this.animate()
    await this.initLotties()
    this.isLottiesLoaded = true
  },
  beforeDestroy() {
    if (this.lottieGraphics) {
      this.lottieGraphics.animation.destroy()
    }
    if (this.lottieTabs) {
      this.lottieTabs.animation.destroy()
    }
  },
  methods: {
    animate() {
      const { trigger, container, right, block } = this.$refs
      const containerBox = container.getBoundingClientRect()

      this.$gsap.set(this.$refs.tabs, {
        autoAlpha: 0,
      })

      // const height =
      //   window.innerWidth >= 1024
      //     ? containerBox.height * 2
      //     : containerBox.height * 3

      const paddingBottom =
        window.innerWidth >= 1440
          ? 64
          : window.innerWidth >= 1024
          ? 40
          : window.innerWidth >= 768
          ? 32
          : 24

      const yFrom = right.getBoundingClientRect().height * 0.8

      const yTo = -(
        containerBox.height -
        right.getBoundingClientRect().height +
        paddingBottom
      )

      this.timeline = this.$gsap
        .timeline({
          scrollTrigger: {
            trigger,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 0.1,
            onUpdate: ({ progress }) => {
              this.progress = progress
            },
            onEnter: () => {
              this.$gsap.set(block, {
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 'unset',
              })
            },
            onEnterBack: () => {
              this.$gsap.set(block, {
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 'unset',
              })
            },
            onLeave: () => {
              this.$gsap.set(block, {
                position: 'absolute',
                left: 0,
                top: 'unset',
                bottom: 0,
              })
            },
            onLeaveBack: () => {
              this.$gsap.set(block, {
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 'unset',
              })
            },
          },
        })
        .fromTo(
          container,
          {
            y: yFrom,
          },
          {
            y: yTo,
            ease: 'none',
          }
        )

      this.$st.update()
      this.timelines.push(this.timeline)
    },
    initLotties() {
      return Promise.all([this.initLottieGraphics(), this.initLottieTabs()])
    },
    initLottieGraphics() {
      return new Promise((resolve, reject) => {
        this.lottieGraphics.animation = lottie.loadAnimation({
          container: this.$refs.graphics,
          renderer: 'svg',
          autoplay: false,
          path: '/lottie/about.json',
        })

        this.lottieGraphics.animation.addEventListener('data_ready', () => {
          this.lottieGraphics.duration =
            this.lottieGraphics.animation.getDuration(true)
          resolve()
        })
        this.lottieGraphics.animation.addEventListener('data_failed', () => {
          reject(new Error('Cant load animation data ' + '/lottie/about.json'))
        })
      })
    },
    initLottieTabs() {
      return new Promise((resolve, reject) => {
        this.lottieTabs.animation = lottie.loadAnimation({
          container: this.$refs.tabs,
          renderer: 'svg',
          autoplay: false,
          path: '/lottie/tabs.json',
        })
        this.lottieTabs.animation.addEventListener('data_ready', () => {
          this.lottieTabs.duration = this.lottieTabs.animation.getDuration(true)
          resolve()
        })
        this.lottieTabs.animation.addEventListener('data_failed', () => {
          reject(new Error('Cant load animation data ' + '/lottie/tabs.json'))
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.about-page__scroll-block {
  width: 100vw;
  height: 300vh;
  position: relative;
  @include offset-media(margin-top, aquamarine);
  @include max(bg) {
    height: 400vh;
  }
}
.scroll-block {
  pointer-events: none;
  --bg-color-left: #a3a3a3;
  --bg-color-right: #292929;
  width: 100%;
  height: 100vh;
  min-height: vw1440(728);
  display: flex;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  @include min(lg) {
    min-height: vw1920(970);
  }
  @include max(bg) {
    // height: unset;
    min-height: vw1024(517);
  }
  @include max(sm) {
    // height: unset;
    flex-direction: column;
    min-height: 100vh;
  }
}

// left

.scroll-block__left {
  flex: 0 0 50%;
  height: 100%;
  background-color: var(--bg-color-left);
  position: relative;
  @include max(sm) {
    flex-basis: 768px;
  }
  @include max(xs) {
    // flex-basis: 512px;
    flex-basis: 400px;
  }
}

// right

.scroll-block__right {
  flex: 0 0 50%;
  height: 100%;
  background-color: var(--bg-color-right);
  position: relative;
  @include max(sm) {
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0;
    overflow: hidden;
  }
}

// slides
.scroll-block__slides {
  padding: 0 4.8rem;
  @include min(lg) {
    padding: 0 6.4rem;
  }
  @include max(bg) {
    padding: 0 3.4rem;
  }
  @include max(sm) {
    padding: 0 7.4rem;
  }
  @include max(xs) {
    padding: 0 var(--container-padding-mobile);
  }
}

// slide

// .scroll-block__slide {
// }

.scroll-block__slide + .scroll-block__slide {
  margin-top: 33.2rem;
  @include min(lg) {
    margin-top: 44.2rem;
  }
  @include max(bg) {
    margin-top: 19.5rem;
  }
  @include max(sm) {
    margin-top: 13.2rem;
  }
  @include max(xs) {
    margin-top: 12.2rem;
  }
}

// slide title

.scroll-block__slide-title {
  @include offset-media(margin-top, darkgreen);
}

// lottie elements

.scroll-block__graphics,
.scroll-block__graphics-tabs {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
}
</style>
