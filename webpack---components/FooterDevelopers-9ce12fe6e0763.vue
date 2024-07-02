@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';






















.developers {
  display: flex;
  justify-content: flex-start;
}
.developers__label {
  @include min(bg) {
    transform-origin: right bottom;
    --skew: -0.5deg;
    --rotate: 5deg;
    --y: 0px;
    transform: perspective(500px);
  }
  color: var(--color-fade-light);

  // transform: perspective(500px) skew(var(--skew), var(--skew))
  //   rotateY(var(--rotate)) translateY(var(--y));
}

.developers__link {
  @include min(bg) {
    transform-origin: right bottom;
    --skew: -1.5deg;
    --rotate: 5deg;
    --y: -5px;
    transform: perspective(500px);
  }

  // transform: perspective(500px) skew(var(--skew), var(--skew))
  //   rotateY(var(--rotate)) translateY(var(--y));
}

// contacts footer

.contacts-footer .developers {
  @include max(sm) {
    pointer-events: none;
    visibility: hidden;
  }
}
