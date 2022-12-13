<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue'
</script>

<template>
  <PageBlock
    title='Новости'
  >
    <p>Последняя лекция курса — 19 декабря в 16:00</p>
    <p>Контрольная работа по третьей части курса состоится 20 декабря в <span :class='$style.highlighted'>12:00</span></p>
  </PageBlock>
</template>

<style module>
.file {
  width: 0.8rem;
  height: 0.8rem;
}
.taskName {
  margin-top: 12px;
  font-size: 20px;
}
.heading {
  margin-top: 12px;
  font-size: 20px;
}
.task > ol {
  padding-left: 24px;
}
.highlighted {
  color: var(--textSecondary);
}
</style>
