<template>
  <div class="error-page">
    <TheHeader />
    <GlitchText
      :delay="3"
      :stagger="0.1"
      :offset-x="200"
      :offset-y="50"
      :title1="error.title_1"
      :title2="error.title_2"
      :title3="error.title_3"
    />
    <div class="error-page__button">
      <CTAButton
        :is-scroll-trigger="isButtonAnimation"
        text="Go Back"
        @click.native="clickBackButton"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '@/components/TheHeader.vue'
import CTAButton from '@/components/buttons/CTAButton.vue'
import GlitchText from '@/components/glitch/GlitchText.vue'
export default {
  components: {
    GlitchText,
    TheHeader,
    CTAButton,
  },
  data: () => ({
    isButtonAnimation: false,
    timeout: null,
  }),
  computed: {
    ...mapGetters(['error']),
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.isButtonAnimation = true
    }, 2000)
  },
  beforeDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  },
  methods: {
    clickBackButton() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.error-page {
  width: 100vw;
  height: 100vh;
  position: relative;
}

// button

.error-page__button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @include offset-media(bottom, darkgreen);
}

// title
.error-page__title {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: max-content;
}

// canvas

.error-page__canvas-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
