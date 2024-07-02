@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';










































































































.canvas-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
::v-deep canvas {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-fade-light);
}
