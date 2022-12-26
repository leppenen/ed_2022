<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue'
import test3a from '../assets/files/tasks/test3a.pdf'
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
      :href='test3a'
      :target='"_blank"'
    >
      Решение контрольной №3
    </LinkWrapper>
    <div :class='$style.heading'>Критерии оценивания:</div>
    <div :class='$style.task'>
      <div :class='$style.taskName'>Задача 1:</div>
      <ol type='a'>
        <li>Получен амплитудный коэффициент прохождения через всю структуру (2 балла)</li>
        <li>Получено условие на максимум с учетом фазы коэффициентов отражения (2 балла) -- если про фазы ничего не сказано (1 балл)</li>
        <li>Получено выражения для модуля через t и r (2 балла)</li>
        <li>Ответ упрощен с учетом условий |t_{1,2}|&#60;&#60;1 (2 балла)</li>
      </ol>
    </div>
    <div :class='$style.task'>
      <div :class='$style.taskName'>Задача 2:</div>
      <ol type='a'>
        <li>Получена матрица переноса через слой с ямой (2 балла)</li>
        <li>Верно получены r и t в резонансе для одной ямы (по 1 баллу)</li>
        <li>Получены выражения для r и t для структуры из двух ям (по 1 баллу)</li>
        <li>Верно получены r и t в резонансе для двух ям (по 1 баллу)</li>
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
