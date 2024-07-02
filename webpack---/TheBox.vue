<template>
  <div ref="box" class="box">
    <div ref="top" class="border-top"></div>
    <div ref="right" class="border-right"></div>
    <div ref="bottom" class="border-bottom"></div>
    <div ref="left" class="border-left"></div>
  </div>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  props: {
    speed: {
      type: Number,
      default: 1,
    },
    delay: {
      type: Number,
      default: 0,
    },
    tTime: {
      type: Number,
      default: 1,
    },
    rTime: {
      type: Number,
      default: 0.5,
    },
    bTime: {
      type: Number,
      default: 1,
    },
    lTime: {
      type: Number,
      default: 0.5,
    },
    options: {
      type: Object,
      default: () => ({}),
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
      const { top, right, bottom, left, box } = this.$refs

      const tTime = this.options.tTime || this.tTime
      const rTime = this.options.rTime || this.rTime
      const bTime = this.options.bTime || this.bTime
      const lTime = this.options.lTime || this.lTime
      const delay = this.options.delay || this.delay

      const scrollTriggerOptions = this.isScrollTrigger
        ? {
            scrollTrigger: {
              trigger: box,
            },
          }
        : {}

      this.timeline = this.$gsap
        .timeline({
          ...scrollTriggerOptions,
          paused: !this.isScrollTrigger,
          delay,
        })
        .from(top, {
          scaleX: 0,
          duration: tTime / this.speed,
        })
        .from(right, {
          scaleY: 0,
          duration: rTime / this.speed,
        })
        .from(bottom, {
          scaleX: 0,
          duration: bTime / this.speed,
        })
        .from(left, {
          scaleY: 0,
          duration: lTime / this.speed,
        })

      this.timelines.push(this.timeline)
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  z-index: 0;
}
.border-top,
.border-right,
.border-bottom,
.border-left {
  position: absolute;
  background-color: var(--color-fade-light);
}
.border-top,
.border-bottom {
  width: 100%;
  height: 1px;
}
.border-left,
.border-right {
  width: 1px;
  height: 100%;
}
.border-top {
  left: 0;
  top: 0;
  transform-origin: left center;
}
.border-right {
  right: 0;
  top: 0;
  transform-origin: center top;
}
.border-bottom {
  left: 0;
  bottom: 0;
  transform-origin: right center;
}
.border-left {
  left: 0;
  top: 0;
  transform-origin: center bottom;
}
</style>
