@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';















































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
