<template>
  <div ref="block" class="idea-block__arrow">
    <svg
      width="6"
      height="204"
      viewBox="0 0 6 204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00001 204L5.88676 199L0.113257 199L3.00001 204ZM2.5 2.18557e-08L2.50001 199.5L3.50001 199.5L3.5 -2.18557e-08L2.5 2.18557e-08Z"
        fill="#383838"
      />
    </svg>
  </div>
</template>

<script>
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
export default {
  mixins: [AnimationsControlMixin],
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const { block } = this.$refs
      const tl = this.$gsap
        .timeline({
          scrollTrigger: {
            trigger: block,
          },
        })
        .from(block, {
          height: 0,
          duration: 1,
          clearProps: 'all',
        })

      this.timelines.push(tl)
    },
  },
}
</script>

<style lang="scss" scoped>
.idea-block__arrow {
  position: absolute;
  left: 0;
  top: 0;
  height: 18.4rem;
  width: 100%;
  overflow: hidden;
  @include min(lg) {
    height: 20.4rem;
  }
  @include max(bg) {
    height: 11.6rem;
  }
  @include max(sm) {
    height: 10.9rem;
  }
  @include max(xs) {
    height: 8.3rem;
  }
}
.idea-block__arrow > svg {
  display: block;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
</style>
