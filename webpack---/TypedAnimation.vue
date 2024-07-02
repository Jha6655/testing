<template>
  <component :is="component" ref="title">
    <slot></slot>
  </component>
</template>

<script>
import SplitText from 'gsap/SplitText'
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  props: {
    component: {
      type: String,
      default: 'h1',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    typeSpeed: {
      type: Number,
      default: 0.05,
    },
    scrollTrigger: {
      type: Object,
      default: () => ({}),
    },
    isScrollTrigger: {
      type: Boolean,
      default: true,
    },
    delay: {
      type: Number,
      default: 0,
    },
    callback: {
      type: Function,
      default: () => {},
    },
    trigger: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    timeline: null,
  }),
  watch: {
    isScrollTrigger(value) {
      if (value) {
        this.timeline.play()
      }
    },
  },
  async mounted() {
    await this.animate()
  },
  methods: {
    async animate() {
      await document.fonts.ready
      await this.$nextTick()

      const title = this.$refs.title.$el
        ? this.$refs.title.$el
        : this.$refs.title

      const split = new SplitText(title, {
        type: 'words,chars',
      })

      this.$gsap.set(split.chars, {
        autoAlpha: 0,
      })

      const scrollTriggerOptions =
        this.options.isScrollTrigger || this.isScrollTrigger
          ? {
              scrollTrigger: {
                trigger: this.trigger.el ? this.trigger.el : title,
                ...this.scrollTrigger,
              },
            }
          : {}

      this.timeline = this.$gsap
        .timeline({
          ...scrollTriggerOptions,
          paused: !this.isScrollTrigger,
          delay: this.delay,
          onComplete: () => {
            this.$emit('onComplete')
            this.callback()
          },
        })
        .set(split.chars, {
          autoAlpha: 1,
          stagger: this.typeSpeed,
        })

      this.timelines.push(this.timeline)

      return Promise.resolve()
    },
  },
}
</script>
