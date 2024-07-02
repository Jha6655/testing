<template>
  <p class="clock p2" :class="{ light: isLight }">{{ fullTime }}</p>
</template>

<script>
export default {
  props: {
    isLight: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    date: new Date(),
    timer: null,
  }),
  computed: {
    hours() {
      let hours = this.date.getHours()
      hours = hours % 12
      hours = hours === 0 ? 12 : hours
      hours = hours < 10 ? '0' + hours : hours
      return hours
    },
    minutes() {
      let minutes = this.date.getMinutes()
      minutes = minutes < 10 ? '0' + minutes : minutes
      return minutes
    },
    ampm() {
      return this.date.getHours() >= 12 ? 'pm' : 'am'
    },
    fullTime() {
      return `${this.hours} : ${this.minutes} ${this.ampm}`
    },
  },
  mounted() {
    this.initClock()
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  methods: {
    initClock() {
      this.timer = setInterval(() => {
        this.date = new Date()
      }, 1000)
    },
  },
}
</script>

<style scoped lang="scss">
.clock.light {
  color: var(--color-light);
}

// night mode
.night-mode .clock {
  color: var(--color);
}
</style>
