<template>
  <ul class="header__navigation">
    <li
      v-for="{ link, text, id } in menu"
      :key="id"
      class="header__navigation-item p2"
    >
      <NavLink :link="link" :text="text" />
    </li>
    <li class="header__navigation-item p2">
      <NavLink :is-button="true" text="FAQ" @clickHandler="toggleFAQ" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
import NavLink from '@/components/NavLink.vue'
export default {
  components: {
    NavLink,
  },
  data: () => ({
    menu: [
      {
        id: 1,
        link: '/about',
        text: 'About us',
      },
      {
        id: 2,
        link: '/contacts',
        text: 'Contacts',
      },
    ],
  }),
  methods: {
    ...mapMutations(['toggleFaqPopup']),
    toggleFAQ() {
      this.toggleFaqPopup()
    },
  },
}
</script>

<style lang="scss" scoped>
.header__navigation {
  --skew: -5deg;
  transform-origin: right top;
  transform: perspective(500px) skew(var(--skew), var(--skew)) rotateY(-5deg);
}
.header__navigation-item + .header__navigation-item {
  margin-top: 1.6rem;
  @include min(lg) {
    margin-top: 1.8rem;
  }
  @include max(bg) {
    margin-top: 1.4rem;
  }
}
</style>
