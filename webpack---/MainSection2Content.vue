<template>
  <section class="section-2__content">
    <div class="section-2__snake">
      <AppSnake />
    </div>
    <div ref="title" class="section-2__title">
      <TypedAnimationLastWord
        tag="h2"
        :start-animation="animateContent"
        class="h2"
      />
    </div>
    <MainSection2Labels :labels="labels" />
    <footer class="section-2__footer">
      <AnimateFrom
        tag="p"
        :is-percent="true"
        :y="20"
        :delay="0.6"
        :is-scroll-trigger="animateContent"
        class="section-2__footer-text p2"
      >
        <span v-for="(string, index) in description" :key="index">
          {{ string }}
        </span>
      </AnimateFrom>
      <AnimateFrom
        tag="p"
        :is-percent="true"
        :y="20"
        :delay="0.6"
        :is-scroll-trigger="animateContent"
        class="section-2__footer-text--mobile p2"
      >
        <span v-for="(string, index) in description" :key="index">
          {{ string }}
        </span>
      </AnimateFrom>
    </footer>
  </section>
</template>

<script>
import MainSection2Labels from './MainSection2Labels.vue'
import AppSnake from '@/components/snake/AppSnake.vue'
import AnimateFrom from '@/components/animations/AnimateFrom.vue'
import TypedAnimationLastWord from '@/components/animations/TypedAnimationLastWord.vue'
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  components: {
    TypedAnimationLastWord,
    AppSnake,
    MainSection2Labels,
    AnimateFrom,
  },
  mixins: [AnimationsControlMixin],
  props: {
    animateContent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    labels() {
      return this.$store.getters.main_page.labels
    },
    description() {
      const text = this.$store.getters.main_page.description_2
      return text.split('@')
    },
  },
}
</script>

<style lang="scss" scoped>
.section-2__content {
  // @extend %container;
  @extend %paddings-frame;
  @include offset-media(margin-top, antiquewhite);
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 49.6rem;
  position: relative;
  @include min(lg) {
    height: 63.8rem;
  }
  @include max(bg) {
    height: 47.9rem;
  }
  @include max(sm) {
    height: 78.3rem;
  }
  @include max(xs) {
    height: 58.3rem;
  }
}

// title

.section-2__title {
  position: relative;
  max-width: 80.2rem;
  @include min(lg) {
    max-width: 89.2rem;
  }
  @include max(bg) {
    max-width: 53.6rem;
  }
  @include max(sm) {
    max-width: 58.6rem;
  }
  @include max(xs) {
    flex: 0 0 16.8rem;
    max-width: 34.4rem;
  }
}

.section-2__footer {
  position: relative;
  margin-top: auto;
}

.section-2__footer-text {
  @include max(xs) {
    display: none;
  }
}
.section-2__footer-text > span {
  display: block;
}
.section-2__footer-text > span:nth-child(2) {
  padding-left: 6rem;
}
.section-2__footer-text > span:nth-child(4) {
  padding-left: 2rem;
}

.section-2__footer-text--mobile {
  display: none;
  @include max(xs) {
    display: flex;
    flex-direction: column;
  }
}
.section-2__footer-text--mobile > span:nth-child(2) {
  padding-left: 2.5rem;
}
.section-2__footer-text--mobile > span:nth-child(6) {
  padding-left: 3.5rem;
}

// snake

.section-2__snake {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
