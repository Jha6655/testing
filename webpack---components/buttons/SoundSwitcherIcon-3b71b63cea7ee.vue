@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';














.switcher-2 {
  // --bg-color: #575757;
  // --shadow: -2.59048px -2.59048px 7.85333px rgba(37, 37, 37, 0.4),
  //   2.59048px 2.59048px 5.18095px rgba(63, 63, 63, 0.5);
  --bg-color: #8a8a8a;
  --shadow: -2.59048px -2.59048px 7.85333px rgba(165, 165, 165, 0.4),
    2.59048px 2.59048px 5.18095px rgba(66, 66, 66, 0.5);
  display: block;
  width: 4.8rem;
  height: 2.4rem;
  background: var(--bg-color);
  box-shadow: var(--shadow);
  border-radius: 1.2rem;
  position: relative;
  @include min(lg) {
    width: 6.2rem;
    height: 3.1rem;
    border-radius: 5.5rem;
    // --shadow: -1.29167px -1.29167px 7.75px rgba(206, 206, 206, 0.8),
    //   1.9375px 1.9375px 3.875px rgba(147, 147, 147, 0.4);
  }
}
.switcher-2__body {
  // --bg-color: #494949;
  // --shadow: inset -1px -1px 3px rgba(66, 66, 66, 0.9),
  //   inset 1px 1px 2px rgba(15, 15, 15, 0.2);
  --bg-color: #737374;
  --shadow: inset -1px -1px 3px rgba(115, 115, 115, 0.9),
    inset 1px 1px 2px rgba(172, 172, 172, 0.2);
  width: 4.6rem;
  height: 2.2rem;
  background: var(--bg-color);
  box-shadow: var(--shadow);
  border-radius: 1.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @include min(lg) {
    // --shadow: inset -1.29167px -1.29167px 3.875px rgba(214, 214, 214, 0.9),
    //   inset 1.29167px 1.29167px 2.58333px rgba(152, 152, 152, 0.2);
    width: 5.942rem;
    height: 2.842rem;
    border-radius: 1.55rem;
  }
}
.switcher-2__marker {
  --bg-color: #575757;
  --shadow: 0px 1px 4px rgba(44, 43, 43, 0.6),
    2px 2px 3px rgba(105, 105, 109, 0.35);

  --size: 1.4rem;
  width: var(--size);
  height: var(--size);
  display: block;
  border-radius: 50%;
  background: var(--bg-color);
  box-shadow: var(--shadow);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0.525rem, -50%);
  transition: var(--transition-300);
  transition-property: transform;
  @include min(lg) {
    --size: 1.8rem;
    // --shadow: 0px 1.29167px 5.16667px rgba(174, 174, 174, 0.6),
    //   2.58333px 2.58333px 3.875px rgba(174, 174, 174, 0.35);
    transform: translate(0.678rem, -50%);
  }
}
.switcher-2__marker::after {
  --size: 0.4rem;
  --bg-color: #46ba67;
  content: '';
  display: block;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--bg-color);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: var(--transition-300);
  opacity: 0;
  @include min(lg) {
    --size: 0.6rem;
  }
}

.sound-switcher.active .switcher-2__marker {
  transform: translate(2.525rem, -50%);
  @include min(lg) {
    transform: translate(3.678rem, -50%);
  }
}
.sound-switcher:hover .switcher-2__marker {
  @include min(md) {
    transform: translate(2.525rem, -50%);
  }
  @include min(lg) {
    transform: translate(3.678rem, -50%);
  }
}

.sound-switcher.active .switcher-2__marker::after {
  opacity: 1;
}

// night mode

.night-mode:not(.faq-opened) .switcher-2 {
  --bg-color: #3c3c3c;
  --shadow: -2.59048px -2.59048px 7.85333px rgba(0, 0, 0, 0.4),
    2.59048px 2.59048px 5.18095px rgba(48, 48, 48, 0.5);
}

.night-mode:not(.faq-opened) .switcher-2__body {
  --bg-color: #303030;
  --shadow: inset -1px -1px 3px rgba(40, 40, 40, 0.9),
    inset 1px 1px 2px rgba(0, 0, 0, 0.2);
  @include min(lg) {
    // --shadow: inset -1.29167px -1.29167px 3.875px rgba(16, 16, 16, 0.5),
    //   inset 1.29167px 1.29167px 2.58333px rgba(74, 74, 74, 0.4);
  }
}

.night-mode:not(.faq-opened) .switcher-2__marker {
  --bg-color: #484848;
  --shadow: 0px 1px 4px rgba(44, 43, 43, 0.6),
    2px 2px 3px rgba(27, 27, 27, 0.35);
  @include min(lg) {
    // --shadow: 0px 1.29167px 5.16667px rgba(48, 48, 48, 0.5),
    //   2.58333px 2.58333px 3.875px rgba(16, 16, 16, 0.35);
  }
}
