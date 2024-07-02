<template>
  <div ref="section" class="rotate-text">
    <TypedAnimation component="h2" class="rotate-text__title rotate-title">
      {{ text }}
    </TypedAnimation>
    <div class="rotate-text__wheel-wrapper">
      <div
        ref="wheel"
        class="rotate-text__wheel"
        :class="{ active: questComplete }"
      >
        <div class="rotate-text__wheel-inner">
          <TypedAnimation
            :trigger="{ el: $refs.section }"
            class="rotate-text__wheel-text rotate-title"
          >
            {{ text }}
          </TypedAnimation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
import TypedAnimation from '@/components/animations/TypedAnimation.vue'
export default {
  components: {
    TypedAnimation,
  },
  mixins: [AnimationsControlMixin],
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    timeline: null,
    timeout: null,
    timer: null,
    questComplete: false,
  }),
  mounted() {
    this.animate()
    this.addEventListeners()
  },
  beforeDestroy() {
    this.timer && clearTimeout(this.timer)
    this.removeEventListeners()
  },
  methods: {
    async animate() {
      await this.$nextTick()
      this.timelines.forEach((tl) => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill()
        }
        tl.kill()
      })
      const { section, wheel } = this.$refs
      const angle = {
        value: 45,
      }
      this.timeline = this.$gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            scrub: 0.1,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: () => {
              this.$gsap.to(wheel, {
                rotate: angle.value,
              })
              this.timer && clearTimeout(this.timer)
              this.timer = setTimeout(() => {
                if (Math.abs(angle.value) <= 0.005) {
                  this.$gsap.to(wheel, {
                    rotate: 0,
                  })
                  this.timeline.kill()
                  this.questComplete = true
                }
              }, 1000)
            },
          },
        })
        .fromTo(
          angle,
          {
            value: 45,
          },
          {
            value: -15,
          }
        )
      this.timelines.push(this.timeline)
    },
    onResize() {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.animate()
      }, 100)
    },
    addEventListeners() {
      window.addEventListener('resize', this.onResize)
    },
    removeEventListeners() {
      window.removeEventListener('resize', this.onResize)
    },
  },
}
</script>

<style lang="scss" scoped>
.rotate-text {
  position: relative;
  width: 120rem;
  @include min(lg) {
    width: 153.8rem;
  }
  @include max(bg) {
    width: 80.9rem;
  }
  @include max(sm) {
    width: 60rem;
  }
  @include max(xs) {
    width: 34.3rem;
  }
}
.rotate-text__title {
  text-align: center;
}

.rotate-title {
  font-size: 12.4rem;
  @include min(lg) {
    font-size: vw1920(162);
  }
  @include max(bg) {
    font-size: 8rem;
  }
  @include max(sm) {
    font-size: 6.5rem;
  }
  @include max(xs) {
    font-size: 4.8rem;
  }
}

.rotate-text__wheel-wrapper {
  --size: 58.3rem;
  position: absolute;
  left: 50%;
  top: 10.7rem;
  border-radius: 50%;
  overflow: hidden;
  width: var(--size);
  height: var(--size);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-dark);
  @include min(lg) {
    top: 13.3rem;
    --size: 73rem;
  }
  @include max(bg) {
    --size: 45.6rem;
    top: 6rem;
  }
  @include max(sm) {
    --size: 34rem;
    top: 4.6rem;
  }
  @include max(xs) {
    --size: 29.6rem;
    top: 5.1rem;
  }
}
.rotate-text__wheel {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  // transform: rotate(10deg);
}
.rotate-text__wheel.active {
  background-color: #ffffff;
  color: var(--color-dark);
  transition: var(--transition);
}
.rotate-text__wheel::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid var(--color-fade-light);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.rotate-text__wheel::after {
  --size: 0.8rem;
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color-fade-light);
  @include min(lg) {
    --size: 1rem;
  }
  @include max(bg) {
    --size: 0.6rem;
  }
  @include max(sm) {
    --size: 0.4rem;
  }
}
.rotate-text__wheel-inner {
  position: absolute;
  width: 120rem;
  top: -10.7rem;
  left: 50%;
  transform: translateX(-50%);
  @include min(lg) {
    width: 153.8rem;
    top: -13.3rem;
  }
  @include max(bg) {
    top: -6rem;
    width: 80.9rem;
  }
  @include max(sm) {
    width: 60rem;
    top: -4.6rem;
  }
  @include max(xs) {
    width: 34.3rem;
    top: -5.1rem;
  }
}
.rotate-text__wheel-text {
  text-align: center;
}
</style>
