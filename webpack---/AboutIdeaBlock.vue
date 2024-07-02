<template>
  <section class="about-page__idea-block idea-block">
    <IdeaBlockArrow />
    <div class="idea-block__label">
      <NumberLabel :text="label" />
    </div>
    <TypeAnimation component="h2" class="idea-block__title h1">
      {{ title1 }}<br />
      {{ title2 }}
    </TypeAnimation>
    <div class="idea-block__cta-description">
      <AnimatedLine :delay="0.6" class="idea-block__cta-line"></AnimatedLine>
      <p class="p2 idea-block__cta-plug-text">Just push the button</p>
      <AnimatedParagraph :delay="0.5" class="p2 idea-block__cta-text"
        >Just push the button</AnimatedParagraph
      >
    </div>
    <div class="idea-block__button">
      <CTAButton :delay="0.5" text="Netpitch" href="/contacts" />
    </div>
  </section>
</template>

<script>
import IdeaBlockArrow from './IdeaBlockArrow.vue'
import TypeAnimation from '@/components/animations/TypedAnimation.vue'
import AnimatedLine from '@/components/animations/AnimatedLine.vue'
import AnimatedParagraph from '@/components/animations/AnimatedParagraph.vue'
import NumberLabel from '@/components/NumberLabel.vue'
import CTAButton from '@/components/buttons/CTAButton.vue'
export default {
  components: {
    IdeaBlockArrow,
    AnimatedParagraph,
    CTAButton,
    NumberLabel,
    AnimatedLine,
    TypeAnimation,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    title1: {
      type: String,
      default: '',
    },
    title2: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.idea-block {
  position: relative;
  @include offset-media(padding-top, skyblue);
  @include offset-media(padding-bottom, skyblue);
}

// label

.idea-block__label {
  display: flex;
  justify-content: center;
}

// title

.idea-block__title {
  @include offset-media(margin-top, antiquewhite);
  text-align: center;
}

// cta description

.idea-block__cta-description {
  @include offset-media(margin-top, crimson);
  position: relative;
}

// cta line
.idea-block__cta-line {
  width: 100%;
  height: 1px;
  background-color: var(--color-fade-light);
  position: absolute;
  left: 0;
  top: 50%;
}

// description plug text

.idea-block__cta-plug-text {
  opacity: 0;
}

// cta description text

.idea-block__cta-text {
  --left: 109px;
  position: absolute;
  top: 0;
  left: calc(50% + var(--left));
  background-color: var(--color-dark);
  padding-left: 1rem;
  padding-right: 1rem;
  @include min(lg) {
    --left: 136px;
  }
  @include max(bg) {
    --left: 76px;
  }
  @include max(sm) {
    --left: 18px;
  }
  @include max(xs) {
    --left: -36px;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
}

// button

.idea-block__button {
  @include offset-media(margin-top, cornflowerblue);
  display: flex;
  justify-content: center;
}
</style>
