<template>
  <div id="scroller" class="layout">
    <AppPreloader ref="preloader" />
    <main ref="page" class="layout__page">
      <Nuxt />
    </main>
    <FAQPopup />
    <TheLoader />
    <CustomCursor />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPreloader from '@/components/AppPreloader.vue'
import FAQPopup from '@/components/popups/FAQPopup.vue'
import TheLoader from '@/components/TheLoader.vue'
import CustomCursor from '@/components/CustomCursor.vue'
export default {
  name: 'DefaultLayout',
  components: {
    CustomCursor,
    FAQPopup,
    AppPreloader,
    TheLoader,
  },
  computed: {
    ...mapState(['isPreloaderComplete', 'isFaqOpened']),
  },
  watch: {
    isFaqOpened(value) {
      if (value) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
  },
}
</script>
<style scoped lang="scss">
#scroller {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  // width: 100vw;
  // height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
