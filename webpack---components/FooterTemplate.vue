.footer {
  width: 100vw;
  padding-left: 40px;
  padding-right: 40px;
}
@media (max-width: 767px) {
  .footer {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.footer {
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 10;
}
@media screen and (min-width: 1920px) {
  .footer {
    padding-top: 3.2rem;
  }
}
@media screen and (max-width: 1439px) {
  .footer {
    padding-top: 2.4rem;
  }
}
@media screen and (max-width: 1023px) {
  .footer {
    padding-top: 2.4rem;
  }
}
@media screen and (max-width: 767px) {
  .footer {
    padding-top: 2.4rem;
  }
}
@media screen and (min-width: 1920px) {
  .footer {
    padding-bottom: 3.2rem;
  }
}
@media screen and (max-width: 1439px) {
  .footer {
    padding-bottom: 2.4rem;
  }
}
@media screen and (max-width: 1023px) {
  .footer {
    padding-bottom: 2.4rem;
  }
}
@media screen and (max-width: 767px) {
  .footer {
    padding-bottom: 2.4rem;
  }
}
@media (max-width: 767px) {
  .footer {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
  }
}

.footer__left-1,
.footer__left-2,
.footer__right {
  display: flex;
  align-items: center;
}

.footer__left-1 {
  grid-column: 1/2;
}
@media (min-width: 1024px) {
  .footer__left-1 {
    transform-origin: right bottom;
    --skew: 1deg;
    --rotate: -5deg;
    --y: -5px;
    transform: perspective(500px);
  }
}

.footer__left-2 {
  grid-column: 1/2;
  margin-left: 3.2rem;
}
@media (min-width: 1024px) {
  .footer__left-2 {
    transform-origin: right bottom;
    --skew: 0.5deg;
    --rotate: -5deg;
    --y: 0px;
    transform: perspective(500px);
  }
}
@media (min-width: 1920px) {
  .footer__left-2 {
    margin-left: 6.4rem;
  }
}
@media (max-width: 1439px) {
  .footer__left-2 {
    margin-left: 2.4rem;
  }
}
@media (max-width: 1023px) {
  .footer__left-2 {
    margin-left: 2.8rem;
  }
}
@media (max-width: 767px) {
  .footer__left-2 {
    grid-column: 3/4;
    margin-left: auto;
  }
}

.footer__dots {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 1439px) {
  .footer__dots {
    margin-top: 0.2rem;
  }
}
@media (max-width: 1023px) {
  .footer__dots {
    display: none;
  }
}

.footer__right {
  margin-left: auto;
  display: flex;
}
@media (max-width: 767px) {
  .footer__right {
    grid-column: 1/-1;
    margin-top: 2.4rem;
    padding-top: 2.4rem;
    margin-left: unset;
    position: relative;
    justify-content: center;
  }
}

.footer__right-border--mobile {
  display: none;
}
@media (max-width: 767px) {
  .footer__right-border--mobile {
    display: block;
    position: absolute;
    top: 0;
    left: var(--container-padding-mobile-negative);
    width: 100vw;
    height: 1px;
    background-color: var(--color-fade-light);
  }
}