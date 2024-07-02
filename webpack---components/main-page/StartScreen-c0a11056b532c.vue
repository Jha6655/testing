@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';
































.start-screen-wrapper {
  height: 500vh;
  pointer-events: none;
}
.start-screen {
  width: 100vw;
  background-color: var(--color-dark-gray);
  color: var(--color-dark);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

// night mode

.start-screen.night-mode {
  background-color: var(--color-dark-blue);
}
