@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';















































































































































































































































.contacts-page {
  min-height: 100vh;
  height: 100%;
  --block-padding: 4rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  @include max(xs) {
    display: block;
    --block-padding: 1.6rem;
  }
}

//  content

.contacts-page__content {
  display: grid;
  grid-template-columns: vw1440(960) 1fr;
  grid-template-rows: auto 1fr;
  @include offset-media(row-gap, antiquewhite);
  @include offset-media(margin-top, coral);
  @include min(lg) {
    grid-template-columns: vw1920(1215) 1fr;
  }
  @include max(bg) {
    grid-template-columns: vw1024(576) 1fr;
  }
  @include max(sm) {
    grid-template-columns: vw768(391) 1fr;
    grid-template-rows: auto auto 1fr;
  }
  @include max(xs) {
    display: block;
    position: relative;
  }
}

// part 1

.content__part-1 {
  padding-left: var(--container-padding);
}

// part 2

.content__part-2 {
  padding-right: var(--block-padding);
  @include max(xs) {
    display: none;
  }
}

// part 3

.content__part-3 {
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
  padding-left: var(--container-padding);
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  @include max(sm) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding-right: var(--container-padding);
  }
  @include max(xs) {
    padding-top: 4.8rem;
    padding-bottom: 0;
    margin-top: antiquewhite(xxs);
  }
}

// part 4

.content__part-4 {
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
  padding-right: var(--container-padding);
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  position: relative;
  @include max(sm) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    padding-left: var(--container-padding);
    padding-top: aquamarine(xs);
  }
  @include max(xs) {
    padding-top: aquamarine(xxs);
  }
}

// part 5

.content__part-5 {
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  height: 100%;
  // background-color: rgba(gold, 0.03);
  pointer-events: none;
  position: relative;
  @include max(sm) {
    grid-row: 2 / 4;
  }
  @include max(xs) {
    height: unset;
    position: absolute;
    left: 0;
    top: 2.7rem;
    width: 100%;
    // width: calc(100vw - 1.6rem);
    bottom: 0;
  }
}

// text

.content__text {
  max-width: 38.2rem;
  @include max(sm) {
    max-width: 48.3rem;
  }
}

// email

.content__email-wrapper {
  @include offset-media(margin-top, gold);
}
// footer

.content__footer {
  display: flex;
  margin-top: auto;
  align-items: center;
  @include max(bg) {
    display: none;
  }
}
.content__footer-text {
  --margin-left: 1.2rem;
  margin-top: 0.1rem;
  margin-left: var(--margin-left);
  @include min(lg) {
    --margin-left: 1.4rem;
  }
}

// footer

.contacts-page__footer {
  margin-top: auto;
}

// form description

.contacts-page__form-description {
  color: var(--color-fade-light);
}

// snake
.contacts__snake {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
