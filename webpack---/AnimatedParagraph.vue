<template>
  <p ref="text"><slot></slot></p>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  props: {
    text: {
      type: String,
      default: '',
    },
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
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const { text } = this.$refs
      const duration = this.options.duration || this.duration
      const delay = this.options.delay || this.delay

      this.timelines.push(
        this.$gsap
          .timeline({
            scrollTrigger: {
              trigger: text,
            },
          })
          .from(text, {
            yPercent: 50,
            autoAlpha: 0,
            duration,
            delay,
          })
      )
    },
  },
}
</script>
