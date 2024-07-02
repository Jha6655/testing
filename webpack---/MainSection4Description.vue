<template>
  <div class="section-4__description">
    <div class="section-4__description-box">
      <TheBox :delay="0.5" :speed="2" />
    </div>
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="section-4__description-arrow"
    >
      <rect
        x="12.0596"
        y="6.15234"
        width="0.894397"
        height="8.04957"
        transform="rotate(45 12.0596 6.15234)"
        fill="#383838"
      />
      <rect
        x="6.5528"
        y="0.447266"
        width="0.894397"
        height="11.6723"
        fill="#383838"
      />
      <rect
        x="7.63281"
        y="11.8447"
        width="0.894397"
        height="8.04957"
        transform="rotate(135 7.63281 11.8447)"
        fill="#383838"
      />
    </svg>
    <AnimateFrom
      :is-percent="true"
      :y="20"
      class="section-4__description-text p2"
    >
      {{ text }}
    </AnimateFrom>
  </div>
</template>

<script>
import TheBox from '@/components/TheBox.vue'
import AnimateFrom from '@/components/animations/AnimateFrom.vue'
export default {
  components: {
    TheBox,
    AnimateFrom,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.section-4__description {
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @include media(margin-top, 42.2rem, 51.5rem, 33.6rem, 25.7rem, 20.3rem);
}
.section-4__description-box {
  pointer-events: none;
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 57.1rem;
  height: calc(100% + 3.4rem);
  transform: translateX(-50%);
  @include min(lg) {
    width: 111.3rem;
    height: calc(100% + 3.2rem);
  }
  @include max(bg) {
    width: 70.4rem;
    height: calc(100% + 3.5rem);
  }
  @include max(sm) {
    width: 57.1rem;
    height: calc(100% + 3.7rem);
  }
  @include max(xs) {
    width: 34.3rem;
    height: calc(100% + 3.5rem);
  }
}

.section-4__description-arrow {
  display: block;
  height: auto;
  --sqrt: 1.41421356237;
  --size: 0.889rem;
  width: calc(var(--size) * var(--sqrt));
  @include media(--size, 0.8889rem, 1.502rem, 1.215rem, 1.584rem, 1.584rem);
}

.section-4__description-text {
  @include offset-media(margin-top, darkgreen);
  max-width: 44.7rem;
  text-align: center;
  color: var(--color-fade-light);
  @include min(lg) {
    max-width: 47.2rem;
  }
  @include max(xs) {
    max-width: 30.7rem;
  }
}
</style>
