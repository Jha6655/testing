@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';


























































.idea-block {
  position: relative;
  @include offset-media(padding-top, skyblue);
  @include offset-media(padding-bottom, skyblue);
}

// label

.idea-block__label {
  display: flex;
  justify-content: center;
}

// title

.idea-block__title {
  @include offset-media(margin-top, antiquewhite);
  text-align: center;
}

// cta description

.idea-block__cta-description {
  @include offset-media(margin-top, crimson);
  position: relative;
}

// cta line
.idea-block__cta-line {
  width: 100%;
  height: 1px;
  background-color: var(--color-fade-light);
  position: absolute;
  left: 0;
  top: 50%;
}

// description plug text

.idea-block__cta-plug-text {
  opacity: 0;
}

// cta description text

.idea-block__cta-text {
  --left: 109px;
  position: absolute;
  top: 0;
  left: calc(50% + var(--left));
  background-color: var(--color-dark);
  padding-left: 1rem;
  padding-right: 1rem;
  @include min(lg) {
    --left: 136px;
  }
  @include max(bg) {
    --left: 76px;
  }
  @include max(sm) {
    --left: 18px;
  }
  @include max(xs) {
    --left: -36px;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
}

// button

.idea-block__button {
  @include offset-media(margin-top, cornflowerblue);
  display: flex;
  justify-content: center;
}
