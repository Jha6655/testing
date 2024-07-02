<template>
  <div class="main-page__section-2">
    <MainSection2SubmitLabel :delay="0.5" @endAnimation="endLabelAnimation" />
    <MainSection2Content :animate-content="readyLabelsAnimation" />
    <MainSection2Footer :ready-to-animate="readyLabelsAnimation" />
  </div>
</template>

<script>
import MainSection2SubmitLabel from './MainSection2SubmitLabel.vue'
import MainSection2Content from './MainSection2Content.vue'
import MainSection2Footer from './MainSection2Footer.vue'
export default {
  components: {
    MainSection2Content,
    MainSection2SubmitLabel,
    MainSection2Footer,
  },
  data: () => ({
    readyLabelsAnimation: false,
  }),

  methods: {
    endLabelAnimation() {
      this.readyLabelsAnimation = true
    },
  },
}
</script>

<style lang="scss" scoped>
.main-page__section-2 {
  // @extend %container;
  background-color: var(--color-dark);
  @include offset-media(margin-top, coral);
  position: relative;
}
</style>
