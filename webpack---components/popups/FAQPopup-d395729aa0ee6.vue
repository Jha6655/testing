@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';



































































































































.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 500;
  background-color: rgba(#101011, 0.9);
  overscroll-behavior: none;
}

.faq {
  // transform: translateY(-110%);
  // transition: var(--transition);
}

// opened

// .faq.opened {
//   transform: translateY(0);
// }

.faq__inner {
  height: 100%;
  width: 67.3rem;
  overflow: hidden;
  overflow-y: auto;
  margin: 0 auto;
  overscroll-behavior: none;

  // disable scroll

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @include min(lg) {
    width: 91.4rem;
  }
  @include max(bg) {
    width: 54.4rem;
  }
  @include max(sm) {
    width: 51.2rem;
  }
  @include max(xs) {
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
    width: 100%;
    max-width: 51.2rem;
  }
}

// content

.faq__content {
  @include offset-media(padding-bottom, coral);
  padding-top: 16.1rem;
  @include min(lg) {
    padding-top: 20.3rem;
  }
  @include max(bg) {
    padding-top: 14.9rem;
  }
  @include max(xs) {
    padding-top: 13.5rem;
  }
}
