<template>
  <div class="section-4__info">
    <TheBox :delay="0.2" :speed="2" />
    <svg
      width="35"
      height="24"
      viewBox="0 0 35 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="section-4__info-logo"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.00007 0H6.51558e-05V8.40061H3.05983e-07L0 15.4006H6.51558e-05V23.8H7.00007V15.4006L14.0001 15.4006V16.7999H14.0001V23.7999H14.0001V23.8H21.0001V23.7999H35.0001V16.7999H21.0001V0H14.0001V8.40061L7.00007 8.40061V0Z"
        fill="#383838"
      />
    </svg>
    <AnimateFade class="section-4__info-text p2">
      Communicate company<br />
      information
    </AnimateFade>
  </div>
</template>

<script>
import TheBox from '@/components/TheBox.vue'
import AnimateFade from '@/components/animations/AnimateFade.vue'
export default {
  components: {
    TheBox,
    AnimateFade,
  },
}
</script>

<style lang="scss" scoped>
.section-4__info {
  position: absolute;
  left: 9.7rem;
  top: 2.3rem;
  padding: 0.7rem 4.3rem 0.3rem 1.2rem;
  transform-origin: right top;
  transform: translateX(-100%) rotate(-90deg);
  @include min(lg) {
    top: vw1920(30);
    left: 13.6rem;
    padding: 0.7rem 5.1rem 0.7rem 2.3rem;
  }
  @include max(bg) {
    top: 1.4rem;
    left: 8rem;
  }
  @include max(sm) {
    left: 4rem;
    top: 1.1rem;
    padding: 0.3rem 3.6rem 0.2rem 1.5rem;
  }
  @include max(xs) {
    padding: 0.25rem 1.8rem 0.35rem 1rem;
    position: relative;
    transform: unset;
    left: unset;
    right: unset;
    display: flex;
    align-items: center;
    margin-bottom: darkgreen(xxs);
  }
}
.section-4__info-text {
  color: var(--color-fade-light);
  text-align: right;
  @include max(xs) {
    text-align: left;
  }
}
.section-4__info-logo {
  display: block;
  width: 2.7rem;
  height: auto;
  position: absolute;
  right: 0.9rem;
  top: 1.8rem;
  transform: rotate(90deg);
  @include min(lg) {
    width: 3.5rem;
  }
  @include max(sm) {
    width: 2.3rem;
    top: 1.3rem;
    right: 0.5rem;
  }
  @include max(xs) {
    position: relative;
    left: unset;
    right: unset;
    top: unset;
    bottom: unset;
    transform: unset;
    margin-right: 1rem;
  }
}
</style>
