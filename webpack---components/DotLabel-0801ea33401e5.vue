@import '../assets/scss/utils/breakpoints';
@import '../assets/scss/utils/vars';
@import '../assets/scss/utils/placeholders';
@import '../assets/scss/utils/functions';
@import '../assets/scss/utils/mixins';

















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
