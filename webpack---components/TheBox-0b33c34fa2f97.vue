@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';












































































































.box {
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  z-index: 0;
}
.border-top,
.border-right,
.border-bottom,
.border-left {
  position: absolute;
  background-color: var(--color-fade-light);
}
.border-top,
.border-bottom {
  width: 100%;
  height: 1px;
}
.border-left,
.border-right {
  width: 1px;
  height: 100%;
}
.border-top {
  left: 0;
  top: 0;
  transform-origin: left center;
}
.border-right {
  right: 0;
  top: 0;
  transform-origin: center top;
}
.border-bottom {
  left: 0;
  bottom: 0;
  transform-origin: right center;
}
.border-left {
  left: 0;
  top: 0;
  transform-origin: center bottom;
}
