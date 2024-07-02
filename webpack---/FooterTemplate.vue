<script>
import FooterDevelopers from './FooterDevelopers.vue'
import NavLink from '@/components/NavLink.vue'
import TheDots from '@/components/TheDots.vue'
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  components: {
    FooterDevelopers,
    NavLink,
    TheDots,
  },
  mixins: [AnimationsControlMixin],
  props: {
    isScrollTrigger: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    timeline: null,
    tl: null,
    st: null,
    startDotsAnimation: false,
  }),
  watch: {
    // isScrollTrigger(value) {
    //   value && this.timeline.play()
    // },
  },
  async mounted() {
    await this.animate()
  },
  methods: {
    async animate() {
      if (window.innerWidth <= 768) return

      await this.$nextTick()

      const { footer, policy: left1, terms: left2 } = this.$refs
      const right1 = footer.querySelector('.developers__label')
      const right2 = footer.querySelector('.developers__link')

      this.tl = this.$gsap
        .timeline({
          paused: true,
        })
        .to(left1.$el, {
          skewX: 1,
          skewY: 1,
          rotateY: -5,
          y: -5,
          z: -10,
        })
        .to(
          left2.$el,
          {
            skewX: 0.5,
            skewY: 0.5,
            rotateY: -5,
          },
          0
        )
        .to(
          right1,
          {
            skewX: -0.5,
            skewY: -0.5,
            rotateY: 5,
          },
          0
        )
        .to(
          right2,
          {
            skewX: -1.5,
            skewY: -1.5,
            rotateY: 5,
            y: -5,
            z: -10,
          },
          0
        )

      this.st = this.$st.create({
        trigger: footer,
        animation: this.tl,
        start: () => 'top bottom',
        end: () => 'bottom bottom',
        scrub: 1,
      })
    },
    async _animate() {
      await this.$nextTick()

      const { footer } = this.$refs

      const policy = this.$refs.policy.$el
      const terms = this.$refs.terms.$el
      const developers = this.$refs.developers.$el

      const duration = 0.5
      const stagger = 0.1

      const scrollTriggerOptions = this.isScrollTrigger
        ? {
            scrollTrigger: {
              trigger: footer,
            },
          }
        : {}

      this.timeline = this.$gsap
        .timeline({
          ...scrollTriggerOptions,
          paused: !this.isScrollTrigger,
          onComplete: () => {
            this.startDotsAnimation = true
          },
        })
        .from([policy, terms, developers], {
          transition: 'none',
          autoAlpha: 0,
          duration,
          stagger,
          clearProps: 'all',
        })

      this.timelines.push(this.timeline)
      return Promise.resolve()
    },
  },
}
</script>

<template>
  <footer ref="footer" class="footer">
    <NavLink
      ref="policy"
      link="/privacy-policy"
      text="Privacy policy"
      class="footer__left-1"
    />
    <NavLink
      ref="terms"
      link="/terms-of-use"
      text="Terms of use"
      class="footer__left-2"
    />
    <slot></slot>
    <div class="footer__right p2">
      <div ref="border" class="footer__right-border--mobile"></div>
      <FooterDevelopers ref="developers" />
    </div>
    <TheDots
      :is-light="true"
      :start-animation="startDotsAnimation"
      class="footer__dots"
    />
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @extend %container;
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 10;
  @include max(xs) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
  }
}
.footer__left-1,
.footer__left-2,
.footer__right {
  display: flex;
  align-items: center;
}
.footer__left-1 {
  @include min(sm) {
    transform-origin: right bottom;
    --skew: 1deg;
    --rotate: -5deg;
    --y: -5px;
    transform: perspective(500px);
  }

  // transform: perspective(500px) skew(var(--skew), var(--skew))
  //   rotateY(var(--rotate)) translateY(var(--y));

  grid-column: 1 / 2;
}
.footer__left-2 {
  @include min(sm) {
    transform-origin: right bottom;
    --skew: 0.5deg;
    --rotate: -5deg;
    --y: 0px;
    transform: perspective(500px);
  }

  grid-column: 1 / 2;
  // transform: perspective(500px) skew(var(--skew), var(--skew))
  //   rotateY(var(--rotate)) translateY(var(--y));
  margin-left: 3.2rem;
  @include min(lg) {
    margin-left: 6.4rem;
  }
  @include max(bg) {
    margin-left: 2.4rem;
  }
  @include max(sm) {
    margin-left: 2.8rem;
  }
  @include max(xs) {
    grid-column: 3 / 4;
    margin-left: auto;
  }
}
.footer__dots {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @include max(bg) {
    margin-top: 0.2rem;
  }
  @include max(sm) {
    display: none;
  }
}
.footer__right {
  margin-left: auto;
  display: flex;
  @include max(xs) {
    grid-column: 1 / -1;
    margin-top: darkgreen(xxs);
    padding-top: darkgreen(xxs);
    margin-left: unset;
    position: relative;
    justify-content: center;
  }
}
.footer__right-border--mobile {
  display: none;
  @include max(xs) {
    display: block;
    position: absolute;
    top: 0;
    left: var(--container-padding-mobile-negative);
    width: calc(100vw);
    height: 1px;
    background-color: var(--color-fade-light);
  }
}
</style>
