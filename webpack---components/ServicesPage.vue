@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';

























































// page inner

.service-page {
  @include max(xs) {
    padding-bottom: gold(xxs);
  }
}

.service-page__inner {
  margin: 0 auto;
  @include offset-media(margin-top, coral);
  @include offset-media(padding-bottom, coral);
  max-width: 90.2rem;
  @include min(lg) {
    max-width: 122.2rem;
  }
  @include max(bg) {
    max-width: 70.4rem;
  }
  @include max(sm) {
    max-width: 51.2rem;
  }
  @include max(xs) {
    padding: 0 var(--container-padding-mobile);
    // padding: 0 var(--container-padding-mobile-alt);
    padding-bottom: coral(xxs);
  }
}

// title

.service-page__inner::v-deep h1 {
  @include h3;
  @include offset-media(margin-bottom, cornflowerblue);
  position: relative;
  width: fit-content;
}

.service-page__inner::v-deep h1:before {
  content: '';
  display: block;
  position: absolute;
  width: calc(100% + 76 / 57 * 1em);
  height: calc(100% + 12 / 57 * 1em);
  left: 0;
  top: 0;
  border: 1px solid var(--color-fade-light);
}

.service-page__inner::v-deep h1 > * {
  font-weight: 400;
}

.service-page__inner::v-deep h2 {
  @include p;
}

.service-page__inner::v-deep h2 > * {
  font-weight: 400;
}

.service-page__inner::v-deep h2 + p,
.service-page__inner::v-deep h2 + h2,
.service-page__inner::v-deep h2 + ul,
.service-page__inner::v-deep h2 + ol {
  @include offset-media(margin-top, darkgreen);
}

.service-page__inner::v-deep p {
  @include p;
  opacity: 0.4;
}

.service-page__inner::v-deep p > * {
  font-weight: 400;
}

.service-page__inner::v-deep p + h2 {
  @include offset-media(margin-top, coral);
}

.service-page__inner::v-deep p + p,
.service-page__inner::v-deep p + ul,
.service-page__inner::v-deep p + ol {
  @include offset-media(margin-top, darkgreen);
}

// lists

.service-page__inner::v-deep > ul > li,
.service-page__inner::v-deep > ol > li {
  @include p;
  opacity: 0.4;
}

.service-page__inner::v-deep > ol > li {
  opacity: 1;
}

.service-page__inner::v-deep > ul > li + li,
.service-page__inner::v-deep > ol > li + li {
  @include offset-media(margin-top, darkgreen);
}
