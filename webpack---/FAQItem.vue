<template>
  <div ref="el" class="faq__item">
    <h3
      class="faq__item-title p1"
      tabindex="0"
      role="button"
      @click="toggleOpen"
    >
      <span class="faq__item-title-text">{{ title }}</span>
    </h3>
    <div ref="text" class="faq__item-text-wrapper">
      <p class="faq__item-text p2">
        {{ text }}
      </p>
      <div class="faq__item-pb"></div>
    </div>
    <div class="faq__item-border"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isOpened: false,
  }),
  methods: {
    toggleOpen(e) {
      const { el } = this.$refs
      const items = document.querySelectorAll('.faq__item')
      if (el.classList.contains('opened')) {
        el.classList.remove('opened')
        this.$gsap.to(this.$refs.text, {
          height: 0,
          duration: 0.5,
        })
      } else {
        el.classList.add('opened')
        this.$gsap.to(this.$refs.text, {
          height: 'auto',
          duration: 0.5,
        })
      }
      const others = Array.from(items).filter((item) => item !== el)
      others.forEach((item) => {
        item.classList.remove('opened')
        const text = item.querySelector('.faq__item-text-wrapper')
        this.$gsap.to(text, {
          height: 0,
          duration: 0.5,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
// title

.faq__item:nth-child(1) .faq__item-title {
  padding-top: 0;
}

.faq__item-title {
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
}
.faq__item-title-text {
  position: relative;
  display: block;
}

.faq__item-title-text:after,
.faq__item-title-text:before {
  content: '';
  display: block;
  width: 0.8rem;
  height: 0.2rem;
  background-color: var(--color-light);
  transform-origin: center center;
  position: absolute;
  right: 0;
  top: 50%;
  @include max(xs) {
    display: none;
  }
}
.faq__item-title-text:before {
  transform: translateY(-50%);
}
.faq__item-title-text:after {
  transform: translateY(-50%) rotate(90deg);
  transition: var(--transition);
}

// text

.faq__item-text-wrapper {
  overflow: hidden;
  height: 0;
}

// padding bottom

.faq__item-pb {
  width: 100%;
  @include offset-media(height, darkgreen);
}

// bottom border

.faq__item-border {
  width: 100%;
  height: 1px;
  background-color: var(--color-light);
  transform-origin: left center;
}

// opened

.faq__item.opened .faq__item-title-text:after {
  transform: translateY(-50%) rotate(180deg);
}
</style>
