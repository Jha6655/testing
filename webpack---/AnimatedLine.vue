<template>
  <div ref="line"></div>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    delay: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 1,
    },
    direction: {
      type: String,
      default: 'right',
    },
    isScrollTrigger: {
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
  mounted() {
    this.animate()
  },
  methods: {
    async animate() {
      await this.$nextTick()
      const { line } = this.$refs
      const duration = this.options.duration || this.duration
      const delay = this.options.delay || this.delay
      const direction = this.options.direction || this.direction

      const options = {}
      switch (direction) {
        case 'left':
          options.scaleX = 0
          options.transformOrigin = 'right center'
          break
        case 'up':
          options.scaleY = 0
          options.transformOrigin = 'center bottom'
          break
        case 'down':
          options.scaleY = 0
          options.transformOrigin = 'center top'
          break
        default:
          options.scaleX = 0
          options.transformOrigin = 'left center'
      }

      const scrollTriggerOptions = this.isScrollTrigger
        ? {
            scrollTrigger: {
              trigger: line,
            },
          }
        : {}

      this.timeline = this.$gsap
        .timeline({
          ...scrollTriggerOptions,
          paused: !this.isScrollTrigger,
        })
        .set(line, {
          transformOrigin: options.transformOrigin,
        })
        .from(line, {
          ...options,
          duration,
          delay,
        })

      this.timelines.push(this.timeline)
    },
  },
}
</script>
