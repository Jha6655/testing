@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';
































































































// input

.input {
  // background-color: var(--color-dark);
  background-color: transparent;
  color: var(--color-light);
  position: relative;
  z-index: 1;
  @include max(xs) {
    font-size: 1.6rem;
  }
}
