<template>
  <div ref="wrapper" class="canvas-wrapper"></div>
</template>

<script>
import { Grid, Snake, Wave } from '@/plugins/Snake'

export default {
  layout: 'empty',
  data: () => ({
    game: null,
    gui: null,
  }),
  mounted() {
    this.createGame()
    if (window.innerWidth >= 768) {
      this.addEventListeners()
    }
  },
  beforeDestroy() {
    this.destroyGame()
    this.removeEventListeners()
  },
  methods: {
    createGame() {
      // only for a development
      // this.addGui()

      /***********************************/

      this.wave = new Wave(this.$refs.wrapper)
      this.grid = new Grid(this.$refs.wrapper)
      this.game = new Snake(this.$refs.wrapper, {
        snakeLength: 20,
        infiniteMdoe: false,
        speed: 0,
      })
      this.game.start()
    },
    destroyGame() {
      // this.gui.destroy()
      this.game.destroy()
      this.wave.destroy()
    },
    addGui() {
      this.gui = new this.$datgui.GUI()
      const speed = { value: 1 }
      const length = { value: 20 }
      const infinite = { value: false }
      this.gui
        .add(speed, 'value')
        .min(0.1)
        .max(1)
        .step(0.02)
        .name('snake speed')
        .onChange(() => {
          this.game.setSpeed(speed.value)
        })

      this.gui
        .add(length, 'value')
        .min(10)
        .max(500)
        .step(5)
        .name('snake length')
        .onChange(() => {
          this.game.setSnakeLength(length.value)
        })
      this.gui
        .add(infinite, 'value')
        .name('infinite')
        .onChange(() => {
          this.game.setInfiniteMode(infinite.value)
        })
    },
    addEventListeners() {
      window.addEventListener('mousemove', this.onMousemove)
      window.addEventListener('resize', this.onResize)
    },
    removeEventListeners() {
      window.removeEventListener('mousemove', this.onMousemove)
      window.removeEventListener('resize', this.onResize)
    },
    onMousemove(e) {
      const grid = this.$refs.wrapper.querySelector('canvas')
      const gridBox = grid.getBoundingClientRect()
      this.game.setMousePosition({
        x: e.clientX - gridBox.left,
        y: e.clientY - gridBox.top,
      })
      this.wave.setMousePosition({
        x: e.clientX - gridBox.left,
        y: e.clientY - gridBox.top,
      })
    },
    onResize() {
      this.grid.resize()
      this.game.resize()
      this.wave.resize()
    },
  },
}
</script>

<style lang="scss" scoped>
.canvas-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
::v-deep canvas {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-fade-light);
}
</style>
