<template>
  <div ref="text" class="main-page__submit-label p2">
    <DotLabel text="Submit Your Pitch" />
  </div>
</template>

<script>
import DotLabel from '@/components/DotLabel.vue'
export default {
  components: {
    DotLabel,
  },
  props: {
    delay: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    timeline: null,
  }),
  mounted() {
    this.animate()
  },
  beforeDestroy() {
    this.timeline && this.timeline.kill()
  },
  methods: {
    animate() {
      const { text } = this.$refs
      this.timeline = this.$gsap.timeline({
        onComplete: () => {
          this.$emit('endAnimation')
        },
      })
      this.timeline.from(text, {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        delay: this.delay,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-page__submit-label {
  @extend %paddings-frame;
}
</style>
