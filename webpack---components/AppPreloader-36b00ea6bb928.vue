@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';



































































































































.preloader {
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 100vw;
  height: 100vh;
  padding: 4.8rem 4rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  // transform: translateY(-100vh);
  @include max(xs) {
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
  }
}

.preloader__inner {
  width: 100%;
  height: 100%;
  position: relative;
}
.preloader__text {
  font-weight: 400;
  max-width: 123.6rem;
  font-size: 11.8rem;
  line-height: 0.99;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  @include min(lg) {
    font-size: 14.8rem;
    max-width: 158.7rem;
  }
  @include max(bg) {
    font-size: 8.8rem;
    max-width: 94.4rem;
  }
  @include max(sm) {
    font-size: 7.8rem;
    max-width: 68.8rem;
  }
  @include max(xs) {
    font-size: 6.2rem;
  }
}

.preloader__progress {
  position: absolute;
  left: 0;
  bottom: 4.8rem;
  width: 100%;
  height: 1px;
  background-color: var(--color-fade-light);
  transform-origin: left center;
  transform: scaleX(0);
  @include min(lg) {
    bottom: 5.6rem;
  }
  @include max(bg) {
    bottom: 4rem;
  }
  @include max(xs) {
    bottom: 3.2rem;
  }
}
