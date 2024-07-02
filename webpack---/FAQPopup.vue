<template>
  <div ref="popup" class="popup faq">
    <FAQCloseButton />
    <div class="faq__inner">
      <div class="faq__content">
        <FAQItem
          v-for="{ id, title, text, isActive } in items"
          :key="id"
          :title="title"
          :text="text"
          :is-active="isActive"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import FAQItem from './FAQItem.vue'
import FAQCloseButton from './FAQCloseButton.vue'
export default {
  components: {
    FAQItem,
    FAQCloseButton,
  },
  data() {
    return {
      timeline: null,
      contentTimeline: null,
    }
  },
  computed: {
    ...mapState(['isFaqOpened']),
    ...mapGetters(['faq']),
    items() {
      return this.faq.qas.map((el) => ({
        ...el,
        isActive: false,
      }))
    },
  },
  watch: {
    isFaqOpened(value) {
      if (value) {
        this.timeline.play()
      } else {
        this.timeline.reverse()
      }
    },
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const { popup } = this.$refs

      const items = popup.querySelectorAll('.faq__item')

      this.contentTimeline = this.$gsap.timeline({
        delay: 0.5,
        paused: true,
      })

      Array.from(items).forEach((item) => {
        const title = item.querySelector('.faq__item-title')
        const text = item.querySelector('.faq__item-text')
        const border = item.querySelector('.faq__item-border')

        this.contentTimeline
          .fromTo(
            title,
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 0.8,
            },
            '-=1'
          )
          .fromTo(
            text,
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 0.8,
            },
            '-=0.6'
          )
          .fromTo(
            border,
            {
              scaleX: 0,
            },
            {
              scaleX: 1,
              duration: 0.5,
            },
            '-=0.6'
          )
      })

      this.timeline = this.$gsap.timeline({
        paused: true,
        onStart: () => {
          this.contentTimeline.restart()
        },
      })

      this.timeline.fromTo(
        popup,
        {
          yPercent: -150,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power2.inOut',
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 500;
  background-color: rgba(#101011, 0.9);
  overscroll-behavior: none;
}

.faq {
  // transform: translateY(-110%);
  // transition: var(--transition);
}

// opened

// .faq.opened {
//   transform: translateY(0);
// }

.faq__inner {
  height: 100%;
  width: 67.3rem;
  overflow: hidden;
  overflow-y: auto;
  margin: 0 auto;
  overscroll-behavior: none;

  // disable scroll

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @include min(lg) {
    width: 91.4rem;
  }
  @include max(bg) {
    width: 54.4rem;
  }
  @include max(sm) {
    width: 51.2rem;
  }
  @include max(xs) {
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
    width: 100%;
    max-width: 51.2rem;
  }
}

// content

.faq__content {
  @include offset-media(padding-bottom, coral);
  padding-top: 16.1rem;
  @include min(lg) {
    padding-top: 20.3rem;
  }
  @include max(bg) {
    padding-top: 14.9rem;
  }
  @include max(xs) {
    padding-top: 13.5rem;
  }
}
</style>
