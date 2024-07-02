@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';













































































.footer__socials {
  position: absolute;
  left: 50%;
  @include offset-media(bottom, darkgreen);
  transform: translateX(-50%);
  display: flex;
  @include max(sm) {
    right: 4rem;
    left: unset;
    transform: unset;
  }
  @include max(xs) {
    left: 50%;
    right: unset;
    transform: translateX(-50%);
  }
}
.footer__socials > * + * {
  margin-left: 2.4rem;
}
.footer__logo {
  display: none;
  @include max(xs) {
    display: block;
    position: static;
    transform: unset;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
  }
}
