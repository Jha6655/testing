@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';



























































































.about-page__start-screen {
  @include offset-media(padding-top, thistle);
  @include offset-media(padding-bottom, thistle);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

// line

.start-screen__line {
  width: 1px;
  height: 59.9rem;
  background-color: var(--color-fade-light);
  position: absolute;
  bottom: 0;
  left: 50%;
  pointer-events: none;
  z-index: -1;
  @include min(lg) {
    height: 79.9rem;
  }
  @include max(bg) {
    height: 47.7rem;
  }
  @include max(sm) {
    height: 41.1rem;
  }
  @include max(xs) {
    height: 40.4rem;
    bottom: -4.5rem;
  }
}

// title

.start-screen__title {
  text-align: center;
}

// scroll

.start-screen__scroll {
  @include offset-media(margin-top, darkgreen);
  color: var(--color-fade-light);
  position: relative;
  height: 6.2rem;
  width: 100%;
}
.start-screen__scroll-inner {
  --offset: 2.4rem;
  width: max-content;
  position: absolute;
  top: 0;
  left: calc(50% + var(--offset));
  @include min(lg) {
    --offset: 3.1rem;
  }
  @include max(bg) {
    --offset: 1.8rem;
  }
  @include max(sm) {
    --offset: 1.4rem;
  }
  @include max(xs) {
    --offset: 1.2rem;
  }
}
.start-screen__scroll-text {
  @include offset-media(margin-bottom, antiquewhite);
}
.start-screen__scroll-icon {
  transform-origin: left bottom;
  transform: translateY(-100%) rotate(90deg);
}

.start-screen__scroll-icon > span {
  display: inline-block;
  animation-name: arrow;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

.start-screen__scroll-icon > span:nth-child(2) {
  animation-delay: 0.5s;
}
.start-screen__scroll-icon > span:nth-child(3) {
  animation-delay: 1s;
}

@keyframes arrow {
  0% {
    transform: translateX(-5px);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
