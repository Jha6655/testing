<template>
  <div ref="slider" class="slider swiper">
    <div ref="wrapper" class="slider__wrapper swiper-wrapper">
      <div
        v-for="(slide, index) in doubledProjects"
        :key="slide.id + index"
        class="slide swiper-slide"
      >
        <a
          :href="slide.file ? $config.apiUrl + slide.file : slide.link"
          target="_blank"
        >
          <div class="slide__image">
            <img :src="$config.apiUrl + slide.photo" :alt="slide.name" />
            <div class="slide__image-cover"></div>
          </div>
          <p class="slide__title p2">
            {{ slide.name }}
          </p>
        </a>
        <button v-if="slide.iframe" class="slide__button" @click="() => openPopup(slide.iframe)">
          <span class="slide__button-text">Video</span>
          <svg class="slide__button-icon" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="33.2072" cy="32.4625" r="30.6393" transform="rotate(-2 33.2072 32.4625)" fill="white"/>
            <path d="M29.2007 39.976L28.6864 25.2471L42.8973 32.1243L29.2007 39.976Z" fill="#101011"/>
          </svg>


        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Slider from '~/plugins/SliderJS'
export default {
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      slider: null,
      swiper: null,
    }
  },
  computed: {
    doubledProjects() {
      return [...this.projects, ...this.projects]
    },
  },
  async mounted() {
    await this.$nextTick()
    if (window.innerWidth >= 768) {
      this.initSlider()
    } else {
      this.initSwiper()
    }
  },
  beforeDestroy() {
    this.slider && this.slider.destroy()
    this.swiper && this.swiper.destroy()
  },
  methods: {
    ...mapMutations(['setIframe']),
    initSlider() {
      this.slider = new Slider(
        this.$refs.slider,
        this.$refs.wrapper,
        this.$refs.wrapper.querySelectorAll('.slide'),
        this.$gsap
      )
    },
    initSwiper() {
      this.swiper = new this.$swiper(this.$refs.slider, {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        loopedSlides: 8,
        centeredSlides: true,
      })
    },
    openPopup(iframe) {
      this.setIframe(iframe)
    }
  },
}
</script>

<style lang="scss" scoped>
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
</style>
