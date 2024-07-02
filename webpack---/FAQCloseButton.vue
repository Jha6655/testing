<template>
  <button aria-label="close modal" class="faq__close-button" @click="closeFAQ">
    <span></span>
    <span></span>
  </button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['closeFaqPopup']),
    closeFAQ() {
      this.closeFaqPopup()
    },
  },
}
</script>

<style lang="scss" scoped>
.faq__close-button {
  display: block;
  position: absolute;
  width: 5rem;
  height: 1.7rem;
  top: 9.6rem;
  right: 4rem;
  @include min(lg) {
    top: 12.8rem;
    width: 7rem;
    height: 2.1rem;
  }
  @include max(xs) {
    right: var(--container-padding-mobile);
  }
}

// line

.faq__close-button > span {
  display: block;
  width: 4.314rem;
  height: 0.16rem;
  background-color: var(--color-light);
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
  transition: var(--transition-300);
  @include min(lg) {
    width: 6.255rem;
    height: 0.232rem;
  }
}
.faq__close-button > span:first-child {
  transform: translate(-50%, -50%) rotate(10deg);
}
.faq__close-button > span:last-child {
  transform: translate(-50%, -50%) rotate(-10deg);
}

// hover

.faq__close-button:hover > span:first-child {
  @include min(md) {
    transform: translate(-50%, -50%) rotate(15deg);
  }
}
.faq__close-button:hover > span:last-child {
  @include min(md) {
    transform: translate(-50%, -50%) rotate(-15deg);
  }
}
</style>
