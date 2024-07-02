<template>
  <p class="dot-label p2">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style lang="scss" scoped>
.dot-label {
  display: flex;
  align-items: center;
  color: var(--color-fade-light);
}
.dot-label:before {
  content: '';
  display: block;
  --size: 0.7rem;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color-fade-light);
  margin-right: 0.7rem;
  margin-top: 0.2rem;
  @include min(lg) {
    --size: 0.9rem;
    margin-right: 0.8rem;
    margin-top: 0;
  }
  @include max(bg) {
    margin-top: 0.1rem;
  }
}
</style>
