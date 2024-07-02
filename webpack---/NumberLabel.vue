<template>
  <p ref="label" class="number-label p2">{{ text }}</p>
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
    delay: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.animation()
  },
  methods: {
    animation() {
      const { label } = this.$refs
      this.timelines.push(
        this.$gsap
          .timeline({
            scrollTrigger: {
              trigger: label,
            },
          })
          .from(label, {
            y: 20,
            autoAlpha: 0,
            duration: 0.5,
            delay: this.delay,
            ease: 'power2.out',
          })
      )
    },
  },
}
</script>
