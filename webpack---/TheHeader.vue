<template>
  <HeaderWrapper ref="header" class="header">
    <nav class="header__left">
      <HeaderNavigation />
    </nav>
    <div ref="logo" class="header__center">
      <a href="/" class="header__logo" @click.prevent="clickLogo">
        <AnimatedLogo />
      </a>
    </div>
    <div ref="clock" class="header__right">
      <TheClock />
    </div>
    <TheDots
      :is-light="true"
      :start-animation="startDotsAnimation"
      class="header__dots"
    />
  </HeaderWrapper>
</template>

<script>
import { mapState } from 'vuex'
import HeaderWrapper from './HeaderWrapper.vue'
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
import TheDots from '@/components/TheDots.vue'
import TheClock from '@/components/TheClock.vue'
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import AnimatedLogo from '@/components/AnimatedLogo.vue'
export default {
  components: {
    HeaderWrapper,
    AnimatedLogo,
    HeaderNavigation,
    TheClock,
    TheDots,
  },
  mixins: [AnimationsControlMixin],
  props: {
    startAnimation: {
      type: Boolean,
      default: false,
    },
    noAnimation: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    headerTimeline: null,
    startDotsAnimation: false,
  }),
  computed: {
    ...mapState(['isPreloaderComplete', 'isLoaderComplete', 'isTV']),
  },
  watch: {
    isPreloaderComplete(value) {
      value && this.headerTimeline.play()
    },
    isLoaderComplete(value) {
      value && this.headerTimeline.play()
    },
  },
  async mounted() {
    await this.animate()
    if (this.noAnimation) {
      this.headerTimeline.progress(1)
    }
  },
  methods: {
    clickLogo() {
      const path = this.$route.path
      const loader = document.querySelector('.loader')
      const loaderInner = loader.querySelector('.loader__inner')
      if (path !== '/') {
        this.$router.push('/')
      } else {
        document.querySelector('#scroller').scrollTo(0, 0)
        document.querySelector('#scroller').style.overflow = 'hidden'
        loaderInner._lottie && loaderInner._lottie.play()

        this.$gsap
          .timeline({
            onComplete: () => {
              loaderInner._lottie && loaderInner._lottie.stop()
              document.querySelector('#scroller').style.overflow = ''
            },
          })
          .set(loader, {
            display: 'block',
          })
          .set(loader, {
            display: 'none',
            delay: 1,
          })
        this.$store.commit('setTV', true)
      }
    },
    async animate() {
      await this.$nextTick()

      const header = this.$refs.header.$el
      const links = header.querySelectorAll('.header__navigation-item')
      const logo = this.$refs.logo
      const clock = this.$refs.clock

      this.headerTimeline = this.$gsap
        .timeline({
          paused: true,
          onComplete: () => {
            this.startDotsAnimation = true
          },
        })
        .fromTo(
          links,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.3,
            stagger: 0.1,
            clearProps: 'all',
          }
        )
        .fromTo(
          logo,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.3,
            clearProps: 'all',
          },
          '-=0.1'
        )
        .fromTo(
          clock,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.3,
            clearProps: 'all',
          },
          '-=0.1'
        )
      this.timelines.push(this.headerTimeline)
      return Promise.resolve()
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  pointer-events: none;
}
.header__center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2.5rem;
  @include min(lg) {
    top: 3.5rem;
    transform: translateX(-50%);
  }
  @include max(bg) {
    top: 2.7rem;
  }
  @include max(xs) {
    top: 2.6rem;
    transform: translateX(-50%);
  }
}
.header__logo {
  pointer-events: all;
}
.header__right {
  --skew: 5deg;
  transform-origin: left top;
  transform: perspective(500px) skew(var(--skew), var(--skew)) rotateY(5deg);
}
// .header__center:before {
//   content: '';
//   display: block;
//   width: 150%;
//   height: 150%;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   background-image: radial-gradient(#32a4c3 0%, rgba(#32a4c3, 0) 70%);
//   z-index: -1;
//   opacity: 0.5;
// }
.header__dots {
  position: absolute;
  left: 50%;
  top: 3.1rem;
  transform: translateX(-50%);
  @include min(lg) {
    top: 4.3rem;
  }
  @include max(bg) {
    top: 3.3rem;
  }
  @include max(sm) {
    top: 3.3rem;
  }
  @include max(xs) {
    display: none;
  }
}
</style>
