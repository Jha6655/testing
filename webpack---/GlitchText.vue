<template>
  <div ref="title" class="title h1">
    <div class="texts">
      <div v-for="index in 10" :key="index" class="text">
        <div class="text-inner text-inner--animated" :class="'text-' + index">
          {{ title1 }}<br />
          {{ title2 }}<br />
          {{ title3 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      default: 5,
    },
    stagger: {
      type: Number,
      default: 0.05,
    },
    offsetX: {
      type: Number,
      default: 50,
    },
    offsetY: {
      type: Number,
      default: 10,
    },
    title1: {
      type: String,
      default: '',
    },
    title2: {
      type: String,
      default: '',
    },
    title3: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isReady: true,
  }),
  mounted() {
    this.animate()
  },
  beforeDestroy() {
    this.isReady = false
  },
  methods: {
    animate() {
      const { title } = this.$refs
      const parts = title.querySelectorAll('.text-inner--animated')

      Array.from(parts).forEach((part) => {
        this.glitch(part)
      })
    },
    glitch(part) {
      console.log('glitch')
      const offsetX = this.offsetX
      const offsetY = this.offsetY
      const delay = this.delay + Math.random() * this.stagger
      const tl = this.$gsap.timeline({
        onComplete: () => {
          if (this.isReady) {
            this.glitch(part)
          }
        },
      })

      tl.set(part, {
        x: 0,
        y: 0,
      })
        .set(
          part,

          {
            x: -offsetX + Math.random() * offsetX * 2,
            y: -offsetY + Math.random() * offsetY * 2,
            duration: 0,
            delay,
          }
        )
        .set(
          part,
          {
            x: 0,
            y: 0,
          },
          delay + 0.05
        )
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
}
.text {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
}
.text-inner {
  text-align: center;
}

$count: 10;

@for $i from 1 through $count {
  .text-#{$i} {
    clip-path: inset(#{($i - 1) * 9.9%} 0 #{($count - $i) * 9.9%} 0);
  }
}
</style>
