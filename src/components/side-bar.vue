<script setup lang='ts'>
import LinkWrapper from '@/components/ui/link-wrapper.vue';
import NavigationLinks from './navigation-links.vue';
defineProps({
  isShown: {
    type: Boolean,
    required: true
  }
})
defineEmits(['close'])
</script>

<template>
  <div
    v-show="isShown"
    :class="$style.sideBar"
  >
    <div :class=$style.closeIconWrapper>
      <img
        @click="$emit('close')"
        :class=$style.closeIcon
        src='@/assets/images/cross.svg'
      >
    </div>
    <div :class=$style.content>
      <NavigationLinks />
    </div>
  </div>
</template>

<style module>
  .hidden {
    display: none;
  }
  .sideBar {
    padding: 20px;
    box-sizing: border-box;
    z-index: 100;
    background: var(--bgSidebar);
    height: 100vh;
    width: 100%;
    max-width: 400px;
    position: fixed;
    top: 0;
    right: 0;
  }

  .closeIconWrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .closeIcon {
    width: 20px;
    transform: scale(2);
  }
  .closeIcon:hover {
    cursor: pointer;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
</style>