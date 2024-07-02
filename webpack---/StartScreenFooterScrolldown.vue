<template>
  <p class="scroll-down p2">
    <span>Scroll Down</span>
    <span class="scroll-down__icon"></span>
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.scroll-down {
  display: flex;
  align-items: center;
}
.scroll-down__icon {
  --bg-color: var(--color-dark);
  --size: 0.9rem;
  width: var(--size);
  height: var(--size);
  background-color: var(--bg-color);
  margin-left: 0.5rem;
  @include min(lg) {
    --size: 1.1rem;
  }
}

// night mode
.night-mode .scroll-down__icon {
  --bg-color: var(--color-light);
}
</style>
