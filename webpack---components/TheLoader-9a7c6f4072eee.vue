@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';













































.loader {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: var(--color-dark);
  z-index: 10000;
  transform-origin: center bottom;
  // transform: scaleY(0);
  display: none;
}

.loader__inner {
  display: block;
  width: 100%;
  height: 100%;
}
.loader__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
