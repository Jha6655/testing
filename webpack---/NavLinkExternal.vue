<template>
  <NavLink :is-external="true" :link="link" :text="text" />
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '/',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
