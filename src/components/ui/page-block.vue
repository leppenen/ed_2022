<template>
  <div :class=$style.pageBlock>
    <h1 :class=$style.heading>
      <slot name='heading'></slot>
    </h1>
    <div :class=$style.main>
      <slot></slot>
    </div>
  </div>
</template>

<style module>
.pageBlock {
  width: 100%;
  box-sizing: border-box;
  /* Необходимо для правильного отрабатывания якорной ссылки  */
  padding-top: 55px;
  margin-top: -55px;
}
.heading {
  text-transform: uppercase;
}
</style>