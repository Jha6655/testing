<template>
  <div class="dots" :class="{ light: isLight }">
    <div ref="left" class="dot"></div>
    <div ref="right" class="dot"></div>
  </div>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  props: {
    isLight: {
      type: Boolean,
      default: false,
    },
    startAnimation: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    startAnimation(value) {
      value && this.timeline.play()
    },
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const { left, right } = this.$refs

      const duration = 1

      this.timeline = this.$gsap
        .timeline({
          paused: true,
        })
        .from(left, {
          x: -20,
          autoAlpha: 0,
          duration,
        })
        .from(
          right,
          {
            x: 20,
            autoAlpha: 0,
            duration,
          },
          0
        )
      this.timelines.push(this.timeline)
    },
  },
}
</script>

<style lang="scss" scoped>
.dots {
  position: absolute;
  width: 669px;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  @include min(lg) {
    width: 819px;
    top: 4.3rem;
  }
  @include max(bg) {
    width: 369px;
  }
  @include max(sm) {
    width: 256px;
  }
}
.dot {
  --size: 0.4rem;
  width: var(--size);
  height: var(--size);
  background: var(--color-dark);
  border-radius: 50%;
  @include min(lg) {
    --size: 0.6rem;
  }
}

// light
.dots.light .dot {
  background-color: var(--color-light);
}
</style>
