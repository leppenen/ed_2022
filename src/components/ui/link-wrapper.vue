<script setup lang='ts'>
  defineProps({
    href: String,
    target: String
  })
</script>

<template>
  <a
    :class=$style.link
    :href='href'
    :target='target'
  >
    <slot></slot>
  </a>
</template>

<style module>
.link {
  text-decoration-color: var(--textSecondary);
  color: inherit;
  width: fit-content;
}
.link:hover {
  text-shadow: 0 0 4px;
}
</style>