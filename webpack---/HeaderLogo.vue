<template>
  <NuxtLink to="/" class="header__logo">
    <img
      class="header__logo-image"
      :src="image"
      alt="Hind Laskos Entertaiment"
    />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '/img/logo.png',
    },
  },
}
</script>

<style lang="scss" scoped>
.header__logo {
  pointer-events: all;
  //width: 2.5rem;
  @include min(lg) {
    //width: 3.3rem;
  }
  @include max(xs) {
    //width: 3rem;
  }
}
.header__logo-image {
  display: block;
  width: 100%;
  height: auto;
}
</style>
