<template>
  <footer ref="footer" class="section-2__footer">
    <AnimateFrom
      tag="p"
      :delay="0.6"
      :y="20"
      :is-scroll-trigger="readyToAnimate"
      class="section-2__footer-text-1 p2"
      >1 place</AnimateFrom
    >
    <AnimateFrom
      tag="p"
      :delay="0.8"
      :y="20"
      :is-scroll-trigger="readyToAnimate"
      class="section-2__footer-text-2 p2"
    >
      <span>to pitch your ideas to</span>
      <span>creatives and producers</span>
    </AnimateFrom>
    <AnimateFrom
      tag="p"
      :delay="1.0"
      :y="20"
      :is-scroll-trigger="readyToAnimate"
      class="section-2__footer-text-3 p2"
      >Scroll Down</AnimateFrom
    >
  </footer>
</template>

<script>
import AnimateFrom from '@/components/animations/AnimateFrom.vue'

export default {
  components: {
    AnimateFrom,
  },
  props: {
    readyToAnimate: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.section-2__footer {
  @extend %paddings-frame;
  color: var(--color-fade-light);
  display: flex;
  @include offset-media(margin-top, antiquewhite);
}
.section-2__footer-text-1 {
  flex: 0 0 25.9rem;
  @include min(lg) {
    flex-basis: 30.9rem;
  }
  @include max(bg) {
    flex-basis: 20rem;
  }
  @include max(sm) {
    flex-basis: 14.6rem;
  }
  @include max(xs) {
    flex-basis: 10rem;
  }
}
.section-2__footer-text-2 {
  display: flex;
  flex-direction: column;
}
.section-2__footer-text-3 {
  margin-left: auto;
  @include max(xs) {
    display: none;
  }
}
</style>
