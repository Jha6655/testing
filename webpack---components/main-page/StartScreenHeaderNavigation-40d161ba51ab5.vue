@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';






































.start-header__navigation-list {
  pointer-events: all;
  display: flex;
  flex-direction: column;
}
.start-header__navigation-item + .start-header__navigation-item {
  @include offset-media(margin-top, antiquewhite);
}
