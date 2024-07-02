@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';
























































































































.rotate-text {
  position: relative;
  width: 120rem;
  @include min(lg) {
    width: 153.8rem;
  }
  @include max(bg) {
    width: 80.9rem;
  }
  @include max(sm) {
    width: 60rem;
  }
  @include max(xs) {
    width: 34.3rem;
  }
}
.rotate-text__title {
  text-align: center;
}

.rotate-title {
  font-size: 12.4rem;
  @include min(lg) {
    font-size: vw1920(162);
  }
  @include max(bg) {
    font-size: 8rem;
  }
  @include max(sm) {
    font-size: 6.5rem;
  }
  @include max(xs) {
    font-size: 4.8rem;
  }
}

.rotate-text__wheel-wrapper {
  --size: 58.3rem;
  position: absolute;
  left: 50%;
  top: 10.7rem;
  border-radius: 50%;
  overflow: hidden;
  width: var(--size);
  height: var(--size);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-dark);
  @include min(lg) {
    top: 13.3rem;
    --size: 73rem;
  }
  @include max(bg) {
    --size: 45.6rem;
    top: 6rem;
  }
  @include max(sm) {
    --size: 34rem;
    top: 4.6rem;
  }
  @include max(xs) {
    --size: 29.6rem;
    top: 5.1rem;
  }
}
.rotate-text__wheel {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  // transform: rotate(10deg);
}
.rotate-text__wheel.active {
  background-color: #ffffff;
  color: var(--color-dark);
  transition: var(--transition);
}
.rotate-text__wheel::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid var(--color-fade-light);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.rotate-text__wheel::after {
  --size: 0.8rem;
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color-fade-light);
  @include min(lg) {
    --size: 1rem;
  }
  @include max(bg) {
    --size: 0.6rem;
  }
  @include max(sm) {
    --size: 0.4rem;
  }
}
.rotate-text__wheel-inner {
  position: absolute;
  width: 120rem;
  top: -10.7rem;
  left: 50%;
  transform: translateX(-50%);
  @include min(lg) {
    width: 153.8rem;
    top: -13.3rem;
  }
  @include max(bg) {
    top: -6rem;
    width: 80.9rem;
  }
  @include max(sm) {
    width: 60rem;
    top: -4.6rem;
  }
  @include max(xs) {
    width: 34.3rem;
    top: -5.1rem;
  }
}
.rotate-text__wheel-text {
  text-align: center;
}
