<template>
  <p class="number-label p2">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
