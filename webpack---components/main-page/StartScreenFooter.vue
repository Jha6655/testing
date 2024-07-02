.start-screen__footer {
  width: 100vw;
  padding-left: 40px;
  padding-right: 40px;
}
@media (max-width: 767px) {
  .start-screen__footer {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.start-screen__footer {
  --color: var(--color-dark);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 2.4rem;
}
@media screen and (min-width: 1920px) {
  .start-screen__footer {
    padding-bottom: 3.2rem;
  }
}
@media screen and (max-width: 1439px) {
  .start-screen__footer {
    padding-bottom: 2.4rem;
  }
}
@media screen and (max-width: 1023px) {
  .start-screen__footer {
    padding-bottom: 2.4rem;
  }
}
@media screen and (max-width: 767px) {
  .start-screen__footer {
    padding-bottom: 2.4rem;
  }
}

.start-screen__footer-left {
  max-width: 35.8rem;
  color: var(--color);
}

.start-screen__footer-center {
  color: var(--color);
  position: absolute;
  left: 50%;
  bottom: 2.4rem;
  transform: translateX(-50%);
}
@media screen and (min-width: 1920px) {
  .start-screen__footer-center {
    bottom: 3.2rem;
  }
}
@media screen and (max-width: 1439px) {
  .start-screen__footer-center {
    bottom: 2.4rem;
  }
}
@media screen and (max-width: 1023px) {
  .start-screen__footer-center {
    bottom: 2.4rem;
  }
}
@media screen and (max-width: 767px) {
  .start-screen__footer-center {
    bottom: 2.4rem;
  }
}
@media (max-width: 1023px) {
  .start-screen__footer-center {
    bottom: 11.8rem;
  }
}

@media (max-width: 767px) {
  .start-screen__footer-right {
    display: none;
  }
}

.night-mode .start-screen__footer {
  --color: var(--color-light);
}