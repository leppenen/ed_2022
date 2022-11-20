<template>
  <span :class=$style.badge>
    <slot></slot>
  </span>
</template>

<style module>
.badge {
  padding: 0.1em 0.3em;
  width: fit-content;
  box-sizing: border-box;
  background: var(--textPrimary);
  border-radius: 0.4em;
  color: var(--bgPrimary);
}
</style>