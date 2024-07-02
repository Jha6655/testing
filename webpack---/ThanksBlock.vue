<template>
  <div class="thanks" :class="{ visible: isVisible }">
    <TypedAnimation
      :is-scroll-trigger="isVisible"
      :delay="0.5"
      class="thanks__title h3"
      @onComplete="showSmile"
    >
      Thank You For<br />
      Request!
    </TypedAnimation>
    <img
      src="/img/smile.svg"
      alt="thank you for request"
      class="thanks__icon"
      :class="{ visible: isIconVisible }"
    />
  </div>
</template>

<script>
import TypedAnimation from '../animations/TypedAnimation.vue'
export default {
  components: { TypedAnimation },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isIconVisible: false,
  }),
  watch: {
    isVisible(value) {
      if (!value) {
        this.isIconVisible = false
      }
    },
  },
  methods: {
    showSmile() {
      this.isIconVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.thanks {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  // opacity: 0;
  // transition: var(--transition);
}

// .thanks.visible {
//   opacity: 1;
// }

// title

.thanks__title {
  text-align: center;
  @include max(sm) {
    font-size: 6.5rem;
    line-height: 1;
  }
  @include max(xs) {
    font-size: 4.8rem;
  }
}

// smile

.thanks__icon {
  @include offset-media(margin-top, darkgreen);
  width: 4.4rem;
  height: auto;
  animation: rotate 10s linear infinite;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  @include min(lg) {
    width: 5.8rem;
  }
  @include max(bg) {
    width: 3.6rem;
  }
  @include max(sm) {
    width: 6.7rem;
  }
}

.thanks__icon.visible {
  opacity: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
