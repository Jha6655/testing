<template>
  <button v-if="isButton" ref="button" class="cta-button a1">
    <span class="cta-button__cover"></span>
    <span ref="border" class="cta-button__border"></span>
    <span ref="text" class="cta-button__text">{{ text }}</span>
  </button>
  <NuxtLink v-else ref="button" class="cta-button a1" :to="href">
    <span class="cta-button__cover"></span>
    <span ref="border" class="cta-button__border"></span>
    <span ref="text" class="cta-button__text">{{ text }}</span>
  </NuxtLink>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  props: {
    href: {
      type: String,
      default: '/',
    },
    text: {
      type: String,
      default: 'Get In Touch',
    },
    isScrollTrigger: {
      type: Boolean,
      default: true,
    },
    delay: {
      type: Number,
      default: 0,
    },
    isButton: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    timeline: null,
  }),
  watch: {
    isScrollTrigger(value) {
      value && this.timeline.play()
    },
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const { border, text } = this.$refs

      const button = this.$refs.button.$el
        ? this.$refs.button.$el
        : this.$refs.button

      const options = this.isScrollTrigger
        ? {
            scrollTrigger: {
              trigger: button,
            },
          }
        : {}
      this.timeline = this.$gsap
        .timeline({
          delay: this.delay,
          paused: !this.isScrollTrigger,
          ...options,
        })

        .from(border, {
          width: button.getBoundingClientRect().height,
          duration: 0.5,
          ease: 'power2.inOut',
          clearProps: 'all',
          autoAlpha: 0,
        })
        .from(text, {
          autoAlpha: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          clearProps: 'all',
        })
      this.timelines.push(this.timeline)

      return Promise.resolve()
    },
  },
}
</script>

<style lang="scss" scoped>
.cta-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  --border-radius: 5.4rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
  padding: 0 2.2rem;
  margin: 0;
  height: 4rem;
  @include min(lg) {
    height: 5rem;
    padding: 0 2.2rem;
  }
  @include max(xs) {
    padding: 0 3.2rem;
  }
}
.cta-button__border {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-light);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.cta-button__cover {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  border-radius: var(--border-radius);
  background-color: var(--color-light);
  transition: var(--transition-300);
}
.cta-button__text {
  mix-blend-mode: difference;
  display: inline-block;
  position: relative;
  top: -0.1rem;
}

// hover

.cta-button:hover .cta-button__cover {
  @include min(md) {
    width: 100%;
  }
}
</style>
