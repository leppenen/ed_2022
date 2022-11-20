<script setup lang='ts'>
import {scrollToTarget} from '@/helpers'

const props = defineProps({
  target: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    :class='$style.navigationItem'
    @click='scrollToTarget(props.target)'
  >
    {{ title }}
  </button>
</template>

<style module>
.navigationItem:hover {
  color: var(--textSecondary);
  cursor: pointer;
}
</style>