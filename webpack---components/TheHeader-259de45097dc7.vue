@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';






























































































































































.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  pointer-events: none;
}
.header__center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2.5rem;
  @include min(lg) {
    top: 3.5rem;
    transform: translateX(-50%);
  }
  @include max(bg) {
    top: 2.7rem;
  }
  @include max(xs) {
    top: 2.6rem;
    transform: translateX(-50%);
  }
}
.header__logo {
  pointer-events: all;
}
.header__right {
  --skew: 5deg;
  transform-origin: left top;
  transform: perspective(500px) skew(var(--skew), var(--skew)) rotateY(5deg);
}
// .header__center:before {
//   content: '';
//   display: block;
//   width: 150%;
//   height: 150%;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   background-image: radial-gradient(#32a4c3 0%, rgba(#32a4c3, 0) 70%);
//   z-index: -1;
//   opacity: 0.5;
// }
.header__dots {
  position: absolute;
  left: 50%;
  top: 3.1rem;
  transform: translateX(-50%);
  @include min(lg) {
    top: 4.3rem;
  }
  @include max(bg) {
    top: 3.3rem;
  }
  @include max(sm) {
    top: 3.3rem;
  }
  @include max(xs) {
    display: none;
  }
}
