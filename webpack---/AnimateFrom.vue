<template>
  <component :is="tag" ref="component">
    <slot></slot>
  </component>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    delay: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 1,
    },
    y: {
      type: Number,
      default: 0,
    },
    x: {
      type: Number,
      default: 0,
    },
    isPercent: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    isScrollTrigger: {
      type: Boolean,
      default: true,
    },
    isAlpha: {
      type: Boolean,
      default: true,
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
  async mounted() {
    await this.animate()
  },
  methods: {
    async animate() {
      await this.$nextTick()
      const { component } = this.$refs
      const element = component.$el ? component.$el : component
      const duration = this.options.duration || this.duration
      const delay = this.options.delay || this.delay

      const scrollTriggerOptions = this.isScrollTrigger
        ? {
            scrollTrigger: {
              trigger: element,
            },
          }
        : {}

      const offsets = this.isPercent
        ? { xPercent: this.x, yPercent: this.y }
        : { x: this.x, y: this.y }

      this.timeline = this.$gsap
        .timeline({
          ...scrollTriggerOptions,
          paused: !this.isScrollTrigger,
        })
        .from(element, {
          transition: 'unset',
          autoAlpha: this.isAlpha ? 0 : 1,
          ...offsets,
          duration,
          delay,
          clearProps: 'all',
        })

      this.timelines.push(this.timeline)
      return Promise.resolve()
    },
  },
}
</script>
