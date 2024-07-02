@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';




























































.error-page {
  width: 100vw;
  height: 100vh;
  position: relative;
}

// button

.error-page__button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @include offset-media(bottom, darkgreen);
}

// title
.error-page__title {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: max-content;
}

// canvas

.error-page__canvas-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
