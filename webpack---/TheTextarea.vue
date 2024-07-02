<template>
  <InputLabel
    :placeholder="placeholder"
    :is-active="!isEmpty"
    :is-error="isError"
    :for-textarea="true"
  >
    <textarea
      class="textarea p2"
      autocomplete="off"
      :name="name"
      :value="value"
      @focus="onFocus"
      @blur="onBlur"
    ></textarea>
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
      event.target.value = event.target.value.replace(/^\s+/, '')
      this.$emit('input', {
        value: event.target.value,
        name: this.name,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.textarea {
  resize: none;
  height: 100%;
  width: 100%;
  display: block;
  background: transparent;
  color: var(--color-light);

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @include max(xs) {
    height: 15rem;
  }
}
</style>
