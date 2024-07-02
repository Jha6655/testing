@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';

























































































.link-switcher {
  --color: var(--color-dark);
  color: var(--color);
  display: flex;
  align-items: center;
}

.link-switcher__text {
  margin-left: 1.2rem;
  // margin-bottom: -0.4rem;
  position: relative;
}
.link-switcher__text:after {
  --bg-color: var(--color-dark);
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: var(--bg-color);
  position: absolute;
  left: 0;
  bottom: 0;
  transform: scaleX(0);
  transform-origin: left center;
  transition: var(--transition-300);
}

// hover

.link-switcher:hover .link-switcher__text:after {
  @include min(md) {
    transform: scaleX(1);
  }
}

// night mode

.night-mode .link-switcher {
  --color: var(--color-light);
}

.night-mode .link-switcher__text:after {
  --bg-color: var(--color-light);
}

// faq opened
.faq-opened .link-switcher {
  --color: var(--color-light);
}

.faq-opened .link-switcher__text:after {
  --bg-color: var(--color-light);
}
