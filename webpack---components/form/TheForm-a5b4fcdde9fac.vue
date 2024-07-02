@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';

























































































































































































































































































































































.form {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.form.hidden {
  pointer-events: none;
  opacity: 0;
}

// inputs container

.form__inputs {
  @include offset-media(row-gap, blueviolet);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  column-gap: 3.2rem;
  height: 100%;
  @include min(lg) {
    column-gap: 4.8rem;
  }
  @include max(bg) {
    column-gap: 3rem;
  }
  @include max(sm) {
    column-gap: 1.4rem;
  }
  @include max(xs) {
    display: block;
  }
}

.form__inputs > * + * {
  @include max(xs) {
    margin-top: blueviolet(xxs);
  }
}

// textarea

.form-textarea {
  grid-column: span 2;
}

// submit button

.form__button {
  @include offset-media(margin-top, cornflowerblue);
  transition: var(--transition);
}
.form__button.disabled {
  pointer-events: none;
  opacity: 0.5;
}
