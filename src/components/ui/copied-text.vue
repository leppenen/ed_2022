<script setup lang='ts'>import { ref } from 'vue';
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

const notificationDuration = 1000
const isPopupShown = ref(false)

function whenCopyClick() {
  navigator.clipboard.writeText(props.text)
  showPopup()
}

function showPopup() {
  isPopupShown.value = true

  setTimeout(() => {
    isPopupShown.value = false
  }, notificationDuration)
}
</script>

<template>
  <span :class=$style.copiedText>
    <span
      :class="$style.text"
      @click='whenCopyClick'
    >
      {{ text }}
    </span>
    <div
      v-show='isPopupShown'
      :class=$style.popup
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
    border-bottom: 2px dashed var(--textSecondary);
  }
  .text:hover {
    cursor: pointer;
    color: var(--textSecondary);
  }
  .popup {
    position: absolute;
    padding: 0.4em 0.8em;
    bottom: 1.4em;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.4em;
    min-width: max-content;
    box-sizing: border-box;
    background-color: var(--textPrimary);
    color: var(--bgPrimary);
  }
</style>