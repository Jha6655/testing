<template>
  <span class="switcher-icon">
    <span class="switcher-icon__shadow"></span>
    <span class="switcher-icon__body">
      <span class="switcher-icon__marker"></span>
    </span>
  </span>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.switcher-icon {
  --size: 2.4rem;
  display: block;
  position: relative;
  width: var(--size);
  height: var(--size);

  border-radius: 50%;
  @include min(lg) {
    --size: 2.8rem;
  }
}

.switcher-icon__body {
  // --bg-color: var(--color-gray);
  // --bg-color: #494949;

  --bg-color: #717172;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-color);
  transition: transform 0.5s ease-in-out;
  transform-origin: center center;
}

.switcher-icon__shadow {
  // --shadow: -2.59048px -2.59048px 7.85333px rgba(37, 37, 37, 0.4),
  //   2.59048px 2.59048px 5.18095px rgba(63, 63, 63, 0.5);

  --shadow: -2.59048px -2.59048px 7.85333px rgba(146, 146, 146, 0.4),
    2.59048px 2.59048px 5.18095px rgba(81, 81, 81, 0.5);
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow);
}
.switcher-icon__marker {
  --size: 0.4rem;
  // --bg-color: #2b2b2b;
  // --shadow: inset -0.114286px -0.2px 0.228571px rgba(255, 255, 255, 0.5),
  //   inset 0.114286px 0.114286px 0.228571px rgba(128, 128, 128, 0.5);

  --bg-color: #2b2b2b;
  --shadow: inset -0.114286px -0.2px 0.228571px rgba(255, 255, 255, 0.5),
    inset 0.114286px 0.114286px 0.228571px rgba(128, 128, 128, 0.5);

  display: block;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: var(--size);
  height: var(--size);
  background: var(--bg-color);
  box-shadow: var(--shadow);
  border-radius: 50%;
  @include min(lg) {
    --size: 0.5rem;
    left: 1.7rem;
    top: 1.7rem;
  }
}
.link-switcher:hover .switcher-icon__body {
  @include min(md) {
    transform: rotate(90deg);
  }
}

// night mode

.night-mode:not(.faq-opened) .switcher-icon__body {
  --bg-color: #303030;
}

.night-mode:not(.faq-opened) .switcher-icon__shadow {
  --shadow: -2.59048px -2.59048px 7.85333px rgba(0, 0, 0, 0.4),
    2.59048px 2.59048px 5.18095px rgba(39, 39, 39, 0.5);
}

.night-mode:not(.faq-opened) .switcher-icon__marker {
  --bg-color: #1f1f1f;
  --shadow: inset -0.114286px -0.2px 0.228571px rgba(160, 160, 160, 0.5),
    inset 0.114286px 0.114286px 0.228571px rgba(91, 91, 91, 0.5);
}
</style>
