<script setup lang='ts'>
import LinkWrapper from "./link-wrapper.vue";
import BadgeWrapper from "./badge-wrapper.vue";
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
      <BadgeWrapper>
        {{ exerciseType }}
      </BadgeWrapper>
        <LinkWrapper
        :href='`mailto:${email}`'
        target='_blank'
        >
        {{email}}
      </LinkWrapper>
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
    gap: 4px;
  }
  @media screen and (max-width: 600px) {
    .teacherCard {
      gap: 10px;
    }
    .avatar {
      width: 60px;
      height: 90px;
    }
  }
</style>