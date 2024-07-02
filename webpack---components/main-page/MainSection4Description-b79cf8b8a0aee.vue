@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';


































































.section-4__description {
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @include media(margin-top, 42.2rem, 51.5rem, 33.6rem, 25.7rem, 20.3rem);
}
.section-4__description-box {
  pointer-events: none;
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 57.1rem;
  height: calc(100% + 3.4rem);
  transform: translateX(-50%);
  @include min(lg) {
    width: 111.3rem;
    height: calc(100% + 3.2rem);
  }
  @include max(bg) {
    width: 70.4rem;
    height: calc(100% + 3.5rem);
  }
  @include max(sm) {
    width: 57.1rem;
    height: calc(100% + 3.7rem);
  }
  @include max(xs) {
    width: 34.3rem;
    height: calc(100% + 3.5rem);
  }
}

.section-4__description-arrow {
  display: block;
  height: auto;
  --sqrt: 1.41421356237;
  --size: 0.889rem;
  width: calc(var(--size) * var(--sqrt));
  @include media(--size, 0.8889rem, 1.502rem, 1.215rem, 1.584rem, 1.584rem);
}

.section-4__description-text {
  @include offset-media(margin-top, darkgreen);
  max-width: 44.7rem;
  text-align: center;
  color: var(--color-fade-light);
  @include min(lg) {
    max-width: 47.2rem;
  }
  @include max(xs) {
    max-width: 30.7rem;
  }
}
