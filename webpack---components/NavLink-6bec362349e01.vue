@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';














































.nav-link {
  color: inherit;
  display: block;
  position: relative;
  width: max-content;
  pointer-events: all;
  white-space: nowrap;
}
.nav-link:after {
  content: '';
  display: block;
  width: calc(100% - 2 * var(--link-padding));
  height: 1px;
  background-color: var(--color-light);
  position: absolute;
  left: var(--link-padding);
  bottom: 0;
  transform-origin: left center;
  transform: scaleX(0);
  transition: var(--transition);
  transition-timing-function: var(--timing-function);
}

// hover
.nav-link:hover:after {
  @include min(md) {
    transform: scaleX(1);
  }
}
