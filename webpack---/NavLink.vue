<template>
  <a
    v-if="isExternal"
    class="nav-link p2"
    :href="link"
    rel="noopener noreferrer"
    target="_blank"
    >{{ text }}</a
  >

  <button
    v-else-if="isButton"
    class="nav-link p2"
    @click="$emit('clickHandler')"
  >
    {{ text }}
  </button>

  <NuxtLink v-else class="nav-link p2" :to="link">{{ text }}</NuxtLink>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '/',
    },
    text: {
      type: String,
      default: '',
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
    isButton: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-link {
  color: inherit;
  display: block;
  position: relative;
  width: max-content;
  pointer-events: all;
  white-space: nowrap;
}
.nav-link:after {
  content: '';
  display: block;
  width: calc(100% - 2 * var(--link-padding));
  height: 1px;
  background-color: var(--color-light);
  position: absolute;
  left: var(--link-padding);
  bottom: 0;
  transform-origin: left center;
  transform: scaleX(0);
  transition: var(--transition);
  transition-timing-function: var(--timing-function);
}

// hover
.nav-link:hover:after {
  @include min(md) {
    transform: scaleX(1);
  }
}
</style>
