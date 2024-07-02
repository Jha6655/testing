<script>
import { mapState, mapGetters } from 'vuex'
import HeaderPlug from '@/components/HeaderPlug.vue'
import TheHeader from '@/components/TheHeader.vue'
import ContactsFooter from '@/components/contacts-page/ContactsFooter.vue'
import TheForm from '@/components/form/TheForm.vue'
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
import PageAnimationMixin from '@/plugins/mixins/PageAnimationMixin'
import NavLink from '@/components/NavLink.vue'
import AppSnake from '@/components/snake/AppSnake.vue'
import ThanksBlock from '@/components/form/ThanksBlock.vue'
import DotLabel from '@/components/DotLabel.vue'
import TvFrame from '~/components/TvFrame.vue'
export default {
  name: 'ContactsPage',
  components: {
    DotLabel,
    ThanksBlock,
    NavLink,
    HeaderPlug,
    ContactsFooter,
    TheHeader,
    TheForm,
    AppSnake,
    TvFrame,
  },
  mixins: [AnimationsControlMixin, PageAnimationMixin],
  async asyncData({ store }) {
    if (!store.state.data.contacts.data) {
      await store.dispatch('fetchData', {
        type: 'contacts',
      })
    }
  },
  data: () => ({
    timeline: null,
    startFormAnimation: false,
    animateFooter: false,
    isFormSent: false,
    timeout: null,
    emptyForm: false,
  }),

  computed: {
    ...mapState(['isLoaderComplete', 'isPreloaderComplete']),
    ...mapGetters(['contacts_page']),
  },
  watch: {
    isLoaderComplete(value) {
      value && this.timeline.play()
    },
    async isPreloaderComplete(value) {
      await this.$nextTick()
      value && this.timeline.play()
    },
  },
  async mounted() {
    await this.animate()
  },
  beforeDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  },

  methods: {
    // form success

    onSuccess() {
      this.isFormSent = true
      this.emptyForm = false
      this.timeout = setTimeout(() => {
        this.emptyForm = true
        this.isFormSent = false
      }, 5000)
    },

    // animation functions

    async animate() {
      await this.$nextTick()

      const { label1, label2, text, email, footer } = this.$refs
      const duration = 0.5

      this.timeline = this.$gsap.timeline({
        paused: true,
        onComplete: () => {
          this.startFormAnimation = true
          this.animateFooter = true
        },
      })
      this.timeline
        .fromTo(
          label1,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration,
          }
        )
        .fromTo(
          label2,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration,
          },
          '-=0.3'
        )
        .fromTo(
          text,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: duration * 1.2,
          },
          '-=0.4'
        )
        .fromTo(
          email,
          {
            autoAlpha: 0,
            y: 10,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration,
          },
          '-=0.4'
        )
        .fromTo(
          footer,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration,
          },
          '-=0.4'
        )

      this.timelines.push(this.timeline)
      return Promise.resolve()
    },
  },
}
</script>
<template>
  <div class="contacts-page">
    <HeaderPlug />
    <TheHeader />
    <TvFrame />
    <div class="contacts-page__content content">
      <div ref="label1" class="content__part-1">
        <DotLabel text="Contact Us" />
      </div>
      <div ref="label2" class="content__part-2">
        <p class="contacts-page__form-description p2">For connection with us</p>
      </div>
      <div class="content__part-3">
        <div ref="text" class="content__text p2">
          <div v-html="contacts_page.description"></div>
          <br />
          <p>{{ contacts_page.title }}</p>
        </div>
        <div ref="email" class="content__email-wrapper">
          <NavLink
            link="mailto:press@netpitch.io"
            :is-external="true"
            :text="contacts_page.email"
          />
        </div>
        <footer ref="footer" class="content__footer">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="content__footer-icon"
          >
            <path d="M0.5 14H26.5" stroke="white" />
            <path d="M5 4C8 5.5 15.6 7.6 22 4" stroke="white" />
            <path
              d="M22 22.9883C19 21.4883 11.4 19.3883 5 22.9883"
              stroke="white"
            />
            <path
              d="M13.4998 0.5C7.49981 4.83333 2.5 15.5 12.4998 26.5"
              stroke="white"
            />
            <path
              d="M14.0002 0.5C20.0002 4.83333 25 15.5 15.0002 26.5"
              stroke="white"
            />
            <circle cx="13.5" cy="13.5" r="13" stroke="white" />
          </svg>
          <p class="content__footer-text p2">California / USA</p>
        </footer>
      </div>
      <div class="content__part-4">
        <TheForm
          :start="startFormAnimation"
          :is-hidden="isFormSent"
          :empty-form="emptyForm"
          @success="onSuccess"
        />
        <transition name="fade">
          <ThanksBlock v-if="isFormSent" :is-visible="true" />
        </transition>
      </div>
      <div ref="canvasContainer" class="content__part-5">
        <div ref="gameWrapper" class="contacts__snake">
          <AppSnake />
        </div>
      </div>
    </div>
    <div class="contacts-page__footer">
      <ContactsFooter
        :animate-footer="animateFooter"
        :socials="contacts_page.socials"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts-page {
  min-height: 100vh;
  height: 100%;
  --block-padding: 4rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  @include max(xs) {
    display: block;
    --block-padding: 1.6rem;
  }
}

