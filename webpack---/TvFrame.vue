<template>
  <div class="frame">
    <img class="frame" src="/img/frame.png" alt="frame" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.frame {
  --offset: 0;
  opacity: 0.85;
  position: fixed;
  left: var(--offset);
  top: var(--offset);
  bottom: var(--offset);
  right: var(--offset);
  z-index: 10;
  pointer-events: none;
  // border: 40px solid var(--color-dark);
  @include max(xs) {
    --offset: -5px;
  }
}
.frame:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  // border: 20px solid var(--color-dark);
  background: linear-gradient(
      to left,
      transparent,
      transparent 95%,
      var(--color-dark) 98%,
      var(--color-dark)
    ),
    linear-gradient(
      to top,
      transparent,
      transparent 95%,
      var(--color-dark) 98%,
      var(--color-dark)
    ),
    linear-gradient(
      to bottom,
      transparent,
      transparent 95%,
      var(--color-dark) 98%,
      var(--color-dark)
    ),
    linear-gradient(
      to right,
      transparent,
      transparent 95%,
      var(--color-dark) 98%,
      var(--color-dark)
    );
}
.frame > img {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: center;
}
</style>
