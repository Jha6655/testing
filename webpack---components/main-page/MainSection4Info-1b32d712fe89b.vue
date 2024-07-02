@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';






































.section-4__info {
  position: absolute;
  left: 9.7rem;
  top: 2.3rem;
  padding: 0.7rem 4.3rem 0.3rem 1.2rem;
  transform-origin: right top;
  transform: translateX(-100%) rotate(-90deg);
  @include min(lg) {
    top: vw1920(30);
    left: 13.6rem;
    padding: 0.7rem 5.1rem 0.7rem 2.3rem;
  }
  @include max(bg) {
    top: 1.4rem;
    left: 8rem;
  }
  @include max(sm) {
    left: 4rem;
    top: 1.1rem;
    padding: 0.3rem 3.6rem 0.2rem 1.5rem;
  }
  @include max(xs) {
    padding: 0.25rem 1.8rem 0.35rem 1rem;
    position: relative;
    transform: unset;
    left: unset;
    right: unset;
    display: flex;
    align-items: center;
    margin-bottom: darkgreen(xxs);
  }
}
.section-4__info-text {
  color: var(--color-fade-light);
  text-align: right;
  @include max(xs) {
    text-align: left;
  }
}
.section-4__info-logo {
  display: block;
  width: 2.7rem;
  height: auto;
  position: absolute;
  right: 0.9rem;
  top: 1.8rem;
  transform: rotate(90deg);
  @include min(lg) {
    width: 3.5rem;
  }
  @include max(sm) {
    width: 2.3rem;
    top: 1.3rem;
    right: 0.5rem;
  }
  @include max(xs) {
    position: relative;
    left: unset;
    right: unset;
    top: unset;
    bottom: unset;
    transform: unset;
    margin-right: 1rem;
  }
}