//  content

.contacts-page__content {
  display: grid;
  grid-template-columns: vw1440(960) 1fr;
  grid-template-rows: auto 1fr;
  @include offset-media(row-gap, antiquewhite);
  @include offset-media(margin-top, coral);
  @include min(lg) {
    grid-template-columns: vw1920(1215) 1fr;
  }
  @include max(bg) {
    grid-template-columns: vw1024(576) 1fr;
  }
  @include max(sm) {
    grid-template-columns: vw768(391) 1fr;
    grid-template-rows: auto auto 1fr;
  }
  @include max(xs) {
    display: block;
    position: relative;
  }
}

// part 1

.content__part-1 {
  padding-left: var(--container-padding);
}

// part 2

.content__part-2 {
  padding-right: var(--block-padding);
  @include max(xs) {
    display: none;
  }
}

// part 3

.content__part-3 {
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
  padding-left: var(--container-padding);
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  @include max(sm) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding-right: var(--container-padding);
  }
  @include max(xs) {
    padding-top: 4.8rem;
    padding-bottom: 0;
    margin-top: antiquewhite(xxs);
  }
}

// part 4

.content__part-4 {
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
  padding-right: var(--container-padding);
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  position: relative;
  @include max(sm) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    padding-left: var(--container-padding);
    padding-top: aquamarine(xs);
  }
  @include max(xs) {
    padding-top: aquamarine(xxs);
  }
}

// part 5

.content__part-5 {
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  height: 100%;
  // background-color: rgba(gold, 0.03);
  pointer-events: none;
  position: relative;
  @include max(sm) {
    grid-row: 2 / 4;
  }
  @include max(xs) {
    height: unset;
    position: absolute;
    left: 0;
    top: 2.7rem;
    width: 100%;
    // width: calc(100vw - 1.6rem);
    bottom: 0;
  }
}

// text

.content__text {
  max-width: 38.2rem;
  @include max(sm) {
    max-width: 48.3rem;
  }
}

// email

.content__email-wrapper {
  @include offset-media(margin-top, gold);
}
// footer

.content__footer {
  display: flex;
  margin-top: auto;
  align-items: center;
  @include max(bg) {
    display: none;
  }
}
.content__footer-text {
  --margin-left: 1.2rem;
  margin-top: 0.1rem;
  margin-left: var(--margin-left);
  @include min(lg) {
    --margin-left: 1.4rem;
  }
}

// footer

.contacts-page__footer {
  margin-top: auto;
}

// form description

.contacts-page__form-description {
  color: var(--color-fade-light);
}

// snake
.contacts__snake {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
