@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';


























.nightmode-label {
  position: relative;
  transform: translateX(-150%);
}

// icon

.nightmode-label__icon {
  height: auto;
  @include min(lg) {
    width: 4.7rem;
  }
  @include max(sm) {
    width: 5rem;
  }
  @include max(xs) {
    width: 4rem;
  }
}

// text

.nightmode-label__text {
  --color: var(--color-dark);
  position: absolute;
  left: calc(100% + 0.6rem);
  bottom: -0.6rem;
  width: max-content;
  color: var(--color);
}

// night mode

.night-mode .nightmode-label__text {
  --color: var(--color-light);
}

.night-mode .nightmode-label__icon path {
  fill: #ffffff;
}
