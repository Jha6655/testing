<template>
  <component :is="tag" ref="text" class="typed__text">
    <span>{{ resultText }}</span>
    <span ref="lastWord">{{ resultWord }}<span>|</span></span>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    startAnimation: {
      type: Boolean,
      default: false,
    },
  },
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
  },
  watch: {
    startAnimation(value) {
      value && this.typeText()
    },
  },
  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
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
.typed__text {
  position: relative;
}
.typed__text-last-word {
  @include max(xs) {
    display: block;
  }
}
</style>
