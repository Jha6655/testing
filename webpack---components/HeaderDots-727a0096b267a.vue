@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';




















.start-header__dots {
  position: absolute;
  left: 50%;
  top: 3.3rem;
  width: 669px;
  display: flex;
  justify-content: space-between;
  transform: translateX(-50%);
  @include min(lg) {
    width: 819px;
    top: 4.3rem;
  }
}
.start-header__dot {
  --size: 0.4rem;
  width: var(--size);
  height: var(--size);
  background: var(--color-dark);
  border-radius: 50%;
  @include min(lg) {
    --size: 0.6rem;
  }
}
// light
.start-header__dots.light .start-header__dot {
  background-color: var(--color-light);
}
