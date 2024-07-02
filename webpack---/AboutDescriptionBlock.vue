<template>
  <section class="about-page__description-block description-block">
    <div class="description-block__left">
      <NumberLabel :text="label" />
    </div>
    <div class="description-block__right">
      <div class="description-block__title-wrapper">
        <TheBox
          :is-scroll-trigger="isAboutUsTitleAnimate"
          class="description-block__border"
        />
        <TypedAnimation
          :type-speed="0.02"
          :is-scroll-trigger="isAboutUsTitleAnimate"
          component="h2"
          class="description-block__title h2"
        >
          {{ description1 }}
        </TypedAnimation>
      </div>

      <AnimatedParagraph class="description-block__text p2">
        {{ description2 }}
      </AnimatedParagraph>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import TypedAnimation from '@/components/animations/TypedAnimation.vue'
import AnimatedParagraph from '@/components/animations/AnimatedParagraph.vue'
import TheBox from '@/components/TheBox.vue'
import NumberLabel from '@/components/NumberLabel.vue'
export default {
  components: {
    TypedAnimation,
    AnimatedParagraph,
    TheBox,
    NumberLabel,
  },
  props: {
    description1: {
      type: String,
      default: '',
    },
    description2: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState('about', ['isAboutUsTitleAnimate']),
  },
}
</script>

<style lang="scss" scoped>
.description-block {
  // @extend %container;
  @extend %paddings-frame;
  padding-left: 9.7rem;
  display: flex;
  @include min(lg) {
    padding-left: vw1920(117);
  }
  @include max(bg) {
    padding-left: var(--container-padding);
  }
  @include max(xs) {
    display: block;
  }
}
.description-block__left {
  flex: 0 0 15.9rem;
  padding-top: 2.6rem;
  @include min(lg) {
    flex-basis: 31rem;
    padding-top: 1.1rem;
  }
  @include max(bg) {
    flex-basis: 16.1rem;
    padding-top: 0.8rem;
  }
  @include max(sm) {
    flex-basis: 14.6rem;
  }
  @include max(xs) {
    padding-top: 0;
    flex-basis: unset;
  }
}

// title

.description-block__title-wrapper {
  position: relative;
  @include max(xs) {
    margin-top: darkgreen(xxs);
  }
}

// text

.description-block__text {
  @include offset-media(margin-top, darkgreen);
  color: var(--color-fade-light);
}
</style>
