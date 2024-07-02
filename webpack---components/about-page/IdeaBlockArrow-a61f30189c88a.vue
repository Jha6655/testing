@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';















































.idea-block__arrow {
  position: absolute;
  left: 0;
  top: 0;
  height: 18.4rem;
  width: 100%;
  overflow: hidden;
  @include min(lg) {
    height: 20.4rem;
  }
  @include max(bg) {
    height: 11.6rem;
  }
  @include max(sm) {
    height: 10.9rem;
  }
  @include max(xs) {
    height: 8.3rem;
  }
}
.idea-block__arrow > svg {
  display: block;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
