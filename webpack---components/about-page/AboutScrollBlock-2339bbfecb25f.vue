@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';






























































































































































































































.about-page__scroll-block {
  width: 100vw;
  height: 300vh;
  position: relative;
  @include offset-media(margin-top, aquamarine);
  @include max(bg) {
    height: 400vh;
  }
}
.scroll-block {
  pointer-events: none;
  --bg-color-left: #a3a3a3;
  --bg-color-right: #292929;
  width: 100%;
  height: 100vh;
  min-height: vw1440(728);
  display: flex;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  @include min(lg) {
    min-height: vw1920(970);
  }
  @include max(bg) {
    // height: unset;
    min-height: vw1024(517);
  }
  @include max(sm) {
    // height: unset;
    flex-direction: column;
    min-height: 100vh;
  }
}

// left

.scroll-block__left {
  flex: 0 0 50%;
  height: 100%;
  background-color: var(--bg-color-left);
  position: relative;
  @include max(sm) {
    flex-basis: 768px;
  }
  @include max(xs) {
    // flex-basis: 512px;
    flex-basis: 400px;
  }
}

// right

.scroll-block__right {
  flex: 0 0 50%;
  height: 100%;
  background-color: var(--bg-color-right);
  position: relative;
  @include max(sm) {
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0;
    overflow: hidden;
  }
}

// slides
.scroll-block__slides {
  padding: 0 4.8rem;
  @include min(lg) {
    padding: 0 6.4rem;
  }
  @include max(bg) {
    padding: 0 3.4rem;
  }
  @include max(sm) {
    padding: 0 7.4rem;
  }
  @include max(xs) {
    padding: 0 var(--container-padding-mobile);
  }
}

// slide

// .scroll-block__slide {
// }

.scroll-block__slide + .scroll-block__slide {
  margin-top: 33.2rem;
  @include min(lg) {
    margin-top: 44.2rem;
  }
  @include max(bg) {
    margin-top: 19.5rem;
  }
  @include max(sm) {
    margin-top: 13.2rem;
  }
  @include max(xs) {
    margin-top: 12.2rem;
  }
}

// slide title

.scroll-block__slide-title {
  @include offset-media(margin-top, darkgreen);
}

// lottie elements

.scroll-block__graphics,
.scroll-block__graphics-tabs {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
}
