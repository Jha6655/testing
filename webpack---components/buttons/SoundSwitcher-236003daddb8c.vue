@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';








































































.sound-switcher {
  --color: var(--color-dark);
  display: flex;
  align-items: center;
  color: var(--color);
  pointer-events: all;
}
.sound-switcher__text {
  margin-right: 0.8rem;
  // margin-bottom: -0.4rem;
  margin-bottom: -0.2rem;
  @include min(lg) {
    margin-right: 1.6rem;
    margin-bottom: -0.3rem;
    // margin-bottom: -0.5rem;
  }
}

// night mode

.night-mode .sound-switcher,
.faq-opened .sound-switcher {
  color: var(--color-light);
}
