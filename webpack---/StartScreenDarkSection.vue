<template>
  <div class="dark-section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  async mounted() {
    // window.scrollTo(0, 0)
    document.querySelector('#scroller').scrollTo(0, 0)
    await this.$nextTick()
    setTimeout(() => {
      this.$st.refresh()
    }, 0)
  },
}
</script>

<style lang="scss" scoped>
.dark-section {
  position: relative;
  background-color: var(--color-dark);
  color: var(--color-light);
}
</style>
