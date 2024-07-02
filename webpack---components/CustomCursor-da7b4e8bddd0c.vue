@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';


































.cursor {
  position: fixed;
  z-index: 1500;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: difference;
  @media (max-width: 1279px) {
    display: none;
  }
}
.cursor__inner {
  position: absolute;
  left: 0;
  top: 0;
  width: 42px;
  height: 42px;
  transform: translate(-50%, -50%);
}
.cursor__inner > span {
  --size-1: 16px;
  --size-2: 3px;
  --h-width: var(--size-1);
  --h-height: var(--size-2);
  --v-width: var(--size-2);
  --v-height: var(--size-1);
  display: block;
  background-color: white;
  transform-origin: left center;
  position: absolute;
}
.cursor__inner > span:nth-child(1) {
  top: 50%;
  right: 0;
  width: var(--h-width);
  height: var(--h-height);
  transform: translateY(-50%);
}
.cursor__inner > span:nth-child(2) {
  bottom: 0;
  left: 50%;
  width: var(--v-width);
  height: var(--v-height);
  transform: translateX(-50%);
}
.cursor__inner > span:nth-child(3) {
  top: 50%;
  left: 0;
  width: var(--h-width);
  height: var(--h-height);
}
.cursor__inner > span:nth-child(4) {
  top: 0;
  left: 50%;
  width: var(--v-width);
  height: var(--v-height);
  transform: translateX(-50%);
}
