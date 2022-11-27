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
    rel='noreferrer'
  >
    <slot></slot>
  </a>
</template>

<style module>
.link {
  text-decoration: underline;
  color: inherit;
  width: fit-content;
  position: relative;
}

.link:hover {
  color: var(--textSecondary);
}
</style>