<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue'
import test2a from '../assets/files/tasks/test2a.pdf'
import file from '../assets/images/file.svg'
import LinkWrapper from './ui/link-wrapper.vue';
</script>

<template>
  <PageBlock
    title='Новости'
  >
    <span>
      <img
        :class='$style.file'
        :src='file'
      >&nbsp;
    </span><LinkWrapper
      :href='test2a'
      :target='"_blank"'
    >
      Решение контрольной №2
    </LinkWrapper>
    <div :class='$style.heading'>Критерии оценивания:</div>
    <div :class='$style.task'>
      <div :class='$style.taskName'>1 задача:</div>
      <ol type='a'>
        <li>Найдены показатели преломления (по 2 балла за каждую поляризацию)</li>
        <li>Найдены условия отсутствия отражения (по 3 балла за каждую поляризацию)</li>
      </ol>
    </div>
    <div :class='$style.task'>
      <div :class='$style.taskName'>2 задача:</div>
      <ol type='a'>
        <li>Поле E в СО пластинки (2 балла)</li>
        <li>Поляризация P в СО пластинки (2 балла)</li>
        <li>E в СО пластинки (1 балла)</li>
        <li>E в лабораторной СО/ матрица поворорта для матрицы плотности (2 балла)</li>
        <li>Параметры Стокса (по баллу за каждый)</li>
      </ol>
    </div>
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
