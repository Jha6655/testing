<template>
  <button
    v-if="isButton"
    class="link-switcher p2"
    @mouseenter="onMouseover"
    @mouseleave="onMouseleave"
  >
    <span class="link-switcher__icon">
      <LinkSwitcherIcon />
    </span>
    <span class="link-switcher__text">{{ text }}</span>
  </button>

  <NuxtLink
    v-else
    :to="link"
    class="link-switcher p2"
    @mouseenter.native="onMouseover"
    @mouseleave.native="onMouseleave"
  >
    <span class="link-switcher__icon">
      <LinkSwitcherIcon />
    </span>
    <span class="link-switcher__text">{{ text }}</span>
  </NuxtLink>
</template>

<script>
import { mapState } from 'vuex'
import LinkSwitcherIcon from './LinkSwitcherIcon.vue'
export default {
  components: {
    LinkSwitcherIcon,
  },
  props: {
    isButton: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '/',
    },
    text: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    audio: null,
  }),
  computed: {
    ...mapState(['isMute']),
  },
  mounted() {
    this.audio = new Audio()
    this.audio.src = '/audio/hover_button.mp3'
  },
  beforeDestroy() {
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
  },
  methods: {
    onMouseover() {
      if (this.isMute || !this.audio) return
      try {
        this.audio.currentTime = 0
        this.audio.play()
      } catch (error) {
        console.log('Cant play audio: ', error)
      }
    },
    onMouseleave() {
      if (this.audio) {
        try {
          this.audio.pause()
        } catch (error) {
          console.log('Cant pause audio: ', error)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.link-switcher {
  --color: var(--color-dark);
  color: var(--color);
  display: flex;
  align-items: center;
}

.link-switcher__text {
  margin-left: 1.2rem;
  // margin-bottom: -0.4rem;
  position: relative;
}
.link-switcher__text:after {
  --bg-color: var(--color-dark);
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: var(--bg-color);
  position: absolute;
  left: 0;
  bottom: 0;
  transform: scaleX(0);
  transform-origin: left center;
  transition: var(--transition-300);
}

// hover

.link-switcher:hover .link-switcher__text:after {
  @include min(md) {
    transform: scaleX(1);
  }
}

// night mode

.night-mode .link-switcher {
  --color: var(--color-light);
}

.night-mode .link-switcher__text:after {
  --bg-color: var(--color-light);
}

// faq opened
.faq-opened .link-switcher {
  --color: var(--color-light);
}

.faq-opened .link-switcher__text:after {
  --bg-color: var(--color-light);
}
</style>
