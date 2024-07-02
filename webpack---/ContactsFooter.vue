<template>
  <TemplateFooter :is-scroll-trigger="animateFooter" class="contacts-footer">
    <div class="footer__socials">
      <NavLinkExternal
        v-for="{ id, name, link } in socials"
        :key="id"
        ref="socials"
        :text="name"
        :link="link"
      />
    </div>
    <div class="footer__logo">
      <TheLogo image="/img/logo-white.svg" />
    </div>
  </TemplateFooter>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
import TemplateFooter from '@/components/FooterTemplate.vue'
import NavLinkExternal from '@/components/NavLinkExternal.vue'

export default {
  components: {
    TemplateFooter,
    NavLinkExternal,
  },
  mixins: [AnimationsControlMixin],
  props: {
    animateFooter: {
      type: Boolean,
      default: false,
    },
    socials: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    timeline: null,
  }),
  watch: {
    animateFooter(value) {
      value && this.timeline.play()
    },
  },
  async mounted() {
    await this.animate()
  },
  methods: {
    async animate() {
      await this.$nextTick()
      const socials = this.$refs.socials.map((el) => el.$el)
      const duration = 0.5
      const stagger = 0.1

      this.timeline = this.$gsap
        .timeline({
          paused: true,
        })
        .from(socials, {
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

<style lang="scss" scoped>
.footer__socials {
  position: absolute;
  left: 50%;
  @include offset-media(bottom, darkgreen);
  transform: translateX(-50%);
  display: flex;
  @include max(sm) {
    right: 4rem;
    left: unset;
    transform: unset;
  }
  @include max(xs) {
    left: 50%;
    right: unset;
    transform: translateX(-50%);
  }
}
.footer__socials > * + * {
  margin-left: 2.4rem;
}
.footer__logo {
  display: none;
  @include max(xs) {
    display: block;
    position: static;
    transform: unset;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
  }
}
</style>
