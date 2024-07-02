<template>
  <header class="header-wrapper">
    <slot></slot>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-wrapper {
  @extend %container;
  @include offset-media(padding-top, darkgreen);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
