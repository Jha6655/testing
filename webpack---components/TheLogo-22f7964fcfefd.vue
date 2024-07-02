@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';























.header__logo {
  display: block;
  width: 2.5rem;
  @include min(lg) {
    width: 3.3rem;
  }
  @include max(xs) {
    width: 3rem;
  }
}
.header__logo-image {
  display: block;
  width: 100%;
  height: auto;
}
