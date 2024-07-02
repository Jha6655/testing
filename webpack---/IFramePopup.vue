<template>
  <div class="iframe-popup">
    <div class="iframe-popup__bg" @click="closePopup"/>
    <button class="iframe-popup__close-button" @click="closePopup">[x]</button>
    <div v-html="iframe" class="iframe-popup__content" @click="closePopup" />
  </div>
</template>
<script>
import { mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState(['iframe'])
  },
  methods: {
    ...mapMutations(['closeIframe']),
    closePopup() {
      this.closeIframe()
    }
  }
}
</script>

<style lang="scss" scoped>
.iframe-popup {
  position: fixed;
  inset: 0;
  z-index: 5000;
  // padding: 4.8rem;
  @include max(xs) {
    padding: 0;
  }
}
.iframe-popup__content {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

}

@media(orientation: landscape) {
  .iframe-popup__content::v-deep iframe {
    height: 100%;
    width: 80%;
  }
}
@media(orientation: portrait) {
  .iframe-popup__content::v-deep iframe {
    width: 100%;
    height:80%;
  }
}
.iframe-popup__bg {
  background-color: rgba(0,0,0,0.9);
  display:block;
  inset:0;
  position: absolute;
  z-index: 0;
}
.iframe-popup__close-button {
  display: block;
  color: #FFF;
  font-size: 5.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;
  z-index: 10;
  padding: 1.6rem;
  @include min(lg) {
    font-size: 6.4rem;
  }
  @include max(bg) {
    font-size: 3.2rem;
    right: 1.6rem;
    top: 1.6rem;
  }
  @include max(xs) {
    font-size: 2.4rem;
    padding: 0.8rem;
  }
}
</style>
