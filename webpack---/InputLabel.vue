<template>
  <label
    class="input-label"
    :class="{ error: isError, active: isActive, 'textarea-label': forTextarea }"
  >
    <slot></slot>
    <span class="input-placeholder p2">{{ placeholder }}</span>
    <span class="input-border"></span>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="error-icon"
    >
      <rect
        x="11.3135"
        y="3.53552"
        width="1"
        height="11"
        transform="rotate(45 11.3135 3.53552)"
        fill="#FD4E28"
      />
      <rect
        x="12.0205"
        y="11.3137"
        width="1"
        height="11"
        transform="rotate(135 12.0205 11.3137)"
        fill="#FD4E28"
      />
    </svg>
  </label>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    isError: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    forTextarea: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
// label

.input-label {
  position: relative;
  @include offset-media(padding-bottom, gold);
  display: block;
  width: 100%;
  cursor: pointer;
}

.input-label:before {
  content: '';
  display: block;
  width: calc(100% + 1.6rem);
  height: calc(100% + 1.6rem);
  position: absolute;
  left: -0.8rem;
  top: -0.8rem;
}

// placeholder

.input-placeholder {
  position: absolute;
  left: 0;
  @include offset-media(bottom, gold);
  pointer-events: none;
  transition: var(--transition-300);
  @include max(xs) {
    font-size: 1.6rem;
  }
}

// border

.input-border {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: var(--transition);
  width: 100%;
  height: 1px;
  background-color: var(--color-light);
  transform-origin: left center;
}

// error icon

.error-icon {
  display: block;
  position: absolute;
  right: 0;
  @include offset-media(bottom, gold);
  transition: var(--transition);
  opacity: 0;
  pointer-events: none;
}

// input error

.input-label.error .input-border {
  background-color: var(--color-error);
}
.input-label.error .error-icon {
  opacity: 1;
}

// input hover

.input-label:hover .input-border {
  @include min(md) {
    opacity: 0.4;
  }
}

// input focus

.input-label.active .input-placeholder {
  opacity: 0;
}

// textarea label

.textarea-label {
  height: 100%;
}

.textarea-label .input-placeholder {
  bottom: unset;
  top: 0;
}
</style>
