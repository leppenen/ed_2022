<template>
  <div :class=$style.paddedPage>
    <header :class=$style.header>
      <slot name='header'></slot>
    </header>
    <main :class=$style.main>
      <slot></slot>
    </main>
    <footer>
      <slot name='footer'></slot>
    </footer>
  </div>
</template>

<style module>
.header{
  padding: 20px 40px;

  z-index: 99;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  top: 0;
  box-sizing: border-box;
  width: 100%;
  background: var(--bgSecondary);
  max-width: var(--tabletUpperBoundary);
}
.paddedPage {
  background: var(--bgPrimary);
  min-height: 100vh;
  box-sizing: border-box;
}
.main {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: var(--tabletUpperBoundary);
  padding: 100px 40px;
}
@media screen and (min-width: 1200px) {
  .header {
    border-radius: 0 0 30px 30px;
  }
}
@media screen and (max-width: 1200px) {
  .header {
    padding: 20px;
  }
  .main {
    padding: 80px 20px;
  }
}
</style>