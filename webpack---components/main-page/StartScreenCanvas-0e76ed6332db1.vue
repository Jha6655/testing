@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';










































































































































.start-screen__canvas-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.start-screen__mode-switcher {
  position: fixed;
  left: 50%;
  top: 50%;
  // @include max(xs) {
  //   top: unset;
  //   left: 40%;
  //   bottom: 200px;
  //   transform: translateX(-50%);
  // }
}
.start-screen__mode-switcher.hidden {
  transition: 0.5s ease-in-out;
  opacity: 0;
}
