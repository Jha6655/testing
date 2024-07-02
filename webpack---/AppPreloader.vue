<template>
  <div ref="preloader" class="preloader">
    <div class="preloader__inner">
      <h4 ref="text" class="preloader__text">
        <span>{{ resultText }}</span>
        <span ref="lastWord"> {{ resultWord }}|</span>
      </h4>
    </div>
    <div ref="progress" class="preloader__progress"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    wordIndex: 0,
    resultText: '',
    resultWord: '',
    interval: null,
    typedChars: 0,
  }),
  computed: {
    text() {
      return this.$store.getters.main_page.description_1
    },
    words() {
      return this.$store.getters.main_page.end_phrases
    },
    currentWord() {
      return this.words[this.wordIndex]
    },
    totalCharsLength() {
      return (
        this.text.length +
        this.words.join('').length * 2 -
        this.words[this.words.length - 1].length +
        8
      )
    },
    progress() {
      return this.typedChars / this.totalCharsLength
    },
  },
  watch: {
    typedChars(value) {
      const { progress } = this.$refs
      this.$gsap.to(progress, {
        scaleX: value / this.totalCharsLength,
        duration: 0.1,
      })
    },
  },
  mounted() {
    // to skip preloader run only this.animate function
    // to play it run only this.typeText function

    // this.animate()
    this.typeText()
  },
  methods: {
    ...mapMutations(['hidePreloader']),
    async animate() {
      await this.$nextTick()
      this.$gsap.to(this.$refs.preloader, {
        delay: 1,
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          this.hidePreloader()
        },
      })
    },
    typeText() {
      let length = 0
      this.interval = setInterval(async () => {
        if (this.resultText.length === this.text.length) {
          clearInterval(this.interval)
          this.$gsap.set(this.$refs.lastWord, {
            display: window.innerWidth <= 768 ? 'block' : '',
          })
          await this.typeWord(this.currentWord, true)
          this.wordIndex++
          await this.typeWord(this.currentWord, true)
          this.wordIndex++
          await this.typeWord(this.currentWord, false)
          this.wordIndex++
          this.animate()
        } else {
          this.typedChars++
          this.resultText = this.text.slice(0, length++)
        }
      }, 50)
    },
    typeWord(word, isReverse = true, delay = 1000) {
      return new Promise((resolve, reject) => {
        let length = 0
        this.interval = setInterval(async () => {
          if (this.resultWord.length === word.length) {
            clearInterval(this.interval)
            await this.delay(delay)
            this.interval = setInterval(() => {
              if (this.resultWord.length === 0 || !isReverse) {
                clearInterval(this.interval)
                resolve()
              } else {
                this.typedChars++
                this.resultWord = word.slice(0, length--)
              }
            }, 20)
          } else {
            this.typedChars++
            this.resultWord = word.slice(0, length++)
          }
        }, 50)
      })
    },
    delay(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, ms)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.preloader {
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 100vw;
  height: 100vh;
  padding: 4.8rem 4rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  // transform: translateY(-100vh);
  @include max(xs) {
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
  }
}

.preloader__inner {
  width: 100%;
  height: 100%;
  position: relative;
}
.preloader__text {
  font-weight: 400;
  max-width: 123.6rem;
  font-size: 11.8rem;
  line-height: 0.99;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  @include min(lg) {
    font-size: 14.8rem;
    max-width: 158.7rem;
  }
  @include max(bg) {
    font-size: 8.8rem;
    max-width: 94.4rem;
  }
  @include max(sm) {
    font-size: 7.8rem;
    max-width: 68.8rem;
  }
  @include max(xs) {
    font-size: 6.2rem;
  }
}

.preloader__progress {
  position: absolute;
  left: 0;
  bottom: 4.8rem;
  width: 100%;
  height: 1px;
  background-color: var(--color-fade-light);
  transform-origin: left center;
  transform: scaleX(0);
  @include min(lg) {
    bottom: 5.6rem;
  }
  @include max(bg) {
    bottom: 4rem;
  }
  @include max(xs) {
    bottom: 3.2rem;
  }
}
</style>
