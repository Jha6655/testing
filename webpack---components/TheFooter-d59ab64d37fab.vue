@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';















































.footer__logo {
  position: absolute;
  left: 50%;
  @include offset-media(bottom, darkgreen);
  transform: translateX(-50%);
  @include max(xs) {
    position: static;
    transform: unset;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
  }
}
