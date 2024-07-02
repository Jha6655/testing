@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';































































































.cta-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  --border-radius: 5.4rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
  padding: 0 2.2rem;
  margin: 0;
  height: 4rem;
  @include min(lg) {
    height: 5rem;
    padding: 0 2.2rem;
  }
  @include max(xs) {
    padding: 0 3.2rem;
  }
}
.cta-button__border {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-light);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.cta-button__cover {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  border-radius: var(--border-radius);
  background-color: var(--color-light);
  transition: var(--transition-300);
}
.cta-button__text {
  mix-blend-mode: difference;
  display: inline-block;
  position: relative;
  top: -0.1rem;
}

// hover

.cta-button:hover .cta-button__cover {
  @include min(md) {
    width: 100%;
  }
}
