@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';































































































.slider {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 10000px;
  overflow: hidden;
}
.slider__wrapper {
  --height: #{vw1440(402)};
  height: var(--height);
  width: 100%;
  transform-style: preserve-3d;
  transform-origin: right center;
  position: relative;
  transform: rotateY(3deg);
  @include min(lg) {
    // --height: 466px;} @include max(bg)  {
    // --height: 328px;
  }
  @include max(bg) {
    --height: #{vw1024(541)};
  }
  @include max(sm) {
    // --height: 250px;
    --height: #{vw768(411)};
  }
  @include max(xs) {
    // --height: 193px;
    // --height: #{vw375(317)};
    --height: 31.7rem;
  }
}
.slide {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  // overflow: hidden;
  outline: 1px solid var(--color-dark);
  @include max(xs) {
    position: relative;
    left: unset;
    top: unset;
    // overflow: visible;
  }
}
.slide > a {
  display: block;
  width: 100%;
  height: 100%;
}

// image
.slide__image {
  --width: #{vw1440(308)};
  width: var(--width);
  height: var(--height);
  overflow: hidden;
  position: relative;
  @include min(lg) {
    // --width: 590px;
  }
  @include max(bg) {
    // --width: 416px;
    --width: #{vw1024(416)};
  }
  @include max(sm) {
    // --width: 316px;
    --width: #{vw768(316)};
  }
  @include max(xs) {
    // --width: 244px;
    // --width: #{vw375(244)};
    width: 24.4rem;
    border: 1px solid var(--color-dark);
    clip-path: polygon(0% 6%, 100% 0%, 100% 100%, 0% 94%);
  }
}

.slide__image:after,
.slide__image:before {
  content: '';
  display: block;
  position: absolute;
  left: -1px;
  width: 110%;
  height: 6%;
  background-color: var(--color-dark);
  z-index: 10;
  @include max(xs) {
    display: none;
  }
}
.slide__image:before {
  transform-origin: left bottom;
  top: -1px;
  transform: rotateZ(-4deg);
}
.slide__image:after {
  transform-origin: left top;
  bottom: -1px;
  transform: rotateZ(4deg);
}

.slide__image > img {
  display: block;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  position: absolute;
  left: -1px;
  top: -1px;
  object-fit: cover;
  z-index: 0;
  transition: 0.8s ease-in-out;
}
.slide__image-cover {
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
  z-index: 5;
}

// title

.slide__title {
  transform: rotateZ(4deg);
  position: relative;
  z-index: 10;
  overflow: hidden;
  color: var(--color-fade-light);
}
.slide__title:after {
  content: '';
  position: absolute;
  left: -1px;
  bottom: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-color: var(--color-dark);
  transition: 0.8s ease-in-out;
  @include max(bg) {
    display: none;
  }
}

// hover
@media (hover: hover) {
  .slide > a:hover .slide__title:after {
    transform: translateY(-100%);
  }
  .slide > a:hover .slide__image > img {
    transform: scale(1.1);
  }
}

// swiper

.swiper-wrapper {
  @include max(xs) {
    display: flex;
    flex-wrap: nowrap;
    width: max-content;
  }
}
.swiper-slide {
  @include max(xs) {
    padding: 0;
    margin: 0;
  }
}

.slide__button {
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 19;
  display: flex;
  align-items: center;
}
.slide__button-icon {
  display: block;
  margin-left: 0.8rem;
  transition: var(--transition-300);
  @include min(lg) {
    width: 8.1rem;
    height: 8.1rem;
  }
  @include max(sm) {
    width: 4.5rem;
    height: 4.5rem;
  }
}
.slide__button-text{
  color: #FFF;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
}
.slide__button:hover .slide__button-icon{
  transform: scale(1.1);
}
