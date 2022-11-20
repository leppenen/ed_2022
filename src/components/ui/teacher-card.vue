<script setup lang='ts'>
import LinkWrapper from "./link-wrapper.vue";
import CopyText from "./copy-text.vue";

defineProps({
    fullName: {
      type: String,
      required: true,
    },
    exerciseType: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    graduated: {
      type: Object,
      default: () => ({})
    },
    avatarSrc: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div :class=$style.teacherCard>
    <div :class='$style.avatarWrapper'>
      <img
        :class='$style.avatar'
        :src='avatarSrc'
        :alt='fullName'
      >
      <div :class='$style.avatarCaption'>
        {{ exerciseType }}
      </div>
    </div>
    <div :class=$style.teacherInfo>
      <div>
        {{ fullName }}
      </div>
      <CopyText :text="email" />
      <LinkWrapper
        :href=graduated.link
        target='_blank'
      >
        {{graduated.title}}
      </LinkWrapper>
    </div>
  </div>
</template>

<style module>
.teacherCard {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 16px;
}
.teacherInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;
  gap: 8px;
}
.avatarWrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  object-fit: cover;
  width: 120px;
  height: 100px;
}
.avatarCaption {
  width: 100%;
  background: var(--bgSecondary);
  text-align: center;
  padding: 4px;
}
</style>