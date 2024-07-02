<template>
  <div class="developers">
    <span class="developers__label">Created by&nbsp;</span>
    <NavLinkEternal
      class="developers__link"
      link="https://thefirstthelast.agency/?utm_source=HindLaskosEntertaiment&utm_medium=article&utm_campaign=promo"
      text="The First The Last"
    />
  </div>
</template>

<script>
import NavLinkEternal from '@/components/NavLinkExternal.vue'
export default {
  components: {
    NavLinkEternal,
  },
}
</script>

<style lang="scss" scoped>
.developers {
  display: flex;
  justify-content: flex-start;
}
.developers__label {
  @include min(bg) {
    transform-origin: right bottom;
    --skew: -0.5deg;
    --rotate: 5deg;
    --y: 0px;
    transform: perspective(500px);
  }
  color: var(--color-fade-light);

  // transform: perspective(500px) skew(var(--skew), var(--skew))
  //   rotateY(var(--rotate)) translateY(var(--y));
}

.developers__link {
  @include min(bg) {
    transform-origin: right bottom;
    --skew: -1.5deg;
    --rotate: 5deg;
    --y: -5px;
    transform: perspective(500px);
  }

  // transform: perspective(500px) skew(var(--skew), var(--skew))
  //   rotateY(var(--rotate)) translateY(var(--y));
}

// contacts footer

.contacts-footer .developers {
  @include max(sm) {
    pointer-events: none;
    visibility: hidden;
  }
}
</style>
