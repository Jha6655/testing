<template>
  <div ref="container" class="start-screen-wrapper">
    <div
      class="start-screen"
      :class="{ 'night-mode': isNightMode, 'faq-opened': isFaqOpened }"
    >
      <StartScreenCanvas />
      <StartScreenHeader />
      <StartScreenFooter />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StartScreenFooter from './StartScreenFooter.vue'
import StartScreenCanvas from './StartScreenCanvas.vue'
import StartScreenHeader from '@/components/main-page/StartScreenHeader.vue'
export default {
  components: {
    StartScreenCanvas,
    StartScreenHeader,
    StartScreenFooter,
  },
  computed: {
    ...mapState(['isNightMode', 'isFaqOpened']),
  },
}
</script>

<style lang="scss" scoped>
.start-screen-wrapper {
  height: 500vh;
  pointer-events: none;
}
.start-screen {
  width: 100vw;
  background-color: var(--color-dark-gray);
  color: var(--color-dark);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

// night mode

.start-screen.night-mode {
  background-color: var(--color-dark-blue);
}
</style>
