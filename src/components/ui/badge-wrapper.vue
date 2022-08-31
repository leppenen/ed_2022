<template>
  <span :class=$style.badge>
    <slot></slot>
  </span>
</template>

<style module>
.badge {
  padding: 0.1em 0.6em;
  width: fit-content;
  box-sizing: border-box;
  background: var(--bgSecondary);
  border-radius: 2em;
}
</style>