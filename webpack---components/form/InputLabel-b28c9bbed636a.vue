@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';

































































// label

.input-label {
  position: relative;
  @include offset-media(padding-bottom, gold);
  display: block;
  width: 100%;
  cursor: pointer;
}

.input-label:before {
  content: '';
  display: block;
  width: calc(100% + 1.6rem);
  height: calc(100% + 1.6rem);
  position: absolute;
  left: -0.8rem;
  top: -0.8rem;
}

// placeholder

.input-placeholder {
  position: absolute;
  left: 0;
  @include offset-media(bottom, gold);
  pointer-events: none;
  transition: var(--transition-300);
  @include max(xs) {
    font-size: 1.6rem;
  }
}

// border

.input-border {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: var(--transition);
  width: 100%;
  height: 1px;
  background-color: var(--color-light);
  transform-origin: left center;
}

// error icon

.error-icon {
  display: block;
  position: absolute;
  right: 0;
  @include offset-media(bottom, gold);
  transition: var(--transition);
  opacity: 0;
  pointer-events: none;
}

// input error

.input-label.error .input-border {
  background-color: var(--color-error);
}
.input-label.error .error-icon {
  opacity: 1;
}

// input hover

.input-label:hover .input-border {
  @include min(md) {
    opacity: 0.4;
  }
}

// input focus

.input-label.active .input-placeholder {
  opacity: 0;
}

// textarea label

.textarea-label {
  height: 100%;
}

.textarea-label .input-placeholder {
  bottom: unset;
  top: 0;
}
