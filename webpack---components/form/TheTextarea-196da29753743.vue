@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';
























































































.textarea {
  resize: none;
  height: 100%;
  width: 100%;
  display: block;
  background: transparent;
  color: var(--color-light);

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @include max(xs) {
    height: 15rem;
  }
}
