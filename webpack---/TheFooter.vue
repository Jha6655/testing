<template>
  <FooterTemplate>
    <div ref="logo" class="footer__logo">
      <AnimatedLogo :speed="1.2" :direction="-1" />
    </div>
  </FooterTemplate>
</template>

<script>
import FooterTemplate from './FooterTemplate.vue'
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
import AnimatedLogo from '@/components/AnimatedLogo.vue'
export default {
  components: {
    AnimatedLogo,
    FooterTemplate,
  },
  mixins: [AnimationsControlMixin],
  mounted() {
    this.animate()
  },
  methods: {
    async animate() {
      await this.$nextTick()

      const { logo } = this.$refs
      const duration = 0.5

      this.timelines.push(
        this.$gsap
          .timeline({
            scrollTrigger: {
              trigger: logo,
            },
          })
          .from(logo, {
            autoAlpha: 0,
            duration,
          })
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.footer__logo {
  position: absolute;
  left: 50%;
  @include offset-media(bottom, darkgreen);
  transform: translateX(-50%);
  @include max(xs) {
    position: static;
    transform: unset;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
  }
}
</style>
