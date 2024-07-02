.start-header {
  width: 100vw;
  padding-left: 40px;
  padding-right: 40px;
}
@media (max-width: 767px) {
  .start-header {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.start-header {
  pointer-events: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 1000;
  padding-top: 2.4rem;
  display: flex;
  justify-content: space-between;
}
@media screen and (min-width: 1920px) {
  .start-header {
    padding-top: 3.2rem;
  }
}
@media screen and (max-width: 1439px) {
  .start-header {
    padding-top: 2.4rem;
  }
}
@media screen and (max-width: 1023px) {
  .start-header {
    padding-top: 2.4rem;
  }
}
@media screen and (max-width: 767px) {
  .start-header {
    padding-top: 2.4rem;
  }
}

.start-header__logo {
  pointer-events: all;
  position: absolute;
  left: 50%;
  top: 2.7rem;
  transform: translateX(-50%);
  width: 2.5rem;
}
@media (min-width: 1920px) {
  .start-header__logo {
    top: 3.5rem;
    width: 3.3rem;
  }
}

.start-header__logo-image {
  width: 100%;
  display: block;
  height: auto;
  border: none;
  outline: none;
}

.start-header__dots {
  position: absolute;
  left: 50%;
  top: 3.3rem;
  transform: translateX(-50%);
}
@media (min-width: 1920px) {
  .start-header__dots {
    top: 4.3rem;
  }
}
@media (max-width: 767px) {
  .start-header__dots {
    display: none;
  }
}

.start-header__sound {
  pointer-events: all;
}