<template>
  <div class="about-page">
    <HeaderPlug />
    <TheHeader />
    <TvFrame />
    <AboutStartScreen :title1="about.title_1" :title2="about.title_2" />
    <AboutDescriptionBlock
      :label="about.label_1"
      :description1="about.description_1"
      :description2="about.description_2"
    />
    <AboutScrollBlock :features="about.features" />
    <AboutIdeaBlock
      :label="about.label_3"
      :title1="about.title_down_1"
      :title2="about.title_down_2"
    />
    <TheFooter />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import AboutStartScreen from '@/components/about-page/AboutStartScreen.vue'
import AboutDescriptionBlock from '@/components/about-page/AboutDescriptionBlock.vue'
import AboutScrollBlock from '@/components/about-page/AboutScrollBlock.vue'
import AboutIdeaBlock from '@/components/about-page/AboutIdeaBlock.vue'
import PageAnimationMixin from '@/plugins/mixins/PageAnimationMixin'
import TvFrame from '~/components/TvFrame.vue'
export default {
  name: 'AboutPage',
  components: {
    TheHeader,
    TheFooter,
    AboutStartScreen,
    AboutDescriptionBlock,
    AboutScrollBlock,
    AboutIdeaBlock,
    TvFrame,
  },
  mixins: [PageAnimationMixin],
  async asyncData({ store }) {
    if (!store.state.data.about.data) {
      await store.dispatch('fetchData', {
        type: 'about',
      })
    }
  },
  computed: {
    ...mapGetters(['about']),
  },
  beforeDestroy() {
    this.clearAllAnimationsTriggers()
  },
  methods: {
    ...mapMutations('about', ['setAboutUsTitleAnimate']),
    clearAllAnimationsTriggers() {
      this.setAboutUsTitleAnimate(false)
    },
  },
}
</script>
