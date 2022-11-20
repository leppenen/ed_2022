<script setup lang='ts'>import { ref } from 'vue';
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

const tooltipDuration = 1000
const isTooltipShown = ref(false)
let timeoutId: null | number = null

function handleClick() {
  navigator.clipboard.writeText(props.text)
  showTooltip()
}

function showTooltip() {
  isTooltipShown.value = true

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    isTooltipShown.value = false
    timeoutId = null
  }, tooltipDuration)
}
</script>

<template>
  <span :class=$style.copiedText>
    <span
      :class="$style.text"
      @click='handleClick'
    >
      {{ text }}
    </span>
    <div
      v-show='isTooltipShown'
      :class=$style.tooltip
    >
      Скопировано
    </div>
  </span>
</template>

<style module>
  .copiedText {
    position: relative;
  }
  .copyIcon {
    width: 0.8em;
  }
  .copyIcon:hover {
    cursor: pointer;
  }
  .text {
    border-bottom: 1px dashed var(--textSecondary);
  }
  .text:hover {
    cursor: pointer;
    color: var(--textSecondary);
  }
  .tooltip {
    position: absolute;
    padding: 4px 8px;
    top: -2em;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.4em;
    min-width: max-content;
    box-sizing: border-box;
    background-color: var(--textPrimary);
    color: var(--bgPrimary);
  }
</style>