<template>
  <InputLabel
    :is-active="!isEmpty"
    :is-error="isError"
    :placeholder="placeholder"
  >
    <input
      ref="input"
      :value="value"
      type="text"
      class="input p2"
      :name="name"
      autocomplete="off"
      @focus="onFocus($event)"
      @blur="onBlur($event)"
      @input="onInput($event)"
    />
  </InputLabel>
</template>

<script>
import InputLabel from './InputLabel.vue'
export default {
  components: {
    InputLabel,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: 'name',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    isLarge: {
      type: Boolean,
      defautl: false,
    },
    isTextarea: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    onFocus() {
      this.$emit('focus', {
        name: this.name,
      })
    },
    onBlur(event) {
      event.target.value = event.target.value.trim()
      this.$emit('blur', {
        value: event.target.value,
        name: this.name,
      })
    },
    onInput(event) {
      const validCharacters = /[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~"(),:;<>@[\]]|\s/
      if (!validCharacters.test(event.data)) {
        event.target.value = event.target.value.slice(0, -1)
      }
      event.target.value = event.target.value.replace(/^\s+/, '')
      this.$emit('input', {
        value: event.target.value,
        name: this.name,
        el: event.target,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
// input

.input {
  // background-color: var(--color-dark);
  background-color: transparent;
  color: var(--color-light);
  position: relative;
  z-index: 1;
  @include max(xs) {
    font-size: 1.6rem;
  }
}
</style>
