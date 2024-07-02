<template>
  <div class="main-page">
    <StartScreen v-if="isTV" />
    <StartScreenDarkSection v-else>
      <TheHeader :no-animation="true" />
      <TvFrame />
      <HeaderPlug />
      <!-- snake -->
      <MainSection2 />
      <!-- slider -->
      <MainSectionSlider />
      <!-- circle -->
      <MainSection4 />
      <TheFooter />
    </StartScreenDarkSection>
    <IFramePopup v-if="iframe"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import StartScreen from '@/components/main-page/StartScreen.vue'
import MainSection2 from '@/components/main-page/MainSection2.vue'
import MainSectionSlider from '~/components/main-page/MainSectionSlider.vue'
import MainSection4 from '@/components/main-page/MainSection4.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import HeaderPlug from '@/components/HeaderPlug.vue'
import StartScreenDarkSection from '@/components/main-page/StartScreenDarkSection.vue'
import PageAnimationMixin from '@/plugins/mixins/PageAnimationMixin'
import TvFrame from '@/components/TvFrame.vue'
export default {
  name: 'MainPage',
  components: {
    StartScreenDarkSection,
    HeaderPlug,
    TheFooter,
    TheHeader,
    MainSection2,
    MainSectionSlider,
    MainSection4,
    StartScreen,
    TvFrame,
  },
  mixins: [PageAnimationMixin],
  head() {
    return {
      title: this.main_page.meta.title,
      meta: [
        {
          name: 'title',
          hid: 'title',
          content: this.main_page.meta.title,
        },
        {
          name: 'description',
          hid: 'description',
          content: this.main_page.meta.description,
        },
        {
          name: 'keywords',
          hid: 'keywords',
          content: this.main_page.meta.keywords,
        },
      ],
    }
  },
  computed: {
    ...mapState(['isTV', 'iframe']),
    ...mapGetters(['main_page']),
  },
  beforeDestroy() {
    this.setTV(true)
  },
  methods: {
    ...mapMutations(['setTV']),
  },
}
</script>
