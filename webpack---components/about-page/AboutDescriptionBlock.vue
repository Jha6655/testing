.description-block {
  --padding: var(--container-padding);
  padding-left: var(--padding);
  padding-right: var(--padding);
}
.description-block {
  padding-left: 9.7rem;
  display: flex;
}
@media (min-width: 1920px) {
  .description-block {
    padding-left: 6.09375vw;
  }
}
@media (max-width: 1439px) {
  .description-block {
    padding-left: var(--container-padding);
  }
}
@media (max-width: 767px) {
  .description-block {
    display: block;
  }
}

.description-block__left {
  flex: 0 0 15.9rem;
  padding-top: 2.6rem;
}
@media (min-width: 1920px) {
  .description-block__left {
    flex-basis: 31rem;
    padding-top: 1.1rem;
  }
}
@media (max-width: 1439px) {
  .description-block__left {
    flex-basis: 16.1rem;
    padding-top: 0.8rem;
  }
}
@media (max-width: 1023px) {
  .description-block__left {
    flex-basis: 14.6rem;
  }
}
@media (max-width: 767px) {
  .description-block__left {
    padding-top: 0;
    flex-basis: unset;
  }
}

.description-block__title-wrapper {
  position: relative;
}
@media (max-width: 767px) {
  .description-block__title-wrapper {
    margin-top: 2.4rem;
  }
}

.description-block__text {
  margin-top: 2.4rem;
  color: var(--color-fade-light);
}
@media screen and (min-width: 1920px) {
  .description-block__text {
    margin-top: 3.2rem;
  }
}
@media screen and (max-width: 1439px) {
  .description-block__text {
    margin-top: 2.4rem;
  }
}
@media screen and (max-width: 1023px) {
  .description-block__text {
    margin-top: 2.4rem;
  }
}
@media screen and (max-width: 767px) {
  .description-block__text {
    margin-top: 2.4rem;
  }
}