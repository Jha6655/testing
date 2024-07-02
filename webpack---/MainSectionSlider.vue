<template>
  <section class="section-3">
    <header class="section-3__header">
      <div class="section-3__title-wrapper">
        <TypedAnimation component="h2" class="section-3__title h2">
          {{ projects_title }}
        </TypedAnimation>
        <TheBox :delay="0.2" />
      </div>
      <AnimateFrom tag="p" :y="20" :is-alpha="true" class="section-3__text p2">
        {{ projects_description }}
      </AnimateFrom>
    </header>

    <div ref="wrapper" class="section-slider__slider-wrapper">
      <SliderJS :projects="projects" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TheBox from '@/components/TheBox.vue'
import TypedAnimation from '@/components/animations/TypedAnimation.vue'
import AnimateFrom from '@/components/animations/AnimateFrom.vue'
import SliderJS from '@/components/SliderJS.vue'
export default {
  components: {
    AnimateFrom,
    TheBox,
    TypedAnimation,
    SliderJS,
  },
  computed: {
    ...mapGetters(['main_page', 'projects']),
    projects_title() {
      return this.main_page.projects_title
    },
    projects_description() {
      return this.main_page.projects_description
    },
  },
  mounted() {
    console.log(this.projects)
  }
}
</script>

<style lang="scss" scoped>
.section-3 {
  @include offset-media(margin-top, aquamarine);
}
.section-3__header {
  //  @extend %container;
  @extend %paddings-frame;
}
.section-3__title-wrapper {
  position: relative;
  width: 61.6rem;
  height: 8.9rem;
  @include min(lg) {
    width: 68.1rem;
    height: 10rem;
  }
  @include max(bg) {
    width: 42.5rem;
    height: 6.2rem;
  }
  @include max(sm) {
    height: 6.9rem;
  }
  @include max(xs) {
    width: 34.3rem;
    height: 5.1rem;
  }
}
.section-3__text {
  @include offset-media(margin-top, gold);
}

// lines
.section-3__line-top,
.section-3__line-right,
.section-3__line-bottom,
.section-3__line-left {
  position: absolute;
  background-color: var(--color-fade-light);
}
.section-3__line-top,
.section-3__line-bottom {
  width: 100%;
  height: 1px;
}
.section-3__line-left,
.section-3__line-right {
  height: 100%;
  width: 1px;
}
.section-3__line-top {
  left: 0;
  top: 0;
}
.section-3__line-right {
  right: 0;
  top: 0;
}
.section-3__line-bottom {
  left: 0;
  bottom: 0;
}
.section-3__line-left {
  left: 0;
  top: 0;
}

.section-slider__slider-wrapper {
  @include offset-media(padding-top, coral);
  height: calc(551px);
  @include min(lg) {
    height: 659px;
  }
  @include max(bg) {
    //height: 478px;
    height: 700px;
  }
  @include max(sm) {
    // height: 355px;
    height: 520px;
  }
  @include max(xs) {
    height: 400px;
  }
}
</style>
