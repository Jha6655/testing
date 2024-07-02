@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';








































































// title

.faq__item:nth-child(1) .faq__item-title {
  padding-top: 0;
}

.faq__item-title {
  @include offset-media(padding-top, darkgreen);
  @include offset-media(padding-bottom, darkgreen);
}
.faq__item-title-text {
  position: relative;
  display: block;
}

.faq__item-title-text:after,
.faq__item-title-text:before {
  content: '';
  display: block;
  width: 0.8rem;
  height: 0.2rem;
  background-color: var(--color-light);
  transform-origin: center center;
  position: absolute;
  right: 0;
  top: 50%;
  @include max(xs) {
    display: none;
  }
}
.faq__item-title-text:before {
  transform: translateY(-50%);
}
.faq__item-title-text:after {
  transform: translateY(-50%) rotate(90deg);
  transition: var(--transition);
}

// text

.faq__item-text-wrapper {
  overflow: hidden;
  height: 0;
}

// padding bottom

.faq__item-pb {
  width: 100%;
  @include offset-media(height, darkgreen);
}

// bottom border

.faq__item-border {
  width: 100%;
  height: 1px;
  background-color: var(--color-light);
  transform-origin: left center;
}

// opened

.faq__item.opened .faq__item-title-text:after {
  transform: translateY(-50%) rotate(180deg);
}
