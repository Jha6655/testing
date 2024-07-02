<template>
  <footer class="start-screen__footer">
    <div class="start-screen__footer-left p2">
      // Positioned at the axis of talent and content across film
    </div>
    <div class="start-screen__footer-center">
      <StartScreenFooterScrolldown />
    </div>
    <div class="start-screen__footer-right">
      <TheClock />
    </div>
  </footer>
</template>

<script>
import StartScreenFooterScrolldown from './StartScreenFooterScrolldown.vue'
import TheClock from '@/components/TheClock.vue'
export default {
  components: {
    StartScreenFooterScrolldown,
    TheClock,
  },
}
</script>

<style lang="scss" scoped>
.start-screen__footer {
  --color: var(--color-dark);
  @extend %container;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  @include offset-media(padding-bottom, darkgreen);
}
.start-screen__footer-left {
  max-width: 35.8rem;
  color: var(--color);
}
.start-screen__footer-center {
  color: var(--color);
  position: absolute;
  left: 50%;
  @include offset-media(bottom, darkgreen);
  transform: translateX(-50%);
  @include max(sm) {
    bottom: 11.8rem;
  }
}

.start-screen__footer-right {
  @include max(xs) {
    display: none;
  }
}

// night mode {
.night-mode .start-screen__footer {
  --color: var(--color-light);
}
</style>
