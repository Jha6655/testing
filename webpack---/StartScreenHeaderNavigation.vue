<template>
  <ul class="start-header__navigation-list">
    <li class="start-header__navigation-item">
      <LinkSwitcher link="/about" text="About us" />
    </li>
    <li class="start-header__navigation-item">
      <LinkSwitcher link="/contacts" text="Contacts" />
    </li>
    <li class="start-header__navigation-item">
      <LinkSwitcher
        link="/faq"
        text="FAQ"
        :is-button="true"
        @click.native.prevent="toggleFAQ"
      />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
import LinkSwitcher from '@/components/links/LinkSwitcher.vue'
export default {
  components: {
    LinkSwitcher,
  },
  methods: {
    ...mapMutations(['toggleFaqPopup']),
    toggleFAQ(e) {
      e.preventDefault()
      this.toggleFaqPopup()
    },
  },
}
</script>

<style lang="scss" scoped>
.start-header__navigation-list {
  pointer-events: all;
  display: flex;
  flex-direction: column;
}
.start-header__navigation-item + .start-header__navigation-item {
  @include offset-media(margin-top, antiquewhite);
}
</style>
