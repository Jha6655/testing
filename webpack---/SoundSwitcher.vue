<template>
  <button
    class="sound-switcher"
    :class="{ active: !isMute }"
    @click="toggleSound"
  >
    <span class="sound-switcher__text p2">Sound</span>
    <SoundSwitcherIcon />
  </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SoundSwitcherIcon from './SoundSwitcherIcon.vue'
export default {
  components: {
    SoundSwitcherIcon,
  },
  data: () => ({
    audio: null,
  }),
  computed: {
    ...mapState(['isMute', 'isNightMode']),
  },
  watch: {
    isMute(value) {
      if (!value) {
        try {
          this.audio.currentTime = 0
          this.audio.play()
        } catch (error) {
          console.log('Cant play audio: ', error)
        }
      } else {
        try {
          this.audio.pause()
        } catch (error) {
          console.log('Cant pause audio: ', error)
        }
      }
    },
    isNightMode(value) {
      if (!value) {
        this.audio.src = '/audio/background.mp3'
      } else {
        this.audio.src = '/audio/background_dark_mode.mp3'
      }
      if (this.isMute) return
      this.audio.currentTime = 0
      this.audio.play()
    },
  },
  mounted() {
    this.audio = new Audio()
    this.audio.src = '/audio/background.mp3'
    this.audio.loop = true
  },
  beforeDestroy() {
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
    this.turnOffSound(true)
  },
  methods: {
    ...mapMutations(['toggleSound', 'turnOffSound']),
  },
}
</script>

<style lang="scss" scoped>
.sound-switcher {
  --color: var(--color-dark);
  display: flex;
  align-items: center;
  color: var(--color);
  pointer-events: all;
}
.sound-switcher__text {
  margin-right: 0.8rem;
  // margin-bottom: -0.4rem;
  margin-bottom: -0.2rem;
  @include min(lg) {
    margin-right: 1.6rem;
    margin-bottom: -0.3rem;
    // margin-bottom: -0.5rem;
  }
}

// night mode

.night-mode .sound-switcher,
.faq-opened .sound-switcher {
  color: var(--color-light);
}
</style>
