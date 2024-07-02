@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';





























.section-2__labels {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  @include max(sm) {
    position: relative;
    height: 100%;
    margin-top: coral(xs);
  }
  @include max(xs) {
    margin-top: coral(xxs);
    margin-bottom: coral(xxs);
  }
}
.section-2__label-1,
.section-2__label-2,
.section-2__label-3,
.section-2__label-4 {
  position: absolute;
}
.section-2__label-1 {
  left: vw1440(872);
  top: 72px;
  @include min(lg) {
    left: vw1920(1044);
    top: 87px;
  }
  @include max(bg) {
    left: vw1024(592);
    top: 51px;
  }
  @include max(sm) {
    left: 0;
    top: 0;
  }
}
.section-2__label-2 {
  left: vw1440(1041);
  top: 72px;
  @include min(lg) {
    left: vw1920(1278);
    top: 87px;
  }
  @include max(bg) {
    left: vw1024(752);
    top: 51px;
  }
  @include max(sm) {
    left: vw768(232);
    top: 0;
  }
  @include max(xs) {
    left: vw375(133);
  }
}
.section-2__label-3 {
  left: vw1440(1120);
  top: 220px;
  @include min(lg) {
    left: vw1920(1362);
    top: 255px;
  }
  @include max(bg) {
    left: vw1024(777);
    top: 157px;
  }
  @include max(sm) {
    left: vw768(342);
    top: 158px;
  }
  @include max(xs) {
    left: vw375(169);
    top: 66px;
  }
}
.section-2__label-4 {
  right: var(--container-padding);
  @include offset-media(bottom, darkgreen);
  @include max(sm) {
    bottom: 31px;
  }
  @include max(sm) {
    right: 0;
  }
  @include max(xs) {
    // right: unset;
    left: 0;
    bottom: 0;
  }
}
