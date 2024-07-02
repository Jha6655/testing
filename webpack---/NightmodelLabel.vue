<template>
  <div class="nightmode-label">
    <svg
      width="35"
      height="75"
      viewBox="0 0 35 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="nightmode-label__icon"
    >
      <path
        opacity="0.3"
        d="M35 72L30.1455 68.8748L29.8662 74.6415L35 72ZM35 3L29.8221 0.446117L30.1993 6.20728L35 3ZM30.5539 71.2847C20.7118 70.305 13.4635 66.05 8.66893 59.9053C3.86743 53.7518 1.5 45.6676 1.5 37H0.5C0.5 45.8421 2.91483 54.1565 7.88054 60.5205C12.8532 66.8933 20.357 71.2746 30.4548 72.2798L30.5539 71.2847ZM1.5 37C1.5 19.9994 14.1641 5.95586 30.573 3.78986L30.4421 2.79846C13.5424 5.02925 0.5 19.4911 0.5 37H1.5Z"
        fill="#101011"
      />
    </svg>
    <p class="nightmode-label__text p2">Switch Day 'N' Night</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nightmode-label {
  position: relative;
  transform: translateX(-150%);
}

// icon

.nightmode-label__icon {
  height: auto;
  @include min(lg) {
    width: 4.7rem;
  }
  @include max(sm) {
    width: 5rem;
  }
  @include max(xs) {
    width: 4rem;
  }
}

// text

.nightmode-label__text {
  --color: var(--color-dark);
  position: absolute;
  left: calc(100% + 0.6rem);
  bottom: -0.6rem;
  width: max-content;
  color: var(--color);
}

// night mode

.night-mode .nightmode-label__text {
  --color: var(--color-light);
}

.night-mode .nightmode-label__icon path {
  fill: #ffffff;
}
</style>
