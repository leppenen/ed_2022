<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue'
import test2a from '../assets/files/tasks/test2a.pdf'
import file from '../assets/images/file.svg'
import LinkWrapper from './ui/link-wrapper.vue';
</script>

<template>
  <PageBlock
    title='Новости'
  Последняя лекция курса — 19 декабря в 16:00.
  Контрольная работа по третьей части курса состоится 20 декабря в 12:00
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
</style>
