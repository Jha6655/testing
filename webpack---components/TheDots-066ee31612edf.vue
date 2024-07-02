@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';





























































.dots {
  position: absolute;
  width: 669px;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  @include min(lg) {
    width: 819px;
    top: 4.3rem;
  }
  @include max(bg) {
    width: 369px;
  }
  @include max(sm) {
    width: 256px;
  }
}
.dot {
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
.dots.light .dot {
  background-color: var(--color-light);
}
