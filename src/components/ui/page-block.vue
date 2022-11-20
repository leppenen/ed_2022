<script lang='ts' setup>
import chevron from '@/assets/images/chevron.svg'
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  canCollapse: {
    type: Boolean,
    default: false
  },
  isInitiallyShown: {
    type: Boolean,
    default: false
  },
})

const isShown = ref(props.canCollapse ? props.isInitiallyShown : true)

function toggleShown() {
  if (!props.canCollapse) return

  isShown.value = !isShown.value
}
</script>

<template>
  <div :class=$style.pageBlock>
    <button
      @click='toggleShown'
      :class='[$style.heading, canCollapse ? $style.clickable : undefined]'
      :disabled='!canCollapse'
    >
      {{ title }}
      <img
        v-if='canCollapse'
        :class='[$style.chevron, isShown ? undefined : $style.rotated]'
        :src='chevron'
      >
  </button>
    <div
      v-show='isShown'
      :class='$style.blockContent'
    >
      <slot></slot>
    </div>
  </div>
</template>

<style module>
.pageBlock {
  width: 100%;
  box-sizing: border-box;
}
.heading {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 2rem;
  font-weight: bold;
}
.chevron {
  width: 0.6em;
  cursor: pointer;
}
.clickable {
  cursor: pointer;
}
.rotated {
  transform: rotate(180deg);
}
.blockContent {
  margin-top: 20px;
}
</style>