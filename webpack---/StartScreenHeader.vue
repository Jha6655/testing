<template>
  <header class="start-header">
    <nav class="start-header__navigation">
      <StartScreenHeaderNavigation />
    </nav>
    <div v-show="!isNightMode" class="start-header__logo">
      <AnimatedLogo />
      <!-- <img
        class="start-header__logo-image"
        src="/img/logo.png"
        alt="Hind Laskos Entertaiment"
      /> -->
    </div>
    <div
      v-show="isNightMode"
      class="start-header__logo start-header__logo--nightmode"
    >
      <AnimatedLogo />
      <!-- <img
        class="start-header__logo-image"
        src="/img/logo-light.png"
        alt="Hind Laskos Entertaiment"
      /> -->
    </div>
    <div class="start-header__sound">
      <SoundSwitcher />
    </div>
    <TheDots class="start-header__dots" />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import StartScreenHeaderNavigation from './StartScreenHeaderNavigation.vue'
import SoundSwitcher from '@/components/buttons/SoundSwitcher.vue'
import TheDots from '@/components/TheDots.vue'
import AnimatedLogo from '@/components/AnimatedLogo.vue'
export default {
  components: {
    AnimatedLogo,
    TheDots,
    StartScreenHeaderNavigation,
    SoundSwitcher,
  },
  computed: {
    ...mapState(['isNightMode']),
  },
}
</script>

<style lang="scss" scoped>
.start-header {
  pointer-events: none;
  @extend %container;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 1000;
  @include offset-media(padding-top, darkgreen);
  display: flex;
  justify-content: space-between;
}
.start-header__logo {
  pointer-events: all;
  position: absolute;
  left: 50%;
  top: 2.7rem;
  transform: translateX(-50%);
  width: 2.5rem;
  @include min(lg) {
    top: 3.5rem;
    width: 3.3rem;
  }
}

// .start-header__logo--nightmode {
//   top: 2rem;
//   width: 4.2rem;
//   @include min(lg) {
//     top: 2.4rem;
//     width: auto;
//   }
// }

.start-header__logo-image {
  width: 100%;
  display: block;
  height: auto;
  border: none;
  outline: none;
}

.start-header__dots {
  position: absolute;
  left: 50%;
  top: 3.3rem;
  transform: translateX(-50%);
  @include min(lg) {
    top: 4.3rem;
  }
  @include max(xs) {
    display: none;
  }
}

.start-header__sound {
  pointer-events: all;
}
</style>
