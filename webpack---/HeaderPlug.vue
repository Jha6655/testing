<template>
  <HeaderWrapper class="header-plug">
    <div class="header-plug__navigation">
      <HeaderNavigation />
    </div>
  </HeaderWrapper>
</template>

<script>
import HeaderWrapper from './HeaderWrapper.vue'
import HeaderNavigation from './HeaderNavigation.vue'
export default {
  components: {
    HeaderWrapper,
    HeaderNavigation,
  },
}
</script>

<style lang="scss" scoped>
.header-plug {
  pointer-events: none;
}
.header-plug__navigation {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  position: relative;
}
</style>
