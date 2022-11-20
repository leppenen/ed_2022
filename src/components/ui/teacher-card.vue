<script setup lang='ts'>
import LinkWrapper from "./link-wrapper.vue";
import Badge from "./badge.vue";
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
    }
  })
</script>

<template>
  <div :class=$style.teacherCard>
    <slot></slot>
    <div :class=$style.teacherInfo>
      <div>
        {{ fullName }}
      </div>
      <Badge>
        {{ exerciseType }}
      </Badge>
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
    gap: 20px;
  }
  .teacherInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 280px;
    gap: 6px;
  }
  @media screen and (max-width: 600px) {
    .teacherCard {
      gap: 10px;
    }
  }
</style>