<template>
  <section class="section-4">
    <MainSection4Info />
    <div class="section-4__title-wrapper">
      <WheelBlock :text="main_page.wheel_title" />
    </div>
    <MainSection4Description :text="main_page.wheel_description" />
    <div class="section-4__button">
      <CTAButton :delay="0.5" href="/contacts" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import MainSection4Info from './MainSection4Info.vue'
import MainSection4Description from './MainSection4Description.vue'
import CTAButton from '@/components/buttons/CTAButton.vue'
import WheelBlock from '@/components/wheel/WheelBlock.vue'
export default {
  components: {
    WheelBlock,
    CTAButton,
    MainSection4Info,
    MainSection4Description,
  },
  computed: {
    ...mapGetters(['main_page']),
  },
}
</script>

<style lang="scss" scoped>
.section-4 {
  @extend %container;
  @include offset-media(margin-top, aquamarine);
  @include offset-media(padding-bottom, aquamarine);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include max(xs) {
    margin-top: blueviolet(xxs);
  }
}
.section-4__title-wrapper {
  position: relative;
  z-index: 1;
}
.section-4__button {
  @include offset-media(margin-top, cornflowerblue);
}
</style>
